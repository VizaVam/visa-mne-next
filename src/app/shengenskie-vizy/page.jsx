import Breadcrumbs from "@/components/Breadcrumbs";
import VizyPage from "@/components/vizyPage";

export const metadata = {
    title: "Шенген виза в Европу для белорусов - Оформить визу",
    description: "Оформление шенген визы для белорусов в 2025 году. ✓ Визы любого типа. ✓ Сделать визу в Европу срочно. ✓ Онлайн запись. ✓ Доступные цены.",
    alternates: {
        canonical: "https://visavampro.by/shengenskie-vizy",
    },
    openGraph: {
        title: "Шенген виза в Европу для белорусов - Оформить визу",
        description: "Оформление шенген визы для белорусов в 2025 году. ✓ Визы любого типа. ✓ Сделать визу в Европу срочно. ✓ Онлайн запись. ✓ Доступные цены.",
        url: "https://visavampro.by/shengenskie-vizy",
        type: "website",
        images: [
            {
                url: "/visa-banner-new.png",
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "/visabanner-f.png",
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "/nav-icon.png",
                width: 8,
                height: 8,
                alt: "Иконка навигации",
            },
        ],
    },
};

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Шенгенские визы", url: "https://visavampro.by/shengenskie-vizy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <VizyPage />
        </>
    )
};