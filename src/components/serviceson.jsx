'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {countries} from "@/data/countries";

export const otherCountries = [
    {
        name: "США",
        n: "США",
        rb: 0,
        img: "/usa.png",
        banner: "/usa-banner.png",
        svg: "/usa_flag.svg",
        url: "viza-v-ssha",
        good: 1,
        title: "Полезная информация",
        text1: "Соединенные Штаты Америки привлекают путешественников со всего мира благодаря \n" +
            "многочисленным достопримечательностям, разнообразной кухне и возможностям для \n" +
            "активного отдыха. Все больше людей также посещают США для встречи с родственниками.",
        text2: "Спрос на американские визы постоянно растет, и наша компания предлагает \n" +
            "квалифицированную помощь в их оформлении. **Белорусы могут получить визу с возможностью многократного въезда в течение года.**",
        text3: "Для подачи документов гражданам Беларуси необходимо обратиться в визовый центр или \n" +
            "Консульство, ближайшее из которых находится в Варшаве. Отсутствие вида на жительство \n" +
            "в Польше не является основанием для отказа в визе.",
        text4: "Процесс оформления включает **регистрацию на сайте, оплату пошлины и личное собеседование с Консулом** на английском или русском языке. Мы подберем \n" +
            "оптимальную страну для подачи заявления, подготовим необходимые документы и \n" +
            "запишем вас в Консульство на удобную дату.",
        priceGood: 0,
        priceTitle: "Наша услуга",
        priceVariants: [
            <span>Ваши документы-основания для получения визы - <span className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px]">400</span> бел. руб.</span>,
            <span>Сопровождение под ключ - <span className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px]">2800</span> бел. руб.</span>,
        ]
    },
    {
        name: "Великобритания",
        n: "Великобританию",
        rb: 1,
        img: "/greatbritain.png",
        banner: "/greatbritain-banner.png",
        svg: "/greatbritain_flag.svg",
        url: "viza-v-velikobritaniyu",
        good: 1,
        title: "Полезная информация",
        text1: "Виза для посещения Великобритании большим спросом среди жителей Беларуси. Она дает право находиться на территории Соединенного Королевства **6 месяцев, 2 года или 5 лет** - это зависит от размера консульского сбора, который Вы готовы заплатить как для гостевых, так и для туристических виз.",
        text2: "Все документы собираются заранее.",
        text3: "Наша компания занимается подготовкой документов на **туристические, деловые, гостевые визы.** В стоимость услуги включен **перевод всех необходимых для подачи заявления документов на английский язык.**",
        text4: "**Важно!** Документы находятся на рассмотрении от 8 недель, но в Визовом центре Великобритании есть дополнительная услуга, и вы можете оставить паспорт на время рассмотрения визового заявления при себе.",
        priceGood: 1,
        price1: "400",
    },
    {
        name: "Китай",
        n: "Китай",
        rb: 1,
        img: "/сhina.png",
        banner: "/china-banner.png",
        svg: "/china-flag.svg",
        url: "viza-v-kitaj",
        good: 1,
        title: "Полезная информация",
        text1: "В связи с развитием отношений между Беларусью и Китаем растёт число \n" +
            "обращений за визовой поддержкой.",
        text2: "Мы предоставляем услуги по оформлению необходимого документа и записи на \n" +
            "подачу визового заявления **для получения деловой визы.**",
        text3: "Услуга доступна для граждан Республики Беларусь. виза **открывается на 1 год** \n" +
            "с возможностью пребывания **до 90 дней в каждом полугодии.**",
        text4: "Запись и подготовка документов занимают **5 дней.**",
        text5: "**Внимание!** Данная виза не является туристической или рабочей.",
        priceGood: 0,
        priceTitle: "Наша услуга",
        priceVariants: [
            <span>Подготовка полного пакета документов и запись для подачи
визового заявления - <span className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px]">690</span> бел. руб.</span>,
        ]
    },
]

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAllCountries, setShowAllCountries] = useState(false);
    const excludedCountries = ["viza-v-velikobritaniyu", "viza-v-ssha", "viza-v-kitaj", "rabochaya-viza-v-bolgariyu", "rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

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
                    .map((country, index) => (
                    <Link href={`/shengenskie-vizy/${country.url}`} key={index}>
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
                                    <img className="lg:w-6 md:w-6 sm:w-6 mdd:hidden" src="/Line 5.png" alt=""/>
                                    <img className={"mdd:w-3 dr:w-3 sm:hidden"} src={"/line123.png"} alt={""}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {isMobile && !showAllCountries && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAllCountries(true)}
                        className="bg-customBlue sm:w-max mdd:w-full hover:bg-blue-600 text-white py-3 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                        Еще больше стран
                    </button>
                </div>
            )}
        </section>
    );
};


export default Services;