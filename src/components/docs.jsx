import Image from "next/image";

const Docs = () => {
        const documentLists = {
            "/": {
                heading: "Список необходимых документов в 2025 году",
                documents: [
                    {title: "Заполненная анкета", desc: ""},
                    {title: "Брони отелей и билетов на транспорт/официальное приглашение", desc: ""},
                    {
                        title: "Паспорт",
                        desc: "не старше 10 лет, действителен 3 и более месяцев после окончания визы, минимум 2 чистые страницы"
                    },
                    {title: "Цветная фотография", desc: "размер: 3,5×4,5 см, матовая бумага"},
                    {title: "Справка с места работы", desc: "с зарплатой за 3 месяца"},
                    {title: "Выписка о состоянии счёта", desc: "за последние 3 месяца"},
                    {title: "Спонсорское письмо", desc: "по необходимости"},
                    {title: "Страховка", desc: "Поможем подобрать оптимальную"},
                ],
                additional: [
                    {
                        title: "Дополнительно: для несовершеннолетних", subItems: [
                            {title: "Свидетельство о рождении", desc: ""},
                            {title: "Согласие родителей", desc: "заверенное нотариусом"},
                            {title: "Копии паспортов родителей", desc: ""},
                            {title: "Страховка", desc: ""},
                        ]
                    }
                ]
            }
        }

        return (
            <div className="bg-[#15419E] px-[7%] py-6">
                <div className="docs flex flex-col md:flex-row">
                    {/* Left Side: Heading */}
                    <h2 className="docs-left bg-[#DDE5F5] text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold p-2 rounded-[4px] mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
                        {documentLists["/"].heading}
                    </h2>

                    {/* Right Side: Documents List */}
                    <div className="docs-right bg-[#DDE5F5] p-4 rounded-[4px] w-full">
                        {documentLists["/"].documents.map((doc, index) => (
                            <div key={index} className="flex gap-2 items-center mb-2">
                                <Image width={24} height={24} className="w-6 h-6" src="/docs-check.png" alt=""/>
                                <div>
                                    <p className="lg:text-xl">{doc.title}</p>
                                    {doc.desc && <p className="text-[#CCCCCC] font-normal mdd:text-xs">{doc.desc}</p>}
                                </div>
                            </div>
                        ))}
                        {documentLists["/"].additional.length > 0 && (
                            <div className="">
                                {documentLists["/"].additional.map((item, idx) => (
                                    <div key={idx} className="mb-2">
                                        <p className="lg:text-xl my-3">{item.title}</p>
                                        {item.subItems && item.subItems.map((subItem, subIdx) => (
                                            <div key={subIdx} className="flex gap-2 items-center mb-2">
                                                <Image width={24} height={24} className="w-6 h-6" src="/docs-check.png" alt=""/>
                                                <div>
                                                    <p className="lg:text-xl">{subItem.title}</p>
                                                    {subItem.desc && <p className="text-[#CCCCCC] font-normal">{subItem.desc}</p>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        )
            ;
    }
;

export default Docs;
