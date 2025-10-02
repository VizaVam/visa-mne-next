import Breadcrumbs from "@/components/Breadcrumbs";
import Topic from "@/components/topic7/topic7";

export const metadata = {
    title: "Виза для ребенка в 2025: документы, правила оформления и согласие на выезд | VISA VAM",
    description: "Полный список документов для оформления визы на ребенка. Узнайте, как получить визу для несовершеннолетнего, путешествующего с одним родителем или без них. Правила, советы и ответы на вопросы.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/viza-dlya-detey",
    },  
    openGraph: {
        title: "Виза для ребенка в 2025: документы, правила оформления и согласие на выезд | VISA VAM",
        description: "Полный список документов для оформления визы на ребенка. Узнайте, как получить визу для несовершеннолетнего, путешествующего с одним родителем или без них. Правила, советы и ответы на вопросы.",
        url: "https://visavampro.by/poleznaya-informasia/viza-dlya-detey",
        type: "website",
        images: [
            {
                url: "/topic7.jpg",
                width: 1600,
                height: 1000,
                alt: "Виза для ребенка в 2025",
            },
            {
                url: "/topic7.jpg",
                width: 600,
                height: 400,
                alt: "Виза для ребенка в 2025",
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
        { name: "Виза для ребенка в 2025", url: "https://visavampro.by/poleznaya-informasia/viza-dlya-detey" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Topic/>
        </>
    )
};