import Breadcrumbs from "@/components/Breadcrumbs";
import Dnsv from "./dnsv";

export const metadata = {
    title: "Правило 90 дней из 180 в Шенгене: как правильно считать",
    description: "Подробное объяснение правила 90/180 для шенгенской визы. Как работает «плавающее окно», как считать дни, чтобы избежать нарушения, и каковы последствия оверстея.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/90-dnej-na-shengenskoj-vize",
    },  
    openGraph: {
        title: "Правило 90 дней из 180 в Шенгене: как правильно считать",
        description: "Подробное объяснение правила 90/180 для шенгенской визы. Как работает «плавающее окно», как считать дни, чтобы избежать нарушения, и каковы последствия оверстея.",
        url: "https://visavampro.by/poleznaya-informasia/90-dnej-na-shengenskoj-vize",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/kakie-byvayut-tipy-viz" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Dnsv/>
        </>
    )
};