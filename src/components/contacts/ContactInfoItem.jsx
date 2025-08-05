import React from 'react';
import Image from 'next/image';

const ContactInfoItem = ({ icon, alt, children }) => (
    <div className="flex gap-4 items-start">
        <Image
            src={icon}
            alt={alt}
            width={24}
            height={24}
            className="w-6 h-6"
        />
        <div className="flex-1">
            {children}
        </div>
    </div>
);

export default ContactInfoItem;