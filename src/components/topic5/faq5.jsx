'use client'

import {useState} from "react";

export const faqData = [
    {
        question: "Что делать, если не удалось пройти верификацию с первого раза?",
        answer:`Не паникуйте. Проверьте самые частые причины неудачи: плохой свет, блики на паспорте, 
        нестабильный интернет. Попробуйте пройти процедуру еще раз через некоторое время, следуя всем инструкциям. 
        Если проблема сохраняется, возможно, стоит обратиться в техническую поддержку визового центра.
            `,
    },
    {
        question: "Можно ли пройти верификацию за другого человека?",
        answer: `
            Нет, это невозможно. Верификация — это процедура идентификации конкретного заявителя. 
            Система сравнивает живое фото с фото в паспорте, поэтому пройти ее может только владелец документа.
        `,
    },
    {
        question: "Требуется ли верификация для всех типов польских виз?",
        answer: `
            На данный момент верификация является стандартной процедурой для большинства типов виз, 
            запись на которые идет через VFS Global в Беларуси. Это касается как национальных, так и 
            шенгенских виз. Правила могут меняться, поэтому всегда уточняйте информацию на официальном сайте.
        `,
    },
    {
        question: "Верификация и подача документов — это одно и то же?",
        answer: `
            Нет. Верификация — это предварительный онлайн-шаг для получения доступа к записи. 
            Подача документов — это личный визит в визовый центр в назначенную дату с полным пакетом бумаг, 
            где вы также сдаете биометрические данные (отпечатки пальцев).
        `,
    },
    {
        question: "Сколько длится верификация?",
        answer: `
            Сам процесс занимает не более 5 минут.
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
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-12">Часто задаваемые вопросы (FAQ)</h2>
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
