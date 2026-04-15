import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../hooks/use-scroll-reveal";
import { ARTICLES } from "@/data/articles";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Industrias — TOOXS" },
      { name: "description", content: "Descubre cómo TOOXS aplica inteligencia en más de 25 industrias para transformar operaciones y decisiones." },
      { property: "og:title", content: "Industrias — TOOXS" },
      { property: "og:description", content: "Descubre cómo TOOXS aplica inteligencia en más de 25 industrias." },
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

const featured = [
  ARTICLES[2],  // Estado alimentos y bebidas
  ARTICLES[3],  // IA Soberana
  ARTICLES[8],  // Rewired 2da edición
];

function IndustriesPage() {
  return (
    <div>
      {/* Custom Hero with subtle earth rotation + light pulse */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated background image — very slow rotation + scale breathe */}
        <div
          className="absolute inset-[-20%] bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)",
            animation: "heroEarthDrift 120s linear infinite",
          }}
        />
        {/* Light pulse overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 40% 50%, rgba(23,127,198,0.15) 0%, transparent 60%)",
            animation: "heroPulseGlow 6s ease-in-out infinite",
          }}
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            Industrias
          </h1>
        </div>

        <style>{`
          @keyframes heroEarthDrift {
            0%   { transform: scale(1.15) rotate(0deg); }
            50%  { transform: scale(1.18) rotate(1.5deg); }
            100% { transform: scale(1.15) rotate(0deg); }
          }
          @keyframes heroPulseGlow {
            0%, 100% { opacity: 0.3; }
            50%      { opacity: 0.7; }
          }
        `}</style>
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

      {/* Featured Section */}
      <section className="py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">NEWSLETTER</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Artículos destacados</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <ScrollReveal key={item.slug} delay={i * 100}>
                <Link to="/newsletter/$slug" params={{ slug: item.slug }} className="group block">
                  <div className="rounded-xl overflow-hidden mb-4 aspect-[5/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-bold text-navy text-lg flex items-center gap-1 mb-2 mt-1 group-hover:text-primary transition-colors">
                    {item.title} <ChevronRight size={16} />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{item.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 bg-mint text-navy px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 text-base mt-4"
            >
              Suscríbete al newsletter <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
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
