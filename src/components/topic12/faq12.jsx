'use client'

import {useState} from "react";

import {useModal} from "@/components/modalcontext";

export const faqData = [
    {
        question: "Можно ли оформить студенческую визу без приглашения от университета? ",
        answer:`
            Нет - здесь без альтернатив. Должны быть конкретные документы о вашем поступлении/зачислении.
            `,
    },
    {
        question: "Как понять сумму денег “на счету” для визы?  ",
        answer: `
            Это зависит от страны назначения. Обычно требуется подтверждение расходов на проживание и учебу. Например, в Европе это от 400 до 1000 евро в месяц.
        `,
    },
    {
        question: "Дадут ли разрешение работать во время учёбы?  ",
        answer: `
           Часто да! Но лимитировано по часам (например, до 20 часов/неделю). Условия уточняйте для своей страны заранее!
        `,
    },
    {
        question: "Что делать после отказа?",
        answer: `
            Анализировать ошибки! Можно подавать заново исправленный пакет документов. Мы регулярно помогаем разобрать сложные случаи и исправить упущения прошлого раза. Обращайтесь!
        `,
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    const {openModal} = useModal();
    
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
