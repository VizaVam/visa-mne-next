import { NextResponse } from 'next/server';

// Основные визы
const countries = [
    { url: 'viza-v-ssha' },
    { url: 'viza-v-velikobritaniyu' },
    { url: 'viza-v-kitaj' },
];

// Шенгенские визы
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

// Собираем все проверяемые маршруты
const visaRoutes = [
    ...countries.map(country => `/${country.url}`),
    ...shengenVisas.map(visa => `/shengenskie-vizy/${visa.url}`),
];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Проверяем только маршруты виз
    if (visaRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    // Все остальные запросы пропускаем (включая изображения)
    return NextResponse.next();
}

// Отключаем middleware для всех маршрутов, кроме визовых
export const config = {
    matcher: visaRoutes
};