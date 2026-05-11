import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ImpactStats } from "@/components/home/ImpactStats";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CircularEconomy } from "@/components/home/CircularEconomy";
import { WhyUs } from "@/components/home/WhyUs";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Construyendo Futuro RCD: gestión integral de Residuos de Construcción y Demolición en Roldanillo y el norte del Valle del Cauca. Cumplimiento normativo certificado.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ServicesPreview />
      <CircularEconomy />
      <WhyUs />
      <FinalCTA />
    </>
  );
}
