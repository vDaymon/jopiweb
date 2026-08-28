import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function DownloadCta() {
  return (
    <section
      id="descarga"
      className="relative overflow-hidden bg-gradient-to-br from-jopi-deep via-jopi-violet-dark to-jopi-deep py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-jopi-orange/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Descarga Jopi y publica tu primera solicitud
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/75">
            Disponible muy pronto para iOS y Android en toda Colombia.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              aria-disabled="true"
              className="group relative flex h-14 w-48 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Image
                src="/badges/app-store.svg"
                alt="Descargar en App Store"
                width={160}
                height={54}
                className="h-9 w-auto"
              />
              <span className="absolute right-2 top-2 rounded-full bg-jopi-orange px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Pronto
              </span>
            </a>
            <a
              href="#"
              aria-disabled="true"
              className="group relative flex h-14 w-48 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Image
                src="/badges/google-play.png"
                alt="Disponible en Google Play"
                width={160}
                height={62}
                className="h-11 w-auto"
              />
              <span className="absolute right-2 top-2 rounded-full bg-jopi-orange px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                Pronto
              </span>
            </a>
          </div>

          <p className="mt-10 text-sm text-white/60">
            ¿Eres plomero, electricista o técnico?{" "}
            <a href="#impacto" className="font-semibold text-white underline underline-offset-4">
              Únete como aliado
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
