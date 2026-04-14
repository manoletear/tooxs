import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-navy font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>S</span>
              </div>
              <span className="font-semibold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>Stratwell</span>
            </div>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              Empowering businesses to achieve sustainable growth through strategic consulting and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/services" as const, label: "Services" },
                { to: "/about" as const, label: "About Us" },
                { to: "/case-studies" as const, label: "Case Studies" },
                { to: "/faqs" as const, label: "FAQs" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm text-navy-foreground/70 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <div className="space-y-2 text-sm text-navy-foreground/70">
              <p>Business Strategy</p>
              <p>Operations Optimization</p>
              <p>Digital Transformation</p>
              <p>Financial Advisory</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-3 text-sm text-navy-foreground/70">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                <span>info@stratwell.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-foreground/50">© 2024 Stratwell Consulting. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-navy-foreground/50 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-navy-foreground/50 hover:text-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
