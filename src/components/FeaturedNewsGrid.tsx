import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
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

                {/* Permanent gradient for legibility */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent"
                />

                {/* Front content (label + title) */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 transition-transform duration-500 ease-out group-hover:-translate-y-2">
                  <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-white/80 mb-2">
                    {item.category}
                  </span>
                  <h3
                    className="font-bold text-white text-xl leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Sliding back content (excerpt + CTA) */}
                <div
                  className="absolute inset-x-0 bottom-0 z-20 bg-navy/95 backdrop-blur-sm p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                >
                  <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-primary mb-2">
                    {item.category}
                  </span>
                  <h3
                    className="font-bold text-white text-xl leading-snug mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed line-clamp-3 mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white border-b border-white/40 pb-0.5 group-hover:gap-2.5 transition-all">
                    Ampliar <ChevronRight size={16} />
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
