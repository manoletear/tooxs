import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Quote, ChevronDown, Send, X, MessageCircle, Pickaxe, ShoppingCart, Landmark, Wheat, Radio, HeartPulse, Brain, Bot, BarChart3, Code2, Link2, ChevronRight, Search, Lightbulb, Rocket } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";
import CardDeckSpread from "../components/CardDeckSpread";
import IndustryCarousel from "../components/IndustryCarousel";
import FluidCardStack from "../components/FluidCardStack";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOOXS — Inteligencia Aplicada para Organizaciones" },
      { name: "description", content: "TOOXS diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa." },
      { property: "og:title", content: "TOOXS — Inteligencia Aplicada para Organizaciones" },
      { property: "og:description", content: "Automatización inteligente. RPA, IA y analítica para empresas chilenas." },
    ],
  }),
  component: Index,
});

/* ── Counter ── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const step = Math.ceil(end / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= end) { current = end; clearInterval(timer); }
          setCount(current);
        }, 16);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-navy">{prefix}{count}{suffix}</div>
    </div>
  );
}

/* ══════════════════════════════════════════
   1. HERO
   ══════════════════════════════════════════ */
function HeroStrategic() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }, []);

  const scrollToCapabilities = () => {
    document.getElementById("capacidades")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToForm = () => {
    document.getElementById("smart-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" src="/hero-bg.mp4" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          {/* Left: Heading */}
          <div className="lg:max-w-[55%]">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ fontFamily: "var(--font-heading)" }}>
              No es tecnología.{" "}
              <br className="hidden sm:block" />
              Es cómo operan{" "}
              <em className="not-italic" style={{ fontFamily: "var(--font-emphasis)", fontWeight: 400, fontStyle: "italic" }}>mejor</em>{" "}
              <br className="hidden sm:block" />
              las{" "}
              <em className="not-italic" style={{ fontFamily: "var(--font-emphasis)", fontWeight: 400, fontStyle: "italic" }}>organizaciones.</em>
            </h1>
          </div>
          {/* Right: Subtitle + CTA */}
          <div className={`lg:max-w-[35%] transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
              TOOXS diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa.
            </p>
            <button onClick={scrollToCapabilities} className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300 text-sm group">
              Explorar capacidades
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint text-white group-hover:scale-110 transition-transform">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   2. TRUST BAR
   ══════════════════════════════════════════ */
const trustLogos = [
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-KAUFMANN.png", alt: "Kaufmann" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-CANDELARIA.png", alt: "Candelaria" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-VOLCAN.png", alt: "Volcán" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-TRANSELEC-1.png", alt: "Transelec" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-DIVEMOTOR.png", alt: "Divemotor" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-SANTANDER-2.png", alt: "Santander" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-PUC-1.png", alt: "PUC" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-GPS7000-1.png", alt: "GPS7000" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-BCI.png", alt: "BCI" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-TREKRENTAL-1.png", alt: "TrekRental" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-BESITER.png", alt: "Besiter" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-AGUAS-ANTOFAGASTA.png", alt: "Aguas Antofagasta" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-CApital-advisors.png", alt: "Capital Advisors" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-PATRIA.png", alt: "Patria" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-UNIFRUTTI.png", alt: "Unifrutti" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-ITALFRENOS.png", alt: "Italfrenos" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-SAESA.png", alt: "Saesa" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-ROMA.png", alt: "Roma" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Loho-FINNING.png", alt: "Finning" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-AUTOSTAR.png", alt: "Autostar" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-HENKEL.png", alt: "Henkel" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-LAPOLAR.png", alt: "La Polar" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-BUPA-1.png", alt: "Bupa" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/LOGO-DIVEMOTOR-1.png", alt: "Divemotor" },
  { src: "https://tooxs.com/wp-content/uploads/2025/08/logo-vik.png", alt: "Vik" },
];
const metrics = [
  { value: 98, suffix: "%", label: "reducción de errores" },
  { value: 30, suffix: "+", label: "empresas chilenas" },
  { value: 4, suffix: "", label: "semanas piloto" },
  { value: 24, suffix: "/7", label: "soporte local" },
];

const partnerLogos = [
  { src: "https://tooxs.com/wp-content/uploads/2024/09/logos_webtooxs_empresas_path.png", alt: "Path" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/logos_webtooxs_empresas_aws.png", alt: "AWS" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/logos_webtooxs_empresas_microsoft.png", alt: "Microsoft" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/logos_webtooxs_empresas_googlecloud.png", alt: "Google Cloud" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-AUTOMATION.png", alt: "Automation Anywhere" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-SONDA.png", alt: "Sonda" },
  { src: "https://tooxs.com/wp-content/uploads/2024/09/Logo-IBM.png", alt: "IBM" },
];

function TrustBarDynamic() {
  return (
    <section className="py-16 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Empresas que confían en TOOXS</h2>
        </ScrollReveal>
        {/* Logo marquee */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex animate-marquee items-center gap-12">
            {[...Array(2)].flatMap((_, i) =>
              trustLogos.map((logo) => (
                <div key={`${logo.alt}-${i}`} className="flex-shrink-0 w-[140px] h-[60px] flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-[50px] max-w-[130px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))
            )}
          </div>
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} delay={i * 100}>
              <div className="bg-card rounded-xl p-6 shadow-sm text-center">
                <Counter end={m.value} suffix={m.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Partners marquee */}
        <div className="mt-16">
          <div className="relative overflow-hidden mb-6">
            <div className="flex animate-marquee items-center gap-12" style={{ animationDuration: '20s' }}>
              {[...Array(4)].flatMap((_, i) =>
                partnerLogos.map((logo) => (
                  <div key={`${logo.alt}-partner-${i}`} className="flex-shrink-0 w-[140px] h-[60px] flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-[50px] max-w-[130px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <ScrollReveal className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-navy">Nuestros Partners</h3>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
/* ══════════════════════════════════════════
   3. TESIS
   ══════════════════════════════════════════ */
function TesisStatement() {
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add("animate-line-grow"); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/tesis-bg.mp4"
      />
      {/* Overlay azul-claro-gris al 20% */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(180, 200, 220, 0.20)" }} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <ScrollReveal>
          <p className="text-2xl md:text-3xl leading-relaxed text-white mb-2" style={{ fontFamily: "var(--font-emphasis)" }}>
            Hay tecnología.
          </p>
          <p className="text-2xl md:text-3xl leading-relaxed text-white mb-6" style={{ fontFamily: "var(--font-emphasis)" }}>
            Y hay tecnología que cambia cómo funcionan las organizaciones.
          </p>
          <p className="text-xl md:text-2xl font-bold text-mint">TOOXS está en la segunda.</p>
          <div ref={lineRef} className="h-[1px] bg-mint mx-auto mt-6" style={{ width: 0 }} />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   4. INDUSTRIAS
   ══════════════════════════════════════════ */
const industryImages = [
  "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=560&fit=crop", // Minería
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=560&fit=crop", // Retail
  "https://images.unsplash.com/photo-1560472355-536de3962603?w=400&h=560&fit=crop", // Banca
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=560&fit=crop", // Agro
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=560&fit=crop", // Telecom
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=560&fit=crop", // Salud
];

const industries = [
  {
    icon: Pickaxe, name: "Minería y Utilities", tagline: "De la incertidumbre a la predictibilidad",
    problem: "Conciliación manual de insumos (explosivos, combustible, neumáticos) → 40 horas/semana, errores del 5%.",
    solution: "Bots RPA extraen datos de ERP y básculas. IA predictiva alerta sobre desviaciones de inventario.",
    impact: "70% menos tiempo de conciliación, 0 errores de inventario.",
  },
  {
    icon: ShoppingCart, name: "Retail y Logística", tagline: "Del quiebre de stock a la disponibilidad total",
    problem: "Quiebres de stock no planificados → pérdida de ventas del 12% en productos críticos.",
    solution: "Modelo de IA que predice demanda por SKU y tienda. RPA genera órdenes de compra automáticas.",
    impact: "98% de disponibilidad de stock, reducción de 40% en exceso de inventario.",
  },
  {
    icon: Landmark, name: "Banca y Finanzas", tagline: "De días a horas",
    problem: "Apertura de cuentas toma 3 días por validación manual de documentos.",
    solution: "OCR + IA extraen datos de cédulas y contratos. RPA crea cliente en core bancario.",
    impact: "Apertura en 2 horas, 85% menos tiempo.",
  },
  {
    icon: Wheat, name: "Agroindustria", tagline: "Precisión en cada cosecha",
    problem: "Liquidación de temporeros manual → errores en pagos y horas extras no registradas.",
    solution: "App móvil con geolocalización registra horas y kilos cosechados. RPA calcula liquidación y emite comprobante.",
    impact: "100% de precisión en pagos, ahorro de 30 horas mensuales en administración.",
  },
  {
    icon: Radio, name: "Telecomunicaciones", tagline: "Activación instantánea",
    problem: "Activación de líneas móviles requiere 24 horas por procesos manuales entre operadores.",
    solution: "RPA orquesta la portabilidad y activación en múltiples sistemas. IA verifica identidad con biometría.",
    impact: "Activación en 5 minutos, 0 errores de portabilidad.",
  },
  {
    icon: HeartPulse, name: "Salud", tagline: "Licencias sin demora",
    problem: "Procesamiento de licencias médicas toma 15 días por revisión manual.",
    solution: "OCR extrae datos del formulario. IA valida coherencia con diagnósticos. RPA ingresa a sistema de isapre/fonasa.",
    impact: "Licencias liquidadas en 3 días, 40% menos tiempo.",
  },
];

function IndustryExplorer() {
  const carouselCards = industries.map((ind, i) => ({
    image: industryImages[i % industryImages.length],
    title: ind.name,
    subtitle: ind.tagline,
    problem: ind.problem,
    solution: ind.solution,
    impact: ind.impact,
    icon: ind.icon,
  }));

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Industrias que transformamos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Soluciones de automatización adaptadas a los desafíos únicos de cada sector en Chile.</p>
        </ScrollReveal>

        <IndustryCarousel cards={carouselCards} className="mt-2" />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   5. CAPACIDADES (CapabilityGraph)
   ══════════════════════════════════════════ */
const capabilityCards = [
  {
    title: "Entender",
    description: "Auditoría de procesos, descubrimiento de oportunidades, mapeo de datos. Analizamos tu operación para identificar dónde la automatización genera mayor impacto.",
    icon: <Search className="text-mint" size={28} />,
    color: "rgba(10, 38, 71, 0.97)",
    accentColor: "#20B2AA",
  },
  {
    title: "Decidir",
    description: "Modelos de IA, simulación de escenarios, priorización de impacto. Diseñamos la estrategia con datos, no con suposiciones.",
    icon: <Lightbulb className="text-mint" size={28} />,
    color: "rgba(10, 38, 71, 0.97)",
    accentColor: "#20B2AA",
  },
  {
    title: "Ejecutar",
    description: "Bots RPA, integración con sistemas legacy, orquestación y monitoreo. Implementamos, medimos y optimizamos hasta que el proceso funcione solo.",
    icon: <Rocket className="text-mint" size={28} />,
    color: "rgba(10, 38, 71, 0.97)",
    accentColor: "#20B2AA",
  },
];

function CapabilityGraph() {
  return (
    <section id="capacidades" className="bg-navy text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Entender → Decidir → Ejecutar</h2>
          <p className="text-white/70">Nuestro marco de trabajo para automatización inteligente.</p>
        </ScrollReveal>
      </div>
      <FluidCardStack cards={capabilityCards} className="px-4 sm:px-6 lg:px-8" />
    </section>
  );
}

/* ══════════════════════════════════════════
   6. SERVICIOS
   ══════════════════════════════════════════ */
const services = [
  { icon: Brain, title: "IA aplicada", desc: "Modelos predictivos y generativos para tu negocio.", detail: "Predicción de demanda, detección de anomalías, NLP.", tech: "TensorFlow, Python, Azure ML", time: "6-8 semanas" },
  { icon: Bot, title: "Automatización inteligente", desc: "RPA + IA para procesos complejos.", detail: "Automatización end-to-end con decisiones inteligentes.", tech: "UiPath, Power Automate, Python", time: "4-6 semanas" },
  { icon: BarChart3, title: "Analítica aumentada", desc: "Dashboards y alertas que anticipan problemas.", detail: "BI en tiempo real con alertas predictivas.", tech: "Power BI, Looker, BigQuery", time: "3-4 semanas" },
  { icon: Code2, title: "Desarrollo ágil", desc: "Apps a medida en semanas, no meses.", detail: "MVPs y aplicaciones internas con metodología ágil.", tech: "React, Node.js, Cloud Functions", time: "4-8 semanas" },
  { icon: Link2, title: "Integración continua", desc: "Conectamos tus sistemas legacy con tecnología moderna.", detail: "APIs, middleware y conectores personalizados.", tech: "MuleSoft, REST APIs, Webhooks", time: "3-5 semanas" },
];

function ServiceSystem() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-lg text-muted-foreground mb-1" style={{ fontFamily: "var(--font-emphasis)" }}>No ofrecemos servicios.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Diseñamos capacidades operacionales.</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div
                className="bg-card rounded-xl p-7 border cursor-pointer group hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
                onClick={() => setSelected(selected === i ? null : i)}
              >
                <div className={`border-b-2 pb-5 mb-4 transition-colors duration-300 ${selected === i ? "border-mint" : "border-transparent group-hover:border-mint"}`}>
                  <s.icon className="text-mint mb-3" size={28} />
                  <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
                {selected === i && (
                  <div className="text-sm space-y-2 animate-fade-in">
                    <p className="text-foreground">{s.detail}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-navy">Tech:</span> {s.tech}</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-navy">Tiempo:</span> {s.time}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   7. SOLUCIONES
   ══════════════════════════════════════════ */
const solutions = [
  { title: "Predictive Maintenance Suite", problem: "Paradas no planificadas en equipos críticos (minería, manufactura).", impact: "-35% downtime, +20% vida útil de maquinaria." },
  { title: "Stock Optimizer AI", problem: "Quiebres de stock y exceso de inventario en retail.", impact: "98% disponibilidad, -40% capital de trabajo inmovilizado." },
  { title: "Loan Scoring Engine", problem: "Evaluación manual de créditos (banca, financieras).", impact: "-80% tiempo de análisis, +25% aprobaciones precisas." },
];

function SolutionSystem() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Soluciones empaquetadas para resultados rápidos</h2>
          <p className="text-muted-foreground">Productos que combinan RPA, IA y analítica.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 120}>
              <div className="bg-card rounded-xl border border-t-4 border-t-mint p-7 hover:shadow-xl hover:scale-[1.02] transition-all duration-400">
                <h3 className="text-lg font-bold text-navy mb-3">{sol.title}</h3>
                <p className="text-sm text-muted-foreground mb-2"><span className="font-semibold text-navy">Qué resuelve:</span> {sol.problem}</p>
                <p className="text-sm font-semibold text-mint">{sol.impact}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   8. CASOS
   ══════════════════════════════════════════ */
const cases = [
  { title: "Minera media", before: "40 horas/semana en reportes de ley de mineral, errores del 8%.", intervention: "RPA extrae datos de laboratorio, IA valida coherencia, bot genera dashboard.", result: "4 horas/semana, 0 errores, ahorro de 36 horas operativas." },
  { title: "Retail regional", before: "Quiebres de stock del 15% en temporada alta.", intervention: "Modelo predictivo de demanda por tienda, RPA ordena reposición automática.", result: "98% disponibilidad, aumento de ventas del 12%." },
  { title: "Banco chileno", before: "Apertura de cuentas en 3 días, 200 solicitudes pendientes.", intervention: "OCR + IA validan documentos, RPA crea cliente en core bancario.", result: "Apertura en 2 horas, cola eliminada." },
];

function CaseEngine() {
  const [idx, setIdx] = useState(0);
  const c = cases[idx];
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Cómo transformamos operaciones</h2>
          <p className="text-muted-foreground">Escenarios reales (anónimos) con resultados medibles.</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bg-card rounded-2xl border p-8 md:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-navy mb-6">{c.title}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <span className="inline-block bg-red-50 text-red-600 font-semibold px-3 py-1 rounded-full text-xs mb-2">Antes</span>
                <p className="text-muted-foreground">{c.before}</p>
              </div>
              <div>
                <span className="inline-block bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full text-xs mb-2">Intervención TOOXS</span>
                <p className="text-muted-foreground">{c.intervention}</p>
              </div>
              <div>
                <span className="inline-block bg-emerald-50 text-emerald-600 font-semibold px-3 py-1 rounded-full text-xs mb-2">Resultado</span>
                <p className="text-foreground font-medium">{c.result}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button onClick={() => setIdx((idx - 1 + cases.length) % cases.length)} className="p-2 rounded-full border hover:bg-section-bg transition-colors"><ArrowLeft size={18} /></button>
              <div className="flex gap-2">
                {cases.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-mint" : "bg-border"}`} />
                ))}
              </div>
              <button onClick={() => setIdx((idx + 1) % cases.length)} className="p-2 rounded-full border hover:bg-section-bg transition-colors"><ArrowRight size={18} /></button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   9. INSIGHTS
   ══════════════════════════════════════════ */
