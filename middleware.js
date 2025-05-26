import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request) {
    const response = NextResponse.next();

    // Если это динамический маршрут и отрендерилась not-found страница
    if (request.nextUrl.pathname.startsWith('/[country]') &&
        response.headers.get('x-nextjs-page') === '/not-found') {
        return NextResponse.rewrite(new URL('/not-found', request.url), { status: 404 });
    }

    return response;
}