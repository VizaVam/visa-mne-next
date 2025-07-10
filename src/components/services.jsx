'use client'

import {useEffect, useState} from "react";
import { countries } from "@/data/countries";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAllCountries, setShowAllCountries] = useState(false);
    const excludedCountries = ["rabochaya-viza-v-ispaniyu", "rabochaya-viza-v-germaniyu", "rabochaya-viza-v-bolgariyu", "rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

    // Страны, которые должны вести на /visa-v-... вместо /shengenskie-vizy/visa-v-...
    const nonSchengenCountries = ["viza-v-kitaj", "viza-v-velikobritaniyu", "viza-v-ssha"];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const displayedCountries = isMobile && !showAllCountries ? countries.slice(0, 10) : countries;

    return (
        <section id="services" className="px-[7%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-1">
                {displayedCountries
                    .filter(country => !excludedCountries.includes(country.url))
                    .map((country, index) => {
                        // Определяем URL в зависимости от страны
                        const href = nonSchengenCountries.includes(country.url)
                            ? `/${country.url}`
                            : `/shengenskie-vizy/${country.url}`;

                        return (
                            <Link href={href} key={index}>
                                <div className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[4px] overflow-hidden shadow-sm cursor-pointer
                                    transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                    <Image src={country.img} alt={country.name} width={308} height={288} className="w-full object-cover"/>
                                    <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                                        <div className="flex flex-row justify-between items-center">
                                            <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                                                <Image src={country.svg} alt={country.name} width={24} height={24} className="h-6"/>
                                                <p className="font-medium mdd:text-[16px] dr:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                                                    {country.name}
                                                </p>
                                            </div>
                                            <Image className="lg:w-6 md:w-6 sm:w-4 mdd:hidden" src="/Line 5.png" alt="" width={24} height={24}/>
                                            <Image className={"mdd:w-3 dr:w-3 sm:hidden"} src={"/line123.png"} alt={""} width={24} height={24}/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
            </div>

            {isMobile && !showAllCountries && (
                <div className="mt-8 text-center">
                    <Link href="/shengenskie-vizy">
                        <button
                            className="bg-customBlue mdd:w-full hover:bg-blue-600 text-white py-4 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                            Еще больше стран
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Services;