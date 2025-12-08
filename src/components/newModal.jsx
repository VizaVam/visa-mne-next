'use client'

import {useState} from "react";
import {IMaskInput} from "react-imask";
import {motion} from "framer-motion";
import { blacklistedPhones } from "@/config/blacklist";
import Link from "next/link";

// RippleButton component with animation
const RippleButton = ({onClick, children, disabled}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`bbbt relative overflow-hidden w-full py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out ${
            disabled ? "bg-gray-500 cursor-not-allowed" : "bg-customBlue hover:bg-blue-700 text-white"
        }`}
    >
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{scale: 0, opacity: 1.5}}
                animate={{scale: 4, opacity: 0}}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                    delay: i * 0.4,
                }}
            >
                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
            </motion.span>
        ))}
        {children}
    </button>
);

const PhoneForm = () => {
    const [formData, setFormData] = useState({phone: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAgreed, setIsAgreed] = useState(true); // Default to true to match Modal behavior
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);

    // Function to trigger Yandex Metrika reachGoal
    const triggerYandexGoal = () => {
        if (typeof window !== 'undefined' && typeof window.ym !== 'undefined') {
            window.ym(100438805, 'reachGoal', 'send_form');
            console.log('Yandex Metrika goal send_form triggered');
        } else {
            // Добавил проверку typeof window !== 'undefined' для безопасности на стороне сервера (SSR)
            console.warn('Yandex Metrika not initialized or window is not available');
        }
    };

    const validatePhone = (phone) => {
        const cleaned = phone.replace(/[^\d+]/g, "");
        const pattern = /^\+(375\d{9}|7\d{10}|48\d{9})$/;
        return pattern.test(cleaned);
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
        const {phone} = formData;

        const newErrors = {};
        if (!phone || !phone.trim()) {
            newErrors.phone = "Поле обязательно к заполнению";
        } else if (!validatePhone(phone)) {
            newErrors.phone = "Пожалуйста, введите корректный номер телефона";
        }
        if (!isAgreed) newErrors.agreement = "Вы должны согласиться с офертой";

        const formattedPhone = `+${phone.replace(/\D/g, "")}`;
        if (blacklistedPhones.includes(formattedPhone)) {
            newErrors.phone = "Error";
            sessionStorage.setItem("previousPage", window.location.href);
            window.location.href = "/error";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const creationDate = new Date().toISOString();

            setIsSubmitting(true);

            const params = new URLSearchParams();
            params.append("u_phone", formattedPhone);
            params.append("u_date_create", creationDate);
            params.append("u_status", "Новый");
            params.append("source", "заявка с сайта visavampro.by");
            if (params.get('utm_source')) {
                params.append("utm_source", params.get('utm_source'));
            }

            console.log("Formatted phone before send:", formattedPhone);
            const response = await fetch("https://api.u-on.ru/tCjYa5IOpS143s3V6w4j/lead/create.json", {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                body: params.toString(),
            });

            console.log("Request sent. Response status:", response.status);

            setIsSuccess(true);

            triggerYandexGoal();
            
            sessionStorage.setItem("previousPage", window.location.href);
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
        setFormData({phone: ""});
        setIsAgreed(true); // Reset agreement to true
    };

    return (
        <div className="w-full bg-white px-[7%] pt-16 mdd:pt-10">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-4 text-center">
                Остались вопросы?
            </h2>
            <p className="mdd:text-[16px] sm:text-[20px] md:text-[20px] lg:text-[20px] font-medium mb-8 text-center">
                Напишите нам — проконсультируем <span className="text-[#F86F00]">бесплатно в течение 5 минут!</span>
            </p>
            {!isSuccess && (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                    <div className="flex flex-col items-end md:flex-row md:space-x-4 md:space-y-0 space-y-4">
                        <div className="w-full">
                            <IMaskInput
                                mask={[
                                {
                                    mask: "+{375} 00 000-00-00", // Беларусь
                                    startsWith: "375",
                                    country: "BY",
                                },
                                {
                                    mask: "+{7} 000 000-00-00", // Россия
                                    startsWith: "7",
                                    country: "RU",
                                },
                                {
                                    mask: "+{48} 000-000-000", // Польша
                                    startsWith: "48",
                                    country: "PL",
                                },
                                {
                                    mask: "+0000000000000", // fallback
                                },
                                ]}
                                dispatch={(appended, dynamicMasked) => {
                                const number = (dynamicMasked.value + appended).replace(/\D/g, "");
                                return dynamicMasked.compiledMasks.find(m => number.startsWith(m.startsWith)) || dynamicMasked.compiledMasks[3];
                                }}
                                definitions={{ '0': { mask: /[0-9]/ } }}
                                lazy={false}
                                overwrite={true}
                                placeholder={isPhoneFocused ? "+" : "Телефон* (начиная с +)"}
                                value={formData.phone || ""}
                                onAccept={(value) => {
                                const cleanValue = value.replace(/[^\d+]/g, "");
                                setFormData({ ...formData, phone: cleanValue });
                                }}
                                onFocus={() => setIsPhoneFocused(true)}
                                onBlur={(e) => {
                                if (!e.target.value || e.target.value === "+") {
                                    setFormData({ ...formData, phone: "" });
                                    setIsPhoneFocused(false);
                                }
                                }}
                                className={`w-full border ${
                                errors.phone ? "border-red-500" : "border-[#15419E]"
                                } rounded-full p-3 text-sm`}
                            />
                            <p className="text-xs text-gray-500">Международный формат: +375, +7, +48</p>
                        {errors.phone && <p className="text-red-500 text-xs !mt-0 hidden dm:!block">{errors.phone}</p>}
                        </div>
                        <div className="w-full !mt-0 !mb-[15px] dm:!mt-[15px]">
                            <RippleButton
                                type="submit"
                                disabled={isSubmitting}
                            >
                                <span className="whitespace-nowrap">{isSubmitting ? "Отправка..." : "Получить консультацию"}</span>
                            </RippleButton>
                        </div>
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs !mt-0 block dm:hidden">{errors.phone}</p>}
                    <p className="text-sm text-center !mt-1 text-gray-600">
                        Нажимая кнопку, Вы соглашаетесь с{" "}
                        <Link href="/Публичная%20оферта.%20Компания%20VISA%20VAM.pdf" className="text-[#F86F00] underline">
                            публичной офертой
                        </Link>
                    </p>
                </form>
            )}
        </div>
    );
};

export default PhoneForm;