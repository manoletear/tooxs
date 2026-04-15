import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

export interface IndustryService {
  title: string;
  description: string;
}

export interface IndustryMetric {
  value: string;
  label: string;
}

export interface IndustryCapability {
  title: string;
  description: string;
}

export interface IndustryPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  statement: string[];
  services: IndustryService[];
  metrics: IndustryMetric[];
  benchmark: string;
  capabilities: IndustryCapability[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.hero.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-navy/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 md:pb-24 w-full">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {data.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-navy-foreground/90 font-medium mb-4 max-w-2xl">
            {data.hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-navy-foreground/70 max-w-2xl leading-relaxed">
            {data.hero.description}
          </p>
        </div>
      </section>

      {/* Strategic Statement */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            {data.statement.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-6 last:mb-0"
                style={{ fontFamily: "var(--font-emphasis)" }}
              >
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 md:py-20 bg-section-bg">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
              CÓMO AYUDAMOS
            </p>
            <div className="w-16 h-0.5 bg-primary mb-12" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {data.services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={Math.min(i * 80, 400)}>
                <div className="group">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-1">
                    {svc.title}
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-12 text-center">
              IMPACTO MEDIBLE
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {data.metrics.map((metric, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="text-center px-4">
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-xs text-muted-foreground/60 text-center max-w-3xl mx-auto italic leading-relaxed">
              {data.benchmark}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="py-16 md:py-20 border-t">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-10">
              CAPACIDADES DESTACADAS
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {data.capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 100}>
                <div className="rounded-xl border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-bold text-foreground mb-2 flex items-center gap-1">
                    {cap.title}
                    <ChevronRight size={14} className="text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {data.cta.title}
            </h2>
            <p className="text-navy-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              {data.cta.subtitle}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-mint text-navy px-8 py-3.5 rounded-lg font-semibold hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              {data.cta.buttonText} <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
