import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/topic5/topic5";

export const metadata = {
    title: "Верификация на польскую визу в Беларуси 2025: как пройти, пошаговая инструкция | VISA VAM",
    description: "Подробное руководство, как проходит верификация на визу в Польшу для белорусов. Узнайте все шаги, как успешно пройти онлайн-идентификацию VFS и записаться на подачу документов.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/verifikaciya-na-polskyu-visy-dlya-belorusov",
    },  
    openGraph: {
        title: "Верификация на польскую визу в Беларуси 2025: как пройти, пошаговая инструкция | VISA VAM",
        description: "Подробное руководство, как проходит верификация на визу в Польшу для белорусов. Узнайте все шаги, как успешно пройти онлайн-идентификацию VFS и записаться на подачу документов.",
        url: "https://visavampro.by/poleznaya-informasia/verifikaciya-na-polskyu-visy-dlya-belorusov",
        type: "website",
        images: [
            {
                url: "/art5.jpg",
                width: 1600,
                height: 1000,
                alt: "Верификация на польскую визу для белорусов",
            },
            {
                url: "/art5.jpg",
                width: 600,
                height: 400,
                alt: "Верификация на польскую визу для белорусов",
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
        { name: "Куда поехать белорусам в 2025 году", url: "https://visavampro.by/poleznaya-informasia/verifikaciya-na-polskyu-visy-dlya-belorusov" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};