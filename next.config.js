/** @type {import('next').NextConfig} */
const nextConfig = {
    // Включить сжатие gzip/brotli
    compress: true,
    experimental: {
        // Подгружает только необходимые полифиллы
        modern: true,
    },
};
module.exports = nextConfig;