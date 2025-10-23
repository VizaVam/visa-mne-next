import Breadcrumbs from "@/components/Breadcrumbs";
import VizyPage from "@/components/vizyPage";

export const metadata = {
    title: "Шенгенская виза для белорусов | Оформить визу в Европу под ключ",
    description: "Оформление шенгенской визы для белорусов. Поможем срочно сделать и открыть визу шенген в Минске. Узнайте цену и запишитесь на подачу. Визы в Европу под ключ.",
    alternates: {
        canonical: "https://visavampro.by/shengenskie-vizy",
    },
    openGraph: {
        title: "Шенгенская виза для белорусов | Оформить визу в Европу под ключ",
        description: "Оформление шенгенской визы для белорусов. Поможем срочно сделать и открыть визу шенген в Минске. Узнайте цену и запишитесь на подачу. Визы в Европу под ключ.",
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