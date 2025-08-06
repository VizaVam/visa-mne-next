import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '@/components/modalcontext';

const CriticalContactContent = ({ breadcrumbs, Breadcrumbs }) => {
    const { openModal } = useModal();

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs}/>}

            <div className="flex flex-col items-center">
                {/* Header Section - только критический контент */}
                <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                    <div className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
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

                    {/* Только одно критическое изображение */}
                    <div className="w-full lg:flex items-center lg:mt-0 mdd:mt-[10%] mt-[20%] relative z-5">
                        <Image
                            src="/conc.png"
                            alt="Оформление виз с VisaVam.by – Легко и Доступно"
                            width={842}
                            height={802}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] mdd:-z-50 mdd:hidden"
                            unoptimized
                        />
                        <Image
                            src="/contactsbanner-f.png"
                            alt="Контакты VisaVam"
                            width={375}
                            height={554}
                            className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"
                            priority
                        />
                    </div>

                    {/* Кнопка консультации - критическая */}
                    <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[27%]">
                        <button
                            onClick={openModal}
                            className="w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-full shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
                        >
                            Получить консультацию
                        </button>
                    </div>
                </div>

                {/* Контактная информация - критическая */}
                <div className="w-full relative flex lg:flex-row sm:flex-col mdd:flex-col lg:gap-2 sm:gap-4 mdd:gap-20 justify-between px-[7%] pt-10">
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
                        <div className="flex gap-4 items-start">
                            <Image
                                src="/contacts-call-icon.png"
                                alt="Phone"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="flex-1">
                                <div className="flex flex-col">
                                    <a href="tel:+375296800620" className="text-[18px] mdd:text-[14px] underline hover:font-normal font-medium text-blue-500">
                                        +375296800620
                                    </a>
                                    <p className="font-normal text-[14px] mdd:text-[12px] text-[#808080]">
                                        Мобильный, Вайбер, Телеграм, Ватсап
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <Image
                                src="/contacts-email-icon.png"
                                alt="Email"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="flex-1">
                                <a href="mailto:info@visavam.by" className="text-[18px] mdd:text-[14px] underline hover:font-normal font-medium text-blue-500">
                                    info@visavam.by
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 items-start">
                            <Image
                                src="/contacts-location-icon.png"
                                alt="Location"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                            />
                            <div className="flex-1">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriticalContactContent;