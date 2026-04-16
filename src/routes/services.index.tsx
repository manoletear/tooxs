import { useState, useCallback, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Cog, BarChart3, FileText, Factory, ArrowRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PrismBackground } from "@/components/PrismBackground";
import { BokehBackground } from "@/components/BokehBackground";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

import heroIa from "@/assets/hero-ia-aplicada.jpg";
import heroAuto from "@/assets/hero-automatizacion.jpg";
import heroData from "@/assets/hero-data-analytics.jpg";
import heroDoc from "@/assets/hero-documental.jpg";
import heroOpt from "@/assets/hero-optimizacion.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Servicios — TOOXS | IA, Automatización y Data Analytics" },
      { name: "description", content: "IA aplicada, automatización de procesos RPA, data analytics, automatización documental y optimización operacional para empresas industriales en Chile y Latinoamérica." },
      { property: "og:title", content: "Servicios — TOOXS | IA, Automatización y Data Analytics" },
      { property: "og:description", content: "Plataformas de valor que generan impacto medible: IA aplicada, RPA, data analytics y optimización operacional." },
      { property: "og:url", content: "https://www.tooxs.com/services" },
      { name: "twitter:title", content: "Servicios — TOOXS" },
      { name: "twitter:description", content: "IA aplicada, automatización, data analytics y optimización operacional para empresas." },
      { name: "keywords", content: "servicios IA, automatización RPA, data analytics, automatización documental, optimización operacional, consultoría tecnológica, TOOXS" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/services" },
    ],
  }),
  component: ServicesIndexPage,
});

interface ServiceValue { title: string; description: string }
interface ServiceMetric { value: string; label: string }

interface ServiceData {
  icon: typeof Brain;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  image: string;
  accentColor: string;
  statement: string[];
  values: ServiceValue[];
  metrics: ServiceMetric[];
  metricsSource: string;
  capabilities: string[];
  cta: { title: string; buttonText: string };
}

