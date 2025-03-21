export { generateMetadata } from "./metadata";
import CountryPage from "@/components/countriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Page({ params }) {
    const { country } = params;

    const breadcrumbs = [
        { name: "Главная", url: "https://example.com/" },
        { name: "Шенгенские визы", url: "https://example.com/shengenskie-vizy" },
        { name: `Виза в ${country}`, url: `https://example.com/shengenskie-vizy/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CountryPage />
        </>
    );
}
