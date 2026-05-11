import type { LucideIcon } from "lucide-react";
import { Truck, Wrench, Recycle } from "lucide-react";

export type ServiceKey = "basico" | "procesamiento" | "integral";

export interface ServicePlan {
  key: ServiceKey;
  numero: string;          // "01", "02", "03"
  nombre: string;
  shortName: string;       // Para el cotizador y badges
  precio: number;          // COP por m³
  precioLabel: string;     // "$45.000 / m³"
  descripcion: string;
  idealPara: string;
  incluye: string[];       // 3-4 puntos resumidos (para Home)
  caracteristicas: string[]; // Lista detallada (para /servicios)
  borderClass: string;     // Clase Tailwind para el borde de la tarjeta
  accentClass: string;     // Color de acento (precio grande, badges)
  Icon: LucideIcon;
  recomendado?: boolean;
}

export const SERVICES: ServicePlan[] = [
  {
    key: "basico",
    numero: "01",
    nombre: "Servicio Básico",
    shortName: "Básico",
    precio: 45000,
    precioLabel: "$45.000",
    descripcion: "Recolección y disposición certificada de RCD.",
    idealPara: "Obras pequeñas, remodelaciones, personas naturales.",
    incluye: [
      "Recolección en obra",
      "Transporte a planta autorizada",
      "Disposición final certificada",
    ],
    caracteristicas: [
      "Recolección en obra",
      "Transporte a planta autorizada",
      "Disposición final certificada",
      "Certificado de disposición adecuada",
    ],
    borderClass: "border-olive-500/60",
    accentClass: "text-olive-700",
    Icon: Truck,
  },
  {
    key: "procesamiento",
    numero: "02",
    nombre: "Procesamiento",
    shortName: "Procesamiento",
    precio: 65000,
    precioLabel: "$65.000",
    descripcion: "Trituración, clasificación y entrega de material reciclado.",
    idealPara: "Constructoras medianas, contratistas.",
    incluye: [
      "Todo lo del Servicio Básico",
      "Clasificación por tipo de material",
      "Trituración",
      "Entrega de material reciclado",
    ],
    caracteristicas: [
      "Todo lo incluido en el Servicio Básico",
      "Clasificación por tipo de material",
      "Trituración del material",
      "Entrega de material reciclado al cliente",
    ],
    borderClass: "border-olive-700",
    accentClass: "text-olive-900",
    Icon: Wrench,
  },
  {
    key: "integral",
    numero: "03",
    nombre: "Servicio Integral",
    shortName: "Integral",
    precio: 80000,
    precioLabel: "$80.000",
    descripcion:
      "Gestión 360° con reincorporación a obras nuevas y trazabilidad ante la CVC.",
    idealPara:
      "Grandes generadores, entidades públicas, contratistas de obra pública.",
    incluye: [
      "Todo lo del Procesamiento",
      "Plan de Manejo de RCD",
      "Reincorporación a obras nuevas",
      "Reportes de trazabilidad ante CVC",
    ],
    caracteristicas: [
      "Todo lo incluido en Procesamiento",
      "Acompañamiento en Plan de Manejo de RCD",
      "Reincorporación del material a obras nuevas",
      "Reportes de trazabilidad ante la CVC",
    ],
    borderClass: "border-orange-600",
    accentClass: "text-orange-600",
    Icon: Recycle,
    recomendado: true,
  },
];

/** Tabla comparativa: filas con su nombre y qué planes la incluyen. */
export const SERVICE_COMPARISON: { feature: string; basico: boolean; procesamiento: boolean; integral: boolean }[] = [
  { feature: "Recolección en obra",              basico: true,  procesamiento: true,  integral: true  },
  { feature: "Transporte a planta autorizada",   basico: true,  procesamiento: true,  integral: true  },
  { feature: "Disposición final certificada",    basico: true,  procesamiento: true,  integral: true  },
  { feature: "Certificado de disposición",        basico: true,  procesamiento: true,  integral: true  },
  { feature: "Clasificación por material",       basico: false, procesamiento: true,  integral: true  },
  { feature: "Trituración",                       basico: false, procesamiento: true,  integral: true  },
  { feature: "Material reciclado entregado",     basico: false, procesamiento: true,  integral: true  },
  { feature: "Plan de Manejo de RCD",            basico: false, procesamiento: false, integral: true  },
  { feature: "Reincorporación a obras nuevas",   basico: false, procesamiento: false, integral: true  },
  { feature: "Reportes de trazabilidad ante CVC",basico: false, procesamiento: false, integral: true  },
];

export function getServiceByKey(key: ServiceKey): ServicePlan {
  return SERVICES.find((s) => s.key === key) ?? SERVICES[0];
}