const insights = [
  { title: "Por qué el RPA solo no es suficiente en minería", excerpt: "La combinación de RPA con IA predictiva reduce fallas no planificadas en un 35%." },
  { title: "IA agentic: el próximo salto para el retail chileno", excerpt: "Los agentes autónomos pueden gestionar inventarios y promociones sin supervisión humana." },
  { title: "Cómo medir el ROI de la automatización en 4 pasos", excerpt: "Una guía práctica para justificar tu inversión en RPA e IA." },
];

function InsightLayer() {
  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">Insights para la nueva era operacional</h2>
          <p className="text-muted-foreground">Artículos y puntos de vista de nuestro equipo.</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((ins, i) => (
            <ScrollReveal key={ins.title} delay={i * 100}>
              <div className="bg-card rounded-xl p-7 border-l-4 border-l-mint hover:shadow-lg transition-all duration-400">
                <h3 className="text-base font-bold text-navy mb-2" style={{ fontFamily: "var(--font-emphasis)" }}>{ins.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{ins.excerpt}</p>
                <a href="#" className="text-sm font-semibold text-mint hover:underline inline-flex items-center gap-1">Leer más <ArrowRight size={14} /></a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   10. TESTIMONIOS
   ══════════════════════════════════════════ */
const testimonials = [
  { quote: "El equipo de TOOXS no solo implementó bots, nos ayudó a rediseñar nuestra operación financiera. Ahorramos 200 horas mensuales.", name: "Juan Pérez", title: "Gerente de Operaciones, Banco X" },
  { quote: "La solución de mantenimiento predictivo evitó dos fallas mayores en seis meses. Un socio confiable.", name: "María González", title: "Jefa de Planta, Minera Regional" },
  { quote: "El chatbot con IA resolvió el 70% de las consultas sin intervención humana. Excelente equipo.", name: "Andrés López", title: "CTO, Retail Nacional" },
  { quote: "La implementación fue ágil y el soporte 24/7 nos da tranquilidad.", name: "Claudia Rojas", title: "Directora de Logística, Agroexportadora" },
];

function TestimonialFlow() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Lo que dicen nuestros clientes</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="bg-card rounded-3xl p-8 shadow-lg hover:-translate-y-1 transition-all duration-400">
                <Quote className="text-mint/40 mb-4" size={28} />
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   11. METODOLOGÍA
   ══════════════════════════════════════════ */
const phases = [
  { title: "Descubrimiento", time: "2 semanas", desc: "Identificamos procesos repetitivos y de alto impacto." },
  { title: "Piloto", time: "4 semanas", desc: "Automatizamos un proceso con RPA o IA en 4 semanas." },
  { title: "Escalamiento", time: "Variable", desc: "Implementamos en más áreas, medimos resultados." },
  { title: "Evolución continua", time: "Continua", desc: "Monitoreamos, optimizamos y añadimos nuevas capacidades." },
];

function MethodLoop() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">No implementamos proyectos. Acompañamos la transformación.</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 120}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-mint flex items-center justify-center mx-auto mb-4">
                  <span className="text-mint font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{p.title}</h3>
                <p className="text-xs text-mint font-semibold mb-2">{p.time}</p>
                <p className="text-sm text-white/70">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   12. SMART FORM
   ══════════════════════════════════════════ */
function SmartForm() {
  const [formData, setFormData] = useState({ name: "", email: "", industry: "", problem: "", maturity: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with HubSpot API
    setSubmitted(true);
  };

  return (
    <section id="smart-form" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">¿Listo para operar mejor?</h2>
          <p className="text-muted-foreground">Cuéntanos tu desafío y te daremos un diagnóstico en 48 horas.</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-card rounded-2xl p-10 text-center border">
                  <div className="w-16 h-16 bg-mint/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-mint" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground">Te contactaremos en menos de 48 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Nombre completo *</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-mint focus:border-mint outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1.5">Email corporativo *</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-mint focus:border-mint outline-none transition" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Industria</label>
                    <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-mint outline-none transition">
                      <option value="">Selecciona...</option>
                      <option>Minería</option>
                      <option>Retail</option>
                      <option>Banca</option>
                      <option>Agroindustria</option>
                      <option>Telecomunicaciones</option>
                      <option>Salud</option>
                      <option>Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">¿Qué proceso repetitivo te gustaría automatizar?</label>
                    <textarea rows={3} value={formData.problem} onChange={(e) => setFormData({ ...formData, problem: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-mint outline-none transition resize-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1.5">Nivel de madurez</label>
                    <select value={formData.maturity} onChange={(e) => setFormData({ ...formData, maturity: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border bg-background text-foreground text-sm focus:ring-2 focus:ring-mint outline-none transition">
                      <option value="">Selecciona...</option>
                      <option>No hemos empezado</option>
                      <option>Tenemos algo de RPA</option>
                      <option>Buscamos escalar IA</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-mint text-white py-3 rounded-full font-semibold hover:opacity-90 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2">
                    Recibir diagnóstico <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
            {/* Benefits */}
            <div className="lg:col-span-2 flex flex-col justify-center gap-6">
              {[
                { emoji: "✅", text: "Diagnóstico sin costo" },
                { emoji: "⚡", text: "Propuesta en 48h" },
                { emoji: "🤝", text: "Sin compromiso" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-3 bg-card rounded-xl p-5 border">
                  <span className="text-2xl">{b.emoji}</span>
                  <span className="font-semibold text-navy">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   13. CHATBOT (n8n)
   ══════════════════════════════════════════ */
function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([]);
  const [step, setStep] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShown(true), 30000);
    const handleMouseLeave = (e: MouseEvent) => { if (e.clientY < 5) setShown(true); };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => { clearTimeout(timer); document.removeEventListener("mouseleave", handleMouseLeave); };
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", text: "Hola, soy el asistente de TOOXS. ¿En qué industria trabajas?" }]);
      setStep(1);
    }
  }, [open]);

  const industryOptions = ["Minería", "Retail", "Banca", "Agro", "Telecom", "Salud"];
  const solutionMap: Record<string, string> = {
    "Minería": "Predictive Maintenance Suite",
    "Retail": "Stock Optimizer AI",
    "Banca": "Loan Scoring Engine",
    "Agro": "automatización de liquidaciones",
    "Telecom": "activación inteligente de líneas",
    "Salud": "procesamiento de licencias con IA",
  };

  const handleOption = (option: string) => {
    setMessages((prev) => [...prev, { role: "user", text: option }]);
    if (step === 1) {
      const sol = solutionMap[option] || "automatización inteligente";
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "bot", text: `Para ${option}, nuestra solución más efectiva es ${sol}. ¿Te gustaría agendar una reunión de 15 minutos con un experto?` }]);
        setStep(2);
      }, 600);
    } else if (step === 2) {
      if (option === "Sí") {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", text: "¡Excelente! Completa el formulario de contacto y te contactaremos pronto." }]);
          setStep(3);
        }, 600);
      } else {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", text: "Sin problema. Puedes explorar nuestras soluciones o completar el formulario cuando quieras." }]);
          setStep(3);
        }, 600);
      }
    }
  };

  if (!shown) return null;

  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-mint text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
          <MessageCircle size={24} />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-card rounded-2xl shadow-2xl border flex flex-col overflow-hidden animate-scale-in" style={{ maxHeight: "480px" }}>
          <div className="bg-mint text-white px-5 py-3 flex items-center justify-between">
            <span className="font-semibold text-sm">TOOXS Assistant</span>
            <button onClick={() => setOpen(false)} className="hover:opacity-70"><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: "200px" }}>
            {messages.map((m, i) => (
              <div key={i} className={`text-sm px-4 py-2.5 rounded-2xl max-w-[85%] ${m.role === "bot" ? "bg-section-bg text-foreground self-start" : "bg-mint text-white self-end ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            {step === 1 && (
              <div className="flex flex-wrap gap-2">
                {industryOptions.map((o) => (
                  <button key={o} onClick={() => handleOption(o)} className="px-3 py-1.5 rounded-full border text-xs font-medium hover:bg-mint hover:text-white hover:border-mint transition-all">{o}</button>
                ))}
              </div>
            )}
            {step === 2 && (
              <div className="flex gap-2">
                <button onClick={() => handleOption("Sí")} className="px-4 py-2 rounded-full bg-mint text-white text-sm font-medium hover:opacity-90 transition">Sí, agendar</button>
                <button onClick={() => handleOption("No")} className="px-4 py-2 rounded-full border text-sm font-medium hover:bg-section-bg transition">No, gracias</button>
              </div>
            )}
            {step === 3 && (
              <p className="text-xs text-muted-foreground text-center">Conversación finalizada</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/* ══════════════════════════════════════════
   14. CTA FINAL
   ══════════════════════════════════════════ */
function ConversionCTA() {
  const scrollToForm = () => {
    document.getElementById("smart-form")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Convierte complejidad en ventaja operativa.</h2>
          <p className="text-xl text-white/80 font-semibold mb-8">Trabajemos juntos.</p>
          <button onClick={scrollToForm} className="inline-flex items-center gap-2 bg-mint text-white px-12 py-4 rounded-full font-semibold text-base hover:opacity-90 hover:shadow-[0_0_30px_rgba(32,178,170,0.4)] hover:scale-[1.02] transition-all duration-300">
            Agendar conversación estratégica
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   INDEX — ASSEMBLY
   ══════════════════════════════════════════ */
function Index() {
  return (
    <div>
      <HeroStrategic />
      <TrustBarDynamic />
      <TesisStatement />
      <IndustryExplorer />
      <CapabilityGraph />
      <ServiceSystem />
      <SolutionSystem />
      <CaseEngine />
      <InsightLayer />
      <TestimonialFlow />
      <MethodLoop />
      <SmartForm />
      <ConversionCTA />
      <AIChatbot />
    </div>
  );
}
