import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    card: "summary_large_image", // keep this
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
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
};

export default RootLayout;
