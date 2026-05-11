export interface Municipio {
  slug: string;
  nombre: string;
  /** Distancia aproximada a la planta de Roldanillo (km). */
  distanciaKm: number;
  /** Frecuencia típica del servicio. */
  frecuencia: string;
  /** Posición aproximada en el mapa SVG (0-100). */
  x: number;
  y: number;
  /** Si es la sede principal. */
  esSede?: boolean;
  /** Dato corto para tooltip. */
  tooltip: string;
}

export const MUNICIPIOS: Municipio[] = [
  {
    slug: "roldanillo",
    nombre: "Roldanillo",
    distanciaKm: 0,
    frecuencia: "Sede principal",
    x: 50,
    y: 50,
    esSede: true,
    tooltip: "Sede principal · Planta de procesamiento",
  },
  {
    slug: "la-union",
    nombre: "La Unión",
    distanciaKm: 8,
    frecuencia: "Recolección semanal",
    x: 38,
    y: 38,
    tooltip: "Recolección semanal programada",
  },
  {
    slug: "zarzal",
    nombre: "Zarzal",
    distanciaKm: 18,
    frecuencia: "Recolección quincenal",
    x: 30,
    y: 62,
    tooltip: "Recolección quincenal",
  },
  {
    slug: "bolivar",
    nombre: "Bolívar",
    distanciaKm: 28,
    frecuencia: "Recolección bajo demanda",
    x: 68,
    y: 28,
    tooltip: "Recolección bajo demanda",
  },
  {
    slug: "el-dovio",
    nombre: "El Dovio",
    distanciaKm: 35,
    frecuencia: "Recolección bajo demanda",
    x: 78,
    y: 50,
    tooltip: "Recolección bajo demanda",
  },
  {
    slug: "la-victoria",
    nombre: "La Victoria",
    distanciaKm: 25,
    frecuencia: "Recolección quincenal",
    x: 22,
    y: 78,
    tooltip: "Recolección quincenal",
  },
];

export const MUNICIPIO_NAMES = MUNICIPIOS.map((m) => m.nombre);
