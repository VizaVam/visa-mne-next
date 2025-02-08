'use client'

import {useEffect, useState} from "react";
import { countries } from "@/components/serviceson";
import Image from "next/image";

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAllCountries, setShowAllCountries] = useState(false);

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
        <section id="services" className="px-[7%] pt-16 lg:pt-24">
            <h2 className="mdd:text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 lg:mb-16">Оформление документов для подачи на визы</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedCountries.map((country, index) => (
                    <div
                        key={index}
                        className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm"
                    >
                        <Image width={1500} height={1000}
                               src={country.img}
                            alt={country.name}
                            className="w-full object-cover"
                        />
                        <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-2">
                            <div className="flex flex-row gap-1 items-center">
                                <img src={country.svg} alt={country.name} className="h-6"/>
                                <p className="font-medium mdd:text-[16px] sm:text-lg md:text-xl lg:text-xl">{country.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Кнопка "Еще больше услуг" */}
            {isMobile && !showAllCountries && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAllCountries(true)}
                        className="bg-customBlue w-full hover:bg-blue-500 text-white py-3 rounded-[2px] text-[16px]"
                    >
                        Еще больше стран
                    </button>
                </div>
            )}
        </section>
    );
};

export default Services;