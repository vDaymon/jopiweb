"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function SectionReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={
        reduce
          ? undefined
          : { opacity: 0, clipPath: "inset(6% 0% 6% 0% round 28px)" }
      }
      whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
