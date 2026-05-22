import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

const faqs = [
  { q: "¿Qué industrias atiende Tooxs?", a: "Trabajamos con empresas de minería, retail y logística, banca y finanzas, salud, telecomunicaciones, agroindustria, automotriz y real estate. Nuestra metodología se adapta a sectores intensivos en datos y procesos." },
  { q: "¿Cuánto dura un proyecto típico con Tooxs?", a: "Depende del alcance. Un diagnóstico o piloto de IA toma entre 6 y 12 semanas. Programas de transformación end-to-end (estrategia + implementación + MLOps) van de 6 a 18 meses." },
  { q: "¿Qué diferencia a Tooxs de otras consultoras?", a: "Combinamos consultoría estratégica con capacidad de implementación técnica real (IA, RPA, analítica avanzada). No entregamos solo recomendaciones: dejamos soluciones en producción con métricas medibles." },
  { q: "¿Cómo miden el éxito de cada proyecto?", a: "Definimos KPIs y ROI desde el inicio (reducción de costos, aumento de ingresos, tiempos de ciclo). Monitoreamos continuamente con dashboards y revisiones de impacto." },
  { q: "¿Trabajan con startups o solo con grandes empresas?", a: "Atendemos principalmente a empresas medianas y grandes en Chile y Latinoamérica, pero también acompañamos a startups de alto crecimiento que necesitan escalar operaciones con IA y automatización." },
  { q: "¿Cuál es la estructura de precios?", a: "Cada propuesta se ajusta al alcance, duración y complejidad. Ofrecemos modelos por proyecto, retainer mensual y esquemas basados en resultados. Contáctanos para una propuesta personalizada." },
  { q: "¿Pueden integrarse con nuestro equipo interno?", a: "Sí. Trabajamos como extensión de tu equipo, con transferencia de conocimiento y capacitación incluida. La meta es que tu organización quede autónoma." },
  { q: "¿Ofrecen servicios remotos o presenciales?", a: "Ambos. Operamos con modelos híbridos: presencia en terreno para diagnóstico e implementación crítica, y trabajo remoto para desarrollo continuo. Tenemos presencia en Chile y atendemos toda Latinoamérica." },
  { q: "¿Cuál es el primer paso para trabajar con Tooxs?", a: "Una conversación inicial sin costo donde entendemos tu contexto, retos y objetivos. Agenda una reunión desde nuestra página de contacto y exploramos juntos cómo aportar valor." },
  { q: "¿Ofrecen soporte continuo después del proyecto?", a: "Sí. Ofrecemos retainers de soporte, MLOps y mejora continua para que las soluciones implementadas sigan generando valor en el tiempo." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes — Tooxs | IA y Automatización" },
      { name: "description", content: "Respuestas a las preguntas más frecuentes sobre los servicios de consultoría en IA, automatización y transformación digital de Tooxs." },
      { property: "og:title", content: "Preguntas Frecuentes — Tooxs" },
      { property: "og:description", content: "Resuelve tus dudas sobre nuestros servicios de IA y automatización." },
      { property: "og:url", content: "https://www.tooxs.com/faqs" },
      { name: "twitter:title", content: "FAQ — Tooxs" },
      { name: "twitter:description", content: "Preguntas frecuentes sobre IA, automatización y consultoría tecnológica." },
      { name: "keywords", content: "preguntas frecuentes, FAQ, consultoría IA, automatización, Tooxs" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/faqs" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQsPage,
});

function FAQsPage() {
  return (
    <div>
      <PageHero
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber sobre trabajar con Tooxs."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <AccordionItem value={`faq-${i}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline" style={{ fontFamily: 'var(--font-heading)' }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="¿Aún tienes preguntas?"
        subtitle="Nuestro equipo está listo para ayudarte. Conversemos."
        buttonText="Contáctanos"
      />
    </div>
  );
}
