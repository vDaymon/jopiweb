import { HandCoins, MapTrifold, ShieldCheck, Tag } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  {
    icon: Tag,
    title: "Publicar es gratis",
    body: "Cuenta lo que necesitas y espera ofertas, sin costo.",
  },
  {
    icon: HandCoins,
    title: "Tú eliges el precio",
    body: "Comparas ofertas de aliados cercanos y decides.",
  },
  {
    icon: MapTrifold,
    title: "Sigue el servicio en vivo",
    body: "Ves en el mapa cuándo va en camino tu aliado.",
  },
  {
    icon: ShieldCheck,
    title: "Pago seguro",
    body: "Cobros procesados con Wompi y datos cifrados.",
  },
];

export function TrustStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-jopi-ink/10 dark:lg:divide-white/10">
        {ITEMS.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className="lg:px-6 lg:first:pl-0">
            <item.icon size={26} weight="duotone" className="text-jopi-orange" />
            <h3 className="mt-3 text-base font-semibold text-jopi-ink dark:text-white">
              {item.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-jopi-ink/65 dark:text-white/65">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
