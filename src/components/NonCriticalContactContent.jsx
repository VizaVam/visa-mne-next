import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Используем dynamic import вместо Suspense для лучшей оптимизации
const Discount = dynamic(() => import('@/components/discount'), {
    ssr: false,
    loading: () => <div className="py-8 text-center">Загрузка акций...</div>
});

const Contacts = dynamic(() => import('@/components/contacts'), {
    ssr: false,
    loading: () => <div className="py-8 text-center">Загрузка формы...</div>
});

const LegalInfo = dynamic(() => import('@/components/legal/LegalInfo'), {
    ssr: false,
    loading: () => <div className="py-8 text-center">Загрузка реквизитов...</div>
});

const NonCriticalContactContent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Загружаем некритический контент только после полной загрузки страницы
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div>
            <div className="mt-8">
                <Discount />
            </div>

            <div className="mt-16">
                <LegalInfo />
            </div>

            <div className="mt-16">
                <Contacts />
            </div>
        </div>
    );
};

export default NonCriticalContactContent;