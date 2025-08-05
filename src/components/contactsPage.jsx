'use client'

import React, { Suspense, lazy } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";

// Lazy-loaded UI components
const RippleButton = lazy(() => import("@/components/ui/RippleButton"));

// Lazy-loaded contact components
const ContactPhone = lazy(() => import("@/components/contacts/ContactPhone"));
const ContactEmail = lazy(() => import("@/components/contacts/ContactEmail"));
const ContactAddress = lazy(() => import("@/components/contacts/ContactAddress"));

// Lazy-loaded sections
const LegalInfo = lazy(() => import("@/components/legal/LegalInfo"));
const Contacts = lazy(() => import("@/components/contacts"));
const Discount = lazy(() => import("@/components/discount"));

export default function ContactsPage({ breadcrumbs }) {
    const { openModal } = useModal();

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            <div className="flex flex-col items-center">
                {/* Header Section */}
                <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                    <div
                        className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                        <nav className="mb-4 mdd:text-xs flex items-center space-x-2 text-gray-600 gap-2">
                            <Link href="/"
                                  className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out">
                                Главная
                            </Link>
                            <Image src="/nav-icon.png" alt="" width={8} height={8} className="w-2"/>
                            <span className="font-semibold text-gray-900 cursor-default">Контакты</span>
                        </nav>
                        <h1 className="ht:text-[40px] lg:text-[40px] md:text-[40px] sm:text-[34px] mdd:text-[28px] font-semibold text-black">
                            КОНТАКТЫ
                        </h1>
                    </div>

                    <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[10%] mt-[20%] relative z-5">
                        <Image
                            src="/conc.png"
                            alt="Оформление виз с VisaVam.by – Легко и Доступно"
                            width={1000}
                            height={1000}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] mdd:hidden"
                            unoptimized
                        />
                        <Image
                            src="/contactsbanner-f.svg"
                            alt="Контакты VisaVam"
                            width={800}
                            height={600}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"
                            priority
                        />
                    </div>

                    <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[27%]">
                        <Suspense fallback={<div>Загрузка кнопки...</div>}>
                            <RippleButton onClick={openModal}>
                                Получить консультацию
                            </RippleButton>
                        </Suspense>
                    </div>
                </div>

                <Suspense fallback={<div>Loading Discount...</div>}>
                    <Discount/>
                </Suspense>

                {/* Contact Info Section */}
                <div
                    className="w-full relative flex lg:flex-row sm:flex-col mdd:flex-col lg:gap-2 sm:gap-4 mdd:gap-20 justify-between px-[7%] pt-10">
                    <div className="w-full lg:flex items-center lg:mt-0 relative z-5">
                        <Image
                            src="/contacts-banner-2.png"
                            alt="Наш офис"
                            width={742}
                            height={329}
                            className="relative lg:h-[100%]"
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <Suspense fallback={<div>Загрузка телефона...</div>}>
                            <ContactPhone/>
                        </Suspense>
                        <Suspense fallback={<div>Загрузка email...</div>}>
                            <ContactEmail/>
                        </Suspense>
                        <Suspense fallback={<div>Загрузка адреса...</div>}>
                            <ContactAddress/>
                        </Suspense>
                    </div>
                </div>

                <Suspense fallback={<div>Загрузка реквизитов...</div>}>
                    <LegalInfo/>
                </Suspense>

                <Suspense fallback={<div>Loading Contacts...</div>}>
                    <Contacts/>
                </Suspense>
            </div>
        </div>
    );
}