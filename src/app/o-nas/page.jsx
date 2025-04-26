import Breadcrumbs from "@/components/Breadcrumbs";
import AboutUsPage from "@/components/onasPage";

export const metadata = {
    title: "О НАС – компания VISA VAM",
    description: "О НАС - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
    openGraph: {
        title: "О НАС – компания VISA VAM",
        description: "О НАС - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
        url: "https://visavampro.by/o-nas",
        type: "website",
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