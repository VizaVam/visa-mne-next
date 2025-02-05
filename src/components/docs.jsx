const Docs = () => {
    return (
        <div className="bg-[#15419E] px-[7%] py-6">
            <div className="docs">
                {/* Left Side: Heading */}
                <h1 className="docs-left">
                    Основные документы
                </h1>

                {/* Right Side: Documents List */}
                <div className="docs-right">
                    {[
                        {title: "Паспорт", desc: "не старше десяти лет"},
                        {title: "Цветная фотография", desc: "размер: 3,5×4,5 см, матовая бумага"},
                        {title: "Справка с места работы", desc: "с зарплатой за 3 месяца"},
                        {title: "Выписка о состоянии счёта"},
                        {title: "Страховка"}
                    ].map((doc, index) => (
                        <div key={index} className="flex gap-3 items-center mb-3">
                            <img className="w-6 h-6" src="/docs-check.png" alt=""/>
                            <div>
                                <h2 className="text-xl">{doc.title}</h2>
                                {doc.desc && <p className="text-[#CCCCCC] font-normal">{doc.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Docs;
