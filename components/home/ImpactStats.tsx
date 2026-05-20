"use client";

import { Trash2, MapPin, Target, BadgeCheck } from "lucide-react";

import { StatCounter } from "@/components/StatCounter";

const STATS = [

  {

    value: 68308,

    suffix: " ton",

    label: "Demanda anual estimada de RCD en la región",

    icon: <Trash2 size={22} aria-hidden="true" />,

  },

  {

    value: 6,

    label: "Municipios cubiertos en el norte del Valle",

    icon: <MapPin size={22} aria-hidden="true" />,

  },

  {

    value: 75,

    suffix: "%",

    label: "Meta nacional de aprovechamiento de RCD al 2030",

    icon: <Target size={22} aria-hidden="true" />,

  },

  {

    value: 100,

    suffix: "%",

    label: "Cumplimiento normativo desde el primer servicio",

    icon: <BadgeCheck size={22} aria-hidden="true" />,

  },

];

export function ImpactStats() {

  return (

    <section className="bg-cream-50 py-20 md:py-24" aria-labelledby="impact-title">

      <div className="container">

        <div className="max-w-2xl mb-14">

          <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">

            Cifras de impacto

          </span>

          <h2 id="impact-title" className="font-display font-semibold text-section-h2 leading-tight">

            Una oportunidad real en el norte del Valle del Cauca

          </h2>

          <p className="text-concrete-700 text-lg mt-4 leading-relaxed">

            La gestión adecuada de RCD ya no es opcional: es una obligación normativa y una oportunidad ambiental.

          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

          {STATS.map((stat) => (

            <StatCounter

              key={stat.label}

              value={stat.value}

              suffix={stat.suffix}

              label={stat.label}

              icon={stat.icon}

            />

          ))}

        </div>

      </div>

    </section>

  );

}
