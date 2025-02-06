'use client'

import {useEffect, useState} from "react";
import Link from "next/link";

export const countries = [
    { name: "Польша", img: "/poland.png", svg: "/poland_flag.svg", url: "poland" },
    { name: "Словения", img: "/slovenia.png", svg: "/slovenia_flag.svg", url: "slovenia" },
    { name: "Германия", img: "/germany.png", svg: "/germany_flag.svg", url: "germany" },
    { name: "Испания", img: "/spain.png", svg: "/spain_flag.svg", url: "spain" },
    { name: "Франция", img: "/france.png", svg: "/france_flag.svg", url: "france" },
    { name: "Литва", img: "/litva.png", svg: "/litva_flag.svg", url: "litva" },
    { name: "Латвия", img: "/latvia.png", svg: "/latvia_flag.svg", url: "latvia" },
    { name: "США", img: "/usa.png", svg: "/usa_flag.svg", url: "usa" },
    { name: "Великобритания", img: "/greatbritain.png", svg: "/greatbritain_flag.svg", url: "greatbritain" },
    { name: "Болгария", img: "/bulgaria.png", svg: "/bulgaria_flag.svg", url: "bulgaria" },
    { name: "Нидерланды", img: "/netherland.png", svg: "/netherland_flag.svg", url: "netherland" },
    { name: "Греция", img: "/greece.png", svg: "/greece_flag.svg", url: "greece" },
    { name: "Венгрия", img: "/hungary.png", svg: "/hungary_flag.svg", url: "hungary" },
    { name: "Италия", img: "/italy.png", svg: "/italy_flag.svg", url: "italy" },
    { name: "Румыния", img: "/romania.png", svg: "/romania_flag.svg", url: "romania" },
    { name: "Австрия", img: "/austria.png", svg: "/austria_flag.svg", url: "austria" },
];

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
        <section id="services" className="px-[7%]">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedCountries.map((country, index) => (
                    <Link href={`/visa/${country.url}`} key={index}>
                        <div className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm cursor-pointer">
                            <img src={country.img} alt={country.name} className="w-full object-cover" />
                            <div className="lg:p-8 p-6">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <img src={country.svg} alt={country.name} className="h-6" />
                                        <p className="font-medium text-xl">{country.name}</p>
                                    </div>
                                    <img className="w-8" src="/Line 5.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
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