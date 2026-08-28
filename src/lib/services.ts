export type PricingUnit = "job" | "day";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  pricingUnit: PricingUnit;
  image: string;
  featured?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "domestica",
    name: "Empleada doméstica",
    description: "Aseo general, cocina, planchado y lavado de ropa por jornada.",
    basePrice: 90000,
    pricingUnit: "day",
    image: "/servicios/domestica.png",
    featured: true,
  },
  {
    id: "lavado",
    name: "Lavado a domicilio",
    description: "Muebles, tapetes, cortinas y colchones.",
    basePrice: 85000,
    pricingUnit: "job",
    image: "/servicios/lavado.png",
  },
  {
    id: "canerias",
    name: "Destapar cañerías",
    description: "Lavamanos, ducha, cocina y sanitario.",
    basePrice: 65000,
    pricingUnit: "job",
    image: "/servicios/canerias.png",
  },
  {
    id: "electrico",
    name: "Servicio eléctrico",
    description: "Tomas, lámparas, tableros y fallas.",
    basePrice: 70000,
    pricingUnit: "job",
    image: "/servicios/electrico.png",
  },
  {
    id: "electrodomesticos",
    name: "Electrodomésticos",
    description: "Nevera, lavadora, estufa, horno y más.",
    basePrice: 80000,
    pricingUnit: "job",
    image: "/servicios/electrodomesticos.png",
  },
  {
    id: "cerrajeria",
    name: "Cerrajería",
    description: "Apertura de puertas, guardas y cerraduras.",
    basePrice: 90000,
    pricingUnit: "job",
    image: "/servicios/cerrajeria.png",
  },
  {
    id: "pintura",
    name: "Pintura y construcción",
    description: "Pintura, estuco, drywall y arreglos locativos.",
    basePrice: 120000,
    pricingUnit: "job",
    image: "/servicios/pintura.png",
  },
];

export function formatCOP(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}
