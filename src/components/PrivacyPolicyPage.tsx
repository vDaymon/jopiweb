import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

import { Footer } from "@/components/Footer";
import {
  CONTACT_BODY,
  CONTACT_TITLE,
  LAST_UPDATED,
  LEDE,
  SECTIONS,
  SUMMARY,
  SUMMARY_LABEL,
  SUPPORT_EMAIL,
  TITLE,
} from "@/lib/privacy-policy";

/**
 * Política de privacidad pública.
 *
 * Comparte el lenguaje visual de la página de SMS a propósito: las dos son
 * documentos que un revisor externo —Google Play, AWS— abre desde un
 * formulario, y conviene que se lean igual de rápido.
 *
 * Solo en español: la ficha de la tienda va a ser de Colombia, y Google exige
 * que la política esté en el idioma de la ficha.
 */
export function PrivacyPolicyPage() {
  return (
    <>
      <header className="border-b border-jopi-ink/5 dark:border-white/5">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-4 sm:px-6">
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
        </div>
      </header>

      <main className="mx-auto max-w-3xl flex-1 px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-jopi-ink/50 transition-colors hover:text-jopi-violet dark:text-white/50 dark:hover:text-jopi-violet"
        >
          <ArrowLeft size={15} />
          Volver a jopiapp.com
        </Link>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-jopi-ink sm:text-4xl dark:text-white">
          {TITLE}
        </h1>
        <p className="mt-1.5 text-sm text-jopi-ink/45 dark:text-white/45">
          Última actualización: {LAST_UPDATED} · Ley 1581 de 2012
        </p>
        <p className="mt-6 text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
          {LEDE}
        </p>

        {/* El resumen va arriba y destacado: es lo único que muchos leerán. */}
        <div className="mt-8 rounded-2xl border border-jopi-violet/20 bg-jopi-paper-tint p-5 sm:p-6 dark:border-jopi-violet/25 dark:bg-jopi-violet/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-jopi-violet">
            {SUMMARY_LABEL}
          </p>
          <p className="mt-2 text-base font-medium leading-relaxed text-jopi-ink dark:text-white">
            {SUMMARY}
          </p>
        </div>

        {/* Índice: el documento es largo y el revisor suele buscar una sección
            concreta —casi siempre la de ubicación—. */}
        <nav aria-label="Contenido" className="mt-10 border-t border-jopi-ink/10 pt-6 dark:border-white/10">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-jopi-ink/55 underline-offset-4 transition-colors hover:text-jopi-violet hover:underline dark:text-white/55 dark:hover:text-jopi-violet"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {SECTIONS.map((section) => (
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

            {section.bullets && (
              <ul className="mt-5 space-y-2.5">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-jopi-violet/50"
                    />
                    <p className="text-sm leading-relaxed text-jopi-ink/70 dark:text-white/70">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            )}

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
                        <td className="px-4 py-3 text-right font-semibold text-jopi-ink dark:text-white">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.callout && (
              <p className="mt-6 rounded-xl border-l-2 border-jopi-orange bg-jopi-orange/[0.06] px-5 py-4 text-sm leading-relaxed text-jopi-ink/75 dark:bg-jopi-orange/10 dark:text-white/75">
                {section.callout}
              </p>
            )}

            {section.id === "sms" && (
              <Link
                href="/verificacion-sms"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-jopi-violet underline-offset-4 hover:underline"
              >
                Ver la política de verificación por SMS
              </Link>
            )}
          </section>
        ))}

        <section className="mt-12 rounded-2xl border border-jopi-ink/10 p-5 sm:p-6 dark:border-white/10">
          <h2 className="text-lg font-semibold text-jopi-ink dark:text-white">
            {CONTACT_TITLE}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-jopi-ink/65 dark:text-white/65">
            {CONTACT_BODY}
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
