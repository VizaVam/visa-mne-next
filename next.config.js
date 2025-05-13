/** @type {import('next').NextConfig} */
const nextConfig = {
        // Включить сжатие gzip/brotli
        compress: true,
        experimental: {
            // Подгружает только необходимые полифиллы
            modern: true,
        },
        // Отключаем дублирование полифиллов
        future: {
            webpack5: true,
        },
        polyfills: [],
        webpack: (config) => {
            // Убираем дублирующиеся полифиллы
            config.resolve.alias = {
                ...config.resolve.alias,
                'core-js': false,
                'regenerator-runtime': false,
            };
            return config;
        },
    }
;
module.exports = nextConfig;