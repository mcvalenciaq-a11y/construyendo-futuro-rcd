"use client";

import { useState } from "react";
import { MUNICIPIOS } from "@/lib/coverage";
import { cn } from "@/lib/utils";

/**
 * Mapa SVG simplificado del norte del Valle del Cauca.
 * No es cartográficamente preciso: es una representación esquemática que
 * sitúa los 6 municipios sobre una silueta de la región y el río Cauca.
 */
export function ValleMap() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto"
        role="img"
        aria-label="Mapa del norte del Valle del Cauca con los 6 municipios cubiertos"
      >
        {/* Contorno de la región (forma irregular sugiriendo el norte del Valle) */}
        <defs>
          <linearGradient id="region-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2F1ED" />
            <stop offset="100%" stopColor="#E5E2D8" />
          </linearGradient>
        </defs>

        <path
          d="M15 18 Q 25 8, 45 12 Q 65 6, 82 18 Q 92 32, 88 50 Q 92 68, 80 82 Q 60 92, 42 88 Q 22 90, 12 75 Q 6 55, 10 38 Z"
          fill="url(#region-grad)"
          stroke="#BFBFBF"
          strokeWidth="0.6"
        />

        {/* Río Cauca (línea curva azulada) */}
        <path
          d="M 18 22 Q 28 35, 32 50 Q 36 65, 30 80 Q 28 86, 22 90"
          fill="none"
          stroke="#7BA7C4"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.55"
          strokeDasharray="0"
        />
        <text x="20" y="20" fontSize="2.6" fill="#7BA7C4" opacity="0.7" fontFamily="sans-serif" fontStyle="italic">
          Río Cauca
        </text>

        {/* Etiqueta regional */}
        <text x="50" y="8" fontSize="3" fill="#3D3D3D" textAnchor="middle" fontFamily="sans-serif" fontWeight="600" opacity="0.5">
          NORTE DEL VALLE DEL CAUCA
        </text>

        {/* Líneas de conexión entre la sede y los demás (rutas de servicio) */}
        {MUNICIPIOS.filter((m) => !m.esSede).map((m) => {
          const sede = MUNICIPIOS.find((x) => x.esSede)!;
          return (
            <line
              key={`route-${m.slug}`}
              x1={sede.x}
              y1={sede.y}
              x2={m.x}
              y2={m.y}
              stroke="#D97742"
              strokeWidth="0.35"
              strokeDasharray="1.5 1"
              opacity="0.45"
            />
          );
        })}

        {/* Pines de los municipios */}
        {MUNICIPIOS.map((m, idx) => {
          const isHover = hoverIdx === idx;
          const isSede = !!m.esSede;
          return (
            <g
              key={m.slug}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              onFocus={() => setHoverIdx(idx)}
              onBlur={() => setHoverIdx(null)}
              tabIndex={0}
              role="button"
              aria-label={`${m.nombre}: ${m.tooltip}`}
              className="cursor-pointer focus:outline-none"
              style={{ outline: "none" }}
            >
              {/* Onda pulsante para la sede */}
              {isSede && (
                <circle
                  cx={m.x}
                  cy={m.y}
                  r="5"
                  fill="none"
                  stroke="#D97742"
                  strokeWidth="0.5"
                  opacity="0.35"
                  className="animate-pulse-soft"
                />
              )}

              {/* Halo en hover */}
              {isHover && (
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={isSede ? "4.2" : "3.5"}
                  fill={isSede ? "#D97742" : "#6B8E3D"}
                  opacity="0.25"
                />
              )}

              {/* Pin (círculo principal) */}
              <circle
                cx={m.x}
                cy={m.y}
                r={isSede ? "2.6" : "1.8"}
                fill={isSede ? "#D97742" : "#6B8E3D"}
                stroke="#FBFAF7"
                strokeWidth="0.6"
              />

              {/* Etiqueta con el nombre del municipio */}
              <text
                x={m.x}
                y={m.y - (isSede ? 4 : 3.2)}
                fontSize={isSede ? "3" : "2.4"}
                fill="#1F1F1F"
                textAnchor="middle"
                fontFamily="sans-serif"
                fontWeight={isSede ? 700 : 500}
              >
                {m.nombre}
              </text>
              {isSede && (
                <text
                  x={m.x}
                  y={m.y + 5.2}
                  fontSize="2"
                  fill="#D97742"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  SEDE
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Tooltip flotante (debajo del mapa) */}
      <div
        className={cn(
          "mt-4 mx-auto max-w-md text-center transition-opacity duration-200",
          hoverIdx !== null ? "opacity-100" : "opacity-0"
        )}
        aria-live="polite"
      >
        {hoverIdx !== null && (
          <div className="inline-flex items-center gap-3 bg-olive-900 text-cream-50 rounded-full px-5 py-2.5 shadow-lg">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: MUNICIPIOS[hoverIdx].esSede ? "#D97742" : "#6B8E3D",
              }}
              aria-hidden="true"
            />
            <span className="font-semibold text-sm">{MUNICIPIOS[hoverIdx].nombre}</span>
            <span className="text-cream-50/65 text-xs">·</span>
            <span className="text-cream-50/85 text-xs">{MUNICIPIOS[hoverIdx].tooltip}</span>
          </div>
        )}
      </div>

      {/* Leyenda */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-5 text-xs text-concrete-700">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-orange-600 border border-cream-50" />
          Sede principal
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-olive-500 border border-cream-50" />
          Municipio cubierto
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-5 border-t border-dashed border-orange-600" />
          Ruta de servicio
        </span>
      </div>
    </div>
  );
}
