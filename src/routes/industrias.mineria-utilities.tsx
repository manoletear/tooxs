import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-mining.jpg";

export const Route = createFileRoute("/industrias/mineria-utilities")({
  head: () => ({
    meta: [
      { title: "Minería y Utilities — Tooxs | IA para Operaciones Críticas" },
      { name: "description", content: "Ayudamos a compañías mineras y de utilities a reducir pérdidas operativas, anticipar fallas y mejorar la continuidad operacional con IA y automatización." },
      { property: "og:title", content: "Minería y Utilities — Tooxs" },
      { property: "og:description", content: "IA para operaciones críticas: decisiones en tiempo real, mantenimiento predictivo y optimización de activos." },
      { property: "og:url", content: "https://www.tooxs.com/industrias/mineria-utilities" },
      { name: "keywords", content: "minería IA, utilities automatización, mantenimiento predictivo, optimización activos, Tooxs" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/industrias/mineria-utilities" }],
  }),
  component: MineriaPage,
});

function MineriaPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Minería y Utilities",
          subtitle: "Operaciones críticas, decisiones en tiempo real",
          description: "Ayudamos a compañías intensivas en activos a reducir pérdidas operativas, anticipar fallas y mejorar la continuidad operacional con IA, automatización y analítica avanzada.",
          image: heroImage,
        },
        statement: [
          "En minería y utilities, el valor no está solo en digitalizar procesos: está en hacer más predecible la operación, más eficiente el mantenimiento y más accionable la información crítica.",
          "En Tooxs conectamos datos de terreno, históricos operacionales, sensores y flujos de trabajo para transformar activos complejos en sistemas más confiables, visibles y rentables.",
        ],
        services: [
          { title: "Mantenimiento predictivo", description: "Anticipamos fallas en equipos críticos antes de que afecten la producción. Combinamos históricos, telemetría y analítica para priorizar intervenciones y reducir detenciones no planificadas." },
          { title: "Monitoreo operacional", description: "Integramos variables de operación en tableros y alertas en tiempo real para que supervisores, mantenimiento y operaciones trabajen sobre una misma fuente de verdad." },
          { title: "Gestión documental técnica", description: "Automatizamos lectura, clasificación y consulta de manuales, informes, procedimientos y bitácoras, reduciendo tiempo de búsqueda y mejorando trazabilidad." },
          { title: "Seguridad y cumplimiento", description: "Orquestamos flujos, evidencia y alertas para fortalecer controles operacionales, inspecciones, cumplimiento técnico y respuesta ante eventos críticos." },
          { title: "Optimización energética", description: "Identificamos patrones de consumo, anomalías y oportunidades de eficiencia en procesos de alto uso energético." },
          { title: "Automatización de back office operacional", description: "Reducimos carga manual en reportabilidad, consolidación de datos, validaciones y seguimiento de órdenes o eventos." },
        ],
        metrics: [
          { value: "-30% a -50%", label: "downtime de maquinaria crítica" },
          { value: "+20% a +40%", label: "vida útil de activos" },
          { value: "-15% a -30%", label: "costos de mantenimiento" },
        ],
        benchmark: "Benchmarks de referencia: McKinsey señala que el mantenimiento predictivo suele reducir el downtime entre 30% y 50% y aumentar la vida útil de los equipos entre 20% y 40%.",
        capabilities: [
          { title: "Predictive Maintenance Suite", description: "Predicción de fallas, priorización de intervención y alertas tempranas para equipos críticos." },
          { title: "DocuEngine para operación técnica", description: "Consulta inteligente de procedimientos, manuales, informes y documentación operativa." },
          { title: "Process Orchestrator", description: "Automatización de alertas, inspecciones, reportes y flujos de aprobación entre terreno, mantenimiento y supervisión." },
        ],
        cta: {
          title: "Haz tu operación más predecible",
          subtitle: "Detecta dónde estás perdiendo disponibilidad, tiempo y margen operativo.",
          buttonText: "Solicitar diagnóstico operacional",
        },
      }}
    />
  );
}
