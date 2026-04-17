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
 * Stable selection of the first N articles from the pool.
 * Avoids Math.random() to prevent SSR/CSR hydration mismatches.
 */
function pickStable<T>(pool: T[], n: number): T[] {
  return pool.slice(0, n);
}

export function FeaturedNewsGrid({
  eyebrow = "NEWSLETTER",
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
                Ver todo el newsletter <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 100}>
              <Link
                to="/newsletter/$slug"
                params={{ slug: item.slug }}
                className="group block"
              >
                <div className="rounded-xl overflow-hidden mb-4 aspect-[5/3] bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-bold text-navy text-lg flex items-center gap-1 mb-2 mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                  <ChevronRight size={16} className="flex-shrink-0" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedNewsGrid;
