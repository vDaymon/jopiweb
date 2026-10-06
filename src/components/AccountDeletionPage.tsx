import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

import { Footer } from "@/components/Footer";
import {
  BEFORE,
  BEFORE_TITLE,
  BY_EMAIL_BODY,
  BY_EMAIL_TITLE,
  DELETED,
  DELETED_TITLE,
  EMAIL_SUBJECT,
  IN_APP_STEPS,
  IN_APP_TITLE,
  KEPT,
  KEPT_TITLE,
  LAST_UPDATED,
  LEDE,
  SUPPORT_EMAIL,
  TITLE,
} from "@/lib/account-deletion";

/**
 * Página pública para eliminar la cuenta (la exige Google Play).
 *
 * Sigue el mismo diseño que la política de privacidad: las dos las abre un
 * revisor desde un formulario y conviene que se lean igual.
 */
export function AccountDeletionPage() {
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`;

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
          Última actualización: {LAST_UPDATED}
        </p>
        <p className="mt-6 text-base leading-relaxed text-jopi-ink/70 dark:text-white/70">
          {LEDE}
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <section className="rounded-2xl border border-jopi-violet/20 bg-jopi-paper-tint p-5 sm:p-6 dark:border-jopi-violet/25 dark:bg-jopi-violet/10">
            <h2 className="text-lg font-semibold text-jopi-ink dark:text-white">{IN_APP_TITLE}</h2>
            <ol className="mt-4 space-y-2.5">
              {IN_APP_STEPS.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-jopi-violet text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-jopi-ink/75 dark:text-white/75">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-2xl border border-jopi-ink/10 p-5 sm:p-6 dark:border-white/10">
            <h2 className="text-lg font-semibold text-jopi-ink dark:text-white">{BY_EMAIL_TITLE}</h2>
            <p className="mt-3 text-sm leading-relaxed text-jopi-ink/70 dark:text-white/70">
              {BY_EMAIL_BODY}
            </p>
            <a
              href={mailto}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-jopi-violet px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <EnvelopeSimple size={17} weight="bold" />
              Pedir la eliminación
            </a>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-jopi-ink sm:text-2xl dark:text-white">
            {DELETED_TITLE}
          </h2>
          <Bullets items={DELETED} />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-jopi-ink sm:text-2xl dark:text-white">
            {KEPT_TITLE}
          </h2>
          <div className="mt-6 space-y-5">
            {KEPT.map((item) => (
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
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-jopi-ink sm:text-2xl dark:text-white">
            {BEFORE_TITLE}
          </h2>
          <Bullets items={BEFORE} />
        </section>

        <p className="mt-12 text-sm leading-relaxed text-jopi-ink/60 dark:text-white/60">
          Más detalles sobre cómo tratamos tus datos en la{" "}
          <Link
            href="/privacidad"
            className="font-semibold text-jopi-violet underline-offset-4 hover:underline"
          >
            política de privacidad
          </Link>
          .
        </p>
      </main>

      <Footer />
    </>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-jopi-violet/50"
          />
          <p className="text-sm leading-relaxed text-jopi-ink/70 dark:text-white/70">{item}</p>
        </li>
      ))}
    </ul>
  );
}
