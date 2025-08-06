import OtherCountriesPage from "@/components/otherCountriesPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import { notFound } from 'next/navigation';

export const dynamicParams = false;

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

    let detailedCountryData = countryData; // Default to countryData as fallback
    try {
        const { otherCountries } = await import('@/components/serviceson');
        if (Array.isArray(otherCountries)) {
            detailedCountryData = otherCountries.find(c => c.url === countryParam) || countryData;
        } else {
            console.warn('otherCountries is not an array in@/components/serviceson, falling back to countryData');
        }
    } catch (error) {
        console.error('Failed to import otherCountries:', error.message);
    }

    const images = [
        // Static images from OtherCountryPage
        {
            url: "/nav-icon.png",
            width: 8,
            height: 8,
            alt: "Иконка навигации",
        },
        {
            url: "/check-0.png",
            width: 16,
            height: 16,
            alt: "Иконка проверки для визовых требований",
        },
        {
            url: "/visa-c.png",
            width: 820,
            height: 891,
            alt: `Визовые услуги для ${detailedCountryData.name}`,
        },
        {
            url: "/visa-cc.png",
            width: 820,
            height: 802,
            alt: `Визовые услуги для ${detailedCountryData.name}`,
        },
        {
            url: "/visa-112.webp",
            width: 600,
            height: 600,
            alt: `Мобильная визовая услуга для ${detailedCountryData.name}`,
        },
        {
            url: "/visa-001.webp",
            width: 600,
            height: 600,
            alt: `Мобильная визовая услуга для ${detailedCountryData.name}`,
        },
        {
            url: "/Line 5.png",
            width: 24,
            height: 24,
            alt: "Иконка стрелки для навигации",
        },
    ];

    // Add country-specific images if detailedCountryData has additional fields
    if (detailedCountryData.img) {
        images.push(
            {
                url: detailedCountryData.img,
                width: 300,
                height: 200,
                alt: `Изображение ${detailedCountryData.name}`,
            },
            {
                url: detailedCountryData.banner,
                width: 1800,
                height: 1200,
                alt: `Визовые услуги для ${detailedCountryData.name}`,
            },
            {
                url: detailedCountryData.bannerMobile || detailedCountryData.banner,
                width: 1800,
                height: 1200,
                alt: `Мобильный баннер визовых услуг для ${detailedCountryData.name}`,
            },
            {
                url: detailedCountryData.svg,
                width: 24,
                height: 24,
                alt: `Флаг ${detailedCountryData.name}`,
            }
        );
    }

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
            images,
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