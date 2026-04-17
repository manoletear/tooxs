import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CapabilityData } from "./CapabilityFlipCard";

import illu01 from "@/assets/cap-illustration-01.webp";
import illu02 from "@/assets/cap-illustration-02.webp";
import illu03 from "@/assets/cap-illustration-03.webp";
import illu04 from "@/assets/cap-illustration-04.webp";
import illu05 from "@/assets/cap-illustration-05.webp";
import illu06 from "@/assets/cap-illustration-06.webp";
import illu07 from "@/assets/cap-illustration-07.webp";

const ILLUSTRATIONS: Record<string, string> = {
  "01": illu01,
  "02": illu02,
  "03": illu03,
  "04": illu04,
  "05": illu05,
  "06": illu06,
  "07": illu07,
};

interface CapabilitySplitViewProps {
  capabilities: CapabilityData[];
}

export function CapabilitySplitView({ capabilities }: CapabilitySplitViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];
  const illustration = ILLUSTRATIONS[active.number];

  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[640px]">
        {/* ── LISTA IZQUIERDA ── */}
        <div className="px-2 py-10 sm:px-4 sm:py-14 lg:px-6 lg:py-16">
          <ul className="flex flex-col gap-1.5 sm:gap-2">
            {capabilities.map((cap, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={cap.number}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    className="group flex items-center gap-3 sm:gap-4 text-left w-full py-1 transition-colors"
                    aria-pressed={isActive}
                  >
                    {/* Bullet cuadrado tipo referencia */}
                    <span
                      className="shrink-0 w-2 h-2 transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? cap.accentColor : "transparent",
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    <span
                      className={`text-xl sm:text-2xl md:text-[1.7rem] lg:text-[1.85rem] font-semibold leading-[1.25] tracking-tight transition-colors duration-300 ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/35 group-hover:text-foreground/70"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {cap.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── PANEL DERECHO ── */}
        <div className="relative px-2 py-10 sm:px-4 sm:py-14 lg:px-6 lg:py-16 lg:border-l border-border">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full"
            >
              {/* Eyebrow */}
              <p
                className="text-[11px] font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: active.accentColor }}
              >
                {active.number} · Capacidad
              </p>

              {/* Headline */}
              <h3
                className="text-xl sm:text-2xl md:text-[1.6rem] font-bold text-foreground leading-[1.25] mb-5 max-w-[28ch]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {active.back.whatChanges}
              </h3>

              {/* Descripción */}
              <p className="text-foreground/70 text-sm md:text-[0.95rem] leading-relaxed mb-6 max-w-[42ch]">
                {active.shortDescription}{" "}
                <span className="text-foreground/50">Aplica en {active.appliesIn}.</span>
              </p>

              {/* Ilustración */}
              <div className="mt-auto pt-4">
                <div
                  className="relative w-full aspect-[4/3] max-w-[460px] rounded-xl overflow-hidden"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${active.accentColor}1f 0%, transparent 60%)`,
                  }}
                >
                  <img
                    src={illustration}
                    alt={`Ilustración ${active.title}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
