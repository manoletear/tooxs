import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Users } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Stratwell Consulting" },
      { name: "description", content: "Learn about Stratwell Consulting — our mission, values, and the team behind our success." },
      { property: "og:title", content: "About Us — Stratwell Consulting" },
      { property: "og:description", content: "Learn about Stratwell Consulting — our mission, values, and the team behind our success." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Excellence", description: "We hold ourselves to the highest standards in everything we do." },
  { icon: Eye, title: "Transparency", description: "Open communication and honest counsel are the foundation of trust." },
  { icon: Heart, title: "Integrity", description: "We act ethically and always put our clients' best interests first." },
  { icon: Users, title: "Collaboration", description: "We work as an extension of your team, not as outside consultants." },
];

const team = [
  { name: "Alexandra Mitchell", role: "Managing Partner", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face" },
  { name: "James Richardson", role: "Senior Strategy Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face" },
  { name: "Maria Santos", role: "Head of Operations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face" },
  { name: "Robert Kim", role: "Chief Financial Advisor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face" },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Driven by purpose. Guided by expertise. Committed to your success."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Built on a Foundation of Trust and Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded over 15 years ago, Stratwell Consulting began with a simple vision: to help businesses unlock their true potential through strategic excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a boutique strategy firm has grown into a comprehensive consulting practice serving over 200 businesses worldwide. Our success is measured by our clients' success — a philosophy that has driven our 92% client retention rate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to innovate our methodologies while staying true to the core principles that built our reputation: deep expertise, genuine partnership, and unwavering commitment to delivering results.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop" alt="Team working together" className="w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>What Drives Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center bg-card rounded-xl p-8 border">
                <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-5">
                  <v.icon className="text-navy" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>Meet the Leadership</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((t) => (
              <div key={t.name} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-5">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="font-semibold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
