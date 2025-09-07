import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/topic6/topic6";

export const metadata = {
    title: "Фото на визу 2025: Все требования к фото на Шенген, США | Visa Vam",
    description: "Актуальные требования к фото на визу в 2025 году. Узнайте, какая фотография нужна для Шенгена, США и других стран. Все правила по размеру, фону и качеству снимка, чтобы избежать отказа.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/foto-na-visy",
    },  
    openGraph: {
        title: "Фото на визу 2025: Все требования к фото на Шенген, США | Visa Vam",
        description: "Актуальные требования к фото на визу в 2025 году. Узнайте, какая фотография нужна для Шенгена, США и других стран. Все правила по размеру, фону и качеству снимка, чтобы избежать отказа.",
        url: "https://visavampro.by/poleznaya-informasia/foto-na-visy",
        type: "website",
        images: [
            {
                url: "/art62.jpg",
                width: 1600,
                height: 1000,
                alt: "Фото на визу 2025",
            },
            {
                url: "/art62.jpg",
                width: 600,
                height: 400,
                alt: "Фото на визу 2025",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/foto-na-visy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};