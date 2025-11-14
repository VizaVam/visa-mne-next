'use client'

import {useState} from "react";

import {useModal} from "@/components/modalcontext";

export const faqData = [
    {
        question: "Что делать, если я получу отказ в визе? ",
        answer:`
            Не паникуйте. Прежде всего, нужно проанализировать причину отказа 
            (иногда ее указывают в сопроводительном письме). Возможно, не хватило 
            финансовых гарантий или была ошибка в <b>документах</b>. Вы можете подать апелляцию 
            (если это предусмотрено) или исправить ошибки и <b>подать документы</b> на <b>визу</b> заново.
            `,
    },
    {
        question: "Можно ли сделать визу самостоятельно, без агентств? ",
        answer: `
            Конечно. Ежегодно тысячи людей успешно <b>оформляют визы</b> сами. 
            Наш гид написан именно для этого. Однако <b>оформление</b> через 
            проверенное агентство экономит ваше время, минимизирует риск 
            ошибок из-за незнания нюансов и значительно повышает шансы 
            на одобрение.
        `,
    },
    {
        question: "За сколько времени до поездки нужно начинать оформление визы? ",
        answer: `
            Мы рекомендуем начинать процесс как минимум за 3-4 месяца до предполагаемой даты вылета. Это даст вам время на спокойный сбор <b>документов</b>, запись на подачу (иногда очередь растягивается на многие недели) и ожидание решения консульства.
        `,
    },
    {
        question: "Как делается виза для ребенка?",
        answer: `
            На ребенка <b>оформляется</b> отдельный пакет <b>документов</b>. 
            Помимо основного списка, потребуется свидетельство о рождении. 
            Если ребенок едет с одним из родителей, необходимо нотариально 
            заверенное согласие на выезд от второго родителя. Подробнее 
            можно ознакомиться в нашей статье - <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" 
            rel="noopener noreferrer" href="/poleznaya-informasia/viza-dlya-detey">Виза для ребенка: полное 
            руководство по документам и правилам</a>.
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
