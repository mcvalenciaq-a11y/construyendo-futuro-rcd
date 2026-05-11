import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="services-title">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Nuestros servicios
          </span>
          <h2 id="services-title" className="font-display font-semibold text-section-h2 leading-tight">
            Tres planes según el tamaño y la complejidad de tu obra
          </h2>
          <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
            Cada servicio incluye transporte y entrega del Certificado de Disposición Adecuada de RCD, válido ante la CVC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 lg:pt-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.key} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="secondary" size="lg">
            <Link href="/servicios">
              Comparar planes en detalle
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
