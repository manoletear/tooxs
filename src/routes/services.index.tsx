import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Cog, BarChart3, FileText, Factory, ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PrismBackground } from "@/components/PrismBackground";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

import heroIa from "@/assets/hero-ia-aplicada.jpg";
import heroAuto from "@/assets/hero-automatizacion.jpg";
import heroData from "@/assets/hero-data-analytics.jpg";
import heroDoc from "@/assets/hero-documental.jpg";
import heroOpt from "@/assets/hero-optimizacion.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Servicios — TOOXS" },
      { name: "description", content: "IA aplicada, automatización de procesos, data & analytics, automatización documental y optimización operacional para empresas industriales." },
      { property: "og:title", content: "Servicios — TOOXS" },
      { property: "og:description", content: "Plataformas de valor que generan impacto medible en tu operación." },
    ],
  }),
  component: ServicesIndexPage,
});

interface ServiceValue {
  title: string;
  description: string;
}

interface ServiceMetric {
  value: string;
  label: string;
}

interface ServiceData {
  icon: typeof Brain;
  slug: string;
  title: string;
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
    subtitle: "Elimina tareas manuales. Acelera tu operación.",
    image: heroAuto,
    accentColor: "#20B2AA",
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
    subtitle: "Convierte datos dispersos en decisiones accionables.",
    image: heroData,
    accentColor: "#17A86A",
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

function ServicesIndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <div>
      {/* ══════ HERO ══════ */}
      <section className="relative bg-navy text-white pt-32 pb-20 overflow-hidden">
        <PrismBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
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

      {/* ══════ SERVICE SELECTOR + DETAIL ══════ */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          background: "radial-gradient(circle at top left, rgba(58,111,247,0.12), transparent 30%), radial-gradient(circle at bottom right, rgba(34,160,138,0.10), transparent 25%), linear-gradient(180deg, #09101f 0%, #0b1020 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Tab Labels ── */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-10">
              {services.map((svc, i) => {
                const isActive = activeIndex === i;
                const Icon = svc.icon;
                return (
                  <button
                    key={svc.slug}
                    onClick={() => setActiveIndex(i)}
                    className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer border"
                    style={{
                      background: isActive ? `${svc.accentColor}20` : "rgba(255,255,255,0.04)",
                      borderColor: isActive ? `${svc.accentColor}60` : "rgba(255,255,255,0.08)",
                      color: isActive ? "#fff" : "#a7b0c5",
                      boxShadow: isActive ? `0 8px 24px ${svc.accentColor}25` : "none",
                    }}
                  >
                    <Icon size={18} style={{ color: isActive ? svc.accentColor : "#a7b0c5" }} />
                    <span className="hidden sm:inline">{svc.title}</span>
                    <span className="sm:hidden">{svc.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* ── Expanded Detail Panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-[28px] border overflow-hidden"
              style={{
                background: "linear-gradient(to bottom, #111834, #0d1328)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              {/* Hero image + title */}
              <div className="relative h-[280px] md:h-[340px] overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, #111834 0%, ${active.accentColor}40 40%, rgba(0,0,0,0.3) 100%)`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-10">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
                    style={{
                      background: `${active.accentColor}30`,
                      color: "#fff",
                      border: `1px solid ${active.accentColor}50`,
                    }}
                  >
                    <active.icon size={14} />
                    Servicios TOOXS
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                    {active.title}
                  </h2>
                  <p className="text-white/80 text-lg max-w-2xl">{active.subtitle}</p>
                </div>
              </div>

              {/* Content body */}
              <div className="p-8 md:p-10 space-y-10">
                {/* Statement */}
                <div className="max-w-3xl">
                  {active.statement.map((p, i) => (
                    <p key={i} className="text-base md:text-lg leading-relaxed mb-4 last:mb-0" style={{ color: "#c8d0e4", fontFamily: "var(--font-emphasis)" }}>
                      {p}
                    </p>
                  ))}
                </div>

                {/* How we generate value */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: active.accentColor }}>
                    CÓMO GENERAMOS VALOR
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {active.values.map((val, i) => (
                      <div
                        key={val.title}
                        className="p-5 rounded-[20px] border"
                        style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                            style={{ background: `${active.accentColor}30` }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h4 className="text-white font-semibold text-sm">{val.title}</h4>
                        </div>
                        <p className="text-sm leading-relaxed pl-11" style={{ color: "#a7b0c5" }}>{val.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-center" style={{ color: active.accentColor }}>
                    IMPACTO MEDIBLE
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-4">
                    {active.metrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: active.accentColor }}>{m.value}</p>
                        <p className="text-xs" style={{ color: "#a7b0c5" }}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-center italic" style={{ color: "rgba(167,176,197,0.5)" }}>{active.metricsSource}</p>
                </div>

                {/* Capabilities */}
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: active.accentColor }}>
                    CAPACIDADES CLAVE
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {active.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.08)",
                          color: "#d4ddf4",
                        }}
                      >
                        <CheckCircle size={14} style={{ color: active.accentColor }} />
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-5">{active.cta.title}</h3>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-bold hover:-translate-y-0.5 transition-transform"
                    style={{
                      background: active.accentColor,
                      boxShadow: `0 10px 30px ${active.accentColor}40`,
                    }}
                  >
                    {active.cta.buttonText} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════ STRATEGIC CLOSE ══════ */}
      <section className="bg-section-bg py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">CIERRE ESTRATÉGICO</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border bg-card">
                <p className="text-sm text-muted-foreground mb-2">Nuestras industrias responden:</p>
                <p className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  "¿Dónde aplicamos?"
                </p>
              </div>
              <div className="p-6 rounded-xl border bg-card">
                <p className="text-sm text-muted-foreground mb-2">Nuestros servicios responden:</p>
                <p className="text-lg font-bold text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  "¿Cómo generamos impacto?"
                </p>
              </div>
            </div>
          </ScrollReveal>
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
