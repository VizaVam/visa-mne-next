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
        <span className="font-semibold text-gray-900 cursor-default">Актуальный список стран Шенгенской зоны</span>
    </nav>
);

export default function Ksvs({breadcrumbs}) {
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
        "headline": "Список стран Шенгенской зоны в 2025 году | Актуальный состав",
        "alternativeHeadline": "Полный и актуальный на август 2025 года список стран Шенгенского соглашения. Узнайте, какие страны ЕС не входят в Шенген, и наоборот. Статус Болгарии, Румынии и Кипра.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
"Шенгенская зона — это уникальное пространство, позволяющее свободно путешествовать между странами-участницами без прохождения пограничного контроля. Важно не путать ее с Европейским союзом, так как их составы не совпадают.
На август 2025 года в состав Шенгенской зоны входят 29 стран, в которые беларусом можно получить Шенген визу:
Страны-члены ЕС, входящие в Шенген (25 стран):
1. Австрия
2. Бельгия
3. Болгария (частично, отменен контроль в воздушных и морских портах)
4. Венгрия
5. Германия
6. Греция
7. Дания (без Гренландии и Фарерских островов)
8. Испания
9. Италия
10. Латвия
11. Литва
12. Люксембург
13. Мальта
14. Нидерланды
15. Польша
16. Португалия
17. Румыния (частично, отменен контроль в воздушных и морских портах)
18. Словакия
19. Словения
20. Финляндия
21. Франция
22. Хорватия
23. Чехия
24. Швеция
25. Эстония

Страны, не входящие в ЕС, но участвующие в Шенгенском соглашении (4 страны):
1. Исландия
2. Лихтенштейн
3. Норвегия
4. Швейцария

Важные исключения и особые случаи:

Болгария и Румыния: С 31 марта 2024 года являются частью Шенгена, но пока только для воздушных и морских границ. Пограничный контроль на сухопутных границах этих стран пока сохраняется. Однако визы, выданные ими, являются шенгенскими.

Кипр и Ирландия: Являются членами ЕС, но не входят в Шенгенскую зону. Для их посещения нужны отдельные национальные визы.

Микрогосударства: Монако, Сан-Марино и Ватикан не являются членами Шенгенского соглашения формально, но у них нет пограничного контроля с соседними странами (Францией и Италией), поэтому они являются де-факто частью Шенгенской зоны. Въехать в них можно с действующей шенгенской визой.

Планируете срочную поездку? Мы работаем с ускоренными сроками и знаем, как оперативно подготовить пакет документов, соответствующий самым строгим требованиям. С VISA VAM вы успеете туда, куда нужно — вовремя и без проволочек."
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/kakie-strany-vhodyat-v-shengen",
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
            "@id": "https://visavampro.by/poleznaya-informasia/kakie-strany-vhodyat-v-shengen"
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
                        Актуальный список стран Шенгенской зоны
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
                            <b>Шенгенская зона</b> — это уникальное пространство, 
                            позволяющее свободно путешествовать между странами-участницами 
                            без прохождения пограничного контроля. Важно не путать ее с 
                            Европейским союзом, так как их составы не совпадают.
                        </p>
                        <p>
                            На август 2025 года в состав Шенгенской зоны 
                            входят 29 стран, в которые беларусом можно получить Шенген визу:
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>Страны-члены ЕС, входящие в Шенген (25 стран):</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-avstriyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Австрия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Бельгия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-bolgariyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Болгария</Link> (частично, отменен контроль в воздушных и морских портах)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-vengriyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Венгрия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-germaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Германия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-grecziyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Греция</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Дания (без Гренландии и Фарерских островов)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-ispaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Испания</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-italiyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Италия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Латвия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Литва
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Люксембург
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Мальта
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-niderlandy" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Нидерланды</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-polshu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Польша</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Португалия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-rumyniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Румыния</Link> (частично, отменен контроль в воздушных и морских портах)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Словакия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-sloveniu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Словения</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Финляндия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-vo-francziyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Франция</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-horvatiu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Хорватия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-chehiyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Чехия</Link>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Швеция
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Эстония
                                </span>
                            </li>
                        </ul>
                    </div>





                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Страны, не входящие в ЕС, но участвующие в Шенгенском соглашении (4 страны):</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Исландия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Лихтенштейн
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Норвегия
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Швейцария
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Важные исключения и особые случаи:</b>
                        </p>
                        <p><b>Болгария и Румыния:</b> С 31 марта 2024 года являются частью Шенгена, но пока только для воздушных и морских границ. Пограничный контроль на сухопутных границах этих стран пока сохраняется. Однако визы, выданные ими, являются шенгенскими.</p>
                        <p><b>Кипр и Ирландия:</b> Являются членами ЕС, но не входят в Шенгенскую зону. Для их посещения нужны отдельные национальные визы.</p>
                        <p><b>Микрогосударства:</b> Монако, Сан-Марино и Ватикан не являются членами Шенгенского соглашения формально, но у них нет пограничного контроля с соседними странами (Францией и Италией), поэтому они являются де-факто частью Шенгенской зоны. Въехать в них можно с действующей шенгенской визой.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Планируете срочную поездку?</b> Мы работаем с ускоренными сроками и знаем, как оперативно подготовить пакет документов, соответствующий самым строгим требованиям. С <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>VISA VAM </a> вы успеете туда, куда нужно — вовремя и без проволочек.
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