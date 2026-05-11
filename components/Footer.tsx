import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CONTACT } from "@/lib/utils";

const SERVICES_LINKS = [
  { href: "/servicios#basico", label: "Servicio Básico" },
  { href: "/servicios#procesamiento", label: "Procesamiento" },
  { href: "/servicios#integral", label: "Servicio Integral" },
  { href: "/servicios#cotizador", label: "Cotizador" },
];

const COMPANY_LINKS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/normativa", label: "Normativa" },
  { href: "/cobertura", label: "Cobertura" },
  { href: "/productos", label: "Productos reciclados" },
];

export function Footer() {
  return (
    <footer className="bg-olive-900 text-cream-50 mt-16">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Columna 1: Marca + eslogan corto */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-5 text-sm text-cream-50/75 leading-relaxed">
              Gestión integral de RCD con cumplimiento normativo certificado.
              Comprometidos con la economía circular en el norte del Valle del Cauca.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="font-display font-semibold text-cream-50 text-sm uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-50/75 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Empresa */}
          <div>
            <h3 className="font-display font-semibold text-cream-50 text-sm uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-50/75 hover:text-orange-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="font-display font-semibold text-cream-50 text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-cream-50/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" aria-hidden="true" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-orange-500" aria-hidden="true" />
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-orange-500 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-orange-500" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-orange-500 transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="mt-0.5 shrink-0 text-orange-500" aria-hidden="true" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://instagram.com/construyendofuturo.rcd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
                className="h-9 w-9 rounded-full border border-cream-50/25 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com/construyendofuturo.rcd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
                className="h-9 w-9 rounded-full border border-cream-50/25 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-cream-50/15">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-50/55">
          <p>
            © 2026 Construyendo Futuro RCD · Roldanillo, Valle del Cauca · Todos los derechos reservados
          </p>
          <p className="text-cream-50/40">
            Sitio desarrollado como ejercicio académico — INTEP Roldanillo
          </p>
        </div>
      </div>
    </footer>
  );
}
