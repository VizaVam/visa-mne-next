import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata"
import ContactsPage from "@/components/contactsPage";
import Script from "next/script";

export const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VISA VAM",
    "image": "https://visamne.vercel.app/new-logo.svg",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "пр. Победителей 17",
        "addressLocality": "Минск",
        "addressRegion": "Минская область",
        "postalCode": "220004",
        "addressCountry": "BY"
    },
    "telephone": "+375 29 68 00 620",
    "email": "mailto:l336906097@gmail.com",
    "openingHours": "Mo-Fr 09:00-18:00"
};

export default function Page() {

    const breadcrumbs = [
        { name: "Главная", url: "https://visamne.vercel.app/" },
        { name: "Контакты", url: "https://visamne.vercel.app/kontakty" }
    ];

    return (
        <>
            <Script
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ContactsPage />
        </>
    )
}
