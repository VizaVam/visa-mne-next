'use client'

// import { useModal } from "@/components/modalcontext";
import { motion } from "framer-motion";

const CallToAction = () => {
    // const { openModal } = useModal();
    const handleB24Open = () => {
        const bx24btn = document.querySelector('.b24-form-click-btn-507');
        if (bx24btn) {
            bx24btn.click();
        } else {
            console.error("Битрикс-кнопка не найдена в layout");
        }
    };

    return (
        <div className="pb-40 pt-40 px-[7%] flex flex-col items-center">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-4 text-center">
                Остались вопросы?
            </h2>
            <p className="mdd:text-[16px] sm:text-[20px] md:text-[20px] lg:text-[20px] font-medium mb-6 text-center">
                Напишите нам — проконсультируем <span className="text-[#F86F00]">бесплатно в течение 5 минут!</span>
            </p>
            <button
                onClick={handleB24Open}
                className="relative overflow-hidden sm:w-max mdd:w-full text-[16px] lg:w-auto bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
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
                            repeatDelay: 0.5, // Пауза после трех волн
                            delay: i * 0.4, // Волны идут друг за другом
                        }}
                    >
                        <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
                    </motion.span>
                ))}
                Получить консультацию
            </button>
        </div>
    );
};

export default CallToAction;
