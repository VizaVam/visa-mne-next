'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq5, {faqData} from "@/components/topic5/faq5";

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
        <span className="font-semibold text-gray-900 cursor-default">Фото на визу {year}: Полное руководство по требованиям к фотографиям</span>
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
        "headline": "Фото на визу 2025: Все требования к фото на Шенген, США | Visa Vam",
        "alternativeHeadline": "Актуальные требования к фото на визу в 2025 году. Узнайте, какая фотография нужна для Шенгена, США и других стран. Все правила по размеру, фону и качеству снимка, чтобы избежать отказа.",
        "datePublished": "2025-09-04T08:00:00+05:00",
        "dateModified": "2025-09-04T21:33:00+05:00",
        "articleBody": `
Фото на визу 2025: Полное руководство по требованиям к фотографиям

### Независимо от того, нужна ли вам виза для туристического путешествия, деловой поездки или переезда, 
одним из первых и важнейших шагов в подготовке документов является правильная фотография. Несоответствие 
даже малейшим деталям может стать причиной для отказа в приеме документов, задержек и ненужного стресса. 
В этой статье мы подробно разберем актуальные требования к фотографии на визу в 2025 году, чтобы вы могли 
с первого раза подготовить идеальный снимок.

### Важность правильной фотографии на визу

### Консульства и визовые центры предъявляют строгие требования к фотографиям на визу. 
Это связано с использованием биометрических данных для идентификации личности. Ваше фото 
сканируется и вносится в базу данных, поэтому оно должно быть четким, актуальным и соответствовать 
международным стандартам. Любое отклонение от нормы может быть расценено как попытка скрыть свою личность 
или предоставить неверные данные.

### Какая фотография нужна на визу в 2025 году? Хотя требования могут незначительно отличаться в зависимости от страны назначения, существует ряд общих правил, которых придерживается большинство консульств, включая визу в страны Шенгенской зоны, США и Великобританию.


### Совет: Не хотите вникать в десятки нюансов и рисковать отказом? Доверьте подготовку документов профессионалам! Компания VISA VAM уже более 10 лет помогает своим клиентам получать визы без стресса. Мы знаем все актуальные требования, включая мельчайшие детали к фотографиям для любой страны. С нами 98% одобрения виз. Свяжитесь с нами для бесплатной консультации и забудьте о хлопотах! Мы обеспечим полное сопровождение на всех этапах.

### Основные правила и требования к фото на визу

### Чтобы ваша фотография была принята, она должна соответствовать следующим простым ключевым параметрам:

### Размер и пропорции:
- Стандартный размер: Чаще всего требуется фотография размером 3,5 х 4,5 см (35х45 мм).
- Лицо на фото: Должно занимать от 70% до 80% всего изображения. Это примерно 32-36 мм от макушки до подбородка.

### Фон:
- Цвет: Фон должен быть однотонным, светлым (обычно белый или светло-серый), без узоров, теней и посторонних предметов.

### Актуальность и качество:
- Свежесть: Фотография должна быть сделана не ранее, чем за 6 месяцев до подачи документов.
- Качество: Снимок должен быть четким, с хорошей фокусировкой, без пикселизации, пятен, бликов и эффекта "красных глаз". Печать должна производиться на качественной матовой фотобумаге.

### Выражение лица и положение головы:
- Выражение: Нейтральное, без улыбки, рот закрыт.
- Взгляд: Направлен прямо в камеру.
- Положение головы: Строго анфас, без наклонов и поворотов. Оба уха должны быть видны.

### Одежда и аксессуары:
- Одежда: Рекомендуется повседневная одежда темных тонов, которая будет контрастировать со светлым фоном. Избегайте униформы и слишком открытой одежды.
- Очки: Допускаются только по медицинским показаниям (при постоянном ношении). Оправа не должна быть массивной и закрывать глаза. Стекла должны быть прозрачными, без бликов. Фотографироваться в солнцезащитных очках запрещено.
- Головные уборы: Запрещены, за исключением случаев, когда их ношение предписано религиозными убеждениями. При этом головной убор не должен скрывать овал лица, лоб, щеки и подбородок.
- Волосы: Не должны закрывать лицо и глаза.

### Дополнительные требования:
- Ретушь: Запрещено ретушировать лицо, убирать родинки, менять цвет глаз.
- Для детей: Требования те же, но разрешено естественное выражение лица (у малышей не требуется строгая улыбка).

### Соблюдение этих правил фото на визу значительно повышает ваши шансы на успешный прием документов с первого раза.

### Частые ошибки, которых следует избегать
- Неправильный фон (цветной, с текстурой, с тенями).
- Улыбка или иное выражение лица.
- Голова наклонена или повернута.
- Волосы, закрывающие часть лица.
- Блики на очках.
- Фотография слишком старая (старше полугода).
- Некачественная печать или бумага.

### Такие ошибки могут привести к отказу в приёме документов — и вам придётся пересдавать фото, теряя время и нервы.
### Совет: Планируете бизнес-поездку или оформляете визу для всей семьи? VISA VAM предлагает индивидуальные решения для каждого клиента. Мы сотрудничаем с туристическими компаниями и помогаем в оформлении виз для командировок, учебы, работы или воссоединения семьи в Европе, США и Великобритании. Наши специалисты с многолетним опытом позаботятся о том, чтобы каждый документ, включая вашу фотографию, был безупречен. Доверьтесь нашему опыту и получите визу без лишних забот — свяжитесь с нами!
### Фото на визу — это не просто формальность. Помните, что это важный элемент биометрической идентификации. Консульства и посольства строго проверяют соответствие фотографии международным стандартам. Несоответствие может привести к задержке рассмотрения заявления или даже к отказу.
### Требования к фото на визу в разные страны (США, Шенген)
### Хотя общие принципы схожи, всегда проверяйте специфические требования конкретной страны.
- Фото на Шенгенскую визу: Стандартные требования ICAO (35х45 мм, светлый фон, 70-80% лица).
- Фото на визу в США: Требования более строгие. Размер 2х2 дюйма (примерно 51х51 мм), голова должна находиться в центре кадра. Также необходимо предоставить цифровой файл фотографии (JPEG, высокого разрешения (не менее 600 dpi)).
### Подготовка правильной фотографии на визу  — это маленький, но важный шаг на пути к получению визы. Надеемся, наше руководство поможет вам избежать распространенных ошибок. А если вы цените свое время и нервы, команда VISA VAM всегда готова взять на себя все заботы по подготовке документов.
### Оставьте заявку на сайте — и отправляйтесь в путешествие без лишних хлопот!
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" },
            { "@type": "Thing", "name": "польская виза" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/foto-na-visy",
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
            "@id": "https://visavampro.by/poleznaya-informasia/foto-na-visy"
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
                        Фото на визу {year}: Полное руководство по требованиям к фотографиям
                    </h1>
                </div>
                <div className="w-full px-[7%] pt-[20px]">
                    <p className="text-orange-500">04.09.2025</p>
                    <p><b>Автор: </b>Елизавета Бокая</p>
                </div>
            </div>

            <div className="relative mt-[200px] md:mt-[320px]">
                {/* Banner Section */}
                <div className="w-full relative">
                    <Image
                        src="/art62.jpg"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/art62.jpg"
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
                            Независимо от того, нужна ли вам виза для туристического путешествия, 
                            деловой поездки или переезда, одним из первых и важнейших шагов в подготовке 
                            документов является правильная фотография. Несоответствие даже малейшим деталям 
                            может стать причиной для отказа в приеме документов, задержек и ненужного стресса. 
                            В этой статье мы подробно разберем актуальные <b>требования к фотографии на визу в {year} году</b>, 
                            чтобы вы могли с первого раза подготовить идеальный снимок.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Важность правильной фотографии на визу
                        </h2>
                        <p>
                            Консульства и визовые центры предъявляют строгие <b>требования к фотографиям на визу</b>. 
                            Это связано с использованием биометрических данных для идентификации личности. 
                            Ваше фото сканируется и вносится в базу данных, поэтому оно должно быть четким, 
                            актуальным и соответствовать международным стандартам. Любое отклонение от нормы 
                            может быть расценено как попытка скрыть свою личность или предоставить неверные данные.
                        </p>
                        <p>
                            <b>Какая фотография нужна на визу в 2025 году?</b> Хотя требования могут незначительно отличаться в зависимости 
                            от страны назначения, существует ряд общих правил, которых придерживается большинство консульств, 
                            включая <Link href="/shengenskie-vizy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">визу в страны Шенгенской зоны</Link>, <Link href="/viza-v-ssha" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">США</Link> и <Link href="/viza-v-velikobritaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Великобританию</Link>.
                        </p>
                        <p className={"italic text-[14px]"}>
                            💡 <span className={"font-bold"}> Совет:</span> <b>Не хотите вникать в десятки нюансов 
                            и рисковать отказом?</b> Доверьте подготовку документов профессионалам! 
                            <Link href="/" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Компания VISA VAM</Link> уже более 10 лет 
                            помогает своим клиентам получать 
                            визы без стресса. Мы знаем все актуальные требования, включая мельчайшие 
                            детали к фотографиям для любой страны. С нами 98% одобрения виз. 
                            <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>Свяжитесь с нами</a> для бесплатной 
                            консультации и забудьте о хлопотах! Мы обеспечим полное сопровождение на всех этапах.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">
                            Основные правила и требования к фото на визу
                        </h2>
                        <p>
                            Чтобы ваша фотография была принята, она должна соответствовать следующим простым ключевым параметрам:
                        </p>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Размер и пропорции:
                        </h4>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Стандартный размер:</b> Чаще всего требуется фотография размером 3,5 х 4,5 см (35х45 мм).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Лицо на фото:</b> Должно занимать от 70% до 80% всего изображения. Это примерно 32-36 мм от макушки до подбородка.
                                </span>
                            </li>
                        </ul>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Актуальность и качество:
                        </h4>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Свежесть:</b> Фотография должна быть сделана не ранее, чем за 6 месяцев до подачи документов.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Качество:</b> Снимок должен быть четким, с хорошей фокусировкой, без пикселизации, пятен, бликов и эффекта "красных глаз". Печать должна производиться на качественной матовой фотобумаге.
                                </span>
                            </li>
                        </ul>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Выражение лица и положение головы:
                        </h4>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Выражение:</b> Нейтральное, без улыбки, рот закрыт.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Взгляд:</b> Направлен прямо в камеру.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Положение головы:</b> Строго анфас, без наклонов и поворотов. Оба уха должны быть видны.
                                </span>
                            </li>
                        </ul>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Одежда и аксессуары:
                        </h4>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Одежда:</b> Рекомендуется повседневная одежда темных тонов, которая будет контрастировать 
                                    со светлым фоном. Избегайте униформы и слишком открытой одежды.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Очки:</b> Допускаются только по медицинским показаниям (при постоянном ношении). 
                                    Оправа не должна быть массивной и закрывать глаза. Стекла должны быть прозрачными, 
                                    без бликов. Фотографироваться в солнцезащитных очках запрещено.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Головные уборы:</b> Запрещены, за исключением случаев, когда их ношение предписано религиозными 
                                    убеждениями. При этом головной убор не должен скрывать овал лица, лоб, щеки и подбородок.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Волосы:</b> Не должны закрывать лицо и глаза.
                                </span>
                            </li>
                        </ul>
                        <h4 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Дополнительные требования:
                        </h4>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Ретушь:</b> Запрещено ретушировать лицо, убирать родинки, менять цвет глаз.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Для детей:</b> Требования те же, но разрешено естественное выражение лица 
                                    (у малышей не требуется строгая улыбка).
                                </span>
                            </li>
                        </ul>
                        <p>
                            Соблюдение этих правил фото на визу значительно повышает ваши шансы на успешный прием документов с первого раза.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Частые ошибки, которых следует избегать
                        </h3>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Неправильный фон (цветной, с текстурой, с тенями).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Улыбка или иное выражение лица.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Голова наклонена или повернута.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Волосы, закрывающие часть лица.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Волосы, закрывающие часть лица.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Блики на очках.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Фотография слишком старая (старше полугода).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Некачественная печать или бумага.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Такие ошибки могут привести к отказу в приёме документов — и вам придётся пересдавать фото, 
                            теряя время и нервы.
                        </p>
                        <p className={"italic text-[14px]"}>
                            💡 <span className={"font-bold"}> Совет:</span> Планируете бизнес-поездку или оформляете 
                            визу для всей семьи? <Link href="/" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">VISA VAM</Link> предлагает индивидуальные решения для каждого клиента. 
                            Мы сотрудничаем с туристическими компаниями и помогаем в оформлении виз для командировок, 
                            учебы, работы или воссоединения семьи в Европе, США и Великобритании. Наши специалисты 
                            с многолетним опытом позаботятся о том, чтобы каждый документ, включая вашу фотографию, 
                            был безупречен. <b>Доверьтесь нашему опыту и получите визу без лишних забот —</b> <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>свяжитесь с нами</a>!
                        </p>
                        <p>
                            <b>Фото на визу</b> — это не просто формальность. Помните, что это важный элемент биометрической 
                            идентификации. Консульства и посольства строго проверяют соответствие фотографии международным 
                            стандартам. Несоответствие может привести к задержке рассмотрения заявления или даже к отказу.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h3 className="text-[16px] md:text-[24px] sm:text-[20px] font-bold">
                            Требования к фото на визу в разные страны (США, Шенген)
                        </h3>
                        <p>
                            Хотя общие принципы схожи, всегда проверяйте специфические требования конкретной страны.
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Фото на</b> <Link href="/shengenskie-vizy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Шенгенскую визу</Link>: Стандартные требования 
                                    ICAO (35х45 мм, светлый фон, 70-80% лица).
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Фото на</b> <Link href="/viza-v-ssha" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">визу в США</Link>: Требования более строгие. 
                                    Размер 2х2 дюйма (примерно 51х51 мм), голова должна находиться в центре кадра. 
                                    Также необходимо предоставить цифровой файл фотографии (JPEG, высокого разрешения 
                                    (не менее 600 dpi)).
                                </span>
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

                <Faq5/>
                <div
                    className="w-full relative flex flex-col gap-24 mdd:gap-12 px-[7%] pt-32 mdd:pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold">Заключение</h2>
                        <p>
                            Подготовка <b>правильной фотографии на визу</b>  — это маленький, но важный шаг на пути к получению визы. 
                            Надеемся, наше руководство поможет вам избежать распространенных ошибок. А если вы цените свое время и 
                            нервы, команда <b>VISA VAM</b> всегда готова взять на себя все заботы по подготовке документов.
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