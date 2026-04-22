import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Layers,
  Cog,
  Rocket,
  CheckCircle2,
  GraduationCap,
  Building2,
  Briefcase,
  Award,
  Lightbulb,
  Wrench,
  Zap,
  MessageCircle,
  Mail,
  Calculator,
  Star,
  PhoneCall,
} from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { NeuralActivationBackground } from "@/components/NeuralActivationBackground";
import { useMeeting } from "@/components/MeetingDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/* ═══════════ HubSpot Form (Talleres) ═══════════ */
function TalleresHubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.innerHTML =
      '<div class="hs-form-frame" data-region="na1" data-form-id="ab0e26ae-df87-4d16-bd80-dc741120c8c0" data-portal-id="24156430"></div>';
    const existing = document.querySelector(
      'script[src*="hsforms.net/forms/embed/24156430"]',
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/24156430.js";
      script.defer = true;
      document.head.appendChild(script);
    } else {
      // re-trigger HubSpot to render newly inserted frame
      // @ts-expect-error - HubSpot global
      window.hbspt?.forms?.create?.({
        region: "na1",
        portalId: "24156430",
        formId: "ab0e26ae-df87-4d16-bd80-dc741120c8c0",
        target: ".hs-form-frame[data-form-id='ab0e26ae-df87-4d16-bd80-dc741120c8c0']",
      });
    }
  }, []);

  return <div ref={containerRef} />;
}

