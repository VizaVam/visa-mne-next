// components/country/VisaTypeButtons.jsx
import React from 'react';
import Link from "next/link";

const VisaTypeButtons = ({types, links, enabled}) => (
    <>
        {types.map((text, index) => (
            <div key={index} className="flex flex-col items-start">
                {enabled[index] ? (
                    <Link
                        href={`/shengenskie-vizy/${links[index]}`}
                        className="sm:w-full mdd:w-full text-[14px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] hover:bg-blue-600 active:scale-95 transition-transform duration-150 ease-in-out"
                    >
                        {text}
                    </Link>
                ) : (
                    <div
                        className="sm:w-full mdd:w-full text-[14px] text-center lg:w-72 bg-customBlue text-white py-3 px-8 rounded-full cursor-not-allowed pointer-events-none select-none">
                        {text}
                    </div>
                )}
            </div>
        ))}
    </>
);

export default VisaTypeButtons;