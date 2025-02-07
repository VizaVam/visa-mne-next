'use client'

import {useState} from "react";
import { useModal } from "@/components/modalcontext";
import { countries } from "@/components/serviceson";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false); // Управление плавающей кнопкой
    const { openModal } = useModal();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className={"header"}>
                <div className={"header__top"}>
                    <div className={"header__top-left"}>
                        <span>пр-т Победителей 17, офис 1204</span>
                        <span>09:00-19:00</span>
                    </div>
                    <div className={"header__top-right"}>
                        <div className={"header__top-right-num"}>
                            <a href="tel:+375296800620">
                                +375296800620
                            </a>
                            <a href="tel:+375293734870">
                                +375293734870
                            </a>
                        </div>
                        <div className={"header__top-right-icons"}>
                            <a
                                href="viber://chat?number=375295648334"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/viber.svg" alt="Viber"/>
                            </a>
                            <a
                                href="https://t.me/+375295648334"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/telegram.svg" alt="Telegram"/>
                            </a>
                            <a
                                href="https://wa.me/375257654320"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <img src="/whatsapp.svg" alt="WhatsApp"/>
                            </a>
                            <a href="mailto:l336906097@gmail.com">
                                <img src="/mail.svg" alt="E-Mail"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={"header__bottom"}>
                    <div className={"header__bottom-left"}>
                        <a href={"/"} className={"header__bottom-left"}>
                            <img src={"/logo-visamne.png"} alt={""}/>
                        </a>
                    </div>
                    <div className={"header__bottom-right"}>
                        <div className={"header__bottom-right-links"}>
                            <a href={"/visa"}>
                                Визы
                            </a>
                            <a href={"/contacts"}>
                                Контакты
                            </a>
                        </div>
                        <button onClick={openModal} className={"header__bottom-right-btn"}>
                            Оформить заявку
                        </button>
                        <div className="lg:hidden p-0 w-max">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <img src="/burger.svg" alt="Menu" className="mdd:w-[3rem] sm:w-[3rem] h-full"/>
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
                        className={`bg-white w-3/4 h-full p-6 sidebar ${
                            isMenuOpen ? "sidebar-open" : ""
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={"flex justify-between mdd:mb-4 mb-8"}>
                            <a href={"/"} className={"mdd:text-2xl sm:text-3xl text-[#F86F00] font-bold"}>
                                Визовый Центр Минск
                            </a>
                            <button
                                className="self-end mb-4"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <img src="/close.svg" alt="Close"/>
                            </button>
                        </div>
                        <div className={"text-black flex flex-col gap-3"}>
                            <a className={"mdd:text-xl sm:text-2xl font-medium hover:text-gray-400"} href={"/visa"}>
                                Визы
                            </a>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="mdd:text-xl sm:text-2xl text-black font-medium hover:text-gray-400 w-max"
                            >
                                Список всех стран
                            </button>
                            {isOpen && (
                                <div className="w-full ">
                                    {countries.map((country, index) => (
                                        <a
                                            key={index}
                                            href={`/visa/${country.url}`}
                                            className="block px-4 py-2 hover:text-gray-400"
                                        >
                                            {country.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                            <a className={"mdd:text-xl sm:text-2xl font-medium hover:text-gray-400"} href={"/contacts"}>
                                Контакты
                            </a>
                            <button onClick={openModal}
                                    className={"mdd:text-xl sm:text-2xl bg-customBlue hover:bg-blue-500 text-white py-2 px-[25px] rounded-[2px]"}>
                                Оформить заявку
                            </button>
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
                    <img src="/request.svg" alt="Контакты" className="w-12 h-12"/>
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