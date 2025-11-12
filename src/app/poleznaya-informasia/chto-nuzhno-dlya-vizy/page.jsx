import Breadcrumbs from "@/components/Breadcrumbs";
import Cndv from "./cndv";

export const metadata = {
    title: "Список документов на шенгенскую визу | Что нужно для получения визы",
    description: "Полный и подробный перечень документов для шенгенской визы с объяснениями. Требования к паспорту, фото, справкам для работающих, ИП, студентов и пенсионеров.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/chto-nuzhno-dlya-vizy",
    },  
    openGraph: {
        title: "Список документов на шенгенскую визу | Что нужно для получения визы",
        description: "Полный и подробный перечень документов для шенгенской визы с объяснениями. Требования к паспорту, фото, справкам для работающих, ИП, студентов и пенсионеров.",
        url: "https://visavampro.by/poleznaya-informasia/chto-nuzhno-dlya-vizy",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/chto-nuzhno-dlya-vizy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Cndv/>
        </>
    )
};