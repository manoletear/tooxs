import { createFileRoute, Link } from "@tanstack/react-router";
import { Brain, Cog, BarChart3, FileText, Factory, ArrowRight } from "lucide-react";
import { PrismBackground } from "@/components/PrismBackground";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

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

const services = [
  {
    icon: Brain,
    slug: "ia-aplicada",
    title: "IA Aplicada al Negocio",
    subtitle: "Convierte datos en decisiones. Automatiza lo que hoy depende de personas.",
    metrics: ["2x–5x productividad", "-20% a -60% costos", "-50% a -90% tiempos"],
  },
  {
    icon: Cog,
    slug: "automatizacion",
    title: "Automatización de Procesos",
    subtitle: "Elimina tareas manuales. Acelera tu operación.",
    metrics: ["-50% a -90% tiempos", "-70% errores manuales", "-20% a -60% costos"],
  },
  {
    icon: BarChart3,
    slug: "data-analytics",
    title: "Data & Analytics",
    subtitle: "Convierte datos dispersos en decisiones accionables.",
    metrics: ["+20% a +30% precisión", "-30% tiempo análisis", "+15% eficiencia"],
  },
  {
    icon: FileText,
    slug: "automatizacion-documental",
    title: "Automatización Documental",
    subtitle: "De documentos a datos en segundos.",
    metrics: ["-70% a -90% tiempo", "-60% a -80% errores", "+3x velocidad"],
  },
  {
    icon: Factory,
    slug: "optimizacion-operacional",
    title: "Optimización Operacional",
    subtitle: "Más eficiencia. Menos pérdida operativa.",
    metrics: ["-30% a -50% downtime", "+10% a +20% productividad", "-15% a -30% costos"],
  },
];

function ServicesIndexPage() {
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

      {/* ══════ SERVICE CARDS ══════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {services.map((svc, i) => (
            <ScrollReveal key={svc.slug} delay={Math.min(i * 80, 400)}>
              <Link
                to="/services/$serviceSlug"
                params={{ serviceSlug: svc.slug }}
                className="group grid md:grid-cols-[1fr_auto] gap-6 items-center p-6 md:p-8 rounded-xl border border-border bg-card hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svc.icon size={20} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {svc.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:mb-0 max-w-xl">
                    {svc.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {svc.metrics.map((m) => (
                      <span key={m} className="text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  Ver servicio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
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
