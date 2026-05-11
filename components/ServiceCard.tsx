import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ServicePlan } from "@/lib/services";

interface ServiceCardProps {
  service: ServicePlan;
  /** Variante extendida muestra "ideal para" + descripción más larga. */
  variant?: "compact" | "extended";
}

export function ServiceCard({ service, variant = "compact" }: ServiceCardProps) {
  const { numero, nombre, precioLabel, descripcion, idealPara, incluye, borderClass, accentClass, Icon, recomendado } = service;
  return (
    <article
      className={cn(
        "relative bg-white rounded-xl border-2 p-7 md:p-8 transition-all duration-300 flex flex-col",
        borderClass,
        recomendado
          ? "shadow-lg shadow-orange-600/10 lg:scale-[1.025] lg:-translate-y-1"
          : "shadow-sm hover:shadow-md hover:-translate-y-0.5"
      )}
      id={service.key}
    >
      {recomendado && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-cream-50 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
          Más completo
        </span>
      )}

      <div className="flex items-start justify-between mb-5">
        <div
          className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center",
            recomendado ? "bg-orange-600/12 text-orange-600" : "bg-olive-500/15 text-olive-700"
          )}
        >
          <Icon size={22} aria-hidden="true" />
        </div>
        <span className="font-display text-xs font-medium tracking-widest text-concrete-500">
          {numero}
        </span>
      </div>

      <h3 className="font-display font-semibold text-2xl text-olive-900 mb-2">
        {nombre}
      </h3>
      <p className="text-sm text-concrete-700 leading-relaxed mb-5">
        {descripcion}
      </p>

      <div className="mb-6">
        <div className="flex items-baseline gap-1.5">
          <span className={cn("font-display font-bold text-4xl", accentClass)}>{precioLabel}</span>
          <span className="text-sm text-concrete-500 font-medium">/ m³ COP</span>
        </div>
        <p className="text-xs text-concrete-500 mt-1">Incluye transporte</p>
      </div>

      {variant === "extended" && (
        <p className="text-sm text-concrete-700 mb-4">
          <span className="font-semibold text-olive-900">Ideal para: </span>
          {idealPara}
        </p>
      )}

      <ul className="space-y-2.5 mb-7 flex-1">
        {incluye.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-concrete-700">
            <Check
              size={16}
              className={cn("mt-0.5 shrink-0", recomendado ? "text-orange-600" : "text-olive-500")}
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={recomendado ? "primary" : "secondary"}
        className="w-full"
      >
        <Link href={`/servicios?plan=${service.key}#cotizador`}>
          Cotizar este servicio
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}
