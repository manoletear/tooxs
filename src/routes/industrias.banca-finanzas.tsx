import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-banking.jpg";

export const Route = createFileRoute("/industrias/banca-finanzas")({
  head: () => ({
    meta: [
      { title: "Banca y Finanzas — Tooxs | Automatización Financiera con IA" },
      { name: "description", content: "Aceleramos evaluación crediticia, originación, cumplimiento y servicio financiero con automatización, IA y flujos auditables para banca y finanzas." },
      { property: "og:title", content: "Banca y Finanzas — Tooxs" },
      { property: "og:description", content: "Decisiones más rápidas, riesgo mejor gestionado y operación financiera más eficiente con IA." },
      { property: "og:url", content: "https://www.tooxs.com/industrias/banca-finanzas" },
      { name: "keywords", content: "banca IA, finanzas automatización, riesgo crediticio, compliance, Tooxs" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/industrias/banca-finanzas" }],
  }),
  component: BancaPage,
});

function BancaPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Banca y Finanzas",
          subtitle: "Decisiones más rápidas. Riesgo mejor gestionado. Operación más eficiente.",
          description: "Diseñamos soluciones que aceleran evaluación, originación, cumplimiento y servicio financiero con automatización, IA y flujos auditables.",
          image: heroImage,
        },
        statement: [
          "Las instituciones financieras no necesitan más tecnología aislada. Necesitan procesos más rápidos, controles más robustos y decisiones mejor informadas.",
          "Tooxs ayuda a modernizar la operación financiera sin perder trazabilidad, control ni gobierno de datos.",
        ],
        services: [
          { title: "Scoring y evaluación", description: "Automatizamos análisis de crédito, lectura documental y consolidación de antecedentes para acelerar originación y mejorar consistencia." },
          { title: "Onboarding digital", description: "Reducimos pasos manuales en apertura de clientes, validación documental, KYC y activación operativa." },
          { title: "Cumplimiento y trazabilidad", description: "Diseñamos flujos auditables, alertas y automatizaciones que fortalecen cumplimiento normativo y reducen errores manuales." },
          { title: "Gestión documental financiera", description: "Extraemos y estructuramos información desde contratos, estados, carpetas de cliente y documentación regulatoria." },
          { title: "Detección de anomalías", description: "Apoyamos monitoreo de patrones y eventos que requieren revisión, escalamiento o priorización." },
          { title: "Automatización de back office", description: "Reducimos tiempo operativo en revisión, ingreso de datos, reportería, consolidación y seguimiento de casos." },
        ],
        metrics: [
          { value: "-80%", label: "ingreso manual de datos en preanálisis" },
          { value: "-50%", label: "ciclo total de aprobación" },
          { value: "de horas a minutos", label: "en procesos con workflows y agentes bien integrados" },
        ],
        benchmark: "Benchmarks de referencia: EY documenta reducciones cercanas al 80% en ingreso manual de datos y una caída del 50% en el ciclo de aprobación en procesos crediticios apoyados por IA. PwC describe eficiencias donde los tiempos de turnaround pasan de horas a minutos en operaciones financieras automatizadas.",
        capabilities: [
          { title: "Loan Scoring Engine", description: "Evaluación de riesgo, lectura documental y consolidación automatizada para originación y análisis." },
          { title: "OCR + IA documental", description: "Extracción de datos desde carpetas crediticias, estados financieros y documentación KYC." },
          { title: "Process Orchestrator para compliance", description: "Flujos auditables para revisión, escalamiento, aprobación y seguimiento." },
        ],
        cta: {
          title: "Acelera decisiones sin perder control",
          subtitle: "Haz más eficiente tu operación financiera donde hoy tienes más carga manual.",
          buttonText: "Solicitar una revisión de proceso",
        },
      }}
    />
  );
}
