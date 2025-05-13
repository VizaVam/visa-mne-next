import Breadcrumbs from "@/components/Breadcrumbs";
import PolInfo from "@/components/polInfo";

export const metadata = {
    title: "Полезная информация – компания VISA VAM",
    description: "Полезная информация - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
    alternates: {
        canonical: "https://visavampro.by/o-nas",
    },
    openGraph: {
        title: "Полезная информация – компания VISA VAM",
        description: "Полезная информация - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        url: "https://visavampro.by/o-nas",
        type: "website",
    },
};

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Полезная информация", url: "https://visavampro.by/poleznaya-informasia" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <PolInfo />
        </>
    )
};