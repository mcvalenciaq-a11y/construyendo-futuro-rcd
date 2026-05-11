import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
}

/**
 * Logo de Construyendo Futuro RCD.
 * - Símbolo: tres flechas industriales formando un ciclo (reciclaje + construcción).
 * - Wordmark: "Construyendo Futuro" + "RCD" en acento naranja.
 * - variant="light" se usa sobre fondos oscuros (olive-900).
 * - variant="dark"  se usa sobre fondos claros (cream-50).
 */
export function Logo({ variant = "dark", className, showWordmark = true }: LogoProps) {
  const isLight = variant === "light";
  // Color principal del símbolo y el wordmark
  const primaryColor = isLight ? "#FBFAF7" : "#2D3A1F"; // cream-50 / olive-900
  const accentColor = "#D97742"; // orange-600 (constante en ambas variantes)

  return (
    <div className={cn("flex items-center gap-2.5", className)} aria-label="Construyendo Futuro RCD">
      {/* Símbolo: 3 flechas industriales en ciclo */}
      <svg
        viewBox="0 0 48 48"
        width="40"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Flecha superior derecha */}
        <path
          d="M24 4 L38 12 L34 14 L34 20 L30 20 L30 14 L26 14 Z"
          fill={primaryColor}
        />
        {/* Flecha inferior derecha */}
        <path
          d="M40 28 L36 42 L34 38 L28 41 L26 37 L32 34 L30 30 Z"
          fill={primaryColor}
        />
        {/* Flecha inferior izquierda (acentuada en naranja) */}
        <path
          d="M8 28 L8 44 L12 40 L18 43 L20 39 L14 36 L18 32 Z"
          fill={accentColor}
        />
        {/* Nodo central — círculo industrial */}
        <circle cx="24" cy="24" r="4" fill="none" stroke={primaryColor} strokeWidth="2" />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display font-bold text-[15px] tracking-tight"
            style={{ color: primaryColor }}
          >
            Construyendo Futuro
          </span>
          <span
            className="font-display font-medium text-[11px] tracking-[0.18em] mt-0.5"
            style={{ color: accentColor }}
          >
            RCD
          </span>
        </div>
      )}
    </div>
  );
}
