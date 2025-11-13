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
        <span className="font-semibold text-gray-900 cursor-default">Как работает правило «90 дней из 180»</span>
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
        "headline": "Правило 90 дней из 180 в Шенгене: как правильно считать",
        "alternativeHeadline": "Подробное объяснение правила 90/180 для шенгенской визы. Как работает «плавающее окно», как считать дни, чтобы избежать нарушения, и каковы последствия оверстея.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
Правило «90/180» — это фундаментальный принцип, регулирующий пребывание по краткосрочной визе C. Неправильное его толкование является одной из самых частых причин серьезных визовых нарушений. Формулировка «разрешено пребывание до 90 дней в течение любого 180-дневного периода» требует детального разбора.

Что такое «плавающее окно» в 180 дней?
Это не фиксированные полгода (например, с 1 января по 30 июня). 180-дневный период является «скользящим». Это означает, что в любой день вашего нахождения в Шенгене (и в день выезда) система пограничного контроля смотрит на 180 дней назад от этой даты и суммирует все дни, которые вы провели в зоне. Эта сумма не должна превышать 90 дней.

Как правильно считать дни:
1. День въезда и день выезда по шенгенской визе считаются полными днями пребывания, независимо от времени пересечения границы.
2. Для подсчета возьмите дату предполагаемого выезда.
3. Отсчитайте от нее 180 дней назад.
4. Просуммируйте все дни, отмеченные въездными и выездными штампами в вашем паспорте, которые попадают в этот 180-дневный промежуток.
5. Прибавьте к этой сумме дни вашей текущей/планируемой поездки.
6. Итоговое число не должно быть больше 90.

Пример:
У вас годовая мультивиза. Вы были в Шенгене с 1 по 30 марта (30 дней) и с 10 по 29 июня (20 дней). Итого 50 дней. Вы хотите поехать снова 15 сентября.
На дату 15 сентября 180-дневное окно будет с 19 марта по 15 сентября. В этот период попадает часть вашей первой поездки (с 19 по 30 марта = 12 дней) и вся вторая поездка (20 дней). Итого: 12 + 20 = 32 дня использовано.
У вас остается 90 - 32 = 58 дней для пребывания.

Последствия нарушения.
Превышение 90-дневного лимита — серьезное нарушение миграционного законодательства.
При выезде: Вас ждет неприятный разговор с пограничником, возможен штраф (сумма зависит от страны и количества дней просрочки).
В паспорт могут поставить штамп о депортации. В базу данных SIS вносится запись о нарушении, что приводит к автоматическому отказу в последующих визах и запрету на въезд в Шенгенскую зону на срок от 6 месяцев до 5 лет.

Для избежания ошибок рекомендуется использовать официальный визовый калькулятор ЕС. Наше агентство VISA VAM всегда помогает клиентам с мультивизами отслеживать дни пребывания. Каждый клиент для нас — не просто заявка, а личная миссия. Мы подходим индивидуально к каждой ситуации, учитывая все нюансы, цели поездки и историю посещений, чтобы максимизировать шансы на одобрение визы.

`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/90-dnej-na-shengenskoj-vize",
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
            "@id": "https://visavampro.by/poleznaya-informasia/90-dnej-na-shengenskoj-vize"
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
                        Как работает правило «90 дней из 180»
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
                            Правило «90/180» — это фундаментальный принцип, регулирующий пребывание по краткосрочной визе C. 
                            Неправильное его толкование является одной из самых частых причин серьезных визовых нарушений. 
                            Формулировка «разрешено пребывание до 90 дней в течение любого 180-дневного периода» 
                            требует детального разбора.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Что такое «плавающее окно» в 180 дней?</b></p>
                        <p>
                            Это не фиксированные полгода (например, с 1 января по 30 июня). 
                            180-дневный период является «скользящим». Это означает, что в любой 
                            день вашего нахождения в Шенгене (и в день выезда) система 
                            пограничного контроля смотрит на 180 дней назад от этой даты и 
                            суммирует все дни, которые вы провели в зоне. Эта сумма не должна 
                            превышать 90 дней.
                        </p>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Как правильно считать дни:</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    День въезда и день 
                                    выезда по <Link href="/shengenskie-vizy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" 
                                    rel="noopener noreferrer">шенгенской визе</Link> считаются полными днями пребывания, 
                                    независимо от времени пересечения границы.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Для подсчета возьмите дату предполагаемого выезда.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Отсчитайте от нее 180 дней назад.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Просуммируйте все дни, отмеченные въездными и выездными штампами в вашем паспорте, которые попадают в этот 180-дневный промежуток.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Прибавьте к этой сумме дни вашей текущей/планируемой поездки.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Итоговое число не должно быть больше 90.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Пример:</b>
                        </p>
                        <p>У вас годовая мультивиза. Вы были в Шенгене с 1 по 30 марта (30 дней) и с 10 по 29 июня (20 дней). Итого 50 дней. Вы хотите поехать снова 15 сентября.</p>
                        <p>На дату 15 сентября 180-дневное окно будет с 19 марта по 15 сентября. В этот период попадает часть вашей первой поездки (с 19 по 30 марта = 12 дней) и вся вторая поездка (20 дней). Итого: 12 + 20 = 32 дня использовано.</p>
                        <p>У вас остается 90 - 32 = 58 дней для пребывания.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">   
                        <p><b>Последствия нарушения.</b></p>
                        <p>Превышение 90-дневного лимита — серьезное нарушение миграционного законодательства.</p>
                        <p><b>При выезде: </b>Вас ждет неприятный разговор с пограничником, возможен штраф (сумма зависит от страны и количества дней просрочки).</p>
                        <p>В паспорт могут поставить штамп о депортации. В базу данных SIS вносится запись о нарушении, что приводит к автоматическому отказу в последующих визах и запрету на въезд в Шенгенскую зону на срок от 6 месяцев до 5 лет.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Для избежания ошибок рекомендуется использовать <Link href="https://ec.europa.eu/assets/home/visa-calculator/calculator.htm?lang=en" 
                            className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" 
                            rel="noopener noreferrer">официальный визовый калькулятор ЕС</Link>. Наше агентство <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>VISA VAM </a> всегда помогает клиентам с 
                            мультивизами отслеживать дни пребывания. Каждый клиент для нас — не просто заявка, а личная миссия. 
                            Мы подходим индивидуально к каждой ситуации, учитывая все нюансы, цели поездки и историю посещений, 
                            чтобы максимизировать шансы на одобрение визы.
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