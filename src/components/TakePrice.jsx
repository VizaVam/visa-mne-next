"use client";

import { useState } from "react";
import Image from "next/image";
import { IMaskInput } from "react-imask";
import { countries } from "@/data/countries";
import Link from "next/link";

const FormBlock = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        country: "",
        purpose: "",
        visaLast3Years: true, // Default "Yes"
        peopleCount: "1", // Default "1"
        urgency: "Срочно (от 3х недель)", // Default "Urgent (from 3 weeks)"
        phone: "",
    });
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const steps = [
        "Выбор страны",
        "Цель поездки",
        "Наличие прошлых виз",
        "Количество человек",
        "Сроки",
        "Расчет",
    ];

    const excludedCountries1 = [
        "Рабочая виза в Польшу",
        "Деловая виза в Польшу",
        "Учебная виза в Польшу",
        "Гостевая виза в Польшу",
        "Виза по карте Поляка",
        "Рабочая виза в Болгарию",
        "Рабочая виза в Германию",
        "Рабочая виза в Испанию",
    ];

    const filteredCountries = countries.filter(
        (country) => !excludedCountries1.includes(country.name)
    );

    const purposes = ["Туризм", "Бизнес", "Обучение", "Работа", "Навестить родных/друзей"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prev) => ({ ...prev, visaLast3Years: e.target.checked }));
        setErrors((prev) => ({ ...prev, visaLast3Years: "" }));
    };

    const handlePhoneInput = (e) => {
        let { value } = e.target;
        if (value && !value.startsWith("+")) {
            value = "+" + value.replace(/\D/g, "");
        }
        setFormData((prev) => ({ ...prev, phone: value }));
        setErrors((prev) => ({ ...prev, phone: "" }));
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{3}\s\d{2}\s\d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phone);
    };

    const nextStep = () => {
        const newErrors = {};
        if (step === 1 && !formData.country) newErrors.country = "Выберите страну";
        if (step === 2 && !formData.purpose) newErrors.purpose = "Выберите цель поездки";
        if (step === 3 && formData.visaLast3Years === null)
            newErrors.visaLast3Years = "Укажите наличие виз";
        if (step === 4 && !formData.peopleCount)
            newErrors.peopleCount = "Выберите количество людей";
        if (step === 5 && !formData.urgency) newErrors.urgency = "Выберите срочность";
        if (step === 6 && (!formData.phone || !validatePhone(formData.phone)))
            newErrors.phone = "Введите корректный телефон";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        if (step < 6) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.country) newErrors.country = "Выберите страну";
        if (!formData.purpose) newErrors.purpose = "Выберите цель поездки";
        if (formData.visaLast3Years === null)
            newErrors.visaLast3Years = "Укажите наличие виз";
        if (!formData.peopleCount) newErrors.peopleCount = "Выберите количество людей";
        if (!formData.urgency) newErrors.urgency = "Выберите срочность";
        if (!formData.phone || !validatePhone(formData.phone))
            newErrors.phone = "Некорректный формат телефона";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // Форматирование номера телефона
            const formattedPhone = `+${formData.phone.replace(/\D/g, "")}`;

            // Создание текстового примечания (note)
            const noteText = `
            Страна - ${formData.country}
            Цель - ${formData.purpose}
            Прошлые визы - ${formData.visaLast3Years ? "Да" : "Нет"}
            Количество человек - ${formData.peopleCount}
            Сроки - ${formData.urgency}
        `.trim();

            // Подготовка данных в формате URLSearchParams
            const params = new URLSearchParams();
            params.append("source", "заявка с сайта visavampro.by");
            params.append("note", noteText); // Добавляем текстовое примечание
            params.append("u_phone", formattedPhone);

            console.log("Отправляемые данные (URLSearchParams):", params.toString());

            // Отправка запроса
            const response = await fetch(
                "https://api.u-on.ru/tCjYa5IOpS143s3V6w4j/lead/create.json",
                {
                    method: "POST",
                    mode: "no-cors", // Оставляем no-cors
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: params.toString(),
                }
            );

            // В режиме no-cors мы не можем надежно проверить response.ok или status
            // Но если запрос не завершился сетевой ошибкой, считаем его "успешным" для клиента
            console.log("Запрос отправлен. Статус (может быть ограничен no-cors):", response?.status); // response может быть opaque

            // Устанавливаем успех сразу после отправки, как в первом примере
            setIsSuccess(true);
            // Сброс или обработка успешного состояния
            resetForm(); // Вы можете вызвать сброс формы здесь, если нужно

        } catch (error) {
            // Этот блок catch сработает только при сетевых ошибках (например, DNS, CORS preflight fail)
            console.error("Ошибка отправки данных:", error);
            // Устанавливаем ошибку в состояние
            setErrors({ submit: "Произошла ошибка при отправке. Проверьте соединение и попробуйте снова." });
            setIsSuccess(false); // Явно устанавливаем неуспех
        } finally {
            // Если есть состояние загрузки, отключаем его
            // setIsSubmitting && setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setStep(1);
        setFormData({
            country: "",
            purpose: "",
            visaLast3Years: true,
            peopleCount: "1",
            urgency: "Срочно (от 3х недель)",
            phone: "",
        });
        setErrors({});
        setIsSuccess(false);
    };

    return (
        <div className="mx-auto px-[7%] pt-32 mdd:pt-20">
            <div className="bg-white">
                <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-2">
                    Рассчитать стоимость
                </h2>
                <p className="mb-6 mdd:text-[16px] sm:text-[20px] md:text-[20px] lg:text-[20px]">
                    Пройдите все шаги и{" "}
                    <span className={"text-orange-500 "}>
            получите расчет стоимости визы по своему запросу
          </span>
                </p>

                <div className="bg-[#FAFAFA] rounded-lg shadow-lg border py-6 px-8 mdd:py-4 mdd:px-3">
                    <div className="flex justify-between mb-8 mdd:mb-0 text-lg font-medium">
                        {steps.map((stepName, index) => (
                            <span
                                key={index}
                                className={`${
                                    index + 1 === step ? "text-orange-500" : "text-gray-500 mdd:hidden"
                                } ${index + 1 === step ? "mdd:block text-xl mdd:text-orange-500" : "mdd:hidden"}`}
                            >
                {stepName}
              </span>
                        ))}
                    </div>

                    {step === 1 && (
                        <div className="flex flex-col gap-5">
                            <label className="block font-medium">Какую страну хотите посетить?</label>
                            <div className="relative w-max mdd:w-full">
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="border border-blue-600 rounded-full py-2 pl-4 pr-10 w-max mdd:w-full text-[14px] text-gray-600 appearance-none bg-white"
                                >
                                    <option value="">Выберите страну из списка</option>
                                    {filteredCountries.map((country) => (
                                        <option key={country.name} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600">
                  <Image src="/arrowOp.svg" alt="Arrow" width={28} height={28} className="w-4" />
                </span>
                            </div>
                            {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="flex flex-col gap-5">
                            <label className="block font-medium">Основная цель Вашей поездки?</label>
                            <div className="relative w-max mdd:w-full">
                                <select
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleInputChange}
                                    className="border border-blue-600 rounded-full py-2 pl-4 pr-10 w-max mdd:w-full appearance-none text-[14px] text-gray-600"
                                >
                                    <option value="">Выберите цель из списка</option>
                                    {purposes.map((purpose) => (
                                        <option key={purpose} value={purpose}>
                                            {purpose}
                                        </option>
                                    ))}
                                </select>
                                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600">
                  <Image src="/arrowOp.svg" alt="Arrow" width={28} height={28} className="w-4" />
                </span>
                            </div>
                            {errors.purpose && <p className="text-red-500 text-xs">{errors.purpose}</p>}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="flex flex-col gap-5">
                            <label className="block font-medium">Визы за последние 3 года?</label>
                            <div className="flex mdd:justify-between gap-2">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, visaLast3Years: true })}
                                    className={`w-28 mdd:w-full py-2 rounded-full ${
                                        formData.visaLast3Years === true
                                            ? "bg-orange-500 text-white"
                                            : "bg-white text-black border border-blue-500"
                                    }`}
                                >
                                    Да
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, visaLast3Years: false })}
                                    className={`w-28 mdd:w-full py-2 rounded-full ${
                                        formData.visaLast3Years === false
                                            ? "bg-orange-500 text-white"
                                            : "bg-white text-black border border-blue-500"
                                    }`}
                                >
                                    Нет
                                </button>
                            </div>
                            {errors.visaLast3Years && (
                                <p className="text-red-500 text-xs text-center">{errors.visaLast3Years}</p>
                            )}
                        </div>
                    )}

                    {step === 4 && (
                        <div className="flex flex-col gap-5">
                            <label className="block font-medium">
                                Какое количество человек будет подавать документы?
                            </label>
                            <div className="mdd:hidden">
                                <div className="flex gap-2">
                                    {["1", "2", "3", "4", "4+"].map((count) => (
                                        <button
                                            key={count}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, peopleCount: count })}
                                            className={`w-28 py-2 rounded-full ${
                                                formData.peopleCount === count
                                                    ? "bg-orange-500 text-white"
                                                    : "bg-white text-black border border-blue-500"
                                            }`}
                                        >
                                            {count}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <div className="relative w-max mdd:w-full">
                                    <select
                                        name="peopleCount"
                                        value={formData.peopleCount}
                                        onChange={handleInputChange}
                                        className="border border-blue-600 rounded-full py-2 pl-4 pr-10 w-full text-[14px] text-gray-600 appearance-none focus:border-blue-700 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                                    >
                                        {["1", "2", "3", "4", "4+"].map((count) => (
                                            <option key={count} value={count}>
                                                {count}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-blue-600">
                    <Image src="/arrowOp.svg" alt="Arrow" width={28} height={28} className="w-4" />
                  </span>
                                </div>
                            </div>
                            {errors.peopleCount && (
                                <p className="text-red-500 text-xs text-center">{errors.peopleCount}</p>
                            )}
                        </div>
                    )}

                    {step === 5 && (
                        <div className="flex flex-col gap-5">
                            <label className="block font-medium">Срочно необходима виза?</label>
                            <div className="flex mdd:flex-col gap-2">
                                {["Срочно (от 3х недель)", "Не срочно (от 2 месяцев)"].map((urgency) => (
                                    <button
                                        key={urgency}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, urgency: urgency })}
                                        className={`px-8 py-2 rounded-full ${
                                            formData.urgency === urgency
                                                ? "bg-orange-500 text-white"
                                                : "bg-white text-black border border-blue-500"
                                        }`}
                                    >
                                        {urgency}
                                    </button>
                                ))}
                            </div>
                            {errors.urgency && (
                                <p className="text-red-500 text-xs text-center">{errors.urgency}</p>
                            )}
                        </div>
                    )}

                    {step === 6 && (
                        <div>
                            {isSuccess ? (
                                <div className="flex flex-col gap-5">
                                    <p className="text-[#15419E] font-medium">
                                        Ваша заявка принята! Менеджер свяжется с Вами в ближайшее время!
                                    </p>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-8 py-2 bg-[#15419E] text-white rounded-full w-max"
                                    >
                                        Рассчитать стоимость заново
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col">
                                    <label className="block font-medium mb-5">
                                        Ваш результат уже готов! Узнайте его, оставив свой номер телефона!
                                    </label>
                                    <div className="flex mdd:flex-col items-center gap-4 mb-1">
                                        <IMaskInput
                                            mask="+000 00 000-00-00"
                                            definitions={{ "0": { mask: /[0-9]/, placeholderChar: "_" } }}
                                            name="phone"
                                            placeholder="Телефон*"
                                            value={formData.phone || ""}
                                            onChange={handlePhoneInput}
                                            lazy={true}
                                            overwrite="shift"
                                            onFocus={(e) => {
                                                e.target.placeholder = "+___ __ ___-__-__";
                                            }}
                                            onBlur={(e) => {
                                                if (!e.target.value) {
                                                    e.target.placeholder = "Телефон*";
                                                }
                                            }}
                                            className={`border ${
                                                errors.phone ? "border-red-500" : "border-[#15419E]"
                                            } rounded-full py-2 px-4 w-max mdd:w-full text-[14px] text-gray-600`}
                                        />
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="px-8 py-2 bg-[#15419E] text-white rounded-full mdd:w-full"
                                        >
                                            Узнать стоимость
                                        </button>
                                    </div>
                                    <p className="text-sm mdd:text-center mt-2 text-gray-600">
                                        Нажимая кнопку, Вы соглашаетесь с{" "}
                                        <Link
                                            href="/Публичная%20оферта.%20Компания%20VISA%20VAM.pdf"
                                            className="text-[#F86F00] underline"
                                        >
                                            публичной офертой
                                        </Link>
                                    </p>
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs mdd:text-center">{errors.phone}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex mdd:flex-col sm:gap-6 mdd:gap-2 mt-20 mdd:mt-5">
                        <div className="mdd:hidden">
                            {step < 6 && step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="w-28 mdd:w-full py-2 border border-[#15419E] bg-white rounded-full"
                                >
                                    Назад
                                </button>
                            )}
                        </div>
                        {step < 6 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="w-28 mdd:w-full py-2 bg-[#15419E] text-white rounded-full"
                            >
                                Далее
                            </button>
                        )}
                        <div className="sm:hidden">
                            {step < 6 && step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="w-28 mdd:w-full py-2 border border-[#15419E] bg-white rounded-full"
                                >
                                    Назад
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormBlock;