import Breadcrumbs from "@/components/Breadcrumbs";
import Povv from "./povv";

export const metadata = {
    title: "Правило первого въезда и основной страны в Шенгене: как это работает",
    description: "Детальное объяснение правил использования шенгенской визы. Что важнее: страна первого въезда или страна основного пребывания? Как избежать проблем на границе.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/pravilo-pervogo-vezda-shengen",
    },  
    openGraph: {
        title: "Правило первого въезда и основной страны в Шенгене: как это работает",
        description: "Детальное объяснение правил использования шенгенской визы. Что важнее: страна первого въезда или страна основного пребывания? Как избежать проблем на границе.",
        url: "https://visavampro.by/poleznaya-informasia/pravilo-pervogo-vezda-shengen",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/kuda-poehat-belorusam" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Povv/>
        </>
    )
};