const services: ServiceData[] = [
  {
    icon: Brain,
    slug: "ia-aplicada",
    title: "IA Aplicada al Negocio",
    shortTitle: "IA Aplicada",
    subtitle: "Convierte datos en decisiones. Automatiza lo que hoy depende de personas.",
    image: heroIa,
    accentColor: "#177FC6",
    statement: [
      "La IA no genera valor por sí sola. Genera valor cuando está integrada en decisiones, procesos y flujos reales.",
      "En TOOXS diseñamos IA que no se queda en modelos, sino que opera dentro del negocio.",
    ],
    values: [
      { title: "Decisiones automatizadas", description: "Implementamos modelos que priorizan, recomiendan y ejecutan acciones en tiempo real." },
      { title: "Copilotos operacionales", description: "Asistentes inteligentes que ayudan a equipos a resolver tareas complejas más rápido." },
      { title: "Predicción y anticipación", description: "Modelos que identifican patrones y anticipan riesgos, demanda o fallas." },
      { title: "IA en procesos críticos", description: "Integramos IA directamente en operaciones, no como capa aislada." },
    ],
    metrics: [
      { value: "2x a 5x", label: "Productividad" },
      { value: "-20% a -60%", label: "Costos operativos" },
      { value: "-50% a -90%", label: "Tiempos de proceso" },
    ],
    metricsSource: "Fuente: McKinsey & Company / Deloitte",
    capabilities: ["Modelos predictivos", "IA generativa", "Agentes autónomos", "Copilotos empresariales"],
    cta: { title: "Activa IA donde realmente impacta tu negocio", buttonText: "Solicita un diagnóstico en 48 horas" },
  },
  {
    icon: Cog,
    slug: "automatizacion",
    title: "Automatización de Procesos",
    shortTitle: "Automatización",
    subtitle: "Elimina tareas manuales. Acelera tu operación.",
    image: heroAuto,
    accentColor: "#E08A2B",
    statement: [
      "La mayoría de las organizaciones no tienen un problema de estrategia, sino de ejecución.",
      "Automatizar procesos es la forma más directa de mejorar velocidad, eficiencia y escalabilidad.",
    ],
    values: [
      { title: "Automatización end-to-end", description: "Desde ingreso de datos hasta ejecución final." },
      { title: "Orquestación de workflows", description: "Conectamos personas, sistemas y decisiones." },
      { title: "RPA + IA", description: "Automatizamos tareas repetitivas y decisiones simples." },
      { title: "Eliminación de reprocesos", description: "Reducimos errores y retrabajo." },
    ],
    metrics: [
      { value: "-50% a -90%", label: "Tiempos de proceso" },
      { value: "-20% a -60%", label: "Costos operativos" },
      { value: "-70%", label: "Errores manuales" },
    ],
    metricsSource: "Fuente: Deloitte / PwC",
    capabilities: ["RPA", "Workflow orchestration", "Integración de sistemas", "Automatización documental"],
    cta: { title: "Automatiza donde hoy pierdes tiempo y margen", buttonText: "Conversemos sobre tu operación" },
  },
  {
    icon: BarChart3,
    slug: "data-analytics",
    title: "Data & Analytics",
    shortTitle: "Data & Analytics",
    subtitle: "Convierte datos dispersos en decisiones accionables.",
    image: heroData,
    accentColor: "#6366F1",
    statement: [
      "El problema no es falta de datos. Es falta de decisiones basadas en ellos.",
      "TOOXS convierte datos en una capa operativa real.",
    ],
    values: [
      { title: "Integración de datos", description: "Unificamos múltiples fuentes en una sola vista." },
      { title: "Dashboards ejecutivos", description: "Visibilidad en tiempo real para toma de decisiones." },
      { title: "Forecasting", description: "Proyección de demanda, riesgo o desempeño." },
      { title: "Analítica operacional", description: "Identificación de cuellos de botella y oportunidades." },
    ],
    metrics: [
      { value: "+20% a +30%", label: "Mejor precisión en decisiones" },
      { value: "-30%", label: "Tiempo en análisis" },
      { value: "+15%", label: "Eficiencia operativa" },
    ],
    metricsSource: "Fuente: Boston Consulting Group",
    capabilities: ["BI y dashboards", "Forecasting", "Data integration", "Control towers"],
    cta: { title: "Transforma datos en decisiones que impactan resultados", buttonText: "Solicita un diagnóstico" },
  },
  {
    icon: FileText,
    slug: "automatizacion-documental",
    title: "Automatización Documental",
    shortTitle: "Documental",
    subtitle: "De documentos a datos en segundos.",
    image: heroDoc,
    accentColor: "#C6961A",
    statement: [
      "Gran parte de la operación empresarial sigue atrapada en PDFs, correos y documentos.",
      "Liberar esa información es una de las mayores oportunidades de eficiencia.",
    ],
    values: [
      { title: "OCR inteligente", description: "Lectura automática de documentos." },
      { title: "Extracción de datos", description: "Conversión de documentos en información estructurada." },
      { title: "Validación documental", description: "Reducción de errores humanos." },
      { title: "Consulta inteligente", description: "Acceso inmediato a información crítica." },
    ],
    metrics: [
      { value: "-70% a -90%", label: "Tiempo de procesamiento" },
      { value: "-60% a -80%", label: "Errores" },
      { value: "+3x", label: "Velocidad operativa" },
    ],
    metricsSource: "Fuente: EY",
    capabilities: ["OCR + IA", "Clasificación documental", "Data extraction", "Knowledge search"],
    cta: { title: "Deja de buscar documentos. Encuentra información.", buttonText: "Solicita una demo" },
  },
  {
    icon: Factory,
    slug: "optimizacion-operacional",
    title: "Optimización Operacional",
    shortTitle: "Optimización",
    subtitle: "Más eficiencia. Menos pérdida operativa.",
    image: heroOpt,
    accentColor: "#C62D2D",
    statement: [
      "Las mejoras más grandes no vienen de nuevas inversiones, sino de operar mejor lo que ya tienes.",
    ],
    values: [
      { title: "Mantenimiento predictivo", description: "Reducción de fallas y downtime." },
      { title: "Monitoreo en tiempo real", description: "Visibilidad de operaciones críticas." },
      { title: "Optimización de recursos", description: "Mejor uso de activos y capacidad." },
      { title: "Mejora continua", description: "Identificación de oportunidades operativas." },
    ],
    metrics: [
      { value: "-30% a -50%", label: "Downtime" },
      { value: "+10% a +20%", label: "Productividad" },
      { value: "-15% a -30%", label: "Costos" },
    ],
    metricsSource: "Fuente: McKinsey & Company",
    capabilities: ["Predictive maintenance", "Digital twin", "Monitoring", "Optimization models"],
    cta: { title: "Optimiza tu operación donde realmente importa", buttonText: "Solicita un diagnóstico" },
  },
];

