import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind respetando precedencia (twMerge sobre clsx).
 * Permite condicionar clases y evitar conflictos entre utilidades.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formato de pesos colombianos sin decimales.
 */
export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Datos de contacto centralizados (un solo lugar para cambiar).
 */
export const CONTACT = {
  whatsappRaw: "573185550142",
  whatsappDisplay: "+57 318 555 0142",
  phone: "+57 318 555 0142",
  email: "contacto@construyendofuturo-rcd.com",
  address: "Zona Industrial Km 2 vía Roldanillo - La Unión, Valle del Cauca",
  hours: "Lunes a viernes 7:00 a.m. - 5:00 p.m. / Sábados 7:00 a.m. - 12:00 m.",
  instagram: "@construyendofuturo.rcd",
  facebook: "Construyendo Futuro RCD",
} as const;

/**
 * Construye un enlace de WhatsApp con mensaje pre-llenado.
 */
export function whatsappLink(message = "Hola, quiero cotizar el servicio de RCD"): string {
  return `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
