import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, ChevronRight, Linkedin, Twitter, Share2 } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { PrismBackground } from "@/components/PrismBackground";

export const Route = createFileRoute("/newsletter/$slug")({
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
        <Link to="/newsletter" className="text-primary hover:underline">
          Volver a Newsletter
        </Link>
      </div>
    </div>
  ),
});

function renderMarkdown(content: string) {
  return content
    .trim()
    .split("\n")
    .map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} className="h-4" />;
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="text-2xl font-bold mt-10 mb-4 text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      // Bold paragraph like **1. Something.**
      if (trimmed.startsWith("**")) {
        const text = trimmed.replace(/\*\*/g, "");
        return (
          <p key={i} className="font-semibold text-foreground mt-4 mb-1 leading-relaxed">
            {text}
          </p>
        );
      }
      return (
        <p key={i} className="text-foreground/80 leading-[1.85] text-[1.05rem]">
          {trimmed}
        </p>
      );
    });
}

function ArticlePage() {
  const { slug } = Route.useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    throw notFound();
  }

  const related = getRelatedArticles(slug, 5);

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Inter', var(--font-body)" }}>
      {/* Sticky back button */}
      <div className="fixed top-20 left-4 md:left-8 z-50">
        <Link
          to="/newsletter"
          className="flex items-center gap-2 bg-navy text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-navy/90 transition-all text-sm font-medium backdrop-blur-sm"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Volver</span>
        </Link>
      </div>

      {/* Hero image */}
      <section className="relative h-[45vh] min-h-[320px] overflow-hidden bg-navy">
        <PrismBackground />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[1]" />
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-[800px] mx-auto w-full px-6 pb-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-white border border-white/20 mb-4">
              {article.category}
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 py-12">
        <article>
          {/* Title & meta */}
          <h1
            className="text-3xl md:text-[2.6rem] font-black leading-[1.15] tracking-tight mb-4 text-foreground"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {article.title}
          </h1>

          <p className="text-lg text-foreground/60 leading-relaxed mb-6 italic">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {article.readTime}
            </span>
            <div className="ml-auto flex items-center gap-3">
              <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Compartir en LinkedIn">
                <Linkedin size={16} />
              </button>
              <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Compartir en X">
                <Twitter size={16} />
              </button>
              <button className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Compartir">
                <Share2 size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="prose-custom">
            {renderMarkdown(article.content)}
          </div>

          {/* Author box */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Sobre el autor</p>
            <p className="text-sm font-bold text-foreground">Equipo Editorial Tooxs</p>
            <p className="text-sm text-foreground/60 mt-1">
              Tecnología aplicada a la industria y los negocios. Cubrimos IA, automatización y transformación digital para líderes en Latinoamérica.
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 self-start space-y-8">
          {/* Share widget */}
          <div className="p-5 border border-border rounded-lg">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">
              ¿Te resultó útil este artículo?
            </p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} className="text-muted-foreground/40 hover:text-primary transition-colors text-xl">★</button>
              ))}
            </div>
          </div>

          {/* Related */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">
              Más Insights Populares
            </p>
            <div className="space-y-4">
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  to="/newsletter/$slug"
                  params={{ slug: r.slug }}
                  className="group block"
                >
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-primary/50 mt-0.5 shrink-0">{i + 1}.</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {r.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{r.category}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
