import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import tooxsLogo from "@/assets/tooxs-logo.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center justify-between rounded-full px-6 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg h-14 max-w-4xl"
            : "bg-white/90 backdrop-blur-md h-14 max-w-4xl"
        } w-full`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group flex-shrink-0">
          <img src={tooxsLogo} alt="Tooxs" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-all duration-300 ${
                location.pathname === link.to
                  ? "text-navy"
                  : "text-navy/60 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-1.5 border border-navy/20 text-navy px-5 py-2 rounded-full text-sm font-medium hover:bg-navy hover:text-white transition-all duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-navy hover:text-navy/70 transition-colors duration-300"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl px-6 py-4 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-navy"
                  : "text-navy/60 hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-2 border border-navy/20 text-navy px-5 py-2.5 rounded-full text-sm font-medium mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