export const Route = createFileRoute("/talleres")({
  head: () => ({
    meta: [
      { title: "Talleres Tooxs — Desbloquea tu IA interior | Formación práctica en IA" },
      {
        name: "description",
        content:
          "Programa de talleres Tooxs: tres sesiones prácticas de 90 min para que tu equipo detecte, diseñe y active soluciones reales de IA. Formación in-house y contextualizada.",
      },
      { property: "og:title", content: "Talleres Tooxs — Desbloquea tu IA interior" },
      {
        property: "og:description",
        content:
          "Tres talleres de IA aplicada para equipos: Fundamentos, Operaciones e Implementación. Aprende haciendo, con casos de tu propio rubro.",
      },
      { property: "og:url", content: "https://www.tooxs.com/talleres" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/talleres" }],
  }),
  component: TalleresPage,
});

/* ═══════════ DATA ═══════════ */

const heroStats = [
  { num: "3", label: "Talleres especializados" },
  { num: "90'", label: "Por sesión" },
  { num: "100%", label: "Aplicado a tu rubro" },
  { num: "In-house", label: "En tus instalaciones" },
];

const formato = [
  {
    icon: Building2,
    title: "In-company",
    desc: "Vamos a tus oficinas o planta. Cero barreras, máxima cercanía con la operación real del equipo.",
  },
  {
    icon: Clock,
    title: "90 minutos por taller",
    desc: "Sesiones intensivas y prácticas. Sin perder días enteros: aprenden, hacen y vuelven a la operación.",
  },
  {
    icon: Users,
    title: "Grupos hasta 8 personas",
    desc: "Tamaño óptimo para discusión, ejercicios y aplicación inmediata a casos del propio equipo.",
  },
  {
    icon: Award,
    title: "Formación con impacto",
    desc: "Actividad estructurada con metodología propia para maximizar el aprendizaje y el retorno de tu inversión en formación.",
  },
];

const talleres = [
  {
    nivel: "NIVEL 1 · FUNDAMENTOS",
    numero: "01",
    titulo: "Detectar",
    subtitulo: "IA para el negocio",
    color: "from-emerald-500 to-emerald-700",
    accent: "emerald",
    icon: Lightbulb,
    publico: "Gerentes, jefaturas y equipos sin conocimientos previos de IA",
    duracion: "90 minutos",
    bloques: [
      {
        titulo: "El momento IA en tu industria",
        desc: "Qué está pasando globalmente con IA en tu sector. Por qué tu rubro es disruptable y qué significa eso para tu organización.",
        tags: ["Contexto global", "Casos McKinsey", "Benchmarks"],
      },
      {
        titulo: "Casos de uso reales en tu cadena de valor",
        desc: "Recorremos tu operación end-to-end identificando dónde la IA ya está generando valor medible en empresas similares.",
        tags: ["Mapa de procesos", "Quick wins", "Sector aplicado"],
      },
      {
        titulo: "Práctico: Mapea las oportunidades de tu área",
        desc: "Cada participante mapea los 3 procesos de su área con mayor potencial. Metodología de priorización por impacto vs. esfuerzo.",
        tags: ["Matriz impacto/esfuerzo", "Quick wins", "Entregable inmediato"],
      },
    ],
    entregable: "Mapa de oportunidades IA por área funcional — base para los talleres 2 y 3.",
  },
  {
    nivel: "NIVEL 2 · OPERACIONES",
    numero: "02",
    titulo: "Diseñar",
    subtitulo: "Automatización en operaciones",
    color: "from-amber-500 to-orange-600",
    accent: "amber",
    icon: Cog,
    publico: "Jefes de operación, planta, logística o áreas con procesos repetibles",
    duracion: "90 minutos",
    bloques: [
      {
        titulo: "Analytics donde ocurre el negocio",
        desc: "Cómo los datos operacionales se transforman en dashboards de decisión en tiempo real. Demo con casos reales del sector.",
        tags: ["KPIs operativos", "Dashboards en vivo", "Alertas automáticas"],
      },
      {
        titulo: "Gestión digital de la red de stakeholders",
        desc: "Diseñamos sistemas de comunicación bidireccional, automatizaciones y predicciones que reemplazan Excel y WhatsApp.",
        tags: ["Comunicación auto", "Liquidaciones", "Forecast"],
      },
      {
        titulo: "Trazabilidad y cadena end-to-end",
        desc: "Automatización de documentación, alertas operativas y optimización de despacho por mercado y temporada.",
        tags: ["Trazabilidad", "Documentación auto", "Optimización"],
      },
    ],
    entregable: "Blueprint de automatización por área operacional — 2 iniciativas a implementar en 60 días.",
  },
  {
    nivel: "NIVEL 3 · IMPLEMENTACIÓN",
    numero: "03",
    titulo: "Activar",
    subtitulo: "De los datos a soluciones propias",
    color: "from-sky-500 to-blue-700",
    accent: "sky",
    icon: Rocket,
    publico: "Equipos técnicos, IT, analítica o líderes con caso de uso definido",
    duracion: "90 minutos",
    bloques: [
      {
        titulo: "Stack tecnológico mínimo viable",
        desc: "Qué herramientas necesitas para escalar internamente: data lake, orquestación y agentes. Comparativo según costo y tiempo.",
        tags: ["Supabase", "n8n", "Claude API"],
      },
      {
        titulo: "Construyendo tu primer agente interno",
        desc: "Workshop práctico: construimos en vivo un agente que responde preguntas o ejecuta acciones usando tus datos reales como contexto.",
        tags: ["Demo en vivo", "RAG sobre datos propios", "Integración real"],
      },
      {
        titulo: "Hoja de ruta: las 3 iniciativas de mayor impacto",
        desc: "Co-diseñamos las 3 iniciativas prioritarias para los próximos 90 días: ROI, recursos, responsables y propuesta de continuidad.",
        tags: ["Roadmap 90 días", "ROI definido", "Modelo Tooxs"],
      },
    ],
    entregable: "Hoja de ruta de transformación IA con 3 iniciativas priorizadas y propuesta de continuidad.",
  },
];

const niveles = [
  { num: "1", nombre: "Fundamentos", desc: "Para quienes parten desde cero. Sin requisitos previos.", icon: Lightbulb },
  { num: "2", nombre: "Operaciones", desc: "Para jefaturas con procesos a su cargo. Recomendado tras Nivel 1.", icon: Wrench },
  { num: "3", nombre: "Implementación", desc: "Para equipos técnicos con caso de uso definido. Tras Niveles 1 y 2.", icon: Zap },
];

const estilo = [
  { titulo: "Práctico, no teórico", desc: "Cada concepto se aterriza en un ejercicio aplicado a tu propia operación." },
  { titulo: "Contextualizado a tu rubro", desc: "Personalizamos casos, ejemplos y entregables según tu industria específica." },
  { titulo: "Con criterio, no con hype", desc: "Te damos el criterio para decidir qué automatizar y qué no, y cómo justificarlo." },
  { titulo: "Con entregable concreto", desc: "Cada taller termina con un artefacto utilizable: mapa, blueprint o hoja de ruta." },
];

/* ═══════════ PAGE ═══════════ */

function TalleresPage() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteContext, setQuoteContext] = useState<string>("Cotización general");
  const { openMeeting } = useMeeting();

  const openQuote = (context: string) => {
    setQuoteContext(context);
    setQuoteOpen(true);
  };

  useEffect(() => {
    const onScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* ══════ STICKY COTIZAR BAR ══════ */}
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showStickyBar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="bg-navy/95 backdrop-blur-md border border-mint/30 rounded-full shadow-2xl shadow-black/30 px-3 py-2 flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:flex items-center gap-2 text-white text-xs font-semibold pl-3">
            <Sparkles size={14} className="text-mint" /> ¿Listo para tu equipo?
          </span>
          <button
            type="button"
            onClick={() => openQuote("Sticky bar — cotización general")}
            className="inline-flex items-center gap-1.5 bg-mint text-navy px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all"
          >
            <Calculator size={14} /> Cotizar talleres
          </button>
        </div>
      </div>

      {/* ══════ HERO ══════ */}
      <section className="relative bg-[#050d1f] text-white min-h-[600px] flex items-end overflow-hidden">
        <NeuralActivationBackground />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#050d1f] via-[#050d1f]/60 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Link
            to="/activar-ia"
            className="inline-flex items-center gap-1 mb-5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold tracking-wide transition-colors"
          >
            ‹ Volver a Activar IA
          </Link>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-mint border border-mint/40 bg-mint/10 px-4 py-2 rounded-full mb-5">
            <GraduationCap size={14} /> Programa Talleres Tooxs · 2026
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black mb-4 leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Desbloquea tu<br />
            <span className="text-mint">IA interior</span>
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-[680px] leading-relaxed mb-7">
            Formación práctica en Inteligencia Artificial aplicada a las operaciones diarias de tu equipo. Este es un espacio para entender qué significa realmente reinventarse y cómo empezar a migrar desde un modelo tradicional a uno impulsado por inteligencia artificial.
          </p>

          {/* HERO CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button
              type="button"
              onClick={() => openQuote("Hero — cotización para mi equipo")}
              className="group inline-flex items-center gap-2 bg-mint text-navy px-6 py-3.5 rounded-full text-sm font-bold hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-mint/30 transition-all"
            >
              <Calculator size={16} />
              Cotizar para mi equipo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-white/20 transition-all"
            >
              Valores
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl">
            {heroStats.map((s) => (
              <div key={s.label} className="border-l-2 border-mint pl-4">
                <div className="text-3xl md:text-4xl font-black text-white">{s.num}</div>
                <div className="text-xs text-white/70 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESIS ══════ */}
      <section className="py-20 md:py-24 bg-section-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                NUESTRA TESIS
              </p>
              <p
                className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-[1.15]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                "La IA no reemplaza a las personas:{" "}
                <span className="text-primary">potencia a quienes saben usarla</span>"
              </p>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                Tus equipos ya usan IA todos los días, pero sin criterio, sin método y sin proceso.
                Los talleres Tooxs resuelven exactamente eso: <strong className="text-foreground">criterio,
                metodología y contexto</strong> para que la IA deje de ser un experimento individual
                y se convierta en capacidad organizacional.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ FORMATO ══════ */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                FORMATO
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-foreground leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Pensado para equipos que <span className="text-primary">no pueden detenerse</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {formato.map((f, i) => {
              const Icon = f.icon;
              return (
                <ScrollReveal key={f.title} delay={i * 80}>
                  <div className="bg-card border rounded-2xl p-7 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ ESTILO ══════ */}
      <section className="py-20 md:py-24 bg-section-bg">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                  ESTILO Tooxs
                </p>
                <h2
                  className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Cómo enseñamos
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  No somos un curso de IA más. Somos un equipo de operadores que llevamos años
                  construyendo agentes, automatizaciones y soluciones reales en empresas exigentes
                  de Chile y la región.
                </p>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {estilo.map((e, i) => (
                <ScrollReveal key={e.titulo} delay={i * 80}>
                  <div className="flex gap-4 bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="text-base md:text-lg font-bold mb-1 text-foreground">
                        {e.titulo}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ NIVELES ══════ */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                NIVELES
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-foreground leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Una <span className="text-primary">progresión clara</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-base md:text-lg">
                Tres niveles diseñados para acompañar a tu equipo desde la curiosidad inicial
                hasta la implementación de soluciones propias.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 relative">
            {niveles.map((n, i) => {
              const Icon = n.icon;
              return (
                <ScrollReveal key={n.num} delay={i * 100}>
                  <div className="bg-card border rounded-2xl p-7 h-full relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 text-[7rem] font-black text-primary/5 leading-none">
                      {n.num}
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-5">
                        <Icon size={22} />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        Nivel {n.num}
                      </p>
                      <h3 className="text-2xl font-black mb-3 text-foreground">{n.nombre}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ TALLERES (CONTENIDO DETALLADO) ══════ */}
      <section className="py-20 md:py-24 bg-[#050d1f] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-3">
                EL CONTENIDO
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tres talleres, <span className="text-mint">una transformación</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {talleres.map((t, i) => {
              const Icon = t.icon;
              return (
                <ScrollReveal key={t.numero} delay={i * 100}>
                  <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${t.color} p-7 md:p-9`}>
                      <div className="flex flex-col md:flex-row md:items-center gap-5">
                        <div className="flex items-center gap-5">
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                            <Icon size={32} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-1">
                              {t.nivel}
                            </p>
                            <h3
                              className="text-3xl md:text-4xl font-black text-white leading-tight"
                              style={{ fontFamily: "var(--font-heading)" }}
                            >
                              {t.titulo}
                            </h3>
                            <p className="text-white/85 text-sm md:text-base mt-1">
                              {t.subtitulo}
                            </p>
                          </div>
                        </div>
                        <div className="md:ml-auto flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-white">
                            <Clock size={13} /> {t.duracion}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/15 backdrop-blur px-3 py-1.5 rounded-full text-white">
                            <Layers size={13} /> Taller {t.numero} / 03
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-7 md:p-9">
                      <div className="flex items-start gap-3 mb-7 pb-6 border-b border-white/10">
                        <Users size={18} className="text-mint mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-mint mb-1">
                            Para quién
                          </p>
                          <p className="text-sm text-white/80">{t.publico}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-5 mb-7">
                        {t.bloques.map((b, idx) => (
                          <div
                            key={b.titulo}
                            className="bg-white/[0.04] border border-white/10 rounded-xl p-5"
                          >
                            <div className="text-2xl font-black text-mint/40 mb-2">
                              0{idx + 1}
                            </div>
                            <h4 className="text-sm font-bold text-white mb-2 leading-tight">
                              {b.titulo}
                            </h4>
                            <p className="text-xs text-white/70 leading-relaxed mb-3">
                              {b.desc}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {b.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[0.65rem] font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-white/60 px-2 py-0.5 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-mint/10 border border-mint/30 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <Briefcase className="text-mint flex-shrink-0 mt-0.5" size={20} />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-mint mb-1">
                              Entregable del taller
                            </p>
                            <p className="text-sm text-white/90 leading-relaxed">{t.entregable}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => openQuote(`Taller ${t.numero} · ${t.titulo} (${t.subtitulo})`)}
                          className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 bg-mint text-navy px-4 py-2.5 rounded-full text-xs font-bold hover:brightness-110 transition-all whitespace-nowrap"
                        >
                          <Calculator size={14} /> Cotizar Taller {t.numero}
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ PRICING ══════ */}
      <section id="pricing" className="py-20 md:py-24 bg-section-bg scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                INVERSIÓN
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Valores por <span className="text-primary">taller y programa</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Valor por taller, por grupo (no por persona).
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                range: "Taller Tooxs",
                uf: "25",
                note: "1,5 horas",
                features: [
                  "Taller grupal 1-5 personas",
                  "1 taller in-house de 1,5 horas",
                  "Material y entregable incluidos",
                  "Casos personalizados a tu rubro",
                ],
              },
              {
                range: "Programa Completo",
                uf: "65",
                note: "3 talleres / 4,5 horas totales",
                featured: true,
                features: [
                  "3 talleres in-house (4,5 horas totales)",
                  "Material y entregables incluidos",
                  "Casos personalizados a tu rubro",
                ],
              },
              {
                range: "Programa + Consultoría",
                uf: "90",
                note: "3 talleres + 2 sesiones de seguimiento",
                features: [
                  "3 talleres in-house (4,5 horas)",
                  "2 sesiones de consultoría de seguimiento",
                  "Acompañamiento personalizado",
                ],
              },
            ].map((p, i) => (
              <ScrollReveal key={p.range} delay={i * 100}>
                <div
                  className={`relative rounded-2xl p-7 h-full flex flex-col ${
                    p.featured
                      ? "bg-navy text-white border-2 border-mint shadow-2xl md:-translate-y-3"
                      : "bg-card border text-foreground"
                  }`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mint text-navy text-[0.65rem] font-bold tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={10} fill="currentColor" /> Más elegido
                    </div>
                  )}
                  <p
                    className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                      p.featured ? "text-mint" : "text-primary"
                    }`}
                  >
                    {p.range}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-black">{p.uf}</span>
                    <span className={`text-sm font-semibold ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                      UF
                    </span>
                  </div>
                  <p className={`text-sm mb-6 ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>
                    {p.note}
                  </p>
                  <ul className="space-y-2 mb-7 flex-1">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${
                          p.featured ? "text-white/85" : "text-muted-foreground"
                        }`}
                      >
                        <CheckCircle2
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${p.featured ? "text-mint" : "text-primary"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => openQuote(`Plan ${p.range} — ${p.uf} UF`)}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                      p.featured
                        ? "bg-mint text-navy hover:brightness-110 shadow-lg shadow-mint/20"
                        : "bg-primary text-primary-foreground hover:brightness-110"
                    }`}
                  >
                    <Calculator size={15} /> Cotizar este plan
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Valores por taller/programa, no por persona. Consulta condiciones.
          </p>
        </div>
      </section>

      {/* ══════ CONTACTO RÁPIDO (3 vías) ══════ */}
      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                CONTACTO DIRECTO
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-foreground leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Habla con nosotros <span className="text-primary">como prefieras</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                desc: "Respuesta en menos de 2 horas hábiles",
                cta: "Chatear ahora",
                href: "https://wa.me/56912345678?text=Hola%20Tooxs%2C%20quiero%20cotizar%20los%20Talleres%20IA%20para%20mi%20equipo",
                external: true,
                accent: "bg-emerald-500",
              },
              {
                icon: Mail,
                title: "Correo",
                desc: "Para propuestas formales y RR.HH.",
                cta: "hola@tooxs.com",
                href: "mailto:hola@tooxs.com?subject=Cotización%20Talleres%20Tooxs",
                external: true,
                accent: "bg-primary",
              },
              {
                icon: PhoneCall,
                title: "Agenda una llamada",
                desc: "30 minutos para entender tu caso",
                cta: "Reservar slot",
                href: "#",
                external: false,
                modal: true,
                accent: "bg-navy",
              },
            ].map((c) => {
              const Icon = c.icon;
              const inner = (
                <div className="bg-card border rounded-2xl p-7 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-xl ${c.accent} text-white flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-1 text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {c.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group">
                    {c.cta}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              );
              if (c.modal) {
                return (
                  <button
                    key={c.title}
                    type="button"
                    onClick={() => openMeeting("Talleres — Agenda una llamada")}
                    className="text-left"
                  >
                    {inner}
                  </button>
                );
              }
              return c.external ? (
                <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link key={c.title} to={c.href}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ CTA FINAL ══════ */}
      <section className="py-20 md:py-28 bg-section-bg">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-mint/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative">
                <Sparkles className="mx-auto mb-5 text-mint" size={40} />
                <h2
                  className="text-3xl md:text-5xl font-black mb-5 leading-[1.1]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  ¿Listo para desbloquear<br className="hidden md:block" /> la IA de tu equipo?
                </h2>
                <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  Diseñamos un programa a medida para tu organización. Solicita una cotización
                  personalizada y recibe propuesta en menos de 48 horas.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => openQuote("CTA final — Solicitar cotización")}
                    className="inline-flex items-center gap-2 bg-mint text-navy px-8 py-4 rounded-full text-sm font-bold hover:-translate-y-0.5 transition-transform shadow-xl shadow-black/20"
                  >
                    <Calculator size={16} /> Solicitar cotización
                  </button>
                  <a
                    href="https://wa.me/56912345678?text=Hola%20Tooxs%2C%20quiero%20cotizar%20los%20Talleres%20IA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white/25 transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp directo
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ MODAL COTIZACIÓN ══════ */}
      <Dialog open={quoteOpen} onOpenChange={setQuoteOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle
              className="text-2xl md:text-3xl font-black text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cotiza los <span className="text-primary">Talleres Tooxs</span>
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Déjanos tus datos y te contactamos en menos de 48 horas con una propuesta personalizada.
              <span className="block mt-2 text-xs font-semibold text-primary">
                Contexto: {quoteContext}
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2">
            {quoteOpen && <TalleresHubSpotForm key={quoteContext} />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
