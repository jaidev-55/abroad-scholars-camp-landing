import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import WhatsAppButton from "./components/WhatsappButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://camp.abroadscholars.in"),

  title: {
    default:
      "Free Study Abroad Education Fair — May 16, Coimbatore | Abroad Scholars",
    template: "%s | Abroad Scholars",
  },

  description:
    "Free Abroad Education Camp — meet university reps, get spot admissions, visa help, IELTS assessment & more. May 16 at Vivanta, Coimbatore.",

  keywords: [
    "study abroad",
    "education fair Coimbatore",
    "study abroad event India",
    "abroad scholars",
    "university admissions fair",
    "IELTS coaching event",
    "visa assistance India",
  ],

  authors: [{ name: "Abroad Scholars" }],
  creator: "Abroad Scholars",

  icons: {
    icon: "/favicon.svg",
  },

  alternates: {
    canonical: "https://camp.abroadscholars.in",
  },

  verification: {
    google: "enJyZDEM5w3U0wIPq8lgfm34hlBCCMbmv36vA1SL4-o",
  },

  openGraph: {
    title: "Free Study Abroad Education Fair — May 16, Coimbatore",
    description:
      "Meet university reps, get spot admissions, visa help, IELTS assessment & more. All under one roof — FREE entry.",
    url: "https://camp.abroadscholars.in",
    siteName: "Abroad Scholars",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Study Abroad Education Fair — May 16, Coimbatore",
    description:
      "Get admissions, visa help & IELTS support — all in one place. FREE entry.",
  },

  robots: {
    index: true,
    follow: true,
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4CJKPDC');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans"
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4CJKPDC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Ads / Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17264874781"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17264874781');
          `}
        </Script>

        {children}

        <WhatsAppButton />
      </body>
    </html>
  );
};

export default RootLayout;
