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
        "headline": "Куда поехать белорусам в 2025: Полный гид по безвизовым странам, Шенгену и советам для отдыха",
        "alternativeHeadline": "Актуальный гид для белорусов на 2025 год. Список стран, куда можно поехать без визы. Инструкция по получению шенгенской визы. Полезные советы, ответы на вопросы и помощь в оформлении виз — все в одной статье!",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
Планирование отпуска для белорусов в 2025 году открывает широкие горизонты: от доступных безвизовых направлений для спонтанных поездок до тщательно спланированных путешествий в страны, требующие визы. В этой статье мы подробно рассмотрим, куда поехать белорусам, предложим варианты на любой вкус и бюджет, а также дадим практические советы по организации отдыха, чтобы совместить комфорт, доступность и яркие впечатления.

### Безвизовый отдых: куда поехать белорусу без лишних хлопот

Для тех, кто ценит простоту и скорость организации путешествия, безвизовые страны остаются приоритетным выбором. Куда можно поехать белорусам без визы в 2025 году? Список достаточно широк и разнообразен.

### Ближнее зарубежье и популярные направления:
- Россия: Традиционно самое доступное направление для белорусов. Близость, низкие цены, разнообразие — от пляжного отдыха. Москва и Санкт-Петербург привлекают богатой культурной программой, а южные регионы, такие как Краснодарский край (Сочи, Анапа), предлагают отдых на Черном море.
- Грузия: Страна с невероятным гостеприимством, вкуснейшей кухней и разнообразными пейзажами. Белорусы могут находиться в Грузии без визы до 360 дней. Летом популярен отдых на море в Батуми и Кобулети, а в любое время года — экскурсионные туры по Тбилиси, Мцхете и горным регионам.
- Турция: Бессменный лидер пляжного отдыха. Для граждан Беларуси действует безвизовый режим до 30 дней. Анталийское побережье с его системой "все включено" идеально подходит для семейного отдыха. Куда поехать летом белорусам? Турция — один из самых очевидных и надежных ответов. Идеальный вариант для пляжного отдыха с семьёй.
- Египет: Еще одно круглогодичное направление для любителей теплого моря и дайвинга. Белорусы могут получить визу по прибытии в аэропортах Хургады и Шарм-эш-Шейха, что делает поездку максимально простой.
- ОАЭ: Роскошный отдых, футуристическая архитектура и первоклассный сервис. Безвизовый режим для белорусов (до 90 дней) сделал это направление еще более привлекательным.
- Черногория и Албания: Балканские жемчужины с прекрасными пляжами на Адриатическом море, живописной природой и доступными ценами. Отличный вариант для летнего отдыха без необходимости оформлять шенгенскую визу.


Отдых на море и экзотика:

- Вьетнам, Таиланд, Шри-Ланка: Азиатские направления манят своей экзотикой, древними храмами и белоснежными пляжами. Условия въезда для белорусов могут меняться, но часто предлагаются упрощенные визовые режимы или визы по прибытии.
- Куба и Доминикана: Карибский бассейн — это рай для тех, кто ищет лазурные воды, зажигательные ритмы и атмосферу вечного праздника. Куда поехать белорусу на отдых, чтобы полностью перезагрузиться? Эти страны — прекрасный выбор.
- Израиль: Возможность совместить пляжный отдых на Средиземном и Красном море с паломничеством к святым местам.

### Визовые горизонты: куда поехать отдыхать белорусам с визой
Некоторые из самых желанных туристических направлений требуют предварительного оформления визы. В первую очередь, это страны Шенгенского соглашения.

Страны Шенгенской зоны:

Несмотря на определенные сложности, получение шенгенской визы открывает доступ к 27 странам Европы. Популярными направлениями для экскурсионных туров и отдыха остаются:

- Италия: Колыбель Ренессанса, моды и изысканной кухни.
- Испания: Солнечные пляжи Коста-Бравы и Коста-Дорады, страстное фламенко и шедевры Гауди.
- Греция: Античные руины, мифические острова и лазурное море.
- Франция: Романтический Париж, лавандовые поля Прованса и Лазурный берег.

### Краткий перечень документов для туристической визы (может варьироваться в зависимости от страны):
- Паспорт (действительный не менее 3 месяцев после окончания поездки, с минимум 2 чистыми страницами).
- Цветные фотографии.
- Заполненная анкета.
- Медицинская страховка.
- Подтверждение цели поездки  не всегда это бронь. и не всегда это туризм, если это рабочка, то нужно приглашение. поэтому я бы убрала в скобках.
- Подтверждение финансовой состоятельности (справка с работы о зарплате, выписка о состоянии счета за последние 3 мес.).
- Транспортные документы (бронь авиабилетов, билетов на транспорт).

### Советы по планированию отдыха в 2025 году
- Раннее бронирование: Особенно актуально для популярных направлений в пик сезона. Это позволяет не только сэкономить, но и выбрать лучший отель и удобные рейсы.
- Гибкость в датах: Путешествуйте в межсезонье. Цены на перелеты и проживание значительно ниже, а погода все еще комфортна.
- Проверяйте правила въезда: Визовые требования могут меняться. Перед поездкой обязательно уточняйте актуальную информацию на сайте посольства.
- Страхование: Не пренебрегайте медицинской страховкой, даже если она не является обязательным требованием для въезда.
- Изучите местные обычаи: Проявите уважение к культуре страны, в которую вы отправляетесь. Это сделает ваше путешествие более приятным и безопасным.
 
### Совет: Мы оказываем помощь в оформлении визы! Процесс сбора документов и заполнения анкет может быть сложным и запутанным. Команда экспертов VISA VAM поможет на каждом этапе: от проверки документов до записи в визовый центр, значительно повышая ваши шансы на успешное получение визы — свяжитесь с нами!

### Куда поехать белорусам в 2025 году — вопрос, на который есть множество ответов. От безвизовых стран вроде Турции, Сербии и ОАЭ до мечтательных поездок в Европу, Великобританию, США и Китай — выбор зависит от ваших предпочтений, бюджета и времени. Главное — начать планирование заранее, собрать нужные документы и не бояться новых горизонтов.

### Нужна помощь с визой?

Свяжитесь с нами — мы поможем вам оформить визу без стресса и с минимальным процентом отказов!
Гарантия подачи
Поддержка 24/7
Быстрое оформление
Работаем со сложными случаями
Оставьте заявку на сайте — и уже в скором времени вы можете получить заветную визу в паспорте!
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/kuda-poehat-belorusam",
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
            "@id": "https://visavampro.by/poleznaya-informasia/kuda-poehat-belorusam"
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