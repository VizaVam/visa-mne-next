// components/countriesPage/CountryPageHeader.jsx
'use client'

import React, { useMemo } from 'react';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/components/modalcontext";
import RippleButton from "@/components/ui/RippleButton";
import CountryBreadcrumbs from "@/components/country/CountryBreadcrumbs";
import { countries } from "@/data/countries";

const CountryPageHeader = ({ countryUrl, urlParam }) => {
    const { openModal } = useModal();
    const pathname = usePathname();

    const selectedCountry = useMemo(() =>
            countries.find(c => c.url === (countryUrl || urlParam)),
        [countryUrl, urlParam]
    );

    if (!selectedCountry) {
        return null; // or handle not found case
    }

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

    const excludedPoland = [
        "viza-v-polshu",
        "rabochaya-viza-v-polshu",
        "delovaya-viza-v-polshu",
        "uchebnaya-viza-v-polshu",
        "gostevaya-polskaya-viza",
        "viza-v-polsy-po-karte-polyaka"
    ];

    const isExcludedPoland = excludedPoland.includes(selectedCountry.url);

    return (
        <div className={`w-full relative flex flex-col lg:flex-row sm:flex-col justify-between ${isExcludedPoland ? 'mdd:-mt-10' : 'mdd:-mt-10'}`}>
            <div
                className={`mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[300px] ${isExcludedPoland ? 'mdd:top-[150px]' : 'mdd:top-[150px]'} w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col xl:gap-32 lg:gap-20 sm:gap-12 mdd:gap-12`}>
                <CountryBreadcrumbs country={selectedCountry} pathname={pathname}/>
                <span>
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black uppercase leading-none">
                        {excludedCountries1.includes(selectedCountry.url)
                            ? selectedCountry.n
                            : `Виза ${selectedCountry.n === "Францию" ? "во" : "в"} ${selectedCountry.n}`}
                    </h1>
                    {(selectedCountry.url === "rabochaya-viza-v-germaniyu" || selectedCountry.url === "rabochaya-viza-v-polshu") && (
                        <p className="mdd:text-[14px] sm:text-[20px]">* оформление «под ключ» в Минске!</p>
                    )}
                    {(selectedCountry.url === "viza-v-italiyu") && (
                        <p className="mdd:text-[14px] sm:text-[20px]">*оформление «под ключ»!</p>
                    )}
                </span>
            </div>
            <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[10%] mt-[20%] relative z-5">
                <Image
                    src={selectedCountry.rb === 1 ? "/visa-c.png" : "/visa-cc.png"}
                    alt=""
                    width={1000}
                    height={1000}
                    unoptimized={true}
                    className="relative lg:top-[120px] sm:top-0 lg:w-[50%] lg:left-[50%] -z-50 mdd:hidden"
                />
                <Image
                    src={selectedCountry.rb === 1 ? "/visa-112.webp" : "/visa-001.webp"}
                    alt=""
                    width={600}
                    height={600}
                    quality={80}
                    priority={true}
                    loading="eager"
                    className="relative top-[20%] -z-50 sm:hidden"
                />
            </div>
            <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[19%] mdd:pb-[25%]">
                <RippleButton onClick={openModal}>
                    Получить консультацию
                </RippleButton>
            </div>
        </div>
    );
};

export default CountryPageHeader;