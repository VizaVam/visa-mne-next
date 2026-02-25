'use client'

import React, {memo, Suspense} from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {useModal} from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";

// --- Ленивая загрузка компонентов ---
const Discount = dynamic(() => import('@/components/discount'), {
    loading: () => <div className="px-[7%] py-6 text-center">Загрузка акции...</div>,
});

const Slider = dynamic(() => import('@/components/slider'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка слайдера...</div>,
});

const Serviceson = dynamic(() => import('@/components/serviceson'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка услуг...</div>,
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

// const PhoneForm = dynamic(() => import('@/components/newModal'), {
//     ssr: false,
//     loading: () => <div className="px-[7%] py-6 text-center">Загрузка формы...</div>,
// });

const Contacts = dynamic(() => import('@/components/contacts'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка контактов...</div>,
});

// Объединяем нижние секции — если они такие же, как в HomePage
const BottomSections = dynamic(() => import('@/components/BottomSections'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка разделов...</div>,
});
// --- Конец ленивой загрузки ---

// --- Компоненты, используемые в верхней части страницы ---
// BreadcrumbNav и RippleButton - относительно простые, оставляем их как есть
const RippleButton = memo(({onClick, children}) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
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
));

const BreadcrumbNav = ({pathname}) => (
    <nav className="mb-4 mdd:text-xs flex items-center space-x-2 text-gray-600 gap-2">
        <Link
            href="/"
            className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out"
        >
            Главная
        </Link>
        <span>
            <Image
                src="/nav-icon.png"
                alt=""
                width={8}
                height={8}
                className="w-2"
            />
        </span>
        {pathname === "/shengenskie-vizy" ? (
            <span className="font-semibold text-gray-900 cursor-default">
                Шенгенские визы
            </span>
        ) : (
            <Link
                href="/shengenskie-vizy"
                className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out"
            >
                Шенгенские визы
            </Link>
        )}
    </nav>
);
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

export default function VisaPage({breadcrumbs}) {
    const {openModal} = useModal();
    const pathname = usePathname();

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            {/* Hero Section - критично важная часть */}
            <div className="w-full relative flex flex-row mdd:flex-col justify-between">
                <div className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname}/>
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black leading-none">
                        ШЕНГЕНСКИЕ ВИЗЫ
                    </h1>
                </div>

                <div className="w-full lg:flex items-center mt-[20%] mdd:mt-[10%] lg:mt-0 relative z-5">
                    {/* Убедитесь, что эти изображения оптимизированы */}
                    <Image
                        src="/visyman.webp"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={850}
                        height={827}
                        className={`relative lg:top-[120px] mb-[105px] mt-[80px] sm:top-0 lg:w-[50%] -z-50 mdd:hidden lg:translate-y-[45px] ml-[auto] mr-[auto]`}
                    />
                    <Image
                        src="/visyman.webp"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={450}
                        height={553}
                        className={`scale-110 mt-[125px] translate-y-[15px] relative top-[20%] -z-50 sm:hidden`}
                        priority={true} // Установите true только для критических изображений
                    />
                </div>
                <div className="hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[25%]">
                    <RippleButton onClick={openModal}>
                        Получить консультацию
                    </RippleButton>
                </div>
            </div>
            {/* Конец Hero Section */}

            {/* Lazy Sections */}
            <LazySection>
                <Discount />
            </LazySection>

            <LazySection>
                <Slider />
            </LazySection>

            <LazySection>
                <div className="pt-32 mdd:pt-20">
                    <Serviceson />
                </div>
            </LazySection>

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
                    <Contacts />
                </div>
            </LazySection>

            {/* Объединённые нижние секции */}
            <LazySection>
                <BottomSections />
            </LazySection>
        </div>
    );
}