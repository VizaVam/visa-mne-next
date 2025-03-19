'use client'

import Link from "next/link";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";
import Steps from "@/components/steps";
import Serviceson from "@/components/serviceson";
import {countries} from "@/components/serviceson";

import { useModal } from "@/components/modalcontext";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function VisaPage({params}) {
    const { openModal } = useModal();
    const pathname = usePathname()

    return (
        <div>
            <div className={"w-full relative flex flex-col lg:flex-row sm:flex-col justify-between"}>
                <div
                    className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/" className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Главная</Link>
                        <span><img className="w-2" src="/nav-icon.png" alt="" /></span>
                        {pathname === "/vizy" ? (
                            <span className="font-semibold text-gray-900 cursor-default">Визы</span>
                        ) : (
                            <Link href="/vizy" className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Визы</Link>
                        )}
                    </nav>
                    <h1 className="mdd:text-[40px] lg:text-[64px] md:text-[58px] sm:text-[48px] font-semibold text-black">
                        ВИЗЫ
                    </h1>
                </div>
                <div className="w-full lg:flex items-center mt-[20%] mdd:mt-[10%] lg:mt-0 relative z-5">
                    <Image
                        src="/visa-banner-new.png"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={1000}
                        height={1000}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 mdd:hidden"
                    />
                    <Image src={"/visabanner-f.svg"} alt={""} width={1000}
                           height={1000} className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"/>
                </div>
                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[25%]">
                    <button
                        onClick={openModal}
                        className="bbbt relative w-[100%] bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out">
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