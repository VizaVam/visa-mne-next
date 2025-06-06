import Image from "next/image";

const DocsGer = () => {
    return (
        <div className="bg-[#15419E] px-[7%] py-6">
            <div className="docs">
                {/* Left Side: Heading */}
                <h2 className="docs-left rounded-[4px]">
                    Основные документы
                </h2>

                {/* Right Side: Documents List */}
                <div className="docs-right rounded-[4px]">
                    {[
                        {title: "Паспорт", desc: "не старше десяти лет"},
                        {title: "Цветная фотография", desc: "размер: 3,5×4,5 см, матовая бумага"},
                        {title: "Документ о подтверждении образования (специального, общего)", desc: "при его наличии"},
                        {title: "Трудовая книжка"},
                    ].map((doc, index) => (
                        <div key={index} className="flex gap-3 items-center mb-3">
                            <Image width={24} height={24} className="w-6 h-6" src="/docs-check.png" alt=""/>
                            <div>
                                <p className="lg:text-xl">{doc.title}</p>
                                {doc.desc && <p className="text-[#CCCCCC] font-normal">{doc.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default DocsGer;
