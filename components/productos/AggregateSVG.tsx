import type { Producto } from "@/lib/products";

interface AggregateSVGProps {
  producto: Producto;
}

/**
 * SVG ilustrativo que representa la granulometría del agregado.
 * Usa una distribución pseudo-aleatoria determinista (mulberry32) para que
 * SSR y cliente rendericen exactamente los mismos puntos (sin hydration mismatch).
 */
export function AggregateSVG({ producto }: AggregateSVGProps) {
  // Seed determinista a partir del key del producto
  const seed = producto.key
    .split("")
    .reduce((acc, ch) => acc + ch.charCodeAt(0), 1234);
  const rand = mulberry32(seed);

  // Genera gránulos
  const granules = Array.from({ length: producto.granuleDensity }, (_, i) => {
    const sizeJitter = 0.6 + rand() * 0.8; // 0.6-1.4× del tamaño base
    return {
      cx: 5 + rand() * 190,
      cy: 5 + rand() * 90,
      r: 2 + producto.granuleSize * 4 * sizeJitter,
      rotation: rand() * 360,
      tone: rand() > 0.5 ? producto.colorHex : producto.colorSecondaryHex,
      shape: rand() > 0.65 ? "poly" : "circle",
      i,
    };
  });

  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      role="img"
      aria-label={`Ilustración de gránulos de ${producto.nombre}`}
    >
      <defs>
        <linearGradient id={`grad-${producto.key}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={producto.colorHex} stopOpacity="0.15" />
          <stop offset="100%" stopColor={producto.colorSecondaryHex} stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <rect width="200" height="100" fill={`url(#grad-${producto.key})`} />
      {granules.map((g) =>
        g.shape === "circle" ? (
          <circle
            key={g.i}
            cx={g.cx}
            cy={g.cy}
            r={g.r}
            fill={g.tone}
            opacity={0.85}
          />
        ) : (
          <polygon
            key={g.i}
            points={polygonPoints(g.cx, g.cy, g.r * 1.1, 6)}
            fill={g.tone}
            opacity={0.85}
            transform={`rotate(${g.rotation} ${g.cx} ${g.cy})`}
          />
        )
      )}
    </svg>
  );
}

/** PRNG determinista (Mulberry32). */
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function polygonPoints(cx: number, cy: number, r: number, sides: number) {
  return Array.from({ length: sides }, (_, i) => {
    const ang = (Math.PI * 2 * i) / sides - Math.PI / 2;
    return `${cx + r * Math.cos(ang)},${cy + r * Math.sin(ang)}`;
  }).join(" ");
}
