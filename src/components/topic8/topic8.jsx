'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq8, {faqData} from "@/components/topic8/faq8";

const year = new Date().getFullYear();

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
        <span className="font-semibold text-gray-900 cursor-default">Документы для визы по приглашению</span>
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
        "headline": "Виза для ребенка в 2025: документы, правила оформления и согласие на выезд | VISA VAM",
        "alternativeHeadline": "Полный список документов для оформления визы на ребенка. Узнайте, как получить визу для несовершеннолетнего, путешествующего с одним родителем или без них. Правила, советы и ответы на вопросы.",
        "datePublished": "2025-10-01T08:00:00+05:00",
        "dateModified": "2025-10-01T21:33:00+05:00",
        "articleBody": `
Виза для ребенка: полное руководство по документам и правилам в 2025 году

### Планируете семейное путешествие за границу? Оформление визы для ребенка — это процесс, который требует особого внимания к деталям. В отличие от “взрослой” визы, здесь есть свои нюансы и расширенный список документов. Чтобы избежать задержек и отказа, важно заранее знать, какие документы нужны для визы ребенку и как правильно их подготовить. В этом подробном руководстве мы разберем все этапы и правила получения визы для ребенка.

### Почему визе для детей уделяется особое внимание?

### Консульства всех стран очень серьезно подходят к выдаче виз несовершеннолетним. Основная цель строгих правил — предотвращение незаконного вывоза детей и защита их прав. Поэтому каждый документ тщательно проверяется, а к пакету документов предъявляются повышенные требования.
Виза для несовершеннолетнего ребенка требует подтверждения не только цели поездки и финансовой состоятельности, но и согласия законных представителей (родителей или опекунов) на выезд.

### Основной список документов для визы на ребенка


###  Ниже представлен базовый перечень документов, который является стандартным для большинства стран Шенгенской зоны и многих других. Всегда уточняйте актуальный список на сайте консульства или визового центра страны назначения.

### Какие документы нужны для визы ребенку:

- Анкета-заявление на визу: Заполняется одним из родителей, а подписывается обоими (или законным опекуном). В некоторых случаях требуется подпись и самого ребенка, если он достиг определенного возраста (обычно 14-16 лет).
- Паспорт ребенка: Срок действия паспорта должен превышать срок окончания действия визы как минимум на 3 месяца. В паспорте должно быть не менее одного чистого разворота для визы. 
- Копия свидетельства о рождении: Это ключевой документ, подтверждающий родство.
- Фотографии: 2 цветные фотографии установленного образца (обычно 3,5 х 4,5 см на светлом фоне), сделанные не ранее чем за 6 месяцев до подачи.
- Копии паспортов родителей.
- Копии действующих виз родителей (если применимо, например, при совместной поездке)
- Разрешение на выезд ребенка от обоих родителей (есть нюансы в каждом Консульстве, уточняйте у наших сотрудников).
- Медицинская страховка: Полис должен покрывать весь период пребывания за границей с суммой покрытия не менее €30,000 (для Шенгена).

### Дополнительные документы в зависимости от ситуации
- Получение визы для ребенка часто требует дополнительных бумаг, которые зависят от обстоятельств поездки.

### Если ребенок едет в сопровождении третьего лица (бабушки, тренера, учителя):
- Нотариально заверенное согласие на выезд от обоих родителей. В документе указываются данные сопровождающего лица.
- Копии паспортов обоих родителей.
- Копия паспорта сопровождающего лица.


### Если у ребенка только один родитель:
- Свидетельство о смерти второго родителя.
- Справка из ЗАГСа, что сведения об отце внесены со слов матери.
- Решение суда о лишении родительских прав второго родителя.


### Как проходит оформление визы для ребенка?
### Процесс включает несколько этапов:
- Сбор документов — важно проверить актуальные требования посольства.
- Заполнение анкеты — ошибки могут привести к отказу.
- Запись на подачу — в визовый центр или посольство.
- Подача документов и биометрия (если требуется).
- Ожидание решения — сроки от 2-ух недель, в зависимости от страны.
- Получение паспорта с визой.

### На каждом этапе важно не допустить ошибок. Малейшая неточность в анкете или отсутствие нужного документа может привести к задержке или отказу.


### Оформление детской визы — ответственная задача, но при правильной и заблаговременной подготовке она не вызовет трудностей. А если вы хотите гарантий и спокойствия, профессионалы из VISA VAM всегда готовы помочь. Наша команда найдет решение даже в сложных ситуациях.

###  Оставьте заявку на сайте — и ваша поездка с детьми станет легкой и безопасной!
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" },
            { "@type": "Thing", "name": "виза для детей" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/viza-dlya-detey",
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
            "@id": "https://visavampro.by/poleznaya-informasia/viza-dlya-detey"
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
                            Документы для визы по приглашению: полный гид для граждан Беларуси в {year} году
                    </h1>
                </div>
                <div className="w-full px-[7%] pt-[20px]">
                    <p>01.10.2025</p>
                    <p><b>Автор: </b>Елизавета Бокая</p>
                </div>
            </div>

            <div className="relative mt-[200px] md:mt-[320px]">
                {/* Banner Section */}
                <div className="w-full relative">
                    <Image
                        src="/topic8.jpg"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/topic8.jpg"
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
                            <b>Виза по приглашению</b> — это удобный способ посетить родственников, 
                            друзей или партнеров за рубежом, особенно в странах Шенгенской зоны, 
                            таких как Польша, Литва или Германия. Для граждан Беларуси такая виза 
                            часто оформляется как гостевая (типа C), позволяющая пребывание до 90 дней в 
                            полугодие. В этой статье мы разберем, какие документы нужны для <b>визы гостевой</b>, 
                            документы для оформления <b>визы по приглашению</b> и особенности процесса. Мы учтем 
                            актуальные требования на 2025 год, основанные на официальных источниках визовых 
                            центров и посольств.
                        </p>
                        <p>
                            Если вы планируете поездку в Польшу, которая остается одним из самых популярных 
                            направлений для белорусов из-за географической близости и упрощенных процедур, 
                            обратите особое внимание на раздел о документах на польскую визу по приглашению. 
                            Помните, что требования могут варьироваться в зависимости от страны, но базовый 
                            набор схож для Шенгена.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Что такое виза по приглашению и когда она нужна
                        </h2>
                        <p>
                            <b>Виза по приглашению</b>, или гостевая виза, выдается на основе 
                            официального приглашения от резидента или гражданина принимающей 
                            страны. Это подтверждает цель поездки — визит к родным или 
                            друзьям — и снижает риски отказа, если все документы для получения 
                            визы по приглашению собраны правильно. Для белорусов такая виза 
                            актуальна для поездок в ЕС, где действует соглашение об упрощенном 
                            визовом режиме, снижая консульский сбор до 35 евро.

                        </p>
                        <p>
                            Процесс начинается с подготовки пакета документов, записи в визовый 
                            центр (например, <Link href="https://visa.vfsglobal.com/blr/ru/pol/attend-centre" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">VFS Global для Польши</Link>) и подачи заявления. 
                                    Срок рассмотрения — до 21 дня.
                        </p>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Основной список документов для визы по приглашению
                        </h2>
                        <p>
                            Чтобы <b>оформить визу по приглашению</b>, какие документы нужны? 
                            Вот универсальный перечень для граждан Беларуси, применимый к 
                            большинству шенгенских стран. Все документы подаются в оригинале с копиями, 
                            а переводы на английский или язык страны (если требуется) должны быть нотариально заверены.
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Паспорт.</b> Действителен минимум 3 месяца после возвращения, выдан не ранее 
                                    10 лет назад, с как минимум одним чистым полным разворотом  для визы.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Фотографии.</b> 2 шт. размером 3,5х4,5 см на светлом фоне, сделанные не ранее 6 месяцев.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Визовая анкета.</b> Заполняется онлайн на сайте посольства или 
                                    визового центра (например, e-konsulat для Польши). Укажите цель — "посещение родственников/друзей".
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Фотографии:</b> 2 цветные фотографии установленного образца 
                                    (обычно 3,5 х 4,5 см на светлом фоне), сделанные не ранее чем за 6 месяцев до подачи.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Медицинская страховка.</b> Покрытие не менее 30 000 евро, действительна на весь период пребывания. 
                                    Можно оформить в белорусских страховых компаниях.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Приглашение от принимающей стороны.</b> Оригинал или нотариально заверенная копия. 
                                    Для Польши — зарегистрированное в воеводстве, с указанием данных приглашающего, цели визита, 
                                    сроков и финансовых гарантий. Если приглашающий покрывает расходы, приложите его справку о 
                                    доходах и копию паспорта.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Доказательство финансовой состоятельности.</b> Выписка с банковского счета 
                                    (минимум 45 PLN или эквивалент на день пребывания), справка с работы с указанием зарплаты за последние 
                                    3–6 месяцев или спонсорское письмо, если расходы берет на себя приглашающий.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Документы, подтверждающие цель поездки.</b> Свидетельство о родстве (если родственники), 
                                    выкупленные билеты в обе стороны, подтверждение проживания (выкупленный отель или документы о 
                                    недвижимости приглашающей стороны)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Копии внутренних документов.</b> Страницы белорусского паспорта с личными данными.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Для несовершеннолетних добавьте нотариальное согласие родителей и свидетельство о рождении. 
                            Если вы подаете на <b>гостевую визу</b> документы для многократного въезда, предоставьте доказательства 
                            предыдущих поездок.
                        </p>
                        <p>
                            Собирая <b>документы для визы по приглашению</b>, проверьте актуальность на сайте визового центра — 
                            требования могут обновляться, как это произошло в 2025 году с введением дополнительных верификаций 
                            для белорусов.
                        </p>

                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Особенности документов для польской визы по приглашению
                        </h3>
                        <p>
                            <Link href="/shengenskie-vizy/viza-v-polshu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Польша</Link> — лидер по <b>выдаче виз белорусам</b>, и документы на польскую визу по приглашению в 2025 
                            году включают те же базовые, но с нюансами. Подача через VFS Global в Минске, Бресте, Гродно 
                            или других городах. Для <Link href="/shengenskie-vizy/gostevaya-polskaya-viza" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">гостевой визы</Link> по приглашению родственников или друзей:
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Приглашение должно быть на официальном бланке, с номером регистрации (получается приглашающим в Польше за 1–1,5 месяца).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Если родство, то доказательства (свидетельства о браке, рождении).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Финансовые гарантии. Если приглашающий — поляк или резидент, его выписка банка или справка о доходах.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Дополнительно. Оплаченная бронь отеля, если пребывание не только у приглашающего.
                                </span>
                            </li>
                        </ul>
                        <p>
                            В 2025 году Польша ввела срочный порядок рассмотрения для близких родственников, но общий срок — до 21 дня. Успеваемость одобрения высока при полном пакете.
                        </p>
                        <p className={"italic text-[14px]"}>
                            💡  <span className={"font-bold"}> Совет:</span> Если процесс кажется сложным, подумайте о 
                                    профессиональной поддержке. <Link href="/" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Компания VISA VAM</Link>, с более чем 10-летним опытом, 
                                    предлагает персональный подход к подготовке документов для оформления визы по приглашению. 
                                    Мы обеспечиваем 98% одобрения, сопровождая на всех этапах — от консультации до записи в центр. 
                                    Без стресса: наши специалисты проверят ваш пакет, заполнят анкету и учтут нюансы. Мы сотрудничаем 
                                    с туркомпаниями и помогаем с визами для командировок, учебы или переезда в Европу.
                        </p>

                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Советы по сбору и подаче документов
                        </h2>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Начните с приглашения. Убедитесь, что оно актуально (действует 6 месяцев).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Проверьте финансы. Для Польши — минимум 500 PLN на человека за поездку.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Избегайте ошибок. Неполный пакет — главная причина отказа.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Для <Link href="/shengenskie-vizy/delovaya-viza-v-polshu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">бизнеса</Link> или туризма. Если приглашение от 
                                    партнера, добавьте коммерческие документы.
                                </span>
                            </li>
                        </ul>
                        <p className={"italic text-[14px]"}>
                            💡  <span className={"font-bold"}> Совет:</span> Опыт показывает, 
                                    что индивидуальные решения ключ к успеху. В VISA VAM мы находим 
                                    такие подходы для каждого клиента, оформляя не только <Link href="/shengenskie-vizy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">шенгенские</Link>, 
                                    но и национальные визы в <Link href="/viza-v-ssha" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">США</Link>, <Link href="/viza-v-velikobritaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Великобританию</Link> или для воссоединения семьи. 
                                    Наши консультации помогут адаптировать документы для получения визы по 
                                    приглашению под вашу ситуацию.
                        </p>

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

                <Faq8/>
                <div
                    className="w-full relative flex flex-col gap-24 mdd:gap-12 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Заключение</h2>
                        <p>
                            Подготовка <b>документов для получения визы по приглашению</b> требует тщательности и от вас, 
                            и от ваших близких за границей. Следуя этому руководству, вы сможете грамотно подготовиться к подаче.
                        </p>
                        <p>
                            Если у вас остались вопросы по каким документам нужны для гостевой визы, <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>свяжитесь с нами</a> для бесплатной консультации.
                            Мы поможем оформить визу в <Link href="/shengenskie-vizy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Европу</Link>, <b>США</b> или для 
                                    переезда — с полным сопровождением и без лишних хлопот.
                        </p>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    );
}