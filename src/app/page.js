'use client'

import React, { memo, Suspense } from 'react';
import dynamic from 'next/dynamic'; // Импортируем dynamic
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useModal } from "@/components/modalcontext";

// --- Ленивая загрузка компонентов ---
const Slider = dynamic(() => import('@/components/slider'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка слайдера...</div>,
});

const Announcement = dynamic(() => import('@/components/announcement'), {
    loading: () => <div className="px-[7%] py-4 text-center">Загрузка объявления...</div>,
});

const Services = dynamic(() => import('@/components/services'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка услуг...</div>,
});

const BottomSections = dynamic(() => import('@/components/BottomSections'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка секции...</div>,
});

const VizaCoop = dynamic(() => import('@/components/VizaCoop'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка сотрудничества...</div>,
});

const TakePrice = dynamic(() => import('@/components/TakePrice'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка цен...</div>,
});

const NewSteps = dynamic(() => import('@/components/newSteps'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка шагов...</div>,
});

const PhoneForm = dynamic(() => import('@/components/newModal'), {
    ssr: false,
    loading: () => <div className="px-[7%] py-6 text-center">Загрузка формы...</div>,
});
// --- Конец ленивой загрузки ---

// --- Компоненты верхней части ---
const AdvantageItem = memo(({ value, description }) => (
    <li className="flex items-center text-lg">
        <Image
            width={24}
            height={24}
            src="/check.svg"
            alt="Преимущество работы с VisaVam.by"
            className="h-5 w-5 mr-2"
            loading="lazy"
        />
        <div>
            <p className="font-[500] text-[20px] mdd:leading-none">{value}</p>
            {description && (
                <p className="text-[16px] text-[#808080] mdd:leading-none">
                    {description}
                </p>
            )}
        </div>
    </li>
));

const RippleButton = memo(({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-[100%] bg-customBlue text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
    >
        {/* Анимации могут быть тяжелыми. Рассмотрите оптимизацию или удаление, если FPS низкий */}
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                    delay: i * 0.4,
                }}
            >
                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full" />
            </motion.span>
        ))}
        {children}
    </button>
));
// --- Конец компонентов верхней части ---

// Компонент для ленивой загрузки по inView
const LazySection = ({ children, fallback = "Загрузка...", rootMargin = "100px" }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin,
    });

    return (
        <div ref={ref}>
            {inView ? children : <div className="py-10 text-center">{fallback}</div>}
        </div>
    );
};

export default function HomePage() {
    const { openModal } = useModal();
    const currentDate = new Date();
    const discountEndDate = new Date('2025-07-31T23:59:59+05:00');

    return (
        <div>
            {/* Hero Section - критично важная часть */}
            <section
                className="lg:px-16 lg:mt-[70px] mt-[150px] mdd:pb-8 pb-20 lg:pb-0 z-0 flex flex-col lg:flex-row lg:items-start relative">
                {/* Левая часть */}
                <div className="px-[7%] lg:absolute left-0 top-1/2 w-[100%] lg:w-[50%] text-left lg:text-left z-10">
                    <div className="flex flex-col ht:w-[100%] lg:w-[125%] md:w-[100%] sm:w-[100%] mdd:w-[100%]">
                        <h1 className="text-[40px] mdd:text-[24px] font-semibold text-black leading-tight">
                            Компания <span className="lg:text-[48px] text-[40px] mdd:text-[32px] font-semibold leading-none">Виза Вам</span>
                        </h1>
                        <p className="lg:absolute md:absolute sm:absolute mdd:absolute lg:top-[80%] md:top-[7%] sm:top-[10%] mdd:top-[5%] mddd:top-[5%] dr:top-[5%] lg:left-[30%] mdd:left-[30%] left-[25%] text-[36px] mdd:text-[22px] text-[#F86F00] font-caveat transform rotate-[-5deg] opacity-65">
                            Все хлопоты - нам, виза - Вам
                        </p>
                    </div>
                </div>

                {/* Правая часть */}
                <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                    {/* Убедитесь, что эти изображения оптимизированы */}
                    <Image
                        width={840}
                        height={802}
                        src="/mainwoman12.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%] mdd:hidden translate-y-[17%]"
                        loading="lazy"
                    />
                    <Image
                        width={840}
                        height={802}
                        src="/mainmobile123.webp"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%] sm:hidden translate-y-[31%] scale-110  mb-[145px]"
                        priority
                    />
                    <div className="hidden absolute bottom-0 mdd:pb-[30%] w-full px-[7%]">
                        <RippleButton onClick={openModal}>
                            Получить консультацию
                        </RippleButton>
                    </div>
                </div>

                {/* Announcement (только на мобильных) */}
                <div className="md:hidden">
                    <LazySection fallback="Загрузка объявления...">
                        <Announcement />
                    </LazySection>
                </div>

                {currentDate < discountEndDate && (
                    <div className="sm:hidden -mt-24 px-[7%] bg-orange-500 text-lg font-medium text-white py-1.5 text-center">
                        <p>
                            <span className="font-bold text-blue-950 underline">АКЦИЯ до 31.07.2025!</span>
                            <br />
                            Испанская безличная виза - <span className="font-bold text-blue-950 underline">1600 BYN</span> (<span className="line-through">1850 BYN</span>)
                        </p>
                    </div>
                )}

                {/* Список преимуществ - часть hero, оставляем */}
                <ul className={`lg:absolute top-1/2 lg:right-[7%] lg:transform lg:-translate-y-3 space-y-4 text-left lg:p-4 sm:pt-20 mdd:mt-0 mdd:translate-y-[-25px] mdd:pb-5 rounded-md pl-[7%] ${currentDate >= discountEndDate ? 'mdd:-mt-[19%]' : ''}`}>
                    <AdvantageItem value="Более 10 лет" description="на рынке" />
                    <AdvantageItem value="98%" description="одобрения виз" />
                    <AdvantageItem value="20 000+" description="успешных кейсов" />
                    <AdvantageItem value="10 000+" description="довольных клиентов" />
                    <AdvantageItem value="Персональный подход" />
                </ul>
            </section>
            {/* Конец Hero Section */}

            {/* Lazy Sections */}
            <LazySection rootMargin="200px">
                <Slider />
            </LazySection>

            <div className="mdd:hidden">
                <LazySection fallback="Загрузка объявления...">
                    <Announcement />
                </LazySection>
            </div>

            <div>
                <h2 className="px-[7%] text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-16 mdd:mb-4 pt-32 mdd:pt-20">
                    Оформление документов для подачи на визы
                </h2>
                <LazySection>
                    <Services />
                </LazySection>
            </div>

            <LazySection>
                <div className="px-[7%] pt-32 mdd:pt-20">
                    <VizaCoop />
                </div>
            </LazySection>

            <LazySection>
                <div className="px-[7%] pt-32 mdd:pt-20">
                    <TakePrice />
                </div>
            </LazySection>

            <LazySection>
                <div className="pb-32 mdd:pb-20">
                    <NewSteps />
                    <PhoneForm />
                </div>
            </LazySection>

            {/* Объединенные нижние секции */}
            <LazySection>
                <BottomSections />
            </LazySection>
        </div>
    );
}