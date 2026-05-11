import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeroProps {
  /** Texto pequeño superior (eyebrow) en uppercase. */
  eyebrow?: string;
  title: string;
  description?: string;
  /** Breadcrumb: el primer item es siempre "Inicio". Se añade lo que pases. */
  breadcrumb?: { label: string; href?: string }[];
}

/**
 * Hero corto reusable para páginas interiores.
 * Background olive-900 con textura concrete. Altura mucho menor que el Hero de Home.
 */
export function PageHero({ eyebrow, title, description, breadcrumb = [] }: PageHeroProps) {
  return (
    <section
      className="relative bg-olive-900 text-cream-50 overflow-hidden"
      aria-labelledby="page-hero-title"
    >
      <div className="absolute inset-0 bg-concrete-texture opacity-25 mix-blend-overlay" aria-hidden="true" />
      <div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-orange-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 py-16 md:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="mb-5">
          <ol className="flex items-center gap-1.5 text-xs text-cream-50/60 flex-wrap">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-orange-500 transition-colors"
              >
                <Home size={12} aria-hidden="true" />
                <span className="sr-only sm:not-sr-only">Inicio</span>
              </Link>
            </li>
            {breadcrumb.map((item, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-cream-50/35" aria-hidden="true" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-orange-500 transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-cream-50/85">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <span className="inline-block bg-orange-600/20 text-orange-500 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {eyebrow}
          </span>
        )}
        <h1
          id="page-hero-title"
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-cream-50 max-w-3xl"
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-cream-50/80 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
