'use client'

import {useEffect, useState, useTransition} from "react";
import {useModal} from "@/components/modalcontext";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import ScrollToTop from "@/components/scroll";
import {countries, otherCountries} from "@/components/serviceson";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronDown, ChevronUp} from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {openModal} = useModal();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false);
    const [isSchengenOpen, setIsSchengenOpen] = useState(false);
    const [isOtherVisasOpen, setIsOtherVisasOpen] = useState(false);
    const pathname = usePathname();

    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
    const [showFloatingButton, setShowFloatingButton] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const excludedCountries = ["rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

    const menuItems = [
        {name: "Шенгенские визы", link: "/shengenskie-vizy", hasSubmenu: true, state: isOpen, setState: setIsOpen},
        {name: "Другие визы", link: "/", hasSubmenu: true, state: isOpenn, setState: setIsOpenn},
        {name: "О нас", link: "/o-nas", hasSubmenu: false},
        {name: "Контакты", link: "/kontakty", hasSubmenu: false},
    ];

    useEffect(() => {
        setIsOpen(false);
        setIsOpenn(false);
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
            if (isMenuOpen || isFloatingMenuOpen) {
                setShowFloatingButton(false);
                return;
            }

            const mainButton = document.querySelector('.bbbt');
            if (!mainButton) {
                setShowFloatingButton(false);
                return;
            }

            const buttonRect = mainButton.getBoundingClientRect();
            setShowFloatingButton(buttonRect.top < 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname, isMenuOpen, isFloatingMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen]);

    console.log("showFloatingButton:", showFloatingButton);

    const listItemVariants = {
        hidden: {opacity: 0, y: -10},
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {delay: i * 0.05, duration: 0.3}
        }),
        exit: {opacity: 0, y: -10, transition: {duration: 0.2}}
    };

    useEffect(() => {
        if (!isMenuOpen) {
            setIsSchengenOpen(false);
            setIsOtherVisasOpen(false);
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
                                <div className={"flex items-center gap-1 cursor-pointer hover:underline"}>
                                    {pathname === "/shengenskie-vizy" ? (
                                        <span
                                            className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out cursor-default">Шенгенские визы</span>
                                    ) : (
                                        <Link href="/shengenskie-vizy"
                                              className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">Шенгенские
                                            визы</Link>
                                    )}
                                    {isOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                                </div>
                                {isOpen && (
                                    <div
                                        className="absolute left-0 mt-0 pt-4 w-[350px] bg-white border-gray-200 z-20 rounded-b-lg">
                                        <ul className="px-2 py-2 grid grid-cols-2 gap-2">
                                            {countries
                                                .filter(country => !excludedCountries.includes(country.url))
                                                .map((country) => {
                                                    const isActive = pathname === `/shengenskie-vizy/${country.url}`;
                                                    return (
                                                        <li key={country.url}>
                                                            {isActive ? (
                                                                <span
                                                                    className="font-semibold text-gray-900 block px-2 py-1 cursor-default">
                                                                {country.n.startsWith("Ф") ? "Виза во" : "Виза в"} {country.n}
                                                            </span>
                                                            ) : (
                                                                <Link
                                                                    href={`/shengenskie-vizy/${country.url}`}
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

                            <div
                                className="relative"
                                onMouseEnter={() => setIsOpenn(true)}
                                onMouseLeave={() => setIsOpenn(false)}
                            >
                                <div className={"flex items-center gap-1 hover:underline cursor-default"}>
                                    <p>
                                        Другие визы
                                    </p>
                                    {isOpenn ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                                </div>

                                {isOpenn && (
                                    <div
                                        className="absolute left-0 mt-0 pt-4 w-[250px] bg-white border-gray-200 z-20 rounded-b-lg">
                                        <ul className="px-2 py-2">
                                            {otherCountries
                                                .filter(visa => visa.url === "viza-v-ssha" || visa.url === "viza-v-velikobritaniyu")
                                                .map((visa) => {
                                                    const isActive = pathname === `/${visa.url}`;
                                                    return (
                                                        <li key={visa.url}>
                                                            {isActive ? (
                                                                <span
                                                                    className="font-semibold text-gray-900 block px-2 py-1 cursor-default">
                                                                        Виза в {visa.n}
                                                                </span>
                                                            ) : (
                                                                <Link href={`/${visa.url}`}
                                                                      className="block px-2 py-1 transition-colors hover:underline">
                                                                    Виза в {visa.n}
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
                        <button
                            onClick={openModal}
                            className="header__bottom-right-btn relative overflow-hidden rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out z-50"
                        >
                            {/* Три медленные пульсирующие волны, затем пауза */}
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
                                        repeatDelay: 0.5, // Пауза после трех волн
                                        delay: i * 0.4, // Волны идут друг за другом
                                    }}
                                >
                                    <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
                                </motion.span>
                            ))}
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
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Затемнение фона */}
                            <motion.div
                                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Меню (проявление) */}
                            <motion.div
                                className="fixed inset-0 bg-white text-black p-6 z-50 shadow-xl overflow-y-auto"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.1, ease: "easeOut"}}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Кнопка закрытия */}
                                <div className="absolute top-4 right-4">
                                    <button onClick={() => setIsMenuOpen(false)}>
                                        <Image width={24} height={24} src="/close.svg" alt="Close"/>
                                    </button>
                                </div>

                                {/* Основное меню */}
                                <motion.div
                                    className="flex flex-col gap-4 mt-10 text-xl font-semibold"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: {opacity: 0},
                                        visible: {opacity: 1, transition: {staggerChildren: 0.3, duration: 0.5}}, // Уменьшено
                                        exit: {opacity: 0, height: 0, transition: {duration: 0.5}} // Ускорено
                                    }}
                                >
                                    {/* Шенгенские визы */}
                                    <motion.div variants={listItemVariants}>
                                        <div className="w-full flex justify-between items-center">
                                            <Link href="/shengenskie-vizy" className="w-full"
                                                  onClick={() => setIsMenuOpen(false)}>
                                                Шенгенские визы
                                            </Link>
                                            <button onClick={() => setIsSchengenOpen(!isSchengenOpen)}>
                                                {isSchengenOpen ? "−" : "+"}
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                            {isSchengenOpen && (
                                                <motion.ul
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={{
                                                        hidden: {opacity: 0, height: 0},
                                                        visible: {
                                                            opacity: 1,
                                                            height: "auto",
                                                            transition: {staggerChildren: 0.3, duration: 0.3}
                                                        }, // Уменьшено
                                                        exit: {opacity: 0, height: 0, transition: {duration: 0.2}} // Ускорено
                                                    }}
                                                    className="pl-4 mt-2 space-y-2 text-lg font-normal"
                                                >
                                                    {countries
                                                        .filter(c => !excludedCountries.includes(c.url)) // Проверка по excludedCountries
                                                        .map((country, index) => (
                                                            <motion.li key={country.url} variants={listItemVariants}
                                                                       custom={index}>
                                                                <Link href={`/shengenskie-vizy/${country.url}`}>
                                                                    Виза в {country.n}
                                                                </Link>
                                                            </motion.li>
                                                        ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Другие визы */}
                                    <motion.div variants={listItemVariants}>
                                        <button
                                            className="w-full flex justify-between items-center"
                                            onClick={() => setIsOtherVisasOpen(!isOtherVisasOpen)}
                                        >
                                            Другие визы
                                            <span>{isOtherVisasOpen ? "−" : "+"}</span>
                                        </button>

                                        <AnimatePresence>
                                            {isOtherVisasOpen && (
                                                <motion.ul
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={{
                                                        hidden: {opacity: 0, height: 0},
                                                        visible: {
                                                            opacity: 1,
                                                            height: "auto",
                                                            transition: {staggerChildren: 0.05}
                                                        },
                                                        exit: {opacity: 0, height: 0}
                                                    }}
                                                    className="pl-4 mt-2 space-y-2 text-lg font-normal"
                                                >
                                                    {otherCountries
                                                        .filter(c => ["viza-v-ssha", "viza-v-velikobritaniyu"].includes(c.url))
                                                        .map((country, index) => (
                                                            <motion.li key={country.url} variants={listItemVariants}
                                                                       custom={index}>
                                                                <Link href={`/${country.url}`}>
                                                                    Виза в {country.n}
                                                                </Link>
                                                            </motion.li>
                                                        ))}
                                                </motion.ul>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* О нас и Контакты */}
                                    <motion.div variants={listItemVariants}>
                                        <Link href="/o-nas">О нас</Link>
                                    </motion.div>
                                    <motion.div variants={listItemVariants}>
                                        <Link href="/kontakty">Контакты</Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </header>
            <ScrollToTop showFloatingButton={showFloatingButton} isFloatingMenuOpen={isFloatingMenuOpen}
                         isMenuOpen={isMenuOpen}/>
            {!isMenuOpen && (
                <div className={`fixed ${showFloatingButton ? "bottom-16" : "bottom-3"} right-3 z-[60] md:hidden`}>
                    <button
                        onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
                    >
                        <img src="/request.svg" alt="Контакты" className="w-12 h-12"/>
                    </button>
                </div>
            )}
            {isFloatingMenuOpen && (
                <div className="md:hidden">
                    <div
                        className={`fixed ${showFloatingButton ? (isMenuOpen ? "bottom-28" : "bottom-28") : (!isMenuOpen ? "bottom-16" : "bottom-16")} right-3 flex flex-col items-center justify-between z-50`}>
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
            {showFloatingButton && !isMenuOpen && (
                <div className="fixed bottom-3 w-full px-[7%] flex justify-center z-50">
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            openModal();
                        }}
                        className="relative overflow-hidden w-full bg-customBlue hover:bg-blue-500 text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out md:hidden z-50"
                    >
                        {/* Три плавных волны */}
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
                                    repeatDelay: 0.5, // Пауза после трех волн
                                    delay: i * 0.4, // Волны идут друг за другом
                                }}
                            >
                                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full"/>
                            </motion.span>
                        ))}

                        Оформить заявку
                    </button>
                </div>
            )}
        </>
    );
};