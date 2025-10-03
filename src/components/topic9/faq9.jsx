'use client'

import {useState} from "react";

import {useModal} from "@/components/modalcontext";

export const faqData = [
    {
        question: "Можно ли въехать в Китай по \"безвизу\" на 30 дней, а потом продлить пребывание на месте?",
        answer:`
            Нет, продлить безвизовое пребывание, находясь внутри страны, как правило, невозможно. Если вы планируете остаться дольше, необходимо заранее оформлять соответствующую визу в Беларуси.
            `,
    },
    {
        question: "Если я лечу транзитом через Китай, нужна ли мне виза?",
        answer: `
            Для граждан Беларуси при транзите виза не требуется, так как это покрывается безвизовым соглашением. Однако если ваш транзит предполагает пребывание в стране более 30 дней (что маловероятно), виза понадобится.
        `,
    },
    {
        question: "Я въехал в материковый Китай, могу ли я съездить в Гонконг и вернуться обратно по \"безвизу\"?",
        answer: `
            Да, можете. Каждая поездка из материкового Китая в Гонконг/Макао и обратно считается новым въездом. Главное, чтобы общая продолжительность всех ваших пребываний не превысила 90 дней в году.
        `,
    },
    {
        question: "Что будет, если пробыть в Китае больше 30 дней без визы?",
        answer: `
            Это является нарушением миграционного законодательства КНР. За это предусмотрены штрафы, возможное задержание, депортация и запрет на въезд в страну в будущем. Настоятельно не рекомендуется нарушать установленные сроки.
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
