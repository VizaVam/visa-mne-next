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
        <span className="font-semibold text-gray-900 cursor-default">Почему могут отказать в визе: главные причины</span>
    </nav>
);

export default function Povv({breadcrumbs}) {
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
        "datePublished": "2025-11-01T08:00:00+05:00",
        "dateModified": "2025-11-01T21:33:00+05:00",
        "articleBody": `
"Получение отказа в визе всегда неприятно, но большинство причин можно предугадать и предотвратить. Посольства принимают решение на основе предоставленных вами данных, и любая неясность трактуется не в пользу заявителя. Понимание этих причин помогает избежать ошибок при следующей подаче.
Основные причины для отказа:
1. Неясная цель поездки. Это самая частая причина. Она означает, что консул не увидел логики в вашей поездке. 
Примеры: Бронь отеля в одном городе, а билеты на концерт — в другом, без пояснения, как вы туда доберетесь. Слишком дешевый хостел при заявленной деловой поездке на важную конференцию. Например, вы приложили бронь отеля, а консульство позвонило в отель и выяснило, что бронь была отменена сразу после распечатки.
Противоречивая информация в анкете и в приложенных документах.
2. Недостаточные финансовые средства. Вы должны доказать, что у вас есть достаточно денег для покрытия расходов на поездку и возвращение домой. Отсутствие выписки с банковского счета или слишком маленькая сумма на нем — частая причина отказа, а также едостаточная сумма на счете, отсутствие движения по счету или пополнение крупной суммой прямо перед подачей. Консул должен видеть, что это ваши реальные, а не заемные средства.
3. Сомнения в намерении вернуться. Отсутствие прочных связей с родиной (отсутствие постоянной официальной работы или низкая зарплата; отсутствие семьи, детей, недвижимости в собственности; молодой возраст и чистый паспорт (нет визовой истории)) может вызвать подозрения, что вы планируете нелегально остаться в стране. 
4. Предоставление ложной информации. Любые поддельные документы или недостоверные сведения гарантированно ведут к отказу и могут повлечь за собой запрет на въезд в Шенгенскую зону. Это касается также и документов с оторванными страницами, истекшим сроком действия или без необходимых пустых страниц.
5. Нарушения визового режима в прошлом. Если ранее вы превышали срок пребывания в Шенгенской зоне или нарушали законы, это будет учтено при рассмотрении нового заявления. Например, вы уже находились на территории государств-членов 90 дней в течение текущего 180-дневного периода.

Что делать после отказа?
* Проанализировать причину. Не подавайте сразу те же документы. Нужно устранить недостаток, на который указал консул.
* Подать апелляцию. Это формальная процедура обжалования решения. Шансы на успех невелики, если только не была допущена явная ошибка со стороны консульства.
* Подать новое заявление. Это самый частый путь. Необходимо собрать новый, усиленный пакет документов, возможно, приложив сопроводительное письмо с объяснениями.

Наше визовое агентство VISA VAM специализируется на анализе отказов и разработке стратегии для успешной повторной подачи."
`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/prichiny-otkaza-v-vize",
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
            "@id": "https://visavampro.by/poleznaya-informasia/prichiny-otkaza-v-vize"
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
                        Правило первого въезда и основной страны в Шенгене
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
                            <b>Получение отказа в визе</b> всегда неприятно, но большинство 
                            причин можно предугадать и предотвратить. Посольства принимают 
                            решение на основе предоставленных вами данных, и любая неясность 
                            трактуется не в пользу заявителя. Понимание этих причин помогает 
                            избежать ошибок при следующей подаче.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Основные причины для отказа:</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Неясная цель поездки.</b> Это самая частая причина. Она означает, что консул не увидел логики в вашей поездке. 
                                    <p>
                                        <b>Примеры:</b> Бронь отеля в одном городе, а билеты на концерт — в другом, без пояснения, как вы туда доберетесь. Слишком дешевый хостел при заявленной деловой поездке на важную конференцию. Например, вы приложили бронь отеля, а консульство позвонило в отель и выяснило, что бронь была отменена сразу после распечатки.
                                    </p>
                                    <p>Противоречивая информация в анкете и в приложенных документах.</p>
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Недостаточные финансовые средства.</b> Вы должны доказать, что у вас есть достаточно денег для покрытия расходов на поездку и возвращение домой. Отсутствие выписки с банковского счета или слишком маленькая сумма на нем — частая причина отказа, а также едостаточная сумма на счете, отсутствие движения по счету или пополнение крупной суммой прямо перед подачей. Консул должен видеть, что это ваши реальные, а не заемные средства.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Сомнения в намерении вернуться.</b> Отсутствие прочных связей с родиной (отсутствие постоянной официальной работы или низкая зарплата; отсутствие семьи, детей, недвижимости в собственности; молодой возраст и чистый паспорт (нет визовой истории)) может вызвать подозрения, что вы планируете нелегально остаться в стране. 
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Предоставление ложной информации.</b> Любые поддельные документы или недостоверные сведения гарантированно ведут к отказу и могут повлечь за собой запрет на въезд в Шенгенскую зону. Это касается также и документов с оторванными страницами, истекшим сроком действия или без необходимых пустых страниц.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Нарушения визового режима в прошлом.</b> Если ранее вы превышали срок пребывания в Шенгенской зоне или нарушали законы, это будет учтено при рассмотрении нового заявления. Например, вы уже находились на территории государств-членов 90 дней в течение текущего 180-дневного периода.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Что делать после отказа?</b>
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Проанализировать причину. Не подавайте сразу те же документы. Нужно устранить недостаток, на который указал консул.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Подать апелляцию. Это формальная процедура обжалования решения. Шансы на успех невелики, если только не была допущена явная ошибка со стороны консульства.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Подать новое заявление. Это самый частый путь. Необходимо собрать новый, усиленный пакет документов, возможно, приложив сопроводительное письмо с объяснениями.
                                </span>
                            </li>
                        </ul>
                        <p>
                            Наше <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>визовое агентство VISA VAM </a> специализируется на анализе отказов и разработке стратегии для успешной повторной подачи.
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