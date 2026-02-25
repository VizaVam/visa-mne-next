import GoogleTagManager from "@/components/GTM";
import { Inter, Caveat } from 'next/font/google';
import './globals.css';
import './output.css';
import './styles.scss';
import Modal from "@/components/modal";
import CommentForm from "@/components/modalwithcomm";
import { ModalProvider } from "@/components/modalcontext";
import { CommentModalProvider } from "@/components/modalcontextcomment";
import { Suspense } from "react";
import ClientRootLayout from "./clientRootLayout"; 

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

const caveatSans = Caveat({
  variable: '--font-caveat-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: "Оформить визу в Минске для белорусов | Визовый центр Visa Vam",
  description: "Профессиональная помощь в оформлении визы для белорусов. Запись на подачу, виза под ключ. Узнайте, сколько стоит сделать визу, и получите поддержку от визового центра.",
  alternates: {
    canonical: "https://visavampro.by",
  },
  openGraph: {
    title: "Оформить визу в Минске для белорусов | Визовый центр Visa Vam",
    description: "Профессиональная помощь в оформлении визы для белорусов. Запись на подачу, виза под ключ. Узнайте, сколько стоит сделать визу, и получите поддержку от визового центра.",
    url: "https://visavampro.by",
    type: "website",
    siteName: "VISA VAM",
    images: [
      {
        url: "https://visavampro.by/visa-banner-new.png",
        width: 1000,
        height: 1000,
        alt: "Оформление виз с VisaVam.by – Легко и Доступно",
      },
      {
        url: "https://visavampro.by/visabanner-f.svg",
        width: 1000,
        height: 1000,
        alt: "Оформление виз с VisaVam.by – Легко и Доступно",
      },
      {
        url: "https://visavampro.by/nav-icon.png",
        width: 8,
        height: 8,
        alt: "Иконка навигации",
      },
      {
        url: "https://visavampro.by/check.svg",
        width: 24,
        height: 24,
        alt: "Иконка преимущества работы с VisaVam.by",
      },
      {
        url: "https://visavampro.by/banner-hero.svg",
        width: 840,
        height: 802,
        alt: "Оформление виз с VisaVam.by – Легко и Доступно (десктопный баннер)",
      },
      {
        url: "https://visavampro.by/main-m.svg",
        width: 840,
        height: 802,
        alt: "Оформление виз с VisaVam.by – Легко и Доступно (мобильный баннер)",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VISA VAM",
  "image": "https://visavampro.by/new-logo.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "пр. Победителей 17, офис 1204",
    "addressLocality": "Минск",
    "addressRegion": "Минская область",
    "postalCode": "220004",
    "addressCountry": "BY"
  },
  "telephone": "+375 29 68 00 620",
  "email": "info@visavam.by",
  "openingHours": "Пн-пт: 09:00-19:00, Сб: 10:00-14:00"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script
          noModule
          src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('noModule' in HTMLScriptElement.prototype) {
                document.write('<script type="module">window.__skipPolyfills=true</'+'script>');
              }
            `,
          }}
        />
        <script src="//web.it-center.by/nw" async></script>
      </head>
      <body className={`${interSans.variable} ${caveatSans.variable} antialiased`}>
        <GoogleTagManager />
        <script id="bitrix-form-loader" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.by/b27090570/crm/form/loader_507.js');
            `,
          }}
        />
        <button type="button" id="b24-web-form-popup-btn-507" className="b24-web-form-popup-btn-507" style={{ display: 'none' }}>Получить консультацию</button>
        <ModalProvider>
          <CommentModalProvider>
          <ClientRootLayout>{children}</ClientRootLayout>
          <Modal />
          <CommentForm />
          </CommentModalProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
