import type { Metadata } from "next";
import { FileCheck, ShieldCheck, BookOpen, Calendar, Scale } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { InstitutionalSeals } from "@/components/normativa/InstitutionalSeals";

export const metadata: Metadata = {
  title: "Normativa y cumplimiento",
  description:
    "Cumplimos Resolución 0472 de 2017, Resolución 1257 de 2021 y Decreto 1076 de 2015. Cada servicio incluye Certificado de Disposición Adecuada de RCD válido ante la CVC.",
  alternates: { canonical: "/normativa" },
};

const NORMAS = [
  {
    value: "res-0472",
    icon: Scale,
    titulo: "Resolución 0472 de 2017",
    fecha: "Ministerio de Ambiente y Desarrollo Sostenible (MADS)",
    breve: "Reglamenta la gestión integral de RCD en Colombia. Define obligaciones para generadores, transportadores y gestores.",
    queExige: [
      "Que todo generador de RCD cuente con un Plan de Gestión Integral.",
      "Que el transporte de los residuos se realice en vehículos autorizados.",
      "Que la disposición se haga en plantas o sitios habilitados por la autoridad ambiental.",
      "Que cada gestión quede trazada documentalmente.",
    ],
    comoCumplimos: [
      "Operamos como gestor formal autorizado, con planta de procesamiento certificada.",
      "Entregamos el Certificado de Disposición Adecuada al final de cada servicio.",
      "Mantenemos registros de cada metro cúbico recibido, procesado y reincorporado.",
    ],
  },
  {
    value: "res-1257",
    icon: BookOpen,
    titulo: "Resolución 1257 de 2021",
    fecha: "Actualización de metas de aprovechamiento (MADS)",
    breve: "Establece metas progresivas de aprovechamiento de RCD: mínimo 40% en municipios pequeños y hasta 75% en grandes ciudades para el 2030.",
    queExige: [
      "Aprovechar un porcentaje mínimo del RCD generado por proyecto u obra.",
      "Reportar a la autoridad ambiental los volúmenes aprovechados.",
      "Priorizar la reincorporación del material reciclado a obras nuevas.",
    ],
    comoCumplimos: [
      "Procesamos el RCD recibido para producir agregados utilizables, no solo disposición.",
      "Generamos reportes de aprovechamiento por cliente con porcentaje real obtenido.",
      "Comercializamos los agregados reciclados para cerrar el ciclo.",
    ],
  },
  {
    value: "dec-1076",
    icon: FileCheck,
    titulo: "Decreto 1076 de 2015",
    fecha: "Decreto Único Reglamentario del Sector Ambiente",
    breve: "Consolida en un solo cuerpo normativo las disposiciones reglamentarias del sector ambiental, incluyendo lo aplicable a residuos.",
    queExige: [
      "Que la gestión de residuos se enmarque en los lineamientos de la política nacional ambiental.",
      "Que los gestores cumplan con permisos, licencias y registros ambientales según corresponda.",
      "Que se respeten los principios de prevención, precaución y responsabilidad ambiental.",
    ],
    comoCumplimos: [
      "Operación articulada con la CVC como autoridad ambiental regional.",
      "Procesos internos alineados con los principios de la política ambiental nacional.",
      "Documentación disponible para auditoría en cualquier momento.",
    ],
  },
];

export default function NormativaPage() {
  return (
    <>
      <PageHero
        eyebrow="Marco legal"
        title="Cumplimiento normativo certificado"
        description="No basta con recoger escombros. Operamos bajo el marco legal colombiano de gestión de RCD y respaldamos cada servicio con documentación verificable."
        breadcrumb={[{ label: "Normativa" }]}
      />

      {/* ACCORDION DE NORMAS */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="normas-title">
        <div className="container max-w-4xl">
          <div className="mb-10">
            <h2 id="normas-title" className="font-display font-semibold text-section-h2 leading-tight">
              Las normas que rigen nuestro trabajo
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Conoce qué exige cada norma y cómo Construyendo Futuro RCD garantiza su cumplimiento.
            </p>
          </div>

          <Accordion type="single" collapsible defaultValue="res-0472" className="space-y-3.5">
            {NORMAS.map((norma) => (
              <AccordionItem key={norma.value} value={norma.value}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-lg bg-olive-500/15 text-olive-700 flex items-center justify-center shrink-0">
                      <norma.icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-base md:text-lg text-olive-900 leading-tight">
                        {norma.titulo}
                      </h3>
                      <p className="flex items-center gap-1.5 text-xs text-concrete-500 mt-1">
                        <Calendar size={11} aria-hidden="true" />
                        {norma.fecha}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="border-t border-concrete-300/40 pt-5">
                    <p className="text-concrete-900 leading-relaxed mb-6">{norma.breve}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[11px] uppercase tracking-wider text-olive-700 font-bold mb-3">
                          Qué exige
                        </h4>
                        <ul className="space-y-2 text-sm text-concrete-900 leading-relaxed">
                          {norma.queExige.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-olive-500 font-bold mt-0.5">›</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-olive-500/8 border-l-2 border-olive-700 rounded-r-md p-4">
                        <h4 className="text-[11px] uppercase tracking-wider text-olive-900 font-bold mb-3">
                          Cómo cumplimos
                        </h4>
                        <ul className="space-y-2 text-sm text-concrete-900 leading-relaxed">
                          {norma.comoCumplimos.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <ShieldCheck size={14} className="mt-0.5 shrink-0 text-olive-700" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* BLOQUE DESTACADO: CERTIFICADO */}
      <section className="bg-olive-900 py-16 md:py-20 relative overflow-hidden" aria-labelledby="cert-title">
        <div className="absolute inset-0 bg-concrete-texture opacity-15 mix-blend-overlay" aria-hidden="true" />
        <div
          className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-orange-600/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="container relative z-10 max-w-4xl">
          <div className="bg-cream-50/5 border border-cream-50/15 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-flex h-16 w-16 rounded-full bg-orange-600/20 text-orange-500 items-center justify-center mb-5">
              <FileCheck size={28} aria-hidden="true" />
            </div>
            <h2
              id="cert-title"
              className="font-display font-semibold text-2xl md:text-3xl text-cream-50 mb-4 leading-tight"
            >
              Cada servicio incluye el Certificado de Disposición Adecuada de RCD
            </h2>
            <p className="text-cream-50/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Documento válido ante la CVC y autoridades ambientales que respalda la trazabilidad del residuo desde la obra hasta la planta de procesamiento.
            </p>
          </div>
        </div>
      </section>

      {/* SELLOS INSTITUCIONALES */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="seals-title">
        <div className="container">
          <h2 id="seals-title" className="sr-only">
            Entidades de referencia normativa
          </h2>
          <InstitutionalSeals />
        </div>
      </section>
    </>
  );
}
