const Steps = () => {
    return (
        <div className="w-full px-[7%] py-32 flex flex-col">
            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-medium mb-16">
                3 шага для получения визы
            </h1>

            {/* Steps Container */}
            <div className="flex items-center justify-center gap-5">
                {/* Step 1 */}
                <div className="flex flex-col items-center justify-center bg-[#FAFAFA] rounded-[2px] w-56 h-56 text-lg font-medium shadow-md rotate-12 relative -right-12">
                    <img src="/step-1.png" alt="Step 1" className="w-20 h-20 mb-2"/>
                    <p className="text-center">Оформление<br/> заявки на сайте</p>
                </div>

                {/* Connector */}
                <img src="/step-12.png" alt="Connector" className="h-auto w-60 rotate-3 mb-12 relative -right-8 -z-10"/>

                {/* Step 2 */}
                <div className="flex flex-col items-center justify-center bg-[#FAFAFA] rounded-[2px] w-64 h-64 text-lg font-medium shadow-md relative">
                    <img src="/step-2.png" alt="Step 2" className="w-24  h-24 mb-2"/>
                    <p className="text-center">Проверка документов (офлайн/онлайн)</p>
                </div>

                {/* Connector */}
                <img src="/step-23.png" alt="Connector" className="h-auto w-60 rotate-3 mt-12 relative -z-10 -left-8"/>

                {/* Step 3 */}
                <div className="flex flex-col items-center justify-center bg-[#FAFAFA] rounded-[2px] w-56 h-56 text-lg font-medium shadow-md -rotate-12 relative -left-14">
                    <img src="/step-3.png" alt="Step 3" className="w-20 h-20 mb-2"/>
                    <p className="text-center">Подача на визу</p>
                </div>
            </div>
        </div>
    );
};

export default Steps;
