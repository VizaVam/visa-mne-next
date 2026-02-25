'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/data/countries";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";
import Breadcrumbs from "@/components/Breadcrumbs";
import Discount from "@/components/discount";
import {faqData} from "@/components/fag";
import VizaCoop from "@/components/VizaCoop";
import React, { memo, Suspense }  from "react";
import dynamic from "next/dynamic";
import {useInView} from 'react-intersection-observer';
import Photos from "@/components/photos";
import PhotosMob from "@/components/photosmob";
import PolInfoTr from "./pol-info3";

const Slider = dynamic(() => import('@/components/slider'), {
    loading: () => <div className="px-[7%] py-10 text-center">Загрузка слайдера...</div>,
});

// const PhoneForm = dynamic(() => import('@/components/newModal'), {
//     ssr: false,
//     loading: () => <div className="px-[7%] py-6 text-center">Загрузка формы...</div>,
// });

const AdvantageItem = memo(({ value, description }) => (
    <li className="flex items-center text-lg mb-[15px]">
        <Image
            width={24}
            height={24}
            src="/check.svg"
            alt="Преимущество работы с VisaVam.by"
            className="h-5 w-5 mr-2"
            loading="lazy"
        />
        <div>
            <p className="font-[500] text-[20px] mdd:leading-none">{value}</p>
            {description && (
                <p className="text-[16px] text-[#808080] mdd:leading-none">
                    {description}
                </p>
            )}
        </div>
    </li>
));



const RippleButton = ({onClick, children}) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
    >
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{scale: 0, opacity: 1.5}}
                animate={{scale: 4, opacity: 0}}
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
    <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
        <Link href="/"
              className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
            Главная
        </Link>
        <Image src="/nav-icon.png" alt="" width={8} height={8} className="w-2"/>
        {pathname === "/o-kompanii" ? (
            <span className="font-semibold text-gray-900 cursor-default">О компании</span>
        ) : (
            <Link href="/o-kompanii"
                  className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                О компании
            </Link>
        )}
    </nav>
);

const CountryCard = ({country}) => (
    <Link href={`/shengenskie-vizy/${country.url}`}>
        <div
            className="bg-white border border-[#ECECEC] rounded-lg lg:rounded-[4px] overflow-hidden shadow-sm cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <Image
                src={country.img}
                alt={country.name}
                width={300}
                height={200}
                className="w-full object-cover"
            />
            <div className="lg:p-8 md:p-6 sm:p-4 mdd:py-4 mdd:pl-1 mdd:pr-1">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex sm:gap-2 mdd:gap-0.5 items-center">
                        <Image src={country.svg} alt={country.name} width={24} height={24}/>
                        <p className="font-medium mdd:text-[14px] sm:text-lg md:text-xl lg:text-xl">
                            {country.name}
                        </p>
                    </div>
                    <Image
                        src="/Line 5.png"
                        alt=""
                        width={24}
                        height={24}
                        className="lg:w-6 md:w-6 sm:w-6 mdd:hidden"
                    />
                </div>
            </div>
        </div>
    </Link>
);

const LazySection = ({children, fallback = "Загрузка...", rootMargin = "100px"}) => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        rootMargin,
    });

    return (
        <div ref={ref}>
            {inView ? children : <div className="py-10 text-center">{fallback}</div>}
        </div>
    );
};

