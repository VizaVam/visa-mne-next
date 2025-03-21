export { generateMetadata } from "./metadata";
import CountryPage from "@/components/countriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Page({ params }) {
    const { country } = params;

    const breadcrumbs = [
        { name: "Главная", url: "https://visamne.vercel.app/" },
        { name: "Шенгенские визы", url: "https://visamne.vercel.app/shengenskie-vizy" },
        { name: `Виза в ${country}`, url: `https://visamne.vercel.app/shengenskie-vizy/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CountryPage />
        </>
    );
}
