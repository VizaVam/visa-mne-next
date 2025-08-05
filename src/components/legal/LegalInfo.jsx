import React from 'react';
import LegalInfoSection from './LegalInfoSection';

const LegalInfo = () => (
    <div className="w-full relative flex flex-col gap-6 px-[7%] pt-16 text-[18px] mdd:text-[14px]">
        <LegalInfoSection title="">
            Общество с ограниченной ответственностью "Визовый Сервис"<br/>
            УНП 193637145<br/>
            Гос. регистрация N 193637145 от 22.07.2022 Минский горисполком
        </LegalInfoSection>
        <LegalInfoSection title="Юридический адрес:">
            РЕСПУБЛИКА БЕЛАРУСЬ; , г. Минск, 220004, пр. Победителей, д. 17, оф. 1204<br/>
            Директор Андронова Ядвига Казимировна
        </LegalInfoSection>
        <LegalInfoSection title="Банковские реквизиты:">
            БИК банка<br/>
            UNBSBY2X<br/>
            IBAN<br/>
            BY53 UNBS 3012 1603 7000 0000 1933<br/>
            Банк ЗАО "БСБ Банк"
        </LegalInfoSection>
    </div>
);

export default LegalInfo;