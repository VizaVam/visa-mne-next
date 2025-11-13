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
        <span className="font-semibold text-gray-900 cursor-default">Основной пакет документов для шенгенской визы</span>
    </nav>
);

export default function Cndv({breadcrumbs}) {
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
        "headline": "Список документов на шенгенскую визу | Что нужно для получения визы",
        "alternativeHeadline": "Полный и подробный перечень документов для шенгенской визы с объяснениями. Требования к паспорту, фото, справкам для работающих, ИП, студентов и пенсионеров.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
"Сбор документов на визу — самый ответственный этап в получении визы. Каждая бумага имеет свою цель и должна соответствовать строгим требованиям консульства. Вот подробный разбор стандартного пакета.

1. Паспорт.
Должен быть выдан не более 10 лет назад.
Срок его действия должен превышать дату предполагаемого выезда из Шенгенской зоны минимум на 3 месяца.
Обязательно наличие как минимум 2-х чистых страниц в разделе «Визы».

2. Визовая анкета.
Заполняется онлайн на сайте визового центра или консульства, либо от руки (зависит от страны). Должна быть заполнена без ошибок и распечатана. Подписывается лично заявителем в двух местах.

3. Фотографии.
Две цветные фотографии, сделанные не более 6 месяцев назад.
Размер 3,5 x 4,5 см, на белом или светло-сером фоне.
Лицо должно занимать 70-80% кадра.

4. Медицинская страховка.
Сумма покрытия не менее €30,000.
Должна действовать на всей территории Шенгенской зоны.
Срок действия страховки должен покрывать весь период поездки. Для многократных виз — как минимум первую поездку.

5. Подтверждение цели и маршрута поездки.
Туризм: Брони отелей или апартаментов на весь период пребывания (неоплаченные брони с booking.com подходят, но оплаченные повышают шансы). Подробный план поездки по дням, если вы посещаете несколько городов/стран.
Деловая поездка: Официальное приглашение от европейской компании с указанием цели, сроков и стороны, покрывающей расходы.
Посещение родственников/друзей: Приглашение от частного лица, заверенное в местном муниципалитете, и копия паспорта/ВНЖ приглашающего.

6. Подтверждение транспорта.
Бронь авиабилетов в обе стороны. Выкупать билеты до получения визы не обязательно, достаточно брони.
Если поездка на автомобиле: техпаспорт, водительское удостоверение, международная автостраховка («Зеленая карта»).

7. Финансовые гарантии.
Выписка с банковского счета: Справка об остатке и/или выписка о движении средств за последние 3-6 месяцев. Сумма должна покрывать расходы на поездку (см. соответствующий вопрос).
Спонсорское письмо: Если поездку оплачивает другой человек, необходимо его письмо, справка о доходах и копия паспорта.

8. Подтверждение занятости (доказательство связей с родиной):
Для работающих: Справка с места работы на фирменном бланке с указанием должности, даты трудоустройства, размера заработной платы за последние 6 месяцев и подтверждением, что на время поездки предоставляется отпуск с сохранением рабочего места.
Для ИП: Свидетельство о регистрации, последняя налоговая декларация.
Для студентов: Справка из учебного заведения, студенческий билет.
Для пенсионеров: Пенсионное удостоверение.

Каждый документ важен. Специалисты агентства VISA VAM проверяют каждую справку на соответствие актуальным и часто меняющимся требованиям конкретного консульства. Сэкономьте своё время и нервы — доверьте визовые вопросы профессионалам!"
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/chto-nuzhno-dlya-vizy",
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
            "@id": "https://visavampro.by/poleznaya-informasia/chto-nuzhno-dlya-vizy"
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
                        Основной пакет документов для шенгенской визы
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
                            <b>Сбор документов на визу</b> — самый ответственный этап в получении визы. Каждая бумага имеет свою цель и должна соответствовать строгим требованиям консульства. Вот подробный разбор стандартного пакета.
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>1. Паспорт.</b>
                                    <p>Должен быть выдан не более 10 лет назад.</p>
                                    <p>Срок его действия должен превышать дату предполагаемого выезда из Шенгенской зоны минимум на 3 месяца.</p>
                                    <p>Обязательно наличие как минимум 2-х чистых страниц в разделе «Визы».</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Визовая анкета</b> 
                                    <p>Заполняется онлайн на сайте визового центра или консульства, либо от руки (зависит от страны). Должна быть заполнена без ошибок и распечатана. Подписывается лично заявителем в двух местах.</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Фотографии.</b> 
                                    <p>Две цветные фотографии, сделанные не более 6 месяцев назад.</p>
                                    <p>Размер 3,5 x 4,5 см, на белом или светло-сером фоне.</p>
                                    <p>Лицо должно занимать 70-80% кадра.</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Медицинская страховка.</b> 
                                    <p>Сумма покрытия не менее €30,000.</p>
                                    <p>Должна действовать на всей территории Шенгенской зоны.</p>
                                    <p>Срок действия страховки должен покрывать весь период поездки. Для многократных виз — как минимум первую поездку.</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Подтверждение цели и маршрута поездки.</b> 
                                    <p><b>Туризм:</b> Брони отелей или апартаментов на весь период пребывания (неоплаченные брони с booking.com подходят, но оплаченные повышают шансы). Подробный план поездки по дням, если вы посещаете несколько городов/стран.</p>
                                    <p><b>Деловая поездка: </b>Официальное приглашение от европейской компании с указанием цели, сроков и стороны, покрывающей расходы.</p>
                                    <p><b>Посещение родственников/друзей: </b>Приглашение от частного лица, заверенное в местном муниципалитете, и копия паспорта/ВНЖ приглашающего.</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Подтверждение транспорта.</b> 
                                    <p>Бронь авиабилетов в обе стороны. Выкупать билеты до получения визы не обязательно, достаточно брони.</p>
                                    <p>Если поездка на автомобиле: техпаспорт, водительское удостоверение, международная автостраховка («Зеленая карта»).</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Финансовые гарантии.</b> 
                                    <p>Выписка с банковского счета: Справка об остатке и/или выписка о движении средств за последние 3-6 месяцев. Сумма должна покрывать расходы на поездку (см. соответствующий вопрос).</p>
                                    <p>Спонсорское письмо: Если поездку оплачивает другой человек, необходимо его письмо, справка о доходах и копия паспорта.</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Подтверждение занятости (доказательство связей с родиной):</b> 
                                    <p>Для работающих: Справка с места работы на фирменном бланке с указанием должности, даты трудоустройства, размера заработной платы за последние 6 месяцев и подтверждением, что на время поездки предоставляется отпуск с сохранением рабочего места.</p>
                                    <p><b>Для ИП:</b> Свидетельство о регистрации, последняя налоговая декларация.</p>
                                    <p><b>Для студентов:</b> Справка из учебного заведения, студенческий билет.</p>
                                    <p><b>Для пенсионеров:</b> Пенсионное удостоверение.</p>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Каждый документ важен. Специалисты <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}> агентства VISA VAM </a> проверяют каждую справку на соответствие актуальным и часто меняющимся требованиям конкретного консульства. Сэкономьте своё время и нервы — доверьте визовые вопросы профессионалам!
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