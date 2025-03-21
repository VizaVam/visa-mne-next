import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata"
export { structuredData } from "@/lib/structuredData";
import ContactsPage from "@/components/contactsPage";

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visamne.vercel.app/" },
        { name: "Шенгенские визы", url: "https://visamne.vercel.app/shengenskie-vizy" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ContactsPage />
        </>
    )
}
