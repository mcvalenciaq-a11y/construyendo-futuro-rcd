import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="bg-olive-700 relative overflow-hidden" aria-labelledby="final-cta-title">
      {/* Acento naranja decorativo */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-orange-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-orange-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-block bg-orange-600/25 text-cream-50 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Solicita tu cotización
            </span>
            <h2
              id="final-cta-title"
              className="font-display font-semibold text-section-h2 text-cream-50 leading-tight"
            >
              ¿Listo para gestionar tus RCD de forma responsable?
            </h2>
            <p className="text-cream-50/80 mt-4 text-lg leading-relaxed max-w-xl">
              Cuéntanos el volumen y la ubicación, y te entregamos una propuesta clara con tarifa, frecuencia y certificación incluida.
            </p>
          </div>

          <div className="flex flex-col gap-3 lg:items-end">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contacto">
                Solicitar cotización
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-cream-50/85 text-sm hover:text-orange-500 transition-colors group"
            >
              <Phone size={16} className="text-orange-500" aria-hidden="true" />
              <span className="border-b border-transparent group-hover:border-orange-500 transition-colors">
                o llámanos al {CONTACT.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
