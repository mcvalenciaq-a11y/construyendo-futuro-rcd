import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { ComparisonTable } from "@/components/servicios/ComparisonTable";
import { Cotizador } from "@/components/servicios/Cotizador";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios y Cotizador",
  description:
    "Tres planes de gestión de RCD: Básico, Procesamiento e Integral. Tarifas claras por m³ con transporte incluido. Cotiza en línea según volumen, municipio y frecuencia.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Tres planes para cada tipo de obra"
        description="Desde la recolección puntual hasta la gestión 360° con trazabilidad ante la CVC. Elige el plan que mejor se ajusta a tu generación de RCD."
        breadcrumb={[{ label: "Servicios" }]}
      />

      {/* SECCIÓN: 3 TARJETAS EXPANDIDAS */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="planes-title">
        <div className="container">
          <h2 id="planes-title" className="sr-only">
            Planes disponibles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 lg:pt-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.key} service={service} variant="extended" />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: TABLA COMPARATIVA */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="comparison-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Comparativa
            </span>
            <h2 id="comparison-title" className="font-display font-semibold text-section-h2 leading-tight">
              ¿Qué incluye cada plan?
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Vista lado a lado de las características incluidas en cada nivel de servicio.
            </p>
          </div>
          <ComparisonTable />
          <p className="text-xs text-concrete-500 mt-4 text-center">
            Todos los planes incluyen transporte y certificado de disposición adecuada.
          </p>
        </div>
      </section>

      {/* SECCIÓN: COTIZADOR */}
      <section
        id="cotizador"
        className="bg-concrete-100/60 py-16 md:py-24 scroll-mt-20"
        aria-labelledby="cotizador-title"
      >
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-orange-600/15 text-orange-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Cotizador en línea
            </span>
            <h2 id="cotizador-title" className="font-display font-semibold text-section-h2 leading-tight">
              Calcula el valor estimado de tu servicio
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Ajusta el servicio, volumen, municipio y frecuencia. El total se actualiza en tiempo real y puedes enviarlo directamente por WhatsApp.
            </p>
          </div>
          <Cotizador />
        </div>
      </section>
    </>
  );
}
