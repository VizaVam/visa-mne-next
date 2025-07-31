'use client'

import React, {memo} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import {useModal} from "@/components/modalcontext";
import Services from "@/components/services";
import Slider from "@/components/slider";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";
import Announcement from "@/components/announcement";
import PhoneForm from "@/components/newModal"
import NewSteps from "@/components/newSteps";
import TakePrice from "@/components/TakePrice";
import VizaCoop from "@/components/VizaCoop";

const AdvantageItem = ({value, description}) => (
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
            <p className="font-[500] text-[20px] mdd:leading-none">
                {value}
            </p>
            {description && (
                <p className="text-[16px] text-[#808080] mdd:leading-none">
                    {description}
                </p>
            )}
        </div>
    </li>
);

const RippleButton = memo(({onClick, children}) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-[100%] bg-customBlue text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
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

export default function HomePage() {
    const {openModal} = useModal();
    const currentDate = new Date();
    const discountEndDate = new Date('2025-07-31T23:59:59+05:00');

    return (
        <div>
            <section
                className="lg:px-16 lg:mt-[70px] mt-[150px] mdd:pb-8 pb-20 lg:pb-0 z-0 flex flex-col lg:flex-row lg:items-start relative">
                {/* Левая часть */}
                <div className="px-[7%] lg:absolute left-0 top-1/2 w-[100%] lg:w-[50%] text-left lg:text-left z-10">
                    <div className="flex flex-col ht:w-[100%] lg:w-[125%] md:w-[100%] sm:w-[100%] mdd:w-[100%]">
                        <h1 className="text-[40px] mdd:text-[24px] font-semibold text-black leading-tight">
                            Оформи свою визу вместе <br className="br:hidden"/> <br className="lg:hidden dr:hidden"/>
                            с <span className="lg:text-[48px] text-[40px] mdd:text-[32px] font-semibold leading-none">VISA VAM</span>
                        </h1>
                        <p className="lg:absolute md:absolute sm:absolute mdd:absolute lg:top-[80%] md:top-[7%] sm:top-[10%] mdd:top-[5%] mddd:top-[6%] dr:top-[7%] lg:left-[35%] mdd:left-[30%] left-[25%] text-[36px] mdd:text-[22px] text-[#F86F00] font-caveat transform rotate-[-5deg] opacity-65">
                            Все хлопоты - нам, виза - Вам
                        </p>
                    </div>
                </div>

                {/* Правая часть */}
                <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                    <Image
                        width={840}
                        height={802}
                        src="/banner-hero.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%] mdd:hidden"
                        priority
                    />
                    <Image
                        width={840}
                        height={802}
                        src="/main-m.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%] sm:hidden"
                        priority
                    />

                    <div className="lg:hidden absolute bottom-0 mdd:pb-[30%] w-full px-[7%]">
                        <RippleButton onClick={openModal}>
                            Получить консультацию
                        </RippleButton>
                    </div>
                </div>

                <div className="md:hidden">
                    <Announcement/>
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

                {/* Список преимуществ */}
                <ul className={`lg:absolute top-1/2 lg:right-[7%] lg:transform lg:-translate-y-3 space-y-4 text-left lg:p-4 sm:pt-20 mdd:mt-8 mdd:pb-5 rounded-md pl-[7%] ${currentDate >= discountEndDate ? 'mdd:-mt-[20%]' : ''}`}>
                    <AdvantageItem value="Более 10 лет" description="на рынке"/>
                    <AdvantageItem value="98%" description="одобрения виз"/>
                    <AdvantageItem value="20 000+" description="успешных кейсов"/>
                    <AdvantageItem value="10 000+" description="довольных клиентов"/>
                    <AdvantageItem value="Персональный подход"/>
                </ul>
            </section>

            <Slider/>

            <div className="mdd:hidden">
                <Announcement/>
            </div>

            <div>
                <h2 className="px-[7%] text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-16 mdd:mb-4 pt-32 mdd:pt-20">
                    Оформление документов для подачи на визы
                </h2>
                <Services/>
            </div>

            <div className="px-[7%] pt-32 mdd:pt-20">
                <VizaCoop/>
            </div>

            <div className="px-[7%] pt-32 mdd:pt-20">
                <TakePrice/>
            </div>

            <div className={"pb-32 mdd:pb-20"}>
                <NewSteps/>
                <PhoneForm/>
            </div>

            <Docs/>
            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
}