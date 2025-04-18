// app/middleware.js
import { NextResponse } from 'next/server';

// Все валидные URL из app/[country] и app/shengenskie-vizy/[country]
const VALID_ROUTES = new Set([
    // Обычные визы (из app/[country])
    'viza-v-ssha',
    'viza-v-velikobritaniyu',
    'viza-v-kitaj',

    // Шенгенские визы (из app/shengenskie-vizy/[country])
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
    'rabochaya-viza-v-ispaniyu'
]);

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Проверяем маршруты /[country] и /shengenskie-vizy/[country]
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length === 1) {
        // Проверка для /[country]
        const countryParam = segments[0];
        if (!VALID_ROUTES.has(countryParam)) {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    } else if (segments.length === 2 && segments[0] === 'shengenskie-vizy') {
        // Проверка для /shengenskie-vizy/[country]
        const countryParam = segments[1];
        if (!VALID_ROUTES.has(countryParam)) {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/:path', // /viza-v-ssha, /viza-v-polshu и т.д.
        '/shengenskie-vizy/:path*' // /shengenskie-vizy/viza-v-polshu и т.д.
    ]
};