'use client'

import {useState} from "react";

const faqData = [
    {
        question: "Нужна ли виза в Польшу для белорусов?",
        answer:
            "Да, гражданам Беларуси требуется виза для въезда в Польшу.",
    },
    {
        question: "Какие документы нужны для визы в Польшу?",
        answer:
            "Основные документы: паспорт, анкета, фото, копия паспорта, медицинская страховка, подтверждение цели поездки и финансовое обеспечение.",
    },
    {
        question: "Где подавать документы на визу в Польшу из Беларуси?",
        answer:
            "Документы можно подать лично в Посольство Польши в Минске или в визовом центре VFS Global — в Минске, Бресте, Гродно, Могилеве и других крупных городах. А также через услуги визовых агентств по подготовке пакета документов.",
    },
    {
        question: "Сколько стоит виза в Польшу для белорусов?",
        answer:
            "Стоимость стандартной шенгенской визы для взрослых — 35 евро. Для детей до 12 лет — бесплатно.",
    },
    {
        question: "Сколько делается виза в Польшу?",
        answer:
            "Рассмотрение заявления в Консульстве оформление занимает до 21 календарного дня. В некоторых случаях срок может быть увеличен. Сам процесс получения визы длительный (может доходить до нескольких месяцев) из-за небольшого количества мест, выдаваемых Консульством для визита в Визовые центры Польши.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="pt-32 mdd:pt-20 px-[7%]">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-12">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="mdd:text-[16px] text-[16px] border rounded-[30px] mdd:rounded-[55px]">
                        <button
                            className="flex justify-between items-center w-full bg-orange-500 rounded-full text-white py-4 px-6 font-medium text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>В: {faq.question}</span>
                            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 rotate-icon ${openIndex === index ? "open" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
                        </button>
                        {openIndex === index && (
                            <div
                                className="mdd:text-[16px] text-[16px] bg-white rounded-full py-4 px-6 text-gray-700"
                                dangerouslySetInnerHTML={{__html: faq.answer}}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
