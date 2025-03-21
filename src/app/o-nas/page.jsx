import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata";
import OnasPage from "@/components/onasPage";

export default function Page() {
   const breadcrumbs = [
      { name: "Главная", url: "https://visamne.vercel.app/" },
      { name: "Шенгенские визы", url: "https://visamne.vercel.app/shengenskie-vizy" }
   ];

   return (
       <>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <OnasPage />
       </>
   )
};