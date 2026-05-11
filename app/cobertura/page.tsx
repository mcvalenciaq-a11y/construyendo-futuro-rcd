import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Truck, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ValleMap } from "@/components/cobertura/ValleMap";
import { Button } from "@/components/ui/button";
import { MUNICIPIOS } from "@/lib/coverage";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Cobertura geográfica",
  description:
    "Cubrimos 6 municipios del norte del Valle del Cauca con servicio de recolección programada de RCD desde nuestra planta en Roldanillo.",
  alternates: { canonical: "/cobertura" },
};

export default function CoberturaPage() {
  return (
    <>
      <PageHero
        eyebrow="Cobertura"
        title="Operamos en el norte del Valle del Cauca"
        description="Desde nuestra planta en Roldanillo brindamos servicio de gestión de RCD a seis municipios de la región, con rutas programadas y respuesta bajo demanda."
        breadcrumb={[{ label: "Cobertura" }]}
      />

      {/* MAPA */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="map-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h2 id="map-title" className="font-display font-semibold text-section-h2 leading-tight">
              Mapa de operación
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Pasa el cursor sobre cada punto para ver el detalle del servicio. La planta de procesamiento está en Roldanillo y desde allí salen las rutas hacia los demás municipios.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-concrete-300/50 p-6 md:p-10 shadow-sm">
            <ValleMap />
          </div>
        </div>
      </section>

      {/* CARDS DE MUNICIPIOS */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="list-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Detalle por municipio
            </span>
            <h2 id="list-title" className="font-display font-semibold text-section-h2 leading-tight">
              Tiempos de servicio y distancia a planta
            </h2>
          </div>

          <div className="grid gap-3.5">
            {MUNICIPIOS.map((m) => (
              <article
                key={m.slug}
                className={cn(
                  "bg-white rounded-xl border-2 p-5 md:p-6 transition-all",
                  m.esSede
                    ? "border-orange-600 shadow-md shadow-orange-600/8"
                    : "border-concrete-300/60 hover:border-olive-500 hover:shadow-sm"
                )}
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] md:items-center gap-4 md:gap-8">
                  <div className="flex items-start gap-3">
                    <div
                      className={cn(
                        "h-11 w-11 rounded-lg flex items-center justify-center shrink-0",
                        m.esSede ? "bg-orange-600/15 text-orange-600" : "bg-olive-500/15 text-olive-700"
                      )}
                    >
                      <MapPin size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-semibold text-lg text-olive-900">
                          {m.nombre}
                        </h3>
                        {m.esSede && (
                          <span className="text-[10px] uppercase tracking-wider font-bold bg-orange-600 text-cream-50 px-2 py-0.5 rounded">
                            Sede
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-concrete-700 mt-0.5">{m.tooltip}</p>
                    </div>
                  </div>

                  <div className="md:border-l md:border-concrete-300/60 md:pl-8 flex items-center gap-2.5 text-sm">
                    <Truck size={16} className="text-concrete-500" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold">
                        Distancia
                      </p>
                      <p className="font-medium text-concrete-900">
                        {m.esSede ? "—" : `${m.distanciaKm} km`}
                      </p>
                    </div>
                  </div>

                  <div className="md:border-l md:border-concrete-300/60 md:pl-8 flex items-center gap-2.5 text-sm">
                    <Clock size={16} className="text-concrete-500" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold">
                        Frecuencia
                      </p>
                      <p className="font-medium text-concrete-900">{m.frecuencia}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 bg-olive-700 rounded-xl p-8 text-cream-50 text-center">
            <h3 className="font-display font-semibold text-xl mb-2">
              ¿Tu obra está fuera de esta cobertura?
            </h3>
            <p className="text-cream-50/85 max-w-xl mx-auto mb-5">
              Evaluamos cobertura ampliada para volúmenes mayores a 30 m³ o contratos de operación continua.
            </p>
            <Button asChild>
              <Link href="/contacto">
                Consultar disponibilidad
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
