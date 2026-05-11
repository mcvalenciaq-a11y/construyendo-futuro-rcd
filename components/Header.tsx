"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Productos" },
  { href: "/cobertura", label: "Cobertura" },
  { href: "/normativa", label: "Normativa" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Header se vuelve más sólido al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-concrete-300/40"
          : "bg-cream-50 border-b border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label="Construyendo Futuro RCD - Inicio"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
        >
          <Logo variant="dark" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive(item.href)
                  ? "text-olive-900 bg-olive-900/5"
                  : "text-concrete-700 hover:text-olive-900 hover:bg-olive-900/5"
              )}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/servicios#cotizador">Cotizar</Link>
          </Button>
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-olive-900 hover:bg-olive-900/5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Nav mobile colapsable */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="lg:hidden border-t border-concrete-300/40 bg-cream-50"
          aria-label="Navegación móvil"
        >
          <div className="container py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium",
                  isActive(item.href)
                    ? "text-olive-900 bg-olive-900/5"
                    : "text-concrete-700 hover:text-olive-900 hover:bg-olive-900/5"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/servicios#cotizador">Cotizar</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
