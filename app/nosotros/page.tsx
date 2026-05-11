import type { Metadata } from "next";
import { Target, Eye, Heart, TrendingUp, Lightbulb, AlertCircle, Cloud } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Construyendo Futuro RCD nace en Roldanillo como respuesta a la necesidad de formalización de la gestión de Residuos de Construcción y Demolición en el norte del Valle del Cauca.",
  alternates: { canonical: "/nosotros" },
};

const SOCIOS = [
  { iniciales: "RT", nombre: "Ricardo Alonso Tabares", rol: "Gerente General · Representante Legal", participacion: "25%" },
  { iniciales: "MN", nombre: "Marcela Narváez",         rol: "Socia Fundadora",                       participacion: "25%" },
  { iniciales: "MS", nombre: "María de los Ángeles Serrano", rol: "Socia Fundadora",                  participacion: "25%" },
  { iniciales: "AC", nombre: "Ana María Castaño",       rol: "Socia Fundadora",                       participacion: "25%" },
];

const PILARES = [
  {
    Icon: Target,
    titulo: "Misión",
    texto:
      "Gestionar integralmente los Residuos de Construcción y Demolición en el norte del Valle del Cauca, transformándolos en materiales útiles para nuevas obras y garantizando el cumplimiento normativo de cada proyecto que confía en nosotros.",
  },
  {
    Icon: Eye,
    titulo: "Visión",
    texto:
      "Ser para el año 2030 el referente regional en economía circular aplicada al sector de la construcción en el Valle del Cauca, contribuyendo activamente a las metas nacionales de aprovechamiento de RCD.",
  },
  {
    Icon: Heart,
    titulo: "Valores",
    texto:
      "Responsabilidad ambiental, transparencia operativa, cumplimiento normativo, compromiso con la comunidad y mejora técnica continua. Operar con seriedad es la base de toda relación duradera con el cliente.",
  },
];

