import Image from "next/image";
import { services } from "@/lib/services";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <h2 className="max-w-lg text-3xl font-semibold tracking-tight text-jopi-ink sm:text-4xl dark:text-white">
        Un aliado para cada tarea del hogar
      </h2>
      <p className="mt-4 max-w-lg text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
        Publica el que necesites y compara ofertas de aliados cerca de ti.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:[grid-auto-flow:dense]">
        {services.map((service, index) => (
          <Reveal
            key={service.id}
            delay={index * 0.05}
            className={
              service.featured
                ? "col-span-2 sm:col-span-2 sm:row-span-2"
                : "col-span-1"
            }
          >
            <article className="group flex h-full min-h-[180px] flex-col overflow-hidden rounded-2xl border border-jopi-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[220px]">
              <div className="relative flex flex-1 items-center justify-center bg-jopi-paper-tint p-6">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-4 py-3">
                <h3
                  className={
                    service.featured
                      ? "text-base font-semibold text-jopi-ink sm:text-lg"
                      : "text-sm font-semibold text-jopi-ink"
                  }
                >
                  {service.name}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
