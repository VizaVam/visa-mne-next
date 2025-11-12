import Breadcrumbs from "@/components/Breadcrumbs";
import Sdnsd from "./sdnsd";

export const metadata = {
    title: "Сколько денег нужно на счету для шенгенской визы | Финансовые гарантии",
    description: "Подробный расчет необходимой суммы на банковском счету для визы. Официальные требования разных стран, как влияют оплаченные отели и альтернативные доказательства.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/skolko-deneg-na-schetu-dlya-vizy",
    },  
    openGraph: {
        title: "Сколько денег нужно на счету для шенгенской визы | Финансовые гарантии",
        description: "Подробный расчет необходимой суммы на банковском счету для визы. Официальные требования разных стран, как влияют оплаченные отели и альтернативные доказательства.",
        url: "https://visavampro.by/poleznaya-informasia/skolko-deneg-na-schetu-dlya-vizy",
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
            <Sdnsd/>
        </>
    )
};