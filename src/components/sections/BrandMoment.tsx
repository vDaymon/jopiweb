"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";

export function BrandMoment() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(panelRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.88]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-jopi-deep to-jopi-violet-dark py-20 lg:py-28"
    >
      <p className="relative mb-10 text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        Así se siente Jopi
      </p>

      <motion.div
        ref={panelRef}
        style={reduce ? undefined : { scale }}
        className="relative mx-auto aspect-[9/16] w-full max-w-[240px] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)] sm:max-w-[300px] lg:max-w-[380px]"
      >
        {isInView && (
          <video
            className="h-full w-full object-cover"
            src="/videos/videoiniciomobile.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </motion.div>
    </section>
  );
}
