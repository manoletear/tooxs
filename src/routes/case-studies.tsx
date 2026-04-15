import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Casos de Éxito — TOOXS | Resultados Reales con IA" },
      { name: "description", content: "Descubre cómo TOOXS ha ayudado a empresas a transformar sus operaciones con IA, automatización y analítica avanzada. Resultados medibles en múltiples industrias." },
      { property: "og:title", content: "Casos de Éxito — TOOXS" },
      { property: "og:description", content: "Resultados reales: cómo empresas líderes transforman sus operaciones con TOOXS." },
      { property: "og:url", content: "https://www.tooxs.com/case-studies" },
      { name: "twitter:title", content: "Casos de Éxito — TOOXS" },
      { name: "twitter:description", content: "Resultados reales de IA y automatización en empresas industriales." },
      { name: "keywords", content: "casos de éxito, transformación digital, resultados IA, automatización empresas, TOOXS" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/case-studies" },
    ],
  }),
  component: CaseStudiesPage,
});

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Digital Transformation",
    title: "Tech Company Scales Revenue by 300%",
    description: "A mid-size SaaS company was struggling to break through a revenue plateau. Through comprehensive digital strategy and go-to-market optimization, we helped them triple revenue in 18 months.",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "Operations",
    title: "Manufacturing Firm Cuts Costs by 40%",
    description: "Strategic operational restructuring for a 500-employee manufacturing firm that dramatically reduced overhead while improving output quality and employee satisfaction.",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
    category: "Financial Advisory",
    title: "Startup Secures $50M in Funding",
    description: "Financial strategy and pitch optimization that led to a successful Series B funding round, positioning the company for international expansion.",
  },
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
    category: "Business Strategy",
    title: "Retail Chain Expands to 50 New Locations",
    description: "Developed a comprehensive expansion strategy including market analysis, site selection, and operational playbooks that enabled rapid, profitable growth.",
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
    category: "Operations",
    title: "Healthcare Network Improves Patient Satisfaction by 60%",
    description: "Process reengineering and digital workflow implementation that transformed patient experience across a network of 12 clinics.",
  },
  {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
    category: "Digital Transformation",
    title: "Financial Services Firm Goes Digital-First",
    description: "End-to-end digital transformation that modernized legacy systems, improved customer onboarding by 80%, and reduced operational risk.",
  },
];

function CaseStudiesPage() {
  return (
    <div>
      <PageHero
        title="Case Studies"
        subtitle="Real results from real partnerships. See how we've helped businesses transform."
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, i) => (
              <ScrollReveal key={cs.title} delay={i * 100}>
                <div className="bg-card rounded-xl overflow-hidden border hover:shadow-lg hover:-translate-y-1 transition-all duration-400 group h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-3">{cs.category}</span>
                    <h3 className="text-lg font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{cs.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cs.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
