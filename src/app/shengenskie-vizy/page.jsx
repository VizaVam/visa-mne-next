import Breadcrumbs from "@/components/Breadcrumbs";
import VizyPage from "@/components/vizyPage";

export const metadata = {
    title: "Шенгенские визы - компания VISA VAM",
    description: "Шенгенские визы – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
};

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Шенгенские визы", url: "https://visavampro.by/shengenskie-vizy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <VizyPage />
        </>
    )
};