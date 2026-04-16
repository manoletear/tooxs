import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CapabilityData } from "./CapabilityFlipCard";

interface CapabilitySplitViewProps {
  capabilities: CapabilityData[];
}

export function CapabilitySplitView({ capabilities }: CapabilitySplitViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,360px)_1fr] gap-6 lg:gap-10 items-start">
      {/* ── LISTA IZQUIERDA ── */}
      <ul className="flex flex-col gap-2 lg:sticky lg:top-24">
        {capabilities.map((cap, i) => {
          const isActive = i === activeIndex;
          const Icon = cap.icon;
          return (
            <li key={cap.number}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={`group w-full text-left rounded-xl border transition-all duration-300 px-4 py-3.5 flex items-center gap-3 ${
                  isActive
                    ? "bg-card border-transparent shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]"
                    : "bg-transparent border-border/60 hover:bg-card/60 hover:border-border"
                }`}
                style={isActive ? { borderLeft: `3px solid ${cap.accentColor}` } : undefined}
                aria-pressed={isActive}
              >
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors"
                  style={{
                    backgroundColor: isActive ? cap.accentColor : `${cap.accentColor}15`,
                    color: isActive ? "#fff" : cap.accentColor,
                  }}
                >
                  <Icon size={18} strokeWidth={2.2} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[10px] font-semibold tracking-[0.18em] text-muted-foreground/80">
                    {cap.number}
                  </span>
                  <span
                    className={`block text-sm font-semibold leading-tight truncate ${
                      isActive ? "text-foreground" : "text-foreground/80"
                    }`}
                  >
                    {cap.title}
                  </span>
                </span>
                <ArrowRight
                  size={14}
                  className={`shrink-0 transition-all ${
                    isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                  }`}
                  style={{ color: cap.accentColor }}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* ── PANEL DERECHO ── */}
      <div className="relative min-h-[520px] rounded-2xl overflow-hidden border border-border/60 bg-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.number}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {/* Visual / diagrama */}
            <div
              className="relative overflow-hidden p-6 md:p-8 flex items-center justify-center min-h-[260px] md:min-h-[520px]"
              style={{
                background: `linear-gradient(135deg, ${active.accentColor}12 0%, ${active.accentColor}05 100%)`,
              }}
            >
              <CapabilityDiagram
                accent={active.accentColor}
                kind={active.number}
              />
              <span
                className="absolute top-5 left-5 text-[11px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: active.accentColor }}
              >
                {active.number} · {active.emoji}
              </span>
            </div>

            {/* Contenido */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-5">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {active.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {active.shortDescription}
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3 border-l-2" style={{ borderColor: active.accentColor }}>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                  Qué cambia
                </p>
                <p className="text-sm text-foreground/85 leading-relaxed">
                  {active.back.whatChanges}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Impacto por rol
                </p>
                <ul className="space-y-1.5">
                  {active.back.impacts.map((imp) => (
                    <li key={imp.role} className="text-sm text-foreground/85 flex gap-2">
                      <span className="font-semibold shrink-0" style={{ color: active.accentColor }}>
                        {imp.role}:
                      </span>
                      <span>{imp.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Aplica en
                </p>
                <p className="text-sm text-foreground/75">{active.appliesIn}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Diagrama SVG por capacidad (uno distinto por número)
   ───────────────────────────────────────────────────────── */
function CapabilityDiagram({ accent, kind }: { accent: string; kind: string }) {
  const common = "w-full h-auto max-w-[320px]";

  switch (kind) {
    case "01": // Datos e IA — red neuronal
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          {[40, 100, 160].map((cx) =>
            [50, 100, 150].map((cy) => (
              <line
                key={`l-${cx}-${cy}`}
                x1={cx}
                y1={cy}
                x2={cx + 60}
                y2={cy === 50 ? 100 : cy === 150 ? 100 : 50}
                stroke={accent}
                strokeWidth="1"
                opacity="0.25"
              />
            ))
          )}
          {[
            [40, 50], [40, 100], [40, 150],
            [120, 50], [120, 100], [120, 150],
            [200, 100],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i === 6 ? 10 : 7} fill={accent} opacity={i === 6 ? 1 : 0.7} />
          ))}
        </svg>
      );

    case "02": // Automatización — flujo con engranaje
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          <rect x="20" y="80" width="50" height="40" rx="6" stroke={accent} strokeWidth="1.5" opacity="0.5" />
          <rect x="170" y="80" width="50" height="40" rx="6" stroke={accent} strokeWidth="1.5" opacity="0.5" />
          <path d="M70 100 H100" stroke={accent} strokeWidth="1.5" />
          <path d="M140 100 H170" stroke={accent} strokeWidth="1.5" />
          <circle cx="120" cy="100" r="22" stroke={accent} strokeWidth="2" fill={`${accent}20`} />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <rect
              key={deg}
              x="118"
              y="70"
              width="4"
              height="10"
              fill={accent}
              transform={`rotate(${deg} 120 100)`}
            />
          ))}
          <circle cx="120" cy="100" r="6" fill={accent} />
        </svg>
      );

    case "03": // Integración — hub con nodos
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          <circle cx="120" cy="100" r="24" fill={accent} />
          {[
            [40, 50], [200, 50], [40, 150], [200, 150], [120, 30], [120, 170],
          ].map(([x, y], i) => (
            <g key={i}>
              <line x1="120" y1="100" x2={x} y2={y} stroke={accent} strokeWidth="1.2" opacity="0.4" />
              <rect x={x - 14} y={y - 10} width="28" height="20" rx="4" fill={`${accent}25`} stroke={accent} strokeWidth="1" />
            </g>
          ))}
        </svg>
      );

    case "04": // Analítica — dashboard con barras y línea
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          <rect x="20" y="30" width="200" height="140" rx="8" stroke={accent} strokeWidth="1" opacity="0.3" />
          {[40, 70, 100, 130, 160, 190].map((x, i) => {
            const h = [40, 70, 50, 90, 65, 100][i];
            return (
              <rect
                key={x}
                x={x - 8}
                y={160 - h}
                width="16"
                height={h}
                fill={accent}
                opacity={0.3 + i * 0.1}
                rx="2"
              />
            );
          })}
          <polyline
            points="40,120 70,90 100,105 130,70 160,80 190,55"
            stroke={accent}
            strokeWidth="2"
            fill="none"
          />
          {[[40, 120], [70, 90], [100, 105], [130, 70], [160, 80], [190, 55]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={accent} />
          ))}
        </svg>
      );

    case "05": // Nube
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          <path
            d="M70 120 Q40 120 40 95 Q40 75 65 75 Q70 50 100 50 Q130 50 140 75 Q175 70 180 100 Q200 105 195 130 Q190 145 170 145 H80 Q60 145 70 120 Z"
            fill={`${accent}20`}
            stroke={accent}
            strokeWidth="2"
          />
          {[100, 120, 140].map((x, i) => (
            <line key={x} x1={x} y1="160" x2={x} y2="180" stroke={accent} strokeWidth="2" opacity={0.5 + i * 0.2} />
          ))}
          <rect x="80" y="180" width="80" height="6" rx="2" fill={accent} opacity="0.6" />
        </svg>
      );

    case "06": // Procesos críticos — engranajes interconectados
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          {[[80, 100, 30], [160, 100, 24]].map(([cx, cy, r], idx) => (
            <g key={idx}>
              <circle cx={cx} cy={cy} r={r} stroke={accent} strokeWidth="2" fill={`${accent}15`} />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <rect
                  key={deg}
                  x={cx - 3}
                  y={cy - r - 6}
                  width="6"
                  height="8"
                  fill={accent}
                  transform={`rotate(${deg} ${cx} ${cy})`}
                />
              ))}
              <circle cx={cx} cy={cy} r={r / 3} fill={accent} />
            </g>
          ))}
        </svg>
      );

    case "07": // Estrategia — diana
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          {[60, 45, 30, 15].map((r, i) => (
            <circle
              key={r}
              cx="120"
              cy="100"
              r={r}
              stroke={accent}
              strokeWidth="1.5"
              fill={i % 2 === 0 ? "transparent" : `${accent}15`}
            />
          ))}
          <circle cx="120" cy="100" r="5" fill={accent} />
          <line x1="180" y1="40" x2="125" y2="95" stroke={accent} strokeWidth="2" />
          <polygon points="120,100 130,92 132,98" fill={accent} />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 240 200" className={common} fill="none">
          <circle cx="120" cy="100" r="40" stroke={accent} strokeWidth="2" fill={`${accent}20`} />
        </svg>
      );
  }
}
