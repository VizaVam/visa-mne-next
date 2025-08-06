// components/countriesPage/CountryPageContent.jsx
'use client'

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { countries } from "@/data/countries";
import { useModal } from "@/components/modalcontext";

// Lazy-loaded components
const Discount = dynamic(() => import("@/components/discount"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка акций...</div>
});
const Slider = dynamic(() => import("@/components/slider"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка слайдера...</div>
});
const TakePrice = dynamic(() => import("@/components/TakePrice"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка формы...</div>
});
const DocsShengen = dynamic(() => import("@/components/docsShengen"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка документов...</div>
});
const Docs = dynamic(() => import("@/components/docs"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка документов...</div>
});
const DownloadFiles = dynamic(() => import("@/components/downloadFiles"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка файлов...</div>
});
const PhoneForm = dynamic(() => import("@/components/newModal"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка формы...</div>
});
const NewStepsCountries = dynamic(() => import("@/components/newStepsCountries"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка шагов...</div>
});
const FAQ = dynamic(() => import("@/components/Faq"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка FAQ...</div>
});
const Contacts = dynamic(() => import("@/components/contacts"), {
    ssr: false,
    loading: () => <div className="py-4 text-center">Загрузка контактов...</div>
});

// Reusable components from country folder
import {
    PriceTable,
    WhoItSuitsTable,
    VariantsList,
    VisaTypeButtons,
    TextBlock,
    SectionTitle,
    parseText
} from "@/components/country";

