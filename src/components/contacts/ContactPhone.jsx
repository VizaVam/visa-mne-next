import React from 'react';
import ContactInfoItem from './ContactInfoItem';

const ContactPhone = () => (
    <ContactInfoItem icon="/contacts-call-icon.png" alt="Phone">
        <div className="flex flex-col">
            <a href="tel:+375296800620" className="text-[18px] mdd:text-[14px] underline hover:font-normal font-medium text-blue-500">
                +375296800620
            </a>
            <p className="font-normal text-[14px] mdd:text-[12px] text-[#808080]">
                Мобильный, Вайбер, Телеграм, Ватсап
            </p>
        </div>
    </ContactInfoItem>
);

export default ContactPhone;