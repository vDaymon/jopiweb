import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const SOCIALS = [
  { icon: InstagramLogo, label: "Instagram", href: "#" },
  { icon: TiktokLogo, label: "TikTok", href: "#" },
  { icon: WhatsappLogo, label: "WhatsApp", href: "#" },
];

const SUPPORT_EMAIL = "soporte@jopiapp.com";

export function Footer() {
  return (
    <footer className="border-t border-jopi-ink/10 py-12 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/jopi-icon.png"
              alt="Jopi"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="text-sm font-semibold text-jopi-ink dark:text-white">
              Jop<span className="text-jopi-orange">i</span>
            </span>
            <span className="ml-2 text-sm text-jopi-ink/50 dark:text-white/50">
              Servicios a domicilio en Colombia
            </span>
          </div>

          <div className="flex items-center gap-5">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-jopi-ink/50 transition-colors hover:text-jopi-violet dark:text-white/50 dark:hover:text-jopi-violet"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-jopi-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="group flex items-center gap-2 text-sm font-medium text-jopi-ink/70 transition-colors hover:text-jopi-violet dark:text-white/70 dark:hover:text-jopi-violet"
          >
            <EnvelopeSimple size={18} />
            <span>
              Comunícate con nosotros:{" "}
              <span className="font-semibold underline-offset-4 group-hover:underline">
                {SUPPORT_EMAIL}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-5">
            <Link
              href="/verificacion-sms"
              className="text-sm text-jopi-ink/45 transition-colors hover:text-jopi-violet dark:text-white/45 dark:hover:text-jopi-violet"
            >
              Verificación por SMS
            </Link>
            <p className="text-sm text-jopi-ink/45 dark:text-white/45">
              © {new Date().getFullYear()} Jopi. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
