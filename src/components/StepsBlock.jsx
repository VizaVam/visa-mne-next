"use client";

import { useState } from "react";
import { useModal } from "@/components/modalcontext";
import { motion } from "framer-motion";

const StepsBlock = () => {
    const { openModal } = useModal();
    const [isHovered, setIsHovered] = useState(false);

    const steps = [
        {
            number: "1.",
            title: "Подготовка документов",
            description: "Соберите все необходимые документы и заполните анкету.",
        },
        {
            number: "2.",
            title: "Подача заявки",
            description: "Отправьте документы через наш сервис или лично в консульство.",
        },
        {
            number: "3.",
            title: "Получение визы",
            description: "Дождитесь решения и заберите готовую визу.",
        },
    ];

    const handleOpenModal = () => {
        openModal();
    };

    return (
        <div className="w-full bg-gray-50 py-12 px-[7%]">
            <h2 className="text-3xl font-medium text-center mb-8 text-black">3 шага для получения визы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-[4px] shadow-sm border border-gray-200 text-center"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="text-[#F86F00] text-4xl font-bold mb-4">{step.number}</div>
                        <h3 className="text-xl font-medium mb-2 text-black">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                    </motion.div>
                ))}
            </div>
            <div className="text-center mt-8">
                <motion.button
                    onClick={handleOpenModal}
                    className="bg-customBlue hover:bg-blue-700 text-white py-3 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-lg active:scale-95 transition-transform duration-150 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Оформить заявку
                </motion.button>
            </div>
        </div>
    );
};

export default StepsBlock;