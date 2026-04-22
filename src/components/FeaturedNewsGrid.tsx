import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ARTICLES, type Article } from "@/data/articles";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

interface FeaturedNewsGridProps {
  /** Optional eyebrow above the title */
  eyebrow?: string;
  /** Section title */
  title?: string;
  /** Optional CTA link to the full newsletter */
  showCta?: boolean;
  /** Number of articles to show (defaults to 3) */
  count?: number;
  /** Optional seed to keep the same selection across re-renders */
  seed?: string;
}

/**
 * Stable selection: take the first N articles from the pool.
 * Avoids Math.random() to prevent SSR/CSR hydration mismatches.
 */
function pickStable<T>(pool: T[], n: number): T[] {
  return pool.slice(0, Math.max(0, n));
}

export function FeaturedNewsGrid({
  eyebrow = "INSIGHTS 2026",
  title = "Artículos destacados",
  showCta = true,
  count = 3,
}: FeaturedNewsGridProps) {
  // Memoize so selection is stable while the component is mounted
  const articles = useMemo(() => pickStable(ARTICLES, count), [count]);

  return (
    <section className="py-16 md:py-20 border-t bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                {eyebrow}
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h2>
            </div>
            {showCta && (
              <Link
                to="/newsletter"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
              >
                Ver todo Insights 2026 <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((item: Article, i: number) => (
            <ScrollReveal key={item.slug} delay={i * 100}>
              <Link
                to="/newsletter/$slug"
                params={{ slug: item.slug }}
                aria-label={`Ampliar: ${item.title}`}
                className="group relative block rounded-xl overflow-hidden bg-navy aspect-[5/7] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {/* Background image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Top-left category label (always visible, like Accenture) */}
                <div className="absolute top-5 left-5 right-5 z-20">
                  <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-white">
                    {item.category}
                  </span>
                </div>

                {/* Default state: title at top under category — fades out on hover */}
                <div className="absolute top-14 left-5 right-5 z-10 transition-opacity duration-300 ease-out group-hover:opacity-0">
                  <h3
                    className="font-bold text-white text-xl md:text-2xl leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Hover overlay: white panel sliding up with summary + CTA */}
                <div
                  className="absolute inset-x-0 bottom-0 z-30 bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                >
                  <p className="text-xs text-muted-foreground mb-2">
                    {item.date} · {item.readTime}
                  </p>
                  <h3
                    className="font-bold text-foreground text-base leading-snug mb-3 line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    Leer más <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedNewsGrid;
