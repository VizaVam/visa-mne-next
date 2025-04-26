import GoogleTagManager from "@/components/GTM";
import { Inter, Caveat } from 'next/font/google';
import './globals.css';
import './output.css';
import './styles.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Modal from "@/components/modal";
import { ModalProvider } from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";
import {Suspense} from "react";

const interSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

const caveatSans = Caveat({
    variable: '--font-caveat-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: "Компания VISA VAM",
    description: "Компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
    openGraph: {
        title: "Компания VISA VAM",
        description: "Компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        url: "https://visavampro.by",
        type: "website",
        siteName: "VISA VAM",
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VISA VAM",
    "image": "https://visavampro.by/new-logo.svg",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "пр. Победителей 17, офис 1204",
        "addressLocality": "Минск",
        "addressRegion": "Минская область",
        "postalCode": "220004",
        "addressCountry": "BY"
    },
    "telephone": "+375 29 68 00 620",
    "email": "info@visavam.by",
    "openingHours": "Пн-пт: 09:00-19:00, Сб: 10:00-14:00"
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <head>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </head>
        <body className={`${interSans.variable} ${caveatSans.variable} antialiased`}>
        <GoogleTagManager />
        <ModalProvider>
            <Header />
            <Breadcrumbs />
            <Suspense fallback={null}>
                <main>{children}</main>
            </Suspense>
            <Footer />
            <Modal />
        </ModalProvider>
        </body>
        </html>
    );
}
