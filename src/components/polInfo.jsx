'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";

const RippleButton = ({onClick, children}) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
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
);

const BreadcrumbNav = ({pathname}) => (
    <nav className="mb-4 mdd:text-xs flex items-center space-x-2 text-gray-600 gap-2">
        <Link href="/"
              className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
            Главная
        </Link>
        <Image src="/nav-icon.png" alt="" width={8} height={8} className="w-2"/>
        {pathname === "/poleznaya-informasia" ? (
            <span className="font-semibold text-gray-900 cursor-default">Полезная информация</span>
        ) : (
            <Link href="/poleznaya-informasia"
                  className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                Полезная информация
            </Link>
        )}
    </nav>
);

export default function PolInfo({breadcrumbs}) {
    const {openModal} = useModal();
    const pathname = usePathname();
    const countryOrder = {
        "viza-v-polshu": 1,
        "viza-v-sloveniu": 2,
        "viza-v-germaniyu": 3,
        "viza-v-ispaniyu": 4
    };

    const recommendedCountries = Object.keys(countryOrder)
        .map(countryKey => countries.find(c => c.url.toLowerCase() === countryKey))
        .filter(Boolean);

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            {/* Header Section */}
            <div
                className="w-full relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] flex flex-col sm:flex-col justify-between">
                <div
                    className="w-full text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname}/>
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black">
                        ПОЛЕЗНАЯ ИНФОРМАЦИЯ
                    </h1>
                </div>

                <Link href="/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov" className="px-[7%] w-full relative left-0 top-[80px] lg:top-[80px] mdd:top-[60px]">
                    <div style={{
                        boxShadow: '3px 2px 8px 1px #FFEEDB',
                        backdropFilter: 'blur(200px)'
                    }}
                         className="flex flex-col md:flex-row md:gap-4 items-center bg-white border border-[#FFEEDB] rounded-lg shadow-md p-0 md:p-4 hover:shadow-lg transition-shadow">
                        <Image src={"/polinfo1.png"} alt={"Полезная информация"} width={1000} height={1000}
                               className={"w-[191px] h-[124px] dm:hidden"}/>
                        <Image src={"/polinfo2.png"} alt={"Полезная информация"} width={1000} height={1000}
                               className={"md:hidden"}/>
                        <div className={"dm:p-4"}>
                            <h3 className="text-base dm:font-medium md:text-xl text-black mb-1">
                                Как оформить визу в Польшу для белорусов: документы, стоимость и сроки
                            </h3>
                            <p className="dm:text-base text-[#595959] mb-4">
                                Если вы планируете поездку в Польшу, то вам обязательно понадобится шенгенская виза,
                                т.к. Польша — одна из стран Шенгенского соглашения.
                            </p>
                            <div className="flex justify-between items-center">
                                <span
                                    className="dm:text-base text-[#F86F00] font-medium"
                                >
                                    Читать полностью
                                </span>
                                <span className="text-[#FA9D3E] text-sm md:hidden">13.05.2025</span>
                            </div>
                        </div>
                        <span className="text-[#FA9D3E] text-sm self-start dm:hidden">13.05.2025</span>
                    </div>
                </Link>
            </div>

            <div className="mdd:mt-60 mt-64 md:mt-80 lg:mt-96 mb-10">
                <Contacts/>
            </div>
        </div>
    );
}