'use client'

import {useState} from "react";

import {useModal} from "@/components/modalcontext";

export const faqData = [
    {
        question: "Сколько делается виза?",
        answer:`
            Сроки рассмотрения документов на визу зависят от страны и типа визы. В среднем, шенгенская виза рассматривается от 15 до 45 календарных дней. Однако в пиковые сезоны или для отдельных стран этот период может быть увеличен. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/skolko-delaetsya-viza">Подробнее...</a>
            `,
    },
    {
        question: "Причины отказа в визе",
        answer: `
            Отказ в визе чаще всего связан с сомнениями консула в цели вашей поездки или в вашем намерении вернуться на родину. Также причинами могут быть неполный пакет документов, недостаточные финансовые гарантии или предыдущие нарушения визового режима. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/prichiny-otkaza-v-vize">Подробнее...</a>
            `,
    },
    {
        question: "Правило первого въезда в страны шенгенской зоны",
        answer: `
            «Правило первого въезда» — это упрощенное понятие. Важнее «правило основной страны пребывания»: визу нужно запрашивать у той страны, где вы планируете провести больше всего времени. Въезжать при этом можно через любую страну Шенгена, но нужно быть готовым объяснить свой маршрут. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/pravilo-pervogo-vezda-shengen">Подробнее...</a>
            `,
    },
    {
        question: "Какие бывают типы визы?",
        answer: `
            Визы делятся на несколько типов в зависимости от цели и длительности поездки. Самые распространенные — 
            это краткосрочная шенгенская виза (тип C) для туризма или деловых поездок и 
            долгосрочная национальная виза (тип D) для учебы или работы. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/kakie-byvayut-tipy-viz">Подробнее...</a>
        `,
    },
    {
        question: "Какие страны не выдают визы белорусам?",
        answer: `
            На данный момент (август 2025 года) ряд стран ЕС существенно ограничил или полностью приостановил 
            выдачу туристических виз гражданам Беларуси. Среди них Чехия, Латвия, Литва, 
            Эстония, Польша и Финляндия. Условия могут меняться, поэтому важно проверять 
            актуальную информацию перед 
            подачей документов. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/strany-ne-vydayut-vizy-belorusam">Подробнее...</a>
        `,
    },
    {
        question: "Что нужно для визы?",
        answer: `
            Базовый пакет документов на шенгенскую визу включает паспорт, фото, медицинскую страховку, 
            анкету и подтверждение цели поездки. Также требуются финансовые гарантии и справки, 
            подтверждающие вашу связь с родиной. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/chto-nuzhno-dlya-vizy">Подробнее...</a>
        `,
    },
    {
        question: "Что значит 90 дней на шенгенской визе?",
        answer: `
            Это означает, что вы можете находиться в странах 
            Шенгенского соглашения не более 90 дней в течение 
            любого 180-дневного периода. Этот период является «плавающим» 
            и отсчитывается назад от каждого дня вашего пребывания. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/90-dnej-na-shengenskoj-vize">Подробнее...</a>
        `,
    },
    {
        question: "Сколько денег надо иметь на счету для получения шенгенской визы?",
        answer: `
            Единой фиксированной суммы нет, она зависит от страны назначения 
            и продолжительности поездки. В среднем, консульства ориентируются 
            на сумму от 65 до 100 евро на каждый день пребывания, не считая 
            стоимости жилья и билетов. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/skolko-deneg-na-schetu-dlya-vizy">Подробнее...</a>
        `,
    },
    {
        question: "В чем разница между визами C и D?",
        answer: `
            Виза типа C (шенгенская) — краткосрочная, для туризма и поездок до 90 дней. 
            Виза типа D (национальная) — долгосрочная, выдается для пребывания в одной 
            стране более 90 дней с целью учебы, работы или воссоединения семьи и является 
            первым шагом к получению вида на жительство. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/raznica-mezhdu-vizami-c-i-d">Подробнее...</a>
        `,
    },
    {
        question: "Какие страны входят в шенген?",
        answer: `
            В Шенгенскую зону входят 29 стран, отменивших пограничный контроль 
            между собой. Среди них большинство стран ЕС (например, Германия, 
            Франция, Италия, Испания), а также Швейцария, Норвегия, Исландия 
            и Лихтенштейн. <a class="underline cursor-pointer hover:font-normal font-medium text-blue-500"
            rel="noopener noreferrer" href="/poleznaya-informasia/kakie-strany-vhodyat-v-shengen">Подробнее...</a>
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
        <div>
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
