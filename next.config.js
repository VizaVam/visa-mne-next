/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/viza-v-(kitaj|ssha|velikobritaniyu)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=3600, stale-while-revalidate=86400',
                    },
                ],
            },
        ];
    },
};
module.exports = nextConfig;