import Breadcrumbs from "@/components/Breadcrumbs";
import Kbtv from "./kbtv";

export const metadata = {
    title: "Типы виз: чем отличается виза C от D и другие категории",
    description: "Полный обзор типов и категорий виз: A, C, D, LTV. Узнайте, какая виза нужна для туризма, транзита, работы или учебы, и в чем их принципиальные различия.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kakie-byvayut-tipy-viz",
    },  
    openGraph: {
        title: "Типы виз: чем отличается виза C от D и другие категории",
        description: "Полный обзор типов и категорий виз: A, C, D, LTV. Узнайте, какая виза нужна для туризма, транзита, работы или учебы, и в чем их принципиальные различия.",
        url: "https://visavampro.by/poleznaya-informasia/kakie-byvayut-tipy-viz",
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
            <Kbtv/>
        </>
    )
};