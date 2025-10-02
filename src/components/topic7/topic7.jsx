'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq7, {faqData} from "@/components/topic7/faq7";

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
        <span className="font-semibold text-gray-900 cursor-default"> Виза для детей</span>
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
                            Виза для ребенка: полное руководство по документам и правилам в {year} году
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
                        src="/topic7.jpg"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/topic7.jpg"
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
                            Планируете семейное путешествие за границу? <b>Оформление визы для ребенка</b> — это процесс, 
                            который требует особого внимания к деталям. В отличие от “взрослой” визы, здесь есть свои 
                            нюансы и расширенный список документов. Чтобы избежать задержек и отказа, важно заранее знать, <b>какие документы нужны для визы ребенку</b> и как правильно их подготовить. В этом подробном 
                            руководстве мы разберем все этапы и правила <b>получения визы для ребенка</b>.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Почему визе для детей уделяется особое внимание?
                        </h2>
                        <p>
                            Консульства всех стран очень серьезно подходят к выдаче виз несовершеннолетним. 
                            Основная цель строгих правил — предотвращение незаконного вывоза детей и защита их прав. 
                            Поэтому каждый документ тщательно проверяется, а к пакету документов предъявляются повышенные требования.
                        </p>
                        <p>
                            <b>Виза для несовершеннолетнего ребенка</b> требует подтверждения не только цели поездки и финансовой 
                            состоятельности, но и согласия законных представителей (родителей или опекунов) на выезд.
                        </p>
                        <p className={"italic text-[14px]"}>
                            💡 <span className={"font-bold"}> Совет:</span> Сбор документов на всю семью кажется сложным и запутанным? 
                            Не рискуйте отпуском из-за формальностей! Компания <Link href="/" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">VISA VAM</Link> уже более 10 лет помогает семьям путешествовать 
                                    без стресса. Мы досконально знаем все нюансы оформления визы для детей в <Link href="/shengenskie-vizy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Европу</Link>, <Link href="/viza-v-ssha" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">США</Link>, <Link href="/viza-v-velikobritaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Великобританию</Link> и другие страны. Наш опыт — это 98% одобренных виз и ваше спокойствие. <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer" onClick={openModal}>Свяжитесь с нами</a> <b>и мы возьмем все хлопоты на себя!</b>
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Основной список документов для визы на ребенка
                        </h2>
                        <p>
                            Ниже представлен базовый перечень документов, который является стандартным для большинства 
                            стран Шенгенской зоны и многих других. <b>Всегда уточняйте актуальный список</b> на сайте консульства 
                            или визового центра страны назначения.
                        </p>
                        <p>
                            <b>Какие документы нужны для визы ребенку:</b>
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Анкета-заявление на визу:</b> Заполняется одним из родителей, а подписывается обоими (или законным опекуном). 
                                    В некоторых случаях требуется подпись и самого ребенка, 
                                    если он достиг определенного возраста (обычно 14-16 лет).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Паспорт ребенка:</b> Срок действия паспорта должен превышать срок окончания 
                                    действия визы как минимум на 3 месяца. В паспорте должно быть не менее одного 
                                    чистого разворота для визы. 
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Копия свидетельства о рождении:</b> Это ключевой документ, подтверждающий родство.
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
                                    <b>Копии паспортов родителей.</b>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Копии действующих виз родителей</b> (если применимо, например, при совместной поездке)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Разрешение на выезд ребенка от обоих родителей</b> (есть нюансы в каждом Консульстве, 
                                    уточняйте у наших сотрудников).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Медицинская страховка:</b> Полис должен покрывать весь период пребывания за границей с 
                                    суммой покрытия не менее €30,000 (для Шенгена).
                                </span>
                            </li>
                        </ul>

                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Дополнительные документы в зависимости от ситуации
                        </h3>
                        <p>
                            <b>Получение визы для ребенка</b> часто требует дополнительных бумаг, которые зависят от обстоятельств поездки.
                        </p>
                        <p>
                            <b>Если ребенок едет в сопровождении третьего лица (бабушки, тренера, учителя):</b>
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Нотариально заверенное согласие на выезд от обоих родителей.</b> В документе указываются данные сопровождающего лица.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Копии паспортов обоих родителей.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Копия паспорта сопровождающего лица.
                                </span>
                            </li>
                        </ul>
                        <p>
                            <b>Если у ребенка только один родитель:</b>
                        </p>
                        <p>
                            Необходимо предоставить документ, подтверждающий этот факт:
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Свидетельство о смерти второго родителя.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Справка из ЗАГСа, что сведения об отце внесены со слов матери.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Решение суда о лишении родительских прав второго родителя.
                                </span>
                            </li>
                        </ul>
                        <p className={"italic text-[14px]"}>
                            💡  <span className={"font-bold"}> Совет:</span> Каждая ситуация уникальна. Что делать, если невозможно получить согласие от второго родителя или вы планируете 
                                    долгосрочную учебную визу для ребенка? Специалисты <Link href="/" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">VISA VAM</Link> проводят детальные консультации, 
                                    помогают грамотно составить все заявления и согласия, чтобы <b>оформление визы для ребенка</b> прошло 
                                    гладко и успешно. <b>Доверьтесь нашему 10-летнему опыту и получите персональный подход!</b>
                        </p>

                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Как проходит оформление визы для ребенка?
                        </h2>
                        <p>
                            Процесс включает несколько этапов:
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Сбор документов — важно проверить актуальные требования посольства.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Заполнение анкеты — ошибки могут привести к отказу.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Запись на подачу — в визовый центр или посольство.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Подача документов и биометрия (если требуется).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Ожидание решения — сроки от 2-ух недель, в зависимости от страны.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Получение паспорта с визой.
                                </span>
                            </li>
                        </ul>
                        <p>
                            На каждом этапе важно не допустить ошибок. Малейшая неточность в анкете или 
                            отсутствие нужного документа может привести к задержке или отказу.
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

                <Faq7/>
                <div
                    className="w-full relative flex flex-col gap-24 mdd:gap-12 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Заключение</h2>
                        <p>
                            <b>Оформление детской визы</b> — ответственная задача, но при правильной и заблаговременной 
                            подготовке она не вызовет трудностей. А если вы хотите гарантий и спокойствия, профессионалы 
                            из <b>VISA VAM</b> всегда готовы помочь. Наша команда найдет решение даже в сложных ситуациях.
                        </p>
                        <p>
                            <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>Оставьте заявку на сайте</a> — и 
                            отправляйтесь в путешествие без лишних хлопот!
                        </p>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    );
}