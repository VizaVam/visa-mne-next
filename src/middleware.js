import { NextResponse } from 'next/server';

// Динамические маршруты стран
const countryRoutes = [
    'viza-v-ssha',
    'viza-v-velikobritaniyu',
    'viza-v-kitaj'
].map(path => `/${path}`);

// Шенгенские визы
const schengenRoutes = [
    'viza-v-polshu',
    'viza-v-sloveniu',
    'viza-v-germaniyu',
    'viza-v-ispaniyu',
    'viza-vo-francziyu',
    'viza-v-litvu',
    'viza-v-latviyu',
    'viza-v-bolgariyu',
    'viza-v-horvatiu',
    'viza-v-niderlandy',
    'viza-v-grecziyu',
    'viza-v-vengriyu',
    'viza-v-italiyu',
    'viza-v-rumyniyu',
    'viza-v-avstriyu',
    'viza-v-chehiyu',
    'rabochaya-viza-v-polshu',
    'delovaya-viza-v-polshu',
    'uchebnaya-viza-v-polshu',
    'gostevaya-polskaya-viza',
    'viza-v-polsy-po-karte-polyaka',
    'rabochaya-viza-v-bolgariyu',
    'rabochaya-viza-v-germaniyu',
    'rabochaya-viza-v-ispaniyu',
].map(path => `/shengenskie-vizy/${path}`);

// Объединяем все динамические маршруты для проверки
const dynamicRoutesToValidate = [...countryRoutes, ...schengenRoutes];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // 1. Пропускаем ВСЕ запросы к файлам (изображения, CSS, JS и т.д.)
    if (pathname.includes('.') || pathname.startsWith('/_next/')) {
        return NextResponse.next();
    }

    // 2. Пропускаем API маршруты
    if (pathname.startsWith('/api/')) {
        return NextResponse.next();
    }

    // 3. Проверяем только динамические маршруты стран и шенгенские визы
    if (dynamicRoutesToValidate.includes(pathname)) {
        return NextResponse.next();
    }

    // Для всех остальных маршрутов (не динамических) пропускаем без проверки
    return NextResponse.next();
}

export const config = {
    matcher: dynamicRoutesToValidate
};