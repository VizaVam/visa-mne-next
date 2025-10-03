'use client'

import {useState} from "react";

export const faqData = [
    {
        question: "Нужна ли отдельная виза для младенца?",
        answer:`
            Да, виза требуется для гражданина любого возраста, включая младенцев. На него подается такой же пакет документов, как и на любого другого несовершеннолетнего.
            `,
    },
    {
        question: "Нужно ли ребенку присутствовать при подаче документов?",
        answer: `
            Это зависит от страны. Для стран Шенгенской зоны дети до 12 лет освобождены от сдачи биометрии (отпечатков пальцев), и их присутствие обычно не требуется. Дети с 12 лет должны явиться в визовый центр лично для сдачи биометрии. Для <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" 
            rel="noopener noreferrer" href="/viza-v-ssha">визы в США</a> требуется личное присутствие всех заявителей, независимо от возраста.
        `,
    },
    {
        question: "Какое финансовое обеспечение нужно для визы ребенка?",
        answer: `
            Финансовые гарантии предоставляет спонсор, которым обычно выступает один из родителей. Для этого к пакету документов прикладывается спонсорское письмо в свободной форме, справка с места работы родителя с указанием зарплаты и выписка с банковского счета.
        `,
    },
    {
        question: "На какой срок дается согласие на выезд?",
        answer: `
            Согласие может быть оформлено как на одну конкретную поездку с указанием точных дат, так и на длительный период (например, на год или до совершеннолетия) с перечислением стран, которые ребенок может посетить. Для визы нужно согласие не старше 6 месяцев, где в перечислении стран посещения, первой будет - страна открытия визы. 
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
