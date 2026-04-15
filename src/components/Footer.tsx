import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import tooxsLogo from "@/assets/tooxs-logo.png";

export function Footer() {
  return (
    <footer className="bg-footer-bg text-[#9CA3AF]">
      <div className="border-t border-[#1F2937]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={tooxsLogo} alt="TOOXS" className="h-8 w-auto mb-4" />
            <p className="text-sm leading-relaxed">
              Automatización inteligente para empresas chilenas. RPA, IA y soluciones a medida.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Enlaces rápidos</h4>
            <div className="space-y-2">
              {[
                { to: "/" as const, label: "Inicio" },
                { to: "/about" as const, label: "Industrias" },
                { to: "/services" as const, label: "Servicios" },
                { to: "/case-studies" as const, label: "Casos de éxito" },
                { to: "/faqs" as const, label: "Blog" },
                { to: "/contact" as const, label: "Contacto" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block text-sm hover:text-mint transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-mint" />
                <span>contacto@tooxs.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-mint" />
                <span>+56 2 2435 6262</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-mint mt-0.5" />
                <span>Av. Manquehue Nte. 958, 7561271 Las Condes, Región Metropolitana</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">Síguenos</h4>
            <a href="https://www.linkedin.com/company/tooxs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-mint transition-colors">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-[#1F2937] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">© 2026 TOOXS. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-[#6B7280] hover:text-mint text-sm transition-colors">Política de privacidad</a>
            <a href="#" className="text-[#6B7280] hover:text-mint text-sm transition-colors">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
