import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/kakof4";

export const metadata = {
    title: "Куда поехать белорусам в 2025: Полный гид по безвизовым странам, Шенгену и советам для отдыха",
    description: "Актуальный гид для белорусов на 2025 год. Список стран, куда можно поехать без визы. Инструкция по получению шенгенской визы. Полезные советы, ответы на вопросы и помощь в оформлении виз — все в одной статье!",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kuda-poehat-belorusam",
    },  
    openGraph: {
        title: "Куда поехать белорусам в 2025: Полный гид по безвизовым странам, Шенгену и советам для отдыха",
        description: "Актуальный гид для белорусов на 2025 год. Список стран, куда можно поехать без визы. Инструкция по получению шенгенской визы. Полезные советы, ответы на вопросы и помощь в оформлении виз — все в одной статье!",
        url: "https://visavampro.by/poleznaya-informasia/kuda-poehat-belorusam",
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
            <Kakof/>
        </>
    )
};