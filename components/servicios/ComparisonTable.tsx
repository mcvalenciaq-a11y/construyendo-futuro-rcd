import { Check, X } from "lucide-react";
import { SERVICES, SERVICE_COMPARISON } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ComparisonTable() {
  return (
    <div className="bg-white rounded-xl border border-concrete-300/50 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">
            Comparativa de los tres servicios de gestión de RCD
          </caption>
          <thead>
            <tr className="bg-concrete-100/70 border-b border-concrete-300/60">
              <th scope="col" className="text-left font-display font-semibold text-olive-900 px-5 py-4 min-w-[220px]">
                Característica
              </th>
              {SERVICES.map((s) => (
                <th
                  key={s.key}
                  scope="col"
                  className={cn(
                    "text-center font-display font-semibold px-4 py-4 min-w-[140px]",
                    s.recomendado ? "text-orange-600 bg-orange-600/5" : "text-olive-900"
                  )}
                >
                  <div className="flex flex-col gap-0.5">
                    <span>{s.shortName}</span>
                    <span className="text-xs font-medium text-concrete-500">
                      {s.precioLabel} / m³
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SERVICE_COMPARISON.map((row, idx) => (
              <tr
                key={row.feature}
                className={cn(
                  "border-b border-concrete-300/40 last:border-b-0",
                  idx % 2 === 1 && "bg-concrete-100/30"
                )}
              >
                <th scope="row" className="text-left font-medium text-concrete-900 px-5 py-3.5">
                  {row.feature}
                </th>
                <Cell included={row.basico} />
                <Cell included={row.procesamiento} />
                <Cell included={row.integral} highlight />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Cell({ included, highlight }: { included: boolean; highlight?: boolean }) {
  return (
    <td className={cn("px-4 py-3.5 text-center", highlight && "bg-orange-600/5")}>
      <span
        className="inline-flex items-center justify-center h-6 w-6 rounded-full"
        aria-label={included ? "Incluido" : "No incluido"}
      >
        {included ? (
          <Check size={16} className="text-olive-500" aria-hidden="true" />
        ) : (
          <X size={16} className="text-concrete-300" aria-hidden="true" />
        )}
      </span>
    </td>
  );
}
