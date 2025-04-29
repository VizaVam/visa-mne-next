/** @type {import('next').NextConfig} */
const nextConfig = {
    // Включить сжатие gzip/brotli
    compress: true,
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },
};
module.exports = nextConfig;