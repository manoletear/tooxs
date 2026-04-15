import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Mail, ChevronRight } from "lucide-react";
import { PrismBackground } from "@/components/PrismBackground";
import { ARTICLES } from "@/data/articles";

import quarterlyCover from "@/assets/newsletter/quarterly-cover.jpg";
import quarterlyArchive from "@/assets/newsletter/quarterly-archive.jpg";
import heroAiAgents from "@/assets/newsletter/hero-ai-agents.jpg";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — TOOXS Insights" },
      { name: "description", content: "Tendencias, datos y perspectivas sobre tecnología, automatización e IA aplicada a la industria y los negocios en Latinoamérica." },
      { property: "og:title", content: "Newsletter — TOOXS Insights" },
      { property: "og:description", content: "Tendencias, datos y perspectivas sobre tecnología, automatización e IA aplicada a la industria y los negocios en Latinoamérica." },
    ],
  }),
  component: NewsletterPage,
});

/* ═══════════ DATA ═══════════ */

const highlightMain = {
  tag: "Estrategia",
  title: "Riesgo geopolítico como oportunidad: cómo las empresas industriales pueden ganar en la incertidumbre",
  date: "14 Abril 2026",
  excerpt: "En un mundo fragmentado por tensiones comerciales y aranceles cambiantes, las empresas que mapean su exposición geopolítica y abrazan la agilidad no solo sobreviven — prosperan.",
  image: heroAiAgents,
};

const secondaryArticles = [
  {
    tag: "AI & Operaciones",
    title: "Scheduling generativo: cómo la IA está transformando la ejecución de proyectos de capital",
    date: "14 Abril 2026",
    excerpt: "McKinsey y ALICE Technologies integran IA y analytics avanzados para que las constructoras y operadoras muevan más rápido, gestionen riesgo y desbloqueen valor medible en sus proyectos.",
    image: articleDigitalTransform,
  },
  {
    tag: "Industria",
    title: "El estado de alimentos y bebidas 2026: por qué las CPG deben reinventarse o perder terreno",
    date: "8 Abril 2026",
    excerpt: "La erosión de valor en bienes de consumo se está acelerando. Los líderes que no reforman sus portafolios, afinan su propuesta de valor y adoptan AI a fondo van a ceder terreno — rápido.",
    image: articleDataReport,
  },
];

const miniArticles = [
  {
    tag: "AI & Geopolítica",
    title: "IA Soberana: por qué los países quieren controlar su propio stack de inteligencia artificial",
    excerpt: "El control sobre modelos de IA, datos de entrenamiento e infraestructura de cómputo se está convirtiendo en una prioridad estratégica nacional.",
    image: articleSovereignAi,
  },
  {
    tag: "AI & Transformación",
    title: "De implementación a impacto: qué hacen bien las organizaciones que realmente ganan con IA",
    excerpt: "El caso Reckitt y otras empresas líderes muestra que el gap entre 'tener IA' y 'generar valor con IA' se cierra con cambios organizacionales, no solo tecnológicos.",
    image: articleDigitalTransform,
  },
  {
    tag: "Datos de la Semana",
    title: "Personalizar la atención para restaurar la confianza del consumidor",
    excerpt: "La atención de salud es profundamente personal — pero para muchos consumidores se siente distante, costosa y confusa, erosionando una confianza ya frágil.",
    image: articleHealthcareAi,
  },
  {
    tag: "AI & Retail",
    title: "De dashboards a decisiones: cómo la IA agéntica está transformando el merchandising",
    excerpt: "La IA agéntica puede automatizar trabajo rutinario y mejorar decisiones de merchandising a escala. Dos expertos discuten qué se necesita para convertir potencial en rendimiento.",
    image: articleAutomation,
  },
];

const categoryButtons = ["Más Explainers", "Más Datos de la Semana", "Más Tendencias", "Más Casos y Legados"];

