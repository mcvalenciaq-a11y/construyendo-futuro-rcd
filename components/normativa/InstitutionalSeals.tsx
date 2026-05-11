/**
 * Sellos institucionales GENÉRICOS (no son logos reales).
 * Cumplen una función decorativa para reforzar la idea de cumplimiento
 * ante: CVC, MADS, Cámara de Comercio de Cartago y SENA.
 */
const SEALS = [
  { sigla: "CVC",       label: "Corporación Autónoma Regional del Valle del Cauca" },
  { sigla: "MADS",      label: "Ministerio de Ambiente y Desarrollo Sostenible" },
  { sigla: "CCC",       label: "Cámara de Comercio de Cartago" },
  { sigla: "SENA",      label: "Servicio Nacional de Aprendizaje" },
];

export function InstitutionalSeals() {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-concrete-500 font-semibold text-center mb-6">
        Entidades de articulación y referencia normativa
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {SEALS.map((seal) => (
          <div
            key={seal.sigla}
            className="bg-white border border-concrete-300/50 rounded-lg p-5 flex flex-col items-center text-center gap-2 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
          >
            {/* Sello genérico SVG: anillo + sigla en el centro */}
            <svg
              viewBox="0 0 60 60"
              width="58"
              height="58"
              aria-hidden="true"
              className="text-concrete-700"
            >
              {/* Anillo exterior con dientes */}
              <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="0.7" />
              {/* Dientes simulando un sello oficial */}
              {Array.from({ length: 16 }).map((_, i) => {
                const ang = (Math.PI * 2 * i) / 16;
                const x1 = 30 + Math.cos(ang) * 26;
                const y1 = 30 + Math.sin(ang) * 26;
                const x2 = 30 + Math.cos(ang) * 28;
                const y2 = 30 + Math.sin(ang) * 28;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                );
              })}
              {/* Sigla en el centro */}
              <text
                x="30"
                y="34"
                textAnchor="middle"
                fontFamily="sans-serif"
                fontSize={seal.sigla.length > 3 ? "8" : "10"}
                fontWeight="700"
                fill="currentColor"
              >
                {seal.sigla}
              </text>
            </svg>
            <p className="text-[10.5px] uppercase tracking-wider text-concrete-700 font-semibold">
              {seal.sigla}
            </p>
            <p className="text-[10px] text-concrete-500 leading-tight">{seal.label}</p>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-concrete-500 text-center mt-5 italic max-w-2xl mx-auto">
        Sellos representativos sin valor oficial. Construyendo Futuro RCD opera con los registros y permisos vigentes ante cada entidad correspondiente.
      </p>
    </div>
  );
}
