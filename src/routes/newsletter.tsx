import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Twitter, ArrowRight, Play, Mail, BookOpen, Briefcase, BarChart3, Mic, TrendingUp, FileText, Lightbulb, Users } from "lucide-react";

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
  tag: "Insights",
  title: "Agentes de IA en 2026: del piloto a la producción — y por qué el 40% de los proyectos van a fracasar",
  date: "Abril 15, 2026",
  excerpt: "La automatización inteligente dejó de ser un experimento. Pero sin gobernanza, estrategia y visión operativa, la inversión se pierde. Lo que los ejecutivos industriales en Latam necesitan saber ahora.",
  color: "from-[#1e3a5f] to-primary",
};

const secondaryArticles = [
  {
    tag: "Newsletter",
    title: "Título del segundo artículo destacado de la semana",
    date: "Abril 14, 2026",
    excerpt: "Breve descripción del artículo. Dos o tres líneas máximo para dar contexto al lector sobre el contenido.",
    color: "from-teal-700 to-teal-400",
  },
  {
    tag: "Reporte",
    title: "Título del tercer artículo destacado de la semana",
    date: "Abril 8, 2026",
    excerpt: "Breve descripción del artículo. Dos o tres líneas máximo para dar contexto al lector sobre el contenido.",
    color: "from-purple-800 to-purple-500",
  },
];

const miniArticles = [
  { tag: "Explainers", title: "Título de un artículo explicativo corto", excerpt: "Descripción breve del artículo que ocupa un par de líneas como máximo.", color: "from-orange-700 to-orange-400", icon: Lightbulb },
  { tag: "Caso de Estudio", title: "Título de un caso de estudio o historia", excerpt: "Descripción breve del artículo que ocupa un par de líneas como máximo.", color: "from-[#0F1B2D] to-[#1e3a5f]", icon: Briefcase },
  { tag: "Datos de la Semana", title: "Título de un artículo con datos y gráficos", excerpt: "Descripción breve del artículo que ocupa un par de líneas como máximo.", color: "from-green-800 to-green-500", icon: BarChart3 },
  { tag: "Tendencias", title: "Título de un artículo sobre tendencias", excerpt: "Descripción breve del artículo que ocupa un par de líneas como máximo.", color: "from-[#1e3a5f] to-primary", icon: TrendingUp },
];

const interviews = [
  { tag: "Podcast", title: "Título del episodio de podcast o entrevista #1", date: "Abril 9, 2026", excerpt: "Descripción del episodio. Una o dos líneas que resuman la conversación, el invitado y los temas cubiertos.", color: "from-purple-800 to-purple-500" },
  { tag: "Entrevista", title: "Título del episodio de podcast o entrevista #2", date: "Abril 10, 2026", excerpt: "Descripción del episodio. Una o dos líneas que resuman la conversación, el invitado y los temas cubiertos.", color: "from-teal-700 to-teal-400" },
  { tag: "Podcast", title: "Título del episodio de podcast o entrevista #3", date: "Abril 7, 2026", excerpt: "Descripción del episodio. Una o dos líneas que resuman la conversación, el invitado y los temas cubiertos.", color: "from-orange-700 to-orange-400" },
  { tag: "Podcast", title: "Título del episodio de podcast o entrevista #4", date: "Abril 2, 2026", excerpt: "Descripción del episodio. Una o dos líneas que resuman la conversación, el invitado y los temas cubiertos.", color: "from-[#0F1B2D] to-[#1e3a5f]" },
];

const newsletterCards = [
  { title: "CEO Briefing", desc: "Las ideas más relevantes para la alta dirección. Resumen ejecutivo semanal." },
  { title: "Tech Ops", desc: "Para equipos técnicos: herramientas, integraciones y automatizaciones que funcionan." },
  { title: "Monthly Highlights", desc: "Resumen mensual de los insights más destacados y tendencias del mes." },
];

const quarterlyArticles = [
  { title: "Tooxs Quarterly: Edición Digital", excerpt: "La IA agéntica está transformando la naturaleza misma de las operaciones empresariales. ¿Qué viene después?", color: "from-[#0F1B2D] to-[#1e3a5f]" },
  { title: "Ediciones anteriores del Quarterly", excerpt: "Explora ediciones pasadas sobre gen AI, productividad, crecimiento y transformación digital.", color: "from-teal-700 to-teal-400" },
  { title: "Agentes de IA en 2026: del piloto a la producción", excerpt: "Evaluar el valor empresarial vinculado a la automatización inteligente puede ayudar a las empresas a prosperar en un mundo volátil.", color: "from-purple-800 to-purple-500" },
];

