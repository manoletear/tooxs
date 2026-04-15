import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";
import { PrismBackground } from "./PrismBackground";
import type { LucideIcon } from "lucide-react";

export interface ServiceValue {
  title: string;
  description: string;
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServicePageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  statement: string[];
  values: ServiceValue[];
  valuesLabel?: string;
  metrics: ServiceMetric[];
  metricsSource: string;
  capabilities: string[];
  cta: {
    title: string;
    buttonText: string;
  };
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  return (
    <div>
      {/* ══════ HERO ══════ */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.hero.image})` }}
          role="img"
          aria-label={`Imagen de servicio: ${data.hero.title}`}
        />
        <div className="absolute inset-0 bg-navy/80" />
        <PrismBackground className="opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 md:pb-24 w-full">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-mint mb-4">
              Servicios TOOXS
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {data.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-navy-foreground/90 font-medium mb-4 max-w-2xl">
              {data.hero.subtitle}
            </p>
            <p className="text-base md:text-lg text-navy-foreground/60 max-w-2xl leading-relaxed">
              {data.hero.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ STATEMENT ══════ */}
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

      {/* ══════ HOW WE GENERATE VALUE ══════ */}
      <section className="py-16 md:py-20 bg-section-bg">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
              {data.valuesLabel || "CÓMO GENERAMOS VALOR"}
            </p>
            <div className="w-16 h-0.5 bg-primary mb-12" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {data.values.map((val, i) => (
              <ScrollReveal key={val.title} delay={Math.min(i * 100, 400)}>
                <div className="group">
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {val.title}
                    <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-10">
                    {val.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ IMPACT METRICS ══════ */}
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
              {data.metricsSource}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ CAPABILITIES ══════ */}
      <section className="py-16 md:py-20 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-10">
              CAPACIDADES CLAVE
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {data.capabilities.map((cap, i) => (
              <ScrollReveal key={cap} delay={i * 80}>
                <div className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cap}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="bg-navy py-20 md:py-24 relative overflow-hidden">
        <PrismBackground className="opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-foreground mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {data.cta.title}
            </h2>
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
