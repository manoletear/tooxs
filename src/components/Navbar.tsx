import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Services" },
  { to: "/about" as const, label: "About Us" },
  { to: "/case-studies" as const, label: "Case Studies" },
  { to: "/faqs" as const, label: "FAQs" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-navy/95 shadow-lg shadow-navy/20 border-b border-navy-foreground/5"
          : "backdrop-blur-md bg-navy/60 border-b border-navy-foreground/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-navy font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>S</span>
            </div>
            <span className="text-navy-foreground font-semibold text-lg tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Stratwell
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 ${
                  location.pathname === link.to
                    ? "text-gold after:w-full"
                    : "text-navy-foreground/80 hover:text-navy-foreground after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Us <ArrowRight size={16} />
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-navy-foreground hover:text-gold transition-colors duration-300"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy border-t border-navy-foreground/10 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-gold"
                  : "text-navy-foreground/80 hover:text-navy-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 rounded-lg text-sm font-semibold mt-2"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
