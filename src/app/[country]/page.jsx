export { generateMetadata } from "./metadata";
import OtherCountryPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from 'next/navigation';
import { headers } from 'next/headers'; // Импортируем headers

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

export default async function Page({ params }) {
    const { country } = params;

    // Находим данные страны
    const countryData = countries.find(item => item.url === country);

    // Если страна не найдена - показываем 404
    if (!countryData) {
        notFound();
    }

    // Устанавливаем заголовок Cache-Control
    const headersList = headers();
    headersList.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');

    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: countryData.metaTitle, url: `https://visavampro.by/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <OtherCountryPage
                country={country}
                selectedCountry={countryData}
            />
        </>
    );
}