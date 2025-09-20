'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Fag4, {faqData} from "@/components/fag4";

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
        <span className="font-semibold text-gray-900 cursor-default">Топ-5 ошибок при подаче на рабочую визу</span>
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
        "author": [{
          "@type": "Person",
          "name": "Елизавета Бокая",
          "jobTitle": "руководитель отдела продаж"
        }],
        "headline": "Топ-5 ошибок при подаче на рабочую визу: как избежать отказа и не потерять оффер мечты",
        "alternativeHeadline": "Основные ошибки белорусов при оформлении рабочей визы в 2025 году",
        "datePublished": "2025-07-01T08:00:00+05:00",
        "dateModified": "2025-07-23T22:22:00+05:00",
        "articleBody": `
Получение рабочей визы – важный шаг к новой карьере за границей, но ошибки в процессе могут привести к отказу. В 2025 году требования к документам и мотивации остаются строгими. Эта статья выделяет топ-5 ошибок, которые допускают белорусы, и способы их избежать.

### Ошибка №1: Несоответствие документов
Документы, не соответствующие требованиям работодателя или консульства (например, неподходящий диплом или неполный пакет), часто становятся причиной отказа.

### Ошибка №2: Недооценка финансов
Недостаток средств на счету или отсутствие движения по нему может вызвать подозрения. Покажите стабильное финансовое положение.

### Ошибка №3: Ошибки в анкете
Опечатки, сокрытие информации или расхождения в данных приводят к автоматическому отказу. Тщательно проверяйте каждый пункт.

### Ошибка №4: Слабая подготовка к собеседованию
Нечеткие ответы или отсутствие мотивации могут подорвать доверие консула. Подготовьте четкие аргументы и связи с родиной.

### Ошибка №5: Игнорирование сроков
Поздняя подача или неполный пакет документов из-за спешки часто приводит к провалу. Начните процесс заранее.

### Как избежать отказа
Проверьте документы, подготовьте финансы, заполните анкету точно, подготовьтесь к собеседованию и подавайте заявку с запасом времени. Обратитесь к профессионалам VISA VAM для поддержки.

Готовы к успеху? Свяжитесь с нами по +375296800620!
        `,
        "about": [
            { "@type": "Thing", "name": "рабочая виза" },
            { "@type": "Thing", "name": "ошибки при подаче визы" },
            { "@type": "Thing", "name": "отказ в визе" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "белорусы" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/top-5-oshibok-pri-podache-na-rabochiu-vizu",
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
            "@id": "https://visavampro.by/poleznaya-informasia/top-5-oshibok-pri-podache-na-rabochiu-vizu"
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
                        Топ-5 ошибок при подаче на рабочую визу: как избежать отказа и не потерять оффер мечты
                    </h1>
                </div>
                <div className="w-full px-[7%] pt-[20px]">
                    <p>01.07.2025</p>
                    <p><b>Автор: </b>Елизавета Бокая</p>
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
                        unoptimized={true}
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
                            Получение предложения о работе за границей – это огромный шаг и повод для гордости. Однако эйфория от заветного предложения может быстро смениться разочарованием, если на пути к мечте встает <span className={"font-bold"}>отказ в рабочей визе</span>. Процесс ее получения сложнее и строже, чем у краткосрочной визы, и любая, даже незначительная на первый взгляд, ошибка может стоить вам контракта.
                        </p>
                        <p>Команда визового агентства <Link href="/" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">VISA VAM</Link> за годы практики изучила все "подводные камни" этого процесса. Мы собрали для вас <span className={"font-bold"}>топ-5</span> самых частых и обидных <span className={"font-bold"}>ошибок</span>, которые допускают белорусы <span className={"font-bold"}>при подаче на рабочую визу</span>, чтобы вы могли учиться на чужом опыте, а не на своем.</p>
                        <p className={"italic text-[14px]"}>💡 <span className={"font-bold"}>Совет:</span> Срочно необходима рабочая виза с минимальным процентом отказа? Рекомендуем рассмотреть <Link href="/shengenskie-vizy/rabochaya-viza-v-germaniyu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">немецкую рабочую визу</Link> (Тип D) без верификации. Без проверок и собеседований, на 365 дней, быстрое рассмотрение - минимум отказов. Торопитесь - предложение ограничено!</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Ошибка №1: Несоответствие документов требованиям работодателя и консульства</h2>
                        <p>Это самая распространенная проблема. Кандидат считает, что раз есть рабочий контракт, то все остальные документы — простая формальность. Это сильное заблуждение.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-start">
                                <span className={"font-bold"}>Что идет не так:</span>
                            </div>
                            <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Диплом об образовании не соответствует должности.</span> Например, вы подаете визовое заявление на рабочую визу на должность IT-специалиста, а ваш диплом – по специальности "инженер-механик". Даже если у вас есть релевантный опыт, для консула это может стать "красным флагом".</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Неполный пакет документов от работодателя.</span> Отсутствует разрешение на работу, неправильно указан юридический адрес компании, истек срок действия приглашения.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Документы не легализованы или не переведены должным образом.</span> Требования к апостилированию, нотариальному заверению и аккредитованному переводу – строгие. Вольный перевод не подойдет.</p>
                                </li>
                            </ul>
                        </div>
                        <p><span className={"font-bold"}>Как избежать отказа в рабочей визе:</span> Заранее, еще на этапе согласования контракта, запросите у работодателя и уточните на сайте консульства точный и исчерпывающий список документов. Убедитесь, что ваша квалификация по документам соответствует заявленной вакансии.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Ошибка №2: Недооценка финансовых требований</h2>
                        <p>Рабочая виза – это не тот случай, когда можно показать минимум на счету. Консульство должно быть уверено, что у вас есть средства на первое время до получения первой зарплаты.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-start">
                                <span className={"font-bold"}>Причина отказа в визе:</span>
                            </div>
                            <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Недостаточная сумма на банковском счете.</span> Выписка, показывающая минимальный остаток , может вызвать подозрения.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Отсутствие движения по счету.</span> Счет без движения или недавно открытый счет без поступлений и списаний выглядит менее убедительно, чем активный счет с регулярными операциями.</p>
                                </li>
                            </ul>
                        </div>
                        <p><span className={"font-bold"}>Как избежать:</span> Уточните в консульстве или в <span className={"font-bold"}>агентстве</span> рекомендуемую сумму для проживания на 1-2 месяца. Начинайте аккумулировать средства на счете заблаговременно, чтобы показать стабильное финансовое положение.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Ошибка №3: Неправильная или неполная информация в анкете</h2>
                        <p>Анкета на рабочую визу – это ваш главный документ. Любые расхождения с реальностью или другими документами будут трактоваться не в вашу пользу.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-start">
                                <span className={"font-bold"}>Отказ в рабочей визе:</span>
                            </div>
                            <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Опечатки в именах, датах, данных паспорта.</span> Банальная невнимательность, которая приводит к автоматическому отказу в выдаче визы.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Сокрытие информации.</span> Например, вы не указали предыдущие отказы в визах или наличие родственников за границей. Помните: консульства имеют доступ к общим базам данных.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Расхождения в данных.</span> Адрес проживания в анкете не совпадает с адресом в справке с работы, а даты предыдущих поездок – с отметками в паспорте.</p>
                                </li>
                            </ul>
                        </div>
                        <p className={"italic text-[14px]"}>💡 <span className={"font-bold"}>Совет:</span> Заполняйте анкету в несколько подходов, тщательно проверяйте каждую букву и цифру. Будьте предельно честны. Если сомневаетесь, как правильно указать информацию, лучше <Link href="/" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">обратитесь к специалистам визового агентства.</Link></p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Ошибка №4: Неубедительная мотивация и слабая подготовка к собеседованию</h2>
                        <p>Если по вашей визе предусмотрено собеседование в консульстве (самый частый вариант – <Link href="/viza-v-ssha" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">виза в США</Link>), будьте готовы к тому, что это неформальный разговор. Его цель – убедиться в ваших истинных намерениях.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-start">
                                <span className={"font-bold"}>Частые причины отказа в рабочей визе:</span>
                            </div>
                            <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Нечеткие ответы на вопрос "Почему именно эта страна/компания?".</span> Ответ "там больше платят" – провальный.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Отсутствие "связей с родиной".</span> Консул должен видеть, что вы не рассматриваете рабочую визу как легкий способ нелегальной иммиграции. Наличие семьи, недвижимости, счетов в Беларуси – ваши плюсы.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Нервозность и неуверенность.</span> Если вы имеете нечеткое представление о своей будущей работе или условиях контракта, это вызовет подозрения.</p>
                                </li>
                            </ul>
                        </div>
                        <p><span className={"font-bold"}>Как избежать:</span> Продумайте и даже пропишите ответы на возможные вопросы. Четко сформулируйте свою мотивацию, подчеркните свою ценность как специалиста для иностранной компании и покажите свои прочные связи с Беларусью.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Ошибка №5: Игнорирование сроков и "человеческого фактора"</h2>
                        <p>Процесс получения рабочей визы может занимать от нескольких недель до нескольких месяцев.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-start">
                                <span className={"font-bold"}>Важные моменты:</span>
                            </div>
                            <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Слишком поздняя подача.</span> Вы не учли сроки рассмотрения, государственные праздники в обеих странах, и в итоге ваша виза не готова к дате начала контракта.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Запись на подачу в последний момент.</span> Нужная дата для подачи визового заявления не всегда может быть в доступе.</p>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                    <p><span className={"font-bold"}>Подача неполного пакета документов</span> в надежде "донести потом". Как правило, такая практика не допускается.</p>
                                </li>
                            </ul>
                        </div>
                        <p className={"italic text-[14px]"}>💡 <span className={"font-bold"}>Совет:</span> Пользуйтесь услугами профессионалов, которые отслеживают все сроки и знают, как ускорить определенные процедуры без потери качества. Мы предлагаем <span className={"font-bold"}>услугу «под ключ» —</span> подготовка и проверка всех документов. У нас есть опыт в подаче на <Link href="/shengenskie-vizy/rabochaya-viza-v-polshu" className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer">рабочие визы в Польшу</Link>, Германию, Нидерланды, Литву, и другие страны.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Чек-лист для успешного получения рабочей визы. Избегаем отказа</h2>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Проверьте </span>соответствие вашей квалификации вакансии.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Запросите </span>у работодателя полный пакет документов.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Переведите и легализуйте </span>все необходимые документы.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Подготовьте </span>финансовые гарантии заранее.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Заполните </span>анкету без единой ошибки и расхождения.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Продумайте </span>свою мотивацию и подготовьтесь к собеседованию.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Начните </span>процесс оформления визы с запасом времени.</p>
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                <p><span className={"font-bold"}>Обратитесь к экспертам VISA VAM</span>, чтобы гарантировать себе спокойствие и уверенность в результате - <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer" onClick={openModal}>оставьте заявку</a>.</p>
                            </li>
                        </ul>
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

                <Fag4/>

                <div
                    className="w-full relative flex flex-col gap-24 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Не рискуйте своим будущим за границей — доверьтесь профессионалам!</h2>
                        <p><span className={"font-bold"}>Получение рабочей визы</span> – это финишная прямая на пути к вашей новой карьере. Не позволяйте досадным ошибкам перечеркнуть ваши планы, которые приведут к <span className={"font-bold"}>отказу в выдаче визы. <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" rel="noopener noreferrer" onClick={openModal}>Свяжитесь с нами</a>, и мы поможем вам пройти этот путь максимально быстро и эффективно!</span></p>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    );
}