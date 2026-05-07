import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import tooxsLogo from "@/assets/tooxs-logo.png";

const navLinks = [
  { to: "/" as const, label: "Inicio" },
  { to: "/services" as const, label: "Capacidades", dropdown: "capabilities" as const },
  { to: "/about" as const, label: "Industrias", dropdown: "industries" as const },
  
  { to: "/activar-ia" as const, label: "Activar IA" },
  { to: "/newsletter" as const, label: "Insights 2026" },
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

const capabilities = [
  { label: "Datos e IA", to: "/services" },
  { label: "Automatización de Procesos", to: "/services" },
  { label: "Integración y Plataformas", to: "/services" },
  { label: "Analítica Operacional", to: "/services" },
  { label: "Servicios Cloud", to: "/services" },
  { label: "Aplicación en Procesos Críticos", to: "/services" },
  { label: "Estrategia Aplicada", to: "/services" },
  { label: "Servicios y Licenciamiento Microsoft", to: "/services" },
];

type DropdownKey = "capabilities" | "industries" | null;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const detect = () => {
      setScrolled(window.scrollY > 50);
      // Probe a point just below the navbar to find the section behind it
      const probeY = 80;
      const probeX = window.innerWidth / 2;
      const el = document.elementFromPoint(probeX, probeY) as HTMLElement | null;
      if (!el) return;
      const themed = el.closest<HTMLElement>("[data-nav-theme]");
      if (themed) {
        const t = themed.dataset.navTheme;
        if (t === "dark" || t === "light") {
          setTheme(t);
          return;
        }
      }
      // Fallback: sample background color brightness
      let node: HTMLElement | null = el;
      while (node) {
        const bg = getComputedStyle(node).backgroundColor;
        const m = bg.match(/rgba?\(([^)]+)\)/);
        if (m) {
          const parts = m[1].split(",").map((v) => parseFloat(v));
          const [r, g, b] = parts;
          const a = parts[3] ?? 1;
          if (a > 0.1) {
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            setTheme(luminance < 0.6 ? "dark" : "light");
            return;
          }
        }
        node = node.parentElement;
      }
      setTheme("light");
    };
    detect();
    window.addEventListener("scroll", detect, { passive: true });
    window.addEventListener("resize", detect);
    return () => {
      window.removeEventListener("scroll", detect);
      window.removeEventListener("resize", detect);
    };
  }, [location.pathname]);

  const handleMouseEnter = (key: DropdownKey) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const onDark = theme === "dark";
  const textBase = onDark ? "text-white/70 hover:text-white" : "text-navy/60 hover:text-navy";
  const textActive = onDark ? "text-white" : "text-navy";
  const iconColor = onDark ? "text-white" : "text-navy";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center justify-between rounded-xl px-6 transition-all duration-500 ${
          scrolled
            ? onDark
              ? "bg-white/10 backdrop-blur-xl border border-white/15 shadow-lg h-14 max-w-4xl"
              : "bg-white/60 backdrop-blur-xl border border-navy/10 shadow-lg h-14 max-w-4xl"
            : onDark
              ? "bg-white/5 backdrop-blur-md border border-white/10 h-14 max-w-4xl"
              : "bg-white/40 backdrop-blur-md border border-navy/10 h-14 max-w-4xl"
        } w-full`}
      >
        <Link to="/" className="flex items-center justify-center group flex-shrink-0 self-stretch">
          <img src={tooxsLogo} alt="Tooxs" className="h-[46px] w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to ||
              (link.to === "/about" && location.pathname.startsWith("/industrias")) ||
              (link.to === "/services" && location.pathname.startsWith("/services"));
            return "dropdown" in link && link.dropdown ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.dropdown!)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.to}
                  className={`relative inline-flex items-center gap-1 text-sm font-medium pb-1 transition-all duration-300 ${
                    isActive ? textActive : textBase
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      openDropdown === link.dropdown ? "rotate-180" : ""
                    }`}
                  />
                  {isActive && (
                    <span className="absolute left-0 right-4 -bottom-0.5 h-[2px] rounded-full bg-primary" />
                  )}
                </Link>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium pb-1 transition-all duration-300 ${
                  isActive ? textActive : textBase
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-1.5 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:brightness-110 transition-all duration-300"
        >
          Contacto
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${iconColor} hover:opacity-70 transition-opacity duration-300`}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Capabilities Mega Dropdown */}
      {openDropdown === "capabilities" && (
        <div
          className="hidden lg:block absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-xl px-10 py-8 animate-fade-in z-50"
          onMouseEnter={() => handleMouseEnter("capabilities")}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold text-base mb-6 hover:underline"
            onClick={() => setOpenDropdown(null)}
          >
            Capacidades <ArrowRight size={16} />
          </Link>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {capabilities.map((cap, i) => (
              <Link
                key={i}
                to={cap.to}
                onClick={() => setOpenDropdown(null)}
                className="text-sm text-navy/70 hover:text-primary transition-colors duration-200"
              >
                {cap.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Industries Mega Dropdown */}
      {openDropdown === "industries" && (
        <div
          className="hidden lg:block absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-xl px-10 py-8 animate-fade-in z-50"
          onMouseEnter={() => handleMouseEnter("industries")}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold text-base mb-6 hover:underline"
            onClick={() => setOpenDropdown(null)}
          >
            Industrias <ArrowRight size={16} />
          </Link>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {industries.map((ind) => (
              <Link
                key={ind.to}
                to={ind.to as any}
                onClick={() => setOpenDropdown(null)}
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
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to ||
              (link.to === "/about" && location.pathname.startsWith("/industrias")) ||
              (link.to === "/services" && location.pathname.startsWith("/services"));
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`relative block text-sm font-medium py-2 pl-3 transition-colors duration-300 ${
                  isActive ? "text-navy" : "text-navy/60 hover:text-navy"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[2px] rounded-full bg-primary" />
                )}
                {link.label}
              </Link>
            );
          })}
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
