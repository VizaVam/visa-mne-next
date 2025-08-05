import React from 'react';
import ContactInfoItem from './ContactInfoItem';

const ContactAddress = () => (
    <ContactInfoItem icon="/contacts-location-icon.png" alt="Location">
        <div className="flex flex-col gap-4">
            <p className="text-[18px] mdd:text-[14px] font-medium">
                Минск, пр. Победителей 17 офис 1204 (метро Немига)
            </p>
            <a
                href="https://www.google.com/maps/place/Visa+Vam/@53.910344  ,27.5447334,17z/data=!3m1!4b1!4m6!3m5!1s0x46dbcfe91ef014a9:0xa6163600e41617e9!8m2!3d53.910344!4d27.5473083!16s%2Fg%2F11x1ym4kj8?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:font-normal font-medium text-blue-500"
            >
                Google maps
            </a>
            <div className="text-[18px] mdd:text-[14px] font-medium">
                <p>Пн-пт: с 09:00 до 19:00</p>
                <p>Суббота c 10:00 до 14:00</p>
                <p>Воскресенье: выходной</p>
            </div>
        </div>
    </ContactInfoItem>
);

export default ContactAddress;