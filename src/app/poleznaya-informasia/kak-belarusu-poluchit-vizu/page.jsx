import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/kakof2";

export const metadata = {
    title: "Как белорусу получить шенген в 2025 году — пошаговая инструкция",
    description: "Полное руководство от экспертов VISA VAM: документы, подача, сроки и советы. Получите шенген без ошибок! Гарантия возврата средств при отказе.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kak-belarusu-poluchit-vizu",
    },
    other: {
        lastModified: "2025-10-29T14:32:00+03:00",
    },
    openGraph: {
        title: "Как белорусу получить шенген в 2025 году — пошаговая инструкция",
        description: "Полное руководство от экспертов VISA VAM: документы, подача, сроки и советы. Получите шенген без ошибок! Гарантия возврата средств при отказе.",
        url: "https://visavampro.by/poleznaya-informasia/kak-belarusu-poluchit-vizu",
        type: "website",
        images: [
            {
                url: "/poland-banner.png",
                width: 1600,
                height: 1000,
                alt: "Оформление визы в Польшу с VisaVam",
            },
            {
                url: "/poland-banner.png",
                width: 600,
                height: 400,
                alt: "Оформление визы в Польшу с VisaVam",
            },
            {
                url: "/check-0.png",
                width: 16,
                height: 16,
                alt: "Иконка проверки для визовых требований",
            },
            {
                url: "/nav-icon.png",
                width: 8,
                height: 8,
                alt: "Иконка навигации",
            },
        ],
    },
};

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Полезная статья", url: "https://visavampro.by/poleznaya-informasia" },
        { name: "Как белорусу получить шенгенскую визу в 2025 году", url: "https://visavampro.by/poleznaya-informasia/kak-belarusu-poluchit-vizu" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};