const CountryPageContent = ({ countryUrl, urlParam }) => {
    const { openModal } = useModal();
    const pathname = usePathname();
    const { country: urlParamFromHook } = useParams();

    const selectedCountry = useMemo(() =>
            countries.find(c => c.url === (countryUrl || urlParamFromHook)),
        [countryUrl, urlParamFromHook]
    );

    if (!selectedCountry) {
        return null; // or handle not found case
    }

    // Constants (moved from original component)
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
    const litva = [
        "viza-v-litvu",
        "viza-v-chehiyu"
    ];
    const form = [
        "viza-v-latviyu",
        "viza-v-chehiyu"
    ];
    const il = [
        "viza-v-litvu",
        "viza-v-italiyu"
    ];
    const subWorkGermany = [
        "rabochaya-viza-v-germaniyu"
    ];
    const subWorkPoland = [
        "rabochaya-viza-v-polshu"
    ];
    const italy = [
        "viza-v-italiyu"
    ];
    const docs = [
        "rabochaya-viza-v-germaniyu",
        "rabochaya-viza-v-polshu",
        "viza-v-polshu",
        "delovaya-viza-v-polshu",
        "uchebnaya-viza-v-polshu",
        "gostevaya-polskaya-viza",
        "viza-v-polsy-po-karte-polyaka",
        "viza-v-germaniyu",
        "viza-vo-francziyu",
        "viza-v-horvatiu",
        "viza-v-grecziyu",
        "viza-v-italiyu",
        "viza-v-avstriyu",
        "viza-v-sloveniu",
        "viza-v-ispaniyu",
        "rabochaya-viza-v-ispaniyu",
        "viza-v-bolgariyu",
        "rabochaya-viza-v-bolgariyu",
        "viza-v-niderlandy",
        "viza-v-vengriyu",
        "viza-v-rumyniyu",
        "viza-v-ssha",
        "viza-v-velikobritaniyu",
        "viza-v-kitaj"
    ];
    const excludedPoland = [
        "viza-v-polshu",
        "rabochaya-viza-v-polshu",
        "delovaya-viza-v-polshu",
        "uchebnaya-viza-v-polshu",
        "gostevaya-polskaya-viza",
        "viza-v-polsy-po-karte-polyaka"
    ];

    const showExtendedContent = selectedCountry.good !== 0;
    const recommendedCountries = useMemo(() =>
            ["viza-v-grecziyu", "viza-v-sloveniu", "viza-v-germaniyu", "viza-v-ispaniyu"]
                .map(url => countries.find(c => c.url === url))
                .filter(Boolean),
        []
    );
    const limitedContentCountries = ["viza-v-litvu", "viza-v-latviyu", "viza-v-italiyu", "viza-v-chehiyu"];
    const isExcludedPoland = excludedPoland.includes(selectedCountry.url);

    return (
        <div className="flex flex-col items-center">
            <Discount/>
            <div className="w-full relative ht:bottom-[60px] xl:bottom-[60px] lg:bottom-[30px]">
                <Slider/>
            </div>
            {showExtendedContent ? (
                <div className="w-full">
                    <div className={`px-[7%] pb-16 mdd:pb-10`}>
                        <div className="pt-16 mdd:pt-10 flex flex-col gap-6">
                            <div className="flex flex-col gap-6 lg:w-[60%]">
                                <h2 title={selectedCountry.title}
                                    className={`text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold`}>
                                    {selectedCountry.title}
                                </h2>
                                <TextBlock text={selectedCountry.textTop} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text1} parseText={parseText}/>
                                {selectedCountry.variants?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants} parseText={parseText}/>
                                )}
                                {Array.isArray(selectedCountry.text11) && (
                                    <div>
                                        {selectedCountry.text11.map((text, i) => (
                                            <TextBlock key={i} text={text} parseText={parseText}/>
                                        ))}
                                    </div>
                                )}
                                <SectionTitle className="pt-10 mdd:pt-4" title={selectedCountry.title223}/>
                                <TextBlock text={selectedCountry.text53} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text54} parseText={parseText}/>
                                {selectedCountry.variants223?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants223} parseText={parseText}/>
                                )}
                                <SectionTitle className="pt-10 mdd:pt-4" title={selectedCountry.title22}/>
                                <TextBlock text={selectedCountry.text2} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text3} parseText={parseText}/>
                                {selectedCountry.variants11?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants11} parseText={parseText}/>
                                )}
                                <SectionTitle className="pt-10 mdd:pt-4" title={selectedCountry.title221}/>
                                <TextBlock text={selectedCountry.text4} parseText={parseText}/>
                                <TextBlock text={selectedCountry.text5} parseText={parseText}/>
                            </div>
                            {selectedCountry.typevc && (<div className="w-full pt-20 mdd:pt-8"><TakePrice/></div>)}
                            {selectedCountry.typevc && (
                                <p className="pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                                    {parseText(selectedCountry.typevc)}
                                </p>
                            )}
                            {selectedCountry.typevc && (
                                <TextBlock text={selectedCountry.textc} parseText={parseText}/>)}
                            {selectedCountry.typevbc?.length > 0 && (
                                <VisaTypeButtons
                                    types={selectedCountry.typevbc}
                                    links={selectedCountry.typevlc}
                                    enabled={selectedCountry.enabled || []}
                                />
                            )}
                            {selectedCountry.title2 && (
                                <SectionTitle className="pt-10 mdd:pt-4" title={selectedCountry.title2}/>)}
                            {selectedCountry.variants2?.length > 0 && (
                                <VariantsList variants={selectedCountry.variants2} parseText={parseText}/>
                            )}
                            {Array.isArray(selectedCountry.text22) && (
                                <div>
                                    {selectedCountry.text22.slice(0, 3).map((text, i) => (
                                        <TextBlock key={i} text={text} parseText={parseText}/>
                                    ))}
                                </div>
                            )}
                            {selectedCountry.text6 && (<TextBlock text={selectedCountry.text6} parseText={parseText}/>)}
                            {selectedCountry.text7 && (<TextBlock text={selectedCountry.text7} parseText={parseText}/>)}
                            {selectedCountry.text8 && (<TextBlock text={selectedCountry.text8} parseText={parseText}/>)}
                            {selectedCountry.variants3?.length > 0 && (
                                <VariantsList variants={selectedCountry.variants3} parseText={parseText}/>)}
                            {selectedCountry.typevp && (<div className="w-full pt-20 mdd:pt-8"><TakePrice/></div>)}
                            {selectedCountry.typevp && (
                                <p className="pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold">{parseText(selectedCountry.typevp)}</p>)}
                            {selectedCountry.typevbp?.length > 0 && (
                                <VisaTypeButtons
                                    types={selectedCountry.typevbp}
                                    links={selectedCountry.typevlp}
                                    enabled={selectedCountry.enabled || []}
                                />)}
                            {selectedCountry.typev && (<div className="w-full pt-20 mdd:pt-8"><TakePrice/></div>)}
                            <div className="flex flex-col gap-6 lg:w-[60%]">
                                {selectedCountry.typev && (
                                    <p className="pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                                        {parseText(selectedCountry.typev)}
                                    </p>
                                )}
                                {selectedCountry.typevb?.length > 0 && (
                                    <VisaTypeButtons
                                        types={selectedCountry.typevb}
                                        links={selectedCountry.typevl}
                                        enabled={selectedCountry.enabled || []}
                                    />
                                )}
                            </div>
                            <SectionTitle
                                className="pt-10 mdd:pt-4"
                                title={`Кому подходит ${selectedCountry.match}`}
                            />
                            <TextBlock
                                text={`Подходит для граждан РБ и иностранных граждан, имеющих ВНЖ Республики Беларусь!`}
                                parseText={parseText}/>
                            <WhoItSuitsTable
                                country={selectedCountry}
                                parseText={parseText}
                                excludedCountries1={excludedCountries1}
                            />
                            <TextBlock text={selectedCountry.text001} parseText={parseText}/>
                            <SectionTitle
                                className="pt-10 mdd:pt-4"
                                title={
                                    selectedCountry.url === "viza-v-polsy-po-karte-polyaka"
                                        ? "Кому подходит виза по Карте Поляка"
                                        : excludedCountries1.includes(selectedCountry.url)
                                            ? selectedCountry.pr
                                            : `Стоимость оформления визы ${selectedCountry.n === "Францию" ? "во" : "в"} ${selectedCountry.n}`
                                }
                            />
                            <PriceTable country={selectedCountry} parseText={parseText}/>
                        </div>
                    </div>
                    <div className={"pt-16 mdd:pt-10"}>
                        {docs.includes(selectedCountry.url) ? (
                            <DocsShengen countryUrl={selectedCountry.url}/>
                        ) : (
                            <Docs/>
                        )}
                    </div>
                    <DownloadFiles/>
                    <NewStepsCountries/>
                    <PhoneForm/>
                    <FAQ countryUrl={selectedCountry.url}/>
                    <Contacts/>
                </div>
            ) : (
                <div className="w-full">
                    <div className="px-[7%] flex flex-col gap-10">
                        {limitedContentCountries.includes(selectedCountry.url) && (
                            <div className="xl:pt-0 pt-24 flex flex-col gap-6">
                                {selectedCountry.title12 && (
                                    <h3 className="text-[#F86F00] text-center lg:text-5xl md:text-5xl sm:text-4xl mdd:text-2xl font-medium">
                                        {selectedCountry.title12}
                                    </h3>
                                )}
                                <div className="flex flex-col gap-6 lg:w-[60%]">
                                    {selectedCountry.title && (
                                        <h3 className="text-[#F86F00] lg:text-5xl md:text-5xl sm:text-4xl mdd:text-2xl font-medium">
                                            {selectedCountry.title}
                                        </h3>
                                    )}
                                    <div className="flex flex-col gap-6">
                                        <TextBlock text={selectedCountry.text1} parseText={parseText}/>
                                        <TextBlock text={selectedCountry.text2} parseText={parseText}/>
                                        <SectionTitle title={selectedCountry.title1} parseText={parseText}/>
                                        <TextBlock text={selectedCountry.text22} parseText={parseText}/>
                                        {selectedCountry.variants?.length > 0 && (
                                            <VariantsList variants={selectedCountry.variants} parseText={parseText}/>
                                        )}
                                        <TextBlock text={selectedCountry.text3} parseText={parseText}/>
                                        <TextBlock text={selectedCountry.text4} parseText={parseText}/>
                                        <TextBlock text={selectedCountry.text44} parseText={parseText}/>
                                        <SectionTitle title={selectedCountry.title13} parseText={parseText}/>
                                        <TextBlock text={selectedCountry.text5} parseText={parseText}/>
                                        {Array.isArray(selectedCountry.text22) && (
                                            <div>
                                                {selectedCountry.text22.slice(0, 2).map((text, i) => (
                                                    <TextBlock key={i} text={text} parseText={parseText}/>
                                                ))}
                                            </div>
                                        )}
                                        {selectedCountry.variants12?.length > 0 && (
                                            <VariantsList variants={selectedCountry.variants12} parseText={parseText}/>
                                        )}
                                    </div>
                                </div>
                                {!form.includes(selectedCountry.url) && (
                                    <div className="w-full pt-20 mdd:pt-8">
                                        <TakePrice/>
                                    </div>
                                )}
                                <div className="flex flex-col gap-6 lg:w-[60%]">
                                    {selectedCountry.typev && (
                                        <p className="pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                                            {parseText(selectedCountry.typev)}
                                        </p>
                                    )}
                                    {selectedCountry.typevb?.length > 0 && (
                                        <VisaTypeButtons
                                            types={selectedCountry.typevb}
                                            links={selectedCountry.typevl}
                                            enabled={selectedCountry.enabled || []}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col gap-6 lg:w-[60%]">
                                    {il.includes(selectedCountry.url) && (<div className={"flex flex-col gap-6"}>
                                        <SectionTitle
                                            className="pt-10 mdd:pt-4"
                                            title={`Кому подходит ${selectedCountry.match}`}
                                        />
                                        <TextBlock
                                            text={selectedCountry.textmatch1}
                                            parseText={parseText}/>
                                        {selectedCountry.textmatch1 && (
                                            <div className="overflow-x-auto w-full">
                                                <table className="w-full border-collapse">
                                                    <colgroup>
                                                        <col className="w-1/2"/>
                                                        <col className="w-1/2"/>
                                                    </colgroup>
                                                    <thead>
                                                    <tr>
                                                        <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                                                            {excludedCountries1.includes(selectedCountry.url) ? "Категории граждан" : "Типы визы"}
                                                        </th>
                                                        <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left text-[14px] font-semibold text-gray-700 w-1/2">
                                                            Цель поездки
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {selectedCountry.matchTable1 &&
                                                        selectedCountry.matchTable1.map((row, index) => (
                                                            <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                                                                <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.typeviza1)}</td>
                                                                <td className="border border-[#CEE2FA] px-4 py-3 text-[14px] text-gray-700">{parseText(row.goaltrip1)}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        )}
                                        <TextBlock
                                            text={selectedCountry.textmatch}
                                            parseText={parseText}/>
                                        <WhoItSuitsTable
                                            country={selectedCountry}
                                            parseText={parseText}
                                            excludedCountries1={excludedCountries1}
                                        />
                                    </div>)}
                                    <SectionTitle title={selectedCountry.title14} parseText={parseText}/>
                                    <TextBlock text={selectedCountry.text66} parseText={parseText}/>
                                </div>
                                {selectedCountry.url === "viza-v-italiyu" && (
                                    <>
                                        <SectionTitle
                                            className="pt-10 mdd:pt-4"
                                            title={`Стоимость оформления визы ${selectedCountry.n === "Францию" ? "во" : "в"} ${selectedCountry.n}`}
                                        />
                                        <PriceTable country={selectedCountry} parseText={parseText}/>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    {form.includes(selectedCountry.url) && (
                        <div className="w-full px-[7%] pt-20 mdd:pt-8">
                            <TakePrice/>
                        </div>
                    )}
                    <div className={"pt-32 mdd:pt-20"}>
                        {docs.includes(selectedCountry.url) ? (
                            <DocsShengen countryUrl={selectedCountry.url}/>
                        ) : (
                            <Docs/>
                        )}
                    </div>
                    <DownloadFiles/>
                    <NewStepsCountries/>
                    {litva.includes(selectedCountry.url) ? (
                        <div></div>
                    ) : (
                        <PhoneForm/>
                    )}
                    <FAQ countryUrl={selectedCountry.url}/>
                    <Contacts/>
                </div>
            )}
            <style jsx>{`
                .bold-list-numbers ::marker {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
};

export default CountryPageContent;