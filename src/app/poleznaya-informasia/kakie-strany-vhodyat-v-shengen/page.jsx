import Breadcrumbs from "@/components/Breadcrumbs";
import Ksvs from "./ksvs";

export const metadata = {
    title: "Список стран Шенгенской зоны в 2025 году | Актуальный состав",
    description: "Полный и актуальный на август 2025 года список стран Шенгенского соглашения. Узнайте, какие страны ЕС не входят в Шенген, и наоборот. Статус Болгарии, Румынии и Кипра.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kakie-strany-vhodyat-v-shengen",
    },  
    openGraph: {
        title: "Список стран Шенгенской зоны в 2025 году | Актуальный состав",
        description: "Полный и актуальный на август 2025 года список стран Шенгенского соглашения. Узнайте, какие страны ЕС не входят в Шенген, и наоборот. Статус Болгарии, Румынии и Кипра.",
        url: "https://visavampro.by/poleznaya-informasia/kakie-strany-vhodyat-v-shengen",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/kakie-strany-vhodyat-v-shengen" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Ksvs/>
        </>
    )
};