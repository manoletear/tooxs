import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-telecom.jpg";

export const Route = createFileRoute("/industrias/telecomunicaciones")({
  head: () => ({
    meta: [
      { title: "Telecomunicaciones — Tooxs | IA para Operadores Telco" },
      { name: "description", content: "Integración de IA en redes, atención al cliente, experiencia y operación para operadores de telecomunicaciones." },
      { property: "og:title", content: "Telecomunicaciones — Tooxs" },
      { property: "og:description", content: "Redes más eficientes, clientes mejor entendidos y operaciones más inteligentes con IA." },
      { property: "og:url", content: "https://www.tooxs.com/industrias/telecomunicaciones" },
      { name: "keywords", content: "telecomunicaciones IA, redes inteligentes, experiencia cliente telco, Tooxs" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/industrias/telecomunicaciones" }],
  }),
  component: TelecomPage,
});

function TelecomPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Telecomunicaciones",
          subtitle: "Redes más eficientes. Clientes mejor entendidos. Operaciones más inteligentes.",
          description: "Ayudamos a operadores y empresas telco a integrar IA en red, atención, experiencia y operación para capturar eficiencia y mejorar servicio.",
          image: heroImage,
        },
        statement: [
          "En telecomunicaciones, la presión no viene de un solo frente: viene de costos operativos, churn, complejidad tecnológica y expectativas crecientes del cliente.",
          "Tooxs diseña capacidades que conectan red, operación y experiencia para transformar datos técnicos y comerciales en valor operativo real.",
        ],
        services: [
          { title: "Network analytics", description: "Convertimos datos de red en alertas, visibilidad y priorización operacional." },
          { title: "Atención y resolución", description: "Mejoramos tiempos de respuesta, clasificación y resolución en customer care y service desk." },
          { title: "Customer intelligence", description: "Identificamos señales para segmentación, personalización y prevención de churn." },
          { title: "Automatización operativa", description: "Orquestamos tareas repetitivas, gestión de tickets, validaciones, back office y seguimiento." },
          { title: "Conocimiento operacional", description: "Unificamos procedimientos, documentación y bases técnicas para acelerar soporte interno." },
          { title: "Métricas de experiencia", description: "Conectamos red y servicio para entender dónde se degrada la experiencia del cliente." },
        ],
        metrics: [
          { value: "-15%", label: "churn potencial con analítica avanzada" },
          { value: "-30%", label: "costos en service operations" },
          { value: "-35%", label: "costo por llamada con bots y flujos de atención asistidos por IA" },
        ],
        benchmark: "Benchmarks de referencia: McKinsey reporta que una estrategia integral de analítica puede reducir churn hasta en 15% en telecom. En service operations, McKinsey documenta reducciones de costo de 30% y, en casos de IA aplicada a atención, 35% menos costo por llamada.",
        capabilities: [
          { title: "Telecom Service Intelligence", description: "Alertas, priorización y seguimiento para atención y soporte." },
          { title: "Churn & Retention Analytics", description: "Modelos para identificar riesgo de fuga y accionar campañas o intervenciones." },
          { title: "Knowledge Copilot", description: "Asistencia inteligente para equipos de operación, soporte y customer care." },
        ],
        cta: {
          title: "Conecta red, experiencia y operación en una sola capa de inteligencia",
          subtitle: "Elimina cuellos de botella donde hoy tienes más costo y más fuga de valor.",
          buttonText: "Hablar con Tooxs",
        },
      }}
    />
  );
}
