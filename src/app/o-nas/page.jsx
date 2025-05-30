import Breadcrumbs from "@/components/Breadcrumbs";
import AboutUsPage from "@/components/onasPage";

export const metadata = {
    title: "О НАС – компания VISA VAM",
    description: "О НАС - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
    alternates: {
        canonical: "https://visavampro.by/o-nas",
    },
    openGraph: {
        title: "О НАС – компания VISA VAM",
        description: "О НАС - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        url: "https://visavampro.by/o-nas",
        type: "website",
        images: [
            {
                url: "/visa-banner-new.png", // Главный баннер
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "/onas114.jpg", // Мобильное изображение
                width: 600,
                height: 600,
                alt: "VisaVam услуги",
            },
            {
                url: "/onaspc.JPG", // Десктоп баннер
                width: 1600,
                height: 1000,
                alt: "О компании VisaVam",
            },
            {
                url: "/onasmobile.JPG", // Мобильный баннер
                width: 600,
                height: 400,
                alt: "О компании VisaVam",
            },
            {
                url: "/og-services.jpg", // Основное OG изображение
                width: 1200,
                height: 630,
                alt: "Visa Vam - визовая поддержка",
            },
        ],
    },
};

export default function Page() {
   const breadcrumbs = [
      { name: "Главная", url: "https://visavampro.by/" },
      { name: "О нас", url: "https://visavampro.by/o-nas" }
   ];

   return (
       <>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <AboutUsPage />
       </>
   )
};