const interviews = [
  {
    tag: "Macroeconomía",
    title: "¿Puede EEUU mantener su ventaja competitiva? Lo que AI, talento y deuda revelan sobre el futuro",
    date: "9 Abril 2026",
    excerpt: "Un nuevo estudio examina cómo la convergencia de IA, talento, infraestructura y deuda está reconfigurando la competitividad estadounidense — con lecciones para LATAM.",
    image: podcastInterview,
  },
  {
    tag: "AI & Desarrollo",
    title: "El camino de los agentes de IA: menos demos espectaculares, más cambio operativo",
    date: "10 Abril 2026",
    excerpt: "El CEO de Factory explica por qué escalar IA en ingeniería de software depende menos de modelos más poderosos y más de cómo se reorganizan los equipos.",
    image: articleDigitalTransform,
  },
  {
    tag: "Salud & Tech",
    title: "Salud en transformación: cómo la tecnología está cerrando la brecha entre pacientes y proveedores",
    date: "7 Abril 2026",
    excerpt: "El CEO de HCA Healthcare reflexiona sobre cómo las tecnologías emergentes y un liderazgo firme pueden llegar a los pacientes donde realmente están.",
    image: articleHealthcareAi,
  },
  {
    tag: "Libros & Ideas",
    title: "Rewired 2da edición: el playbook actualizado para ganar con tecnología e IA",
    date: "6 Abril 2026",
    excerpt: "McKinsey actualiza su libro más influyente sobre transformación digital con nuevos capítulos sobre IA generativa, agentes y lo que hacen diferente las empresas que realmente transforman.",
    image: articleAutomation,
  },
];

const newsletterCards = [
  { title: "CEO Briefing", desc: "Las ideas más relevantes para la alta dirección. Resumen ejecutivo semanal." },
  { title: "Tech Ops", desc: "Para equipos técnicos: herramientas, integraciones y automatizaciones que funcionan." },
  { title: "Monthly Highlights", desc: "Resumen mensual de los insights más destacados y tendencias del mes." },
];

const quarterlyArticles = [
  { title: "Tooxs Quarterly: Edición Digital", excerpt: "La IA agéntica está transformando la naturaleza misma de las operaciones empresariales. ¿Qué viene después?", image: quarterlyCover },
  { title: "Ediciones anteriores del Quarterly", excerpt: "Explora ediciones pasadas sobre gen AI, productividad, crecimiento y transformación digital.", image: quarterlyArchive },
  { title: "Riesgo geopolítico como oportunidad empresarial", excerpt: "En un mundo fragmentado por tensiones comerciales, las empresas que mapean su exposición geopolítica y abrazan la agilidad prosperan.", image: heroAiAgents },
];

/* ═══════════ PAGE ═══════════ */