/* ═══════════ COMPONENTS ═══════════ */

function PlaceholderImg({ className, color, label }: { className?: string; color: string; label?: string }) {
  return (
    <div className={`bg-gradient-to-br ${color} flex items-center justify-center ${className ?? ""}`}>
      <span className="text-white/40 text-xs uppercase tracking-widest">{label ?? "imagen"}</span>
    </div>
  );
}

function NewsletterPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ══════ HERO ══════ */}
      <section className="relative bg-navy text-white pt-32 pb-16 overflow-hidden">
        <div className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.3)_0%,transparent_70%)] rounded-full" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-3 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Nuestros Insights
          </h1>
          <p className="text-white/70 text-lg max-w-[560px] leading-relaxed">
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
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">Destacados de la Semana</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Main article */}
            <div>
              <PlaceholderImg className="w-full aspect-[4/3] rounded mb-5" color={highlightMain.color} label="imagen artículo principal" />
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{highlightMain.tag}</span>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold leading-tight tracking-tight hover:text-primary transition-colors cursor-pointer" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {highlightMain.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-2">{highlightMain.date}</p>
              <p className="text-[15px] text-foreground/70 leading-relaxed mt-3">{highlightMain.excerpt}</p>
            </div>

            {/* Secondary articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {secondaryArticles.map((a, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <PlaceholderImg className="w-full aspect-[16/10] rounded-sm mb-3" color={a.color} />
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.tag}</span>
                  <h3 className="mt-1 text-base font-bold leading-snug hover:text-primary transition-colors cursor-pointer" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {a.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{a.date}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed mt-2">{a.excerpt}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {miniArticles.map((a, i) => (
              <div key={i}>
                <PlaceholderImg className="w-full aspect-[4/3] rounded-sm mb-3" color={a.color} />
                <span className="text-[0.62rem] font-semibold uppercase tracking-wide text-muted-foreground">{a.tag}</span>
                <h4 className="mt-1 text-[0.95rem] font-bold leading-snug hover:text-primary transition-colors cursor-pointer" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {a.title}
                </h4>
                <p className="text-[0.8rem] text-foreground/60 leading-relaxed mt-1">{a.excerpt}</p>
              </div>
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

      {/* ══════ INTERVIEWS & PODCASTS ══════ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">Entrevistas &amp; Podcasts</p>

          <div className="flex flex-col">
            {interviews.map((item, i) => (
              <div key={i} className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 py-7 border-b border-border items-start ${i === 0 ? "pt-0" : ""}`}>
                <PlaceholderImg className="w-full sm:w-[160px] aspect-square rounded-sm" color={item.color} />
                <div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">{item.tag}</span>
                  <h3 className="mt-1 text-lg font-bold leading-snug hover:text-primary transition-colors cursor-pointer" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-primary mt-1">{item.date}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed mt-2">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-8">
            {["Más Podcasts", "Más Entrevistas", "Más Videos"].map((label) => (
              <a key={label} href="#" className="text-primary font-semibold text-sm inline-flex items-center gap-1 hover:underline">
                {label} <span className="text-base">›</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-border" />

      {/* ══════ NEWSLETTER FEATURED ══════ */}
      <section className="py-16 bg-section-bg">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">Newsletter Destacado</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="w-full aspect-video bg-gradient-to-br from-navy to-[#1e3a5f] rounded-md flex items-center justify-center">
              <Mail size={120} className="text-white/20" />
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

      <hr className="border-t border-border" />

      {/* ══════ QUARTERLY ══════ */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-muted-foreground mb-8">Nuevos en el Quarterly</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
            {quarterlyArticles.map((a, i) => (
              <div key={i}>
                <PlaceholderImg className="w-full aspect-[16/10] rounded mb-4" color={a.color} />
                <h3 className="text-base font-bold leading-snug mb-2 hover:text-primary transition-colors cursor-pointer" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {a.title}
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
