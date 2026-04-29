import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Free Study Abroad Education Fair — May 16, Coimbatore | Abroad Scholars",
  description:
    "Free Abroad Education Camp — meet university reps, get spot admissions, visa help, IELTS assessment & more. May 16 at Vivanta, Coimbatore.",
  keywords: [
    "study abroad",
    "education fair",
    "free event",
    "Coimbatore",
    "abroad scholars",
    "university admissions",
    "IELTS",
    "visa help",
  ],
  openGraph: {
    title: "Free Study Abroad Education Fair — May 16, Coimbatore",
    description:
      "Meet university reps, get spot admissions, visa help, IELTS assessment & more. All under one roof, completely free.",
    type: "website",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
};

export default RootLayout;