export default function OnasPage({breadcrumbs}) {
    const {openModal} = useModal();
    const pathname = usePathname();
    const countryOrder = {
        "viza-v-polshu": 1,
        "viza-v-sloveniu": 2,
        "viza-v-germaniyu": 3,
        "viza-v-ispaniyu": 4
    };

    const recommendedCountries = Object.keys(countryOrder)
        .map(countryKey => countries.find(c => c.url.toLowerCase() === countryKey))
        .filter(Boolean);

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
            "@type": "Question",
            "name": `ВОПРОС: ${faq.question}`,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags for plain text
            }
        }))
    };

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            {/* Header Section */}
            <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                <div
                    className="mdd:relative mdd:text-xs lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname}/>
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black">
                        О КОМПАНИИ
                    </h1>
                </div>

                <div className="w-full lg:flex items-center mt-[20%] mdd:mt-[10%] lg:mt-0 relative z-5">
                    <Image
                        src="/onas.webp"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={850}
                        height={827}
                        className={`relative lg:top-[120px] mb-[105px] mt-[80px] sm:top-0 lg:w-[50%] -z-50 mdd:hidden lg:translate-y-[45px] ml-[auto] mr-[auto]`}
                        unoptimized
                    />
                    <Image
                        src="/onas.webp"
                        alt="VisaVam услуги"
                        width={600}
                        height={600}
                        className="relative mt-[120px] lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden scale-110"
                        priority
                    />
                </div>
                <div className="hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[25%]">
                    <RippleButton onClick={openModal}>
                        Получить консультацию
                    </RippleButton>
                </div>
            </div>

            <Discount/>

            <ul className={`
                            mt-[5px] ml-[25px] mr-[25px] p-[25px] border border-[#ECECEC] 
                            lg:absolute top-1/2 lg:right-[7%] 
                            lg:transform lg:-translate-y-3 lg:space-y-4 text-left lg:p-4
                            rounded-md pl-[7%] lg:ml-[7%] mb-[20px] mr-auto lg:m-0 translate-y-[-5vw] lg:border-none 1024m:ml-[7%] 1024m:mr-[7%] dr:!mr-[0px]`
            }>
                    <AdvantageItem value="Более 10 лет" description="на рынке" />
                    <AdvantageItem value="98%" description="одобрения виз" />
                    <AdvantageItem value="20 000+" description="успешных кейсов" />
                    <AdvantageItem value="10 000+" description="довольных клиентов" />
                    <AdvantageItem value="Персональный подход" />
            </ul>

            {/* Banner Section */}

            <div
                className={`w-full`}>
                
                {/* Lazy Sections */}
                <LazySection>
                    <Discount />
                </LazySection>

                <LazySection>
                    <Slider />
                </LazySection>
            </div>

            {/* About Text Section */}
            <div className="w-full relative flex lg:flex-row gap-6 px-[7%] pt-16 mdd:pt-10 text-[16px] mdd:text-[14px]">
                <div className="w-[50%] mdd:w-full">
                    <p>
                        <b><u>Компания Visa Vam — Ваш надёжный партнёр в визовых вопросах уже более 10 лет.</u></b>
                    </p>
                    <br/>
                    <p>
                        Мы помогаем клиентам оформить визы в разные страны мира, подбирая индивидуальные 
                        решения для каждой ситуации. Работаем со всеми категориями граждан. <br/><br/><b>Наша цель</b> — 
                        сделать процесс получения визы максимально простым и комфортным. Мы бесплатно 
                        консультируем по возможностям срочного оформления, а также по получению шенгенской 
                        визы в «чистый» паспорт.
                    </p>
                    <PhotosMob/>
                    
                    <p className="pt-16 mdd:pt-10"><b>Наши услуги:</b></p>

                    <ul className="ml-3 flex flex-col gap-2 list-disc pl-3 pt-6 mdd:pt-3 lg:mb-6">
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Оформление туристических, бизнес- и национальных виз в Европу, США, Великобританию и другие страны
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Визы для переезда в Европу на учёбу, работу или заключения брака
                            </span>
                        </li>
                        {/* <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Страхование от отказа в визе
                            </span>
                        </li> */}
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Переводы документов на английский (и иные) языки
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Оформление медицинских страховок
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Заполнение визовых анкет
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Оформление туристических ваучеров
                            </span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4" style={{ transform: 'translate(0px, 4px)' }}/>
                            <span>
                                Консультации по визовым вопросам
                            </span>
                        </li>
                    </ul>
                </div>
                <Photos/>
            </div>

            <LazySection>
                <Contacts />
            </LazySection>

            {/* Countries Section */}
            <div className="flex flex-col gap-4 pt-32 mdd:pt-20 px-[7%]">
                <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-16 mdd:mb-4">
                    Оформление документов для подачи на визы
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mdd:gap-2">
                    {recommendedCountries.map((country, index) => (
                        <CountryCard key={index} country={country}/>
                    ))}
                </div>

                <div className="sm:mt-6 text-center">
                    <Link href="/shengenskie-vizy">
                        <button
                            className="bg-customBlue sm:w-max mdd:w-full hover:bg-blue-600 text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                            Еще больше стран
                        </button>
                    </Link>
                </div>
            </div>

            <div className="px-[7%] pt-32 mdd:pt-20">
                <VizaCoop/>
            </div>

            {/* Inject FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}}
            />

            <Reviews/>
            <PolInfoTr/>
            <Fag/>
            <Contacts/>
        </div>
    );
}