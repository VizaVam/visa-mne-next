module.exports = {
    siteUrl: "https://visavampro.by", // Ваш домен
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ["/404"], // Исключенные страницы
    transform: async (config, path) => {
        // Кастомизация для отдельных страниц
        if (path === "/") {
            return { loc: path, changefreq: "daily", priority: 1.0 };
        }
        if (path.startsWith("/shengenskie-vizy")) {
            return { loc: path, changefreq: "weekly", priority: 0.9 };
        }
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(),
        };
    },
};