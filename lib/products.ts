export type ProductKey = "grueso" | "fino" | "lleno";

export interface Producto {
  key: ProductKey;
  nombre: string;
  granulometria: string;
  colorReal: string;
  colorHex: string;
  colorSecondaryHex: string;
  /** Tamaño relativo de los gránulos para el SVG (0-1). */
  granuleSize: number;
  /** Densidad de gránulos para el SVG. */
  granuleDensity: number;
  usos: string[];
  notaTecnica: string;
}

export const PRODUCTOS: Producto[] = [
  {
    key: "grueso",
    nombre: "Agregado grueso reciclado",
    granulometria: "19 - 38 mm",
    colorReal: "Gris / beige",
    colorHex: "#9A9388",
    colorSecondaryHex: "#7A7268",
    granuleSize: 1,
    granuleDensity: 28,
    usos: [
      "Bases viales secundarias",
      "Rellenos estructurales",
      "Drenajes y filtros",
    ],
    notaTecnica:
      "Material clasificado por tamaño nominal. Cumple parámetros de granulometría para uso en sub-base granular según especificaciones INVIAS.",
  },
  {
    key: "fino",
    nombre: "Agregado fino reciclado",
    granulometria: "0 - 19 mm",
    colorReal: "Gris / rojizo",
    colorHex: "#A88172",
    colorSecondaryHex: "#8A6A5C",
    granuleSize: 0.45,
    granuleDensity: 90,
    usos: [
      "Sub-bases granulares",
      "Mejoramiento de terrenos",
      "Capa de nivelación",
    ],
    notaTecnica:
      "Material homogéneo con baja proporción de finos arcillosos. Apto para mezclas estabilizadas con cemento en proporción técnica.",
  },
  {
    key: "lleno",
    nombre: "Material de lleno / recebo",
    granulometria: "Mezclado, sin clasificar",
    colorReal: "Beige / ocre",
    colorHex: "#C2A878",
    colorSecondaryHex: "#9E8557",
    granuleSize: 0.7,
    granuleDensity: 55,
    usos: [
      "Nivelaciones de terreno",
      "Conformación de taludes",
      "Obras de contención menores",
    ],
    notaTecnica:
      "Material económico para obras donde no se exige clasificación. No debe usarse como base de pavimentos ni en zonas estructurales.",
  },
];
