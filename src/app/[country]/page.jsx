export { generateMetadata } from "./metadata";
import OtherCountryPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from 'next/navigation'; // Добавлен импорт

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

export default function Page({ params }) {
    const { country } = params;

    // Находим данные страны
    const countryData = countries.find(item => item.url === country);

    // Если страна не найдена - показываем 404
    if (!countryData) {
        notFound();
    }

    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: countryData.metaTitle, url: `https://visavampro.by/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <OtherCountryPage
                country={country}
                selectedCountry={countryData} // Передаем данные страны
            />
        </>
    );
}