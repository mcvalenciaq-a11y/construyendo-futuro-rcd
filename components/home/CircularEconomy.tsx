"use client";

import { motion } from "framer-motion";
import { HardHat, Truck, Factory, Cog, Boxes, Building2 } from "lucide-react";

const STEPS = [
  { num: "01", title: "Obra", desc: "Generación de RCD en obra civil o demolición", Icon: HardHat },
  { num: "02", title: "Recolección", desc: "Retiro programado con transporte autorizado", Icon: Truck },
  { num: "03", title: "Planta", desc: "Llegada a planta certificada en Roldanillo", Icon: Factory },
  { num: "04", title: "Procesamiento", desc: "Trituración y clasificación por granulometría", Icon: Cog },
  { num: "05", title: "Material reciclado", desc: "Agregados gruesos, finos y material de lleno", Icon: Boxes },
  { num: "06", title: "Nueva obra", desc: "Reincorporación a obras y proyectos viales", Icon: Building2 },
];

export function CircularEconomy() {
  return (
    <section
      className="relative bg-olive-900 text-cream-50 py-20 md:py-28 overflow-hidden"
      aria-labelledby="circular-title"
    >
      <div className="absolute inset-0 bg-concrete-texture opacity-15 mix-blend-overlay" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          {/* Texto explicativo a la izquierda */}
          <div>
            <span className="inline-block bg-orange-600/20 text-orange-500 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Economía circular
            </span>
            <h2
              id="circular-title"
              className="font-display font-semibold text-section-h2 leading-tight text-cream-50 mb-5"
            >
              Cerramos el ciclo del material de construcción
            </h2>
            <p className="text-cream-50/75 text-lg leading-relaxed mb-4">
              Cada metro cúbico de escombro que entra a nuestra planta sale como material útil para nuevas obras: bases viales, rellenos estructurales y mejoramientos de terreno.
            </p>
            <p className="text-cream-50/75 leading-relaxed">
              Así reducimos la presión sobre canteras nuevas y damos cumplimiento a las metas de aprovechamiento de la Resolución 1257 de 2021.
            </p>
          </div>

          {/* Diagrama del ciclo */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {STEPS.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="relative bg-cream-50/5 border border-cream-50/15 rounded-lg p-4 md:p-5 backdrop-blur-sm hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-md bg-orange-600/15 text-orange-500 flex items-center justify-center shrink-0">
                      <step.Icon size={18} aria-hidden="true" />
                    </div>
                    <span className="font-display text-xs font-medium tracking-widest text-cream-50/45">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-cream-50 text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-cream-50/65 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Flecha entre nodos (excepto el último) */}
                  {idx < STEPS.length - 1 && (
                    <span
                      className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-5 w-5 items-center justify-center text-orange-500/70"
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7 4l6 6-6 6z" />
                      </svg>
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Indicador de ciclo cerrado debajo del grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex items-center gap-3 text-sm text-orange-500"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 18a12 12 0 0 1 21-7.8" />
                <path d="M27 6v6h-6" />
                <path d="M30 18a12 12 0 0 1-21 7.8" />
                <path d="M9 30v-6h6" />
              </svg>
              <span className="text-cream-50/90 font-medium">
                Ciclo cerrado: el material termina donde empezó, en una obra nueva.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
