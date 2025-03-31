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

export async function generateMetadata({ params }) {
    const countryParam = decodeURIComponent(params?.country || "");
    const countryData = countries.find(c => c.url === countryParam);

    if (!countryData) {
        return {
            title: "Страна не найдена – компания VISA VAM",
            description: "Описание недоступно – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        };
    }

    return {
        title: `${countryData.metaTitle} – компания VISA VAM`,
        description: `${countryData.metaTitle} – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70`,
    };
}
