'use client'

import {useState} from "react";

export const faqData = [
    {
        question: "В какие страны Шенгена белорусам сейчас проще всего получить визу?",
        answer:`Ситуация постоянно меняется, но традиционно более лояльными к туристам из Беларуси 
            считаются визовые центры Греции, Испании и Италии. Однако \"проще\" не означает гарантированно. 
            Важно предоставить полный и корректный пакет документов, подтверждающий вашу цель поездки и финансовую состоятельность.
            `,
    },
    {
        question: "Нужна ли виза в Турцию или Египет?",
        answer: `
            Нет, для туристических поездок виза заранее не нужна. 
            В <b>Турцию</b> белорусы могут въезжать без визы на срок до 30 дней. 
            В <b>Египте</b> виза оформляется по прибытии в аэропорт и является платной (обычно около $25).
        `,
    },
    {
        question: "Куда лучше поехать с детьми без визы?",
        answer: `
            Для семейного отдыха отлично подходят <b>Турция</b> с ее концепцией "все включено" и детской анимацией, 
            <b>Черногория</b> с мягким климатом и чистым Адриатическим морем, а также <b>Грузия</b>, где можно совместить 
            отдых на пляже в Батуми с интересными экскурсиями.
        `,
    },
    {
        question: "Можно ли сейчас поехать в Европу на машине?",
        answer: `
            Да, но есть нюансы. Необходимо иметь действующую шенгенскую визу, международный страховой полис на автомобиль.
        `,
    },
    {
        question: "Сколько денег нужно показывать на счету для шенгенской визы?",
        answer: `
            Точной универсальной суммы нет, она зависит от страны и продолжительности поездки. 
            Общее правило — у вас должно быть достаточно средств для покрытия расходов на проживание, 
            питание и прочие нужды. Консульства обычно ориентируются на сумму <b>от 50 до 100 евро на человека в сутки</b>. 
            Выписка с банковского счета за последние 3-6 месяцев является обязательным документом.
        `,
    },
    {
        question: "Что делать, если в визе отказали?",
        answer: `
            Не отчаивайтесь! Мы помогаем анализировать причину отказа и подавать апелляцию или повторную 
            заявку с улучшенным пакетом документов. Какие ошибки приводят к отказу в визе вы можете узнать из 
            <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500" target="_blank" 
            rel="noopener noreferrer" href="/poleznaya-informasia/top-5-oshibok-pri-podache-na-rabochiu-vizu">статьи</a>.
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
