import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://construyendofuturo-rcd.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Construyendo Futuro RCD · Gestión integral de Residuos de Construcción",
    template: "%s · Construyendo Futuro RCD",
  },
  description:
    "Gestión integral de RCD con cumplimiento normativo certificado en el norte del Valle del Cauca. Recolección, procesamiento y reutilización de residuos de construcción y demolición.",
  keywords: [
    "RCD",
    "Residuos de Construcción y Demolición",
    "Roldanillo",
    "Valle del Cauca",
    "Economía circular",
    "Gestión ambiental",
    "Resolución 0472 de 2017",
    "Resolución 1257 de 2021",
  ],
  authors: [{ name: "Construyendo Futuro RCD" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Construyendo Futuro RCD",
    title: "Construyendo Futuro RCD · Gestión integral de RCD",
    description:
      "Le damos nueva vida a los escombros. Gestión integral de RCD con cumplimiento normativo certificado en el norte del Valle del Cauca.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construyendo Futuro RCD",
    description: "Gestión integral de RCD con cumplimiento normativo certificado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
