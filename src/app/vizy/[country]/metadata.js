const countries = [
    {
        name: "Польша",
        url: "viza-v-polshu",
    },
    {
        name: "Словения",
        url: "viza-v-sloveniu",
    },
    {
        name: "Германия",
        url: "viza-v-germaniyu",
    },
    {
        name: "Испания",
        url: "viza-v-ispaniyu",
    },
    {
        name: "Франция",
        url: "viza-vo-francziyu",
    },
    {
        name: "Литва",
        url: "viza-v-litvu",
    },
    {
        name: "Латвия",
        url: "viza-v-latviyu",
    },
    {
        name: "США",
        url: "viza-v-ssha",
    },
    {
        name: "Великобритания",
        url: "viza-v-velikobritaniyu",
    },
    {
        name: "Болгария",
        url: "viza-v-bolgariyu",
    },
    {
        name: "Хорватия",
        url: "viza-v-horvatiu",
    },
    {
        name: "Нидерланды",
        url: "viza-v-niderlandy",
    },
    {
        name: "Греция",
        url: "viza-v-grecziyu",
    },
    {
        name: "Венгрия",
        url: "viza-v-vengriyu",
    },
    {
        name: "Италия",
        url: "viza-v-italiyu",
    },
    {
        name: "Румыния",
        url: "viza-v-rumyniyu",
    },
    {
        name: "Австрия",
        url: "viza-v-avstriyu",
    },
    {
        name: "Чехия",
        url: "viza-v-chehiyu",
    },

    // subcountriespoland
    {
        name: "Рабочая виза в Польшу",
        url: "rabochaya-viza-v-polshu",
    },
    {
        name: "Деловая виза в Польшу",
        url: "delovaya-viza-v-polshu",
    },
    {
        name: "Учебная виза в Польшу",
        url: "uchebnaya-viza-v-polshu",
    },
    {
        name: "Гостевая виза в Польшу",
        url: "gostevaya-polskaya-viza",
    },
    {
        name: "Виза по карте Поляка",
        url: "viza-v-polsy-po-karte-polyaka",
    },
];
export async function generateMetadata({ params }) {
    const countryParam = decodeURIComponent(params?.country || "");
    console.log("🔍 [Server] Поиск страны по URL:", countryParam);

    const countryData = countries.find(c => c.url === countryParam);
    console.log("✅ [Server] Найденная страна:", countryData);

    if (!countryData) {
        return {
            title: "Страна не найдена",
            description: "Описание недоступно",
        };
    }

    return {
        title: `${countryData.name} – компания VISA VAM`,
        description: `Оформление виз в ${countryData.name}.`,
    };
}