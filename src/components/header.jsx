'use client'

import {useEffect, useState, useTransition} from "react";
import {useModal} from "@/components/modalcontext";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import ScrollToTop from "@/components/scroll";
import {countries} from "@/components/serviceson";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {openModal} = useModal();
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        setIsOpen(false);
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 100;
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const mainButton = document.querySelector('.bbbt');

            if (pathname === "/kontakty") {
                setShowFloatingButton(true);
                return;
            }

            if (mainButton) {
                const buttonRect = mainButton.getBoundingClientRect();
                setShowFloatingButton(buttonRect.top < 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

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

                <div className={`header__bottom mdd:bg-white ${
                    isScrolled ? "bg-white" : "bg-transparent"
                }`}>
                    <div className={"header__bottom-left"}>
                        <a href={"/"} className={"header__bottom-left"}>
                            <Image width={600} height={600} src={"/new-logo.svg"} alt={""}
                                   className={"lg:h-20 md:h-20 sm:h-16 mdd:h-[54px] lg:w-20 md:w-20 sm:w-16 mdd:w-[54px] hover:underline"}/>
                        </a>
                    </div>
                    <div className={"header__bottom-right"}>
                        <div className={"header__bottom-right-links"}>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >
                                {pathname === "/vizy" ? (
                                    <span
                                        className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out cursor-default">Визы</span>
                                ) : (
                                    <Link href="/vizy"
                                          className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Визы</Link>
                                )}

                                {isOpen && (
                                    <div className="absolute left-0 mt-0 w-[350px] bg-white border-gray-200 z-50">
                                        <ul className="px-2 py-2 grid grid-cols-2 gap-2">
                                            {countries.map((country) => {
                                                const isActive = pathname === `/vizy/${country.url}`;
                                                return (
                                                    <li key={country.url}>
                                                        {isActive ? (
                                                            <span
                                                                className="font-semibold text-gray-900 block px-2 py-1 cursor-default">
                                                                {country.n.startsWith("Ф") ? "Виза во" : "Виза в"} {country.n}
                                                            </span>
                                                        ) : (
                                                            <Link
                                                                href={`/vizy/${country.url}`}
                                                                className="block px-2 py-1 transition-colors hover:underline"
                                                            >
                                                                {country.n.startsWith("Ф") ? "Виза во" : "Виза в"} {country.n}
                                                            </Link>
                                                        )}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {pathname === "/o-nas" ? (
                                <span
                                    className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out cursor-default">О нас</span>
                            ) : (
                                <Link href="/o-nas"
                                      className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">О
                                    нас</Link>
                            )}

                            {pathname === "/kontakty" ? (
                                <span
                                    className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out cursor-default">Контакты</span>
                            ) : (
                                <Link href="/kontakty"
                                      className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Контакты</Link>
                            )}
                        </div>
                        <button onClick={openModal}
                                className="header__bottom-right-btn hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out">
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
                        className={`bg-white w-full h-full flex flex-col p-6 sidebar ${
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
                        <div className="text-black flex flex-col gap-1">
                            {/* Кнопка Визы с + и - */}
                            <div className="flex items-center justify-between">
                                <Link
                                    className="mdd:text-xl sm:text-2xl font-medium hover:text-gray-400 active:scale-95 transition-transform duration-150 ease-in-out"
                                    href="/vizy"
                                    onClick={handleCloseMenu}
                                >
                                    Визы
                                </Link>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-xl font-bold focus:outline-none transition-transform duration-150 ease-in-out"
                                >
                                    {isOpen ? "−" : "+"}
                                </button>
                            </div>

                            {/* Подменю стран */}
                            {isOpen && (
                                <div className="pl-2">
                                    <ul className="space-y-2">
                                        {countries.map((country) => (
                                            <li key={country.url}>
                                                <Link
                                                    href={`/vizy/${country.url}`}
                                                    className="hover:text-gray-400 active:scale-95 transition-transform duration-150 ease-in-out"
                                                    onClick={handleCloseMenu}
                                                >
                                                    {country.n.startsWith("Ф") ? "Виза во" : "Виза в"} {country.n}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Остальные ссылки */}
                            <Link
                                className="mdd:text-xl sm:text-2xl font-medium hover:text-gray-400 active:scale-95 transition-transform duration-150 ease-in-out"
                                href="/o-nas"
                                onClick={handleCloseMenu}
                            >
                                О нас
                            </Link>
                            <Link
                                className="mdd:text-xl sm:text-2xl font-medium hover:text-gray-400 active:scale-95 transition-transform duration-150 ease-in-out"
                                href="/kontakty"
                                onClick={handleCloseMenu}
                            >
                                Контакты
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <ScrollToTop showFloatingButton={showFloatingButton} />
            {/* Фиксированная кнопка */}
            <div className={`fixed ${showFloatingButton ? (isMenuOpen ? "bottom-16" : "bottom-28") : (!isMenuOpen ? "bottom-3" : "bottom-3")} right-3 z-[60] md:hidden`}>
                <button
                    onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
                    className="w-12 h-12 rounded-full bg-white text-white flex items-center justify-center"
                >
                    <img src="/request.svg" alt="Контакты" className="w-12 h-12"/>
                </button>
            </div>
            {isFloatingMenuOpen && (
                <div className="md:hidden">
                    <div
                        className={`fixed ${showFloatingButton ? (isMenuOpen ? "bottom-28" : "bottom-40") : (!isMenuOpen ? "bottom-16" : "bottom-16")} right-3 flex flex-col items-center justify-between z-50`}>
                        <a href="tel:+375296800620"
                           className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center bg-white">
                            <img src="/fixed-call.svg" alt="Phone" className="w-12 h-12"/>
                        </a>
                        <a href="viber://chat?number=375295648334" target="_blank" rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center bg-white">
                            <img src="/fixed-viber.svg" alt="Viber" className="w-12 h-12"/>
                        </a>
                        <a href="https://t.me/+375295648334" target="_blank" rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                            <img src="/telegram.svg" alt="Telegram" className="w-12 h-12"/>
                        </a>
                        <a href="https://wa.me/375257654320" target="_blank" rel="noopener noreferrer"
                           className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-12 h-12"/>
                        </a>
                        <a href="mailto:l336906097@gmail.com"
                           className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                            <img src="/email.svg" alt="Email" className="w-12 h-12"/>
                        </a>
                    </div>
                </div>
            )}
            {showFloatingButton && (
                <div className="fixed bottom-3 w-full px-[7%] flex justify-center z-50">
                    <button onClick={() => { setIsMenuOpen(false); openModal(); }}
                            className="w-full bg-customBlue hover:bg-blue-500 text-white py-3 rounded-[2px] active:scale-95 transition-transform duration-150 ease-in-out md:hidden">
                        Оформить заявку
                    </button>
                </div>
            )}
        </>
    );
};