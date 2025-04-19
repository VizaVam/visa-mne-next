import { NextResponse } from 'next/server';

// Список статических маршрутов
const staticRoutes = [
    '/',
    '/shengenskie-vizy',
    '/kontakty',
    '/o-nas',
];

// Динамические маршруты из массива countries
const countries = [
    { url: 'viza-v-ssha' },
    { url: 'viza-v-velikobritaniyu' },
    { url: 'viza-v-kitaj' },
];

// Шенгенские визы (дополнительные динамические маршруты)
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

// Все допустимые маршруты
const validRoutes = [
    ...staticRoutes,
    ...countries.map(country => `/${country.url}`),
    ...shengenVisas.map(visa => `/shengenskie-vizy/${visa.url}`),
];

export function middleware(request) {
    const { pathname } = request.nextUrl;


    // Разрешаем все запросы к изображениям и статическим файлам
    if (
        pathname.startsWith('/_next') ||
        pathname.includes('.') || // Все файлы с расширениями (изображения, css, js)
        pathname.startsWith('/api/') ||
        pathname === '/not-found'
    ) {
        return NextResponse.next();
    }

    // Если маршрут невалидный - редирект на /not-found
    if (!validRoutes.includes(pathname)) {
        const notFoundUrl = new URL('/not-found', request.url);
        notFoundUrl.searchParams.set('from', pathname);

        const response = NextResponse.rewrite(notFoundUrl);
        response.status = 404;
        response.headers.set('Cache-Control', 'no-store');
        return response;
    }

    // Продолжаем обработку запроса, если маршрут существует
    return NextResponse.next();
}

// Указываем, к каким маршрутам применять middleware
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|images|img|assets|favicon.ico|robots.txt).*)',
    ],
};