import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { RotateCw } from "lucide-react";

export interface CapabilityRoleImpact {
  role: string;
  text: string;
}

export interface CapabilityIndustryExample {
  industry: string;
  text: string;
}

export interface CapabilityData {
  icon: LucideIcon;
  emoji: string;
  number: string;
  title: string;
  shortDescription: string;
  appliesIn: string;
  accentColor: string;
  back: {
    whatChanges: string;
    impacts: CapabilityRoleImpact[];
    examples: CapabilityIndustryExample[];
  };
}

export function CapabilityFlipCard({ cap }: { cap: CapabilityData }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = cap.icon;

  return (
    <div
      className="relative w-full"
      style={{ perspective: "1600px", minHeight: 460 }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: 460,
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="absolute inset-0 rounded-2xl p-7 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            background: `linear-gradient(155deg, ${cap.accentColor}10 0%, hsl(var(--card)) 55%)`,
            border: `1px solid ${cap.accentColor}30`,
            boxShadow: `0 8px 28px ${cap.accentColor}15`,
          }}
        >
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
              style={{
                background: `${cap.accentColor}18`,
                border: `1px solid ${cap.accentColor}35`,
              }}
            >
              <Icon size={26} style={{ color: cap.accentColor }} />
            </div>
            <span
              className="text-xs font-bold tracking-[0.2em] px-2.5 py-1 rounded-full"
              style={{ background: `${cap.accentColor}15`, color: cap.accentColor }}
            >
              {cap.number}
            </span>
          </div>

          <h3
            className="text-xl md:text-[1.35rem] font-bold text-foreground mb-3 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cap.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
            {cap.shortDescription}
          </p>

          <div className="mb-5">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground/70 mb-1.5">
              Aplica en
            </p>
            <p className="text-xs text-foreground/80 leading-relaxed">
              {cap.appliesIn}
            </p>
          </div>

          <button
            onClick={() => setFlipped(true)}
            className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white hover:-translate-y-0.5 transition-transform"
            style={{
              background: cap.accentColor,
              boxShadow: `0 6px 18px ${cap.accentColor}40`,
            }}
          >
            Ver qué cambia <RotateCw size={12} />
          </button>
        </div>

        {/* ── BACK ── */}
        <div
          className="absolute inset-0 rounded-2xl p-6 flex flex-col text-white overflow-y-auto"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `linear-gradient(155deg, ${cap.accentColor} 0%, ${cap.accentColor}dd 100%)`,
            boxShadow: `0 12px 32px ${cap.accentColor}40`,
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80">
              {cap.number} · {cap.title}
            </span>
            <button
              onClick={() => setFlipped(false)}
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-xs transition-colors"
              aria-label="Volver"
            >
              ✕
            </button>
          </div>

          <div className="mb-4">
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/70 mb-1.5">
              Qué cambia
            </p>
            <p className="text-sm leading-relaxed text-white/95">
              {cap.back.whatChanges}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/70 mb-2">
              Impacto por rol
            </p>
            <ul className="space-y-1.5">
              {cap.back.impacts.map((imp) => (
                <li key={imp.role} className="text-xs leading-relaxed text-white/90">
                  <span className="font-bold text-white">{imp.role}:</span> {imp.text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/70 mb-2">
              Ejemplos por industria
            </p>
            <ul className="space-y-1">
              {cap.back.examples.map((ex) => (
                <li key={ex.industry} className="text-xs leading-relaxed text-white/90 flex gap-1.5">
                  <span className="text-white/60">·</span>
                  <span><span className="font-semibold text-white">{ex.industry}:</span> {ex.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
