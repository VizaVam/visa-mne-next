import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata"
import ContactsPage from "@/components/contactsPage";

export default function Page() {

    const breadcrumbs = [
        { name: "Главная", url: "https://visamne.vercel.app/" },
        { name: "Контакты", url: "https://visamne.vercel.app/kontakty" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ContactsPage />
        </>
    )
}
