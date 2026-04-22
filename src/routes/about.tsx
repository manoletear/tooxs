import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";
import { PaperShaderBackground } from "@/components/ui/paper-shader-background";
import { FeaturedNewsGrid } from "@/components/FeaturedNewsGrid";
import { useNewsletter } from "@/components/NewsletterDialog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Industrias — Tooxs | IA y Automatización por Sector" },
      { name: "description", content: "Descubre cómo Tooxs aplica inteligencia artificial en minería, retail, banca, salud, telecomunicaciones, agroindustria, automotriz y real estate." },
      { property: "og:title", content: "Industrias — Tooxs | IA y Automatización por Sector" },
      { property: "og:description", content: "Soluciones de IA aplicada para más de 8 industrias clave en Chile y Latinoamérica." },
      { property: "og:url", content: "https://www.tooxs.com/about" },
      { name: "twitter:title", content: "Industrias — Tooxs" },
      { name: "twitter:description", content: "IA aplicada para minería, retail, banca, salud y más sectores industriales." },
      { name: "keywords", content: "industrias, IA por sector, automatización minería, retail analytics, banca digital, salud IA, Tooxs" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/about" },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { title: "Minería y Utilities", description: "Ayudamos a compañías intensivas en activos a reducir pérdidas operativas, anticipar fallas y mejorar la continuidad operacional con IA, automatización y analítica avanzada.", link: "/industrias/mineria-utilities" },
  { title: "Retail y Logística", description: "Ayudamos a retailers, operadores logísticos y negocios omnicanal a optimizar inventario, mejorar disponibilidad y convertir la cadena de suministro en una ventaja competitiva.", link: "/industrias/retail-logistica" },
  { title: "Banca y Finanzas", description: "Diseñamos soluciones que aceleran evaluación, originación, cumplimiento y servicio financiero con automatización, IA y flujos auditables.", link: "/industrias/banca-finanzas" },
  { title: "Agroindustria", description: "Acompañamos a empresas agroindustriales a integrar datos productivos, comerciales y operacionales para mejorar rendimiento, trazabilidad y eficiencia en toda la cadena.", link: "/industrias/agroindustria" },
  { title: "Telecomunicaciones", description: "Ayudamos a operadores y empresas telco a integrar IA en red, atención, experiencia y operación para capturar eficiencia y mejorar servicio.", link: "/industrias/telecomunicaciones" },
  { title: "Salud", description: "Acompañamos a prestadores, aseguradores y organizaciones de salud a modernizar flujos clínicos y administrativos con IA, automatización y analítica.", link: "/industrias/salud" },
  { title: "Automotriz", description: "Ayudamos a fabricantes, importadores, distribuidores y operadores del mundo automotriz a mejorar productividad, calidad y velocidad de ejecución con IA y automatización.", link: "/industrias/automotriz" },
  { title: "Real Estate", description: "Acompañamos a desarrolladoras, corredoras y administradoras de activos a digitalizar procesos comerciales, documentales y operativos para acelerar ventas y mejorar visibilidad.", link: "/industrias/real-estate" },
];

function IndustriesPage() {
  return (
    <div>
      {/* Hero with animated paper-design mesh-gradient shader */}
      <section className="relative bg-[#06192f] text-white min-h-[420px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[560px] flex items-end overflow-hidden">
        <PaperShaderBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06192f] via-[#06192f]/40 to-[#06192f]/10 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-20 pb-8 sm:pb-10 md:pb-12">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-1 mb-4 sm:mb-5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold tracking-wide transition-colors"
            >
              ‹ Volver al Inicio
            </Link>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-3 sm:mb-4">IA aplicada por sector</p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black mb-3 sm:mb-4 leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Industrias
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-[1.05rem] lg:text-[1.1rem] max-w-[620px] leading-relaxed">
              Diseñamos soluciones de inteligencia artificial y automatización adaptadas a la realidad operativa de cada sector: minería, retail, banca, agroindustria, telecomunicaciones, salud, automotriz y real estate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={Math.min(i * 40, 300)}>
                <Link to={ind.link as any} className="group block cursor-pointer rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card border border-transparent hover:border-border">
                  <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                    {ind.title}
                    <ChevronRight size={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Newsletter Articles (random pool) */}
      <FeaturedNewsGrid />

      {/* CTA Newsletter */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-4">
              Participa en nuestra comunidad
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              ¿Quieres recibir insights sobre tecnología e IA aplicada a tu industria?
            </h2>
            <SubscribeCTA />
          </ScrollReveal>
        </div>
      </section>

      {/* Connect */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Conectemos
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:brightness-110 transition-all"
          >
            <Mail size={16} /> Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}

function SubscribeCTA() {
  const { openNewsletter } = useNewsletter();
  return (
    <button
      type="button"
      onClick={() => openNewsletter("About — CTA Newsletter")}
      className="inline-flex items-center gap-2 bg-mint text-navy px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 text-base mt-4"
    >
      Suscríbete a Insights 2026 <ArrowRight size={18} />
    </button>
  );
}
