import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, ChevronRight, Linkedin, Instagram, Share2 } from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { PrismBackground } from "@/components/PrismBackground";
import { toast } from "sonner";
import { useEffect, useState } from "react";

function ArticleRating({ slug }: { slug: string }) {
  const storageKey = `tooxs:article-rating:${slug}`;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(storageKey);
    if (saved) setRating(Number(saved) || 0);
  }, [storageKey]);

  const handleRate = (n: number) => {
    setRating(n);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, String(n));
    }
    toast.success(`¡Gracias por tu valoración de ${n} estrella${n > 1 ? "s" : ""}!`);
  };

  const active = hover || rating;

  return (
    <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => handleRate(n)}
          onMouseEnter={() => setHover(n)}
          aria-label={`Valorar con ${n} ${n === 1 ? "estrella" : "estrellas"}`}
          aria-pressed={rating === n}
          className={`text-xl leading-none transition-colors cursor-pointer ${
            n <= active ? "text-primary" : "text-muted-foreground/40 hover:text-primary/70"
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export const Route = createFileRoute("/newsletter/$slug")({
  head: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) return { meta: [{ title: "Artículo no encontrado — Tooxs" }] };
    return {
      meta: [
        { title: `${article.title} — Tooxs Insights` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:url", content: `https://www.tooxs.com/newsletter/${article.slug}` },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.image },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.excerpt },
        { name: "twitter:image", content: article.image },
        { name: "article:published_time", content: article.date },
        { name: "article:author", content: "Tooxs" },
        { name: "keywords", content: `${article.category}, IA, automatización, Tooxs, ${article.title.split(' ').slice(0, 3).join(', ')}` },
      ],
      links: [
        { rel: "canonical", href: `https://www.tooxs.com/newsletter/${article.slug}` },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "datePublished": article.date,
            "author": { "@type": "Organization", "name": "Tooxs" },
            "publisher": {
              "@type": "Organization",
              "name": "Tooxs",
              "url": "https://www.tooxs.com"
            },
            "mainEntityOfPage": `https://www.tooxs.com/newsletter/${article.slug}`
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
        <Link to="/newsletter" className="text-primary hover:underline">
          Volver a Insights 2026
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

  const articleUrl = `https://tooxs.lovable.app/newsletter/${slug}`;
  const shareText = `${article.title} — Tooxs Insights`;

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      "_blank",
      "noopener,noreferrer,width=600,height=500"
    );
  };

  const shareInstagram = () => {
    window.open("https://www.instagram.com/tooxs_digital/", "_blank", "noopener,noreferrer");
  };

  const shareGeneral = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: articleUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(articleUrl);
      toast.success("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="min-h-screen bg-background">
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
              <button onClick={shareLinkedIn} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Compartir en LinkedIn">
                <Linkedin size={16} />
              </button>
              <button onClick={shareInstagram} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Ver en Instagram">
                <Instagram size={16} />
              </button>
              <button onClick={shareGeneral} className="p-2 rounded-full hover:bg-muted transition-colors" aria-label="Compartir">
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
            <ArticleRating slug={slug} />
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
