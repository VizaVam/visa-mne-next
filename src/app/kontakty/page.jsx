import Breadcrumbs from "@/components/Breadcrumbs";

export { metadata } from "./metadata"
import ContactsPage from "@/components/contactsPage";

export default function Page() {

    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Контакты", url: "https://visavampro.by/kontakty" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ContactsPage />
        </>
    )
}
