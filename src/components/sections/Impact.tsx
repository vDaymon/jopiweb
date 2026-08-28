"use client";

import { ArrowRight, Handshake, House, Wrench } from "@phosphor-icons/react/dist/ssr";
import { RevealGroup, staggerItem } from "@/components/Reveal";
import { motion } from "motion/react";

const CHAIN = [
  {
    icon: House,
    title: "Publicas lo que necesitas",
    body: "Cuentas el trabajo, tu zona y el precio que te parece justo.",
  },
  {
    icon: Handshake,
    title: "Jopi los conecta",
    body: "Ponemos tu solicitud frente a los aliados disponibles cerca de ti.",
  },
  {
    icon: Wrench,
    title: "Tu aliado gana un cliente más",
    body: "Un trabajo resuelto para ti es un ingreso seguro para su oficio.",
  },
];

export function Impact() {
  return (
    <section id="impacto" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-jopi-orange/10 px-3 py-1 text-sm font-medium text-jopi-orange dark:bg-jopi-orange/20">
            🇨🇴 Empresa colombiana
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-jopi-ink sm:text-4xl dark:text-white">
            Un trato justo para los dos lados
          </h2>
          <p className="mt-4 text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
            Cada solicitud que publicas es también trabajo para alguien que
            vive de su oficio: plomeros, electricistas, cerrajeros,
            pintores. Tú resuelves rápido, ellos ganan un cliente más. Así
            ganamos los tres.
          </p>
        </div>
      </div>

      <RevealGroup
        stagger={0.12}
        className="mt-14 grid grid-cols-1 items-start gap-8 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"
      >
        {CHAIN.map((step, index) => (
          <div key={step.title} className="contents">
            <motion.div variants={staggerItem} className="flex flex-col items-start gap-3">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white ${
                  index === 1 ? "bg-jopi-violet" : "bg-jopi-orange"
                }`}
              >
                <step.icon size={24} weight="bold" />
              </div>
              <h3 className="text-base font-semibold text-jopi-ink dark:text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-jopi-ink/65 dark:text-white/65">
                {step.body}
              </p>
            </motion.div>

            {index < CHAIN.length - 1 && (
              <motion.div
                variants={staggerItem}
                className="hidden items-center justify-center pt-3 text-jopi-ink/20 sm:flex dark:text-white/20"
                aria-hidden
              >
                <ArrowRight size={22} />
              </motion.div>
            )}
          </div>
        ))}
      </RevealGroup>
    </section>
  );
}
