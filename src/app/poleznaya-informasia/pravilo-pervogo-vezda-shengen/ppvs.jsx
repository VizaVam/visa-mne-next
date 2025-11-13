'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Fag2 from "@/components/fag2";
import Fag5, {faqData} from "@/components/fag5";
import NextArticleLink from "@/components/nextArtLink";

const BreadcrumbNav = ({pathname}) => (
    <nav className="mb-4 mdd:text-xs flex items-baseline sm:space-x-2 mdd:space-x-0 text-gray-600 gap-2">
        <Link href="/"
              className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
            Главная
        </Link>
        <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2"/>
        <Link
            href="/poleznaya-informasia"
            className={`text-orange-500 hover:underline ${pathname === "/poleznaya-informasia" ? "font-semibold text-gray-900 pointer-events-none w-full active:scale-95 transition-transform duration-150 ease-in-out" : ""}`}
        >
            Полезная информация
        </Link>
        <Image src="/nav-icon.png" alt="" width={8} height={8} className="w-2"/>
        <span className="font-semibold text-gray-900 cursor-default">Правило первого въезда и основной страны в Шенгене</span>
    </nav>
);

export default function Povv({breadcrumbs}) {
    const pathname = usePathname();
    const {openModal} = useModal();

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
            "@type": "Question",
            "name": `ВОПРОС: ${faq.question}`,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "author": [{
          "@type": "Person",
          "name": "Елизавета Бокая",
          "jobTitle": "руководитель отдела продаж"
        }],
        "headline": "Правило первого въезда и основной страны в Шенгене: как это работает",
        "alternativeHeadline": "Детальное объяснение правил использования шенгенской визы. Что важнее: страна первого въезда или страна основного пребывания? Как избежать проблем на границе.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
"Вопрос корректного использования шенгенской визы — один из самых важных для путешественника, так как его нарушение может привести к аннуляции визы прямо на границе. Давайте разберем два ключевых понятия.
1. Правило основной страны пребывания.
Это главное правило, закрепленное в Визовом кодексе. Оно определяет, в консульство какой страны вы должны подавать заявление.
Сценарий А: Поездка в одну страну. Если вы едете только в Германию, вы обязаны запрашивать немецкую визу.
Сценарий Б: Поездка в несколько стран. Вы должны определить, в какой из стран проведете больше всего ночей. Если ваш план: 4 ночи в Италии, 5 ночей во Франции и 2 ночи в Испании, то основной страной является Франция. Заявление нужно подавать в консульство Франции.
Сценарий В: Равное количество дней в разных странах. Если вы планируете провести по 3 дня в Австрии, Венгрии и Чехии, то визу нужно запрашивать у страны, границу которой вы пересечете первой. Если вы летите в Вену, то подаетесь в консульство Австрии.

2. «Правило первого въезда».
Это скорее неформальное понятие, вытекающее из первого. Идеальная ситуация для пограничника — когда вы с визой страны X въезжаете через границу страны X. Это логично и не вызывает вопросов.

Что будет, если нарушить правило первого въезда?
Пример: у вас французская виза (по ней вы собираетесь провести 10 дней в Париже), но летите вы через Мюнхен (Германия), потому что так дешевле, и в тот же день садитесь на поезд до Парижа. Немецкий пограничник имеет полное право спросить вас: «Почему вы с французской визой въезжаете через Германию?».
В этом случае вы должны быть готовы доказать, что ваша основная цель — именно Франция. Для этого необходимо иметь при себе:
* Распечатки броней отелей во Франции.
* Билет на поезд или самолет из Мюнхена в Париж.
* Любые другие документы, подтверждающие ваш маршрут (билеты на мероприятия, приглашения).

Если вы не сможете внятно объяснить свой маршрут и предоставить доказательства, пограничник может счесть, что вы обманули консульство при получении визы. В худшем случае это может привести к аннуляции визы и отказу во въезде. Поэтому, хотя въезжать через другую страну можно, всегда будьте готовы обосновать свой выбор маршрута.

Мы знаем, как важна каждая деталь при оформлении визы — от правильного заполнения анкеты до грамотного оформления финансовых документов. VISA VAM берёт на себя всю бумажную работу, оставляя вам только радость от предстоящей поездки."
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/pravilo-pervogo-vezda-shengen",
        "publisher": {
            "@type": "Organization",
            "name": "VISA VAM",
            "url": "https://visavampro.by/",
            "logo": {
                "@type": "ImageObject",
                "url": "/logo.png",
                "width": 600,
                "height": 60
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://visavampro.by/poleznaya-informasia/pravilo-pervogo-vezda-shengen"
        }
    };

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            <div
                className="w-full relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] flex flex-col sm:flex-col justify-between">
                <div
                    className="w-full text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname}/>
                    <h1 className="dm:w-full ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-medium text-black">
                        Правило первого въезда и основной страны в Шенгене
                    </h1>
                </div>
            </div>

            <div className="relative mt-[100px] md:mt-[160px]">
                {/* Banner Section */}
                {/* <div className="w-full relative">
                    <Image
                        src="/art4.jpg"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/art4.jpg"
                        alt="О компании VisaVam"
                        width={600}
                        height={400}
                        quality={80}
                        priority={true}
                        loading="eager"
                        className="w-full object-cover px-0 lg:px-[7%] md:px-[7%] sm:hidden"
                    />
                </div> */}

                {/* About Text Section */}
                <div
                    className="w-full relative flex flex-col gap-24 mdd:gap-12 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Вопрос корректного использования <Link href="/shengenskie-vizy" 
                                className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                target="_blank" rel="noopener noreferrer">шенгенской визы</Link> — один из самых важных для путешественника, так как его нарушение может привести к аннуляции визы прямо на границе. Давайте разберем два ключевых понятия.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <b>Правило основной страны пребывания.</b>
                        </p>
                        <p>
                            Это главное правило, закрепленное в Визовом кодексе. Оно определяет, в консульство какой страны вы должны подавать заявление.
                        </p>
                        <p>
                            <b>Сценарий А:</b> Поездка в одну страну. Если вы едете только в Германию, вы обязаны запрашивать немецкую визу.
                        </p>
                        <p>
                            <b>Сценарий Б:</b> Поездка в несколько стран. Вы должны определить, в какой из стран проведете больше всего ночей. Если ваш план: 4 ночи в Италии, 5 ночей во Франции и 2 ночи в Испании, то основной страной является Франция. Заявление нужно подавать в консульство Франции.
                        </p>
                        <p>
                            <b>Сценарий В:</b> Равное количество дней в разных странах. Если вы планируете провести по 3 дня в Австрии, Венгрии и Чехии, то визу нужно запрашивать у страны, границу которой вы пересечете первой. Если вы летите в Вену, то подаетесь в консульство Австрии.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <b>«Правило первого въезда»</b>
                        </p>
                        <p>
                            Это скорее неформальное понятие, вытекающее из первого. Идеальная ситуация для пограничника — когда вы с визой страны X въезжаете через границу страны X. Это логично и не вызывает вопросов.
                        </p>
                        <p>
                            Что будет, если нарушить правило первого въезда?
                        </p>
                        <p>
                            <b>Пример:</b> у вас французская виза (по ней вы собираетесь провести 10 дней в Париже), но летите вы через Мюнхен (Германия), потому что так дешевле, и в тот же день садитесь на поезд до Парижа. Немецкий пограничник имеет полное право спросить вас: «Почему вы с французской визой въезжаете через Германию?».
                        </p>
                        <p>
                            В этом случае вы должны быть готовы доказать, что ваша основная цель — именно Франция. Для этого необходимо иметь при себе:
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Распечатки броней отелей во Франции.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Билет на поезд или самолет из Мюнхена в Париж.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Любые другие документы, подтверждающие ваш маршрут (билеты на мероприятия, приглашения).
                                </span>
                            </li>
                        </ul>
                        <p>
                            Если вы не сможете внятно объяснить свой маршрут и предоставить доказательства, пограничник может счесть, что вы обманули консульство <b>при получении визы</b>. В худшем случае это может привести к аннуляции визы и отказу во въезде. Поэтому, хотя въезжать через другую страну можно, всегда будьте готовы обосновать свой выбор маршрута.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Мы знаем, как важна каждая деталь при оформлении визы — от правильного заполнения анкеты до грамотного оформления 
                            финансовых документов. <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>VISA VAM</a> берёт на себя всю бумажную работу, оставляя вам только радость от предстоящей поездки.
                        </p>
                    </div>
                </div>

                {/* Inject Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}}
                />

                <Contacts/>
            </div>
        </div>
    );
}