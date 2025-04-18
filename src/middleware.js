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
        pathname.startsWith('/api/')
    ) {
        return NextResponse.next();
    }

    // Проверяем, существует ли маршрут
    if (!validRoutes.includes(pathname)) {
        // Возвращаем 404 для несуществующих маршрутов
        return new Response('Страница не найдена', {
            status: 404,
            headers: {
                'Cache-Control': 'public, max-age=3600', // Кэшировать 404 на 1 час
            },
        });
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