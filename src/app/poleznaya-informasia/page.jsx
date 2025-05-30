import Breadcrumbs from "@/components/Breadcrumbs";
import PolInfo from "@/components/polInfo";

export const metadata = {
    title: "Полезная информация – компания VISA VAM",
    description: "Полезная информация - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
    alternates: {
        canonical: "https://visavampro.by/o-nas",
    },
    openGraph: {
        title: "Полезная информация – компания VISA VAM",
        description: "Полезная информация - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        url: "https://visavampro.by/o-nas",
        type: "website",
        images: [
            {
                url: "/visa-banner-new.png",
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "/polinfo1.png",
                width: 1000,
                height: 1000,
                alt: "Полезная информация VisaVam",
            },
            {
                url: "/polinfo2.png",
                width: 1000,
                height: 1000,
                alt: "Полезная информация VisaVam",
            },
            {
                url: "/og-services.jpg",
                width: 1200,
                height: 630,
                alt: "Visa Vam - визовая поддержка",
            },
        ],
    },
};

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Полезная информация", url: "https://visavampro.by/poleznaya-informasia" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PolInfo />
        </>
    )
};