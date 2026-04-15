import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-real-estate.jpg";

export const Route = createFileRoute("/industrias/real-estate")({
  head: () => ({
    meta: [
      { title: "Real Estate — Tooxs" },
      { name: "description", content: "Automatización y analítica para desarrolladoras inmobiliarias, corredoras y administradoras de activos. Más velocidad comercial, mejor gestión operativa." },
      { property: "og:title", content: "Real Estate — Tooxs" },
      { property: "og:description", content: "Gestión inmobiliaria más ágil, con datos y automatización." },
    ],
  }),
  component: RealEstatePage,
});

function RealEstatePage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Real Estate",
          subtitle: "Gestión inmobiliaria más ágil, con datos y automatización.",
          description: "Acompañamos a desarrolladoras, corredoras y administradoras de activos a digitalizar procesos comerciales, documentales y operativos para acelerar ventas, reducir fricción y mejorar visibilidad.",
          image: heroImage,
        },
        statement: [
          "El sector inmobiliario opera con volúmenes altos de documentos, procesos manuales y múltiples actores que dificultan la coordinación. Digitalizar no es opcional: es la base para escalar.",
          "Tooxs ayuda a automatizar la gestión documental, comercial y operativa del ciclo inmobiliario, desde la prospección hasta la postventa.",
        ],
        services: [
          { title: "Automatización del ciclo comercial", description: "Desde captación de leads hasta firma de promesa: automatizamos seguimiento, calificación y asignación de prospectos." },
          { title: "Gestión documental inmobiliaria", description: "Digitalización de contratos, promesas, escrituras y documentos legales con OCR e IA para búsqueda y validación instantánea." },
          { title: "Postventa y administración", description: "Automatización de requerimientos postventa, gestión de garantías y coordinación con contratistas." },
          { title: "Analítica comercial y de cartera", description: "Dashboards de velocidad de venta, stock disponible, reservas, desistimientos y proyecciones de cierre." },
          { title: "Integración de sistemas", description: "Conectamos CRM, ERP, portales de venta y plataformas de firma digital para un flujo unificado." },
          { title: "Atención automatizada a clientes", description: "Asistentes inteligentes para consultas de disponibilidad, estado de trámites y agendamiento de visitas." },
        ],
        metrics: [
          { value: "-40% a -60%", label: "tiempo en gestión documental y administrativa" },
          { value: "+25% a +35%", label: "velocidad de cierre comercial con automatización de seguimiento" },
          { value: "-30%", label: "reducción de errores en contratos y documentos legales" },
        ],
        benchmark: "Benchmarks de referencia: Deloitte y JLL reportan que la automatización en real estate reduce tiempos administrativos entre 40% y 60%. McKinsey estima que la digitalización del ciclo comercial inmobiliario puede acelerar cierres en más de 25%.",
        capabilities: [
          { title: "Real Estate Document Automation", description: "OCR + IA para contratos, promesas, escrituras y documentación legal." },
          { title: "Sales Pipeline Automation", description: "Automatización del embudo comercial: lead scoring, seguimiento y asignación." },
          { title: "Property Operations Analytics", description: "Tableros de velocidad de venta, ocupación, cartera y proyecciones." },
        ],
        cta: {
          title: "Digitaliza tu operación inmobiliaria de punta a punta",
          subtitle: "Menos papel. Más velocidad comercial. Mejor experiencia para el comprador.",
          buttonText: "Solicitar evaluación",
        },
      }}
    />
  );
}
