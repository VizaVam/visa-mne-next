import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata";
import VizyPage from "@/components/vizyPage";

export default function Page({params}) {
    const { country } = params;

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