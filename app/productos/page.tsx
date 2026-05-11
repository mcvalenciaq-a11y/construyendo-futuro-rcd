import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AggregateSVG } from "@/components/productos/AggregateSVG";
import { Button } from "@/components/ui/button";
import { PRODUCTOS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Productos reciclados",
  description:
    "Portafolio de agregados reciclados de Construyendo Futuro RCD: agregado grueso, agregado fino y material de lleno para obras del norte del Valle del Cauca.",
  alternates: { canonical: "/productos" },
};

export default function ProductosPage() {
  return (
    <>
      <PageHero
        eyebrow="Portafolio"
        title="Productos reciclados con valor técnico"
        description="Materiales clasificados que regresan al ciclo productivo. Cada referencia tiene aplicaciones específicas y cumple parámetros de granulometría definidos por la normativa nacional."
        breadcrumb={[{ label: "Productos" }]}
      />

      {/* GRID DE 3 PRODUCTOS */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="products-title">
        <div className="container">
          <h2 id="products-title" className="sr-only">
            Referencias del portafolio
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
            {PRODUCTOS.map((producto) => (
              <article
                key={producto.key}
                className="bg-white rounded-xl border border-concrete-300/50 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                {/* SVG ilustrativo */}
                <div className="aspect-[2/1] bg-concrete-100 relative overflow-hidden">
                  <AggregateSVG producto={producto} />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-cream-50/95 backdrop-blur-sm text-olive-700 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-olive-500/30">
                      <ShieldCheck size={11} aria-hidden="true" />
                      Cumple Res. 0472/2017
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-xl text-olive-900 mb-3">
                    {producto.nombre}
                  </h3>

                  <dl className="grid grid-cols-2 gap-3 mb-5 pb-5 border-b border-concrete-300/50">
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold mb-1">
                        Granulometría
                      </dt>
                      <dd className="text-sm font-medium text-concrete-900">
                        {producto.granulometria}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold mb-1">
                        Color real
                      </dt>
                      <dd className="flex items-center gap-2 text-sm font-medium text-concrete-900">
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-concrete-300"
                          style={{ background: producto.colorHex }}
                          aria-hidden="true"
                        />
                        {producto.colorReal}
                      </dd>
                    </div>
                  </dl>

                  <p className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold mb-2.5">
                    Usos recomendados
                  </p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {producto.usos.map((uso) => (
                      <li key={uso} className="flex items-start gap-2 text-sm text-concrete-900">
                        <Check size={15} className="mt-0.5 shrink-0 text-olive-500" aria-hidden="true" />
                        <span>{uso}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-concrete-100/70 rounded-md p-3.5 text-xs text-concrete-700 leading-relaxed border-l-2 border-olive-700">
                    <p className="font-semibold text-olive-900 mb-1 text-[11px] uppercase tracking-wider">
                      Nota técnica
                    </p>
                    {producto.notaTecnica}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUE: CUÁNDO USAR RECICLADO VS NUEVO */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="when-title">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div>
              <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Recomendación honesta
              </span>
              <h2 id="when-title" className="font-display font-semibold text-section-h2 leading-tight">
                ¿Cuándo conviene material reciclado y cuándo no?
              </h2>
              <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
                Los agregados reciclados son una excelente alternativa para muchas aplicaciones, pero no reemplazan al material virgen en todas las situaciones. Te lo decimos claro.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="bg-olive-500/8 border border-olive-500/30 rounded-lg p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-8 w-8 rounded-md bg-olive-500/20 text-olive-700 flex items-center justify-center">
                    <Check size={16} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-olive-900">
                    Sí usar reciclado
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-concrete-900 leading-relaxed">
                  <li>• Bases y sub-bases viales de carácter no estructural</li>
                  <li>• Rellenos, nivelaciones y conformación de taludes</li>
                  <li>• Drenajes, filtros y obras de contención menores</li>
                  <li>• Mejoramiento de suelos de baja capacidad</li>
                </ul>
              </div>

              <div className="bg-orange-600/5 border border-orange-600/30 rounded-lg p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="h-8 w-8 rounded-md bg-orange-600/15 text-orange-600 flex items-center justify-center">
                    <AlertTriangle size={16} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-olive-900">
                    Pedir agregado virgen
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-concrete-900 leading-relaxed">
                  <li>• Concretos estructurales con resistencias exigentes</li>
                  <li>• Capas de rodadura en pavimentos asfálticos</li>
                  <li>• Aplicaciones que exijan cumplimiento estricto de norma INVIAS sin reciclaje</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-concrete-100/60 rounded-xl p-8">
            <p className="text-concrete-900 max-w-2xl mx-auto mb-5">
              ¿No estás seguro de qué material necesitas para tu obra? Te asesoramos sin costo según el tipo de proyecto y las especificaciones técnicas.
            </p>
            <Button asChild size="lg">
              <Link href="/contacto">
                Hablar con un asesor
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
