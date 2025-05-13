import Breadcrumbs from "@/components/Breadcrumbs";
import Kakof from "@/components/kakof";

export const metadata = {
    title: "Как оформить виза в Польшу для белорусов —  документы, стоимость, нюансы",
    description: "Как получить визу в Польшу для белорусов: список документов, стоимость, сроки, адреса визовых центров и агентств. Полное руководство от экспертов визового агентства Visa Vam.",
    alternates: {
        canonical: "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov",
    },
    openGraph: {
        title: "Как оформить виза в Польшу для белорусов —  документы, стоимость, нюансы",
        description: "Как получить визу в Польшу для белорусов: список документов, стоимость, сроки, адреса визовых центров и агентств. Полное руководство от экспертов визового агентства Visa Vam.",
        url: "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov",
        type: "website",
    },
};

export default function Page() {
    const breadcrumbs = [
        { name: "Главная", url: "https://visavampro.by/" },
        { name: "Полезная статья", url: "https://visavampro.by/poleznaya-informasia" },
        { name: "Как оформить визу в Польшу для белорусов", url: "https://visavampro.by/poleznaya-informasia/kak-oformit-vizu-v-polshu-dlya-belarusov" }
    ];

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Kakof/>
        </>
    )
};