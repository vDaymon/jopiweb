"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { staggerContainer, staggerItem } from "@/components/Reveal";

const NAV_LINKS = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#servicios", label: "Servicios" },
  { href: "#confianza", label: "Seguridad" },
];

const CTA_LABEL = "Descargar la app";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-jopi-ink/5 bg-jopi-paper/80 backdrop-blur-md dark:border-white/5 dark:bg-[#120a1f]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/logo/jopi-icon.png"
            alt="Jopi"
            width={36}
            height={36}
            className="rounded-[10px]"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">
            Jop<span className="text-jopi-orange">i</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-jopi-ink/70 transition-colors hover:text-jopi-ink dark:text-white/70 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#descarga"
            className="rounded-full bg-jopi-violet px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            {CTA_LABEL}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full text-jopi-ink lg:hidden dark:text-white"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <motion.span
            initial={false}
            animate={{ rotate: open ? 90 : 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-jopi-ink/5 bg-jopi-paper lg:hidden dark:border-white/5 dark:bg-[#120a1f]"
          >
            <motion.nav
              variants={staggerContainer(0.06)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-1 px-4 pb-6 pt-2"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  variants={staggerItem}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-jopi-ink/80 hover:bg-jopi-ink/5 dark:text-white/80 dark:hover:bg-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                variants={staggerItem}
                href="#descarga"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-jopi-violet px-5 py-3 text-center text-base font-semibold text-white"
              >
                {CTA_LABEL}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
