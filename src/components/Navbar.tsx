import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import tooxsLogo from "@/assets/tooxs-logo.png";

const navLinks = [
  { to: "/" as const, label: "Inicio" },
  { to: "/services" as const, label: "Capacidades" },
  { to: "/about" as const, label: "Industrias", hasDropdown: true },
  { to: "/case-studies" as const, label: "Casos" },
  { to: "/activar-ia" as const, label: "Activar IA" },
  { to: "/newsletter" as const, label: "Newsletter" },
];

const industries = [
  { label: "Minería y Utilities", to: "/industrias/mineria-utilities" },
  { label: "Retail y Logística", to: "/industrias/retail-logistica" },
  { label: "Banca y Finanzas", to: "/industrias/banca-finanzas" },
  { label: "Agroindustria", to: "/industrias/agroindustria" },
  { label: "Telecomunicaciones", to: "/industrias/telecomunicaciones" },
  { label: "Salud", to: "/industrias/salud" },
  { label: "Automotriz", to: "/industrias/automotriz" },
  { label: "Real Estate", to: "/industrias/real-estate" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIndustriesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setIndustriesOpen(false), 200);
  };

  // No column splitting needed — only 7 industries now

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center justify-between rounded-xl px-6 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-lg h-14 max-w-4xl"
            : "bg-white h-14 max-w-4xl"
        } w-full`}
      >
        <Link to="/" className="flex items-center justify-center group flex-shrink-0 self-stretch">
          <img src={tooxsLogo} alt="Tooxs" className="h-[46px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? "text-navy"
                      : "text-navy/60 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ) : (
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
            )
          )}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-1.5 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:brightness-110 transition-all duration-300"
        >
          Contacto
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-navy hover:text-navy/70 transition-colors duration-300"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Industries Mega Dropdown */}
      {industriesOpen && (
        <div
          className="hidden lg:block absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-xl px-10 py-8 animate-fade-in z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold text-base mb-6 hover:underline"
          >
            Industrias <ArrowRight size={16} />
          </Link>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {industries.map((ind) => (
              <Link
                key={ind.to}
                to={ind.to as any}
                onClick={() => setIndustriesOpen(false)}
                className="text-sm text-navy/70 hover:text-primary transition-colors duration-200"
              >
                {ind.label}
              </Link>
            ))}
          </div>
        </div>
      )}

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
            className="inline-flex items-center gap-2 bg-mint text-white px-5 py-2.5 rounded-full text-sm font-medium mt-2"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
