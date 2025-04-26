import { NextResponse } from 'next/server';

const staticRoutes = [
    '/',
    '/shengenskie-vizy',
    '/kontakty',
    '/o-nas',
];

const countries = [
    { url: 'viza-v-ssha' },
    { url: 'viza-v-velikobritaniyu' },
    { url: 'viza-v-kitaj' },
];

const shengenVisas = [
    { url: 'viza-v-polshu' },
    { url: 'viza-v-sloveniu' },
    { url: 'viza-v-germaniyu' },
    { url: 'viza-v-ispaniyu' },
    { url: 'viza-vo-francziyu' },
    { url: 'viza-v-litvu' },
    { url: 'viza-v-latviyu' },
    { url: 'viza-v-bolgariyu' },
    { url: 'viza-v-horvatiu' },
    { url: 'viza-v-niderlandy' },
    { url: 'viza-v-grecziyu' },
    { url: 'viza-v-vengriyu' },
    { url: 'viza-v-italiyu' },
    { url: 'viza-v-rumyniyu' },
    { url: 'viza-v-avstriyu' },
    { url: 'viza-v-chehiyu' },
    { url: 'rabochaya-viza-v-polshu' },
    { url: 'delovaya-viza-v-polshu' },
    { url: 'uchebnaya-viza-v-polshu' },
    { url: 'gostevaya-polskaya-viza' },
    { url: 'viza-v-polsy-po-karte-polyaka' },
    { url: 'rabochaya-viza-v-bolgariyu' },
    { url: 'rabochaya-viza-v-germaniyu' },
    { url: 'rabochaya-viza-v-ispaniyu' },
];

const validRoutes = [
    ...staticRoutes,
    ...countries.map(country => `/${country.url}`),
    ...shengenVisas.map(visa => `/shengenskie-vizy/${visa.url}`),
];

export function middleware(request) {
    const { pathname } = request.nextUrl;
    // console.log(`Original pathname: ${pathname}`);
    const response = NextResponse.next();

    // 1. Добавляем заголовки сжатия для JS/CSS
    if (pathname.match(/\.(js|css)$/)) {
        response.headers.set('Content-Encoding', 'gzip');
        response.headers.set('Vary', 'Accept-Encoding');
    }

    if (
        pathname.startsWith('/_next') ||
        pathname.includes('.') ||
        pathname.startsWith('/api/') ||
        pathname === '/not-found'
    ) {
        // console.log(`Skipping middleware for: ${pathname}`);
        return response;
    }

    const normalizedPathname = pathname === '/' || pathname === '' ? '/' : pathname.replace(/\/+$/, '');
    // console.log(`Normalized pathname: ${normalizedPathname}`);

    // Дополнительная проверка для корневого маршрута
    if (normalizedPathname === '/' || validRoutes.includes(normalizedPathname)) {
        // console.log(`Route is valid: ${normalizedPathname}`);
        return response;
    }

    // console.log(`Invalid route: ${normalizedPathname}, redirecting to /not-found`);
    return NextResponse.rewrite(new URL('/not-found', request.url), {
        headers: {
            'x-not-found': 'true', // Пример кастомного заголовка
        },
    });
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|images|img|assets|favicon.ico|robots.txt).*)',
    ],
};