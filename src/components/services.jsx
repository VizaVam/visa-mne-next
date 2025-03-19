'use client'

import {useEffect, useState} from "react";
import { countries } from "@/components/serviceson";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAllCountries, setShowAllCountries] = useState(false);
    const excludedCountries = ["rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

    // Проверяем ширину экрана
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize(); // Проверяем на начальной загрузке
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ограничиваем список стран для мобильных
    const displayedCountries = isMobile && !showAllCountries ? countries.slice(0, 8) : countries;

    return (
        <section id="services" className="px-[7%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-1">
                {displayedCountries
                    .filter(country => !excludedCountries.includes(country.url))
                    .map((country, index) => (
                    <Link href={`/vizy/${country.url}`} key={index}>
                        <div className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[4px] overflow-hidden shadow-sm cursor-pointer
                            transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                            <img src={country.img} alt={country.name} className="w-full object-cover"/>
                            <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                                        <img src={country.svg} alt={country.name} className="h-6"/>
                                        <p className="font-medium mdd:text-[16px] dr:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                                            {country.name}
                                        </p>
                                    </div>
                                    <img className="lg:w-6 md:w-6 sm:w-4 mdd:hidden" src="/Line 5.png" alt=""/>
                                    <img className={"mdd:w-3 dr:w-3 sm:hidden"} src={"/line123.png"} alt={""}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {isMobile && !showAllCountries && (
                <div className="mt-8 text-center">
                    <Link href="/vizy">
                        <button
                            className="bg-customBlue mdd:w-full hover:bg-blue-600 text-white py-4 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                            Еще больше стран
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Services;