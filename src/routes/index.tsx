import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Quote, ChevronDown, Send, X, MessageCircle, Pickaxe, ShoppingCart, Landmark, Wheat, Radio, HeartPulse, Brain, Bot, BarChart3, Code2, Link2, ChevronRight, Search, Lightbulb, Rocket, Car, Star, Building2 } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";
import CardDeckSpread from "../components/CardDeckSpread";
import IndustryCarousel from "../components/IndustryCarousel";
import FluidCardStack from "../components/FluidCardStack";
import { KineticTypography } from "../components/KineticTypography";
import automotiveImg from "../assets/industry-automotive.jpg";
import mapLatamPresence from "../assets/map-latam-presence.png";
import { ARTICLES } from "../data/articles";
import TiltedCards from "../components/TiltedCards";
import SolutionShowcase from "../components/SolutionShowcase";
import monkeySeeImg from "../assets/monkey-see.png";
import monkeyHearImg from "../assets/monkey-hear.png";
import monkeySpeakImg from "../assets/monkey-speak.png";
import monkeyMeasureImg from "../assets/monkey-measure.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOOXS — Inteligencia Aplicada para Organizaciones" },
      { name: "description", content: "TOOXS diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa. IA, RPA y analítica para empresas en Chile y Latinoamérica." },
      { property: "og:title", content: "TOOXS — Inteligencia Aplicada para Organizaciones" },
      { property: "og:description", content: "Automatización inteligente, RPA, IA y analítica avanzada para empresas industriales en Chile y Latinoamérica." },
      { property: "og:url", content: "https://www.tooxs.com" },
      { name: "twitter:title", content: "TOOXS — Inteligencia Aplicada para Organizaciones" },
      { name: "twitter:description", content: "Automatización inteligente, RPA, IA y analítica avanzada para empresas industriales." },
      { name: "keywords", content: "inteligencia artificial, automatización, RPA, data analytics, transformación digital, Chile, consultoría tecnológica, TOOXS" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com" },
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

  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top;
        videoRef.current.style.transform = `translateY(${scrollProgress * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video ref={videoRef} autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-[120%] object-cover will-change-transform" style={{ top: "-10%" }}>
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 md:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
          {/* Left: Heading */}
          <div className="lg:max-w-[58%]">
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ fontFamily: "var(--font-heading)" }}>
              No es la tecnología.{" "}
              <br className="hidden sm:block" />
              Es cómo{" "}
              <em className="not-italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic" }}>incorporarla</em>{" "}
              <br className="hidden sm:block" />
              correctamente en las{" "}
              <em className="not-italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontStyle: "italic" }}>organizaciones.</em>
            </h1>
          </div>
          {/* Right: Subtitle + CTA */}
          <div className={`lg:max-w-[32%] transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="text-sm md:text-base text-white/80 leading-relaxed mb-8">
              TOOXS diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center gap-3 bg-white text-navy px-7 py-3.5 rounded-full font-semibold hover:bg-white/95 transition-all duration-300 text-sm group shadow-lg">
              Agendar una consulta
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white group-hover:scale-110 transition-transform">
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
  { value: 8, suffix: "+", label: "Años desarrollando soluciones digitales" },
  { value: 120, suffix: "+", label: "Proyectos implementados" },
  { value: 30, suffix: "+", label: "Clientes corporativos regionales" },
  { value: 125, suffix: "+", label: "Automatizaciones y RPAs" },
  { value: 10, suffix: "+", label: "Soluciones tecnológicas propias" },
  { value: 5, suffix: "", label: "Países con presencia regional" },
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

function DraggableMarquee({ children, reverse = false, speed = 30, className = "" }: { children: React.ReactNode; reverse?: boolean; speed?: number; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  // Pause animation on hover/touch
  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => { if (!dragState.current.isDragging) setIsPaused(false); }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el) return;
    dragState.current = { isDragging: true, startX: e.clientX, scrollLeft: el.scrollLeft };
    setIsPaused(true);
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.isDragging || !containerRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    containerRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    dragState.current.isDragging = false;
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
      containerRef.current.style.cursor = "grab";
    }
    // Resume auto-scroll after a short delay
    setTimeout(() => { if (!dragState.current.isDragging) setIsPaused(false); }, 2000);
  }, []);

  // Auto-scroll via requestAnimationFrame
  const rafRef = useRef<number>(0);
  const scrollPos = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const halfWidth = inner.scrollWidth / 2;

    const tick = () => {
      if (!isPaused && !dragState.current.isDragging) {
        scrollPos.current += (reverse ? -1 : 1) * (speed / 60);
        if (scrollPos.current >= halfWidth) scrollPos.current -= halfWidth;
        if (scrollPos.current < 0) scrollPos.current += halfWidth;
        el.scrollLeft = scrollPos.current;
      } else {
        scrollPos.current = el.scrollLeft;
        // Wrap around for manual scrolling too
        const hw = inner.scrollWidth / 2;
        if (el.scrollLeft >= hw) el.scrollLeft -= hw;
        if (el.scrollLeft <= 0) el.scrollLeft += hw;
        scrollPos.current = el.scrollLeft;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    // Initialize scroll position
    scrollPos.current = reverse ? halfWidth : 0;
    el.scrollLeft = scrollPos.current;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, reverse, speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden select-none ${className}`}
      style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={resume}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div ref={innerRef} className="flex items-center gap-4 sm:gap-6 md:gap-12 w-max">
        {children}
        {children}
      </div>
    </div>
  );
}

function TrustBarDynamic() {
  const trustItems = trustLogos.map((logo) => (
    <div key={logo.alt} className="flex-shrink-0 w-[140px] h-[60px] sm:w-[180px] sm:h-[80px] md:w-[280px] md:h-[120px] flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-[50px] max-w-[130px] sm:max-h-[70px] sm:max-w-[170px] md:max-h-[100px] md:max-w-[260px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
      />
    </div>
  ));

  const partnerItems = partnerLogos.map((logo) => (
    <div key={logo.alt} className="flex-shrink-0 w-[200px] h-[100px] sm:w-[320px] sm:h-[140px] md:w-[560px] md:h-[240px] flex items-center justify-center">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-[80px] max-w-[180px] sm:max-h-[120px] sm:max-w-[300px] md:max-h-[200px] md:max-w-[520px] object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
      />
    </div>
  ));

  return (
    <section className="py-16 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Empresas que confían en Tooxs</h2>
        </ScrollReveal>
        {/* Logo marquee - draggable */}
        <DraggableMarquee speed={30} className="mb-12">
          {trustItems}
        </DraggableMarquee>
        {/* Metrics + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 80}>
                <div className="bg-card rounded-xl p-6 shadow-sm text-center border border-border/50 h-full flex flex-col items-center justify-center">
                  <Counter end={m.value} suffix={m.suffix} />
                  <p className="mt-2 text-sm text-muted-foreground leading-snug">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Map */}
          <ScrollReveal delay={200} className="flex flex-col items-center h-full">
            <div className="bg-card rounded-xl p-4 shadow-sm border border-border/50 w-full h-full flex items-center justify-center">
              <img
                src={mapLatamPresence}
                alt="Presencia regional de TOOXS en Chile, Perú, Colombia, Costa Rica y Panamá"
                className="w-full h-auto max-h-[320px] object-contain"
                loading="lazy"
                width={640}
                height={960}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Partners marquee - draggable */}
        <div className="mt-16">
          <DraggableMarquee reverse speed={25} className="mb-6">
            {partnerItems}
          </DraggableMarquee>
          <ScrollReveal className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Nuestros Partners</h2>
          </ScrollReveal>
        </div>
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
  automotiveImg, // Automotriz
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=560&fit=crop", // Real Estate
];

const industries = [
  {
    icon: Pickaxe,
    name: "Minería y Utilities",
    tagline: "Gestión de mantenimiento basada en condición y confiabilidad de activos",
    problem:
      "La disponibilidad de equipos críticos define directamente la capacidad de producción. La mantención preventiva por horas y la correctiva no planificada generan variabilidad operativa y presión sobre costos y cumplimiento del plan.",
    solution:
      "Se incorporan datos de condición desde operación (SCADA, sensores) y del histórico de mantención (SAP PM / EAM) para ajustar la planificación según el comportamiento real de los equipos. Esto permite intervenir antes de la falla y, sobre todo, estabilizar la planificación.",
    impact:
      "−10% a −40% fallas no programadas · −10% a −25% costos de mantención · +5% a +15% disponibilidad de equipos (McKinsey). Lectura: el punto no es anticipar fallas, es reducir la variabilidad operativa.",
  },
  {
    icon: ShoppingCart,
    name: "Retail y Logística",
    tagline: "Reposición y flujo de inventario coordinado en toda la cadena",
    problem:
      "El margen se pierde en descalces: quiebres en sala, sobrestock en CD y reposición tardía. La operación depende de ciclos de planificación que no reflejan cambios reales en demanda ni restricciones logísticas.",
    solution:
      "Se integran ventas, inventario (sala y CD) y tránsito logístico para ajustar reposición de forma continua, no por ciclos. Esto permite anticipar quiebres, reducir acumulación y alinear distribución con capacidad real.",
    impact:
      "+20% a +50% precisión de forecast · −20% a −30% inventario (McKinsey). Lectura: el problema no es el forecast, es que la reposición no sigue el ritmo de la demanda real.",
  },
  {
    icon: Landmark,
    name: "Servicios Financieros",
    tagline: "Gestión de riesgo integrada al flujo operativo",
    problem:
      "El riesgo se define en la operación: originación, transacciones, monitoreo de cartera y cumplimiento. Cuando la evaluación ocurre después, la exposición ya está tomada.",
    solution:
      "El scoring, validaciones y controles se integran directamente en el flujo transaccional. Esto permite evaluar en línea, monitorear continuamente y detectar anomalías en el momento en que ocurren.",
    impact:
      "−60% a −80% tiempos de análisis · mejor detección de anomalías y fraude (Deloitte). Lectura: el punto no es el modelo, es cuándo ocurre la decisión.",
  },
  {
    icon: Wheat,
    name: "Agroindustria",
    tagline: "Control operativo y trazabilidad en procesos de packing",
    problem:
      "El valor de la producción se define en el packing: clasificación, tiempos, trazabilidad y cumplimiento. Las pérdidas en esta etapa afectan directamente exportación, precios y rechazos.",
    solution:
      "Se estructuran datos de proceso (líneas, calidad, tiempos) para monitorear y ajustar la operación en tiempo real, reduciendo desvíos y mejorando control end-to-end.",
    impact:
      "−15% a −25% pérdidas postcosecha · +10% a +20% eficiencia operativa (World Economic Forum). Lectura: el margen no se pierde en el campo, se pierde en cómo se ejecuta el packing.",
  },
  {
    icon: Radio,
    name: "Telecomunicaciones",
    tagline: "Gestión operativa de red con menor intervención manual",
    problem:
      "La operación de red concentra la mayor complejidad: incidentes, degradación de servicio y mantenimiento distribuido. La gestión reactiva genera alta carga operativa y tiempos de resolución variables.",
    solution:
      "Se integran monitoreo, eventos y datos de red para priorizar, diagnosticar y resolver incidentes con menor intervención manual. Esto permite operar con mayor estabilidad y menor dependencia de escalamiento humano.",
    impact:
      "−20% a −40% incidentes operacionales · −30% a −60% tiempos de resolución · −15% a −25% costos operativos (Gartner). Lectura: el punto no es reaccionar más rápido, es reducir la cantidad de eventos que requieren reacción.",
  },
  {
    icon: HeartPulse,
    name: "Salud",
    tagline: "Reducción de carga administrativa en procesos clínicos",
    problem:
      "Una parte relevante del tiempo clínico se consume en tareas administrativas: registros, validaciones y gestión documental, que restan capacidad directa de atención.",
    solution:
      "Se estructuran y automatizan flujos administrativos para reducir intervención manual y tiempos de gestión, liberando capacidad clínica.",
    impact:
      "−20% a −40% carga administrativa (McKinsey). Lectura: cada proceso administrativo que se elimina libera capacidad clínica directa.",
  },
  {
    icon: Car,
    name: "Automotriz",
    tagline: "Gestión de postventa y garantías sin reprocesos",
    problem:
      "La postventa concentra una parte relevante del margen, pero sigue operando con procesos manuales en garantías, órdenes y documentación, generando errores y demoras.",
    solution:
      "Se automatiza la lectura, validación y registro de información en sistemas (DMS/ERP), reduciendo errores y tiempos de gestión.",
    impact:
      "−30% a −70% tiempos administrativos (Deloitte). Lectura: la mejora no está en atender más rápido, sino en no tener que rehacer el proceso.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    tagline: "Gestión de activos basada en datos operativos",
    problem:
      "Las decisiones sobre activos —ocupación, precios, rendimiento— suelen basarse en información parcial o desfasada del mercado y la operación.",
    solution:
      "Se integran datos de operación, mercado y clientes para ajustar pricing, ocupación y gestión de portafolio con visibilidad continua.",
    impact:
      "Mejora en valorización y pricing · mayor control sobre ocupación y rendimiento (PwC). Lectura: el activo no cambia, cambia cómo se gestiona con información.",
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
    title: "01 — Descubrir",
    description: "Nos sumergimos en tu negocio para identificar desafíos clave, descubrir oportunidades y construir una visión clara de lo que realmente importa.",
    image: monkeySeeImg,
    time: "2 semanas",
  },
  {
    title: "02 — Estrategizar",
    description: "Diseñamos estrategias a medida alineadas con tus objetivos, restricciones y recursos disponibles.",
    image: monkeyHearImg,
    time: "4 semanas",
  },
  {
    title: "03 — Ejecutar",
    description: "Acompañamos la implementación para asegurar que cada solución sea práctica, efectiva y con impacto a largo plazo.",
    image: monkeySpeakImg,
    time: "Variable",
  },
  {
    title: "04 — Optimizar",
    description: "Medimos el desempeño, refinamos procesos y convertimos los datos en resultados de negocio concretos.",
    image: monkeyMeasureImg,
    time: "Continua",
  },
];

function CapabilityGraph() {
  return (
    <section id="capacidades" className="bg-navy text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-4">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mint mb-3">Entender → Estrategizar → Implementar → Medir</p>
          <h2 className="text-3xl md:text-4xl font-bold">Nuestro marco de trabajo para automatización inteligente.</h2>
        </ScrollReveal>
        <TiltedCards cards={capabilityCards} />
      </div>
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <div
                className="relative bg-card rounded-xl p-7 cursor-pointer group hover:-translate-y-2 hover:scale-[1.10] hover:shadow-2xl transition-all duration-500 ease-out h-full overflow-hidden"
                onClick={() => setSelected(selected === i ? null : i)}
              >
                {/* Animated border lines from center */}
                <span className="pointer-events-none absolute top-0 left-0 w-full h-[2px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                <span className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] bg-mint scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                <span className="pointer-events-none absolute left-0 top-0 w-[2px] h-full bg-mint scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out delay-100 origin-center" />
                <span className="pointer-events-none absolute right-0 top-0 w-[2px] h-full bg-mint scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out delay-100 origin-center" />

                {/* Card content */}
                <div className="relative z-10">
                  <div className="pb-5 mb-4">
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   7. SOLUCIONES — see SolutionShowcase component
   ══════════════════════════════════════════ */

/* ══════════════════════════════════════════
   9. INSIGHTS — Article Carousel
   ══════════════════════════════════════════ */
function InsightLayer() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 340;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const articles = ARTICLES.slice(0, 10);

  return (
    <section className="py-20 bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">Insights para la nueva era operacional</h2>
            <p className="text-muted-foreground">Artículos y puntos de vista de nuestro equipo.</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" aria-label="Anterior">
              <ArrowLeft size={18} />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors" aria-label="Siguiente">
              <ArrowRight size={18} />
            </button>
          </div>
        </ScrollReveal>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {articles.map((article: any, i: number) => (
            <Link
              key={article.slug}
              to="/newsletter/$slug"
              params={{ slug: article.slug }}
              className="group shrink-0 w-[300px] snap-start"
            >
              <div className="bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] text-muted-foreground mb-2">{article.date} · {article.readTime}</p>
                  <h3
                    className="text-sm font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-emphasis)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                  <span className="mt-3 text-xs font-semibold text-primary inline-flex items-center gap-1">
                    Leer más <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <ScrollReveal className="text-center mt-8">
          <Link
            to="/newsletter"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Ver todos los insights <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   10. TESTIMONIOS
   ══════════════════════════════════════════ */
const testimonials = [
  {
    company: "Trek Rental",
    quote: "TOOXS nos ayudó a fortalecer la gestión documental en procesos operacionales vinculados a garantías y mantenimiento, donde el orden y la disponibilidad de la información son claves. La solución permitió dar mayor trazabilidad a los documentos, reducir tareas manuales y facilitar el seguimiento de antecedentes relevantes para la operación. Eso nos permitió avanzar hacia un proceso más ágil, claro y controlado.",
    initials: "JV",
    name: "Jean Vogth",
    title: "Gerente de Desarrollo Corporativo",
  },
  {
    company: "Kaufmann",
    quote: "El motor de gestión documental inteligente implementado junto a Tooxs aportó valor en un proceso comercial relevante, permitiendo gestionar documentos e ingresar información a SAP de manera más ágil, ordenada, integrada y trazable. La solución ayudó a reducir revisión manual y a mejorar la disponibilidad de información, fortaleciendo la eficiencia del proceso.",
    initials: "CL",
    name: "Carlos Lillo",
    title: "Jefe de Proyectos",
  },
  {
    company: "GPS7000",
    quote: "En una industria como la nuestra, donde la trazabilidad de la información, la rapidez de respuesta y el control operativo son fundamentales, TOOXS nos permitió mejorar de manera concreta la gestión documental en procesos administrativos y comerciales. La solución nos ayudó a ordenar información, reducir trabajo manual e interpretar documentos de forma más ágil y confiable. Para GPS7000, eso se traduce en una mejor capacidad de gestión interna y en una operación más consistente de cara a nuestros clientes.",
    initials: "AM",
    name: "Angelo Mosso",
    title: "Gerente General",
  },
  {
    company: "Empresas Volcan",
    quote: "Trabajar con Tooxs ha sido una experiencia positiva en nuestra modernización industrial. Su enfoque práctico, su experiencia en soluciones Microsoft y su compromiso con la mejora continua han optimizado nuestros procesos, alineándolos mejor con la estrategia de la compañía. Aprecio su soporte y flexibilidad para adaptarse a nuestras necesidades. Recomiendo a Tooxs por su cercanía y atención personalizada. Han estado a nuestro lado en cada paso, asegurando resultados óptimos y haciendo que la colaboración sea confiable y satisfactoria.",
    initials: "PS",
    name: "Pablo Sepulveda",
    title: "Jefe de Modernización de Procesos Industriales",
  },
];

function TestimonialFlow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let pos = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isPaused.current && el) {
        pos += speed;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    isPaused.current = true;
    el.scrollBy({ left: dir * 400, behavior: "smooth" });
    setTimeout(() => { isPaused.current = false; }, 2000);
  };

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Lo que dicen nuestros clientes</h2>
        </ScrollReveal>
      </div>
      <div className="relative max-w-[1400px] mx-auto px-14">
        {/* Left arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ArrowLeft size={18} className="text-navy" />
        </button>

        {/* Carousel track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden py-4 -my-4"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {doubled.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="bg-card rounded-2xl p-6 shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col shrink-0"
              style={{ width: 380, minHeight: 320 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-mint tracking-wide uppercase">{t.company}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <Quote className="text-mint/40 mb-2" size={20} />
              <p className="text-foreground/80 text-[13px] leading-relaxed mb-4 italic flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/50 mt-auto">
                <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center text-[11px] font-bold shrink-0">{t.initials}</div>
                <div>
                  <p className="font-semibold text-sm text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ArrowRight size={18} className="text-navy" />
        </button>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════
   12. SMART FORM (HubSpot Embedded)
   ══════════════════════════════════════════ */
function SmartForm() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;

    // Check if script already loaded
    const existingScript = document.querySelector('script[src="https://js.hsforms.net/forms/embed/24156430.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/24156430.js";
      script.defer = true;
      document.head.appendChild(script);
    }

    // Re-initialize the form element for HubSpot to pick up
    const el = formRef.current;
    el.setAttribute("data-region", "na1");
    el.setAttribute("data-form-id", "ce71cdbb-2192-4264-af88-8060d3dc013a");
    el.setAttribute("data-portal-id", "24156430");

    // Trigger HubSpot to process new form elements
    if ((window as any).hbspt?.forms) {
      (window as any).hbspt.forms.create({
        region: "na1",
        portalId: "24156430",
        formId: "ce71cdbb-2192-4264-af88-8060d3dc013a",
        target: el,
      });
    }
  }, []);

  return (
    <section id="smart-form" className="py-20 bg-section-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">¿Listo para operar mejor?</h2>
          <p className="text-muted-foreground">Cuéntanos tu desafío y te daremos un diagnóstico en 48 horas.</p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="bg-card rounded-2xl p-8 border shadow-sm">
            <div
              ref={formRef}
              className="hs-form-frame"
              data-region="na1"
              data-form-id="ce71cdbb-2192-4264-af88-8060d3dc013a"
              data-portal-id="24156430"
            />
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
      
      <IndustryExplorer />
      <CapabilityGraph />
      <TestimonialFlow />
      <ServiceSystem />
      <SolutionShowcase />
      
      <InsightLayer />
      
      <SmartForm />
      <ConversionCTA />
      <AIChatbot />
    </div>
  );
}
