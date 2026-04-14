import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Stratwell Consulting" },
      { name: "description", content: "Get in touch with Stratwell Consulting. Book a consultation and start your growth journey today." },
      { property: "og:title", content: "Contact Us — Stratwell Consulting" },
      { property: "og:description", content: "Book a consultation and start your growth journey today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", date: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your inquiry! We'll be in touch shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <section
        className="relative min-h-screen flex items-center pt-20"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)" }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-foreground leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Let's <em className="text-gold">Start</em> the Conversation
              </h1>
              <p className="text-navy-foreground/80 text-lg leading-relaxed mb-10 max-w-md">
                Ready to take the next step? Reach out and let's discuss how we can help your business achieve its full potential.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy-foreground/60 text-xs uppercase tracking-wider">Phone</p>
                    <p className="text-navy-foreground font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy-foreground/60 text-xs uppercase tracking-wider">Email</p>
                    <p className="text-navy-foreground font-medium">info@stratwell.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy-foreground/60 text-xs uppercase tracking-wider">Address</p>
                    <p className="text-navy-foreground font-medium">123 Business Ave, Suite 100, New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-xl">
              <h2 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Book a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} required className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
                    <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                  <input name="company" value={formData.company} onChange={handleChange} className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20" placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service of Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20">
                    <option value="">Select a service</option>
                    <option value="strategy">Business Strategy</option>
                    <option value="operations">Operations Optimization</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="financial">Financial Advisory</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full border border-input rounded-lg px-4 py-2.5 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none" placeholder="Tell us about your needs..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-navy text-navy-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Submit Inquiry <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
