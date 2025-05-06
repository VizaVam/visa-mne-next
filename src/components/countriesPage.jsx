'use client'

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams, usePathname } from 'next/navigation';
import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import { useModal } from "@/components/modalcontext";
import Contacts from "@/components/contacts";
import Docs from "@/components/docs";
import Steps1 from "@/components/steps1";
import Breadcrumbs from "@/components/Breadcrumbs";

// Компонент для кнопки с эффектом ripple
const RippleButton = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
    >
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                    delay: i * 0.4,
                }}
            >
                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full" />
            </motion.span>
        ))}
        {children}
    </button>
);

// Компонент для хлебных крошек
const CountryBreadcrumbs = ({ country, pathname }) => (
    <nav className="mb-4 flex items-baseline sm:space-x-2 mdd:space-x-0 text-gray-600 gap-2">
        <Link href="/" className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
            Главная
        </Link>
        <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2" />
        <Link
            href="/shengenskie-vizy"
            className={`text-orange-500 hover:underline ${pathname === "/shengenskie-vizy" ? "font-semibold text-gray-900 pointer-events-none w-full active:scale-95 transition-transform duration-150 ease-in-out" : ""}`}
        >
            Шенгенские визы
        </Link>
        <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2" />
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

// Компонент для отображения вариантов
const VariantsList = ({ variants }) => (
    <ul className="text-black text-[14px] flex flex-col gap-2">
        {variants.map((variant, index) => (
            <li key={index} className="flex gap-2">
                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" />
                {variant}
            </li>
        ))}
    </ul>
);

// Компонент для кнопок типов виз
const VisaTypeButtons = ({ types, links, enabled }) => (
    <>
        {types.map((text, index) => (
            <div key={index} className="flex flex-col items-start">
                {enabled[index] ? (
                    <Link
                        href={`/shengenskie-vizy/${links[index]}`}
                        className="sm:w-full mdd:w-full text-[14px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                        {text}
                    </Link>
                ) : (
                    <div className="sm:w-full mdd:w-full text-[14px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-[4px] cursor-not-allowed pointer-events-none select-none">
                        {text}
                    </div>
                )}
            </div>
        ))}
    </>
);

// Функция для форматирования текста с жирным шрифтом
const parseText = (text) => {
    if (typeof text !== "string") return text || "";
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) =>
        index % 2 === 1 ? <b key={index}>{part}</b> : part
    );
};

// Компонент для отображения текстового блока
const TextBlock = ({ text, parseText, className = "" }) => (
    text && <p className={`text-black text-[14px] ${className}`}>
        {parseText(text)}
    </p>
);

// Компонент для отображения заголовка
const SectionTitle = ({ title, className = "" }) => (
    title && <h3 className={`text-black text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-medium ${className}`}>
        {title}
    </h3>
);

// Компонент для отображения цены
const PriceDisplay = ({ country }) => {
    if (!country.price1) return null;

    return (
        <p className="text-black text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-medium">
            Наша услуга:{" "}
            {['Польша', 'Болгария'].includes(country.name) ? (
                <>от <span className="text-orange-500">{parseText(country.price1)}</span> бел. руб. {parseText(country.priceType)}</>
            ) : (
                <><span className="text-orange-500">{parseText(country.price1)}</span> бел. руб. {parseText(country.priceType)}</>
            )}
        </p>
    );
};

// Компонент для отображения альтернативного ценообразования
const AlternativePricing = ({ country }) => (
    <div className="flex flex-col gap-6 lg:w-[80%]">
        {country.priceTitle && (
            <p className="text-black md:text-[26px] sm:text-[20px] mdd:text-[18px] font-medium">
                {country.priceTitle}
            </p>
        )}
        {country.priceVariants?.length > 0 && (
            <VariantsList variants={country.priceVariants} />
        )}
    </div>
);

