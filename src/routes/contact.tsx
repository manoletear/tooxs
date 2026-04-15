import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contáctanos — Tooxs" },
      { name: "description", content: "Ponte en contacto con Tooxs. Agenda una consulta y comienza tu transformación hoy." },
      { property: "og:title", content: "Contáctanos — Tooxs" },
      { property: "og:description", content: "Agenda una consulta y comienza tu transformación hoy." },
    ],
  }),
  component: ContactPage,
});

function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Insert the hs-form-frame div
    el.innerHTML = '<div class="hs-form-frame" data-region="na1" data-form-id="ce71cdbb-2192-4264-af88-8060d3dc013a" data-portal-id="24156430"></div>';

    // Load the script if not already present
    const existing = document.querySelector('script[src*="hsforms.net/forms/embed/24156430"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/embed/24156430.js";
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return <div ref={containerRef} />;
}

function ContactPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

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
            <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-foreground leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Iniciemos la <em className="text-mint">conversación</em>
              </h1>
              <p className="text-navy-foreground/80 text-lg leading-relaxed mb-10 max-w-md">
                ¿Listo para dar el siguiente paso? Contáctanos y conversemos sobre cómo podemos ayudar a tu negocio a alcanzar su máximo potencial.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Teléfono", value: "+56 2 2345 6789" },
                  { icon: Mail, label: "Email", value: "contacto@tooxs.com" },
                  { icon: MapPin, label: "Dirección", value: "Santiago, Chile" },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    style={{ transitionDelay: `${500 + i * 150}ms` }}
                  >
                    <div className="w-10 h-10 bg-mint/20 rounded-lg flex items-center justify-center">
                      <item.icon size={18} className="text-mint" />
                    </div>
                    <div>
                      <p className="text-navy-foreground/60 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-navy-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — HubSpot Form */}
            <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <HubSpotForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
