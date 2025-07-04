import Image from "next/image";

const NewSteps = () => {
    return (
        <div className="w-full px-[7%] pb-16 mdd:pb-10 md:h-[1150px]">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-2">Шаги для получения визы</h2>
            <p className="mdd:w-full w-[60%] mdd:text-[16px] sm:text-[20px] md:text-[20px] lg:text-[20px] mb-8 lg:mb-16">
                <span className="mdd:text-[16px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-black font-bold">Внимание!</span>
                {" "}
                В зависимости от выбранного пакета перечень оказываемых услуг и этапы оформления могут меняться.
            </p>

            <div className="md:relative md:h-[550px] h-full sm:flex mdd:flex flex-col gap-4">
                <div className="flex flex-row items-center gap-8 bg-gray-100 border-gray-200 shadow-md rounded-lg px-8 py-4 mdd:px-4 mdd:py-2 md:w-[47%] md:absolute start-0">
                    <Image src={"/garden_call-in-26.svg"} alt={"/Phone"} width={400} height={400} className={"w-28 mdd:w-16"} />
                    <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Связываетесь с нами по телефону, через мессенджер/онлайн-заявку</p>
                </div>

                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="mdd:hidden h-10 mdd:h-9 absolute top-[16%] z-[-1] rotate-[25deg] lg:rotate-[30deg] lg:left-[43%]"
                />

                <div className="flex flex-row items-center gap-8 bg-gray-100 border-gray-200 shadow-md rounded-lg px-8 py-4 mdd:px-4 mdd:py-2 md:w-[47%] md:absolute end-0 top-[25%]">
                    <Image src={"/game-icons_shaking-hands.svg"} alt={"/HandShaking"} width={400} height={400} className={"w-28 mdd:w-16"} />
                    <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Получаете бесплатную консультацию от специалиста</p>
                </div>

                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="mdd:hidden h-10 mdd:h-9 absolute top-[40%] z-[-1] rotate-[25deg] lg:-rotate-[30deg] lg:left-[40%]"
                />

                <div className="flex flex-row items-center gap-8 bg-gray-100 border-gray-200 shadow-md rounded-lg px-8 py-4 mdd:px-4 mdd:py-2 md:w-[47%] md:absolute start-0 top-[50%]">
                    <Image src={"/famicons_documents-sharp.svg"} alt={"/Documents"} width={400} height={400} className={"w-28 mdd:w-16"} />
                    <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Предоставляете необходимые от Вас документы</p>
                </div>

                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="mdd:hidden h-10 mdd:h-9 absolute top-[65%] z-[-1] rotate-[25deg] lg:rotate-[25deg] lg:left-[43%]"
                />

                <div className="flex flex-row items-center gap-8 bg-gray-100 border-gray-200 shadow-md rounded-lg px-8 py-4 mdd:px-4 mdd:py-2 md:w-[47%] md:absolute end-0 top-[75%]">
                    <Image src={"/clarity_form-line.svg"} alt={"/Form"} width={400} height={400} className={"w-28 mdd:w-16"} />
                    <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Мы подготавливаем и проверяем документы, выдаем Вам <span className={"font-bold"}>готовый пакет документов и записываем Вас на подачу визового заявления</span></p>
                </div>

                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="mdd:hidden h-10 mdd:h-9 absolute top-[90%] z-[-1] rotate-[25deg] lg:-rotate-[30deg] lg:left-[40%]"
                />

                <div className="flex flex-row items-center gap-8 bg-gray-100 border-gray-200 shadow-md rounded-lg px-8 py-4 mdd:px-4 mdd:py-2 md:w-[47%] md:absolute start-0 top-[100%]">
                    <Image src={"/fluent-mdl2_date-time.svg"} alt={"/DateTime"} width={400} height={400} className={"w-28 mdd:w-16"} />
                    <div className={"flex flex-col"}>
                        <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Вы лично подаете документы в посольство/ВЦ</p>
                        <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Для некоторых виз возможна безличная подача, если ранее
                            вы сдавали отпечатки пальцев</p>
                    </div>
                </div>

                <Image
                    src="/curve-1.svg"
                    alt="Curve"
                    width={230}
                    height={48}
                    className="mdd:hidden h-10 mdd:h-9 absolute top-[118%] z-[-1] rotate-[25deg] lg:rotate-[25deg] lg:left-[43%]"
                />

                <div className="flex flex-row items-center gap-8 bg-gray-100 border-gray-200 shadow-md rounded-lg px-8 py-4 mdd:px-4 mdd:py-2 md:w-[47%] md:absolute end-0 top-[130%]">
                    <Image src={"/wpf_approval.svg"} alt={"/Approval"} width={400} height={400} className={"w-28 mdd:w-16"} />
                    <p className={"lg:text-[18px] md:text-[16px] sm:text-[14px] mdd:text-[14px]"}>Вы лично забираете паспорт c готовой визой из посольства/ВЦ или заказываете курьерскую доставку</p>
                </div>
            </div>
        </div>
    );
};

export default NewSteps;
