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
        <span className="font-semibold text-gray-900 cursor-default">Виза C и D: ключевые отличия</span>
    </nav>
);

export default function Rmv({breadcrumbs}) {
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
        "headline": "Разница между визой C и D | Какую визу выбрать: шенгенскую или национальную",
        "alternativeHeadline": "Подробное сравнение виз типа C и типа D. Узнайте, в чем ключевые отличия по срокам, целям, правам, процессу подачи и юридическому статусу, который они предоставляют.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
"Обе визы позволяют въехать на территорию Европы, они регулируются разным законодательством и служат абсолютно разным целям. Выбор неправильного типа визы приведет к гарантированному отказу.

Виза типа C (Шенгенская)
Цель. Краткосрочные поездки: туризм, бизнес, визиты к друзьям, короткие курсы.
Законодательная база. Единый Шенгенский визовый кодекс (EU Visa Code). Правила одинаковы для всех стран.
Срок пребывания. До 90 дней в любой 180-дневный период.
Территория действия. Вся Шенгенская зона (29 стран).
Путь к ВНЖ. Не является основанием для получения вида на жительство.
Право на работу. Категорически запрещено (за исключением специально оговоренных случаев для артистов/спортсменов). 
Процесс подачи. Стандартизирован. Подается в визовых центрах или консульствах. Пакет документов относительно простой. 

Виза типа D (Национальная) 
Цель. Долгосрочное проживание: работа по контракту, учеба в университете, воссоединение семьи.
Законодательная база. Национальное миграционное законодательство каждой отдельной страны. Требования сильно различаются.
Срок пребывания. Более 90 дней. Обычно выдается на срок до 1 года. 
Территория действия. Постоянное проживание только в стране, выдавшей визу. Дополнительно дает право путешествовать по остальным странам Шенгена (до 90/180).
Путь к ВНЖ. Является первым шагом для получения вида на жительство (ВНЖ). По приезде в страну необходимо подать документы в местную миграционную службу. 
Право на работу. Дает право на работу/учебу в соответствии с основанием, по которому была выдана виза. 
Процесс подачи. Более сложный и длительный. Часто требует личной подачи в консульство. Пакет документов гораздо объемнее (контракты, дипломы, свидетельства о браке и т.д.).


Простой способ определить, какая виза вам нужна:
* Если ваша цель — поездка на срок до 90 дней, и она не связана с работой или иммиграцией, вам нужна виза C.
* Если вы планируете переехать в одну из европейских стран для работы, учебы или к семье на срок более 90 дней, вам нужна виза D.

Путаница между этими двумя типами недопустима. Наше агентство VISA VAM предоставляет услуги по обоим типам виз, помогая собрать сложный пакет документов и для национальных виз, где цена ошибки гораздо выше."`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/raznica-mezhdu-vizami-c-i-d",
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
            "@id": "https://visavampro.by/poleznaya-informasia/raznica-mezhdu-vizami-c-i-d"
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
                        Виза C и D: ключевые отличия
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
                            Обе визы позволяют въехать на территорию Европы, 
                            они регулируются разным законодательством и служат абсолютно разным целям. 
                            Выбор неправильного типа визы приведет к гарантированному отказу.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Виза типа C (Шенгенская)</b></p>
                        <p><b>Цель.</b> Краткосрочные поездки: туризм, бизнес, визиты к друзьям, короткие курсы.</p>
                        <p><b>Законодательная база.</b> Единый Шенгенский визовый кодекс (EU Visa Code). Правила одинаковы для всех стран.</p>
                        <p><b>Срок пребывания.</b> До 90 дней в любой 180-дневный период.</p>
                        <p><b>Территория действия.</b> Вся Шенгенская зона (29 стран).</p>
                        <p><b>Путь к ВНЖ.</b> Не является основанием для получения вида на жительство.</p>
                        <p><b>Право на работу.</b> Категорически запрещено (за исключением специально оговоренных случаев для артистов/спортсменов).</p>
                        <p><b>Процесс подачи.</b> Стандартизирован. Подается в визовых центрах или консульствах. Пакет документов относительно простой. </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Виза типа D (Национальная)</b></p>
                        <p><b>Цель.</b> Долгосрочное проживание: работа по контракту, учеба в университете, воссоединение семьи.</p>
                        <p><b>Законодательная база.</b> Национальное миграционное законодательство каждой отдельной страны. Требования сильно различаются.</p>
                        <p><b>Срок пребывания.</b> Более 90 дней. Обычно выдается на срок до 1 года. </p>
                        <p><b>Территория действия.</b> Постоянное проживание только в стране, выдавшей визу. 
                            Дополнительно дает право путешествовать по остальным странам Шенгена (до 90/180).</p>
                        <p><b>Путь к ВНЖ.</b> Является первым шагом для получения вида на жительство (ВНЖ). По приезде в страну необходимо подать документы в местную миграционную службу. </p>
                        <p><b>Право на работу.</b> Дает право на работу/учебу в соответствии с основанием, по которому была выдана виза. </p>
                        <p><b>Процесс подачи.</b> Более сложный и длительный. Часто требует личной подачи в консульство. Пакет документов гораздо объемнее (контракты, дипломы, свидетельства о браке и т.д.).</p>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Простой способ определить, какая виза вам нужна:</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Если ваша цель — поездка на срок до 90 дней, и она не связана с работой или иммиграцией, вам нужна виза C.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Если вы планируете переехать в одну из европейских стран для работы, учебы или к семье на срок более 90 дней, вам нужна виза D.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Путаница между этими двумя типами недопустима. Наше <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}> агентство VISA VAM</a> предоставляет 
                            услуги по обоим типам виз, помогая собрать сложный пакет документов и для национальных виз, 
                            где цена ошибки гораздо выше.
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