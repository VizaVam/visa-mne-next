import Breadcrumbs from "@/components/Breadcrumbs";
import ContactsPage from "@/components/contactsPage";

export const metadata = {
    title: "Контакты – компания VISA VAM",
    description: "Контакты – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
    alternates: {
        canonical: "https://visavampro.by/kontakty",
    },
    openGraph: {
        title: "Контакты – компания VISA VAM",
        description: "Контакты – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        url: "https://visavampro.by/kontakty",
        type: "website",
        images: [
            {
                url: "/conc.png", // Главный баннер (десктоп)
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "/contactsbanner-f.svg", // Главный баннер (мобильный)
                width: 1000,
                height: 1000,
                alt: "Контакты VisaVam",
            },
            {
                url: "/contacts-banner-2.png", // Баннер офиса
                width: 742,
                height: 329,
                alt: "Наш офис",
            },
            {
                url: "/contacts-call-icon.png", // Иконка телефона
                width: 24,
                height: 24,
                alt: "Phone icon",
            },
            {
                url: "/contacts-email-icon.png", // Иконка email
                width: 24,
                height: 24,
                alt: "Email icon",
            },
            {
                url: "/contacts-location-icon.png", // Иконка локации
                width: 24,
                height: 24,
                alt: "Location icon",
            },
            {
                url: "/og-contacts.jpg", // Основное OG изображение (рекомендуется добавить)
                width: 1200,
                height: 630,
                alt: "Visa Vam - контакты",
            },
        ],
    },
};


export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Контакты", url: "https://visavampro.by/kontakty" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ContactsPage />
        </>
    )
}
