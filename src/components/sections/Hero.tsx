"use client";

import { motion, useReducedMotion } from "motion/react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { WEB_APP_URL } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-10 lg:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-jopi-violet/20 blur-3xl dark:bg-jopi-violet/25"
      />

      {/* Entrada principal a la app web: grande y centrada, lo primero que se
          ve. Por ahora es el camino que queremos que tome la gente. */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mb-12 flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:mb-16"
      >
        <a
          href={WEB_APP_URL}
          className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-jopi-orange to-[#ff9a3d] px-8 py-5 text-xl font-bold text-white shadow-[0_12px_40px_-8px_rgba(255,107,0,0.55)] transition-transform hover:-translate-y-1 hover:shadow-[0_18px_50px_-8px_rgba(255,107,0,0.7)] active:scale-[0.98] sm:w-auto sm:px-14 sm:py-6 sm:text-2xl"
        >
          {!reduce && (
            <span
              aria-hidden
              className="absolute inset-0 -z-10 animate-ping rounded-full bg-jopi-orange/30 [animation-duration:2.4s]"
            />
          )}
          Ingresar a Jopi
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
        <p className="mt-4 text-sm text-jopi-ink/70 sm:text-base dark:text-white/70">
          Pide o presta servicios desde el navegador, sin descargar nada.
        </p>
      </motion.div>

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