/* ── Hover Reveal Grid ── */
function HoverRevealCards({
  onSelect,
  activeHover,
  setActiveHover,
}: {
  onSelect: (index: number) => void;
  activeHover: number;
  setActiveHover: (i: number) => void;
}) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const gridStyle = isDesktop
    ? { gridTemplateColumns: services.map((_, i) => (i === activeHover ? "5fr" : "1fr")).join(" "), gridTemplateRows: "1fr" }
    : { gridTemplateColumns: "1fr", gridTemplateRows: services.map((_, i) => (i === activeHover ? "5fr" : "1fr")).join(" ") };

  return (
    <ul
      className="w-full list-none p-0 m-0 grid"
      style={{
        maxWidth: 1200,
        height: isDesktop ? 480 : 600,
        gap: 12,
        ...gridStyle,
        transition: "grid-template-columns 0.5s cubic-bezier(0.4,0,0.2,1), grid-template-rows 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {services.map((svc, idx) => {
        const isActive = idx === activeHover;
        const Icon = svc.icon;
        return (
          <li
            key={svc.slug}
            className="relative overflow-hidden cursor-pointer"
            style={{
              borderRadius: 20,
              minWidth: 0,
              minHeight: 0,
              boxShadow: isActive
                ? `0 12px 40px ${svc.accentColor}30`
                : "0 4px 12px rgba(0,0,0,0.15)",
              border: isActive
                ? `2px solid ${svc.accentColor}60`
                : "1px solid rgba(255,255,255,0.08)",
              transition: "box-shadow 0.4s, border 0.4s",
            }}
            onMouseEnter={() => setActiveHover(idx)}
            onClick={() => onSelect(idx)}
          >
            {/* Image */}
            <img
              src={svc.image}
              alt={svc.title}
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                zIndex: 1,
                filter: isActive ? "grayscale(0%) brightness(1)" : "grayscale(70%) brightness(0.6)",
                transform: isActive ? "scale(1)" : "scale(1.06)",
                transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            {/* Color tint overlay for specific cards */}
            {svc.slug === "automatizacion" && (
              <div
                className="absolute inset-0"
                style={{
                  zIndex: 1,
                  background: "rgba(23, 127, 198, 0.45)",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
            )}
            {svc.slug === "data-analytics" && (
              <div
                className="absolute inset-0"
                style={{
                  zIndex: 1,
                  background: "rgba(224, 120, 30, 0.45)",
                  mixBlendMode: "multiply",
                  pointerEvents: "none",
                }}
              />
            )}
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 2,
                background: isActive
                  ? `linear-gradient(to top, ${svc.accentColor}CC 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.2) 100%)`
                  : "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)",
                transition: "background 0.5s",
              }}
            />

            {/* Collapsed: rotated title (desktop only) */}
            {isDesktop && (
              <span
                className="absolute font-bold text-white whitespace-nowrap uppercase tracking-wider"
                style={{
                  zIndex: 3,
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  left: "50%",
                  bottom: "45%",
                  transform: "translateX(-50%) rotate(-90deg)",
                  transformOrigin: "center center",
                  opacity: isActive ? 0 : 0.75,
                  transition: "opacity 0.4s ease",
                }}
              >
                {svc.shortTitle}
              </span>
            )}

            {/* Expanded content */}
            <article
              className="absolute inset-0 flex flex-col justify-end p-6"
              style={{
                zIndex: 3,
                opacity: isActive ? 1 : isDesktop ? 0 : 0.6,
                transform: isActive ? "translateY(0)" : "translateY(10px)",
                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1) 0.08s",
              }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${svc.accentColor}30`, border: `1px solid ${svc.accentColor}50` }}
                >
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{svc.title}</h3>
                </div>
              </div>
              <p
                className="text-white/80 text-sm leading-relaxed mb-3 max-w-md"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(12px)",
                  transition: "all 0.4s 0.15s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                {svc.subtitle}
              </p>
              <div
                className="flex flex-wrap gap-2"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.3s 0.2s",
                }}
              >
                {svc.metrics.map((m) => (
                  <span key={m.label} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: `${svc.accentColor}25`, color: "#fff", border: `1px solid ${svc.accentColor}40` }}>
                    {m.value} {m.label.toLowerCase()}
                  </span>
                ))}
              </div>
              <button
                className="self-start mt-3 px-4 py-2 rounded-full text-white text-xs font-bold hover:-translate-y-0.5 transition-transform"
                style={{
                  background: svc.accentColor,
                  boxShadow: `0 8px 20px ${svc.accentColor}40`,
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.3s 0.25s, transform 0.2s",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(idx);
                }}
              >
                Ver detalle completo →
              </button>
            </article>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Detail Panel ── */
function ServiceDetailPanel({ svc, onClose }: { svc: ServiceData; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [svc.slug]);

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="mt-8 rounded-[24px] overflow-hidden shadow-xl border border-border/40">

        {/* ── Section 1: Statement ── */}
        <div
          className="relative px-8 md:px-12 py-10"
          style={{ background: `linear-gradient(135deg, ${svc.accentColor}12 0%, ${svc.accentColor}06 100%)` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ background: `${svc.accentColor}18`, color: svc.accentColor, border: `1px solid ${svc.accentColor}30` }}
              >
                <svc.icon size={14} />
                {svc.title}
              </span>
              {svc.statement.map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80 mb-3 last:mb-0 max-w-3xl" style={{ fontFamily: "var(--font-emphasis)" }}>
                  {p}
                </p>
              ))}
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ── Section 2: How we generate value ── */}
        <div className="bg-card px-8 md:px-12 py-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: svc.accentColor }}>
            CÓMO GENERAMOS VALOR
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {svc.values.map((val, i) => (
              <div
                key={val.title}
                className="p-5 rounded-[18px] border border-border bg-section-bg"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-primary-foreground"
                    style={{ background: svc.accentColor }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-foreground font-semibold text-sm">{val.title}</h4>
                </div>
                <p className="text-sm leading-relaxed pl-10 text-muted-foreground">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 3: Metrics ── */}
        <div
          className="px-8 md:px-12 py-10"
          style={{ background: svc.accentColor }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-center text-white/70">
            IMPACTO MEDIBLE
          </p>
          <div className="grid grid-cols-3 gap-6 mb-3">
            {svc.metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold mb-1 text-white">{m.value}</p>
                <p className="text-xs text-white/70">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center italic text-white/40">{svc.metricsSource}</p>
        </div>

        {/* ── Section 4: Capabilities ── */}
        <div className="bg-section-bg px-8 md:px-12 py-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: svc.accentColor }}>
            CAPACIDADES CLAVE
          </p>
          <div className="flex flex-wrap gap-2.5">
            {svc.capabilities.map((cap) => (
              <span
                key={cap}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-card text-sm font-medium text-foreground"
              >
                <CheckCircle size={14} style={{ color: svc.accentColor }} />
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* ── Section 5: CTA ── */}
        <div className="bg-card px-8 md:px-12 py-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{svc.cta.title}</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-primary-foreground text-sm font-bold hover:-translate-y-0.5 transition-transform"
            style={{ background: svc.accentColor, boxShadow: `0 10px 30px ${svc.accentColor}30` }}
          >
            {svc.cta.buttonText} <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

/* ── Main Page ── */
function ServicesIndexPage() {
  const [activeHover, setActiveHover] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div>
      {/* ══════ HERO ══════ */}
      <section className="relative bg-[#050d1a] text-white h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-end overflow-hidden">
        <BokehBackground
          colors={["#177FC6", "#20B2AA", "#1e3a5f", "#0e4d92"]}
          particleCount={45}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-12">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-4">Nuestros Servicios</p>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Plataformas de valor,<br />no listas de servicios
            </h1>
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
              Cada servicio responde una pregunta: <em className="text-white/80">¿Cómo generamos impacto?</em> Diseñamos soluciones que operan dentro del negocio, no como capas aisladas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ HOVER REVEAL CARDS + DETAIL ══════ */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollReveal>
            <HoverRevealCards
              onSelect={handleSelect}
              activeHover={activeHover}
              setActiveHover={setActiveHover}
            />
          </ScrollReveal>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            {selectedIndex !== null && (
              <ServiceDetailPanel
                key={services[selectedIndex].slug}
                svc={services[selectedIndex]}
                onClose={() => setSelectedIndex(null)}
              />
            )}
          </AnimatePresence>
        </div>
      </section>


      {/* ══════ CTA ══════ */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <PrismBackground className="opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Listo para transformar tu operación?
            </h2>
            <p className="text-navy-foreground/60 text-lg mb-8">
              Conversemos sobre cómo nuestros servicios pueden generar impacto medible en tu empresa.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mint text-navy px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              Solicita un diagnóstico <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
