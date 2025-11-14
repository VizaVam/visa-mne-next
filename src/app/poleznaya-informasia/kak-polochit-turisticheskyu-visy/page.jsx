import Breadcrumbs from "@/components/Breadcrumbs";
import Topic11 from "@/components/topic11/topic11";

export const metadata = {
    title: "Как получить туристическую визу в 2025: Полное руководство по оформлению | VISA VAM",
    description: "Подробное руководство, как проходит оформление туристической визы. Узнайте все шаги, как правильно собрать документы, заполнить анкету и получить визу без отказа.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kak-polochit-turisticheskyu-visy",
    },
    openGraph: {
        title: "Как получить туристическую визу в 2025: Полное руководство по оформлению | VISA VAM",
        description: "Подробное руководство, как проходит оформление туристической визы. Узнайте все шаги, как правильно собрать документы, заполнить анкету и получить визу без отказа.",
        url: "https://visavampro.by/poleznaya-informasia/kak-polochit-turisticheskyu-visy",
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
        { name: "Как оформить визу в Польшу для белорусов", url: "https://visavampro.by/poleznaya-informasia/kak-polochit-turisticheskyu-visy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Topic11/>
        </>
    )
};