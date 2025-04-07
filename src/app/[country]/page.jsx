export {generateMetadata} from "./metadata";
import OtherCountryPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";

const countries = [
    {
        name: "США",
        url: "viza-v-ssha",
        metaTitle: "Виза в США",
    },
    {
        name: "Великобритания",
        url: "viza-v-velikobritaniyu",
        metaTitle: "Виза в Великобританию",
    },
    {
        name: "Китай",
        url: "viza-v-kitaj",
        metaTitle: "Виза в Китай",
    },
];

export default function Page({params}) {
    const { country } = params;

    const countryData = countries.find(item => item.url === country);
    const displayName = countryData ? countryData.metaTitle : `Виза в ${country}`;

    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: displayName, url: `https://visavampro.by/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <OtherCountryPage country={country}/>
        </>
    );
}
