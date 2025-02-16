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
import Serviceson from "@/components/serviceson";

export default function HomePage({onOpenModal}) {
    const { openModal } = useModal();

    return (
        <div className={""}>
            <section
                className="lg:px-16 lg:mt-[70px] mt-[200px] pb-32 lg:pb-0 z-0 flex flex-col lg:flex-row lg:items-start relative">
                {/* Левая часть */}
                <div className="px-[7%] lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10">
                    <div className={"flex flex-col"}>
                        <h1 className="text-[24px] mdd:text-[12px] font-semibold text-black">КОМПАНИЯ</h1>
                        <h1 className="lg:text-[80px] text-[70px] mdd:text-[40px] font-bold leading-none">VISA VAM</h1>
                        <p className="lg:absolute md:absolute sm:absolute mdd:absolute lg:top-[90%] md:top-[8%] sm:top-[9%] mdd:top-[6%] lg:left-[27%] mdd:left-[15%] left-[15%] text-[32px] mdd:text-[20px] text-[#F86F00] font-caveat transform rotate-[-5deg] opacity-65">
                            Помогаем превратить мечты в реальность
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
                            className="bbbt relative w-[100%] bg-customBlue text-white py-3 rounded-[2px] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out">
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