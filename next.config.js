/** @type {import('next').NextConfig} */
const nextConfig = {
    // Включить сжатие gzip/brotli
    compress: true,

    // Оптимизация работы с chunks
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },
};
module.exports = nextConfig;