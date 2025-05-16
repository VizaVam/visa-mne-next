import OtherCountriesPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from 'next/navigation';

const countries = [
    {
        name: "Китай",
        url: "viza-v-kitaj",
        title: "Виза в Китай для белорусов в 2025 году - Оформить визу",
        description: "Открытие визы в Китай. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача на китайскую визу."
    },
    {
        name: "США",
        url: "viza-v-ssha",
        title: "Виза в США для белорусов в 2025 году",
        description: "Открытие визы в США. ✓ Оформляем все типы виз. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Срочная подача на американскую визу."
    },
    {
        name: "Великобритания",
        url: "viza-v-velikobritaniyu",
        title: "Виза в Великобританию для белорусов в 2025 году",
        description: "Открытие визы в Англию. ✓ Помощь в заполнении анкеты и подачи документов. ✓ Доступная стоимость. ✓ Онлайн запись. ✓ Срочное оформление визы."
    }
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

    const canonicalUrl = `https://visavampro.by/${countryData.url}`;

    return {
        title: `${countryData.title}`,
        description: `${countryData.description}`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${countryData.title}`,
            description: `${countryData.description}`,
            url: canonicalUrl,
            type: "website",
        },
    };
}

export default function Page({ params }) {
    const { country } = params;
    const countryData = countries.find(item => item.url === country);

    if (!countryData) {
        notFound();
    }

    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: countryData.title, url: `https://visavampro.by/${country}` }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <OtherCountriesPage
                selectedCountry={countryData}
                countryUrl={country}
            />
        </>
    );
}