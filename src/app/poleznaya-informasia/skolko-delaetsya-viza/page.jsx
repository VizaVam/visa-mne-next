import Breadcrumbs from "@/components/Breadcrumbs";
import Sdv from "./sdv";

export const metadata = {
    title: "Сроки оформления визы | Сколько ждать решения по шенгенской визе",
    description: "Узнайте, сколько времени занимает оформление шенгенской и других типов виз. Факторы, влияющие на сроки рассмотрения документов в посольстве.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/skolko-delaetsya-viza",
    },  
    openGraph: {
        title: "Сроки оформления визы | Сколько ждать решения по шенгенской визе",
        description: "Узнайте, сколько времени занимает оформление шенгенской и других типов виз. Факторы, влияющие на сроки рассмотрения документов в посольстве.",
        url: "https://visavampro.by/poleznaya-informasia/skolko-delaetsya-viza",
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
            <Sdv/>
        </>
    )
};