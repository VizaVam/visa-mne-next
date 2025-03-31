// src/app/shengenskie-vizy/[country]/page.jsx
import { countries } from '@/data/countries';
import CountryPage from '@/components/countriesPage';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateStaticParams() {
    return countries.map((country) => ({
        country: country.url
    }));
}

export async function generateMetadata({ params }) {
    const countryData = countries.find(c => c.url === params.country);

    return {
        title: `Виза в ${countryData?.n} | Визы в Шенген`,
        description: countryData?.text1,
        openGraph: {
            images: [countryData?.banner || '']
        }
    };
}

export default function Page({ params }) {
    const countryData = countries.find(c => c.url === params.country);

    if (!countryData) {
        return (
            <div className="container py-10 text-center">
                <h1 className="text-2xl font-bold">Страница не найдена</h1>
                <p className="mt-4">Информация по данной стране временно недоступна</p>
            </div>
        );
    }

    const breadcrumbs = [
        { name: "Главная", url: "/" },
        { name: "Шенгенские визы", url: "/shengenskie-vizy" },
        { name: `Виза в ${countryData.n}`, url: `/shengenskie-vizy/${params.country}` }
    ];

    return (
        <main className="container py-6">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CountryPage countryData={countryData} />
        </main>
    );
}