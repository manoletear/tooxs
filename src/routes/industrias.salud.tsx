import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-health.jpg";

export const Route = createFileRoute("/industrias/salud")({
  head: () => ({
    meta: [
      { title: "Salud — TOOXS | IA para Prestadores y Aseguradoras" },
      { name: "description", content: "Modernización de flujos clínicos y administrativos con IA, automatización y analítica para prestadores, aseguradoras y organizaciones de salud." },
      { property: "og:title", content: "Salud — TOOXS" },
      { property: "og:description", content: "Menos carga administrativa, más capacidad para atender con IA y automatización en salud." },
      { property: "og:url", content: "https://www.tooxs.com/industrias/salud" },
      { name: "keywords", content: "salud IA, automatización clínica, analítica salud, prestadores, TOOXS" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/industrias/salud" }],
  }),
  component: SaludPage,
});

function SaludPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Salud",
          subtitle: "Menos carga administrativa. Más capacidad para atender.",
          description: "Acompañamos a prestadores, aseguradores y organizaciones de salud a modernizar flujos clínicos y administrativos con IA, automatización y analítica.",
          image: heroImage,
        },
        statement: [
          "En salud, mejorar eficiencia no significa deshumanizar la atención. Significa reducir carga administrativa, mejorar coordinación y liberar capacidad para lo que realmente importa.",
          "Tooxs ayuda a simplificar operación, automatizar tareas repetitivas y mejorar visibilidad para una atención más fluida y sostenible.",
        ],
        services: [
          { title: "Automatización administrativa", description: "Reducimos trabajo manual en admisión, agenda, validación, documentación, autorizaciones y seguimiento." },
          { title: "Orquestación de pacientes", description: "Mejoramos coordinación entre canales, áreas y puntos de contacto para reducir tiempos de espera." },
          { title: "Gestión documental clínica y operativa", description: "Digitalizamos y estructuramos información para acelerar acceso, búsqueda y trazabilidad." },
          { title: "Analítica para capacidad y demanda", description: "Apoyamos visibilidad de demanda, tiempos de espera, capacidad y saturación operativa." },
          { title: "Soporte a atención", description: "Creamos asistentes para resolver consultas frecuentes, orientar usuarios y apoyar equipos internos." },
          { title: "Eficiencia financiera y operativa", description: "Consolidamos datos e indicadores para seguimiento de operación, costos y desempeño." },
        ],
        metrics: [
          { value: "-20% a -30%", label: "costos administrativos en middle office" },
          { value: "menor carga", label: "administrativa para clínicos y equipos de atención" },
          { value: "menores tiempos", label: "de espera con automatización de flujos y triage" },
        ],
        benchmark: "Benchmarks de referencia: PwC proyecta reducciones de 20% a 30% en costos administrativos en middle office de salud. PwC y Deloitte también destacan que agentes y automatización ayudan a reducir tiempos de espera y carga administrativa.",
        capabilities: [
          { title: "Healthcare Workflow Automation", description: "Automatización de admisión, validación, autorizaciones y seguimiento." },
          { title: "Patient Interaction Copilot", description: "Asistentes para agenda, orientación y consultas frecuentes." },
          { title: "Health Ops Analytics", description: "Tableros para tiempos, carga operativa, capacidad y performance." },
        ],
        cta: {
          title: "Haz más eficiente tu operación sin comprometer la atención",
          subtitle: "Menos carga administrativa. Más capacidad real de respuesta.",
          buttonText: "Solicitar evaluación",
        },
      }}
    />
  );
}
