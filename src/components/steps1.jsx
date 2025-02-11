const Steps = () => {
    return (
        <div className="w-full px-[7%] lg:pb-24 lg:py-0 md:py-24 sm:py-24 mdd:py-24">
            <h2 className="mdd:text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 lg:mb-16">3 шага для получения визы</h2>

            {/* Контейнер шагов */}
            <div style={{margin: "0 auto"}}
                 className="flex flex-col max-w-[320px] lg:max-w-none lg:flex-row items-center lg:justify-center space-x-[-10px] lg:space-y-0 relative">
                {/* Step 1 */}
                <div
                    className="flex flex-col lg:rotate-[10deg] items-center justify-center text-center bg-[#FAFAFA] rounded-[2px] w-[50%] lg:w-60 md:w-48 py-8 relative self-start"
                    style={{
                        border: "1px solid #ECECEC",
                    }}
                >
                    <img
                        src="/step-1.svg"
                        alt="Заявка"
                        className="h-14 lg:h-20 rotate-[-9deg] lg:rotate-[-5deg]"
                    />
                    <p className="text-sm font-medium px-2 lg:px-0">Оформление<br/>заявки на сайте</p>
                </div>

                {/* Connector (скрываем на мобильных) */}
                <img
                    src="/curve-1.svg"
                    alt="Curve"
                    className="lg:block h-9 ml-6 relative top-[16%] z-[-1] rotate-[25deg] lg:rotate-0"
                />

                {/* Step 2 */}
                <div
                    className="flex flex-col items-center text-center bg-[#FAFAFA] rounded-[2px] lg:w-60 md:w-48 py-8 relative lg:left-[0] self-end"
                    style={{border: "1px solid #ECECEC"}}
                >
                    <img src="/step-2.svg" alt="Документы" className="h-14 lg:h-20"/>
                    <p className="text-sm font-medium px-6 lg:px-0">
            <span
                className="block lg:hidden">Проверка<br/>документов<br/>(в офисе/удаленно)</span> {/* Текст для телефона */}
                        <span className="hidden lg:block">
              Проверка документов<br/>(в офисе/удаленно)
            </span>
                    </p>
                </div>

                {/* Connector (скрываем на мобильных) */}
                <img
                    src="/curve-1.svg"
                    alt="Curve"
                    className="lg:block h-9 relative top-[54%] z-[-1] rotate-[-33deg] lg:rotate-180"
                />

                {/* Step 3 */}
                <div
                    className="flex flex-col lg:-rotate-[10deg] items-center justify-center text-center bg-[#FAFAFA] rounded-[2px] w-[50%] lg:w-60 md:w-48 py-8 relative self-start"
                    style={{
                        border: "1px solid #ECECEC",
                    }}
                >
                    <img
                        src="/step-3.svg"
                        alt="Одобрение"
                        className="h-14 lg:h-20"
                        style={{transform: "rotate(9deg)"}}
                    />
                    <p className="text-sm font-medium px-6 h-10 lg:px-0">Подача документов</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
