import React, {useState} from "react";
import {faqDataByCountry} from "@/components/countriesPage";


const FAQ = ({countryUrl}) => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqData = faqDataByCountry[countryUrl] || [];

    const toggleFAQ = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    if (!faqData.length) return null;

    return (
        <div className="pt-32 mdd:pt-20 px-[7%]">
            <h2 className="text-[18px] md:text-[28px] sm:text-[22px] font-semibold mb-8 lg:mb-12">Часто задаваемые
                вопросы</h2>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.map((faq) => ({
                        "@type": "Question",
                        "name": `ВОПРОС: ${faq.question}`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `ОТВЕТ: ${faq.answer}`
                        }
                    }))
                }, null, 2)}
            </script>
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
                                dangerouslySetInnerHTML={{__html: faq.answer}}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;