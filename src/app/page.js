'use client'

import Services from "@/components/services";
import Slider from "@/components/slider";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag"
import Contacts from "@/components/contacts";
import Steps from "@/components/steps";
import Image from "next/image";
import { useModal } from "@/components/modalcontext";
import { motion } from "framer-motion";

export default function HomePage({onOpenModal}) {
    const { openModal } = useModal();

    return (
        <div className={""}>
            <section
                className="lg:px-16 lg:mt-[70px] mt-[200px] pb-32 lg:pb-0 z-0 flex flex-col lg:flex-row lg:items-start relative">
                {/* Левая часть */}
                <div className="px-[7%] lg:absolute left-0 top-1/2 w-[100%] lg:w-[50%] text-left lg:text-left z-10">
                    <div className={"flex flex-col ht:w-[100%] lg:w-[125%] md:w-[100%] sm:w-[100%] mdd:w-[100%]"}>
                        <h1 className="text-[40px] mdd:text-[24px] font-semibold text-black leading-tight">
                            Оформи свою визу вместе <br className="br:hidden" /> <br className="lg:hidden dr:hidden" />
                            с <span className="lg:text-[48px] text-[40px] mdd:text-[32px] font-semibold leading-none">VISA VAM</span>
                        </h1>
                        <p className="lg:absolute md:absolute sm:absolute mdd:absolute lg:top-[80%] md:top-[7%] sm:top-[10%] mdd:top-[5%] mddd:top-[6%] dr:top-[7%] lg:left-[35%] mdd:left-[30%] left-[25%] text-[36px] mdd:text-[22px] text-[#F86F00] font-caveat transform rotate-[-5deg] opacity-65">
                            уоуоуоуоуоу
                        </p>
                    </div>
                </div>

                {/* Правая часть */}
                <div className="w-full lg:flex items-center -mt-[20%] lg:mt-0 relative z-5">
                    {/* Изображение */}
                    <Image width={2000} height={1000}
                           src="/banner-hero.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%] mdd:hidden"
                    />
                    <Image width={1000} height={1000}
                        src={"/main-m.svg"} alt={"Оформление виз с VisaVam.by – Легко и Доступно"} className="relative lg:top-0 lg:left-[30%] lg:w-[55%] sm:hidden" />

                    <div className="lg:hidden absolute bottom-0 mdd:pb-[30%] w-full px-[7%]">
                        <button
                            onClick={openModal}
                            className="bbbt relative overflow-hidden w-[100%] bg-customBlue text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
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
                            Оформить заявку
                        </button>
                    </div>
                </div>
                {/* Список преимуществ */}
                <ul className="lg:absolute top-1/2 lg:right-[7%] lg:transform lg:-translate-y-3 space-y-4 text-left lg:p-4 sm:pt-20 mdd:pt-0 rounded-md pl-[7%]">
                    <li className="flex items-center text-lg">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        <div>
                            <p className="font-[500] text-[20px] mdd:leading-none">
                                Более 10 лет
                            </p>
                            <p className="text-[16px] text-[#808080]  mdd:leading-none">на рынке</p>
                        </div>
                    </li>
                    <li className="flex items-center text-lg">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        <div>
                            <p className="font-[500] text-[20px]  mdd:leading-none">
                                20 000+
                            </p>
                            <p className="text-[16px] text-[#808080]  mdd:leading-none">успешных кейсов</p>
                        </div>
                    </li>
                    <li className="flex items-center text-lg">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        <div>
                            <p className="font-[500] text-[20px] mdd:leading-none">
                                10 000+
                            </p>
                            <p className="text-[16px] text-[#808080] mdd:leading-none">довольных клиентов</p>
                        </div>
                    </li>
                    <li className="flex items-center text-lg font-[500] text-[20px]">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        Персональный подход
                    </li>
                </ul>
            </section>
            <Slider/>
            <div>
                <h2 className="px-[7%] mdd:text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 lg:mb-16 mdd:mb-4 pt-14">Оформление документов для
                    подачи на визы</h2>
                <Services/>
            </div>
            <Steps/>
            <Docs/>
            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
};