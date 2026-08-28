"use client";

import { motion, useReducedMotion } from "motion/react";
import { HeroCarousel } from "@/components/HeroCarousel";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-10 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-jopi-violet/20 blur-3xl dark:bg-jopi-violet/25"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-jopi-ink sm:text-5xl lg:text-6xl dark:text-white">
            <span className="block">Los servicios que más necesitas,</span>
            <span className="block">
              a un <span className="text-jopi-orange">toque</span>.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-jopi-ink/70 sm:text-lg dark:text-white/70">
            Publica lo que necesitas, compara ofertas de aliados cercanos y
            elige con quién trabajar.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#descarga"
              className="rounded-full bg-jopi-violet px-7 py-3.5 text-center text-base font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Descargar la app
            </a>
            <a
              href="#como-funciona"
              className="rounded-full border border-jopi-ink/15 px-7 py-3.5 text-center text-base font-semibold text-jopi-ink/80 transition-colors hover:border-jopi-ink/30 dark:border-white/20 dark:text-white/80 dark:hover:border-white/40"
            >
              Ver cómo funciona
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroCarousel />
        </motion.div>
      </div>
    </section>
  );
}
