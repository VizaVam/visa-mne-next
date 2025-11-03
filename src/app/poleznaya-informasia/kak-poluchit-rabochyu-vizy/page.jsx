import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/topic10/topic10";

export const metadata = {
    title: "Как получить рабочую визу: документы, этапы и советы для белорусов | VISA VAM",
    description: "Узнайте, как получить рабочую визу в Европу: какие документы нужны, как подать заявление и избежать отказа. Пошаговая инструкция от VISA VAM - помощь в оформлении визы по всей Беларуси, 10 лет опыта, страховка от отказа.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kak-poluchit-rabochyu-vizy",
    },
    openGraph: {
        title: "Как получить рабочую визу: документы, этапы и советы для белорусов | VISA VAM",
        description: "Узнайте, как получить рабочую визу в Европу: какие документы нужны, как подать заявление и избежать отказа. Пошаговая инструкция от VISA VAM - помощь в оформлении визы по всей Беларуси, 10 лет опыта, страховка от отказа.",
        url: "https://visavampro.by/poleznaya-informasia/kak-poluchit-rabochyu-vizy",
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
        { name: "Как оформить визу в Польшу для белорусов", url: "https://visavampro.by/poleznaya-informasia/kak-poluchit-rabochyu-vizy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};