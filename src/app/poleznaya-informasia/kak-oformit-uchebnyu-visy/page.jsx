import Breadcrumbs from "@/components/Breadcrumbs";
import Topic12 from "@/components/topic12/topic12";

export const metadata = {
    title: "Как оформить учебную визу в 2025 году - простая инструкция для белорусов | VISA VAM",
    description: "Узнайте, как оформить учебную визу: какие документы нужны, сколько времени занимает оформление и как избежать ошибок. Простое руководство для студентов. Помощь в подготовке документов от VISA VAM.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kak-oformit-uchebnyu-visy",
    },
    other: {
        lastModified: "2025-12-01T14:32:00+03:00",
    },
    openGraph: {
        title: "Как оформить учебную визу в 2025 году - простая инструкция для белорусов | VISA VAM",
        description: "Узнайте, как оформить учебную визу: какие документы нужны, сколько времени занимает оформление и как избежать ошибок. Простое руководство для студентов. Помощь в подготовке документов от VISA VAM.",
        url: "https://visavampro.by/poleznaya-informasia/kak-oformit-uchebnyu-visy",
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
        { name: "Как белорусу получить шенгенскую визу в 2025 году", url: "https://visavampro.by/poleznaya-informasia/kak-oformit-uchebnyu-visy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Topic12/>
        </>
    )
};