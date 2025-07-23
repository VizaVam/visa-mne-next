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
import Fag3, {faqData} from "@/components/fag3";

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
        <span className="font-semibold text-gray-900 cursor-default">Как белорусу получить шенгенскую визу в 2025 году</span>
    </nav>
);

export default function OnasPage({breadcrumbs}) {
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
        "headline": "Как белорусу получить шенгенскую визу в 2025 году: полное руководство",
        "alternativeHeadline": "Пошаговое руководство по получению шенгенской визы для белорусов в 2025 году",
        "datePublished": "2025-07-23T21:33:00+05:00",
        "dateModified": "2025-07-23T21:33:00+05:00",
        "articleBody": `
Планируете путешествие в Европу в 2025 году? Мечтаете о прогулках по улочкам Парижа, отдыхе на побережье Испании или деловой встрече в Германии? Для белорусов первым и ключевым шагом на пути к этим целям остается получение шенгенской визы. Несмотря на кажущуюся сложность процесса, при правильном подходе и знании всех нюансов, заветная виза в паспорте становится вполне достижимой.

### Актуальная ситуация с визами в Европу для белорусов в 2025 году
В 2025 году консульства стран Шенгенского соглашения продолжают принимать заявления от граждан Беларуси. Наиболее лояльными и популярными направлениями для получения туристических виз остаются Испания, Италия, Франция, Греция и Венгрия. Важно помнить, что требования к документам и сроки рассмотрения могут варьироваться в зависимости от конкретного консульства. В среднем, рекомендуется начинать подготовку к подаче документов за 2-3 месяца до планируемой поездки.

### Типы виз в 2025 году
- Туристическая: Для поездок в отпуск
- Деловая: Для деловых встреч, конференций
- Гостевая: По приглашению частного лица
- Учебная: Для краткосрочных курсов, стажировок
- Рабочая (Национальная виза тип D): Официальное трудоустройство по трудовому договору

Выбор типа визы влияет на список документов и условия подачи.

### Пошаговая инструкция по получению шенгенской визы
1. **Определяемся со страной и целью поездки**: Выбор страны подачи зависит от основного пребывания.
2. **Собираем необходимый пакет документов**: Паспорт, фотографии, страховка, финансовые гарантии и подтверждение цели поездки.
3. **Заполняем визовую анкету**: Онлайн на сайте визового центра.
4. **Записываемся на подачу документов**: Через официальные сайты визовых центров.
5. **Проходим процедуру подачи и ожидаем решения**: Срок рассмотрения — 15-45 дней.

### Особенности получения визы в некоторые страны
- **Испания**: Уникальная возможность безличной подачи в Минске через VISA VAM.
- **Италия и Германия**: Строгие требования и длительные сроки ожидания.

### Стоимость оформления шенгенской визы
Консульский сбор — €35, плюс сервисный сбор (€15-30) и услуги агентства.

### Как увеличить шансы на одобрение
- Предоставляйте точную и полную информацию
- Не скрывайте прошлые поездки и отказы
- Показывайте достаточный уровень дохода
- Подавайте документы заранее
- Избегайте ошибок в анкете
- Обратитесь в визовое агентство.

### Почему стоит обратиться в визовое агентство?
VISA VAM предлагает профессиональную консультацию, проверку документов и сопровождение. Специальные предложения: скидка 11% для семей и страховка от отказа.

Готовы начать свое путешествие по Европе? Свяжитесь с нами по номеру +375296800620!
        `,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/kak-belarusu-poluchit-vizu",
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
            "@id": "https://visavampro.by/poleznaya-informasia/kak-belarusu-poluchit-vizu"
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
                        Как белорусу получить шенгенскую визу в 2025 году: полное руководство
                    </h1>
                </div>
            </div>

            <div className="relative mt-[200px] md:mt-[320px]">
                {/* Banner Section */}
                <div className="w-full relative">
                    <Image
                        src="/poland-banner.png"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/poland-banner.png"
                        alt="О компании VisaVam"
                        width={600}
                        height={400}
                        quality={80}
                        priority={true}
                        loading="eager"
                        className="w-full object-cover px-0 lg:px-[7%] md:px-[7%] sm:hidden"
                    />
                </div>

                {/* About Text Section */}
                <div
                    className="w-full relative flex flex-col gap-24 mdd:gap-12 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Планируете путешествие в Европу в 2025 году? Мечтаете о прогулках по улочкам Парижа, отдыхе
                            на побережье Испании или деловой встрече в Германии? Для белорусов первым и ключевым шагом
                            на пути к этим целям остается получение шенгенской визы. Несмотря на кажущуюся сложность
                            процесса, при правильном подходе и знании всех нюансов, заветная виза в паспорте становится
                            вполне достижимой.
                        </p>
                        <p>В этой статье мы, команда экспертов визового агентства <span
                            className={"text-black font-bold"}>VISA VAM</span>, подробно расскажем, как получить
                            шенгенскую визу в Беларуси в 2025 году, какие документы для этого понадобятся и как избежать
                            распространенных ошибок, которые могут привести к отказу.</p>
                        <p className={"italic text-[14px]"}>💡 <span className={"font-bold"}>Совет:</span> Хотите упростить процесс
                            получения визы? Обратитесь к профессионалам! Визовое агентство <Link href="/" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">VISA VAM</Link> поможет подготовить
                            документы, записаться на подачу и даст гарантию возврата средств при отказе!</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Актуальная ситуация с
                            визами в Европу для белорусов в 2025 году</h2>
                        <p>В 2025 году консульства стран Шенгенского соглашения продолжают принимать заявления от
                            граждан Беларуси. Наиболее лояльными и популярными направлениями для получения туристических
                            виз остаются <span className={"text-black font-bold"}>Испания, Италия, Франция, Греция и Венгрия</span>.
                        </p>
                        <p>Важно помнить, что требования к документам и сроки рассмотрения могут варьироваться в
                            зависимости от конкретного консульства. В среднем, рекомендуется начинать подготовку к
                            подаче документов за 2-3 месяца до планируемой поездки.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Типы виз в 2025 году</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <colgroup>
                                    <col className="w-1/2"/>
                                    <col className="w-1/2"/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/2">
                                        Тип визы
                                    </th>
                                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/2">
                                        Описание
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Туристическая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Для поездок в
                                        отпуск
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Деловая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Для деловых встреч,
                                        конференций
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Гостевая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">По приглашению
                                        частного лица
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Учебная</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Для краткосрочных
                                        курсов, стажировок
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Рабочая
                                        (Национальная виза тип D)
                                    </td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Официальное
                                        трудоустройство по трудовому договору
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Выбор типа визы влияет на список документов и условия подачи.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Пошаговая инструкция по
                            получению шенгенской визы:</h2>
                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Шаг 1: Определяемся со
                            страной и целью поездки</h3>
                        <p>
                            Первое, с чего стоит начать, – это выбор страны, в консульство которой вы будете подавать
                            документы. Согласно правилам Шенгенского соглашения, это должна быть страна вашего основного
                            пребывания. Если же вы планируете посетить несколько стран, то подавать документы на визу
                            Европу следует в консульство той страны, где вы проведете больше всего времени.
                        </p>
                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Шаг 2: Собираем необходимый
                            пакет документов</h3>
                        <p>Это самый ответственный этап, требующий внимательности и аккуратности. Стандартный пакет
                            документов для <Link href="/shengenskie-vizy" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">оформления
                                шenгенской визы</Link> включает:</p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Паспорт</span>, действительный не менее 3 месяцев после
                                    окончания срока действия визы и имеющий как минимум 2 чистые страницы.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Две цветные фотографии</span> установленного образца
                                    (35×45 мм) - соответствующее требованиям ICAO.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Медицинская страховка</span> с покрытием не менее €30
                                    000, действующая в странах Шенгена.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Финансовые гарантии</span>: справка с места работы с
                                    указанием должности и заработной платы за последние 3 месяца, а также выписка с
                                    банковского счета с достаточной суммой для покрытия расходов на поездку (из расчета
                                    около €50-70 в день на человека).</p>
                            </li>
                            <li className="flex flex-col gap-2">
                                <div className="flex gap-2 items-start">
                                    <Image src="/check-0.png" alt="" width={16} height={16}
                                           className="w-4 h-4 mt-1 flex-shrink-0"/>
                                    <span className={"font-bold"}>Подтверждение цели поездки:</span>
                                </div>
                                <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                    <li className="pl-1">
                                        <p><span className={"font-bold"}>Туризм</span>: бронь отеля или апартаментов, билеты на самолет/автобус.</p>
                                    </li>
                                    <li className="pl-1">
                                        <p><span className={"font-bold"}>Гостевая поездка</span>: приглашение от родственников или друзей.</p>
                                    </li>
                                    <li className="pl-1">
                                        <p><span className={"font-bold"}>Деловая поездка</span>: приглашение от делового партнера.</p>
                                    </li>
                                </ul>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Для несовершеннолетних</span>: свидетельство о
                                    рождении, нотариально заверенное разрешение на выезд от обоих родителей.</p>
                            </li>
                        </ul>

                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Шаг 3: Заполняем визовую
                            анкету</h3>
                        <p>Анкета заполняется онлайн на сайте визового центра или консульства. Важно вносить всю
                            информацию без ошибок и в точном соответствии с документами.</p>

                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Шаг 4: Записываемся на
                            подачу документов</h3>
                        <p>Запись на подачу осуществляется через официальные сайты визовых центров. В связи с большим
                            количеством желающих, "слоты" на подачу могут появляться в определенные дни и быстро
                            разбираться.</p>

                        <p className={"italic text-[14px]"}>💡 <span className={"font-bold"}>Совет:</span> Хотите записаться на
                            подачу документов на визу без головной боли и стресса? Обратитесь к профессионалам! Мы
                            поможем получить шенген в кратчайшие сроки — <a className="underline hover:font-medium cursor-pointer text-blue-500" target="_blank" rel="noopener noreferrer" onClick={openModal}>оставьте
                                заявку</a>.</p>

                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Шаг 5: Проходим процедуру
                            подачи и ожидаем решения</h3>
                        <p>В назначенный день вы лично подаете пакет документов в визовый центр, сдаете биометрические
                            данные (отпечатки пальцев) и оплачиваете визовый и сервисный сборы. Срок рассмотрения
                            заявления обычно составляет от 15 до 45 календарных дней.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Особенности получения визы
                            в некоторые страны:</h2>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Испания: уникальная
                            возможность безличной подачи в Минске</h4>
                        <p>Для тех, кто ценит свое время, наше агентство <span
                            className={"font-bold"}>VISA VAM</span> предлагает эксклюзивную услугу – <span
                            className={"font-bold"}>безличную подачу документов на <Link
                            href="/shengenskie-vizy/viza-v-ispaniyu"
                            className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">визу в Испанию</Link> в Минске</span>.
                            Это означает, что вам не придется лично присутствовать в визовом центре. Мы возьмем на себя
                            всю процедуру: от проверки документов до их подачи. Это идеальный вариант для занятых людей
                            и жителей других городов Беларуси.</p>

                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Италия и Германия: на что
                            обратить внимание</h4>
                        <p>Консульства Италии и Германии известны своими строгими требованиями к документам и
                            длительными сроками ожидания записи на подачу. При планировании поездки в эти страны, мы
                            настоятельно рекомендуем начинать процесс оформления визы заблаговременно.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Стоимость оформления
                            шенгенской визы</h2>
                        <p>На 2025 год консульский сбор для белорусов составляет <span
                            className={"font-bold"}>€35</span>. Дополнительно оплачивается сервисный сбор визового
                            центра (около €15-30) и услуги по оформлению (при обращении в агентство).</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Как увеличить шансы на
                            одобрение и получить визу в Европу?</h2>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Предоставляйте точную и полную информацию
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Не скрывайте прошлые поездки и отказы
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Показывайте достаточный уровень дохода
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Подавайте документы заранее
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Избегайте ошибок в анкете
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Обратитесь в визовое агентство.
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Почему стоит обратиться в
                            визовое агентство?</h2>
                        <p>Самостоятельное оформление визы – это всегда риск допустить ошибку, которая может повлечь за
                            собой отказ. Обращаясь в <span
                                className={"font-bold"}>VISA VAM</span>, вы получаете:</p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Профессиональную консультацию</span> по всем вопросам.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Тщательную проверку</span> всего пакета документов.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Правильное заполнение</span> визовой анкеты.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Запись на подачу</span> в кратчайшие сроки.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Сопровождение и поддержку</span> на всех этапах.</p>
                            </li>
                        </ul>
                        <p>Не тратьте время на сложные процедуры — доверьтесь профессионалам!</p>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">Наши специальные предложения:</h4>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Скидка 11%</span> для семей из трех и более человек.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span
                                    className={"font-bold"}>Страховка от отказа в визе – </span>это разумная инвестиция, особенно если есть сомнения в успешности получения визы. Она снижает финансовые риски и даёт уверенность при подаче документов.</p>
                            </li>
                        </ul>
                        <p className={"italic text-[14px]"}>💡 <span className={"font-bold"}>Совет:</span> Не хотите тратить время на бюрократию? Обратитесь в
                            <span
                                className={"font-bold"}> VISA VAM —</span> ваша виза будет готова вовремя — <a className="underline hover:font-medium cursor-pointer text-blue-500" target="_blank" rel="noopener noreferrer" onClick={openModal}>оставьте
                                заявку</a>.</p>
                    </div>
                </div>

                {/* Inject FAQ Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
                />

                {/* Inject Article Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}}
                />

                <Fag3/>
                <div
                    className="w-full relative flex flex-col gap-24 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Готовы начать свое путешествие по Европе?</h2>
                        <p>📞 Свяжитесь с нами по номеру <a href="tel:+375296800620"
                                                           className="underline hover:font-medium cursor-pointer text-blue-500" target="_blank" rel="noopener noreferrer">+375296800620</a> и доверьте оформление вашей шенгенской визы профессионалам!</p>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    );
}