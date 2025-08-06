// components/country/SectionTitle.jsx
import React from 'react';

const SectionTitle = ({ title, className = "" }) => (
    title && <h2 className={`pt-20 mdd:pt-8 text-black text-[18px] md:text-[28px] sm:text-[22px] font-semibold ${className}`}>
        {title}
    </h2>
);

export default SectionTitle;