import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-agro.jpg";

export const Route = createFileRoute("/industrias/agroindustria")({
  head: () => ({
    meta: [
      { title: "Agroindustria — TOOXS | Datos y IA para el Campo" },
      { name: "description", content: "Integración de datos productivos, comerciales y operacionales para mejorar rendimiento, trazabilidad y eficiencia en agroindustria." },
      { property: "og:title", content: "Agroindustria — TOOXS" },
      { property: "og:description", content: "Más rendimiento agrícola, mejor uso de recursos y decisiones con contexto mediante IA." },
      { property: "og:url", content: "https://www.tooxs.com/industrias/agroindustria" },
      { name: "keywords", content: "agroindustria IA, trazabilidad agrícola, datos campo, rendimiento cultivos, TOOXS" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/industrias/agroindustria" }],
  }),
  component: AgroPage,
});

function AgroPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Agroindustria",
          subtitle: "Más rendimiento. Mejor uso de recursos. Decisiones con contexto.",
          description: "Acompañamos a empresas agroindustriales a integrar datos productivos, comerciales y operacionales para mejorar rendimiento, trazabilidad y eficiencia en toda la cadena.",
          image: heroImage,
        },
        statement: [
          "La agroindustria ya no compite solo por volumen. Compite por eficiencia de recursos, resiliencia operativa, trazabilidad y calidad de decisión.",
          "En Tooxs conectamos datos de campo, plantas, logística y comercialización para transformar información dispersa en decisiones accionables.",
        ],
        services: [
          { title: "Inteligencia productiva", description: "Consolidamos información de campo, rendimiento, clima, labores, insumos y calidad para mejorar seguimiento y planificación." },
          { title: "Uso eficiente de recursos", description: "Ayudamos a optimizar agua, fertilización, energía y otros insumos con modelos analíticos y monitoreo más preciso." },
          { title: "Trazabilidad", description: "Conectamos datos desde origen hasta despacho para mejorar control, visibilidad y cumplimiento." },
          { title: "Logística agroindustrial", description: "Mejoramos planificación de cosecha, almacenamiento, despacho y sincronización con demanda." },
          { title: "Gestión documental y calidad", description: "Digitalizamos fichas técnicas, registros, procedimientos, resultados y evidencia operativa." },
          { title: "Reportabilidad y control", description: "Automatizamos indicadores, cierres, alertas y tableros para gerencia, operación y áreas técnicas." },
        ],
        metrics: [
          { value: "mayor rendimiento", label: "por mejores decisiones agronómicas y operacionales" },
          { value: "mejor eficiencia", label: "en agua, fertilizantes e insumos" },
          { value: "más resiliencia", label: "frente a variabilidad operativa y climática" },
        ],
        benchmark: "Benchmarks de referencia: McKinsey indica que IA, analítica y sensores conectados pueden aumentar rendimientos y mejorar la eficiencia del uso de agua e insumos. Deloitte destaca que la agtech permite producir más con menos pesticidas, energía, agua y recursos.",
        capabilities: [
          { title: "Agri Analytics", description: "Tableros y modelos para rendimiento, planificación y control productivo." },
          { title: "Trazabilidad inteligente", description: "Consolidación de datos de origen, proceso, calidad y despacho." },
          { title: "DocuEngine para agroindustria", description: "Lectura y consulta de documentación técnica, calidad, procesos y cumplimiento." },
        ],
        cta: {
          title: "Convierte datos dispersos en decisiones de alto impacto",
          subtitle: "Más control operativo. Más trazabilidad. Mejor uso de recursos.",
          buttonText: "Explorar oportunidades",
        },
      }}
    />
  );
}
