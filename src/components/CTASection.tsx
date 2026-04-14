import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function CTASection({
  title = "Ready to Transform Your Business?",
  subtitle = "Let's work together to unlock your company's full potential.",
  buttonText = "Book a Consultation",
}: CTASectionProps) {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)" }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <p className="text-navy-foreground/80 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
        >
          {buttonText} <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
