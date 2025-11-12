import Breadcrumbs from "@/components/Breadcrumbs";
import Rmv from "./rmv";

export const metadata = {
    title: "Разница между визой C и D | Какую визу выбрать: шенгенскую или национальную",
    description: "Подробное сравнение виз типа C и типа D. Узнайте, в чем ключевые отличия по срокам, целям, правам, процессу подачи и юридическому статусу, который они предоставляют.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/raznica-mezhdu-vizami-c-i-d",
    },  
    openGraph: {
        title: "Разница между визой C и D | Какую визу выбрать: шенгенскую или национальную",
        description: "Подробное сравнение виз типа C и типа D. Узнайте, в чем ключевые отличия по срокам, целям, правам, процессу подачи и юридическому статусу, который они предоставляют.",
        url: "https://visavampro.by/poleznaya-informasia/raznica-mezhdu-vizami-c-i-d",
        type: "website",
        images: [
            {
                url: "/art4.jpg",
                width: 1600,
                height: 1000,
                alt: "Куда поехать белорусам в 2025",
            },
            {
                url: "/art4.jpg",
                width: 600,
                height: 400,
                alt: "Куда поехать белорусам в 2025",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/skolko-deneg-na-schetu-dlya-vizy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Rmv/>
        </>
    )
};