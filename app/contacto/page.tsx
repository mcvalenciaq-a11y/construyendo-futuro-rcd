import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contacto/ContactForm";
import { CONTACT, whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos para cotizar el servicio de gestión de RCD. Atendemos los 6 municipios del norte del Valle del Cauca desde nuestra sede en Roldanillo.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu obra"
        description="Cuéntanos el volumen, ubicación y frecuencia que necesitas. Te entregamos una propuesta clara dentro de las próximas 24 horas hábiles."
        breadcrumb={[{ label: "Contacto" }]}
      />

      {/* GRID: FORMULARIO + DATOS */}
      <section className="bg-cream-50 py-16 md:py-20" aria-labelledby="contact-grid-title">
        <div className="container">
          <h2 id="contact-grid-title" className="sr-only">
            Formulario y datos de contacto
          </h2>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
            {/* FORMULARIO */}
            <div className="bg-white rounded-xl border border-concrete-300/50 p-6 md:p-8 lg:p-10 shadow-sm">
              <h3 className="font-display font-semibold text-2xl text-olive-900 mb-1">
                Escríbenos
              </h3>
              <p className="text-concrete-700 mb-7">
                Completa el formulario y te respondemos pronto. Los campos con * son obligatorios.
              </p>
              <ContactForm />
            </div>

            {/* DATOS DE CONTACTO + WHATSAPP */}
            <aside className="space-y-5">
              {/* Bloque WhatsApp destacado */}
              <div className="bg-[#25D366]/8 border-2 border-[#25D366]/40 rounded-xl p-6 md:p-7 text-center">
                <div className="inline-flex h-14 w-14 rounded-full bg-[#25D366] text-white items-center justify-center mb-3 shadow-md shadow-[#25D366]/30">
                  <MessageCircle size={26} aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-xl text-olive-900 mb-2">
                  Respuesta inmediata por WhatsApp
                </h3>
                <p className="text-sm text-concrete-700 mb-5 leading-relaxed">
                  Es la vía más rápida. Atendemos en horario laboral.
                </p>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1ebe5a] text-white w-full">
                  <a href={whatsappLink("Hola, quiero información sobre el servicio de RCD.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} aria-hidden="true" />
                    Chatear ahora
                  </a>
                </Button>
                <p className="text-xs text-concrete-500 mt-3 font-medium">
                  {CONTACT.whatsappDisplay}
                </p>
              </div>

              {/* Bloque datos */}
              <div className="bg-white rounded-xl border border-concrete-300/50 p-6 md:p-7">
                <h3 className="font-display font-semibold text-base text-olive-900 mb-4">
                  Otros canales
                </h3>
                <ul className="space-y-4 text-sm">
                  <DataRow Icon={Phone} title="Teléfono">
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-orange-600 transition-colors">
                      {CONTACT.phone}
                    </a>
                  </DataRow>
                  <DataRow Icon={Mail} title="Correo electrónico">
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-orange-600 transition-colors break-all">
                      {CONTACT.email}
                    </a>
                  </DataRow>
                  <DataRow Icon={MapPin} title="Dirección">
                    {CONTACT.address}
                  </DataRow>
                  <DataRow Icon={Clock} title="Horario">
                    {CONTACT.hours}
                  </DataRow>
                </ul>

                <div className="border-t border-concrete-300/40 mt-5 pt-5">
                  <p className="text-xs uppercase tracking-wider text-concrete-500 font-semibold mb-3">
                    Redes sociales
                  </p>
                  <div className="flex gap-2.5">
                    <a
                      href="https://instagram.com/construyendofuturo.rcd"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Síguenos en Instagram"
                      className="h-10 w-10 rounded-lg border border-concrete-300 flex items-center justify-center text-olive-900 hover:bg-olive-900 hover:text-cream-50 hover:border-olive-900 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://facebook.com/construyendofuturo.rcd"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Síguenos en Facebook"
                      className="h-10 w-10 rounded-lg border border-concrete-300 flex items-center justify-center text-olive-900 hover:bg-olive-900 hover:text-cream-50 hover:border-olive-900 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* MAPA SIMPLE DE UBICACIÓN */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="location-title">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="inline-block bg-olive-500/15 text-olive-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Cómo llegar
            </span>
            <h2 id="location-title" className="font-display font-semibold text-section-h2 leading-tight">
              Visítanos en la planta
            </h2>
            <p className="text-concrete-700 text-lg mt-4 leading-relaxed">
              Recibimos visitas técnicas con cita previa para evaluar volúmenes mayores o contratos de operación continua.
            </p>
          </div>

          <div className="bg-concrete-100/60 rounded-xl overflow-hidden border border-concrete-300/50">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              {/* Mapa esquemático SVG simple */}
              <div className="bg-olive-700 aspect-video md:aspect-auto md:min-h-[280px] relative overflow-hidden">
                <svg viewBox="0 0 200 120" className="w-full h-full" aria-label="Croquis de ubicación de la planta">
                  {/* Carreteras */}
                  <line x1="0" y1="60" x2="200" y2="60" stroke="#FBFAF7" strokeWidth="3" opacity="0.85" />
                  <line x1="0" y1="60" x2="200" y2="60" stroke="#FBFAF7" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
                  <text x="6" y="56" fontSize="4" fill="#FBFAF7" opacity="0.75" fontFamily="sans-serif">
                    Vía Roldanillo - La Unión
                  </text>

                  <line x1="100" y1="0" x2="100" y2="120" stroke="#FBFAF7" strokeWidth="2" opacity="0.45" strokeDasharray="2 2" />

                  {/* Zona industrial (rectángulo) */}
                  <rect x="115" y="68" width="30" height="20" fill="#FBFAF7" opacity="0.12" stroke="#FBFAF7" strokeWidth="0.4" />
                  <text x="130" y="80" fontSize="3" fill="#FBFAF7" opacity="0.7" textAnchor="middle" fontFamily="sans-serif">
                    Zona Industrial
                  </text>

                  {/* Pin de la planta */}
                  <g>
                    <circle cx="130" cy="78" r="6" fill="#D97742" opacity="0.3" className="animate-pulse-soft" />
                    <circle cx="130" cy="78" r="3" fill="#D97742" stroke="#FBFAF7" strokeWidth="0.8" />
                  </g>
                  <text x="130" y="98" fontSize="3.5" fill="#FBFAF7" textAnchor="middle" fontWeight="700" fontFamily="sans-serif">
                    PLANTA IPyS
                  </text>
                  <text x="130" y="103" fontSize="2.6" fill="#FBFAF7" opacity="0.75" textAnchor="middle" fontFamily="sans-serif">
                    Km 2 vía a La Unión
                  </text>

                  {/* Roldanillo - referencia */}
                  <circle cx="40" cy="40" r="2" fill="#FBFAF7" opacity="0.7" />
                  <text x="40" y="34" fontSize="3" fill="#FBFAF7" opacity="0.8" textAnchor="middle" fontFamily="sans-serif">
                    Roldanillo
                  </text>
                </svg>
              </div>

              {/* Datos de ubicación */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-5">
                  <div className="h-10 w-10 rounded-lg bg-orange-600/15 text-orange-600 flex items-center justify-center shrink-0">
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold mb-1">
                      Dirección
                    </p>
                    <p className="text-concrete-900 font-medium leading-relaxed">
                      {CONTACT.address}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-concrete-700 leading-relaxed mb-5">
                  Salida sur del casco urbano de Roldanillo por la vía a La Unión, kilómetro 2. Zona industrial sobre el costado derecho.
                </p>
                <Button asChild variant="secondary" className="self-start">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir en Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DataRow({ Icon, title, children }: { Icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg bg-olive-500/15 text-olive-700 flex items-center justify-center shrink-0">
        <Icon size={15} aria-hidden="true" />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-concrete-500 font-semibold mb-0.5">
          {title}
        </p>
        <p className="text-concrete-900 font-medium leading-snug">{children}</p>
      </div>
    </li>
  );
}
