// Файл: app/middleware.js
import { NextResponse } from 'next/server';

// Белый список статических страниц
const STATIC_PAGES = new Set([
    '/kontakty',
    '/o-nas',
    '/shengenskie-vizy'
]);

export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    // Пропускаем всё, кроме статических страниц
    if (!STATIC_PAGES.has(pathname)) {
        return NextResponse.next();
    }

    // Если запрос к статической странице - разрешаем доступ
    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Проверяем только явные статические пути:
         * - Главная (/)
         * - Контакты (/kontakty)
         * - О нас (/o-nas)
         * - Шенген (/shengenskie-vizy)
         */
        '/kontakty',
        '/o-nas',
        '/shengenskie-vizy'
    ]
};