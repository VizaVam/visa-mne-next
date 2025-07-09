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

const RippleButton = ({onClick, children}) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
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
        {pathname === "/o-nas" ? (
            <span className="font-semibold text-gray-900 cursor-default">О нас</span>
        ) : (
            <Link href="/o-nas"
                  className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                О нас
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

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            {/* Header Section */}
            <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                <div
                    className="mdd:relative mdd:text-xs lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname}/>
                    <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black">
                        О НАС
                    </h1>
                </div>

                <div className="w-full lg:flex items-center mt-[20%] mdd:mt-[10%] lg:mt-0 relative z-5">
                    <Image
                        src="/visa-banner-new.png"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={1000}
                        height={1000}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 mdd:hidden"
                    />
                    <Image
                        src="/onas114.jpg"
                        alt="VisaVam услуги"
                        width={600}
                        height={600}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"
                    />
                </div>

                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[25%]">
                    <RippleButton onClick={openModal}>
                        Получить консультацию
                    </RippleButton>
                </div>
            </div>

            <Discount/>

            {/* Banner Section */}
            <div className="w-full relative ht:bottom-[30px] xl:bottom-[40px] lg:bottom-[60px]">
                <Image
                    src="/onaspc.JPG"
                    alt="О компании VisaVam"
                    width={1600}
                    height={1000}
                    priority={true}
                    className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                />
                <Image
                    src="/onasmobile.JPG"
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
            <div className="w-full relative flex flex-col gap-6 px-[7%] pt-16 mdd:pt-10 text-[16px] mdd:text-[14px]">
                <div className="w-[80%] mdd:w-full">
                    <p>
                        <strong>Visa Vam более 10 лет</strong> помогает клиентам в оформлении виз по всему миру.<br/>
                        Опыт наших специалистов позволяет находить индивидуальные решения для
                        каждого.<br/>
                        Мы оформляем туристические, бизнес- и национальные визы в Европу, США,
                        Великобританию и другие страны.<br/>
                        Среди наших клиентов – как частные путешественники, так и компании,
                        отправляющие сотрудников в командировки.<br/>
                        Также мы помогаем с визами для переезда в Европу на учебу, работу, брак или
                        воссоединение семьи.<br/>
                    </p>
                </div>
            </div>

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
                            className="bg-customBlue sm:w-max mdd:w-full hover:bg-blue-600 text-white py-3 px-8 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] text-[16px] active:scale-95 transition-transform duration-150 ease-in-out">
                            Еще больше стран
                        </button>
                    </Link>
                </div>
            </div>

            <Reviews/>
            <Fag/>
            <Contacts/>
        </div>
    );
}