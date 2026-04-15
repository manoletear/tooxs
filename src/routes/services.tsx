import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Cog, Monitor, DollarSign, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Stratwell Consulting" },
      { name: "description", content: "Comprehensive consulting services: Business Strategy, Operations Optimization, Digital Transformation, and Financial Advisory." },
      { property: "og:title", content: "Our Services — Stratwell Consulting" },
      { property: "og:description", content: "Comprehensive consulting services for sustainable business growth." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BarChart3,
    title: "Business Strategy",
    description: "We help you define a clear strategic direction that aligns your organization and accelerates growth.",
    features: ["Market analysis & positioning", "Competitive strategy", "Growth roadmaps", "Strategic planning workshops"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Cog,
    title: "Operations Optimization",
    description: "Streamline your processes to reduce costs, improve quality, and increase organizational agility.",
    features: ["Process reengineering", "Supply chain optimization", "Lean methodology", "Performance management"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
  {
    icon: Monitor,
    title: "Digital Transformation",
    description: "Leverage technology to transform your business model and create sustainable competitive advantages.",
    features: ["Digital strategy", "Technology roadmaps", "Change management", "Data & analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    icon: DollarSign,
    title: "Financial Advisory",
    description: "Expert financial guidance to optimize your capital structure and maximize value for all stakeholders.",
    features: ["M&A advisory", "Financial modeling", "Risk management", "Capital optimization"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        title="Our Expertise"
        subtitle="Comprehensive consulting solutions tailored to drive your business forward."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, idx) => (
            <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center`}>
              <ScrollReveal className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="text-navy" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-navy mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle size={16} className="text-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                  Get Started <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={200} className={`rounded-xl overflow-hidden ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
