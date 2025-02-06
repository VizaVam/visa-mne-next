'use client'

import { useState } from "react";
import Modal from "../components/Modal";

export default function Header({onOpenModal}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFloatingMenuOpen, setIsFloatingMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        onOpenModal();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
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
                        <img src={"/logoNew.png"} alt={""}/>
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
                    <button
                        onClick={() => {
                        onOpenModal();
                        setIsMenuOpen(false);}}
                        className={"header__bottom-right-btn"}
                    >
                        Оформить заявку
                    </button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </header>
    );
};