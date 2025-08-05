'use client'

import React, { lazy, Suspense } from "react";
import dynamic from 'next/dynamic';

// Используем обычный импорт для критического контента
import CriticalContactContent from '@/components/CriticalContactContent';
import Breadcrumbs from '@/components/Breadcrumbs';

// Используем dynamic import для некритического контента
const NonCriticalContactContent = dynamic(() => import('@/components/NonCriticalContactContent'), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center py-16">
            <div className="animate-pulse space-y-8 w-full max-w-4xl px-[7%]">
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="h-64 bg-gray-200 rounded"></div>
            </div>
        </div>
    )
});

export default function ContactsPage({ breadcrumbs }) {
    return (
        <div>
            {/* Критический контент загружается сразу */}
            <CriticalContactContent breadcrumbs={breadcrumbs} Breadcrumbs={Breadcrumbs} />

            {/* Некритический контент загружается после */}
            <Suspense fallback={
                <div className="flex flex-col items-center py-16">
                    <div className="animate-pulse space-y-8 w-full max-w-4xl px-[7%]">
                        <div className="h-32 bg-gray-200 rounded"></div>
                        <div className="h-48 bg-gray-200 rounded"></div>
                        <div className="h-64 bg-gray-200 rounded"></div>
                    </div>
                </div>
            }>
                <NonCriticalContactContent />
            </Suspense>
        </div>
    );
}