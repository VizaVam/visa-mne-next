import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/kakof3";

export const metadata = {
    title: "Топ-5 ошибок при подаче на рабочую визу | Советы для белорусов",
    description: "Получили оффер за границей? Узнайте 5 главных ошибок при подаче на рабочую визу из РБ, чтобы избежать отказа. Финансы, документы, анкета. Помощь visavampro.by!",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/top-5-oshibok-pri-podache-na-rabochiu-vizu",
    },
    openGraph: {
        title: "Топ-5 ошибок при подаче на рабочую визу | Советы для белорусов",
        description: "Получили оффер за границей? Узнайте 5 главных ошибок при подаче на рабочую визу из РБ, чтобы избежать отказа. Финансы, документы, анкета. Помощь visavampro.by!",
        url: "https://visavampro.by/poleznaya-informasia/top-5-oshibok-pri-podache-na-rabochiu-vizu",
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
        { name: "Топ-5 ошибок при подаче на рабочую визу", url: "https://visavampro.by/poleznaya-informasia/top-5-oshibok-pri-podache-na-rabochiu-vizu" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};