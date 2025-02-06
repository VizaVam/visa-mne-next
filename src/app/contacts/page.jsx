import Link from "next/link";
import Contacts from "@/components/contacts";
import Image from "next/image";

export default function ContactsPage() {
    return (
        <div>
            <div>
                <div className={"w-full relative flex justify-between"}>
                    <div
                        className="lg:absolute left-0 top-1/2 w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col gap-24">
                        <nav className="mb-4 flex items-center space-x-2 text-gray-600 gap-2">
                            <Link href="/public" className="text-orange-500 hover:underline">Главная</Link>
                            <span><img className={"w-2"} src={"/nav-icon.png"} alt={""}/></span>
                            <span className="font-semibold">Контакты</span>
                        </nav>
                        <h1 className="text-7xl lg:text-7xl font-semibold text-black">
                            КОНТАКТЫ
                        </h1>
                    </div>
                    <div className="w-full lg:flex items-center -mt-[30%] lg:mt-0 relative z-5">
                        <Image
                            src="/contacts-banner.png"
                            alt="Оформление виз с VisaVam.by – Легко и Доступно"
                            width={1000}
                            height={1000}
                            className="relative lg:top-[10%] lg:w-[50%] lg:left-[45%]"
                        />
                    </div>
                </div>
                <div className={"w-full relative flex justify-between px-[7%]"}>
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
                            <div>
                                <p className={"font-medium text-lg"}>+375296800620</p>
                                <p className={"font-medium text-lg"}>+375293734870</p>
                                <p className={"font-normal text-[14px] text-[#808080]"}>Мобильный, Вайбер, Телеграм,
                                    Ватсап</p>
                            </div>
                        </div>
                        <div className={"flex gap-4 items-center"}>
                            <img className={"w-6 h-6"} src={"/contacts-email-icon.png"} alt={""}/>
                            <div>
                                <p className={"text-lg font-medium"}>info@visavam.by</p>
                            </div>
                        </div>
                        <div className={"flex gap-4"}>
                            <img className={"w-6 h-6"} src={"/contacts-location-icon.png"} alt={""}/>
                            <div className={"flex flex-col gap-4"}>
                                <p className={"text-lg font-medium"}>Минск, пр. Победителей 17 офис 1204 (метро
                                    Немига)</p>
                                <a href={"/"} className={"underline text-[#4472C4]"}>Google Map</a>
                                <div className={"text-lg font-medium"}>
                                    <p>Пн-пт: с 09:00 до 19:00</p>
                                    <p>Суббота c 10:00 до 14:00</p>
                                    <p>Воскресенье: выходной</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"w-full relative flex flex-col gap-6 px-[7%] pt-[7%] text-lg"}>
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