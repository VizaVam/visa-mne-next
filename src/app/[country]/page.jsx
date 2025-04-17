export { generateMetadata } from "./metadata";
import OtherCountryPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from 'next/navigation';

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

// Генерируем статические параметры для всех стран
export async function generateStaticParams() {
    return countries.map((country) => ({
        country: country.url,
    }));
}

// Указываем, что страница должна обновляться (аналог revalidate)
export const revalidate = 3600; // Обновление каждые 3600 секунд (1 час)

export default function Page({ params }) {
    const { country } = params;
    const countryData = countries.find(item => item.url === country);

    // Return 404 if country not found
    if (!countryData || !countryData.metaTitle) {
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
                selectedCountry={countryData}
            />
        </>
    );
}