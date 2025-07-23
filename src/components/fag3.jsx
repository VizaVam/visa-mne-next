'use client'

import {useState} from "react";

export const faqData = [
    {
        question: "За какой срок до поездки лучше подавать документы на визу?",
        answer:
            "Мы рекомендуем начинать процесс оформления как минимум за 2-3 месяца до планируемой даты вылета.",
    },
    {
        question: "Какая сумма должна быть на банковском счете?",
        answer:
            "Рекомендуемая сумма – из расчета €50-70 на каждый день пребывания в Шенгенской зоне. Чем больше, тем лучше.",
    },
    {
        question: "Могу ли я получить многократную визу, если у меня \"чистый\" паспорт?",
        answer:
            "Решение о выдаче многократной визы всегда остается на усмотрение консула. Однако, при правильно собранном пакете документов и убедительном обосновании необходимости частых поездок, шансы на получение мультивизы возрастают.",
    },
    {
        question: "Что делать, если я получил отказ в визе?",
        answer:
            "В случае отказа важно понять его причину. Наше агентство поможет проанализировать ситуацию, исправить ошибки и, при необходимости, подготовить документы для повторной подачи или апелляции. Обратившись к нам, вы можете воспользоваться нашей гарантией возврата средств.",
    },
    {
        question: "Можно ли сделать шенген визу через агентство?",
        answer:
            "Да, и это даже выгоднее — экономия времени, гарантия результата и помощь в оформлении.",
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
