import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Cog, Monitor, DollarSign, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CTASection } from "../components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stratwell Consulting — Strategy That Powers Growth" },
      { name: "description", content: "Empowering businesses to achieve sustainable growth through strategic consulting and innovative solutions." },
      { property: "og:title", content: "Stratwell Consulting — Strategy That Powers Growth" },
      { property: "og:description", content: "Empowering businesses to achieve sustainable growth through strategic consulting." },
    ],
  }),
  component: Index,
});

/* ── Animated Counter ── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = Math.ceil(end / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
        {prefix}{count}{suffix}
      </div>
    </div>
  );
}

/* ── Testimonial data ── */
const testimonials = [
  {
    quote: "Stratwell's strategic approach transformed our operations and doubled our efficiency within a year.",
    name: "Sarah Johnson",
    title: "CEO, TechVentures Inc.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Their financial advisory services helped us navigate a complex merger with outstanding results.",
    name: "Michael Chen",
    title: "CFO, Global Dynamics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "The digital transformation roadmap they created was exactly what we needed to stay competitive.",
    name: "Emily Rodriguez",
    title: "COO, Innovation Labs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    quote: "Working with Stratwell was a game-changer. Their insights were invaluable to our growth strategy.",
    name: "David Thompson",
    title: "Founder, NextGen Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const services = [
  { icon: BarChart3, title: "Business Strategy", description: "Develop comprehensive strategies that align with your vision and drive measurable growth across all business dimensions." },
  { icon: Cog, title: "Operations Optimization", description: "Streamline processes and improve efficiency to reduce costs while maintaining the highest quality standards." },
  { icon: Monitor, title: "Digital Transformation", description: "Leverage cutting-edge technology to modernize your business and create competitive advantages in the digital age." },
  { icon: DollarSign, title: "Financial Advisory", description: "Expert financial guidance to optimize capital structure, manage risk, and maximize shareholder value." },
];

const caseStudies = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Digital Transformation",
    title: "Tech Company Scales Revenue by 300%",
    description: "How we helped a mid-size tech company triple their revenue through digital strategy and operational improvements.",
  },
  {
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    category: "Operations",
    title: "Manufacturing Firm Cuts Costs by 40%",
    description: "Strategic operational restructuring that dramatically reduced overhead while improving output quality.",
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop",
    category: "Financial Advisory",
    title: "Startup Secures $50M in Funding",
    description: "Financial strategy and pitch optimization that led to a successful Series B funding round.",
  },
];

const steps = [
  { num: "01", title: "Understand", description: "We immerse ourselves in your business to understand challenges, goals, and opportunities." },
  { num: "02", title: "Strategize", description: "We develop tailored strategies based on data-driven insights and industry expertise." },
  { num: "03", title: "Implement", description: "We work alongside your team to execute strategies with precision and accountability." },
  { num: "04", title: "Measure", description: "We track performance metrics and refine approaches to ensure lasting results." },
];

function Index() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)" }}
      >
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80)" }} />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-foreground leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
              Strategy That Powers{" "}
              <em className="text-gold">Your Next Level</em>{" "}
              of Growth
            </h1>
            <p className="mt-6 text-lg md:text-xl text-navy-foreground/80 max-w-xl leading-relaxed">
              We partner with ambitious businesses to develop and execute strategies that deliver lasting, measurable results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-navy px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Book a Consultation <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-navy-foreground/30 text-navy-foreground px-7 py-3.5 rounded-lg font-semibold hover:bg-navy-foreground/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
              Trusted by Businesses Worldwide
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Counter end={92} suffix="%" />
              <p className="mt-2 text-sm text-muted-foreground">Client Retention</p>
            </div>
            <div className="text-center">
              <Counter end={48} prefix="$" suffix="M" />
              <p className="mt-2 text-sm text-muted-foreground">Revenue Generated</p>
            </div>
            <div className="text-center">
              <Counter end={200} suffix="+" />
              <p className="mt-2 text-sm text-muted-foreground">Businesses Served</p>
            </div>
            <div className="text-center">
              <Counter end={15} suffix="+" />
              <p className="mt-2 text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group bg-card rounded-xl p-8 border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="text-navy" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
            {/* CTA Card */}
            <Link
              to="/services"
              className="relative rounded-xl overflow-hidden flex items-end p-8 min-h-[280px] group"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop)" }}
            >
              <div className="absolute inset-0 bg-navy/70 group-hover:bg-navy/60 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-navy-foreground mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Start Your Growth Journey</h3>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold">
                  Explore All Services <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
                Featured Case Studies
              </h2>
            </div>
            <Link to="/case-studies" className="hidden md:inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-gold transition-colors">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-shadow group">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-3">{cs.category}</span>
                  <h3 className="text-lg font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{cs.title}</h3>
                  <p className="text-muted-foreground text-sm">{cs.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/case-studies" className="md:hidden mt-8 inline-flex items-center gap-1 text-navy font-semibold text-sm hover:text-gold transition-colors">
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
            What Our Clients Say
          </h2>
        </div>
        <div className="flex gap-6 px-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-[340px] max-w-[400px] snap-start bg-card rounded-xl p-8 border flex-shrink-0">
              <Quote className="text-gold/40 mb-4" size={32} />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-sm text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Goal ── */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">Our Goal</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Transforming Strategy into Results
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Stratwell, we believe every business has untapped potential. Our mission is to uncover that potential and transform it into tangible, sustainable growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We combine decades of industry expertise with innovative methodologies to deliver strategies that don't just look good on paper — they deliver real-world results.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=500&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Approach
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-gold font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
      <section className="py-16 bg-section-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Trusted By Industry Leaders</p>
        </div>
        <div className="relative">
          <div className="flex animate-marquee items-center gap-16">
            {[...Array(2)].flatMap((_, i) =>
              ["Acme Corp", "GlobalTech", "Pinnacle", "Vertex", "Horizon", "Summit", "Apex", "Zenith"].map((name) => (
                <div key={`${name}-${i}`} className="flex-shrink-0 text-2xl font-bold text-muted-foreground/30 tracking-wider" style={{ fontFamily: 'var(--font-heading)' }}>
                  {name}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </div>
  );
}
