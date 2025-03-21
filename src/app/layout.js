import GoogleTagManager from "@/components/GTM";
import { Inter, Caveat } from 'next/font/google';
import './globals.css';
import './output.css';
import './styles.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Modal from "@/components/modal";
import { ModalProvider } from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";

const interSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

const caveatSans = Caveat({
    variable: '--font-caveat-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: "Открыть визу в Минске – компания VISA VAM",
    description: "Визовый центр в Минске предлагает открыть визу шенген ✔️ Сделать визу срочно и без присутствия ✔️ Помощь о оформлении документов на шенгенскую визу на 3 года.",
    keywords: ["планирование путешествия в США и Европе", "отдых", "отдых в Европе и США", "путешествие"],
    robots: ["noindex, nofollow"]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${interSans.variable} ${caveatSans.variable} antialiased`}>
        <GoogleTagManager />
        <ModalProvider>
            <Header />
            <Breadcrumbs />
            <main>{children}</main>
            <Footer />
            <Modal />
        </ModalProvider>
        </body>
        </html>
    );
}
