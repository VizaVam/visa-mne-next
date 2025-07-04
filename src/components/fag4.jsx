'use client'

import {useState} from "react";

const faqData = [
    {
        question: "Могу ли я подать апелляцию в случае отказа в рабочей визе?",
        answer:
            "Да, процедура апелляции возможна, но это сложный и длительный процесс. Гораздо эффективнее изначально подать безупречный пакет документов, чтобы минимизировать риск отказа.",
    },
    {
        question: "Что делать, если мой диплом не совсем подходит под вакансию, но у меня большой опыт?",
        answer:
            "В этом случае критически важно предоставить подробное резюме, рекомендательные письма с предыдущих мест работы и мотивационное письмо, где вы подробно объясняете, как ваш опыт компенсирует формальное несоответствие образования. Наше агентство поможет правильно составить такие документы.",
    },
    {
        question: "Обязательно ли показывать недвижимость в Беларуси?",
        answer:
            "Это не обязательное, но очень весомое доказательство ваших намерений вернуться на Родину , которое значительно повышает доверие со стороны консульства. Если такая возможность есть, ею обязательно стоит воспользоваться.",
    },
    {
        question: "Можно ли продлить рабочую визу за границей?",
        answer:
            "Нет. Вы можете находиться законно на территории получения визы при ожидании вида на жительства и разрешения местных органов.",
    },
    {
        question: "Нужно ли мне лично подавать документы?",
        answer:
            `Да, обычно требуется личное присутствие, но в некоторых случаях можно через доверенное лицо или <span class="font-bold">визовое агентство.</span>`,
    },
    {
        question: "Есть ли скидки для семей или групп?",
        answer:
            "Да! Мы предлагаем скидку 11% семьям из 3 человек.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <div className="pt-32 mdd:pt-20 px-[7%]">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-12">FAQ: Коротко о главном</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="mdd:text-[16px] text-[16px] border  rounded-[4px]">
                        <button
                            className="flex justify-between items-center w-full bg-orange-500 text-white py-4 px-6 font-medium text-left focus:outline-none"
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
                                className="mdd:text-[16px] text-[16px] bg-white rounded-[4px] py-4 px-6 text-gray-700"
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
