import Image from "next/image";

const Steps = () => {
    return (
        <div className="w-full px-[7%] pt-24 pb-16 mdd:pb-10">
            <h2 className="mdd:text-2xl sm:text-3xl lg:text-4xl font-medium mb-8 lg:mb-16">3 шага для получения визы</h2>

            {/* Контейнер шагов */}
            <div style={{margin: "0 auto"}}
                 className="flex flex-col max-w-[320px] lg:max-w-none lg:flex-row items-center lg:justify-center lg:space-y-0 relative">
                {/* Step 1 */}
                <div
                    className="flex flex-col lg:rotate-[10deg] items-center justify-center text-center bg-[#FAFAFA] rounded-[4px] w-[50%] lg:w-60 md:w-48 py-8 relative self-start lg:left-10"
                    style={{
                        border: "1px solid #ECECEC",
                    }}
                >
                    <Image
                        src="/step-1.svg"
                        alt="Заявка"
                        width={93}
                        height={94}
                        className="h-14 lg:h-20 rotate-[-9deg] lg:rotate-[-5deg]"
                    />
                    <p className="text-sm font-medium px-2 h-10 lg:px-0">Оформление<br/>заявки на сайте</p>
                </div>

                {/* Connector (скрываем на мобильных) */}
                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="lg:block mdd:h-9 ml-6 relative top-[16%] z-[-1] rotate-[25deg] lg:rotate-0 lg:left-2"
                />

                {/* Step 2 */}
                <div
                    className="flex flex-col items-center text-center bg-[#FAFAFA] rounded-[4px] lg:w-60 md:w-48 py-8 relative lg:left-[0] self-end"
                    style={{border: "1px solid #ECECEC"}}
                >
                    <Image src="/step-2.svg" alt="Документы" width={101} height={100} className="h-14 lg:h-20"/>
                    <p className="text-sm font-medium px-2 lg:px-0">
            <span
                className="block lg:hidden">Проверка<br/>документов<br/>(в офисе/удаленно)</span> {/* Текст для телефона */}
                        <span className="hidden lg:block">
              Проверка документов<br/>(в офисе/удаленно)
            </span>
                    </p>
                </div>

                {/* Connector (скрываем на мобильных) */}
                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="lg:block lg:h-12 mdd:h-9 relative top-[54%] z-[-1] rotate-[-33deg] lg:rotate-180 lg:right-2"
                />

                {/* Step 3 */}
                <div
                    className="flex flex-col lg:-rotate-[10deg] items-center justify-center text-center bg-[#FAFAFA] rounded-[4px] w-[50%] lg:w-60 md:w-48 py-8 relative self-start lg:right-4"
                    style={{
                        border: "1px solid #ECECEC",
                    }}
                >
                    <Image
                        src="/step-3.svg"
                        alt="Одобрение"
                        width={103}
                        height={103}
                        className="h-14 lg:h-20"
                        style={{transform: "rotate(9deg)"}}
                    />
                    <p className="text-sm font-medium px-2 h-10 lg:px-0">Подача документов</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
