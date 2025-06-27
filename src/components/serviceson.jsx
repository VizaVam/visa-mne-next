'use client'

import {useEffect, useState} from "react";
import Link from "next/link";
import {countries} from "@/data/countries";

export const otherCountries = [
    {
        name: "США",
        n: "США",
        match: "виза в США",
        rb: 0,
        img: "/usa.png",
        banner: "/usa-banner.png",
        bannerMobile: "/usa-banner-mobile.png",
        svg: "/usa_flag.svg",
        url: "viza-v-ssha",
        good: 1,
        text1: "Соединенные Штаты Америки привлекают путешественников со всего мира благодаря многочисленным достопримечательностям, разнообразной кухне и возможностям для активного отдыха.",
        text2: "Спрос на американские визы постоянно растет, и наша компания предлагает квалифицированную помощь в их оформлении. Мы подберем **оптимальную страну для подачи заявления, подготовим необходимые документы и запишем вас в Консульство на удобную дату.**",
        text3: "Для подачи документов гражданам Беларуси необходимо обратиться в Консульство США, ближайшее из которого находится в Варшаве. Отсутствие вида на жительство в Польше не является основанием для отказа в приеме заявления на визу.",
        title2: "Процесс оформления визы",
        variants2: ["регистрация на сайте;",
            "заполнение визовой анкеты;",
            "оплата пошлины;",
            "личное собеседование с Консулом на английском или русском языке."],
        typevc: "Типы виз в США",
        typevbc: ["Деловая (B1)", "Туристическая (B2)", "B1/B2"],
        typevlc: ["asd", "asd", "asd"],
        enabled: [false, false, false],
        priceGood: 0,
        priceTitle: "Наши услуги",
        priceVariants: [
            <span>Ваши документы-основания для получения визы - <span
                className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px]">400</span> бел. руб.</span>,
            <span>Сопровождение под ключ - <span
                className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px]">2800</span> бел. руб.</span>,
        ],
        priceTable: [
            {
                service: "Услуга компании",
                cost: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">400</span> бел. руб.</span>,
                note: "Консультативная работа, помощь в подготовке необходимого пакета документов (включая перевод), запись на подачу визового заявления"
                ,
                serviceMob: "Консультация, подготовка документов (включая перевод), запись на подачу заявления;\n" +
                    "\n",
                costMob: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">400</span> бел. руб.</span>
                ,
            },
            {
                service: "Консульский/сервисный/логистический сбор",
                cost: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">195</span> $</span>,
                note: "Оплачивается лично в Консульстве США при подаче"
                ,
                serviceMob: "Консульский сбор\n" +
                    "\n",
                costMob: <span>$<span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">195</span> (оплачивается лично в Консульстве США при подаче)</span>
                ,
            },
            {
                service: "Медицинская страховка",
                cost: "Оплачивается отдельно",
                note: "Поможем подобрать оптимальный вариант!"
                ,
                serviceMob: "Медицинская страховка\n" +
                    "\n",
                costMob: "Оплачивается отдельно: подберем оптимальный вариант!!!",
            }
        ],
        matchTable: [
            {
                typeviza: "В1 (деловая)",
                goaltrip: "Конференции, переговоры, командировки"
            },
            {
                typeviza: "B2 (туристическая)",
                goaltrip: "Отдых, экскурсии, путешествие"
            },
            {
                typeviza: "B1/B2",
                goaltrip: "Туризм, отдых, посещение родственников, короткие курсы, лечение или деловые встречи"
            }
        ]
    },
    {
        name: "Великобритания",
        n: "Великобританию",
        match: "виза в Великобританию",
        rb: 1,
        img: "/greatbritain.png",
        banner: "/greatbritain-banner.png",
        bannerMobile: "/greatbritain-banner-mobile.png",
        svg: "/greatbritain_flag.svg",
        url: "viza-v-velikobritaniyu",
        good: 1,
        textTop: "Виза для посещения Великобритании большим спросом среди жителей Беларуси.Она дает право находиться на территории Соединенного Королевства **6 месяцев, 2 года или 5 лет** - это зависит от размера консульского сбора, который Вы готовы заплатить.",
        text1: "Наша компания помогает в оформлении необходимого пакета документов. В стоимость услуги включен перевод всех необходимых для подачи заявления документов на английский язык. Все документы собираются заранее.",
        typevc: "Типы виз в Великобританию",
        typevbc: ["Туристическая", "Деловая", "Гостевая"],
        typevlc: ["asd", "asd", "asd"],
        enabled: [false, false, false],
        text7: "**Важно!** Документы находятся на рассмотрении от 8 недель.",
        text8: "В Визовом центре Великобритании есть дополнительная услуга, и Вы можете оставить паспорт на время рассмотрения визового заявления при себе.",
        priceGood: 1,
        price1: "400",
        priceTable: [
            {
                service: "Услуга компании",
                cost: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">400</span> бел. руб.</span>,
                note: "Консультативная работа, помощь в подготовке необходимого пакета документов (включая перевод), запись на подачу визового заявления"
                ,
                serviceMob: "Консультация, подготовка документов (включая перевод), запись на подачу заявления;\n" +
                    "\n",
                costMob: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">400</span> бел. руб.</span>
                ,
            },
            {
                service: "Консульский/сервисный/логистический сбор",
                cost: "Оплачивается отдельно",
                note: "Оплачивается лично в консульстве или ВЦ при подаче"
                ,
                serviceMob: "Консульский/сервисный/логистический сбор\n" +
                    "\n",
                costMob: "Оплачивается отдельно в консульстве или ВЦ при подаче\n" +
                    "\n",
            },
            {
                service: "Медицинская страховка",
                cost: "Оплачивается отдельно",
                note: "Поможем подобрать оптимальный вариант!"
                ,
                serviceMob: "Медицинская страховка\n" +
                    "\n",
                costMob: "Оплачивается отдельно: подберем оптимальный вариант!!!\n" +
                    "\n",
            }
        ],
        matchTable: [
            {
                typeviza: "Туристическая",
                goaltrip: "Отдых, экскурсии, путешествие"
            },
            {
                typeviza: "Деловая",
                goaltrip: "Конференции, переговоры, командировки"
            },
            {
                typeviza: "Гостевая",
                goaltrip: "Посещение родственников или друзей по приглашению"
            }
        ]
    },
    {
        name: "Китай",
        n: "Китай",
        match: "виза в Китай",
        rb: 1,
        img: "/сhina.png",
        banner: "/china-banner.png",
        bannerMobile: "/china-banner-mobile.png",
        svg: "/china-flag.svg",
        url: "viza-v-kitaj",
        good: 1,
        textTop: "В связи с развитием отношений между Беларусью и Китаем растёт число обращений за визовой поддержкой.",
        text1: "Наша компания предоставляет **услуги по оформлению необходимого пакета документов и записи на подачу визового заявления** для получения деловой визы.",
        title22: "Преимущества подачи",
        variants11: ["виза открывается на 1 год с возможностью пребывания до 90 дней в каждом полугодии;",
            "pапись и подготовка документов занимают 5 дней;"],
        typevc: "Типы виз в Китай",
        typevbc: ["Деловая"],
        typevlc: ["asd"],
        enabled: [false],
        text6: "**Внимание!** Данная виза не является туристической или рабочей.",
        title33: "Кому доступна китайская деловая виза?",
        variants3: ["граждане Республики Беларусь, цель пребывания которых - заключение договоров, встреча с бизнес-партнерами, участие в управлении предприятием;"],
        priceGood: 0,
        priceTitle: "Наши услуги",
        priceVariants: [
            <span>Подготовка полного пакета документов и запись для подачи визового заявления - <span
                className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px]">690</span> бел. руб.</span>,
        ],
        priceTable: [


            {
                service: "Деловая виза (услуга компании)",
                cost: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">690</span> бел. руб.</span>,
                note: "Консультативная работа, помощь в подготовке необходимого пакета документов (включая перевод), запись на подачу визового заявления"
                ,
                serviceMob: "Деловая виза: консультация, подготовка документов (включая перевод), запись на подачу заявления\n" +
                    "\n",
                costMob: <span><span
                    className="text-orange-500 md:text-[20px] sm:text-[18px] mdd:text-[18px] whitespace-nowrap font-medium">690</span> бел. руб.</span>
                ,
            },
            {
                service: "Консульский/сервисный/логистический сбор",
                cost: "Оплачивается отдельно",
                note: "Оплачивается лично в Консульстве КНР при подаче"
                ,
                serviceMob: "Консульский/сервисный/логистический сбор\n" +
                    "\n",
                costMob: "Оплачивается лично в Консульстве КНР при подаче\n" +
                    "\n",
            },
            {
                service: "Медицинская страховка",
                cost: "Оплачивается отдельно",
                note: "Поможем подобрать оптимальный вариант!"
                ,
                serviceMob: "Медицинская страховка\n" +
                    "\n",
                costMob: "Оплачивается отдельно: подберем оптимальный вариант!!!\n" +
                    "\n"
                ,
            }
        ],
        matchTable: [
            {
                typeviza: "Туристическая",
                goaltrip: "Отдых, экскурсии, путешествие"
            },
            {
                typeviza: "Рабочая",
                goaltrip: "Официальное трудоустройство при наличии официального приглашения"
            },
            {
                typeviza: "Деловая",
                goaltrip: "Конференции, переговоры, командировки"
            },
            {
                typeviza: "Студенческая",
                goaltrip: "Обучение в учреждениях образования"
            }
        ]
    }
];

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showAllCountries, setShowAllCountries] = useState(false);
    const excludedCountries = ["rabochaya-viza-v-ispaniyu", "rabochaya-viza-v-germaniyu", "viza-v-velikobritaniyu", "viza-v-ssha", "viza-v-kitaj", "rabochaya-viza-v-bolgariyu", "rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

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