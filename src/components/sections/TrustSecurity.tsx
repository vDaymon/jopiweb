import { CreditCard, EyeSlash, LockKey, MapPinLine } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const ITEMS = [
  {
    icon: LockKey,
    title: "Datos cifrados",
    body: "La información sensible, como tus datos bancarios, se guarda cifrada. Ni siquiera nosotros podemos leerla directamente.",
  },
  {
    icon: CreditCard,
    title: "Pagos con Wompi",
    body: "Los cobros los procesa Wompi. Jopi no guarda el número de tu tarjeta en ningún momento.",
  },
  {
    icon: EyeSlash,
    title: "Tu privacidad, por etapas",
    body: "Mientras decides, el aliado solo ve tu zona aproximada. Tu dirección exacta se comparte al elegirlo.",
  },
  {
    icon: MapPinLine,
    title: "Ubicación en vivo",
    body: "Desde que el aliado sale hacia tu casa hasta que termina, puedes seguir el trayecto en el mapa.",
  },
];

export function TrustSecurity() {
  return (
    <section id="confianza" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="max-w-lg">
        <h2 className="text-3xl font-semibold tracking-tight text-jopi-ink sm:text-4xl dark:text-white">
          Pensado para que confíes
        </h2>
        <p className="mt-4 text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
          Un mercado de servicios solo funciona si ambas partes se sienten
          seguras. Así lo resolvimos.
        </p>
      </div>

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {ITEMS.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} className="flex gap-4">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-jopi-violet/10 text-jopi-violet dark:bg-jopi-violet/20">
              <item.icon size={22} weight="duotone" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-jopi-ink dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-jopi-ink/65 dark:text-white/65">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
