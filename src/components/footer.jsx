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
                    <div className={"footer__top-right-main"}>
                        <div className={"footer__top-right-main-left"}>
                            <h3>Визы</h3>
                        </div>
                        <div className={"footer__top-right-main-right"}>
                            <h3>Контакты</h3>
                            <div className={"footer__top-right-main-right-lists"}>
                                <div className={"footer__top-right-main-right-lists-list"}>
                                    <img src={"/footer-call.png"} alt={""}/>
                                    <div className={"flex flex-col"}>
                                        <a href={"tel:+375296800620"}>
                                            +375296800620
                                        </a>
                                        <a href={"tel:+375293734870"}>
                                            +375293734870
                                        </a>
                                    </div>
                                </div>
                                <div className={"footer__top-right-main-right-lists-list"}>
                                    <img src={"/footer-email.png"} alt={""}/>
                                    <div>
                                        <a href={"mailto:l336906097@gmail.com"}>
                                            info@visavam.by
                                        </a>
                                    </div>
                                </div>
                                <a href={"https://www.google.com/maps/place/%D0%92%D0%B8%D0%B7%D0%BE%D0%B2%D1%8B%D0%B9+%D0%A6%D0%B5%D0%BD%D1%82%D1%80+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.910344,27.544728,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbcf6dc479a1b9:0x20fc9ea41769ce82!8m2!3d53.910344!4d27.5473083!16s%2Fg%2F11hf27ckdt?entry=ttu"}
                                   className={"footer__top-right-main-right-lists-list"}>
                                    <img src={"/footer-location.png"} alt={""}/>
                                    <div>
                                        <p>Минск, пр. Победителей 17 офис 1204 (метро Немига)</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={"footer__top-right-socs"}>
                        <a
                            href="https://www.instagram.com/visavam.by/profilecard/?igsh=YnRwZGh4Y3Jld2pj"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={"/instagram.png"} alt={""}/>
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

            <div className={"footer__bottom"}>
                <a href={"https://drive.google.com/file/d/1TFDuPAQ8QYl6lE41Oyiy_U2dyVLgqDRb/view?usp=drive_link"}>
                    Публичная оферта
                </a>
            </div>
        </footer>
    );
};
