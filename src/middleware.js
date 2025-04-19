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

const uniqueRoutes = [...new Set(validRoutes)];
if (uniqueRoutes.length !== validRoutes.length) {
    console.warn('Обнаружены дубликаты маршрутов:', validRoutes);
}

export function middleware(request) {
    try {
        const { pathname } = request.nextUrl;
        console.log('Requested pathname:', pathname); // Log the requested pathname

        if (
            pathname.startsWith('/_next') ||
            pathname.includes('.') ||
            pathname.startsWith('/api/') ||
            pathname === '/not-found'
        ) {
            console.log('Skipping middleware for:', pathname);
            return NextResponse.next();
        }

        const normalizedPathname = pathname.replace(/\/+$/, '');
        console.log('Normalized pathname:', normalizedPathname); // Log the normalized pathname
        console.log('Valid routes:', validRoutes); // Log the valid routes array

        if (!validRoutes.includes(normalizedPathname)) {
            console.error(`404 Error: Invalid route - ${pathname}`);
            return new NextResponse('Page Not Found', { status: 404 });
        }

        console.log('Route is valid, proceeding:', normalizedPathname);
        return NextResponse.next();
    } catch (error) {
        console.error(`Middleware error: ${error.message}`);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

// Указываем, к каким маршрутам применять middleware
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|images|img|assets|favicon.ico|robots.txt).*)',
    ],
};