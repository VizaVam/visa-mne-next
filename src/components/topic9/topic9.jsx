'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq9, {faqData} from "@/components/topic9/faq9";

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
        <span className="font-semibold text-gray-900 cursor-default">Виза в Китай</span>
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
        "headline": "Виза в Китай для белорусов 2025: Безвизовый режим, когда нужна виза и как ее оформить | Visa Vam",
        "alternativeHeadline": "Узнайте, нужна ли виза в Китай для граждан Беларуси в 2025 году. Все об условиях безвизового въезда до 30 дней, и в каких случаях белорусам необходимо оформлять туристическую, рабочую или другую визу.",
        "datePublished": "2025-10-01T08:00:00+05:00",
        "dateModified": "2025-10-01T21:33:00+05:00",
        "articleBody": `
Виза в Китай для белорусов в 2025 году: когда можно ехать без визы, а когда она необходима

### Китай — страна с богатейшей историей, невероятными технологиями и уникальной культурой, которая все больше привлекает туристов и бизнесменов из Беларуси. Главный вопрос, который волнует каждого путешественника: нужна ли виза в Китай для белорусов? Ответ не так однозначен, как кажется. Благодаря соглашению между странами, во многих случаях можно поехать в Китай без визы, но существуют важные правила и исключения.
### В этом подробном руководстве мы разберем все условия безвизового режима на 2025 год, выясним, в каких ситуациях все же придется оформлять визу, и как это сделать правильно.
### Когда белорусам виза в Китай не нужна? Условия безвизового режима
### Хорошая новость для большинства путешественников: между Беларусью и Китаем действует соглашение о взаимном безвизовом режиме. Это значительно упрощает краткосрочные поездки.
### Основные условия для безвизового въезда:
- Цель поездки: Туризм, частные визиты, короткие деловые встречи, транзит.
- Срок пребывания: Вы можете находиться в Китае без визы до 30 дней в рамках одной поездки.
- Общий лимит: Суммарный срок пребывания в Китае без визы не должен превышать 90 дней в течение одного календарного года.
### Таким образом, если вы планируете отпуск, посещение друзей или участие в короткой выставке, то вопрос, надо ли виза в Китай для белорусов, для вас решается положительно — она не нужна. Достаточно иметь при себе действующий паспорт.
### Важный момент: Безвизовый режим также распространяется на специальные административные районы Китая — Гонконг и Макао. Правила для них идентичны: до 30 дней пребывания.
### В каких случаях виза в Китай все же необходима?
### Несмотря на наличие "безвиза", он не покрывает все цели и сроки поездок. Виза в Китай для белорусов в 2025 году будет обязательна, если вы планируете:

- Находиться в стране более 30 дней подряд.
- Работать или вести коммерческую деятельность.
- Учиться в китайских учебных заведениях.
- Осуществлять журналистскую деятельность.
- Переехать с целью воссоединения семьи.

### Если ваша цель поездки подпадает под один из этих пунктов, вам необходимо заранее определить, какая виза в Китай вам нужна, и начать процесс ее оформления.
### Совет: Планируете длительную деловую поездку, поступаете в китайский университет или нашли работу? Долгосрочные визы требуют сбора внушительного пакета документов и знания специфических требований консульства. Любая ошибка может стоить вам времени и денег. Компания "Visa Vam" — это ваш надежный партнер в оформлении любых типов виз в Китай. Мы возьмем на себя всю рутину по подготовке документов, чтобы вы могли сосредоточиться на главном. Доверьтесь нашему 10-летнему опыту и получите 98% гарантию одобрения!
### Основные этапы оформления визы в Китай
### Если ваша поездка выходит за рамки безвизового соглашения, вам предстоит пройти стандартную процедуру получения визы.
### 1. Определение типа визы
В зависимости от цели вашей поездки, вам может понадобиться один из следующих типов виз:

- Туристическая (L): Для длительных путешествий (более 30 дней).
- Деловая/Коммерческая (M): Для ведения бизнеса, переговоров, участия в выставках на длительный срок.
- Рабочая (Z): Для официального трудоустройства в китайской компании.
- Студенческая (X1/X2): Для обучения. X1 — для долгосрочного (более 180 дней), X2 — для краткосрочного.
- Семейная (Q1/Q2): Для воссоединения с семьей, для членов семей граждан КНР или иностранцев с ПМЖ в Китае.

###  Сбор необходимых документов

Базовый пакет документов обычно включает:
Паспорт (срок действия не менее 6 месяцев на момент подачи, с пустыми страницами).
Заполненная визовая анкета (заполняется онлайн на сайте Посольства).
Цветная фотография установленного образца (3,5 х 4,5 см на белом фоне).
Копии предыдущих китайских виз (если были).
Подтверждающие документы в зависимости от типа визы (приглашение от компании, справка о зачислении в ВУЗ, разрешение на работу и т.д.).
Бронь авиабилетов и отеля.


### 3. Заполнение анкеты и запись на подачу
### Анкета заполняется онлайн на специальном портале. После ее заполнения необходимо записаться на прием в Консульский отдел Посольства КНР в Минске для подачи документов.

### 4. Визит в консульство и оплата сбора
В назначенный день вы лично подаете собранный пакет документов и оплачиваете консульский сбор. Его размер зависит от типа визы и срочности оформления.
###  Совет: Заполнение онлайн-анкеты на китайскую визу имеет свои тонкости, а "поймать" свободную дату для записи бывает непросто. Зачем тратить на это свои силы? Специалисты "Visa Vam" обеспечат вам полное сопровождение: от корректного заполнения анкеты до записи на удобное для вас время. Мы предлагаем персональный подход и работаем без стресса для клиента. Свяжитесь с нами, и мы сделаем процесс получения визы максимально комфортным!

### Хотите получить визу в Китай быстро и без лишних хлопот? Команда «Visa Vam» предлагает простое решение.
Перестаньте беспокоиться о правильности анкет и приглашений. Доверьте это нам. Мы предлагаем:
Полное сопровождение: от консультации до получения паспорта с визой.
Экономию времени: мы знаем, как ускорить процесс.
Уверенность в результате: наш опыт работает на вас.
### Оставьте заявку на нашем сайте прямо сейчас, и наш специалист свяжется с вами, чтобы начать подготовку к вашему путешествию в Китай уже сегодня!
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" },
            { "@type": "Thing", "name": "Виза в Китай" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/viza-v-kitay-dlya-belorusov",
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
            "@id": "https://visavampro.by/poleznaya-informasia/viza-v-kitay-dlya-belorusov"
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
                            Виза в Китай для белорусов в {year} году: когда можно ехать без визы, а когда она необходима
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
                        src="/topic9.png"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/topic9.png"
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
                            Китай — страна с богатейшей историей, невероятными технологиями и уникальной культурой, 
                            которая все больше привлекает туристов и бизнесменов из Беларуси. Главный вопрос, который 
                            волнует каждого путешественника: <b>нужна ли</b> <Link href="/viza-v-kitaj" 
                            className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer">виза в Китай</Link> <b>для белорусов?</b> Ответ не так однозначен, 
                            как кажется. Благодаря соглашению между странами, во многих случаях <b>можно поехать в Китай без визы</b>, 
                            но существуют важные правила и исключения.
                        </p>
                        <p>
                            В этом подробном руководстве мы разберем все условия безвизового режима на 2025 год, 
                            выясним, в каких ситуациях все же придется оформлять визу, и как это сделать правильно.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Когда белорусам виза в Китай не нужна? Условия безвизового режима
                        </h2>
                        <p>
                            Хорошая новость для большинства путешественников: между Беларусью и 
                            Китаем действует соглашение о взаимном безвизовом режиме. Это значительно 
                            упрощает краткосрочные поездки.

                        </p>
                        <p>
                            <b>Основные условия для безвизового въезда:</b>
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Цель поездки: </b> Туризм, частные визиты, короткие деловые встречи, транзит.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Срок пребывания: </b> Вы можете находиться <b>в Китае без визы до 30 дней</b> в рамках одной поездки.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Общий лимит:</b> Суммарный срок пребывания в Китае без визы не должен превышать 90 дней в течение одного календарного года.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Таким образом, если вы планируете отпуск, посещение друзей или участие в короткой выставке, 
                            то вопрос, надо ли виза в Китай для белорусов, для вас решается положительно — она не нужна. 
                            Достаточно иметь при себе действующий паспорт.
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Важный момент: </b> Безвизовый режим также распространяется на специальные административные районы Китая — Гонконг и Макао. 
                                    Правила для них идентичны: до 30 дней пребывания.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            В каких случаях виза в Китай все же необходима?
                        </h2>
                        <p>
                            Несмотря на наличие "безвиза", он не покрывает все цели и сроки поездок. <b>Виза 
                            в Китай для белорусов в {year} году</b> будет обязательна, если вы планируете:
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Находиться в стране более 30 дней подряд.</b> 
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Работать или вести коммерческую деятельность.</b>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Учиться</b> в китайских учебных заведениях.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Осуществлять журналистскую деятельность.</b> 
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Переехать</b> с целью воссоединения семьи.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Если ваша цель поездки подпадает под один из этих пунктов, 
                            вам необходимо заранее определить, <b>какая виза в Китай</b> вам нужна, 
                            и начать процесс ее оформления.
                        </p>
                        <p className={"italic text-[14px]"}>
                            💡  <span className={"font-bold"}> Совет:</span>  Планируете длительную деловую поездку, 
                            поступаете в китайский университет или нашли работу? Долгосрочные визы требуют сбора внушительного 
                            пакета документов и знания специфических требований консульства. Любая ошибка может стоить вам времени и 
                            денег.<Link href="/" 
                                className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                target="_blank" rel="noopener noreferrer">Компания VISA VAM</Link>— это ваш надежный 
                                партнер в оформлении любых типов виз в Китай. Мы возьмем на себя всю рутину по подготовке 
                                документов, чтобы вы могли сосредоточиться на главном. <b>Доверьтесь нашему 10-летнему опыту 
                                и получите 98% гарантию одобрения!</b>
                        </p>
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Основные этапы оформления визы в Китай
                        </h2>
                        <p>Если ваша поездка выходит за рамки безвизового соглашения, вам предстоит пройти стандартную процедуру получения визы.</p>
                        <p><b>1. Определение типа визы</b></p>
                        <p>В зависимости от цели вашей поездки, вам может понадобиться один из следующих типов виз:</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Туристическая (L):</b> Для длительных путешествий (более 30 дней).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Деловая/Коммерческая (M): </b> Для ведения бизнеса, переговоров, участия в выставках на длительный срок.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Рабочая (Z): </b> Для официального трудоустройства в китайской компании.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Студенческая (X1/X2):</b> Для обучения. X1 — для долгосрочного (более 180 дней), X2 — для краткосрочного.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Семейная (Q1/Q2):</b> Для воссоединения с семьей, для членов семей граждан КНР или иностранцев с ПМЖ в Китае.
                                </span>
                            </li>
                        </ul>
                        <p><b>2. Сбор необходимых документов</b></p>
                        <p>Базовый пакет документов обычно включает:</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Паспорт </b> (срок действия не менее 6 месяцев на момент подачи, с пустыми страницами).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Заполненная визовая анкета </b> (заполняется онлайн на <Link href="https://by.china-embassy.gov.cn/" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">сайте Посольства</Link>).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Цветная фотография</b> установленного образца (3,5 х 4,5 см на белом фоне).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Копии предыдущих китайских виз</b> (если были).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Подтверждающие документы</b> в зависимости от типа визы (приглашение от компании, справка о зачислении в ВУЗ, разрешение на работу и т.д.).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Бронь авиабилетов и отеля.</b>
                                </span>
                            </li>
                        </ul>
                        <p><b>3. Заполнение анкеты и запись на подачу</b></p>
                        <p>
                            Анкета заполняется онлайн на специальном портале. 
                            После ее заполнения необходимо записаться на прием 
                            в Консульский отдел Посольства КНР в Минске для подачи документов.
                        </p>
                        <p><b>4. Визит в консульство и оплата сбора</b></p>
                        <p>
                            В назначенный день вы лично подаете собранный пакет документов и оплачиваете консульский сбор. 
                            Его размер зависит от типа визы и срочности оформления.
                        </p>
                        <p className={"italic text-[14px]"}>
                            💡  <span className={"font-bold"}> Совет:</span> Заполнение онлайн-анкеты на китайскую визу 
                            имеет свои тонкости, а "поймать" свободную дату для записи бывает непросто. Зачем тратить на 
                            это свои силы? <b>Специалисты "Visa Vam"</b> обеспечат вам полное сопровождение: от корректного 
                            заполнения анкеты до записи на удобное для вас время. Мы предлагаем персональный подход и 
                            работаем без стресса для клиента. <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>Свяжитесь с нами</a> <b>и мы сделаем процесс получения визы максимально 
                            комфортным!</b>
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

                <Faq9/>
                <div
                    className="w-full relative flex flex-col gap-24 mdd:gap-12 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Заключение</h2>
                        <p>
                            Хотите получить <Link href="/viza-v-kitaj" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">визу в Китай</Link> быстро и без лишних хлопот? 
                                    Команда <b>«Visa Vam»</b> предлагает простое решение.
                        </p>
                        <p><b>Перестаньте беспокоиться о правильности анкет и приглашений. Доверьте это нам. Мы предлагаем:</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Полное сопровождение: </b> от консультации до получения паспорта с визой.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Экономию времени:</b> мы знаем, как ускорить процесс.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Уверенность в результате:</b> наш опыт работает на вас.
                                </span>
                            </li>
                        </ul>
                        <p>
                            <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>Оставьте заявку</a> <b>на нашем сайте прямо сейчас, и наш специалист свяжется с вами, чтобы начать подготовку к вашему путешествию в Китай уже сегодня!</b>
                        </p>
                    </div>
                </div>
                <Contacts/>
            </div>
        </div>
    );
}