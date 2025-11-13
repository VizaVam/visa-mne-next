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
        <span className="font-semibold text-gray-900 cursor-default">Финансовые гарантии для шенгенской визы</span>
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
        "headline": "Сколько денег нужно на счету для шенгенской визы | Финансовые гарантии",
        "alternativeHeadline": "Подробный расчет необходимой суммы на банковском счету для визы. Официальные требования разных стран, как влияют оплаченные отели и альтернативные доказательства.",
        "datePublished": "2025-09-01T08:00:00+05:00",
        "dateModified": "2025-09-01T21:33:00+05:00",
        "articleBody": `
"Подтверждение наличия достаточных финансовых средств является обязательным условием для получения шенгенской визы. Консул должен быть уверен, что вы сможете покрыть все расходы во время поездки и не станете обузой для социальной системы страны.

Как определяется необходимая сумма?
Не существует единой для всех суммы. Она рассчитывается индивидуально и зависит от трех основных факторов:
1. Страна назначения. Каждая страна устанавливает свои референтные суммы на день пребывания.
2. Продолжительность поездки. Чем дольше поездка, тем больше денег должно быть на счету.
3. Тип проживания. Если у вас уже полностью оплачены отели, требуемая сумма на счете может быть меньше.

Ориентировочные суммы на день пребывания (могут меняться):
* Германия: ~€45-50/день
* Франция: ~€65/день (если отель не оплачен), ~€120/день (если нет брони отеля)
* Италия: ~€50/день
* Испания: ~€108/день (но не менее €972 на всю поездку, даже если она короче)
* Чехия: ~€60/день
* Швейцария: ~100 CHF (~€105)/день

Пример расчета:
Вы едете во Францию на 10 дней, отель не оплачен.
10 дней * €65/день = €650.
К этой сумме нужно мысленно прибавить стоимость авиабилетов (например, €300) и проживания (например, €700). Итоговая сумма на счете должна быть не менее €1650, а лучше с запасом — €2000-2500.

Что важно показать в выписке из банка?
1. Не только остаток. Консула интересует не только финальная сумма, но и движение средств за последние 3-6 месяцев. Это показывает стабильность вашего дохода.
2. Избегайте ""заброса"" денег. Если на пустой счет за день до получения выписки положить крупную сумму, это вызовет подозрения. Консул может подумать, что деньги вам одолжили специально для справки.

Альтернативные финансовые гарантии.
1. Спонсорское письмо. Если вашу поездку оплачивает другой человек (например, супруг или родитель), он предоставляет письмо, свою выписку из банка и справку о доходах.
2. Дорожные чеки (Travel Cheques). Устаревший, но все еще принимаемый иногда некоторыми консульствами способ.

Правильно подготовленные финансовые документы — это 50% успеха в получении визы.
Запутались в требованиях к документам или боитесь допустить ошибку? Визовое агентство VISA VAM поможет избежать типичных и скрытых ошибок, которые часто становятся причиной отказов. Доверьтесь экспертам — и получите визу без лишнего стресса."`,
        "about": [
            { "@type": "Thing", "name": "шенгенская виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/skolko-deneg-na-schetu-dlya-vizy",
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
            "@id": "https://visavampro.by/poleznaya-informasia/skolko-deneg-na-schetu-dlya-vizy"
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
                        Финансовые гарантии для шенгенской визы
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
                            Подтверждение наличия достаточных финансовых средств является 
                            обязательным условием для получения шенгенской визы. Консул 
                            должен быть уверен, что вы сможете покрыть все расходы во время 
                            поездки и не станете обузой для социальной системы страны.
                        </p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Как определяется необходимая сумма?</b></p>
                        <p>Не существует единой для всех суммы. Она рассчитывается индивидуально и зависит от трех основных факторов:</p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Страна назначения. Каждая страна устанавливает свои референтные суммы на день пребывания.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Продолжительность поездки. Чем дольше поездка, тем больше денег должно быть на счету.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Тип проживания. Если у вас уже полностью оплачены отели, требуемая сумма на счете может быть меньше.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Ориенировочные суммы на день пребывания (могут меняться):</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-germaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Германия</Link>: ~€45-50/день
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-vo-francziyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Франция</Link>: ~€65/день (если отель не оплачен), ~€120/день (если нет брони отеля)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-italiyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Италия</Link>: ~€50/день
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-ispaniyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Испания</Link>: ~€108/день (но не менее €972 на всю поездку, даже если она короче)
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <Link href="/shengenskie-vizy/viza-v-chehiyu" 
                                    className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                                    target="_blank" rel="noopener noreferrer">Чехия</Link>: ~€60/день
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Швейцария: ~100 CHF (~€105)/день
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Пример расчета:</b>
                        </p>
                        <p>Вы едете во Францию на 10 дней, отель не оплачен.</p>
                        <p>10 дней * €65/день = €650.</p>
                        <p>К этой сумме нужно мысленно прибавить стоимость авиабилетов (например, €300) и проживания (например, €700). Итоговая сумма на счете должна быть не менее €1650, а лучше с запасом — €2000-2500.</p>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p><b>Что важно показать в выписке из банка?</b></p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Не только остаток.</b> Консула интересует не только финальная сумма, но и движение средств за последние 3-6 месяцев. Это показывает стабильность вашего дохода.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    <b>Избегайте "заброса" денег.</b> Если на пустой счет за день до получения выписки положить крупную сумму, это вызовет подозрения. Консул может подумать, что деньги вам одолжили специально для справки.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Альтернативные финансовые гарантии.</b>
                        </p>
                        <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Спонсорское письмо. Если вашу поездку оплачивает другой человек (например, супруг или родитель), он предоставляет письмо, свою выписку из банка и справку о доходах.
                                </span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                                <span>
                                    Дорожные чеки (Travel Cheques). Устаревший, но все еще принимаемый иногда некоторыми консульствами способ.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            <b>Правильно подготовленные финансовые документы</b> — это 50% успеха в получении визы.
                        </p>
                        <p>
                            Запутались в требованиях к документам или боитесь допустить ошибку? <a className="underline cursor-pointer hover:font-normal font-medium text-blue-500" 
                            target="_blank" rel="noopener noreferrer" onClick={openModal}>Визовое агентство VISA VAM</a> поможет избежать типичных и скрытых ошибок, которые часто становятся причиной отказов. Доверьтесь экспертам — и получите визу без лишнего стресса.
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