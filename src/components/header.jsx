'use client'

import React, {useEffect, useState} from "react";
import {useModal} from "@/components/modalcontext";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import ScrollToTop from "@/components/scroll";
import {otherCountries} from "@/components/serviceson";
import {countries} from "@/data/countries";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronDown, ChevronUp} from "lucide-react";
import TimeRestrictedBlock from "@/components/TimeRestrictedBlock/TimeRestrictedBlock"

export default function Header({ onTimerestrictedChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {openModal} = useModal();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false);
    const [isSchengenOpen, setIsSchengenOpen] = useState(false);
    const [isOtherVisasOpen, setIsOtherVisasOpen] = useState(false);
    const pathname = usePathname();

    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
    const [showFloatingButton, setShowFloatingButton] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    const currentDate = new Date();
    const discountEndDate = new Date('2025-07-31T23:59:59+05:00');

    const excludedCountries = ["rabochaya-viza-v-ispaniyu", "rabochaya-viza-v-germaniyu", "viza-v-velikobritaniyu", "viza-v-ssha", "viza-v-kitaj", "rabochaya-viza-v-bolgariyu", "rabochaya-viza-v-polshu", "delovaya-viza-v-polshu", "uchebnaya-viza-v-polshu", "gostevaya-polskaya-viza", "viza-v-polsy-po-karte-polyaka"];

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

            // const mainButton = document.querySelector('.bbbt');
            // // if (!mainButton) {
            // //     setShowFloatingButton(false);
            // //     return;
            // // }

            // const buttonRect = mainButton.getBoundingClientRect();
            setShowFloatingButton(true);
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
                    <div className={"header__top-left small:!w-[57%] !w-[54%]"}>
                        <div className={"flex gap-2 lg:gap-4 lg:flex-row md:flex-col sm:flex-col mdd:flex-col"}>
                            <p className={"text-[14px] lg:text-[16px] mdd:text-[10px]"}>пр. Победителей 17, офис
                                1204</p>
                            <div className={"header__top-left-num"}>
                                <p className={"text-[14px] lg:text-[16px] mdd:text-[10px]"}>Пн-пт:
                                    09:00-19:00</p>
                                <p className={"text-[14px] lg:text-[16px] mdd:text-[10px]"}>Сб:
                                    10:00-14:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={"header__top-right small:!w-[43%] !w-[46%]"}>
                        <a href="tel:+375296800620"
                           className={"small:!text-[16px] text-[18px] font-semibold hover:underline lg:hidden"}>
                            +375296800620
                        </a>
                        <div className={"header__top-right-num"}>
                            <a href="tel:+375296800620" className={"hover:underline text-xl"}>
                                +375296800620
                            </a>
                            <a
                                href="viber://chat?number=%2B375293734870/"
                                style={{cursor: 'pointer'}}
                                title="Открыть в Viber"
                                data-itc-calltracking="off"
                            >
                                <img
                                    src="/viber.svg"
                                    alt="Chat on Viber"
                                    width={40}
                                    height={40}
                                    style={{display: 'block'}}
                                />
                            </a>
                            <a
                                href="https://t.me/+375295648334"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-itc-calltracking="off"
                            >
                                <Image width={1000} height={800} src="/telegram.svg" alt="Telegram"/>
                            </a>
                            <a
                                href="https://wa.me/375257654320"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-itc-calltracking="off"

                            >
                                <Image width={1000} height={800} src="/whatsapp.svg" alt="WhatsApp"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`header__bottom mdd:bg-white ${isScrolled ? "bg-white" : "bg-transparent"}`}>
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
                                <div className={"flex items-center gap-1 cursor-pointer"}>
                                    {pathname === "/shengenskie-vizy" ? (
                                        <span
                                            className="font-semibold text-gray-900 cursor-default">Шенгенские визы</span>
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
                                <div className={"flex items-center gap-1 cursor-default"}>
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
                                                .filter(visa => visa.url === "viza-v-ssha" || visa.url === "viza-v-velikobritaniyu" || visa.url === "viza-v-kitaj")
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

                            {pathname === "/o-kompanii" ? (
                                <span
                                    className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out cursor-default">О компании</span>
                            ) : (
                                <Link href="/o-kompanii"
                                      className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">О компании</Link>
                            )}

                            {pathname === "/poleznaya-informasia" ? (
                                <span
                                    className="font-semibold text-gray-900 active:scale-95 transition-transform duration-150 ease-in-out cursor-default">Полезная информация</span>
                            ) : (
                                <Link href="/poleznaya-informasia"
                                      className="hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                                    Полезная информация
                                </Link>
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
                            className="header__bottom-right-btn relative overflow-hidden sm:w-max mdd:w-full text-[16px] lg:w-auto bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out z-50"
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
                            Получить консультацию
                        </button>


                        <div className="lg:hidden p-0 w-max">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Image width={1000} height={800} src="/burger.svg" alt="Menu"
                                       className="w-9 mdd:w-7 h-full"/>
                            </button>
                        </div>
                    </div>
                </div>
                {currentDate < discountEndDate && (
                    <div className="mdd:hidden px-[7%] bg-orange-500 text-lg font-medium text-white py-1.5 text-center">
                        <p><span className="font-bold text-blue-950 underline">АКЦИЯ до 31.07.2025!</span> Испанская
                            безличная виза - <span className="font-bold text-blue-950 underline">1600 BYN</span> (<span
                                className="line-through">1850 BYN</span>)</p>
                    </div>
                )}
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
                                <div className="fixed top-4 right-4">
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
                                                        .filter(c => ["viza-v-ssha", "viza-v-velikobritaniyu", "viza-v-kitaj"].includes(c.url))
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
                                        <Link href="/o-kompanii">О компании</Link>
                                    </motion.div>
                                    <motion.div variants={listItemVariants}>
                                        <Link href="/poleznaya-informasia">Полезная информация</Link>
                                    </motion.div>
                                    <motion.div variants={listItemVariants}>
                                        <Link href="/kontakty">Контакты</Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
                <TimeRestrictedBlock onVisibilityChange={onTimerestrictedChange}/>
            </header>
            {!isFloatingMenuOpen && !isMenuOpen && (
                <ScrollToTop showFloatingButton={showFloatingButton}/>
            )}
            {!isMenuOpen && (
                <div className={`fixed ${showFloatingButton ? "bottom-16" : "bottom-16"} right-7 z-50 md:hidden`}>
                    {/* Затемнение фона */}
                    <AnimatePresence>
                        {isFloatingMenuOpen && (
                            <>
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 0.5}}
                                    exit={{opacity: 0}}
                                    className="fixed inset-0 bg-black z-40"
                                    onClick={() => setIsFloatingMenuOpen(false)}
                                />
                                {/* Блокировка скролла */}
                                <style jsx global>{`
                                    body {
                                        overflow: hidden;
                                        position: relative;
                                        height: 100%;
                                        touch-action: none;
                                    }
                                `}</style>
                            </>
                        )}
                    </AnimatePresence>

                    <div className="relative">
                        {/* Анимированные волны вокруг кнопки */}
                        {!isFloatingMenuOpen && [0].map((i) => (
                            <motion.span
                                key={i}
                                className="absolute top-0 left-0 inset-0 w-12 h-12 rounded-full border-2 border-yellow-400 pointer-events-none"
                                initial={{scale: 1, opacity: 0.7}}
                                animate={{scale: 2, opacity: 0}}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                    delay: 1 + (i * 0.2),
                                    repeatDelay: 1,
                                }}
                            />
                        ))}

                        {/* Кнопка с анимацией иконки */}
                        <motion.button
                            onClick={() => setIsFloatingMenuOpen(!isFloatingMenuOpen)}
                            className="relative z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                            whileTap={{scale: 0.9}}
                        >
                            <AnimatePresence mode="wait">
                                {!isFloatingMenuOpen ? (
                                    <motion.img
                                        key="request-icon"
                                        src="/request.svg"
                                        alt="Контакты"
                                        className="w-12 h-12"
                                        initial={{rotate: 0}}
                                        animate={{rotate: 0}}
                                        exit={{rotate: 180, opacity: 0}}
                                        transition={{duration: 0.3}}
                                    />
                                ) : (
                                    <motion.span
                                        key="close-icon"
                                        initial={{rotate: -180, opacity: 0}}
                                        animate={{rotate: 0, opacity: 1}}
                                        exit={{rotate: 180, opacity: 0}}
                                        transition={{duration: 0.3}}
                                        className="text-2xl font-bold flex items-center justify-center w-full h-full"
                                    >
                                        ×
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            )}

            {/* Всплывающее меню контактов */}
            {/* Всплывающее меню */}
            <AnimatePresence>
                {isFloatingMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 20}}
                        transition={{duration: 0.3}}
                        className="fixed bottom-32 right-7 flex flex-col items-center gap-3 z-50 md:hidden"
                        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри меню
                    >
                        <motion.a
                            href="tel:+375296800620"
                            className="relative w-12 h-12 flex items-center justify-center"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <motion.span
                                className="absolute w-9 h-9 rounded-full bg-white"
                                style={{zIndex: 0}}
                            />
                            <img src="/fixed-call.svg" alt="Phone" className="w-12 h-12 z-10"/>
                        </motion.a>
                        <motion.a
                            href="viber://chat?number=%2B375293734870/"
                            className="relative w-12 h-12 flex items-center justify-center"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            style={{cursor: "pointer"}}
                            data-itc-calltracking="off"
                        >
                            {/* Белый фон (меньше основной иконки) */}
                            <motion.span
                                className="absolute w-9 h-9 rounded-full bg-white"
                                style={{zIndex: 0}}
                            />

                            {/* Сама иконка Viber (немного больше фона) */}
                            <img
                                src="/fixed-viber.svg"
                                alt="Viber"
                                className="relative w-12 h-12 z-10"
                                draggable="false"
                            />
                        </motion.a>
                        <motion.a
                            href="https://t.me/+375295648334"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            data-itc-calltracking="off"
                        >
                            <img src="/telegram.svg" alt="Telegram" className="w-12 h-12"/>
                        </motion.a>
                        <motion.a
                            href="https://wa.me/375257654320"
                            target="_blank"
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            data-itc-calltracking="off"
                        >
                            <img src="/whatsapp.svg" alt="WhatsApp" className="w-12 h-12"/>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
            {showFloatingButton && !isMenuOpen && (
                <div className="fixed bottom-3 w-full px-[7%] flex justify-center z-50">
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            openModal();
                        }}
                        className="relative overflow-hidden w-full bg-customBlue hover:bg-blue-500 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out md:hidden z-50"
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

                        Получить консультацию
                    </button>
                </div>
            )}
        </>
    );
};