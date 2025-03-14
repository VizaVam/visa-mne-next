import {countries} from "@/components/serviceson"; // Если `export default`

export async function generateMetadata({ params }) {
    console.log("✅ Параметр country:", params.country);
    console.log("✅ Доступные URL:", countries.map(c => c.url));
    console.log("✅ Структура стран:", JSON.stringify(countries, null, 2));

    if (!Array.isArray(countries)) {
        console.error("⚠️ Ошибка: `realCountries` не массив!");
        return { title: "Ошибка", description: "Страны не загружены" };
    }

    const country = countries.find(c => params.country.includes(c.url));
    console.log("🔍 Найденная страна:", country);

    if (!country) {
        return { title: "Ошибка", description: "Страна не найдена" };
    }

    return {
        title: `Виза в ${country.n} - VISA VAM`,
        description: `Оформление визы в ${country.n}.`,
    };
}