function NewsletterPage() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', var(--font-body)" }}>
      {/* ══════ HERO WITH PRISM ══════ */}
      <section className="relative bg-navy text-white pt-32 pb-16 overflow-hidden">
        <PrismBackground />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <Link to="/" className="text-xs text-white/50 mb-4 font-medium tracking-wide inline-block hover:text-white/80 transition-colors">‹ Volver al Inicio</Link>
          <h1 className="text-4xl md:text-[3.2rem] font-black mb-3 leading-[1.1] tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Nuestros Insights
          </h1>
          <p className="text-white/70 text-[1.1rem] max-w-[560px] leading-relaxed">
            Tendencias, datos y perspectivas sobre tecnología, automatización e IA aplicada a la industria y los negocios en Latinoamérica.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 text-sm font-medium hover:text-white transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 text-sm font-medium hover:text-white transition-colors">
              <Twitter size={18} /> X
            </a>
          </div>
        </div>
      </section>

      {/* ══════ HIGHLIGHTS ══════ */}
      <section className="py-16 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary mb-10">Destacados de la Semana</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Main article */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-start lg:col-span-2">
              <img src={highlightMain.image} alt={highlightMain.title} className="w-full aspect-[4/3] object-cover rounded" />
              <div className="flex flex-col justify-center">
                <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary">{highlightMain.tag}</span>
                <h2 className="mt-2 text-xl md:text-2xl font-extrabold leading-tight tracking-tight cursor-pointer hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {highlightMain.title} <ChevronRight className="inline w-5 h-5 text-primary" />
                </h2>
                <p className="text-xs text-muted-foreground mt-2">{highlightMain.date}</p>
                <p className="text-sm text-foreground/70 leading-relaxed mt-3">{highlightMain.excerpt}</p>
              </div>
            </div>

            {/* Secondary articles */}
            {secondaryArticles.map((a, i) => (
              <div key={i}>
                <img src={a.image} alt={a.title} className="w-full aspect-[16/10] object-cover rounded-sm mb-3" loading="lazy" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.tag}</span>
                <h3 className="mt-1 text-base font-bold leading-snug cursor-pointer hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {a.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                </h3>
                <p className="text-[0.78rem] text-muted-foreground mt-1">{a.date}</p>
                <p className="text-sm text-foreground/60 leading-relaxed mt-2">{a.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Mini cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {miniArticles.map((a, i) => (
              <div key={i}>
                <img src={a.image} alt={a.title} className="w-full aspect-[4/3] object-cover rounded-sm mb-3" loading="lazy" />
                <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.tag}</span>
                <h4 className="mt-1 text-[0.95rem] font-bold leading-snug cursor-pointer hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {a.title} <ChevronRight className="inline w-3.5 h-3.5 text-primary" />
                </h4>
                <p className="text-[0.8rem] text-foreground/60 leading-relaxed mt-1">{a.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap gap-3 mt-10">
            {categoryButtons.map((label) => (
              <button key={label} className="px-5 py-2 rounded-full border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA BANNER ══════ */}
      <section className="bg-navy text-white text-center py-14 px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Participa en nuestra comunidad
        </h2>
        <p className="text-white/70 text-[0.95rem] mb-6">¿Quieres recibir insights sobre tecnología e IA aplicada a tu industria?</p>
        <a href="#subscribe" className="inline-block bg-white text-navy px-8 py-3 rounded font-semibold text-sm border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200 hover:-translate-y-0.5">
          Suscríbete al newsletter
        </a>
      </section>

      {/* ══════ INTERVIEWS ══════ */}
      <section className="py-16 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary mb-8">Entrevistas &amp; Podcasts</p>

          <div className="flex flex-col">
            {interviews.map((item, i) => (
              <div key={i} className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 py-7 border-b border-border items-start ${i === 0 ? "pt-0" : ""}`}>
                <img src={item.image} alt={item.title} className="w-full sm:w-[140px] aspect-square object-cover rounded-sm" loading="lazy" />
                <div>
                  <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{item.tag}</span>
                  <h3 className="mt-1 text-lg font-bold leading-snug cursor-pointer hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {item.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                  </h3>
                  <p className="text-xs text-primary mt-1 font-medium">{item.date}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed mt-2">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {["Más Podcasts de TOOXS", "Más Entrevistas", "Más Videos"].map((label) => (
              <button key={label} className="px-5 py-2 rounded-full border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200">
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ NEWSLETTER FEATURED ══════ */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary mb-8">Newsletter Destacado</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative w-full aspect-video bg-gradient-to-br from-navy to-[#1e3a5f] rounded-md flex items-center justify-center overflow-hidden">
              <PrismBackground />
              <Mail size={100} className="text-white/20 relative z-10" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                The Weekly Brief <span className="text-primary">›</span>
              </h2>
              <p className="text-[0.95rem] text-foreground/60 mb-4 leading-relaxed">
                Lo mejor de la semana en tecnología, IA y automatización para líderes de negocio. Curado por el equipo de Tooxs.
              </p>
              <p className="text-sm text-muted-foreground">Cada viernes en tu inbox.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {newsletterCards.map((card, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {card.title} <span className="text-primary">›</span>
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ QUARTERLY ══════ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary mb-8">Nuevos en el Quarterly</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {quarterlyArticles.map((a, i) => (
              <div key={i}>
                <img src={a.image} alt={a.title} className="w-full aspect-[16/10] object-cover rounded mb-4" loading="lazy" />
                <h3 className="text-base font-bold leading-snug mb-2 cursor-pointer hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {a.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{a.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
