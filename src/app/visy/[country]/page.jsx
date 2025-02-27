"use client"

import Contacts from "@/components/contacts";
import Link from "next/link";
import {notFound, useParams} from 'next/navigation';
import {countries} from '@/components/serviceson';
import Steps from "@/components/steps";
import Docs from "@/components/docs";
import {useState} from "react";
import Image from "next/image";
import {useModal} from "@/components/modalcontext";
import {usePathname} from "next/navigation";
import Steps1 from "@/components/steps1";

export default function CountryPage({params}) {
    const {country} = useParams();
    const {openModal} = useModal();
    const selectedCountry = countries.find(c => c.url === country);
    const countryOrder = {"viza-v-grecziyu": 1, "viza-v-sloveniu": 2, "viza-v-germaniyu": 3, "viza-v-ispaniyu": 4};
    const pathname = usePathname();

    // Найти текущую страну в списке
    const currentCountry = countries.find(c => c.url === country);

    // Определяем, нужно ли ограничивать список стран
    const isLimited = currentCountry?.good === 0;
    const [showAll, setShowAll] = useState(!isLimited); // Если ограничение, скрываем

    // Определяем список отображаемых стран
    const displayedCountries = showAll ? countries : countries.slice(0, 4);

    const sortedCountries = [...displayedCountries].sort((a, b) => {
        const order = ["viza-v-grecziyu", "viza-v-sloveniu", "viza-v-germaniyu", "viza-v-ispaniyu"];
        return order.indexOf(a.url.toLowerCase()) - order.indexOf(b.url.toLowerCase());
    });

    if (!selectedCountry) {
        return notFound();
    }

    const parseText = (text) => {
        const parts = text.split(/\*\*(.*?)\*\*/g); // Разделяем текст по **жирным фрагментам**
        return parts.map((part, index) =>
            index % 2 === 1 ? <b key={index}>{part}</b> : part
        );
    };

    return (
        <div className={"flex flex-col items-center"}>
            <div className={"w-full relative flex flex-col lg:flex-row sm:flex-col justify-between"}>
                <div
                    className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[300px] mdd:top-[180px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col xl:gap-32 lg:gap-20 sm:gap-12 mdd:gap-12">
                    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                        <Link href="/"
                              className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Главная</Link>
                        <span><img className="w-2" src="/nav-icon.png" alt=">"/></span>
                        <Link href="/visy"
                              className={`text-orange-500 hover:underline ${pathname === "/visy" ? "font-semibold text-gray-900 pointer-events-none active:scale-95 transition-transform duration-150 ease-in-out" : ""}`}>
                            Визы
                        </Link>
                        <span><img className="w-2" src="/nav-icon.png" alt=">"/></span>
                        <span className="font-semibold text-gray-900 cursor-default">{selectedCountry.name}</span>
                    </nav>
                    <h1 className="lg:text-[56px] md:text-[56px] sm:text-[48px] mdd:text-[40px] font-semibold text-black uppercase leading-none">
                        Виза {["Францию"].includes(selectedCountry.n) ? "Во " : "В "}{" "}
                        <span
                            className={`${
                                ["Великобританию", "Нидерланды"].includes(selectedCountry.n)
                                    ? "lg:text-[56px] md:text-[56px] sm:text-[48px] mdd:text-[30px]"
                                    : "lg:text-[56px] md:text-[56px] sm:text-[48px] mdd:text-[40px]"
                            } font-semibold text-black uppercase block"
                            `}
                        >
                            {selectedCountry.n}
                        </span>
                    </h1>


                </div>
                <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[15%] mt-[20%] relative z-5">
                    {selectedCountry.rb === 1 ? (
                        <Image src={"/visa-c.png"} alt={""} width={1000}
                               height={1000}
                               className="relative lg:top-[120px] sm:top-0 lg:w-[50%] lg:left-[50%] -z-50 mdd:hidden"/>
                    ) : (
                        <Image src={"/visa-cc.png"} alt={""} width={1000}
                               height={1000}
                               className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[50%] -z-50 mdd:hidden"/>
                    )}
                    {selectedCountry.rb === 1 ? (
                        <Image src={"/visa-1.svg"} alt={""} width={1000}
                               height={1000} className="relative top-[20%] -z-50 sm:hidden"/>
                    ) : (
                        <Image src={"/visa-0.svg"} alt={""} width={1000}
                               height={1000} className="relative top-[20%] -z-50 sm:hidden"/>
                    )}
                </div>
                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[19%] mdd:pb-[25%]">
                    <button
                        onClick={openModal}
                        className="bbbt relative w-[100%] bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[2px] active:scale-95 transition-transform duration-150 ease-in-out">
                        Оформить заявку
                    </button>
                </div>
            </div>
            <div className={"w-full relative ht:bottom-[110px] xl:bottom-[60px] lg:bottom-[30px]"}>
                <img
                    src={`${selectedCountry.banner}`}
                    alt=""
                    className="w-full h-96 object-cover object-center px-0 lg:px-[7%] md:px-[7%]"
                />
            </div>

            {selectedCountry.good !== 0 ? (
                <div className={"w-full"}>
                    <Steps1 />
                    <div className={"px-[7%]"}>
                    {["viza-v-polshu", "viza-v-sloveniu", "viza-v-germaniyu", "viza-v-ispaniyu", "viza-vo-francziyu", "viza-v-ssha", "viza-v-bolgariyu", "viza-v-niderlandy", "viza-v-grecziyu", "viza-v-vengriyu", "viza-v-rumyniyu", "viza-v-avstriyu"].includes(selectedCountry.url) && (
                            <div className="pb-24 flex flex-col gap-6 lg:w-[60%]">
                                {selectedCountry.title &&
                                    <h1 className="text-black text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-medium">{selectedCountry.title}</h1>}
                                {selectedCountry.text1 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text1)}</p>}
                                {selectedCountry.variants && selectedCountry.variants.length > 0 && (
                                    <ul className="text-black text-[14px] flex flex-col gap-2">
                                        {selectedCountry.variants.map((variant, index) => (
                                            <li key={index} className="flex gap-2">
                                                <img className="w-6 h-6" src="/check-0.png" alt=""/>
                                                {variant}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {selectedCountry.text2 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text2)}</p>}
                                {selectedCountry.text3 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text3)}</p>}
                                {selectedCountry.text4 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text4)}</p>}
                                {selectedCountry.text5 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text5)}</p>}
                                {selectedCountry.title2 &&
                                    <h1 className="text-black lg:text-4xl mdd:text-[16px]">{selectedCountry.title2}</h1>}
                                {selectedCountry.variants2 && selectedCountry.variants2.length > 0 && (
                                    <ul className="text-black text-[14px] flex flex-col gap-2">
                                        {selectedCountry.variants2.map((variant, index) => (
                                            <li key={index} className="flex gap-2">
                                                <img className="w-6 h-6" src="/check-0.png" alt=""/>
                                                {variant}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                    <Docs/>
                </div>
            ) : (
                <div className="px-[7%] flex flex-col gap-10 items-center">
                    {["viza-v-litvu", "viza-v-latviyu", "viza-v-italiyu", "viza-v-velikobritaniyu"].includes(selectedCountry.url) && (
                        <div className="xl:pt-0 pt-24 flex flex-col gap-6 items-center lg:w-[60%] sm:w-full mdd:w-full">
                            {selectedCountry.title &&
                                <h1 className="text-[#F86F00] lg:text-5xl md:text-5xl sm:text-4xl mdd:text-2xl font-medium">{selectedCountry.title}</h1>}

                            <div className="flex flex-col gap-6">
                                {selectedCountry.text1 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text1)}</p>}
                                {selectedCountry.text2 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text2)}</p>}
                                {selectedCountry.variants && selectedCountry.variants.length > 0 && (
                                    <ul className="list-disc list-inside text-black text-[14px] flex flex-col gap-2">
                                        {selectedCountry.variants.map((variant, index) => (
                                            <li key={index} className="flex gap-2">
                                                <img className="w-6 h-6" src="/check-0.png" alt=""/>
                                                {variant}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {selectedCountry.text3 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text3)}</p>}
                                {selectedCountry.text4 &&
                                    <p className="text-black text-[14px]">{parseText(selectedCountry.text4)}</p>}
                            </div>
                        </div>
                    )}

                    <div className={"flex flex-col gap-4 mt-16"}>
                        <p className={"text-black text-[14px]"}>Для
                            получения шенгенской визы Вы можете воспользоваться одним из следующих вариантов:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-2">
                            {Object.keys(countryOrder).map((countryKey, index) => {
                                const c = countries.find(c => c.url.toLowerCase() === countryKey);
                                if (!c) return null; // Пропускаем, если страны нет в списке

                                return (
                                    <Link href={`/visy/${c.url}`} key={index}>
                                        <div
                                            className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[2px] overflow-hidden shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                            <img src={c.img} alt={c.name} className="w-full object-cover"/>
                                            <div
                                                className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                                                <div className="flex flex-row justify-between items-center">
                                                    <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                                                        <img src={c.svg} alt={c.name} className="h-6"/>
                                                        <p className="font-medium mdd:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                                                            {c.name}
                                                        </p>
                                                    </div>
                                                    <img className="lg:w-6 md:w-6 sm:w-6 mdd:hidden" src="/Line 5.png"
                                                         alt=""/>
                                                    <img className={"mdd:w-3 dr:w-3 sm:hidden"} src={"/line123.png"}
                                                         alt={""}/>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="sm:mt-6 text-center">
                        <Link href="/visy">
                            <button
                                className="bg-customBlue w-max hover:bg-blue-600 text-white py-4 px-8 rounded-[2px] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                                Еще больше стран
                            </button>
                        </Link>
                    </div>
                </div>
            )}
            <Contacts/>
        </div>
    );
}
