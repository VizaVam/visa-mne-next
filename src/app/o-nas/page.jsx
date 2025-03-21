import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata";
import OnasPage from "@/components/onasPage";

export default function Page() {
   const breadcrumbs = [
      { name: "Главная", url: "https://visamne.vercel.app/" },
      { name: "О нас", url: "https://visamne.vercel.app/o-nas" }
   ];

   return (
       <>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <OnasPage />
       </>
   )
};