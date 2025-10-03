import Breadcrumbs from "@/components/Breadcrumbs";
import Topic from "@/components/topic9/topic9";

export const metadata = {
    title: "Виза в Китай для белорусов 2025: Безвизовый режим, когда нужна виза и как ее оформить | Visa Vam",
    description: "Узнайте, нужна ли виза в Китай для граждан Беларуси в 2025 году. Все об условиях безвизового въезда до 30 дней, и в каких случаях белорусам необходимо оформлять туристическую, рабочую или другую визу.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/viza-v-kitay-dlya-belorusov",
    },  
    openGraph: {
        title: "Виза в Китай для белорусов 2025: Безвизовый режим, когда нужна виза и как ее оформить | Visa Vam",
        description: "Узнайте, нужна ли виза в Китай для граждан Беларуси в 2025 году. Все об условиях безвизового въезда до 30 дней, и в каких случаях белорусам необходимо оформлять туристическую, рабочую или другую визу.",
        url: "https://visavampro.by/poleznaya-informasia/viza-v-kitay-dlya-belorusov",
        type: "website",
        images: [
            {
                url: "/topic9.png",
                width: 1600,
                height: 1000,
                alt: "Виза по приглашению в ЕС для белорусов 2025",
            },
            {
                url: "/topic9.png",
                width: 600,
                height: 400,
                alt: "Виза по приглашению в ЕС для белорусов 2025",
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
        { name: "Виза для ребенка в 2025", url: "https://visavampro.by/poleznaya-informasia/viza-v-kitay-dlya-belorusov" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Topic/>
        </>
    )
};