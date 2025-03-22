export { generateMetadata } from "./metadata";
import OtherCountryPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Page({ params }) {
    const { country } = params;

    const breadcrumbs = [
        { name: "Главная", url: "https://visamne.vercel.app/" },
        { name: `Виза в ${country}`, url: `https://visamne.vercel.app/shengenskie-vizy/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <OtherCountryPage country={country} />
        </>
    );
}
