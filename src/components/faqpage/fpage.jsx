'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import { CommentModalProvider } from "@/components/modalcontextcomment";
import {countries} from "@/data/countries";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faqs, {faqData} from "@/components/faqpage/faqpage";
import NextArticleLink from "@/components/nextArtLink";
import dynamic from 'next/dynamic';
import { useCommentModal } from "../modalcontextcomment";

const year = new Date().getFullYear();

const RippleButton = ({ onClick, children }) => (
    <button
        onClick={onClick}
        className="w-full lg:!w-[255px] mx-[auto] bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
    >
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                    delay: i * 0.4,
                }}
            >
                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
            </motion.span>
        ))}
        {children}
    </button>
);

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
        <span className="font-semibold text-gray-900 cursor-default">Ответы на частые вопросы</span>
    </nav>
);

export default function FaqPage({breadcrumbs}) {
    const pathname = usePathname();
    const {openCommentModal} = useCommentModal();

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
        "headline": "Ответы на частые вопросы - VISA VAM",
        "alternativeHeadline": "Здесь вы найдете важную информацию о визовой процедуре и ответы на частые вопросы.",
        "datePublished": "2025-11-01T08:00:00+05:00",
        "dateModified": "2025-11-01T21:33:00+05:00",
        "articleBody": `
Планируете поездку за границу, но процесс получения визы кажется сложным и запутанным? Вы не одиноки. 
Мы собрали на этой странице ответы на самые распространенные вопросы, с которыми сталкиваются наши клиенты. Здесь вы найдете ключевую информацию о сроках, требованиях, типах виз и правилах въезда.
Наша цель — сделать для вас процесс подготовки документов максимально прозрачным и предсказуемым. 
Если Вы не нашли ответ на свой вопрос, свяжитесь с нами для получения индивидуальной консультации. Наша команда экспертов всегда готова помочь вам в решении любых визовых задач «под ключ», от сбора документов до подачи визового заявления.
`,
        "about": [
            { "@type": "Thing", "name": "рабочая виза" },
            { "@type": "Thing", "name": "виза для белорусов" },
            { "@type": "Thing", "name": "2025 год" },
            { "@type": "Thing", "name": "путешествия в Европу" },
            { "@type": "Thing", "name": "работа в Европе" }
        ],
        "url": "https://visavampro.by/poleznaya-informasia/faq",
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
            "@id": "https://visavampro.by/poleznaya-informasia/faq"
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
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black">
                        ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ 
                    </h1>
                </div>
            </div>

            <div className="relative mt-[100px] md:mt-[160px]">
                {/* Banner Section */}
                {/* <div className="w-full relative">
                    <Image
                        src="/topic10.webp"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover object-[50%_20%] px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/topic10.webp"
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
                            Планируете поездку за границу, но процесс получения визы кажется сложным и запутанным? Вы не одиноки. 
                        </p>
                        <p>
                            Мы собрали на этой странице ответы на самые распространенные вопросы, 
                            с которыми сталкиваются наши клиенты. Здесь вы найдете <u>ключевую информацию о сроках, 
                            требованиях, типах виз и правилах въезда</u>.
                        </p>
                        <p>
                            Наша цель — сделать для вас процесс подготовки документов максимально прозрачным и предсказуемым. 
                        </p>
                        <p>
                            Если Вы не нашли ответ на свой вопрос, <u>свяжитесь с нами для получения индивидуальной консультации</u>. 
                            Наша команда экспертов всегда готова помочь вам в решении любых визовых задач «под ключ», 
                            от сбора документов до подачи визового заявления.
                        </p>
                    </div>

                    <CommentModalProvider>
                        <RippleButton onClick={openCommentModal}>
                            Задать вопрос
                        </RippleButton>
                    </CommentModalProvider>
                    {/* КНОПКУ СЮДА */}

                    <Faqs/>
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

                <Contacts/>
            </div>
        </div>
    );
}