'use client'

import {useState} from "react";
import {useModal} from "@/components/modalcontext";
import {IMaskInput} from "react-imask";
import {motion} from "framer-motion";

// Function to trigger Yandex Metrika reachGoal
const triggerYandexGoal = () => {
    if (typeof window.ym !== 'undefined') {
        window.ym(100438805, 'reachGoal', 'send_form');
        console.log('Yandex Metrika goal send_form triggered');
    } else {
        console.warn('Yandex Metrika not initialized');
    }
};

const Modal = () => {
    const [formData, setFormData] = useState({name: "", phone: "", email: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAgreed, setIsAgreed] = useState(true);
    const {isModalOpen, closeModal} = useModal();

    if (!isModalOpen) return null;

    const modalVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
        exit: {opacity: 0}
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{3}\s\d{2}\s\d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phone);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setErrors((prev) => ({...prev, [name]: ""}));
    };

    const handlePhoneInput = (e) => {
        let {value} = e.target;
        if (value && !value.startsWith('+')) {
            value = '+' + value.replace(/\D/g, '');
        }
        setFormData({...formData, phone: value});
        setErrors((prev) => ({...prev, phone: ""}));
    };

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
        setErrors((prev) => ({...prev, agreement: ""}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, phone, email} = formData;

        const newErrors = {};
        if (!name?.trim()) newErrors.name = "Поле обязательно к заполнению";
        if (!phone || !phone.trim()) {
            newErrors.phone = "Поле обязательно к заполнению";
        } else if (!validatePhone(phone)) {
            newErrors.phone = "Некорректный формат данных";
        }
        if (!isAgreed) newErrors.agreement = "Вы должны согласиться с офертой";

        // Проверка на запрещённый номер
        // const formattedPhone = `+${phone.replace(/\D/g, "")}`;
        // if (formattedPhone === "+375447621630") {
        //     newErrors.phone = "Отправка заявки с этого номера невозможна";
        // }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const formattedPhone = `+${phone.replace(/\D/g, "")}`;
            const finalEmail = email?.trim() || '';

            setIsSubmitting(true);

            const params = new URLSearchParams();
            params.append("u_name", name);
            params.append("u_phone", formattedPhone);
            params.append("u_email", finalEmail);
            params.append("source", "заявка с сайта visavampro.by");

            console.log("Formatted phone:", formattedPhone);
            const response = await fetch("https://api.u-on.ru/tCjYa5IOpS143s3V6w4j/lead/create.json", {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: params.toString(),
            });

            console.log("Request sent. Response status:", response.status);

            setIsSuccess(true);
            triggerYandexGoal();

            window.location.href = "/spasibo";
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            setIsSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNewRequest = () => {
        setIsSuccess(false);
        setFormData({name: "", phone: "", email: ""});
    };

    const handleCloseModal = () => {
        setIsSuccess(false);
        setFormData({name: "", phone: "", email: ""});
        setErrors({});
        closeModal();
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] md:p-0 sm:p-4 mdd:p-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{duration: 0.3}}
        >
            <motion.div
                className="bg-white md:p-12 sm:p-6 mdd:p-6 rounded-[4px] shadow-lg w-full max-w-md relative"
                initial={{scale: 0.9}}
                animate={{scale: 1}}
                exit={{scale: 0.9}}
                transition={{duration: 0.2}}
            >
                <button
                    onClick={handleCloseModal}
                    className="absolute top-6 right-6 text-[#F86F00] font-bold text-lg"
                >
                    <img src="/close.svg" alt="Закрыть" className="w-6 h-6"/>
                </button>

                <h2 className="text-2xl font-medium mb-6">Оформить заявку</h2>

                {isSuccess ? (
                    <div className="text-center p-4">
                        <div className="p-4 bg-gray-100 rounded text-sm">
                            Заявка успешно отправлена. С Вами свяжутся в ближайшее время.
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя*"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full border ${
                                    errors.name ? "border-red-500" : "border-[#15419E]"
                                } rounded-full p-3 text-sm`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <IMaskInput
                                mask="+000 00 000-00-00"
                                definitions={{'0': {mask: /[0-9]/, placeholderChar: '_'}}}
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
                                className={`w-full border ${
                                    errors.phone ? "border-red-500" : "border-[#15419E]"
                                } rounded-full p-3 text-sm`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border border-[#15419E] rounded-full p-3 text-sm"
                            />
                        </div>

                        <div className="flex mt-4 items-center">
                            <input
                                type="checkbox"
                                id="agreement"
                                checked={isAgreed}
                                onChange={handleCheckboxChange}
                                className="mr-2 accent-[#F86F00]"
                            />
                            <label htmlFor="agreement" className="text-xs">
                                Я согласен с{" "}
                                <a
                                    href="/Публичная%20оферта.%20Компания%20VISA%20VAM.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[#F86F00]"
                                >
                                    Публичной офертой
                                </a>
                            </label>
                        </div>

                        {errors.agreement && (
                            <p className="text-red-500 text-xs mt-1">{errors.agreement}</p>
                        )}

                        <div className="pt-1">
                            <button
                                type="submit"
                                className={`w-full py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out ${
                                    isSubmitting
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-customBlue hover:bg-blue-700 text-white"
                                }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Отправка..." : "Оформить заявку"}
                            </button>
                        </div>
                    </form>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Modal;