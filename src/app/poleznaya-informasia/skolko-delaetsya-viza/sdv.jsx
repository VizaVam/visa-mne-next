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
        <span className="font-semibold text-gray-900 cursor-default">Сроки изготовления визы</span>
    </nav>
);

export default function Sdv({breadcrumbs}) {
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
        "headline": "Сроки оформления визы | Сколько ждать решения по шенгенской визе",
        "alternativeHeadline": "Узнайте, сколько времени занимает оформление шенгенской и других типов виз. Факторы, влияющие на сроки рассмотрения документов в посольстве.",
        "datePublished": "2025-11-01T08:00:00+05:00",
        "dateModified": "2025-11-01T21:33:00+05:00",
        "articleBody": `
"Сроки рассмотрения визового заявления могут значительно варьироваться. Понимание сроков рассмотрения визового заявления — ключ к успешному планированию поездки. Для шенгенских туристических виз (тип C) стандартный период рассмотрения, установленный Визовым кодексом ЕС, составляет 15 календарных дней с момента поступления документов в консульство. Этот срок является стандартным ориентиром.

На практике реальные сроки зависят от нескольких факторов:
1. Страна назначения. Существует негласное разделение стран на «быстрые» и «медленные». Например, консульства Испании, Италии, Франции и Греции часто обрабатывают заявления быстрее (иногда за 7-10 рабочих дней в низкий сезон). Консульства Германии, Австрии, Швейцарии известны своим скрупулезным подходом, и рассмотрение почти всегда занимает полные 15 дней или более.
2. Сезонность. Самый важный фактор. В высокий сезон (с мая по сентябрь) и перед длительными праздниками (Новый год, майские праздники) консульства и визовые центры перегружены. В эти периоды стандартные 15 дней превращаются в 20-30 дней ожидания. Рекомендуем подавать документы за 1.5-2 месяца до поездки.
3. Тип визы. Сроки рассмотрения национальных виз для работы или учебы не регулируются Шенгенским кодексом и устанавливаются законодательством конкретной страны. Ожидание может длиться от 1 до 6 месяцев.
4. Полнота пакета документов. Любые неточности или отсутствие необходимых справок могут привести к задержке в рассмотрении вашего дела.
5. Продление срока до 45 дней. В отдельных случаях, когда требуется более тщательная проверка предоставленных данных или консультации между странами-членами Шенгенской зоны, срок рассмотрения может быть продлен до 30 календарных дней, а в исключительных ситуациях — до 45 календарных дней. Это не является негативным знаком, а лишь указывает на необходимость дополнительной проверки.

Важно помнить, что отсчет начинается не с дня подачи в визовый центр, а с момента доставки документов в консульство, что добавляет 1-3 рабочих дня. Наше визовое агентство VISA VAM помогает выбрать оптимальное время для подачи и контролирует все этапы, чтобы минимизировать ваше ожидание."
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/skolko-delaetsya-viza",
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
            "@id": "https://visavampro.by/poleznaya-informasia/skolko-delaetsya-viza"
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
                        Сроки изготовления визы: что нужно знать заявителю
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
                            <b>Сроки рассмотрения визового заявления</b> могут значительно варьироваться. 
                            Понимание сроков рассмотрения визового заявления — ключ к успешному планированию поездки. 
                            Для шенгенских туристических виз (тип C) стандартный период рассмотрения, установленный 
                            Визовым кодексом ЕС, составляет 15 календарных дней с момента поступления документов 
                            в консульство. Этот срок является стандартным ориентиром.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>На практике реальные сроки зависят от нескольких факторов:</b>
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <span className={"text-black font-bold"}>Страна назначения.</span> Существует негласное разделение 
                                    стран на «быстрые» и «медленные». 
                                    Например, консульства <Link href="/shengenskie-vizy/viza-v-ispaniyu" 
                                className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                target="_blank" rel="noopener noreferrer">Испании</Link>, <Link href="/shengenskie-vizy/viza-v-italiyu" 
                                className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                target="_blank" rel="noopener noreferrer">Италии</Link>, <Link href="/shengenskie-vizy/viza-vo-francziyu" 
                                className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                target="_blank" rel="noopener noreferrer">Франции</Link> и Греции часто обрабатывают заявления быстрее 
                                    (иногда за 7-10 рабочих дней в низкий сезон). Консульства Германии, Австрии, 
                                    Швейцарии известны своим скрупулезным подходом, и рассмотрение почти всегда 
                                    занимает полные 15 дней или более.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <span className={"text-black font-bold"}>Сезонность.</span> Самый важный фактор. 
                                    В высокий сезон (с мая по сентябрь) и перед длительными праздниками (Новый год, майские праздники) 
                                    консульства и визовые центры перегружены. В эти периоды стандартные 15 дней превращаются в 20-30 дней ожидания. 
                                    Рекомендуем подавать документы за 1.5-2 месяца до поездки.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <span className={"text-black font-bold"}>Тип визы.</span> Сроки рассмотрения национальных виз для работы или учебы 
                                    не регулируются Шенгенским кодексом и устанавливаются законодательством конкретной страны. Ожидание может длиться 
                                    от 1 до 6 месяцев.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <span className={"text-black font-bold"}>Полнота пакета документов.</span> Любые неточности или отсутствие 
                                    необходимых справок могут привести к задержке в рассмотрении вашего дела.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <span className={"text-black font-bold"}>Продление срока до 45 дней.</span> В отдельных случаях, 
                                    когда требуется более тщательная проверка предоставленных данных или консультации между странами-членами 
                                    Шенгенской зоны, срок рассмотрения может быть продлен до 30 календарных дней, а в исключительных ситуациях — 
                                    до 45 календарных дней. Это не является негативным знаком, а лишь указывает на необходимость дополнительной проверки.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Важно помнить, что отсчет начинается не с дня подачи в визовый центр, 
                            а с момента доставки документов в консульство, что добавляет 1-3 рабочих дня. 
                            Наше <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>визовое агентство VISA VAM</a> помогает выбрать оптимальное время для подачи 
                            и контролирует все этапы, чтобы минимизировать ваше ожидание.
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