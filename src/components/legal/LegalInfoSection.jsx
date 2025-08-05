import React from 'react';

const LegalInfoSection = ({ title, children }) => (
    <div className="mb-6">
        {title && <h3 className="font-semibold mb-2">{title}</h3>}
        <p className="text-[18px] mdd:text-[14px]">
            {children}
        </p>
    </div>
);

export default LegalInfoSection;