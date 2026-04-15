import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

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
];

const featured = [
  {
    title: "Casos de Éxito",
    description: "Explora casos de estudio de clientes de TOOXS sobre cómo nos asociamos con empresas para definir estrategias audaces, integrar tecnología e IA, y crear crecimiento sostenible.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=320&fit=crop",
    link: "/case-studies",
  },
  {
    title: "Nuestro Ecosistema de Alianzas",
    description: "Para ayudar a nuestros clientes en un mundo que cambia rápidamente, innovamos continuamente y extendemos nuestras capacidades. Desde la nube e inteligencia artificial hasta sostenibilidad y más.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=320&fit=crop",
    link: "/services",
  },
  {
    title: "Soluciones",
    description: "Descubre el software propietario, datos y soluciones de talento que TOOXS combina con capacidades de consultoría para entregar insights más rápidos e impacto medible.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=320&fit=crop",
    link: "/services",
  },
];

function IndustriesPage() {
  return (
    <div>
      <PageHero
        title="Industrias"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      />

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
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-8">DESTACADOS</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link to={item.link} className="group block">
                  <div className="rounded-xl overflow-hidden mb-4 aspect-[5/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-navy text-lg flex items-center gap-1 mb-2 group-hover:text-primary transition-colors">
                    {item.title} <ChevronRight size={16} />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keep Exploring */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl text-white mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Sigue explorando
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Link to="/" className="group flex items-center gap-3 text-white font-medium text-lg border-b border-white/30 pb-4 hover:border-white transition-colors">
                Historia de nuestra firma <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link to="/services" className="group flex items-center gap-3 text-white font-medium text-lg border-b border-white/30 pb-4 hover:border-white transition-colors">
                Políticas de servicio al cliente <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
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
