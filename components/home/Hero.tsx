import Link from "next/link";
import { ArrowRight, ShieldCheck, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-olive-900 via-olive-900 to-olive-700"
      aria-labelledby="hero-title"
    >
      {/* Textura sutil de concreto */}
      <div className="absolute inset-0 bg-concrete-texture opacity-30 mix-blend-overlay" aria-hidden="true" />

      {/* Patrón geométrico decorativo (esquina inferior derecha) */}
      <svg
        className="absolute -bottom-20 -right-20 w-[480px] h-[480px] text-orange-600/8"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hex-pattern" width="40" height="46" patternUnits="userSpaceOnUse">
            <polygon
              points="20,2 38,12 38,34 20,44 2,34 2,12"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#hex-pattern)" />
      </svg>

      <div className="container relative z-10 py-20 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-cream-50/10 backdrop-blur-sm border border-cream-50/20 text-cream-50/90 text-xs font-medium uppercase tracking-wider px-4 py-1.5 rounded-full mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse-soft" />
            Roldanillo, Valle del Cauca
          </span>

          <h1
            id="hero-title"
            className="font-display font-bold text-cream-50 leading-[1.05] text-hero-h1 mb-6"
          >
            Le damos nueva vida a los <span className="text-orange-500">escombros</span>
          </h1>

          <p className="text-cream-50/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-9">
            Cuidamos el planeta dándole nueva vida a los escombros y creando recursos útiles para una economía circular sostenible.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button asChild size="lg">
              <Link href="/servicios#cotizador">
                Cotizar ahora
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/servicios">Ver servicios</Link>
            </Button>
          </div>

          {/* Chips de datos clave */}
          <div className="flex flex-wrap gap-3">
            <Chip Icon={ShieldCheck} label="Cumplimos Res. 1257/2021" />
            <Chip Icon={MapPin} label="6 municipios" />
            <Chip Icon={Award} label="Certificación CVC" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ Icon, label }: { Icon: typeof ShieldCheck; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 bg-cream-50/8 border border-cream-50/20 text-cream-50/90 text-sm px-3.5 py-2 rounded-full backdrop-blur-sm">
      <Icon size={14} className="text-orange-500" aria-hidden="true" />
      {label}
    </span>
  );
}
