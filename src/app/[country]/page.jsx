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

export async function generateStaticParams() {
    return countries.map((country) => ({
        country: country.url,
    }));
}

export async function generateMetadata({ params }) {
    const countryParam = decodeURIComponent(params?.country || "");
    const countryData = countries.find(c => c.url === countryParam);

    if (!countryData) {
        notFound();
    }

    return {
        title: `${countryData.metaTitle} – компания VISA VAM`,
        description: `${countryData.metaTitle} – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70`,
    };
}

export default function Page({ params }) {
    const { country } = params;
    const countryData = countries.find(item => item.url === country);

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