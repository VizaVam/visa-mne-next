import { NextResponse } from 'next/server';
import zlib from 'zlib';

export async function GET(request) {
    const url = new URL(request.url);
    const fileUrl = url.searchParams.get('url'); // URL файла на вашем сайте

    // Загрузите файл
    const res = await fetch(fileUrl);
    const buffer = await res.arrayBuffer();

    // Сожмите содержимое
    const compressed = zlib.gzipSync(Buffer.from(buffer));

    return new NextResponse(compressed, {
        headers: {
            'Content-Encoding': 'gzip',
            'Content-Type': 'application/javascript',
            'Vary': 'Accept-Encoding',
        },
    });
}