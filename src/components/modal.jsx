'use client'

import { useState } from "react";
import { useModal } from "@/components/modalcontext";
import { IMaskInput } from "react-imask";

const Modal = () => {
    const [formData, setFormData] = useState({ name: "", phone: null, email: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [isAgreed, setIsAgreed] = useState(true);
    const { isModalOpen, closeModal } = useModal();

    if (!isModalOpen) return null;

    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{3}\s\d{2}\s\d{3}-\d{2}-\d{2}$/;
        return phoneRegex.test(phone);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handlePhoneInput = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, phone: event.target.value });
        setErrors((prev) => ({ ...prev, phone: "" }));
    };

    const handleCheckboxChange = (e) => {
        setIsAgreed(e.target.checked);
        setErrors((prev) => ({ ...prev, agreement: "" }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, email } = formData;

        const newErrors = {};
        if (!name?.trim()) newErrors.name = "Поле обязательно к заполнению";
        if (!phone || !phone.trim()) { // Ensure phone is not null
            newErrors.phone = "Поле обязательно к заполнению";
        } else if (!validatePhone(phone)) {
            newErrors.phone = "Некорректный формат данных";
        }
        if (!isAgreed) newErrors.agreement = "Вы должны согласиться с офертой";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const formattedPhone = phone.replace(/\D/g, "");
            setIsSubmitting(true);

            const params = new URLSearchParams();
            params.append("u_name", name);
            params.append("u_phone", formattedPhone);
            params.append("u_email", email);
            params.append("source", "заявка с сайта visavampro.by");

            const response = await fetch("https://api.u-on.ru/tCjYa5IOpS143s3V6w4j/lead/create.json", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });

            console.log("Request sent. Response status:", response.status);
            setMessage("Заявка успешно отправлена. С Вами свяжутся в ближайшее время.");
        } catch (error) {
            console.error("Ошибка отправки данных:", error);
            setMessage("Произошла ошибка при отправке заявки. Попробуйте повторно позже.");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
            <div className="bg-white p-8 rounded-[4px] shadow-lg max-w-md w-full relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-[#F86F00] font-bold text-lg"
                >
                    <img src="/close.svg" alt="Закрыть" />
                </button>
                <h2 className="text-2xl font-medium mb-4">Оформить заявку</h2>
                {message && (
                    <div className="mb-4 p-4 bg-gray-100 text-center rounded">
                        {message}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя*"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full border ${
                                errors.name ? "border-red-500" : "border-gray-300"
                            } rounded-[4px] p-2`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <IMaskInput
                            mask="+000 00 000-00-00" // 000 вместо 999, чтобы избежать автозаполнения
                            definitions={{
                                0: /[0-9]/, // Позволяет вводить только цифры
                            }}
                            name="phone"
                            placeholder="Телефон*"
                            value={formData.phone || ""}
                            onChange={handlePhoneInput}
                            className={`w-full border ${
                                errors.phone ? "border-red-500" : "border-gray-300"
                            } rounded-[4px] p-2`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>
                    <div className="mb-1">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-[4px] p-2"
                        />
                    </div>
                    <div className="flex items-center mt-5 mb-5">
                        <input
                            type="checkbox"
                            id="agreement"
                            checked={isAgreed}
                            onChange={handleCheckboxChange}
                            className="mr-2 accent-[#F86F00]"
                        />
                        <label htmlFor="agreement" className="text-sm">
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
                        <p className="text-red-500 text-sm mt-1 mb-4">{errors.agreement}</p>
                    )}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`py-3 px-4 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] w-[220px] active:scale-95 transition-transform duration-150 ease-in-out ${
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
            </div>
        </div>
    );
};

export default Modal;