const DOFA = {
  fortalezas: {
    Icon: TrendingUp,
    color: "olive",
    titulo: "Fortalezas",
    items: [
      "Equipo socio interdisciplinario con presencia local",
      "Modelo de negocio alineado con normativa vigente",
      "Cobertura regional definida y operable",
    ],
  },
  oportunidades: {
    Icon: Lightbulb,
    color: "orange",
    titulo: "Oportunidades",
    items: [
      "Demanda creciente por metas de aprovechamiento al 2030",
      "Vacío de gestores formales en el norte del Valle",
      "Articulación con contratos de obra pública",
    ],
  },
  debilidades: {
    Icon: AlertCircle,
    color: "concrete",
    titulo: "Debilidades",
    items: [
      "Empresa joven en proceso de posicionamiento de marca",
      "Inversión inicial considerable en maquinaria",
      "Curva de adopción del mercado de agregados reciclados",
    ],
  },
  amenazas: {
    Icon: Cloud,
    color: "concrete",
    titulo: "Amenazas",
    items: [
      "Volqueteros informales con tarifas no reguladas",
      "Sensibilidad del sector construcción a ciclos económicos",
      "Cambios regulatorios que ajusten obligaciones técnicas",
    ],
  },
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una respuesta formal a un problema regional"
        description="Construyendo Futuro RCD nace para llenar un vacío: la falta de gestión técnica y normativa de los residuos de construcción en el norte del Valle del Cauca."
        breadcrumb={[{ label: "Nosotros" }]}
      />

      {/* HISTORIA */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="history-title">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
            <div className="md:sticky md:top-24">
              <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Nuestra historia
              </span>
              <h2 id="history-title" className="font-display font-semibold text-section-h2 leading-tight">
                Cómo empezó el proyecto
              </h2>
            </div>
            <div className="space-y-5 text-concrete-900 leading-relaxed text-lg">
              <p>
                El proyecto nace en Roldanillo a partir de una observación simple: en el norte del Valle del Cauca había mucha construcción y demolición, pero pocos gestores formales que cumplieran la normativa ambiental vigente. Los residuos terminaban en rellenos sanitarios saturados o, peor, en zonas no autorizadas, generando un problema ambiental que ya no podía postergarse.
              </p>
              <p>
                Construyendo Futuro RCD se constituyó como SAS con cuatro socios fundadores que comparten una misma convicción: la economía circular aplicada al sector construcción no es una moda sino una obligación legal y ambiental con horizonte al 2030.
              </p>
              <p>
                Hoy operamos una planta de procesamiento en Roldanillo con cobertura para seis municipios de la región, ofreciendo no solo recolección sino el ciclo completo: clasificación, trituración, reincorporación y trazabilidad documentada ante la CVC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO - LOS 4 SOCIOS */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="team-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Nuestro equipo
            </span>
            <h2 id="team-title" className="font-display font-semibold text-section-h2 leading-tight">
              Cuatro socios, una misma visión
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Equipo interdisciplinario comprometido con la economía circular en el Valle del Cauca. Cada socio aporta una perspectiva complementaria al proyecto, con participación equitativa del 25%.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SOCIOS.map((socio) => (
              <article
                key={socio.iniciales}
                className="bg-cream-50 rounded-xl border border-concrete-300/50 p-6 text-center hover:border-olive-500 hover:shadow-md transition-all"
              >
                {/* Monograma con iniciales sobre fondo olive-700 */}
                <div
                  aria-hidden="true"
                  className="h-20 w-20 mx-auto rounded-full bg-olive-700 text-cream-50 flex items-center justify-center font-display font-bold text-2xl mb-4 shadow-sm"
                >
                  {socio.iniciales}
                </div>
                <h3 className="font-display font-semibold text-base text-olive-900 leading-snug mb-1">
                  {socio.nombre}
                </h3>
                <p className="text-xs text-concrete-700 leading-relaxed mb-3">{socio.rol}</p>
                <span className="inline-block bg-olive-500/15 text-olive-700 text-[10.5px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Participación {socio.participacion}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN / VALORES */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="mvv-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <h2 id="mvv-title" className="font-display font-semibold text-section-h2 leading-tight">
              Misión, visión y valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILARES.map((p) => (
              <article
                key={p.titulo}
                className="bg-white rounded-xl border border-concrete-300/50 p-7 hover:border-olive-500 hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-orange-600/15 text-orange-600 flex items-center justify-center mb-5">
                  <p.Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-olive-900 mb-3">{p.titulo}</h3>
                <p className="text-sm text-concrete-700 leading-relaxed">{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOFA */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="dofa-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Análisis estratégico
            </span>
            <h2 id="dofa-title" className="font-display font-semibold text-section-h2 leading-tight">
              Análisis DOFA
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Conocemos nuestro contexto. Esta lectura honesta del entorno guía las decisiones estratégicas del equipo socio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(DOFA).map(([key, block]) => {
              const colorClasses = block.color === "olive"
                ? "border-olive-500/60 bg-olive-500/5"
                : block.color === "orange"
                  ? "border-orange-600/40 bg-orange-600/5"
                  : "border-concrete-300 bg-concrete-100/40";
              const iconClasses = block.color === "olive"
                ? "bg-olive-500/15 text-olive-700"
                : block.color === "orange"
                  ? "bg-orange-600/15 text-orange-600"
                  : "bg-concrete-300/40 text-concrete-700";
              return (
                <article
                  key={key}
                  className={`rounded-xl border-2 p-5 ${colorClasses}`}
                >
                  <div className={`h-10 w-10 rounded-lg flex items-center justify-center mb-4 ${iconClasses}`}>
                    <block.Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-olive-900 mb-3">
                    {block.titulo}
                  </h3>
                  <ul className="space-y-2 text-xs text-concrete-900 leading-relaxed">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-olive-700 font-bold mt-0.5">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
