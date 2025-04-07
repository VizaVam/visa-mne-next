import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata";
import OnasPage from "@/components/onasPage";

export default function Page() {
   const breadcrumbs = [
      { name: "Главная", url: "https://visavampro.by/" },
      { name: "О нас", url: "https://visavampro.by/o-nas" }
   ];

   return (
       <>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <OnasPage />
       </>
   )
};