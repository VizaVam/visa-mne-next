// components/country/CountryBreadcrumbs.jsx
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const CountryBreadcrumbs = ({ country, pathname }) => {
    const excludedCountries1 = [
        "rabochaya-viza-v-polshu",
        "delovaya-viza-v-polshu",
        "uchebnaya-viza-v-polshu",
        "gostevaya-polskaya-viza",
        "viza-v-polsy-po-karte-polyaka",
        "rabochaya-viza-v-bolgariyu",
        "rabochaya-viza-v-germaniyu",
        "rabochaya-viza-v-ispaniyu"
    ];

    return (
        <nav className="mdd:mt-12 mb-4 mdd:text-xs flex items-baseline sm:space-x-2 mdd:space-x-0 text-gray-600 gap-2">
            <Link href="/"
                  className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                Главная
            </Link>
            <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2"/>
            <Link
                href="/shengenskie-vizy"
                className={`text-orange-500 hover:underline ${pathname === "/shengenskie-vizy" ? "font-semibold text-gray-900 pointer-events-none w-full active:scale-95 transition-transform duration-150 ease-in-out" : ""}`}
            >
                Шенгенские визы
            </Link>
            <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2"/>
            <span className="font-semibold text-gray-900 cursor-default inline-flex flex-wrap m-0">
                {!excludedCountries1.includes(country.url) && (
                    <>
                        Виза{" "}
                        {country.n === "Францию" ? "во" : "в"}{" "}
                    </>
                )}
                {country.n}
            </span>
        </nav>
    );
};

export default CountryBreadcrumbs;