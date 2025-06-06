'use client'

import { memo } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Docs from "@/components/docs";
import Reviews from "@/components/reviews";
import Fag from "@/components/fag";
import Contacts from "@/components/contacts";
import Steps from "@/components/steps";
import Serviceson from "@/components/serviceson";
import { useModal } from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhoneForm from "@/components/newModal";

const RippleButton = memo(({ onClick, children }) => (
    <button
        onClick={onClick}
        className="bbbt relative overflow-hidden w-full bg-customBlue hover:bg-blue-600 text-white py-3 rounded-[4px] shadow-[0_2px_4px_-2px_rgba(0,122,255,0.8)] active:scale-95 transition-transform duration-150 ease-in-out"
    >
        {[0, 1, 2].map((i) => (
            <motion.span
                key={i}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1.5 }}
                animate={{ scale: 4, opacity: 0 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                    delay: i * 0.4,
                }}
            >
                <span className="absolute w-4 h-4 bg-gray-300 bg-opacity-40 rounded-full" />
            </motion.span>
        ))}
        {children}
    </button>
));

const BreadcrumbNav = ({ pathname }) => (
    <nav className="mb-4 mdd:text-xs flex items-center space-x-2 text-gray-600 gap-2">
        <Link
            href="/"
            className="text-orange-500 hover:underline active:scale-95 transition-transform duration-150 ease-in-out"
        >
            Главная
        </Link>
        <span>
      <Image
          src="/nav-icon.png"
          alt=""
          width={8}
          height={8}
          className="w-2"
      />
    </span>
        {pathname === "/shengenskie-vizy" ? (
            <span className="font-semibold text-gray-900 cursor-default">
        Шенгенские визы
      </span>
        ) : (
            <Link
                href="/shengenskie-vizy"
                className="font-semibold hover:underline active:scale-95 transition-transform duration-150 ease-in-out"
            >
                Шенгенские визы
            </Link>
        )}
    </nav>
);

export default function VisaPage({ breadcrumbs }) {
    const { openModal } = useModal();
    const pathname = usePathname();

    return (
        <div>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}

            <div className="w-full relative flex flex-col lg:flex-row sm:flex-col justify-between">
                <div className="mdd:relative lg:absolute sm:relative left-0 top-[200px] lg:top-[250px] mdd:top-[135px] w-full lg:w-1/2 text-left lg:text-left z-10 px-[7%] flex flex-col lg:gap-24 sm:gap-12 mdd:gap-12">
                    <BreadcrumbNav pathname={pathname} />
                    <h1 className="ht:text-[54px] lg:text-[54px] md:text-[52px] sm:text-[48px] mdd:text-[30px] font-semibold text-black leading-none">
                        ШЕНГЕНСКИЕ ВИЗЫ
                    </h1>
                </div>

                <div className="w-full lg:flex items-center mt-[20%] mdd:mt-[10%] lg:mt-0 relative z-5">
                    <Image
                        src="/visa-banner-new.png"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={1000}
                        height={1000}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 mdd:hidden"
                        priority
                    />
                    <Image
                        src="/visabanner-f.svg"
                        alt="Оформление виз с VisaVam.by – Легко и Доступно"
                        width={1000}
                        height={1000}
                        className="relative lg:top-[20%] sm:top-0 lg:w-[50%] lg:left-[45%] -z-50 sm:hidden"
                        priority
                    />
                </div>

                <div className="lg:hidden absolute bottom-0 w-full px-[7%] pb-[15%] mdd:pb-[25%]">
                    <RippleButton onClick={openModal}>
                        Оформить заявку
                    </RippleButton>
                </div>
            </div>

            <Serviceson />
            <Steps />
            <PhoneForm />
            <Docs />
            <Reviews />
            <Fag />
            <div className="pt-32">
                <Contacts/>
            </div>
        </div>
    );
}