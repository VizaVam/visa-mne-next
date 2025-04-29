/** @type {import('next').NextConfig} */
const nextConfig = {
    // Включить сжатие gzip/brotli
    compress: true,

    // Оптимизация работы с chunks
    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },

    // Настройки кэширования
    headers: async () => {
        return [
            {
                source: '/_next/static/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/_next/static/chunks/polyfills-*.js',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },};
module.exports = nextConfig;