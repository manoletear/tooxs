import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Linkedin, Instagram, Mail, ChevronRight, Search, X } from "lucide-react";
import { GradientProBackground } from "@/components/GradientProBackground";
import { PrismBackground } from "@/components/PrismBackground";
import { ARTICLES, CATEGORY_GROUPS, getCategoryGroup, type CategoryGroup } from "@/data/articles";

import quarterlyCover from "@/assets/newsletter/quarterly-cover.jpg";
import quarterlyArchive from "@/assets/newsletter/quarterly-archive.jpg";
import heroAiAgents from "@/assets/newsletter/hero-ai-agents.jpg";

export const Route = createFileRoute("/newsletter/")({
  head: () => ({
    meta: [
      { title: "Newsletter — TOOXS Insights | Tendencias IA y Tecnología" },
      { name: "description", content: "Tendencias, datos y perspectivas sobre tecnología, automatización e IA aplicada a la industria y los negocios en Latinoamérica. Artículos semanales para líderes." },
      { property: "og:title", content: "Newsletter — TOOXS Insights" },
      { property: "og:description", content: "Tendencias, datos y perspectivas sobre tecnología, automatización e IA aplicada a la industria." },
      { property: "og:url", content: "https://www.tooxs.com/newsletter" },
      { name: "twitter:title", content: "TOOXS Insights — Newsletter" },
      { name: "twitter:description", content: "Artículos semanales sobre IA, automatización y transformación digital para líderes de industria." },
      { name: "keywords", content: "newsletter IA, tendencias tecnología, automatización industrial, insights negocio, TOOXS" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/newsletter" },
    ],
  }),
  component: NewsletterPage,
});

/* ═══════════ DATA (from shared articles) ═══════════ */

const highlightMain = ARTICLES[11];
const secondaryArticles = [ARTICLES[12], ARTICLES[13]];
const miniArticles = [ARTICLES[14], ARTICLES[15], ARTICLES[16], ARTICLES[17]];
const interviews = [ARTICLES[18], ARTICLES[19], ARTICLES[0], ARTICLES[5]];

const newsletterCards = [
  { title: "CEO Briefing", desc: "Las ideas más relevantes para la alta dirección. Resumen ejecutivo semanal." },
  { title: "Tech Ops", desc: "Para equipos técnicos: herramientas, integraciones y automatizaciones que funcionan." },
  { title: "Monthly Highlights", desc: "Resumen mensual de los insights más destacados y tendencias del mes." },
];

const quarterlyArticles = [
  { title: "Tooxs Quarterly: Edición Digital", excerpt: "La IA agéntica está transformando la naturaleza misma de las operaciones empresariales. ¿Qué viene después?", image: quarterlyCover, slug: ARTICLES[0].slug },
  { title: "Ediciones anteriores del Quarterly", excerpt: "Explora ediciones pasadas sobre gen AI, productividad, crecimiento y transformación digital.", image: quarterlyArchive, slug: ARTICLES[1].slug },
  { title: "Riesgo geopolítico como oportunidad empresarial", excerpt: "En un mundo fragmentado por tensiones comerciales, las empresas que mapean su exposición geopolítica y abrazan la agilidad prosperan.", image: heroAiAgents, slug: ARTICLES[0].slug },
];

/* ═══════════ PAGE ═══════════ */

function NewsletterPage() {
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup | "Todas">("Todas");
  const [query, setQuery] = useState("");

  const isFiltering = selectedGroup !== "Todas" || query.trim().length > 0;

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => {
      const matchesGroup = selectedGroup === "Todas" || getCategoryGroup(a.category) === selectedGroup;
      const matchesQuery =
        q.length === 0 ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesGroup && matchesQuery;
    });
  }, [selectedGroup, query]);

  return (
    <div className="min-h-screen bg-background">
      {/* ══════ HERO WITH PRISM ══════ */}
      <section className="relative bg-black text-white h-[45vh] md:h-[50vh] lg:h-[55vh] flex items-end overflow-hidden">
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
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-12">
          <Link to="/" className="text-xs text-white/50 mb-4 font-medium tracking-wide inline-block hover:text-white/80 transition-colors">‹ Volver al Inicio</Link>
          <h1 className="text-4xl md:text-[3.2rem] font-black mb-3 leading-[1.1] tracking-tight">
            Nuestros Insights
          </h1>
          <p className="text-white/70 text-[1.1rem] max-w-[560px] leading-relaxed">
            Tendencias, datos y perspectivas sobre tecnología, automatización e IA aplicada a la industria y los negocios en Latinoamérica.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="https://www.linkedin.com/company/tooxs/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 text-sm font-medium hover:text-white transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://www.instagram.com/tooxs_digital/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/80 text-sm font-medium hover:text-white transition-colors">
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ══════ FILTERS & SEARCH ══════ */}
      <section className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedGroup("Todas")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                  selectedGroup === "Todas"
                    ? "bg-primary text-white border-primary"
                    : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                Todas
              </button>
              {CATEGORY_GROUPS.map((group) => (
                <button
                  key={group}
                  onClick={() => setSelectedGroup(group)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                    selectedGroup === group
                      ? "bg-primary text-white border-primary"
                      : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por nombre…"
                className="w-full h-10 pl-9 pr-9 rounded-full border border-border bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Limpiar búsqueda"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FILTERED RESULTS (only when filtering) ══════ */}
      {isFiltering ? (
        <section className="py-12 border-b border-border">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex items-baseline justify-between mb-8">
              <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary">
                {selectedGroup === "Todas" ? "Resultados de búsqueda" : selectedGroup}
              </p>
              <span className="text-xs text-muted-foreground">
                {filteredArticles.length} {filteredArticles.length === 1 ? "artículo" : "artículos"}
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-base">No encontramos artículos que coincidan con tu búsqueda.</p>
                <button
                  onClick={() => { setQuery(""); setSelectedGroup("Todas"); }}
                  className="mt-4 text-primary text-sm font-semibold hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((a) => (
                  <Link key={a.id} to="/newsletter/$slug" params={{ slug: a.slug }} className="group block">
                    <img src={a.image} alt={a.title} className="w-full aspect-[4/3] object-cover rounded-xl mb-3" loading="lazy" />
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.category}</span>
                    <h3 className="mt-1 text-base font-bold leading-snug group-hover:text-primary transition-colors">
                      {a.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                    </h3>
                    <p className="text-[0.78rem] text-muted-foreground mt-1">{a.date}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed mt-2 line-clamp-3">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          {/* ══════ HIGHLIGHTS ══════ */}
          <section className="py-16 border-b border-border">
            <div className="max-w-[1200px] mx-auto px-6">
              <p className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-primary mb-10">Destacados de la Semana</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Main article */}
                <Link to="/newsletter/$slug" params={{ slug: highlightMain.slug }} className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-start lg:col-span-2 group">
                  <img src={highlightMain.image} alt={highlightMain.title} className="w-full aspect-[4/3] object-cover rounded-xl" />
                  <div className="flex flex-col justify-center">
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary">{highlightMain.category}</span>
                    <h2 className="mt-2 text-xl md:text-2xl font-extrabold leading-tight tracking-tight group-hover:text-primary transition-colors">
                      {highlightMain.title} <ChevronRight className="inline w-5 h-5 text-primary" />
                    </h2>
                    <p className="text-xs text-muted-foreground mt-2">{highlightMain.date}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed mt-3">{highlightMain.excerpt}</p>
                  </div>
                </Link>

                {/* Secondary articles */}
                {secondaryArticles.map((a, i) => (
                  <Link key={i} to="/newsletter/$slug" params={{ slug: a.slug }} className="group block">
                    <img src={a.image} alt={a.title} className="w-full aspect-[16/10] object-cover rounded-xl mb-3" loading="lazy" />
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.category}</span>
                    <h3 className="mt-1 text-base font-bold leading-snug group-hover:text-primary transition-colors">
                      {a.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                    </h3>
                    <p className="text-[0.78rem] text-muted-foreground mt-1">{a.date}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed mt-2">{a.excerpt}</p>
                  </Link>
                ))}
              </div>

              {/* Mini cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {miniArticles.map((a, i) => (
                  <Link key={i} to="/newsletter/$slug" params={{ slug: a.slug }} className="group block">
                    <img src={a.image} alt={a.title} className="w-full aspect-[4/3] object-cover rounded-xl mb-3" loading="lazy" />
                    <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.category}</span>
                    <h4 className="mt-1 text-[0.95rem] font-bold leading-snug group-hover:text-primary transition-colors">
                      {a.title} <ChevronRight className="inline w-3.5 h-3.5 text-primary" />
                    </h4>
                    <p className="text-[0.8rem] text-foreground/60 leading-relaxed mt-1">{a.excerpt}</p>
                  </Link>
                ))}
              </div>

              {/* Category quick-jump buttons */}
              <div className="flex flex-wrap gap-3 mt-10">
                {CATEGORY_GROUPS.map((group) => (
                  <button
                    key={group}
                    onClick={() => setSelectedGroup(group)}
                    className="px-5 py-2 rounded-full border-2 border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Ver más en {group}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ══════ CTA BANNER ══════ */}
          <section className="bg-navy text-white text-center py-14 px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
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
                  <Link key={i} to="/newsletter/$slug" params={{ slug: item.slug }} className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 py-7 border-b border-border items-start group ${i === 0 ? "pt-0" : ""}`}>
                    <img src={item.image} alt={item.title} className="w-full sm:w-[140px] aspect-square object-cover rounded-xl" loading="lazy" />
                    <div>
                      <span className="text-[0.6rem] font-semibold uppercase tracking-wide text-muted-foreground">{item.category}</span>
                      <h3 className="mt-1 text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                        {item.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                      </h3>
                      <p className="text-xs text-primary mt-1 font-medium">{item.date}</p>
                      <p className="text-sm text-foreground/60 leading-relaxed mt-2">{item.excerpt}</p>
                    </div>
                  </Link>
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
                  <h2 className="text-2xl font-extrabold mb-2">
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
                    <h3 className="text-lg font-bold mb-1">
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
                  <Link key={i} to="/newsletter/$slug" params={{ slug: a.slug }} className="group block">
                    <img src={a.image} alt={a.title} className="w-full aspect-[16/10] object-cover rounded-xl mb-4" loading="lazy" />
                    <h3 className="text-base font-bold leading-snug mb-2 group-hover:text-primary transition-colors">
                      {a.title} <ChevronRight className="inline w-4 h-4 text-primary" />
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
