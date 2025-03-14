import {Inter, Caveat} from 'next/font/google';
import './globals.css';
import './output.css';
import './styles.scss';
import Header from '../components/header'
import Footer from '../components/footer';
import Modal from "@/components/modal";
import {ModalProvider} from "@/components/modalcontext";

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
    description: "Оформление виз в США и Европу. Помощь в планировании путешествий.",
    keywords: ["планирование путешествия в США и Европе", "отдых", "отдых в Европе и США", "путешествие"],
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${interSans.variable} ${caveatSans.variable} antialiased`}>
        <ModalProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modal />
        </ModalProvider>
        </body>
        </html>
    );
}
