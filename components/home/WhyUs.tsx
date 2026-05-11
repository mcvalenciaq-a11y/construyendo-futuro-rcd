import { ShieldCheck, FileText, BadgePercent, Wrench, MapPinned, Leaf } from "lucide-react";

const FEATURES = [
  {
    Icon: ShieldCheck,
    title: "Cumplimiento normativo",
    desc: "Operamos bajo Res. 0472/2017, Res. 1257/2021 y Decreto 1076/2015.",
  },
  {
    Icon: FileText,
    title: "Trazabilidad documentada",
    desc: "Certificado de disposición y reportes ante la CVC con cada servicio.",
  },
  {
    Icon: BadgePercent,
    title: "Precios competitivos",
    desc: "Tarifas por m³ con transporte incluido y descuentos por frecuencia.",
  },
  {
    Icon: Wrench,
    title: "Maquinaria propia",
    desc: "Planta de trituración y clasificación operada por personal calificado.",
  },
  {
    Icon: MapPinned,
    title: "Cobertura regional",
    desc: "6 municipios del norte del Valle con recolección programada.",
  },
  {
    Icon: Leaf,
    title: "Impacto ambiental positivo",
    desc: "Reducimos la presión sobre canteras nuevas reincorporando agregados.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-cream-50 py-20 md:py-24" aria-labelledby="why-title">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Por qué elegirnos
          </span>
          <h2 id="why-title" className="font-display font-semibold text-section-h2 leading-tight">
            Operación seria, técnica y verificable
          </h2>
          <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
            No somos un volquetero más: somos un gestor formal de RCD con responsabilidad ambiental certificada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="bg-white rounded-xl border border-concrete-300/50 p-6 hover:border-olive-500 hover:shadow-md transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-lg bg-olive-500/15 text-olive-700 flex items-center justify-center mb-4">
                <f.Icon size={20} aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-lg text-olive-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-concrete-700 leading-relaxed">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
