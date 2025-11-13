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
        <span className="font-semibold text-gray-900 cursor-default">Основные типы и категории виз</span>
    </nav>
);

export default function Kbtv({breadcrumbs}) {
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
        "headline": "Типы виз: чем отличается виза C от D и другие категории",
        "alternativeHeadline": "Полный обзор типов и категорий виз: A, C, D, LTV. Узнайте, какая виза нужна для туризма, транзита, работы или учебы, и в чем их принципиальные различия.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
"Виза в вашем паспорте содержит много информации, и ключевым является буквенный код, обозначающий тип визы. Эта классификация едина для всех стран Шенгенского соглашения.

Категория A: Аэропортовая транзитная виза.
Это самый редкий тип визы. Он не дает права покидать международную транзитную зону аэропорта и въезжать на территорию страны. Она требуется гражданам определенных стран (список утверждается ЕС) при пересадке в аэропортах Шенгенской зоны на пути в третью страну. Для граждан Беларуси, России и большинства стран СНГ эта виза не требуется.

Категория C: Краткосрочная единая шенгенская виза.
Это самая массовая и востребованная категория виз.
* Назначение. Туризм, деловые поездки, посещение родственников, лечение, участие в спортивных или культурных мероприятиях, краткосрочные учебные курсы.
* Срок действия. Позволяет находиться в Шенгенской зоне до 90 дней в течение любого 180-дневного периода.
* Подвиды. Может быть однократной (C1), двукратной или многократной (MULT), что позволяет совершать неограниченное число въездов в период ее действия. Срок действия мультивизы может быть от нескольких месяцев до 5 лет.

Важно: Эта виза не дает права на работу или ведение коммерческой деятельности.

Категория D: Долгосрочная национальная виза.
Эта виза выдается для пребывания на территории одной конкретной страны на срок свыше 90 дней.
* Назначение. Работа по контракту, обучение в вузе, воссоединение семьи, долгосрочное лечение.
* Срок действия. Обычно от 91 дня до 1 года. Является основанием для последующего запроса вида на жительство (ВНЖ) уже на территории страны.
* Двойное действие. Владелец визы D может постоянно проживать в стране, выдавшей визу, а также свободно путешествовать по другим странам Шенгена, соблюдая правило «90 дней из 180».

Виза с ограниченным территориальным действием (LTV - Limited Territorial Validity).
Это особый вид визы, которая действительна для посещения только той страны, которая ее выдала (или нескольких указанных стран), но не всей Шенгенской зоны. Ее выдают в исключительных случаях, например, по гуманитарным соображениям или когда паспорт заявителя не признается всеми странами-участницами.

Хотите получить визу с первого раза? С VISA VAM это реально! Мы используем проверенные методики и глубокое знание требований посольств, чтобы ваша заявка была максимально сильной.
"
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/kakie-byvayut-tipy-viz",
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
            "@id": "https://visavampro.by/poleznaya-informasia/kakie-byvayut-tipy-viz"
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
                        Основные типы и категории виз
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
                            Виза в вашем паспорте содержит много информации, 
                            и ключевым является буквенный код, обозначающий тип визы. 
                            Эта классификация едина для всех стран Шенгенского соглашения.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Категория A: Аэропортовая транзитная виза.</b></p>
                        <p>Это самый редкий тип визы. Он не дает права покидать международную транзитную зону аэропорта и въезжать на территорию страны. Она требуется гражданам определенных стран (список утверждается ЕС) при пересадке в аэропортах Шенгенской зоны на пути в третью страну. Для граждан Беларуси, России и большинства стран СНГ эта виза не требуется.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Категория C: Краткосрочная единая <Link href="/shengenskie-vizy" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">шенгенская виза</Link>.</b></p>
                        <p>Это самая массовая и востребованная категория виз.</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Назначение.</b> Туризм, деловые поездки, посещение родственников, лечение, участие в спортивных или культурных мероприятиях, краткосрочные учебные курсы.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Срок действия. </b> Позволяет находиться в Шенгенской зоне до 90 дней в течение любого 180-дневного периода.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Подвиды</b> Может быть однократной (C1), двукратной или многократной (MULT), что позволяет совершать неограниченное число въездов в период ее действия. Срок действия мультивизы может быть от нескольких месяцев до 5 лет.
                                </span>
                            </li>
                        </ul>
                        <p><b>Важно:</b> Эта виза не дает права на работу или ведение коммерческой деятельности.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Категория D: Долгосрочная национальная виза.</b>
                        </p>
                        <p>Эта виза выдается для пребывания на территории одной конкретной страны на срок свыше 90 дней.</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Назначение.</b> Работа по контракту, обучение в вузе, воссоединение семьи, долгосрочное лечение.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Срок действия.</b> Обычно от 91 дня до 1 года. Является основанием для последующего запроса вида на жительство (ВНЖ) уже на территории страны.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Двойное действие.</b> Владелец визы D может постоянно проживать в стране, выдавшей визу, а также свободно путешествовать по другим странам Шенгена, соблюдая правило «90 дней из 180».
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Виза с ограниченным территориальным действием (LTV - Limited Territorial Validity).</b></p>
                        <p>Это особый вид визы, которая действительна для посещения только той страны, которая ее выдала (или нескольких указанных стран), но не всей Шенгенской зоны. Ее выдают в исключительных случаях, например, по гуманитарным соображениям или когда паспорт заявителя не признается всеми странами-участницами.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Хотите получить визу с первого раза? С <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>VISA VAM </a> это реально! Мы используем проверенные методики и глубокое знание требований посольств, чтобы ваша заявка была максимально сильной.
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