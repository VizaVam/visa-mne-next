// components/country/parseText.js
import React from 'react';

export const parseText = (text) => {
    if (typeof text !== "string") return text || "";
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) =>
        index % 2 === 1 ? <b key={index}>{part}</b> : part
    );
};