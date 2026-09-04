import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChatCircleText, EnvelopeSimple, Translate } from "@phosphor-icons/react/dist/ssr";

import { Footer } from "@/components/Footer";
import {
  ALT,
  COPY,
  LAST_UPDATED,
  SMS_SAMPLE,
  SUPPORT_EMAIL,
  type Lang,
} from "@/lib/sms-policy";

/**
 * Página pública de política de SMS, en español e inglés.
 *
 * Las dos rutas (`/verificacion-sms` y `/sms-verification`) renderizan este
 * mismo componente cambiando el idioma. Son rutas separadas en vez de un
 * conmutador con estado porque el destinatario principal es un revisor que
 * recibe la URL en inglés pegada en un formulario: tiene que caer en el
 * contenido correcto sin tocar nada.
 */
export function SmsPolicyPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const alt = ALT[lang];

  return (
    <>
      <header className="border-b border-jopi-ink/5 dark:border-white/5">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/jopi-icon.png"
              alt="Jopi"
              width={32}
              height={32}
              className="rounded-[9px]"
              priority
            />
            <span className="text-base font-semibold tracking-tight">
              Jop<span className="text-jopi-orange">i</span>
            </span>
          </Link>

          <Link
            href={alt.href}
            hrefLang={lang === "es" ? "en" : "es"}
            className="flex items-center gap-1.5 rounded-full border border-jopi-ink/10 px-3.5 py-1.5 text-sm font-medium text-jopi-ink/70 transition-colors hover:border-jopi-violet/40 hover:text-jopi-violet dark:border-white/15 dark:text-white/70 dark:hover:text-jopi-violet"
          >
            <Translate size={16} weight="bold" />
            {alt.label}
          </Link>
        </div>
      </header>

      <main lang={lang} className="mx-auto max-w-3xl flex-1 px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-jopi-ink/50 transition-colors hover:text-jopi-violet dark:text-white/50 dark:hover:text-jopi-violet"
        >
          <ArrowLeft size={15} />
          {t.back}
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-jopi-ink sm:text-4xl dark:text-white">
          {t.title}
        </h1>
        <p className="mt-1.5 text-sm text-jopi-ink/45 dark:text-white/45">
          {t.updated}: {LAST_UPDATED[lang]}
        </p>
        <p className="mt-6 text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
          {t.lede}
        </p>

        {/* El resumen va arriba y destacado: es lo único que muchos leerán. */}
        <div className="mt-8 rounded-2xl border border-jopi-violet/20 bg-jopi-paper-tint p-5 sm:p-6 dark:border-jopi-violet/25 dark:bg-jopi-violet/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-jopi-violet">
            {t.summaryLabel}
          </p>
          <p className="mt-2 text-base font-medium leading-relaxed text-jopi-ink dark:text-white">
            {t.summary}
          </p>
        </div>

        {t.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-12 scroll-mt-8">
            <h2 className="text-xl font-semibold tracking-tight text-jopi-ink sm:text-2xl dark:text-white">
              {section.title}
            </h2>

            {section.body && (
              <p className="mt-3 text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
                {section.body}
              </p>
            )}

            {section.items && (
              <div className="mt-6 space-y-5">
                {section.items.map((item) => (
                  <div key={item.title} className="border-l-2 border-jopi-violet/25 pl-4">
                    <h3 className="text-base font-semibold text-jopi-ink dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-jopi-ink/65 dark:text-white/65">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.steps && (
              <ol className="mt-6 space-y-4">
                {section.steps.map((step, i) => (
                  <li key={step} className="flex gap-3.5">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-jopi-violet/12 text-sm font-semibold text-jopi-violet dark:bg-jopi-violet/20">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-sm leading-relaxed text-jopi-ink/70 dark:text-white/70">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            )}

            {/* El mensaje literal, presentado como lo ve el usuario en su teléfono. */}
            {section.id === "texto" || section.id === "text" ? (
              <>
                <figure className="mt-6">
                  <figcaption className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-jopi-ink/40 dark:text-white/40">
                    <ChatCircleText size={14} weight="fill" />
                    {t.sampleLabel}
                  </figcaption>
                  <div className="max-w-md rounded-2xl rounded-tl-md bg-jopi-deep px-5 py-4">
                    <p className="font-mono text-sm leading-relaxed text-white">
                      {SMS_SAMPLE}
                    </p>
                  </div>
                </figure>
                <p className="mt-4 text-sm leading-relaxed text-jopi-ink/55 dark:text-white/55">
                  {t.sampleNote}
                </p>
              </>
            ) : null}

            {section.rows && (
              <div className="mt-6 overflow-hidden rounded-xl border border-jopi-ink/10 dark:border-white/10">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {section.rows.map(([label, value], i) => (
                      <tr
                        key={label}
                        className={
                          i % 2 === 1
                            ? "bg-jopi-ink/[0.025] dark:bg-white/[0.025]"
                            : undefined
                        }
                      >
                        <th
                          scope="row"
                          className="px-4 py-3 font-normal text-jopi-ink/65 dark:text-white/65"
                        >
                          {label}
                        </th>
                        <td className="px-4 py-3 text-right font-semibold whitespace-nowrap text-jopi-ink dark:text-white">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section className="mt-12 rounded-2xl border border-jopi-ink/10 p-5 sm:p-6 dark:border-white/10">
          <h2 className="text-lg font-semibold text-jopi-ink dark:text-white">
            {t.contactTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-jopi-ink/65 dark:text-white/65">
            {t.contactBody}
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-jopi-violet px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <EnvelopeSimple size={17} weight="bold" />
            {SUPPORT_EMAIL}
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
