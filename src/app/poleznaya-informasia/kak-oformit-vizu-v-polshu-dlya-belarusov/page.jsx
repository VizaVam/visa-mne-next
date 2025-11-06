import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/kakof";

export const metadata = {
    title: "Как оформить виза в Польшу для белорусов —  документы, стоимость, нюансы",
    description: "Как получить визу в Польшу для белорусов: список документов, стоимость, сроки, адреса визовых центров и агентств. Полное руководство от экспертов визового агентства Visa Vam.",
    other: {
        lastModified: "2025-10-29T14:32:00+03:00",
    },
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov",
    },
    openGraph: {
        title: "Как оформить виза в Польшу для белорусов —  документы, стоимость, нюансы",
        description: "Как получить визу в Польшу для белорусов: список документов, стоимость, сроки, адреса визовых центров и агентств. Полное руководство от экспертов визового агентства Visa Vam.",
        url: "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov",
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
        { name: "Как оформить визу в Польшу для белорусов", url: "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};