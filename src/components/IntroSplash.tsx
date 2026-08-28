"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SpeakerHigh, SpeakerSlash, X } from "@phosphor-icons/react/dist/ssr";

const DESKTOP_SRC = "/videos/videoiniciodesktop.mp4";
const MOBILE_SRC = "/videos/videoiniciomobile.mp4";
const DESKTOP_QUERY = "(min-width: 768px)";
const SAFETY_TIMEOUT_MS = 9000;

export function IntroSplash() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) {
      setVisible(false);
      return;
    }

    const mq = window.matchMedia(DESKTOP_QUERY);
    setVideoSrc(mq.matches ? DESKTOP_SRC : MOBILE_SRC);

    const handler = (e: MediaQueryListEvent) => {
      setVideoSrc(e.matches ? DESKTOP_SRC : MOBILE_SRC);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [reduce]);

  useEffect(() => {
    if (!visible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setVisible(false), SAFETY_TIMEOUT_MS);
    return () => {
      document.body.style.overflow = previousOverflow;
      clearTimeout(timer);
    };
  }, [visible]);

  function dismiss() {
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-jopi-deep"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {videoSrc ? (
            <video
              key={videoSrc}
              src={videoSrc}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted={muted}
              playsInline
              onEnded={dismiss}
              onError={dismiss}
              onTimeUpdate={(e) => {
                const el = e.currentTarget;
                if (el.duration) setProgress(el.currentTime / el.duration);
              }}
            />
          ) : (
            <span className="text-4xl font-bold text-white">
              Jop<span className="text-jopi-orange">i</span>
            </span>
          )}

          <div className="absolute right-4 top-4 z-10 flex items-center gap-2 sm:right-6 sm:top-6">
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Activar sonido" : "Silenciar"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur transition-colors hover:bg-black/45"
            >
              {muted ? <SpeakerSlash size={18} /> : <SpeakerHigh size={18} />}
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="flex h-10 items-center gap-1.5 rounded-full bg-black/30 px-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-black/45"
            >
              Saltar
              <X size={14} />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-white/20">
            <div
              className="h-full bg-jopi-orange"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
