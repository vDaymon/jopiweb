"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CaretLeft, CaretRight, Play } from "@phosphor-icons/react/dist/ssr";
import { formatCOP } from "@/lib/services";

const LETTERS = ["J", "o", "p", "i"];

const VIDEO_SLIDES = [
  { id: "tu-escoges-cuando", src: "/videos/tu-escoges-cuando.mp4", label: "Tú escoges cuándo" },
  {
    id: "un-precio",
    src: "/videos/un-precio-que-se-acomode-a-ti.mp4",
    label: "Un precio que se acomode a ti",
  },
];

const FLOATING_OFFERS = [
  { id: "cerrajeria", name: "Cerrajería", price: 90000, image: "/servicios/cerrajeria.png" },
  { id: "electrico", name: "Servicio eléctrico", price: 70000, image: "/servicios/electrico.png" },
];

function BrandSlide({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-jopi-violet to-jopi-deep">
      <motion.div
        aria-hidden
        className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl"
        animate={reduce ? undefined : { x: [0, 26, -12, 0], y: [0, 18, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-2rem] top-1/3 h-28 w-28 rounded-full bg-white/10 blur-2xl"
        animate={reduce ? undefined : { x: [0, -20, 14, 0], y: [0, -14, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-[-2.5rem] left-1/3 h-36 w-36 rounded-full bg-jopi-orange/15 blur-2xl"
        animate={reduce ? undefined : { x: [0, 16, -20, 0], y: [0, -10, 14, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex text-2xl font-bold sm:text-4xl lg:text-6xl">
        {LETTERS.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className={index === 3 ? "text-jopi-orange" : "text-white"}
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function VideoSlide({ src, label }: { src: string; label: string }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-jopi-violet to-jopi-deep px-8 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
          <Play size={22} weight="fill" className="text-white" />
        </div>
        <p className="text-sm font-semibold text-white">Video próximamente</p>
        <p className="text-xs text-white/70">{label}</p>
      </div>
    );
  }

  return (
    <video
      className="h-full w-full object-cover"
      src={src}
      autoPlay
      muted
      loop
      playsInline
      onError={() => setErrored(true)}
    />
  );
}

function AnimatedTitle({ text, reduce }: { text: string; reduce: boolean }) {
  const words = text.split(" ");

  return (
    <motion.div
      className="flex flex-wrap items-center justify-end gap-x-1.5 gap-y-0.5 text-right sm:gap-x-2"
      initial={reduce ? undefined : "hidden"}
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={
            reduce
              ? undefined
              : {
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }
          }
          className="text-xl font-extrabold leading-tight text-jopi-orange sm:text-2xl lg:text-4xl"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

type Slide =
  | { id: string; kind: "brand" }
  | { id: string; kind: "video"; src: string; label: string };

const SLIDES: Slide[] = [
  { id: "brand", kind: "brand" },
  ...VIDEO_SLIDES.map((v) => ({ id: v.id, kind: "video" as const, src: v.src, label: v.label })),
];

const AUTOPLAY_MS = 5000;

export function HeroCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (reduce || hovering) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [reduce, hovering]);

  function goTo(i: number) {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  }

  function prev() {
    setDirection(-1);
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  }

  function next() {
    setDirection(1);
    setIndex((i) => (i + 1) % SLIDES.length);
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0 }),
  };

  const current = SLIDES[index];

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4">
      <div className="flex w-full items-center justify-center gap-3 sm:gap-6 lg:gap-10">
        {current.kind === "video" && (
          <div className="flex max-w-[150px] shrink justify-end sm:max-w-[240px] lg:max-w-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <AnimatedTitle text={current.label} reduce={!!reduce} />
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        <div
          className="relative aspect-[9/19.5] w-[130px] flex-none sm:w-[190px] lg:w-[260px]"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(67,17,136,0.55)]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current.id}
              custom={direction}
              variants={reduce ? undefined : variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {current.kind === "brand" ? (
                <BrandSlide reduce={!!reduce} />
              ) : (
                <VideoSlide src={current.src} label={current.label} />
              )}
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            aria-label="Diapositiva anterior"
            className="absolute left-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur transition-colors hover:bg-black/35 sm:flex"
          >
            <CaretLeft size={18} weight="bold" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente diapositiva"
            className="absolute right-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur transition-colors hover:bg-black/35 sm:flex"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>

        <AnimatePresence>
          {current.kind === "brand" &&
            FLOATING_OFFERS.map((offer, i) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: reduce ? 0 : [0, i === 0 ? -10 : 10, 0] }}
                exit={{ opacity: 0 }}
                transition={
                  reduce
                    ? { duration: 0.3 }
                    : {
                        opacity: { duration: 0.3 },
                        y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
                      }
                }
                className={
                  i === 0
                    ? "absolute -left-4 top-8 z-10 sm:-left-10 sm:top-14"
                    : "absolute -right-4 bottom-10 z-10 sm:-right-10 sm:bottom-20"
                }
              >
                <div className="flex items-center gap-2 rounded-2xl bg-white/95 p-2 pr-3 shadow-lg backdrop-blur sm:gap-3 sm:p-3 sm:pr-4 dark:bg-[#1c1230]/95">
                  <Image
                    src={offer.image}
                    alt=""
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-lg object-cover sm:h-10 sm:w-10"
                  />
                  <div>
                    <p className="text-[11px] font-semibold text-jopi-ink sm:text-xs dark:text-white">
                      {offer.name}
                    </p>
                    <p className="text-[11px] text-jopi-violet sm:text-xs">{formatCOP(offer.price)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-jopi-violet"
                : "w-2 bg-jopi-ink/20 hover:bg-jopi-ink/35 dark:bg-white/20 dark:hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
