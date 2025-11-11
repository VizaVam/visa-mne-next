import Breadcrumbs from "@/components/Breadcrumbs";
import Fpage from "@/components/faqpage/fpage";

export const metadata = {
    title: "Ответы на частые вопросы - VISA VAM",
    description: "Здесь вы найдете важную информацию о визовой процедуре и ответы на частые вопросы.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/faq",
    },  
    openGraph: {
        title: "Ответы на частые вопросы - VISA VAM",
        description: "Здесь вы найдете важную информацию о визовой процедуре и ответы на частые вопросы.",
        url: "https://visavampro.by/poleznaya-informasia/faq",
        type: "website",
        images: [
            {
                url: "/art62.jpg",
                width: 1600,
                height: 1000,
                alt: "Фото на визу 2025",
            },
            {
                url: "/art62.jpg",
                width: 600,
                height: 400,
                alt: "Фото на визу 2025",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/foto-na-visy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Fpage/>
        </>
    )
};