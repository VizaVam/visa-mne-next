/** @type {import('next').NextConfig} */
const nextConfig = {optimizeFonts: false, // Отключает отдельные файлы для шрифтов
    experimental: {
        optimizeCss: true,  // Объединяет CSS-файлы
    }};
module.exports = nextConfig;