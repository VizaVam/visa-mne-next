'use client'

import {useState} from "react";

import {useModal} from "@/components/modalcontext";

export const faqData = [
    {
        question: "Сколько времени занимает оформление рабочей визы?",
        answer:`
            Общий срок зависит от нескольких факторов: страны назначения, скорости подготовки документов и загруженности консульства. В среднем, только рассмотрение документов занимает от 7 до 45 рабочих дней. Мы рекомендуем начинать процесс как минимум за 2-3 месяца до предполагаемой даты выезда, чтобы все успеть без спешки.
            `,
    },
    {
        question: "Могу ли я взять с собой семью по своей рабочей визе?",
        answer: `
            Ваша рабочая виза выдается только вам как основному заявителю. Однако после того как вы устроитесь на месте, во многих странах можно запустить процедуру воссоединения семьи. Это отдельный процесс со своим пакетом документов. Наши специалисты могут проконсультировать вас и по этому вопросу.
        `,
    },
    {
        question: "Что делать, если я получу отказ? Можно ли подаваться снова?",
        answer: `
            Отказ - это не окончательное решение. Да, подавать документы повторно можно. Самое главное - проанализировать причину отказа, исправить все ошибки и подготовить более сильный пакет документов.
        `,
    },
    {
        question: "Обязательно ли приезжать в ваш офис в Минске для оформления?",
        answer: `
            Совсем не обязательно! Мы работаем с клиентами по всей Беларуси и ценим ваше время. Большинство вопросов можно решить дистанционно: консультации проводятся по телефону или в мессенджерах, а документы можно отправить курьерской службой. Мы выстроили процесс так, чтобы он был удобен для каждого.
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
