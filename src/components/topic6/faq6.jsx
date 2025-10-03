'use client'

import {useState} from "react";

export const faqData = [
    {
        question: "Можно ли улыбаться на фото на визу?",
        answer:`
            На фотографии на визу нельзя широко улыбаться, выражение вашего лица должно быть нейтральным, с закрытым ртом.
            `,
    },
    {
        question: "Сколько времени действует фото на визу?",
        answer: `
            Консульства требуют актуальное фото, чтобы внешность на 
            снимке максимально соответствовала вашему текущему облику. 
            Поэтому фото должно быть не старше 6 месяцев с момента ее изготовления.
        `,
    },
    {
        question: "Можно ли фото на визу с паспорта?",
        answer: `
            Фотография с белорусского паспорта не подходит для Шенгенской визы, т.к. отличаются размеры и соотношения пропорций.
        `,
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
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
