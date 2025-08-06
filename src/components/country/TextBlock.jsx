// components/country/TextBlock.jsx
import React from 'react';

const TextBlock = ({ text, parseText, className = "" }) => (
    text && <p className={`text-black text-[14px] ${className}`}>
        {parseText(text)}
    </p>
);

export default TextBlock;