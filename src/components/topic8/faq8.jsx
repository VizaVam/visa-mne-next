'use client'

import {useState} from "react";

import {useModal} from "@/components/modalcontext";

export const faqData = [
    {
        question: "Какие документы нужны для визы гостевой в Польшу для белорусов?",
        answer:`
            Основные: паспорт, фото, анкета, страховка, приглашение, финансовые доказательства. Для родственников — подтверждение родства. Полный список выше.
            `,
    },
    {
        question: "Сколько времени занимает оформление визы по приглашению?",
        answer: `
            Официально до 21 дня. В 2025 году рекомендуется подавать заранее из-за очередей.
        `,
    },
    {
        question: "Можно ли получить многократную визу по приглашению?",
        answer: `
            Да, если есть история поездок. Для первой — обычно однократная на срок приглашения.
        `,
    },
    {
        question: "Что делать, если приглашение не зарегистрировано?",
        answer: `
            Для Польши оно должно быть официальным. Без регистрации — высокий риск отказа. <b>Обратитесь в VISA VAM</b> за помощью в проверке.
        `,
    },
    {
        question: "Нужна ли справка с работы для гостевой визы?",
        answer: `
            Да, если вы покрываете расходы сами. Укажите должность, зарплату за 3 месяца.
        `,
    },
    {
        question: "Сколько стоит виза по приглашению для белорусов?",
        answer: `
            Консульский сбор — 35 евро для Шенгена. Плюс услуги визового центра (около 20 евро) и страховка.
        `,
    },
    {
        question: "Могут ли отказать в визе по приглашению?",
        answer: `
            Да, если документы неполные или есть сомнения в цели получения  визы. С <b>VISA VAM</b> риски минимальны благодаря 98% одобрению.
        `,
    },
    {
        question: "Как записаться на подачу документов?",
        answer: `
            Через сайт VFS Global или посольства. Мы в <b>VISA VAM</b> берем это на себя, обеспечивая быструю запись.
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
