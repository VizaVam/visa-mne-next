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
        <Image src="/nav-icon.png" alt=">" width={8} height={8} className="w-2"/>
        <Link
            href="/poleznaya-informasia"
            className={`text-orange-500 hover:underline ${pathname === "/poleznaya-informasia" ? "font-semibold text-gray-900 pointer-events-none w-full active:scale-95 transition-transform duration-150 ease-in-out" : ""}`}
        >
            Полезная информация
        </Link>
        <Image src="/nav-icon.png" alt="" width={8} height={8} className="w-2"/>
        {pathname === "/kak-oformit-vizu-v-polshu-dlya-belarusov" ? (
            <span className="font-semibold text-gray-900 cursor-default">Как оформить визу в Польшу для белорусов</span>
        ) : (
            <Link href="/kak-oformit-vizu-v-polshu-dlya-belarusov"
                  className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                Как оформить визу в Польшу для белорусов
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

            <div
                className="w-full relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] flex flex-col sm:flex-col justify-between">
                <div
                    className="w-full text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname}/>
                    <h1 className="dm:w-full md:w-[70%] mdd:text-[28px] lg:text-[40px] md:text-[40px] sm:text-[36px] font-medium text-black">
                        Как оформить визу в Польшу для белорусов: документы, стоимость и сроки
                    </h1>
                </div>
            </div>

            <div className="relative mt-[200px] md:mt-[320px]">
                {/* Banner Section */}
                <div className="w-full relative">
                    <Image
                        src="/poland-banner.png"
                        alt="О компании VisaVam"
                        width={1600}
                        height={1000}
                        priority={true}
                        className="w-full h-96 object-cover px-0 lg:px-[7%] md:px-[7%] mdd:hidden"
                    />
                    <Image
                        src="/poland-banner.png"
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
                <div className="w-full relative flex flex-col gap-12 px-[7%] pt-20 text-[16px] mdd:text-[14px]">
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <p>
                            Если вы планируете поездку в Польшу, то вам обязательно понадобится шенгенская виза, т.к.
                            Польша — одна из стран Шенгенского соглашения. Но не волнуйтесь: процесс получения визы
                            достаточно понятный, если знать все нюансы.
                        </p>
                        <p>В этой статье мы подробно расскажем:</p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                какие документы нужны для визы в Польшу для белорусов;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                где подавать заявление;
                            </li>
                        </ul>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[22px] font-medium">Кто может получить визу в Польшу?</h2>
                        <div className="overflow-x-auto">
                            <table className="w-[800px] border-collapse">
                                <colgroup>
                                    <col className="w-1/2" />
                                    <col className="w-1/2" />
                                </colgroup>
                                <thead>
                                <tr>
                                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/2">Тип визы</th>
                                    <th className="border border-[#CEE2FA] bg-[#F0F6FF] px-4 py-3 text-left font-semibold text-gray-700 w-1/2">Цель поездки</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Туристическая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Отдых, экскурсии, путешествие</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Гостевая</td>
                                    <td className="border border-[#CEE2FA] px-4 py-3 text-gray-700">Посещение друзей или родственников</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Выбор типа визы влияет на список необходимых документов и условия подачи.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[22px] font-medium">Полный список документов на визу в Польшу</h2>
                        <p>
                            Чтобы ваше заявление приняли без задержек, соберите полный пакет документов заранее. Вот что потребуется от большинства заявителей:
                        </p>
                        <p>В этой статье мы подробно расскажем:</p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Паспорт, действительный минимум 3 месяца после окончания срока действия визы;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Анкета на визу в Польшу – заполненная в электронном виде или уже распечатанная;
                            </li>
                            <li className="flex flex-col gap-2">
                                <div className="flex gap-2 items-start">
                                    <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4 mt-1 flex-shrink-0"/>
                                    <span>Подтверждение цели поездки:</span>
                                </div>
                                <ul className="ml-6 flex flex-col gap-2 list-disc pl-4">
                                    <li className="pl-1">
                                        туристический ваучер или оплаченная бронь отеля,
                                    </li>
                                    <li className="pl-1">
                                        официальное приглашение от польской стороны,
                                    </li>
                                    <li className="pl-1">
                                        справка с места работы / учебы;
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <p className={"text-[#595959]"}>Для детей дополнительно: свидетельство о рождении, согласие на выезд от родителей (при необходимости), копия студенческого билета, спонсорство и копии паспортных данных спонсора.</p>
                    </div>
                    <div className="w-[80%] mdd:w-full flex flex-col gap-4">
                        <h2 className="text-[22px] font-medium">Где и как подать документы на визу в Польшу?</h2>
                        <p>
                            Подача документов на шенгенскую визу в Польшу возможна в следующих местах:
                        </p>
                        <ul className="text-black flex flex-col gap-2">
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                В Консульстве в определенных случаях;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Визовые центры VFS Global - в Минске, Бресте, Гродно и других крупных городах;
                            </li>
                            <li className="flex gap-2 items-center">
                                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                                Через <a href="/" className={"underline"}>визовые агентства.</a>
                            </li>
                        </ul>
                        <p>Необходимо обязательно заранее записаться на подачу визы в Польшу через официальный сайт визового центра, либо воспользоваться нашими услугами.</p>
                    </div>
                </div>

                <Contacts/>
            </div>
        </div>
    );
}