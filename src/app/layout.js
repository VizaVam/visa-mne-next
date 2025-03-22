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
    title: "Главная - компания VISA VAM",
    description: "Главная - компания VISA VAM. 📞 По всем вопросам звоните: +375 29 68 00 620, +375 29 373 48 70",
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
