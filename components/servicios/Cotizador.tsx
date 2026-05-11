"use client";

import { useMemo, useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { MessageCircle, ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SERVICES, type ServiceKey, getServiceByKey } from "@/lib/services";
import { MUNICIPIOS } from "@/lib/coverage";
import { formatCOP, whatsappLink, cn } from "@/lib/utils";

type Frecuencia = "unica" | "mensual" | "quincenal";

const FRECUENCIAS: { value: Frecuencia; label: string; descuento: number; descLabel: string }[] = [
  { value: "unica",     label: "Servicio único",   descuento: 0,    descLabel: "Sin descuento" },
  { value: "mensual",   label: "Mensual",          descuento: 0.03, descLabel: "3% descuento" },
  { value: "quincenal", label: "Quincenal",        descuento: 0.05, descLabel: "5% descuento" },
];

const ALTO_VOLUMEN_DESCUENTO = 0.08;

interface Descuento {
  label: string;
  pct: number;
  monto: number;
}

/** Wrapper con Suspense porque useSearchParams() lo requiere en Next 14 */
export function Cotizador() {
  return (
    <Suspense fallback={<CotizadorSkeleton />}>
      <CotizadorInner />
    </Suspense>
  );
}

function CotizadorSkeleton() {
  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-8" aria-busy="true">
      <div className="h-[520px] bg-white rounded-xl border border-concrete-300/50 animate-pulse" />
      <div className="h-[520px] bg-white rounded-xl border border-concrete-300/50 animate-pulse" />
    </div>
  );
}

