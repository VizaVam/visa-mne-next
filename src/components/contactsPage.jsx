'use client'

import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useModal} from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contacts from "@/components/contacts";
import Discount from "@/components/discount";

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

const ContactInfoItem = ({icon, alt, children}) => (
    <div className="flex gap-4 items-start">
        <Image
            src={icon}
            alt={alt}
            width={24}
            height={24}
            className="w-6 h-6"
        />
        <div className="flex-1">
            {children}
        </div>
    </div>
);

const ContactPhone = () => (
    <ContactInfoItem icon="/contacts-call-icon.png" alt="Phone">
        <div className="flex flex-col">
            <a href="tel:+375296800620" className="text-[18px] mdd:text-[14px] underline hover:font-normal font-medium text-blue-500">
                +375296800620
            </a>
            <p className="font-normal text-[14px] mdd:text-[12px] text-[#808080]">
                Мобильный, Вайбер, Телеграм, Ватсап
            </p>
        </div>
    </ContactInfoItem>
);

const ContactEmail = () => (
    <ContactInfoItem icon="/contacts-email-icon.png" alt="Email">
        <a href="mailto:info@visavam.by" className="text-[18px] mdd:text-[14px] underline hover:font-normal font-medium text-blue-500">
            info@visavam.by
        </a>
    </ContactInfoItem>
);

const ContactAddress = () => (
    <ContactInfoItem icon="/contacts-location-icon.png" alt="Location">
        <div className="flex flex-col gap-4">
            <p className="text-[18px] mdd:text-[14px] font-medium">
                Минск, пр. Победителей 17 офис 1204 (метро Немига)
            </p>
            <a
                href="https://www.google.com/maps/place/Visa+Vam/@53.910344,27.5447334,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfe91ef014a9:0xa6163600e41617e9!8m2!3d53.910344!4d27.5473083!16s%2Fg%2F11x1ym4kj8?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:font-normal font-medium text-blue-500"
            >
                Google maps
            </a>
            <div className="text-[18px] mdd:text-[14px] font-medium">
                <p>Пн-пт: с 09:00 до 19:00</p>
                <p>Суббота c 10:00 до 14:00</p>
                <p>Воскресенье: выходной</p>
            </div>
        </div>
    </ContactInfoItem>
);

const LegalInfoSection = ({title, children}) => (
    <div className="mb-6">
        {title && <h3 className="font-semibold mb-2">{title}</h3>}
        <p className="text-[18px] mdd:text-[14px]">
            {children}
        </p>
    </div>
);

export default function ContactsPage({breadcrumbs}) {
    const {openModal} = useModal();

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            <div className="flex flex-col items-center">
                {/* Header Section */}
                <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                    <div
                        className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                        <nav className="mb-4 mdd:text-xs flex items-center space-x-2 text-gray-600 gap-2">
                            <Link href="/"
                                  className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                                Главная
                            </Link>
                            <Image src="/nav-icon.png" alt="" width={8} height={8} className="w-2"/>
                            <span className="font-semibold text-gray-900 cursor-default">Контакты</span>
                        </nav>
                        <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black">
                            КОНТАКТЫ
                        </h1>
                    </div>

                    <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[10%] mt-[20%] relative z-5">
                        <Image
                            src="/conc.png"
                            alt="Оформление виз с VisaVam.by – Легко и Доступно"
                            width={1000}
                            height={1000}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] mdd:hidden"
                            priority
                        />
                        <Image
                            src="/contactsbanner-f.svg"
                            alt="Контакты VisaVam"
                            width={1000}
                            height={1000}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"
                            priority
                        />
                    </div>

                    <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[27%]">
                        <RippleButton onClick={openModal}>
                            Получить консультацию
                        </RippleButton>
                    </div>
                </div>

                <Discount/>

                {/* Contact Info Section */}
                <div
                    className="w-full relative flex lg:flex-row sm:flex-col mdd:flex-col lg:gap-2 sm:gap-4 mdd:gap-20 justify-between px-[7%] pt-10">
                    <div className="w-full lg:flex items-center lg:mt-0 relative z-5">
                        <Image
                            src="/contacts-banner-2.png"
                            alt="Наш офис"
                            width={742}
                            height={329}
                            className="relative lg:h-[100%]"
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <ContactPhone/>
                        <ContactEmail/>
                        <ContactAddress/>
                    </div>
                </div>

                {/* Legal Info Section */}
                <div className="w-full relative flex flex-col gap-6 px-[7%] pt-16 text-[18px] mdd:text-[14px]">
                    <LegalInfoSection title="">
                        Общество с ограниченной ответственностью "Визовый Сервис"<br/>
                        УНП 193637145<br/>
                        Гос. регистрация N 193637145 от 22.07.2022 Минский горисполком
                    </LegalInfoSection>

                    <LegalInfoSection title="Юридический адрес:">
                        РЕСПУБЛИКА БЕЛАРУСЬ; , г. Минск, 220004, пр. Победителей, д. 17, оф. 1204<br/>
                        Директор Андронова Ядвига Казимировна
                    </LegalInfoSection>

                    <LegalInfoSection title="Банковские реквизиты:">
                        БИК банка<br/>
                        UNBSBY2X<br/>
                        IBAN<br/>
                        BY53 UNBS 3012 1603 7000 0000 1933<br/>
                        Банк ЗАО "БСБ Банк"
                    </LegalInfoSection>
                </div>
            </div>

            <Contacts/>
        </div>
    );
}