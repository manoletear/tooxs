import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Gauge,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Scale,
  Target,
  UserRoundCog,
  FileSearch,
  AlertTriangle,
  Bot,
  Wand2,
  Activity,
  CheckCircle2,
} from "lucide-react";
import { NeuralActivationBackground } from "@/components/NeuralActivationBackground";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { FeaturedNewsGrid } from "@/components/FeaturedNewsGrid";
import laptopDashboard from "@/assets/activar-laptop-dashboard.jpg";
import neuralSphere from "@/assets/activar-neural-sphere.jpg";
import circuitFlow from "@/assets/activar-circuit-flow.jpg";
import ecoBulb from "@/assets/activar-eco-bulb.jpg";

export const Route = createFileRoute("/activar-ia")({
  head: () => ({
    meta: [
      { title: "Activar IA — TOOXS | De los datos a decisiones que mueven el negocio" },
      { name: "description", content: "Activamos IA dentro de tu operación: convertimos datos complejos en decisiones que reducen costos, aumentan ingresos y mitigan riesgos. Estrategia, implementación y MLOps end-to-end." },
      { property: "og:title", content: "Activar IA — TOOXS" },
      { property: "og:description", content: "De estrategia a implementación: IA generativa, agentes inteligentes y optimización aplicada al negocio." },
      { property: "og:url", content: "https://www.tooxs.com/activar-ia" },
      { property: "og:image", content: "https://www.tooxs.com/og-activar-ia.jpg" },
      { name: "twitter:title", content: "Activar IA — TOOXS" },
      { name: "twitter:description", content: "Tu socio para llevar la IA del piloto a la producción con impacto medible." },
      { name: "keywords", content: "activar IA, IA generativa, agentes IA, MLOps, optimización IA, IA empresarial, TOOXS" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/activar-ia" }],
  }),
  component: ActivarIAPage,
});

/* ═══════════ DATA ═══════════ */

const benefits = [
  {
    icon: Gauge,
    title: "Eficiencia operativa",
    desc: "Reducimos costos y mejoramos sostenibilidad ejecutando lo que hoy depende de tareas manuales y procesos lentos.",
  },
  {
    icon: TrendingUp,
    title: "Más ingresos y margen",
    desc: "Personalización, recomendaciones y next best action que aumentan conversión, fidelidad y rentabilidad por cliente.",
  },
  {
    icon: ShieldCheck,
    title: "Riesgo bajo control",
    desc: "Detección temprana de fraude, anomalías y desvíos operacionales. Cumplimiento y seguridad sin frenar la operación.",
  },
  {
    icon: Cpu,
    title: "Industrialización (MLOps)",
    desc: "Implementamos el ciclo completo de IA: desde exploración de datos hasta inferencia en producción, monitoreo y mejora continua.",
  },
  {
    icon: Scale,
    title: "Ética y cumplimiento",
    desc: "Observabilidad y trazabilidad para monitorear comportamiento de modelos, prevenir sesgos y mantener auditoría regulatoria.",
  },
];

const capabilities = [
  {
    icon: Target,
    tag: "Optimización",
    title: "Optimizar lo que ya existe",
    items: [
      "Pricing dinámico y yield management",
      "Optimización de surtido y workforce",
      "Reducción de scrap y consumo energético",
      "Stock, materia prima y ubicación de activos",
    ],
  },
  {
    icon: UserRoundCog,
    tag: "Personalización",
    title: "Más relevante para cada cliente",
    items: [
      "Recomendaciones de producto y contenido",
      "Next product to sell / next best action",
      "Segmentación accionable en tiempo real",
    ],
  },
  {
    icon: FileSearch,
    tag: "Datos no estructurados",
    title: "Activar el 80% de tus datos",
    items: [
      "Clasificación y moderación de contenido",
      "Extracción desde documentos, correos y voz",
      "Búsqueda semántica sobre tu base de conocimiento",
    ],
  },
  {
    icon: AlertTriangle,
    tag: "Detección de anomalías",
    title: "Anticipar antes que reaccionar",
    items: [
      "Mantenimiento predictivo en activos críticos",
      "Detección de fraude y operaciones sospechosas",
      "Monitoreo continuo de procesos y calidad",
    ],
  },
];

const solutions = [
  {
    icon: Wand2,
    badge: "GenAI",
    title: "IA Generativa",
    desc: "Mejoramos engagement y productividad con copilotos, asistentes y generación de contenido conectados a tus datos reales.",
    cta: "Ver capacidades",
    to: "/services/ia-aplicada" as const,
  },
  {
    icon: Bot,
    badge: "Agentes",
    title: "AI Agents",
    desc: "Agentes que automatizan procesos completos, ejecutan acciones y toman decisiones operacionales con contexto de negocio.",
    cta: "Ver capacidades",
    to: "/services/automatizacion" as const,
  },
  {
    icon: Activity,
    badge: "Optimización",
    title: "Optimización & Eficiencia",
    desc: "Modelos que reducen consumo, costos y desperdicio en cadenas industriales, energéticas y logísticas.",
    cta: "Ver capacidades",
    to: "/services/optimizacion-operacional" as const,
  },
];

const cases = [
  {
    sector: "Energía · Manufactura",
    title: "Decisiones 30% más rápidas en plantas con GenAI",
    metric: "120.000€",
    metricLabel: "ahorro anual estimado",
    desc: "Asistente conversacional sobre documentación operacional y protocolos de planta. Menos tiempo perdido buscando información, más tiempo resolviendo.",
    slug: "el-estado-de-la-ia-en-2024",
  },
  {
    sector: "Servicios Financieros",
    title: "Pricing de derivados optimizado con IA",
    metric: "Hasta €4M",
    metricLabel: "impacto anual",
    desc: "Modelos cuantitativos que mejoran precisión de pricing en operaciones complejas, reduciendo riesgo y capturando margen previamente perdido.",
    slug: "ia-generativa-y-la-industria-inmobiliaria",
  },
];

const process = [
  { step: "01", title: "Diagnóstico", desc: "Identificamos casos de uso de IA con mayor retorno y viabilidad técnica en tu operación." },
  { step: "02", title: "Estrategia", desc: "Diseñamos roadmap, métricas de éxito (ROI) y plan de gobernanza de datos." },
  { step: "03", title: "Implementación", desc: "Construimos modelos, integraciones y workflows con foco en producción, no en pilotos." },
  { step: "04", title: "Industrialización", desc: "MLOps, monitoreo continuo, observabilidad y mejora basada en comportamiento real." },
];

const testimonials = [
  {
    quote: "Equipo muy sólido con conocimiento serio en data science, algoritmos y escalabilidad de modelos. Operan con un alto nivel de mejores prácticas.",
    role: "CTO, empresa de Retail",
  },
  {
    quote: "Profesionalismo impecable y conocimiento de mercado. Un partner ideal para proyectos estratégicos.",
    role: "Data Insight Lead, Travel & Tourism",
  },
  {
    quote: "Servicio de muy alto valor basado en calidad y conocimiento. Sus consultores conocen cloud en profundidad.",
    role: "Global Head of Data, Banca",
  },
];

/* ═══════════ PAGE ═══════════ */

function ActivarIAPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ══════ FLOATING TALLERES BUTTON ══════ */}
      <Link
        to="/contact"
        aria-label="Talleres TOOXS"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 [writing-mode:vertical-rl] rotate-180 font-semibold text-sm tracking-wide"
      >
        <Sparkles size={16} className="rotate-180" />
        TALLERES TOOXS
      </Link>

      {/* ══════ HERO ══════ */}
      <section className="relative bg-[#050d1f] text-white min-h-[420px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-end overflow-hidden">
        <NeuralActivationBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1f] via-[#050d1f]/40 to-transparent pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 pb-8 sm:pb-10 md:pb-12">
          <Link to="/" className="inline-flex items-center gap-1 mb-4 sm:mb-5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold tracking-wide transition-colors">
            ‹ Volver al Inicio
          </Link>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black mb-3 sm:mb-4 leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Desbloquea el potencial<br className="hidden sm:block" /> real de tus datos con IA
          </h1>
          <p className="text-white/85 text-sm sm:text-base md:text-[1.05rem] lg:text-[1.1rem] max-w-[640px] leading-relaxed mb-5 sm:mb-7">
            Transformamos datos complejos en decisiones accionables que aceleran el crecimiento, reducen costos operacionales y mitigan riesgos. De la estrategia a la producción.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mint text-navy px-6 py-3 rounded-full text-sm font-bold hover:-translate-y-0.5 transition-transform shadow-lg shadow-mint/20"
            >
              Conversemos <ArrowRight size={16} />
            </Link>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-mint border border-mint/40 bg-mint/10 px-4 py-2.5 rounded-full">
              <Sparkles size={14} /> Activar IA
            </span>
          </div>
        </div>
      </section>

      {/* ══════ BENEFITS — split with image overlap ══════ */}
      <section className="py-20 md:py-28 bg-section-bg relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT — sticky title block + decorative image */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ScrollReveal>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
                  POR QUÉ ACTIVAR IA
                </p>
                <div className="w-16 h-0.5 bg-primary mb-6" />
                <h2
                  className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  IA al servicio de tu negocio,<br />
                  <span className="text-primary">no al revés</span>
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
                  Cinco frentes donde la IA deja de ser experimento y empieza a generar retorno medible.
                </p>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
                  <img
                    src={laptopDashboard}
                    alt="Dashboard analítico con IA"
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-mint rounded-2xl -z-10" />
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — staggered colored cards */}
            <div className="lg:col-span-7 space-y-5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                const palette = [
                  { bg: "bg-primary text-white", iconBg: "bg-white/15 text-mint", desc: "text-white/85" },
                  { bg: "bg-mint text-navy", iconBg: "bg-navy/10 text-navy", desc: "text-navy/80" },
                  { bg: "bg-card border text-foreground", iconBg: "bg-primary/10 text-primary", desc: "text-muted-foreground" },
                  { bg: "bg-navy text-white", iconBg: "bg-mint/15 text-mint", desc: "text-white/80" },
                  { bg: "bg-card border text-foreground", iconBg: "bg-primary/10 text-primary", desc: "text-muted-foreground" },
                ][i];
                const offset = i % 2 === 1 ? "lg:ml-12" : "lg:ml-0";
                return (
                  <ScrollReveal key={b.title} delay={i * 80}>
                    <div className={`${palette.bg} ${offset} rounded-2xl p-7 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex gap-5`}>
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${palette.iconBg} flex items-center justify-center`}>
                        <Icon size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-bold mb-2 leading-tight">{b.title}</h3>
                        <p className={`text-sm leading-relaxed ${palette.desc}`}>{b.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ HOW WE DO IT — colored blocks grid (Keepler style) ══════ */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                CÓMO LO HACEMOS
              </p>
              <h2
                className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Capacidades de IA aplicadas<br className="hidden md:block" /> dentro de tu operación
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Activamos cuatro frentes donde la IA genera retorno medible y sostenible.
              </p>
            </div>
          </ScrollReveal>

          {/* Top row: image + first colored block */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <ScrollReveal>
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] rounded-2xl overflow-hidden group">
                <img
                  src={laptopDashboard}
                  alt="Equipo trabajando con IA"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>

            {capabilities[0] && (() => {
              const cap = capabilities[0];
              const Icon = cap.icon;
              return (
                <ScrollReveal delay={100}>
                  <div className="bg-[#F5C518] text-navy rounded-2xl p-8 md:p-10 h-full flex flex-col min-h-[300px]">
                    <Icon size={32} className="mb-4" />
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider mb-2 opacity-70">{cap.tag}</span>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {cap.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-navy/30 mb-4" />
                    <p className="text-sm text-navy/80 leading-relaxed">
                      {cap.items.join(" · ")}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })()}
          </div>

          {/* Bottom row: 3 colored blocks */}
          <div className="grid md:grid-cols-3 gap-5">
            {capabilities.slice(1).map((cap, i) => {
              const Icon = cap.icon;
              const colors = [
                { bg: "bg-[#E94560] text-white", divider: "bg-white/40", desc: "text-white/85" },
                { bg: "bg-mint text-navy", divider: "bg-navy/30", desc: "text-navy/80" },
                { bg: "bg-[#7C3AED] text-white", divider: "bg-white/40", desc: "text-white/85" },
              ][i];
              return (
                <ScrollReveal key={cap.title} delay={150 + i * 100}>
                  <div className={`${colors.bg} rounded-2xl p-8 h-full flex flex-col min-h-[300px] hover:-translate-y-1 transition-transform duration-300`}>
                    <Icon size={28} className="mb-4" />
                    <span className="text-[0.7rem] font-bold uppercase tracking-wider mb-2 opacity-80">
                      {cap.tag}
                    </span>
                    <h3 className="text-xl font-black mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {cap.title}
                    </h3>
                    <div className={`w-10 h-0.5 mb-4 ${colors.divider}`} />
                    <ul className="space-y-1.5 text-sm">
                      {cap.items.map((it) => (
                        <li key={it} className={colors.desc}>· {it}</li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SOLUTIONS — dark with image cards (Tailored AI Applications) ══════ */}
      <section className="py-20 md:py-28 bg-[#0a0a0f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.18),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(32,178,170,0.12),transparent_60%)]" />
        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-3">
                SOLUCIONES A LA MEDIDA
              </p>
              <h2
                className="text-4xl md:text-5xl font-black leading-[1.05] mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Aplicaciones de IA <span className="text-mint">a tu medida</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                IA aplicada según el problema, no según la moda.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              const heroImg = [neuralSphere, circuitFlow, ecoBulb][i];
              return (
                <ScrollReveal key={s.title} delay={i * 120}>
                  <div className="bg-[#13131c] border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col hover:border-mint/40 hover:-translate-y-1 transition-all duration-300 group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={heroImg}
                        alt={s.title}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13131c] via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-[0.65rem] font-bold uppercase tracking-wider text-mint bg-black/50 backdrop-blur px-2.5 py-1 rounded-full border border-mint/30">
                        {s.badge}
                      </span>
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-mint/15 text-mint flex items-center justify-center flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-black leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                      </div>
                      <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1">{s.desc}</p>
                      <Link
                        to={s.to}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-mint border border-mint/40 hover:bg-mint hover:text-navy rounded-full px-5 py-2.5 transition-all self-start"
                      >
                        {s.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ PROVEN IMPACT - CASES ══════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
              IMPACTO DEMOSTRADO
            </p>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Resultados que se miden en negocio, no en modelos
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
              Casos donde la IA dejó de ser experimento y empezó a generar retorno operativo.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {cases.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 120}>
                <article className="border rounded-2xl overflow-hidden bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-primary/90 to-primary p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-mint mb-4">{c.sector}</p>
                    <p className="text-4xl md:text-5xl font-black mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {c.metric}
                    </p>
                    <p className="text-sm text-white/80">{c.metricLabel}</p>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{c.desc}</p>
                    <Link
                      to="/newsletter/$slug"
                      params={{ slug: c.slug }}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all self-start"
                    >
                      Leer caso <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROCESS ══════ */}
      <section className="py-16 md:py-24 bg-section-bg">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
              CÓMO TRABAJAMOS
            </p>
            <div className="w-16 h-0.5 bg-primary mb-6" />
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground max-w-3xl leading-tight mb-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              De la idea a producción, sin perder velocidad
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 100}>
                <div className="relative">
                  <p className="text-5xl font-black text-primary/15 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {p.step}
                  </p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2 text-center">
              LO QUE DICEN NUESTROS CLIENTES
            </p>
            <div className="w-16 h-0.5 bg-primary mb-12 mx-auto" />
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <blockquote className="bg-card border rounded-2xl p-7 h-full">
                  <p className="text-foreground/85 leading-relaxed mb-5 italic" style={{ fontFamily: "var(--font-emphasis)" }}>
                    "{t.quote}"
                  </p>
                  <footer className="text-xs font-semibold text-muted-foreground tracking-wide">
                    — {t.role}
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FEATURED NEWS ══════ */}
      <FeaturedNewsGrid />

      {/* ══════ CTA ══════ */}
      <section className="bg-navy py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,178,170,0.2),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Activa la IA donde realmente impacta tu negocio
            </h2>
            <p className="text-navy-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Te ayudamos a identificar dónde empezar, qué priorizar y cómo escalar. Diagnóstico inicial en 48 horas.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mint text-navy px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              Solicitar diagnóstico <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
