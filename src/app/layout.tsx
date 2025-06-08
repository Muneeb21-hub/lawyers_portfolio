import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adv. Muhammad Babar | Lawyer Portfolio",
  description:
    "Professional, modern, and responsive portfolio website for a lawyer. Legal services, case studies, testimonials, and blog.",
  openGraph: {
    title: "Adv. Muhammad Babar | Lawyer Portfolio",
    description:
      "Professional, modern, and responsive portfolio website for a lawyer. Legal services, case studies, testimonials, and blog.",
    url: "https://yourdomain.com/",
    siteName: "Adv. Muhammad Babar | Lawyer Portfolio",
    images: [
      {
        url: "/images/background_image.jpg",
        width: 1200,
        height: 630,
        alt: "Lawyer Portfolio Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adv. Muhammad Babar | Lawyer Portfolio",
    description:
      "Professional, modern, and responsive portfolio website for a lawyer. Legal services, case studies, testimonials, and blog.",
    images: ["/images/background_image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script dangerouslySetInnerHTML={{
          __html: `if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/service-worker.js');
            });
          }`
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics (replace G-XXXXXXXXXX with your ID) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
