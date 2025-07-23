'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Fag2, {faqData} from "@/components/fag2";

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
        <span className="font-semibold text-gray-900 cursor-default">Как оформить визу в Польшу для белорусов</span>
    </nav>
);

export default function OnasPage({breadcrumbs}) {
    const pathname = usePathname();


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
        "headline": "Как оформить визу в Польшу для белорусов: документы, стоимость и сроки",
        "alternativeHeadline": "Пошаговая инструкция по получению визы в Польшу для граждан Беларуси",
        "datePublished": "2025-05-13T08:00:00+05:00",
        "dateModified": "2025-07-23T21:40:00+05:00",
        "articleBody": `
Если вы планируете поездку в Польшу, то вам обязательно понадобится шенгенская виза, т.к. Польша — одна из стран Шенгенского соглашения. Но не волнуйтесь: процесс получения визы достаточно понятный, если знать все нюансы.

### Кто может получить визу в Польшу?
Белорусы могут получить шенгенскую визу в Польшу, если цель их поездки соответствует одному из следующих типов:
- Туристическая: Отдых, экскурсии, путешествие
- Гостевая: Посещение родственников или друзей
- Деловая: Конференции, переговоры, командировки
- Студенческая/Учебная/Полицеальная: Обучение в польских учебных заведениях
- Рабочая: Для официального трудоустройства в Польше
- Карта Поляка: При ее наличии

Выбор типа визы влияет на список необходимых документов и условия подачи.

### Полный список документов на визу в Польшу
Чтобы ваше заявление приняли без задержек, соберите полный пакет документов заранее. Вот что потребуется от большинства заявителей:
- Паспорт, действительный минимум 3 месяца после окончания срока действия визы
- Анкета на визу в Польшу – заполненная в электронном виде или уже распечатанная
- Фотография на визу (35×45 мм) — соответствующее требованиям ICAO
- Копии паспорта — страницы с личными данными и регистрацией
- Медицинская страховка, покрывающая расходы на сумму не менее 30 000 евро, действующая в странах Шенгена
- Подтверждение цели поездки: туристический ваучер или оплаченная бронь отеля, официальное приглашение от польской стороны, справка с места работы / учебы
- Финансовое обеспечение: банковская выписка за последние 3 месяца, спонсорское письмо (если поездку оплачивает другое лицо)
- Оплаченная бронь места в автобусе или маршрут поездки
- Квитанция об оплате консульского сбора

Для детей дополнительно: свидетельство о рождении, согласие на выезд от родителей (при необходимости), копия студенческого билета, спонсорство и копии паспортных данных спонсора.

### Где и как подать документы на визу в Польшу?
Подача документов на шенгенскую визу в Польшу возможна в следующих местах:
- В Консульстве в определенных случаях
- Визовые центры VFS Global - в Минске, Бресте, Гродно и других крупных городах
- Через визовые агентства

Необходимо обязательно заранее записаться на подачу визы в Польшу через официальный сайт визового центра, либо воспользоваться нашими услугами.

### Сколько стоит виза в Польшу для белорусов?
Стоимость визы для граждан Республики Беларусь зависит от возраста заявителя и типа поездки:
- Взрослые: от 35 € до 90 € в зависимости от выбранной категории визы
- Дети (до 12 лет): бесплатно
- Участники культурных/спортивных мероприятий: бесплатно
- Члены официальных делегаций: бесплатно

Дополнительно могут взиматься сервисные сборы визовых центров.

### Сколько времени делается виза в Польшу?
Рассмотрение заявления на визу в Консульстве Польши обычно занимает до 21 календарного дня. Однако в сезон высокой нагрузки (лето, новогодние праздники) срок может увеличиться.

### Самые частые ошибки при подаче документов
Чтобы избежать отказа, проверьте, нет ли среди ваших документов следующих проблем:
- Неполный пакет документов
- Истекший срок действия паспорта по требованиям
- Неправильно оформленная анкета
- Отсутствие финансового подтверждения
- Ошибки в страховке (недостаточное покрытие или даты)

Если вы не уверены в правильности оформления, лучше обратиться к специалисту.

### Получите помощь в оформлении визы
Не хотите рисковать? Мы предлагаем профессиональную помощь в оформлении визы в Польшу для белорусов:
- Заполним анкету правильно и запишем на визит в Визовый центр Польши
- Поможем подготовить полный пакет документов
- Проконсультируем по каждому пункту
- Поможем оформить страховку и бронь отеля

Свяжитесь с нами по номеру +375296800620 уже сегодня и начните готовиться к поездке в Польшу без лишних хлопот!
    `,
        "about": [
            { "@type": "Thing", "name": "виза в Польшу" },
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "документы для визы" },
            { "@type": "Thing", "name": "белорусы" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu",
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
            "@id": "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu"
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
                        Как оформить визу в Польшу для белорусов: документы, стоимость и сроки
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
                            Если вы планируете поездку в Польшу, то вам обязательно понадобится шенгенская виза, т.к.
                            Польша — одна из стран Шенгенского соглашения. Но не волнуйтесь: процесс получения визы
                            достаточно понятный, если знать все нюансы.
                        </p>
                        <p>В этой статье мы подробно расскажем:</p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                какие документы нужны для визы в Польшу для белорусов;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                где подавать заявление;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                стоимость консульского и сервисного сбора;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                сколько времени занимает оформление;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                как оформить визу в Польшу;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                и какие ошибки чаще всего приводят к отказу.
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Кто может получить визу
                            в Польшу?</h2>
                        <p>Белорусы могут получить шенгенскую визу в Польшу, если цель их поездки соответствует одному
                            из следующих типов:</p>
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
                                        Цель поездки
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Туристическая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Отдых, экскурсии,
                                        путешествие
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Гостевая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Посещение
                                        родственников или друзей
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Деловая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Конференции,
                                        переговоры, командировки
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Студенческая/Учебная/Полицеальная</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Обучение в польских
                                        учебных заведениях
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Рабочая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Для официального
                                        трудоустройства в Польше
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Карта Поляка</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">При ее наличии</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Выбор типа визы влияет на список необходимых документов и условия подачи.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Полный список документов
                            на визу в Польшу</h2>
                        <p>
                            Чтобы ваше заявление приняли без задержек, соберите полный пакет документов заранее. Вот что
                            потребуется от большинства заявителей:
                        </p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Паспорт, действительный минимум 3 месяца после окончания срока действия визы;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Анкета на визу в Польшу – заполненная в электронном виде или уже распечатанная;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Фотография на визу (35×45 мм) — соответствующее требованиям ICAO;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Копии паспорта — страницы с личными данными и регистрацией;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Медицинская страховка, покрывающая расходы на сумму не менее 30 000 евро, действующая в
                                странах Шенгена;
                            </li>
                            <li className="flex flex-col gap-2">
                                <div className="flex gap-2 items-start">
                                    <Image src="/check-0.png" alt="" width={16} height={16}
                                           className="w-4 h-4 mt-1 flex-shrink-0"/>
                                    <span>Подтверждение цели поездки:</span>
                                </div>
                                <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                    <li className="pl-1">
                                        туристический ваучер или оплаченная бронь отеля;
                                    </li>
                                    <li className="pl-1">
                                        официальное приглашение от польской стороны,
                                    </li>
                                    <li className="pl-1">
                                        справка с места работы / учебы;
                                    </li>
                                </ul>
                            </li>
                            <li className="flex flex-col gap-2">
                                <div className="flex gap-2 items-start">
                                    <Image src="/check-0.png" alt="" width={16} height={16}
                                           className="w-4 h-4 mt-1 flex-shrink-0"/>
                                    <span>Финансовое обеспечение:</span>
                                </div>
                                <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                    <li className="pl-1">
                                        банковская выписка за последние 3 месяца;
                                    </li>
                                    <li className="pl-1">
                                        спонсорское письмо (если поездку оплачивает другое лицо);
                                    </li>
                                </ul>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Оплаченная бронь места в автобусе или маршрут поездки;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Квитанция об оплате консульского сбора.
                            </li>
                        </ul>
                        <p className={"text-[#595959]"}>Для детей дополнительно: свидетельство о рождении, согласие на
                            выезд от родителей (при необходимости), копия студенческого билета, спонсорство и копии
                            паспортных данных спонсора.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Где и как подать
                            документы на визу в Польшу?</h2>
                        <p>
                            Подача документов на шенгенскую визу в Польшу возможна в следующих местах:
                        </p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                В Консульстве в определенных случаях;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Визовые центры VFS Global - в Минске, Бресте, Гродно и других крупных городах;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Через <a href="/" className={"underline hover:font-normal font-medium text-blue-500"}>визовые агентства.</a>
                            </li>
                        </ul>
                        <p>Необходимо обязательно заранее записаться на подачу визы в Польшу через официальный сайт
                            визового центра, либо воспользоваться нашими услугами.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Сколько стоит виза в
                            Польшу для белорусов?</h2>
                        <p>Стоимость визы для граждан Республики Беларусь зависит от возраста заявителя и типа
                            поездки:</p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <colgroup>
                                    <col className="w-1/2"/>
                                    <col className="w-1/2"/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/2">
                                        Категория
                                    </th>
                                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/2">
                                        Стоимость визы (в евро)
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Взрослые</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">от 35 € до 90 € в
                                        зависимости от выбранной категории визы
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Дети (до 12 лет)
                                    </td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">бесплатно</td>
                                </tr>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Участники
                                        культурных/спортивных мероприятий
                                    </td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">бесплатно</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Члены официальных
                                        делегаций
                                    </td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">бесплатно</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Дополнительно могут взиматься в обязательно порядке сервисные сборы визовых центров.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Сколько времени делается
                            виза в Польшу?</h2>
                        <p>
                            Рассмотрение заявления на визу в Консульстве Польши обычно занимает до 21 календарного дня.
                            Однако в сезон высокой нагрузки (лето, новогодние праздники) срок может увеличиться.
                        </p>
                        <p>
                            <span className="font-semibold">Совет:</span> подавайте документы заранее, особенно если у
                            вас жёсткие даты поездки.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Самые частые ошибки при
                            подаче документов</h2>
                        <p>
                            Чтобы избежать отказа, проверьте, нет ли среди ваших документов следующих проблем:
                        </p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Неполный пакет документов;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Истекший срок действия паспорта по требованиям;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Неправильно оформленная анкета;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Отсутствие финансового подтверждения;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Ошибки в страховке (недостаточное покрытие или даты).
                            </li>
                        </ul>
                        <p>Если вы не уверены в правильности оформления, лучше обратиться к специалисту.</p>
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

                <Fag2/>

                <div className="w-full relative flex flex-col gap-24 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Получите помощь в
                            оформлении визы</h2>
                        <p>
                            Не хотите рисковать? Мы предлагаем профессиональную помощь в <a
                            href="/shengenskie-vizy/viza-v-polshu" className="underline hover:font-normal font-medium text-blue-500">оформлении
                            визы в Польшу для белорусов</a>:
                        </p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Заполним анкету правильно и запишем на визит в Визовый центр Польши
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Поможем подготовить полный пакет документов
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Проконсультируем по каждому пункту
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Поможем оформить страховку и бронь отеля
                            </li>
                        </ul>
                        <p>📞 Свяжитесь с нами по номеру <a href="tel:+375296800620"
                                                           className="underline hover:font-normal font-medium text-blue-500">+375296800620</a> уже
                            сегодня и начните готовиться к поездке в Польшу без лишних хлопот!</p>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    );
}