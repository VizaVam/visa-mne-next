import Breadcrumbs from "@/components/Breadcrumbs";
import ContactsPage from "@/components/contactsPage";

export const metadata = {
    title: "Контакты – компания VISA VAM",
    description: "Контакты – компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
};


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
