import Breadcrumbs from "@/components/Breadcrumbs";
import Topic from "@/components/topic8/topic8";

export const metadata = {
    title: "Виза по приглашению в ЕС для белорусов 2025: Список документов | VISA VAM",
    description: "Полный список документов для гостевой визы по приглашению для граждан Беларуси. Узнайте, какие документы нужны от вас и от приглашающей стороны для визы в Польшу и другие страны Шенгена.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/documenty-dlya-vizy-po-priglasheniu",
    },  
    openGraph: {
        title: "Виза по приглашению в ЕС для белорусов 2025: Список документов | VISA VAM",
        description: "Полный список документов для гостевой визы по приглашению для граждан Беларуси. Узнайте, какие документы нужны от вас и от приглашающей стороны для визы в Польшу и другие страны Шенгена.",
        url: "https://visavampro.by/poleznaya-informasia/documenty-dlya-vizy-po-priglasheniu",
        type: "website",
        images: [
            {
                url: "/topic7.jpg",
                width: 1600,
                height: 1000,
                alt: "Виза по приглашению в ЕС для белорусов 2025",
            },
            {
                url: "/topic7.jpg",
                width: 600,
                height: 400,
                alt: "Виза по приглашению в ЕС для белорусов 2025",
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
        { name: "Виза для ребенка в 2025", url: "https://visavampro.by/poleznaya-informasia/documenty-dlya-vizy-po-priglasheniu" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Topic/>
        </>
    )
};