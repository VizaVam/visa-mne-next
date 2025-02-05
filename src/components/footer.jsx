export default function Footer(){
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
                    <div className={"footer__top-left-bottomtext"}>
                        <p>Пн-пт: с 09:00 до 19:00</p>
                        <p>Суббота c 10:00 до 14:00</p>
                        <p>Воскресенье: выходной</p>
                    </div>
                </div>
                <div className={"footer__top-right"}>
                    <div className={"footer__top-right-left"}>
                        <h3>Визы</h3>
                    </div>
                    <div className={"footer__top-right-right"}>
                        <h3>Контакты</h3>
                        <div className={"footer__top-right-right-lists"}>
                            <div className={"footer__top-right-right-lists-list"}>
                                <img src={"/footer-call.png"} alt={""}/>
                                <div>
                                    <p>+375296800620</p>
                                    <p>+375293734870</p>
                                </div>
                            </div>
                            <div className={"footer__top-right-right-lists-list"}>
                                <img src={"/footer-email.png"} alt={""}/>
                                <div>
                                    <p>info@visavam.by</p>
                                </div>
                            </div>
                            <div className={"footer__top-right-right-lists-list"}>
                                <img src={"/footer-location.png"} alt={""}/>
                                <div>
                                    <p>Минск, пр. Победителей 17 офис 1204 (метро Немига)</p>
                                </div>
                            </div>
                        </div>
                        <div className={"footer__top-right-right-socs"}>
                            <a
                                href="https://www.instagram.com/visavam.by/profilecard/?igsh=YnRwZGh4Y3Jld2pj"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={"/instagram.png"} alt={""} />
                            </a>
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
                        </div>
                    </div>
                </div>
            </div>

            <div className={"footer__bottom"}>
                <a>
                    Публичная оферта
                </a>
            </div>
        </footer>
    );
};
