import { notFound } from 'next/navigation';

export default function NotFound() {
    notFound(); // Это установит статус 404
    return null; // Этот код не будет достигнут, но нужен для синтаксиса
}