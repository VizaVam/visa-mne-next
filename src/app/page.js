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

export default function HomePage({onOpenModal}) {
    const { openModal } = useModal();

    return (
        <div className={""}>
            <section
                className="lg:px-16 lg:mt-[80px] mt-[200px] pb-32 lg:pb-0 z-0 flex flex-col lg:flex-row items-center lg:items-start relative">
                {/* Левая часть */}
                <div className="px-[7%] lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10">
                    <div className={"flex ht:flex-row ht:items-end lg:flex-col md:flex-col sm:flex-col mdd:flex-row mdd:items-end"}>
                        <h1 className="lg:text-4xl md:text-4xl sm:text-2xl mdd:text-lg font-semibold text-black">
                            КОМПАНИЯ
                        </h1>
                        <p className="lg:text-5xl md:text-5xl sm:text-4xl mdd:text-3xl font-semibold">“VISA VAM”</p>
                    </div>
                    <p
                        className="lg:mt-4 pl-6 text-2xl lg:text-3xl text-[#F86F00] font-caveat transform rotate-[-5deg] opacity-65"
                    >
                        Помогаем превратить мечты в реальность
                    </p>
                </div>

                {/* Правая часть */}
                <div className="w-full lg:flex items-center -mt-[20%] lg:mt-0 relative z-5">
                    {/* Изображение */}
                    <Image width={2000} height={1000}
                           src="/banner-hero.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        className="relative lg:top-0 lg:left-[30%] lg:w-[55%]"
                    />

                    <div className="lg:hidden absolute bottom-0 w-full px-[7%]">
                        <button
                            onClick={openModal}
                            className="relative w-[100%] bg-customBlue hover:bg-blue-500 text-white py-3 rounded-[2px]">
                            Оформить заявку
                        </button>
                    </div>
                </div>
                {/* Список преимуществ */}
                <ul
                    className="lg:absolute top-1/2 lg:right-[7%] lg:transform lg:-translate-y-1/2 space-y-4 text-left lg:p-4 md:p-4 sm:pt-20 mdd:pt-20 rounded-md">
                    <li className="flex items-center text-lg">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        <p className="font-[500] text-[20px]">
                            Более 10 лет <br/>
                            <span className="text-[16px] text-[#808080]">на рынке</span>
                        </p>
                    </li>
                    <li className="flex items-center text-lg">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        <p className="font-[500] text-[20px]">
                            20 000+<br/>
                            <span className="text-[16px] text-[#808080]">успешных кейсов</span>
                        </p>
                    </li>
                    <li className="flex items-center text-lg">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        <p className="font-[500] text-[20px]">
                            10 000+<br/>
                            <span className="text-[16px] text-[#808080]">довольных клиентов</span>
                        </p>
                    </li>
                    <li className="flex items-center text-lg font-[500] text-[20px]">
                        <Image width={1000} height={800} src="/check.svg" alt="Преимущество работы с VisaVam.by" className="h-5 w-5 mr-2"/>
                        Персональный подход
                    </li>
                </ul>
            </section>
            <Slider/>
            <Services/>
            <Steps />
            <Docs/>
            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
};