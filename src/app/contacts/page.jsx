'use client'

import Link from "next/link";
import Contacts from "@/components/contacts";
import Image from "next/image";

import { useModal } from "@/components/modalcontext";

export default function ContactsPage() {
    const { openModal } = useModal();

    return (
        <div>
            <div className={"flex flex-col items-center"}>
                <div className={"w-full relative flex flex-col lg:flex-row sm:flex-col justify-between"}>
                    <div
                        className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[170px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                        <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                            <Link href="/" className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Главная</Link>
                            <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                            <span className="font-semibold text-gray-900">Контакты</span>
                        </nav>
                        <h1 className="mdd:text-[40px] lg:text-[64px] md:text-[58px] sm:text-[48px] font-semibold text-black">
                            КОНТАКТЫ
                        </h1>
                    </div>
                    <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[15%] mt-[20%] relative z-5">
                        <Image
                            src="/conc.png"
                            alt="Оформление виз с VisaVam.by – Легко и Доступно"
                            width={1000}
                            height={1000}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] mdd:hidden"
                        />
                        <Image src={"/contactsbanner-f.svg"} alt={""} width={1000}
                               height={1000} className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"/>
                    </div>
                    <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[27%]">
                        <button
                            onClick={openModal}
                            className="relative w-[100%] bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[2px]">
                            Оформить заявку
                        </button>
                    </div>
                </div>
                <div
                    className={"w-full relative flex lg:flex-row sm:flex-col mdd:flex-col lg:gap-2 sm:gap-4 mdd:gap-20 justify-between px-[7%] pt-10"}>
                    <div className="w-full lg:flex items-center lg:mt-0 relative z-5">
                        <Image
                            src="/contacts-banner-2.png"
                            alt=""
                            width={742}
                            height={329}
                            className="relative lg:h-[100%]"
                        />
                    </div>
                    <div className={"flex flex-col gap-6"}>
                        <div className={"flex gap-4 items-center"}>
                            <img className={"w-6 h-6"} src={"/contacts-call-icon.png"} alt={""}/>
                            <div className={"flex flex-col"}>
                                <a href={"tel:+375296800620"} className={"font-medium text-[18px] mdd:text-[14px] hover:underline"}>+375296800620</a>
                                <a href={"tel:+375293734870"} className={"font-medium text-[18px] mdd:text-[14px] hover:underline"}>+375293734870</a>
                                <p className={"font-normal text-[14px] mdd:text-[12px] text-[#808080]"}>Мобильный, Вайбер, Телеграм,
                                    Ватсап</p>
                            </div>
                        </div>
                        <div className={"flex gap-4 items-center"}>
                            <img className={"w-6 h-6"} src={"/contacts-email-icon.png"} alt={""}/>
                            <div>
                                <a href={"mailto:l336906097@gmail.com"} className={"text-[18px] mdd:text-[14px] font-medium hover:underline"}>
                                    info@visavam.by
                                </a>
                            </div>
                        </div>
                        <div className={"flex gap-4"}>
                            <img className={"w-6 h-6"} src={"/contacts-location-icon.png"} alt={""}/>
                            <div className={"flex flex-col gap-4"}>
                                <p className={"text-[18px] mdd:text-[14px] font-medium"}>Минск, пр. Победителей 17 офис 1204 (метро
                                    Немига)</p>
                                <a href={"https://www.google.com/maps/place/Visa+Vam/@53.910344,27.5447334,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfe91ef014a9:0xa6163600e41617e9!8m2!3d53.910344!4d27.5473083!16s%2Fg%2F11x1ym4kj8?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className={"underline text-[#4472C4] hover:text-blue-700"}>Google Map</a>
                                <div className={"text-[18px] mdd:text-[14px] font-medium"}>
                                    <p>Пн-пт: с 09:00 до 19:00</p>
                                    <p>Суббота c 10:00 до 14:00</p>
                                    <p>Воскресенье: выходной</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full relative flex flex-col gap-6 px-[7%] pt-16 text-[18px] mdd:text-[14px]"}>
                    <div>
                        <p>
                            Общество с ограниченной ответственностью "Визовый Сервис"<br/>
                            УНП 193637145<br/>
                            Гос. регистрация N 193637145 от 22.07.2022 Минский горисполком
                        </p>
                    </div>
                    <div>
                        <p>
                            Юридический адрес:<br/>
                            РЕСПУБЛИКА БЕЛАРУСЬ; , г. Минск, 220004, пр. Победителей, д. 17, оф. 1204<br/>
                            Андронова Ядвига Казимировна
                        </p>
                    </div>
                    <div>
                        <p>
                            БИК банка<br/>
                            UNBSBY2X<br/>
                            IBAN<br/>
                            BY53 UNBS 3012 1603 7000 0000 1933<br/>
                            Банк ЗАО "БСБ Банк"
                        </p>
                    </div>
                </div>
            </div>
            <Contacts/>
        </div>
    );
};