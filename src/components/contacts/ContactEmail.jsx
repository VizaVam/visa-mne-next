import React from 'react';
import ContactInfoItem from './ContactInfoItem';

const ContactEmail = () => (
    <ContactInfoItem icon="/contacts-email-icon.png" alt="Email">
        <a href="mailto:info@visavam.by" className="text-[18px] mdd:text-[14px] underline hover:font-normal font-medium text-blue-500">
            info@visavam.by
        </a>
    </ContactInfoItem>
);

export default ContactEmail;