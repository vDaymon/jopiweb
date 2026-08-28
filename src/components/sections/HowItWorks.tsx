"use client";

import { motion } from "motion/react";
import { RevealGroup, staggerItem } from "@/components/Reveal";

const STEPS = [
  {
    number: "1",
    title: "Publica tu solicitud",
    body: "Elige la categoría, tu dirección y el precio que te parece justo. No cuesta nada.",
  },
  {
    number: "2",
    title: "Recibe ofertas",
    body: "Los aliados cerca de ti ven tu solicitud y responden con su propia oferta.",
  },
  {
    number: "3",
    title: "Elige a tu aliado",
    body: "Comparas nombre, ciudad, precio y mensaje. Nadie se asigna solo, decides tú.",
  },
  {
    number: "4",
    title: "Sigue el servicio en vivo",
    body: "Ves el mapa desde que va en camino hasta que marca el trabajo como terminado.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-jopi-paper-tint/60 py-20 dark:bg-white/[0.03] lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-semibold tracking-tight text-jopi-ink sm:text-4xl dark:text-white">
            Cómo funciona
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
            Como en un remate justo: tú pones la necesidad, los aliados ponen
            el precio, y la última palabra siempre es tuya.
          </p>
        </div>

        <RevealGroup className="relative border-l border-jopi-ink/10 dark:border-white/10">
          {STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative py-8 pl-8 last:pb-0 sm:pl-10"
            >
              <span className="absolute -left-[21px] top-8 flex h-10 w-10 items-center justify-center rounded-full bg-jopi-orange text-sm font-semibold text-white sm:-left-[25px] sm:h-12 sm:w-12">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-jopi-ink sm:text-xl dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-jopi-ink/65 sm:text-base dark:text-white/65">
                {step.body}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
