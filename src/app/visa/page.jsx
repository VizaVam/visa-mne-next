'use client'

import Link from "next/link";
import Services from "@/components/services";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";
import Steps from "@/components/steps";
import Serviceson from "@/components/serviceson";

import { useModal } from "@/components/modalcontext";
import Image from "next/image";

export default function VisaPage() {
    const { openModal } = useModal();

    return (
        <div>
            <div className={"w-full relative flex flex-col lg:flex-row sm:flex-col justify-between"}>
                <div
                    className="mdd:relative lg:absolute sm:relative left-0 lg:top-[250px] top-[200px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-8">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/" className="text-orange-500 hover:underline">Главная</Link>
                        <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                        <Link href="/visa" className="font-semibold">Визы</Link>
                    </nav>
                    <h1 className="mdd:text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-semibold text-black">
                        ВИЗЫ
                    </h1>
                </div>
                <div className="w-full lg:flex items-center mdd:mt-[25%] mt-[20%] lg:mt-0 relative z-5">
                    <Image
                        src="/visa-banner-new.png"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={1000}
                        height={1000}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50"
                    />
                </div>
                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-20">
                    <button
                        onClick={openModal}
                        className="relative w-[100%] bg-customBlue hover:bg-blue-500 text-white py-3 rounded-[2px]">
                        Оформить заявку
                    </button>
                </div>
            </div>
            <Serviceson/>
            <Steps/>
            <Docs/>
            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
};