// Компонент для отображения карточки страны
const CountryCard = ({ country }) => (
    <Link href={`/shengenskie-vizy/${country.url}`}>
        <div className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[4px] overflow-hidden shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image
                src={country.img}
                alt={country.name}
                width={300}
                height={200}
                className="w-full object-cover"
            />
            <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                        <Image src={country.svg} alt={country.name} width={24} height={24} />
                        <p className="font-medium mdd:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                            {country.name}
                        </p>
                    </div>
                    <Image
                        src="/Line 5.png"
                        alt=""
                        width={24}
                        height={24}
                        className="lg:w-6 md:w-6 sm:w-6 mdd:hidden"
                    />
                </div>
            </div>
        </div>
    </Link>
);

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

export default function CountryPage({ breadcrumbs }) {
    const { country: countryUrl } = useParams();
    const { openModal } = useModal();
    const pathname = usePathname();

    // Находим данные страны
    const selectedCountry = useMemo(() =>
            countries.find(c => c.url === countryUrl),
        [countryUrl]
    );

    if (!selectedCountry) {
        return notFound();
    }

    // Определяем, нужно ли показывать расширенный контент
    const showExtendedContent = selectedCountry.good !== 0;

    // Страны для блока "Другие страны"
    const recommendedCountries = useMemo(() =>
            ["viza-v-grecziyu", "viza-v-sloveniu", "viza-v-germaniyu", "viza-v-ispaniyu"]
                .map(url => countries.find(c => c.url === url))
                .filter(Boolean),
        []
    );

    // Список стран с ограниченным контентом
    const limitedContentCountries = ["viza-v-litvu", "viza-v-latviyu", "viza-v-italiyu", "viza-v-chehiyu"];

    return (
        <div className="flex flex-col items-center">
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}

            {/* Шапка страницы */}
            <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                <div className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[300px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col xl:gap-32 lg:gap-20 sm:gap-12 mdd:gap-12">
                    <CountryBreadcrumbs country={selectedCountry} pathname={pathname} />
                    <h1 className="ht:text-[52px] lg:text-[52px] md:text-[50px] sm:text-[48px] mdd:text-[30px] font-semibold text-black uppercase leading-none">
                        {excludedCountries1.includes(selectedCountry.url)
                            ? selectedCountry.n
                            : `Виза ${selectedCountry.n === "Францию" ? "во" : "в"} ${selectedCountry.n}`}
                    </h1>
                </div>

                <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[10%] mt-[20%] relative z-5">
                    <Image
                        src={selectedCountry.rb === 1 ? "/visa-c.png" : "/visa-cc.png"}
                        alt=""
                        width={1000}
                        height={1000}
                        priority={true}
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
                        Оформить заявку
                    </RippleButton>
                </div>
            </div>

            {/* Баннер страны с адаптивным изображением */}
            <div className="w-full relative ht:bottom-[60px] xl:bottom-[60px] lg:bottom-[30px]">
                <picture>
                    {/* Мобильная версия (до 768px) */}
                    <source
                        media="(max-width: 768px)"
                        srcSet={selectedCountry.bannerMobile || selectedCountry.banner}
                        width={600}
                        height={400}
                    />
                    {/* Десктопная версия */}
                    <Image
                        src={selectedCountry.banner}
                        alt={`Визовые услуги для ${selectedCountry.name}`}
                        width={1800}
                        height={1200}
                        className="w-full h-96 object-cover object-center px-0 lg:px-[7%] md:px-[7%]"
                        priority
                    />
                </picture>
            </div>

            {showExtendedContent ? (
                <div className="w-full">
                    <Steps1 />
                    <div className="px-[7%]">
                        <div className="pb-24 flex flex-col gap-6 lg:w-[60%]">
                            <SectionTitle title={selectedCountry.title} />
                            <TextBlock text={selectedCountry.textTop} parseText={parseText} />
                            <TextBlock text={selectedCountry.text1} parseText={parseText} />

                            {selectedCountry.variants?.length > 0 && (
                                <VariantsList variants={selectedCountry.variants} />
                            )}

                            {selectedCountry.typevb1?.length > 0 && (
                                <VisaTypeButtons
                                    types={selectedCountry.typevb1}
                                    links={selectedCountry.typevl1}
                                    enabled={selectedCountry.enabled1 || []}
                                />
                            )}

                            {Array.isArray(selectedCountry.text11) && (
                                <div>
                                    {selectedCountry.text11.map((text, i) => (
                                        <TextBlock key={i} text={text} parseText={parseText} />
                                    ))}
                                </div>
                            )}

                            <SectionTitle title={selectedCountry.title22} />
                            <TextBlock text={selectedCountry.text2} parseText={parseText} />
                            <TextBlock text={selectedCountry.text3} parseText={parseText} />

                            {selectedCountry.variants11?.length > 0 && (
                                <VariantsList variants={selectedCountry.variants11} />
                            )}

                            <TextBlock text={selectedCountry.text4} parseText={parseText} />
                            <TextBlock text={selectedCountry.text5} parseText={parseText} />

                            <SectionTitle title={selectedCountry.title2} />
                            {selectedCountry.variants2?.length > 0 && (
                                <VariantsList variants={selectedCountry.variants2} />
                            )}

                            {Array.isArray(selectedCountry.text22) && (
                                <div>
                                    {selectedCountry.text22.slice(0, 3).map((text, i) => (
                                        <TextBlock key={i} text={text} parseText={parseText} />
                                    ))}
                                </div>
                            )}

                            <TextBlock text={selectedCountry.text6} parseText={parseText} />

                            <SectionTitle title={selectedCountry.title33} />
                            <TextBlock text={selectedCountry.text7} parseText={parseText} />
                            <TextBlock text={selectedCountry.text8} parseText={parseText} />

                            {selectedCountry.variants3?.length > 0 && (
                                <VariantsList variants={selectedCountry.variants3} />
                            )}

                            {selectedCountry.priceGood !== 0 ? (
                                <PriceDisplay country={selectedCountry} />
                            ) : (
                                <AlternativePricing country={selectedCountry} />
                            )}

                            {selectedCountry.typev && (
                                <p className="text-black text-2xl lg:text-4xl md:text-3xl sm:text-2xl font-medium">
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
                    </div>
                    <Docs />
                </div>
            ) : (
                <div className="px-[7%] flex flex-col gap-10 items-center">
                    {limitedContentCountries.includes(selectedCountry.url) && (
                        <div className="xl:pt-0 pt-24 flex flex-col gap-6 items-center lg:w-[60%] sm:w-full mdd:w-full">
                            {selectedCountry.title && (
                                <h3 className="text-[#F86F00] lg:text-5xl md:text-5xl sm:text-4xl mdd:text-2xl font-medium">
                                    {selectedCountry.title}
                                </h3>
                            )}

                            <div className="flex flex-col gap-6">
                                <TextBlock text={selectedCountry.text1} parseText={parseText} />
                                <TextBlock text={selectedCountry.text2} parseText={parseText} />

                                {selectedCountry.variants?.length > 0 && (
                                    <VariantsList variants={selectedCountry.variants} />
                                )}

                                <TextBlock text={selectedCountry.text3} parseText={parseText} />
                                <TextBlock text={selectedCountry.text4} parseText={parseText} />

                                {Array.isArray(selectedCountry.text22) && (
                                    <div>
                                        {selectedCountry.text22.slice(0, 2).map((text, i) => (
                                            <TextBlock key={i} text={text} parseText={parseText} />
                                        ))}
                                    </div>
                                )}

                                {selectedCountry.priceGood === 0 && (
                                    <AlternativePricing country={selectedCountry} />
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-4 mt-16">
                        <p className="text-black text-[14px]">
                            Для получения шенгенской визы Вы можете воспользоваться одним из следующих вариантов:
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-2">
                            {recommendedCountries.map((country, index) => (
                                <CountryCard key={index} country={country} />
                            ))}
                        </div>
                    </div>

                    <div className="sm:mt-6 text-center w-full">
                        <Link href="/shengenskie-vizy">
                            <button className="bg-customBlue sm:w-max mdd:w-full hover:bg-blue-600 text-white py-3 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                                Еще больше стран
                            </button>
                        </Link>
                    </div>
                </div>
            )}

            <Contacts />
        </div>
    );
}