function CotizadorInner() {
  const searchParams = useSearchParams();
  const planFromUrl = searchParams.get("plan") as ServiceKey | null;
  const initialPlan: ServiceKey =
    planFromUrl && ["basico", "procesamiento", "integral"].includes(planFromUrl)
      ? planFromUrl
      : "procesamiento";

  const [planKey, setPlanKey] = useState<ServiceKey>(initialPlan);
  const [volumen, setVolumen] = useState<number>(20);
  const [municipio, setMunicipio] = useState<string>(MUNICIPIOS[0].nombre);
  const [frecuencia, setFrecuencia] = useState<Frecuencia>("unica");
  const [altoVolumen, setAltoVolumen] = useState<boolean>(false);

  // Sincronizar si el parámetro de URL cambia (caso de navegación interna).
  useEffect(() => {
    if (planFromUrl && ["basico", "procesamiento", "integral"].includes(planFromUrl)) {
      setPlanKey(planFromUrl);
    }
  }, [planFromUrl]);

  const plan = getServiceByKey(planKey);
  const frecConfig = FRECUENCIAS.find((f) => f.value === frecuencia)!;

  // Cálculo memoizado del total
  const calc = useMemo(() => {
    const volSafe = Math.max(1, Math.min(500, volumen || 1));
    const base = volSafe * plan.precio;
    const descuentos: Descuento[] = [];

    if (frecConfig.descuento > 0) {
      descuentos.push({
        label: `Frecuencia ${frecConfig.label.toLowerCase()}`,
        pct: frecConfig.descuento,
        monto: base * frecConfig.descuento,
      });
    }
    if (altoVolumen) {
      descuentos.push({
        label: "Alto volumen (> 50 m³ mensuales)",
        pct: ALTO_VOLUMEN_DESCUENTO,
        monto: base * ALTO_VOLUMEN_DESCUENTO,
      });
    }
    const totalDescuento = descuentos.reduce((acc, d) => acc + d.monto, 0);
    const total = base - totalDescuento;
    return { base, descuentos, total, volSafe };
  }, [volumen, plan.precio, frecConfig, altoVolumen]);

  const whatsappMsg = `Hola, quiero cotizar el ${plan.nombre} (${plan.precioLabel}/m³) para ${calc.volSafe} m³ en ${municipio}, frecuencia ${frecConfig.label.toLowerCase()}. Valor estimado: ${formatCOP(calc.total)} COP.`;

  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6 lg:gap-8">
      {/* COLUMNA IZQUIERDA: inputs */}
      <div className="bg-white rounded-xl border border-concrete-300/50 p-6 md:p-8 space-y-7">
        {/* Tipo de servicio */}
        <fieldset>
          <legend className="font-display font-semibold text-olive-900 text-base mb-3">
            Tipo de servicio
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
            {SERVICES.map((s) => {
              const selected = s.key === planKey;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setPlanKey(s.key)}
                  className={cn(
                    "text-left rounded-lg border-2 p-3.5 transition-all",
                    selected
                      ? "border-orange-600 bg-orange-600/5"
                      : "border-concrete-300 hover:border-olive-500 bg-white"
                  )}
                  aria-pressed={selected}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-semibold text-sm text-olive-900">
                      {s.shortName}
                    </span>
                    {selected && (
                      <span className="h-4 w-4 rounded-full bg-orange-600 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2">
                          <path d="M2 5l2 2 4-4" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-concrete-700">{s.precioLabel} / m³</p>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Volumen */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <Label htmlFor="cot-volumen">Volumen estimado (m³)</Label>
            <span className="font-display font-bold text-2xl text-olive-900">
              {calc.volSafe}
              <span className="text-sm font-medium text-concrete-500 ml-1">m³</span>
            </span>
          </div>
          <input
            id="cot-volumen"
            type="range"
            min={1}
            max={500}
            step={1}
            value={volumen}
            onChange={(e) => setVolumen(parseInt(e.target.value) || 1)}
            className="w-full accent-orange-600 h-2 cursor-pointer"
            aria-valuemin={1}
            aria-valuemax={500}
            aria-valuenow={volumen}
          />
          <div className="flex items-center gap-3 mt-3">
            <Input
              type="number"
              min={1}
              max={500}
              value={volumen}
              onChange={(e) => setVolumen(parseInt(e.target.value) || 1)}
              className="w-32"
              aria-label="Volumen en metros cúbicos (entrada numérica)"
            />
            <p className="text-xs text-concrete-500">Rango: 1 a 500 m³</p>
          </div>
        </div>

        {/* Municipio */}
        <div>
          <Label htmlFor="cot-municipio">Municipio de recolección</Label>
          <select
            id="cot-municipio"
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            className="mt-2 flex h-11 w-full rounded-md border border-concrete-300 bg-white px-3 py-2 text-sm text-concrete-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2 focus-visible:border-orange-600"
          >
            {MUNICIPIOS.map((m) => (
              <option key={m.slug} value={m.nombre}>
                {m.nombre}
                {m.esSede ? " (sede)" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Frecuencia */}
        <fieldset>
          <legend className="font-display font-semibold text-olive-900 text-base mb-3">
            Frecuencia
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {FRECUENCIAS.map((f) => {
              const selected = f.value === frecuencia;
              return (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => setFrecuencia(f.value)}
                  className={cn(
                    "text-left rounded-lg border-2 p-3 transition-all",
                    selected
                      ? "border-olive-700 bg-olive-700/5"
                      : "border-concrete-300 hover:border-olive-500"
                  )}
                  aria-pressed={selected}
                >
                  <p className="font-medium text-sm text-olive-900">{f.label}</p>
                  <p className={cn("text-xs mt-0.5", f.descuento > 0 ? "text-olive-700 font-medium" : "text-concrete-500")}>
                    {f.descLabel}
                  </p>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Checkbox alto volumen */}
        <label className="flex items-start gap-3 p-4 rounded-lg border-2 border-concrete-300 hover:border-olive-500 cursor-pointer transition-colors">
          <input
            type="checkbox"
            checked={altoVolumen}
            onChange={(e) => setAltoVolumen(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-concrete-300 text-orange-600 focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
          />
          <div className="flex-1">
            <p className="font-medium text-sm text-olive-900">
              Generación mensual mayor a 50 m³
            </p>
            <p className="text-xs text-concrete-700 mt-0.5">
              Aplica descuento adicional de 8% sobre el precio base.
            </p>
          </div>
        </label>
      </div>

      {/* COLUMNA DERECHA: resumen sticky */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="bg-olive-900 text-cream-50 rounded-xl p-6 md:p-7 shadow-lg">
          <p className="text-xs uppercase tracking-wider text-cream-50/55 font-medium mb-1">
            Tu cotización
          </p>
          <h3 className="font-display font-semibold text-xl text-cream-50 mb-5">
            {plan.nombre}
          </h3>

          <div className="space-y-2.5 text-sm border-b border-cream-50/15 pb-4 mb-4">
            <Row label={`${calc.volSafe} m³ × ${plan.precioLabel}`} value={formatCOP(calc.base)} />
            {calc.descuentos.map((d) => (
              <Row
                key={d.label}
                label={d.label}
                value={`− ${formatCOP(d.monto)}`}
                valueClass="text-olive-500"
                small
              />
            ))}
          </div>

          <div className="flex items-end justify-between mb-2">
            <span className="text-cream-50/70 text-sm">Valor estimado total</span>
          </div>
          <div className="font-display font-bold text-4xl text-orange-500 mb-1">
            {formatCOP(calc.total)}
          </div>
          <p className="text-xs text-cream-50/55 mb-6">COP, IVA incluido cuando aplique</p>

          <div className="flex items-start gap-2 mb-5 text-xs text-cream-50/65 leading-relaxed">
            <Info size={14} className="mt-0.5 shrink-0 text-orange-500" aria-hidden="true" />
            <p>
              Cotización referencial. El valor final se confirma tras visita técnica.
            </p>
          </div>

          <div className="space-y-2.5">
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white">
              <a href={whatsappLink(whatsappMsg)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" />
                Enviar por WhatsApp
              </a>
            </Button>
            <Button asChild variant="outlineLight" className="w-full">
              <Link href="/contacto">
                Solicitar cotización formal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, valueClass, small }: { label: string; value: string; valueClass?: string; small?: boolean }) {
  return (
    <div className={cn("flex items-center justify-between gap-3", small && "text-xs")}>
      <span className="text-cream-50/75">{label}</span>
      <span className={cn("font-medium tabular-nums text-cream-50", valueClass)}>{value}</span>
    </div>
  );
}
