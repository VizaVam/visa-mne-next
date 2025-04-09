'use client'

import Image from "next/image";
import {otherCountries} from "@/components/serviceson";
import {countries} from "@/data/countries";
import Link from "next/link";
import {usePathname} from "next/navigation";


export default function Footer() {
    const pathname = usePathname();
    const excludedCountries = ["viza-v-velikobritaniyu", "viza-v-ssha", "viza-v-kitaj", "rabochaya-viza-v-bolgariyu", "rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

    return (
        <footer className={"footer"}>
            <div className={"footer__top"}>
                <div className={"footer__top-left"}>
                    <div className={"footer__top-left-toptext"}>
                        <p>Общество с ограниченной ответственностью</p>
                        <p>"Визовый Сервис"</p>
                        <p>УНП 193637145</p>
                        <p>Гос. регистрация N 193637145 от 22.07.2022</p>
                        <p>Минский горисполком</p>
                    </div>
                </div>
                <div className={"footer__top-right"}>
                    <div className={"footer__top-right-main mdd:flex-col"}>
                        <div className={"footer__top-right-main-left"}>
                            <div className={"mdd:hidden"}>
                                <a href={"/shengenskie-vizy"} className={"font-medium text-xl"}>Шенгенские визы</a>
                                <ul className="my-6 mdd:my-0 grid grid-cols-2">
                                    {countries
                                        .filter(country => !excludedCountries.includes(country.url))
                                        .map((country) => {
                                            const isActive = pathname === `/shengenskie-vizy/${country.url}`;
                                            return (
                                                <li key={country.url} className={"py-2 mdd:hidden pr-2"}>
                                                    {isActive ? (
                                                        <span
                                                            className="text-gray-200 block cursor-default">
                                                                {country.n.startsWith("Ф") ? "Виза во" : "Виза в"} {country.n}
                                                            </span>
                                                    ) : (
                                                        <Link
                                                            href={`/shengenskie-vizy/${country.url}`}
                                                            className="py-2 transition-colors hover:underline"
                                                        >
                                                            {country.n.startsWith("Ф") ? "Виза во" : "Виза в"} {country.n}
                                                        </Link>
                                                    )}
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                            <div className={"sm:hidden py-2"}>
                                <a href={"/shengenskie-vizy"} className={"font-medium text-xl py-2"}>Шенгенские визы</a>
                            </div>
                            <div className={"mdd:hidden"}>
                                <p className={"font-medium text-xl"}>Другие визы</p>
                                <ul className="my-6 mdd:my-1 grid">
                                    {otherCountries
                                        .filter(visa => visa.url === "viza-v-ssha" || visa.url === "viza-v-velikobritaniyu" || visa.url === "viza-v-kitaj")
                                        .map((visa) => {
                                            const isActive = pathname === `/${visa.url}`;
                                            return (
                                                <li key={visa.url} className={"py-2 mdd:hidden pr-2"}>
                                                    {isActive ? (
                                                        <span
                                                            className="text-gray-200 block cursor-default">
                                                                        Виза в {visa.n}
                                                                </span>
                                                    ) : (
                                                        <Link href={`/${visa.url}`}
                                                              className="py-2 transition-colors hover:underline">
                                                            Виза в {visa.n}
                                                        </Link>
                                                    )}
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                            <div className={"sm:hidden"}>
                                <ul className="my-6 mdd:my-0 grid">
                                    {otherCountries
                                        .filter(visa => visa.url === "viza-v-ssha" || visa.url === "viza-v-velikobritaniyu" || visa.url === "viza-v-kitaj")
                                        .map((visa) => {
                                            const isActive = pathname === `/${visa.url}`;
                                            return (
                                                <li key={visa.url} className={"py-2 pr-2"}>
                                                    {isActive ? (
                                                        <span
                                                            className="font-medium text-xl">
                                                                        Виза в {visa.n}
                                                                </span>
                                                    ) : (
                                                        <Link href={`/${visa.url}`}
                                                              className="py-2 font-medium text-xl">
                                                            Виза в {visa.n}
                                                        </Link>
                                                    )}
                                                </li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className={"footer__top-right-main-left w-[120px] mdd:py-2"}>
                            <a href={"/o-nas"} className={"block font-medium text-xl"}>О нас</a>
                        </div>
                        <div className={"footer__top-right-main-right mdd:py-2"}>
                            <a href={"/kontakty"} className={"font-medium text-xl"}>Контакты</a>
                            <div className={"footer__top-right-main-right-lists"}>
                                <div className={"footer__top-right-main-right-lists-list"}>
                                    <Image width={1000} height={800} src={"/footer-call.png"} alt={""}/>
                                    <div className={"flex flex-col"}>
                                        <a className={"hover:underline"} href={"tel:+375296800620"}>
                                            +375296800620
                                        </a>
                                        <a className={"hover:underline"} href={"tel:+375293734870"}>
                                            +375293734870
                                        </a>
                                    </div>
                                </div>
                                <div className={"footer__top-right-main-right-lists-list"}>
                                    <Image width={1000} height={800} src={"/footer-email.png"} alt={""}/>
                                    <div>
                                        <a className={"hover:underline"} href={"mailto:l336906097@gmail.com"}
                                           target="_blank"
                                           rel="noopener noreferrer">
                                            info@visavam.by
                                        </a>
                                    </div>
                                </div>
                                <a href={"https://www.google.com/maps/place/Visa+Vam/@53.910344,27.5447334,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfe91ef014a9:0xa6163600e41617e9!8m2!3d53.910344!4d27.5473083!16s%2Fg%2F11x1ym4kj8?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className={"footer__top-right-main-right-lists-list hover:underline"}
                                >
                                    <Image width={1000} height={800} src={"/footer-location.png"} alt={""}/>
                                    <div>
                                        <p>Минск, пр. Победителей 17 офис 1204 (метро Немига)</p>
                                    </div>
                                </a>
                                <div className={"pl-8"}>
                                    <p>Пн-пт: с 09:00 до 19:00</p>
                                    <p>Суббота c 10:00 до 14:00</p>
                                    <p>Воскресенье: выходной</p>
                                </div>
                                <div className={"footer__top-right-main-right-lists-socs"}>
                                    <a
                                        href="https://www.instagram.com/visavam.by/profilecard/?igsh=YnRwZGh4Y3Jld2pj"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image width={1000} height={800} src={"/instagram.png"} alt={""}/>
                                    </a>
                                    <a
                                        onClick={async (e) => {
                                            e.preventDefault();
                                            const number = "375293734870";
                                            const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

                                            if (isIOS) {
                                                // 1. Проверяем, установлен ли Viber
                                                try {
                                                    // Пробуем открыть приложение
                                                    window.location.href = `viber://chat?number=${number}`;

                                                    // Если через 250ms страница еще видна - значит приложение не установлено
                                                    setTimeout(() => {
                                                        if (!document.hidden) return;
                                                        window.location.href = "https://apps.apple.com/app/viber/id382617920";
                                                    }, 250);
                                                } catch (e) {
                                                    // Если ошибка - открываем App Store
                                                    window.location.href = "https://apps.apple.com/app/viber/id382617920";
                                                }
                                            } else {
                                                // Логика для Android/Desktop
                                                window.location.href = `viber://chat?number=${number}`;
                                                setTimeout(() => {
                                                    window.open(`https://chats.viber.com/user/${number}`, "_blank");
                                                }, 200);
                                            }
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img
                                            src="/viber.svg"
                                            alt="Chat on Viber"
                                            width={1000}  // Рекомендую уменьшить для мобильных устройств
                                            height={800}
                                        />
                                    </a>
                                    <a
                                        href="https://t.me/+375295648334"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image width={1000} height={800} src="/telegram.svg" alt="Telegram"/>
                                    </a>
                                    <a
                                        href="https://wa.me/375257654320"
                                        target="_blank"
                                        rel="noopener noreferrer"

                                    >
                                        <Image width={1000} height={800} src="/whatsapp.svg" alt="WhatsApp"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <a className={"text-[#E6E6E6] hover:text-white"} href="/Публичная%20оферта.%20Компания%20VISA%20VAM.pdf"
                   target="_blank" rel="noopener noreferrer">
                    Публичная оферта
                </a>
            </div>
        </footer>
    );
};
