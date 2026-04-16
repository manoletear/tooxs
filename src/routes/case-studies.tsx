import { createFileRoute, Link } from "@tanstack/react-router";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../hooks/use-scroll-reveal";
import { GradientProBackground } from "@/components/GradientProBackground";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Casos de Éxito — TOOXS | Resultados Reales con IA" },
      { name: "description", content: "Descubre cómo TOOXS ha ayudado a empresas a transformar sus operaciones con IA, automatización y analítica avanzada. Resultados medibles en múltiples industrias." },
      { property: "og:title", content: "Casos de Éxito — TOOXS" },
      { property: "og:description", content: "Resultados reales: cómo empresas líderes transforman sus operaciones con TOOXS." },
      { property: "og:url", content: "https://www.tooxs.com/case-studies" },
      { name: "twitter:title", content: "Casos de Éxito — TOOXS" },
      { name: "twitter:description", content: "Resultados reales de IA y automatización en empresas industriales." },
      { name: "keywords", content: "casos de éxito, transformación digital, resultados IA, automatización empresas, TOOXS" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/case-studies" },
    ],
  }),
  component: CaseStudiesPage,
});

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Transformación Digital",
    title: "Empresa Tecnológica Triplica sus Ingresos",
    description: "Una compañía SaaS mediana enfrentaba un estancamiento en sus ingresos. Con estrategia digital integral y optimización del go-to-market, logramos triplicar ingresos en 18 meses.",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "Operaciones",
    title: "Manufacturera Reduce Costos en 40%",
    description: "Reestructuración operacional estratégica para una empresa manufacturera de 500 empleados, reduciendo dramáticamente overhead y mejorando calidad y satisfacción.",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
    category: "Asesoría Financiera",
    title: "Startup Asegura $50M en Financiamiento",
    description: "Estrategia financiera y optimización de pitch que resultó en una ronda Serie B exitosa, posicionando a la empresa para expansión internacional.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    category: "Estrategia de Negocio",
    title: "Cadena Retail se Expande a 50 Nuevas Tiendas",
    description: "Estrategia integral de expansión incluyendo análisis de mercado, selección de sitios y playbooks operacionales que habilitaron crecimiento rápido y rentable.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    category: "Operaciones",
    title: "Red de Salud Mejora Satisfacción en 60%",
    description: "Reingeniería de procesos e implementación de workflows digitales que transformaron la experiencia del paciente en una red de 12 clínicas.",
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    category: "Transformación Digital",
    title: "Servicios Financieros Adopta Modelo Digital-First",
    description: "Transformación digital end-to-end que modernizó sistemas legacy, mejoró el onboarding de clientes en 80% y redujo el riesgo operacional.",
  },
];

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ══════ HERO (patrón Newsletter) ══════ */}
      <section className="relative bg-black text-white min-h-[420px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-end overflow-hidden">
        <GradientProBackground
          primary="#177FC6"
          secondary="#20B2AA"
          background="#0A2647"
          speed={0.25}
          warpStrength={1}
          warpDetail={5}
          warpSpeed={2}
          contrast={1.5}
          saturation={1}
        />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 pb-8 sm:pb-10 md:pb-12">
          <Link to="/" className="text-xs text-white/60 mb-3 sm:mb-4 font-medium tracking-wide inline-block hover:text-white transition-colors">‹ Volver al Inicio</Link>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-3 sm:mb-4">Casos de Éxito</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black mb-3 sm:mb-4 leading-[1.1] tracking-tight">
            Resultados reales,<br className="hidden sm:block" /> no promesas
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-[1.05rem] lg:text-[1.1rem] max-w-[560px] leading-relaxed">
            Descubre cómo empresas líderes transforman sus operaciones con IA, automatización y analítica aplicada al negocio.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.title} delay={i * 100}>
                <div className="bg-card rounded-xl overflow-hidden border hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">{cs.category}</span>
                    <h3 className="text-lg font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{cs.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
