// components/country/VariantsList.jsx
import React from 'react';
import Image from "next/image";

const VariantsList = ({ variants, parseText }) => (
    <ul className="text-black text-[14px] flex flex-col gap-2">
        {variants.map((variant, index) => (
            <li key={index} className="flex gap-2 items-center">
                <Image src="/check-0.png" alt="" width={16} height={16} className="w-4 h-4"/>
                <span>{parseText(variant)}</span>
            </li>
        ))}
    </ul>
);

export default VariantsList;