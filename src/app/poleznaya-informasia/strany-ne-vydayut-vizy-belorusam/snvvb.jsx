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
        <span className="font-semibold text-gray-900 cursor-default">Ограничения на выдачу виз для граждан Беларуси</span>
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
        "headline": "Какие страны не выдают визы белорусам в 2025 | Ограничения на визы",
        "alternativeHeadline": "Актуальный (август 2025) список стран, которые ввели ограничения или прекратили выдачу шенгенских виз для граждан Беларуси. Информация о текущей визовой политике.",
        "datePublished": "2025-11-01T08:00:00+05:00",
        "dateModified": "2025-11-01T21:33:00+05:00",
        "articleBody": `
С 2022 года визовая политика ряда стран Европейского союза по отношению к гражданам Беларуси претерпела значительные изменения. Важно понимать, что большинство ограничений касаются именно туристических виз (тип C) и не всегда затрагивают поездки по гуманитарным причинам, для воссоединения семьи или для международных перевозок.
По состоянию на август 2025 года, наиболее строгие ограничения для белорусов действуют в следующих странах:

1. Чехия. Одной из первых приостановила выдачу всех типов виз и ВНЖ для граждан РБ, за редкими исключениями строго гуманитарного характера. Прием заявлений на туристические визы полностью прекращен.
2. Литва и Латвия. Резко сократили прием визовых заявлений. Приоритет отдается членам семей граждан ЕС, лицам, следующим с гуманитарными целями (лечение, похороны), а также водителям-международникам. Получить туристическую визу в этих странах практически невозможно.
3. Эстония. Ввела запрет на въезд граждан Беларуси с туристическими шенгенскими визами, выданными любой страной. Выдача собственных туристических виз также остановлена. Исключения делаются для очень узкого круга лиц.
4. Польша. Не принимает документы на туристические визы. Основной фокус смещен на выдачу национальных рабочих виз, виз по программе Poland. Business Harbour (хотя и она была модифицирована) и гуманитарных виз.
5. Финляндия. Существенно ограничила прием заявлений на туристические визы и ввела ограничения на въезд через свою сухопутную границу для туристов.

Какие страны остаются лояльными?
Несмотря на ограничения, ряд стран продолжают принимать документы от белорусов на туристические визы. Среди них:
* Италия
* Испания
* Франция
* Греция
* Венгрия
* Германия (с более строгой проверкой)

Ситуация постоянно меняется. Решения могут как ужесточаться, так и смягчаться. Наше визовое агентство VISA VAM ведет ежедневный мониторинг визовой политики всех консульств и обладает самой актуальной информацией, что позволяет нам направлять клиентов в те представительства, где шансы на получение визы остаются высокими."
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/strany-ne-vydayut-vizy-belorusam",
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
            "@id": "https://visavampro.by/poleznaya-informasia/strany-ne-vydayut-vizy-belorusam"
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
                        Ограничения на выдачу виз для граждан Беларуси
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
                            С 2022 года визовая политика ряда стран Европейского союза по 
                            отношению к гражданам Беларуси претерпела значительные изменения. 
                            Важно понимать, что <b>большинство ограничений</b> касаются именно 
                            туристических виз (тип C) и не всегда затрагивают поездки по 
                            гуманитарным причинам, для воссоединения семьи или для международных 
                            перевозок.
                        </p>
                        <p>
                            По состоянию на август 2025 года, наиболее строгие <b>ограничения для белорусов</b> действуют в следующих странах:
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Чехия.</b> Одной из первых приостановила выдачу всех типов виз и ВНЖ для граждан РБ, за редкими исключениями строго гуманитарного характера. Прием заявлений на туристические визы полностью прекращен.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Литва и Латвия. </b> Резко сократили прием визовых заявлений. Приоритет отдается членам семей граждан ЕС, лицам, следующим с гуманитарными целями (лечение, похороны), а также водителям-международникам. Получить туристическую визу в этих странах практически невозможно.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Эстония</b> Ввела запрет на въезд граждан Беларуси с туристическими шенгенскими визами, выданными любой страной. Выдача собственных туристических виз также остановлена. Исключения делаются для очень узкого круга лиц.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b><Link href="/shengenskie-vizy/viza-v-polshu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Польша.</Link></b> Не принимает документы на туристические визы. Основной фокус смещен на выдачу национальных рабочих виз, виз по программе Poland. Business Harbour (хотя и она была модифицирована) и гуманитарных виз.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Финляндия.</b> Существенно ограничила прием заявлений на туристические визы и ввела ограничения на въезд через свою сухопутную границу для туристов.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Какие страны остаются лояльными?</b></p>
                        <p>Несмотря на ограничения, ряд стран продолжают принимать документы от белорусов на туристические визы. Среди них:</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-italiyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Италия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-ispaniyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Испания</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-vo-francziyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Франция</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-grecziyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Греция</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-vengriyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Венгрия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-germaniyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">Германия</Link> (с более строгой проверкой)
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Ситуация постоянно меняется. Решения могут как ужесточаться, так и смягчаться. Наше <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>визовое агентство VISA VAM </a> ведет ежедневный мониторинг визовой политики всех консульств и обладает самой актуальной информацией, что позволяет нам направлять клиентов в те представительства, где шансы на получение визы остаются высокими.
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