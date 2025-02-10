'use client'

import {useState} from "react";
import {useModal} from "@/components/modalcontext";
import {countries} from "@/components/serviceson";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // Управление плавающей кнопкой
    const {openModal} = useModal();
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className={"header"}>
                <div className={"header__top"}>
                    <div className={"header__top-left"}>
                        <div className={"flex gap-2 lg:gap-4 lg:flex-row md:flex-col sm:flex-col mdd:flex-col"}>
                            <p className={"text-[14px] lg:text-[16px] mdd:text-[10px]"}>пр. Победителей 17, офис
                            1204</p>
                            <div className={"header__top-left-num"}>
                                <p className={"text-[14px] lg:text-[16px] mdd:text-[10px] mdd:hidden"}>Пн-пт:
                                    09:00-19:00</p>
                                <p className={"text-[14px] lg:text-[16px] mdd:text-[10px] mdd:hidden"}>Сб:
                                    10:00-14:00</p>
                                <p className={"text-[14px] lg:text-[16px] mdd:text-[10px] sm:hidden"}>09:00-19:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={"header__top-right"}>
                        <div className={"header__top-right-num"}>
                            <a href="tel:+375296800620" className={"hover:underline"}>
                                +375296800620
                            </a>
                            <a href="tel:+375293734870" className={"hover:underline"}>
                                +375293734870
                            </a>
                            <a
                                href="viber://chat?number=375295648334"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image width={1000} height={800} src="/viber.svg" alt="Viber"/>
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
                            <a href="mailto:l336906097@gmail.com">
                                <Image width={1000} height={800} src="/mail.svg" alt="E-Mail"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={"header__bottom"}>
                    <div className={"header__bottom-left"}>
                        <a href={"/"} className={"header__bottom-left"}>
                            <Image width={600} height={600} src={"/new-logo.svg"} alt={""}
                                   className={"lg:h-20 md:h-20 sm:h-16 mdd:h-[54px] lg:w-20 md:w-20 sm:w-16 mdd:w-[54px] hover:underline"}/>
                        </a>
                    </div>
                    <div className={"header__bottom-right"}>
                        <div className={"header__bottom-right-links"}>
                            {pathname === "/visa" ? (
                                <span className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out">Визы</span>
                            ) : (
                                <Link href="/visa" className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Визы</Link>
                            )}

                            {pathname === "/contacts" ? (
                                <span className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out">Контакты</span>
                            ) : (
                                <Link href="/contacts" className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Контакты</Link>
                            )}
                        </div>
                        <button onClick={openModal} className={"header__bottom-right-btn active:scale-95 transition-transform duration-150 ease-in-out"}>
                            Оформить заявку
                        </button>
                        <div className="lg:hidden p-0 w-max">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Image width={1000} height={800} src="/burger.svg" alt="Menu"
                                       className="w-9 mdd:w-7 h-full"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[2] ${
                        isMenuOpen ? "block" : "hidden"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div
                        className={`bg-white w-3/4 h-full flex flex-col p-6 sidebar ${
                            isMenuOpen ? "sidebar-open" : ""
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="self-end mb-4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Image width={1000} height={800} src="/close.svg" alt="Close" className={"h-6 w-full"}/>
                        </button>
                        <div className={"text-black flex flex-col gap-3"}>
                            <a className={"mdd:text-xl sm:text-2xl font-medium hover:text-gray-400 active:scale-95 transition-transform duration-150 ease-in-out"} href={"/visa"}>
                                Визы
                            </a>
                            <a className={"mdd:text-xl sm:text-2xl font-medium hover:text-gray-400 active:scale-95 transition-transform duration-150 ease-in-out"} href={"/contacts"}>
                                Контакты
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            {/* Фиксированная кнопка */}
            <div className="fixed bottom-4 right-4 z-50 md:hidden">
                {/* Основная кнопка */}
                <button
                    onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
                    className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center"
                >
                    <Image width={1000} height={800} src="/request.svg" alt="Контакты" className="w-12 h-12"/>
                </button>

                {/* Раскрывающееся меню */}
                {isFloatingMenuOpen && (
                    <div className="absolute bottom-16 right-0 flex flex-col items-end space-y-3">
                        <a
                            href="tel:+375296800620"
                            className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"

                        >
                            <img src="/fixed-call.svg" alt="Phone" className="w-12 h-12"/>
                        </a>
                        <a
                            href="viber://chat?number=375295648334"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"

                        >
                            <img src="/fixed-viber.svg" alt="Viber" className="w-12 h-12"/>
                        </a>
                        <a
                            href="https://t.me/+375295648334"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"

                        >
                            <img src="/telegram.svg" alt="Telegram" className="w-12 h-12"/>
                        </a>
                        <a
                            href="https://wa.me/375257654320"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"

                        >
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-12 h-12"/>
                        </a>
                        <a
                            href="mailto:l336906097@gmail.com"
                            className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
                        >
                            <img src="/email.svg" alt="Email" className="w-12 h-12"/>
                        </a>
                        <button
                            onClick={openModal}
                            className="w-72 h-full rounded-full bg-transparent flex items-center justify-center text-white"

                        >
                            <img src="/fixed-button.svg" alt="Email" className="w-72 h-full"/>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};