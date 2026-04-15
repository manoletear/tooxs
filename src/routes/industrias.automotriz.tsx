import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-automotive.jpg";

export const Route = createFileRoute("/industrias/automotriz")({
  head: () => ({
    meta: [
      { title: "Automotriz — Tooxs" },
      { name: "description", content: "Ayudamos a fabricantes, importadores y distribuidores del mundo automotriz a mejorar productividad, calidad y velocidad de ejecución con IA." },
      { property: "og:title", content: "Automotriz — Tooxs" },
      { property: "og:description", content: "Producción más inteligente. Calidad más consistente. Supply chain más visible." },
    ],
  }),
  component: AutomotrizPage,
});

function AutomotrizPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Automotriz",
          subtitle: "Producción más inteligente. Calidad más consistente. Supply chain más visible.",
          description: "Ayudamos a fabricantes, importadores, distribuidores y operadores del mundo automotriz a mejorar productividad, calidad y velocidad de ejecución con IA y automatización.",
          image: heroImage,
        },
        statement: [
          "En automotriz, la transformación no pasa solo por digitalizar plantas o canales. Pasa por coordinar producción, calidad, supply chain y operación comercial con mejor precisión y menos desperdicio.",
          "Tooxs ayuda a transformar procesos críticos en capacidades medibles de productividad, control y respuesta.",
        ],
        services: [
          { title: "Calidad asistida por IA", description: "Aplicamos visión computacional y analítica para detectar defectos, acelerar inspección y mejorar consistencia." },
          { title: "Manufactura y OEE", description: "Integramos información operacional para detectar cuellos de botella y elevar efectividad de línea." },
          { title: "Forecasting y supply chain", description: "Mejoramos precisión de demanda, abastecimiento y buffers para reducir costos e ineficiencias." },
          { title: "Mantenimiento predictivo", description: "Anticipamos fallas de equipos críticos en líneas y procesos de soporte." },
          { title: "Gestión documental técnica", description: "Organizamos y hacemos consultable documentación técnica, procesos, calidad y servicio." },
          { title: "Operación comercial y postventa", description: "Automatizamos flujos, seguimiento y trazabilidad en ventas, inventario y soporte." },
        ],
        metrics: [
          { value: "hasta 90%", label: "más precisión en detección de defectos" },
          { value: "hasta 50%", label: "más productividad en inspección visual" },
          { value: "-20% a -50%", label: "inventario con mejor forecast y supply chain" },
        ],
        benchmark: "Benchmarks de referencia: McKinsey indica que la IA puede detectar defectos hasta 90% más precisamente que humanos y elevar la productividad de inspección visual hasta 50%. En supply chain automotriz, McKinsey también reporta que enfoques de IA pueden reducir inventarios entre 20% y 50%.",
        capabilities: [
          { title: "Visual Quality AI", description: "Inspección visual asistida por IA para calidad y defectología." },
          { title: "Automotive Supply Intelligence", description: "Forecasting, buffers, inventario y visibilidad de cadena." },
          { title: "Operations Copilot", description: "Consulta inteligente de documentación técnica, procesos y conocimiento operacional." },
        ],
        cta: {
          title: "Lleva tu operación automotriz a un modelo más ágil y controlado",
          subtitle: "Más calidad, mejor planificación y menos pérdida operativa.",
          buttonText: "Conversemos",
        },
      }}
    />
  );
}
