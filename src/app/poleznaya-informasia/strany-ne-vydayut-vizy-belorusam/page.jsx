import Breadcrumbs from "@/components/Breadcrumbs";
import Snvvb from "./snvvb";

export const metadata = {
    title: "Какие страны не выдают визы белорусам в 2025 | Ограничения на визы",
    description: "Актуальный (август 2025) список стран, которые ввели ограничения или прекратили выдачу шенгенских виз для граждан Беларуси. Информация о текущей визовой политике.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/strany-ne-vydayut-vizy-belorusam",
    },  
    openGraph: {
        title: "Какие страны не выдают визы белорусам в 2025 | Ограничения на визы",
        description: "Актуальный (август 2025) список стран, которые ввели ограничения или прекратили выдачу шенгенских виз для граждан Беларуси. Информация о текущей визовой политике.",
        url: "https://visavampro.by/poleznaya-informasia/strany-ne-vydayut-vizy-belorusam",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/strany-ne-vydayut-vizy-belorusam" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Snvvb/>
        </>
    )
};