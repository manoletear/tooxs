import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";

import heroIa from "@/assets/hero-ia-aplicada.jpg";
import heroAuto from "@/assets/hero-automatizacion.jpg";
import heroData from "@/assets/hero-data-analytics.jpg";
import heroDoc from "@/assets/hero-documental.jpg";
import heroOpt from "@/assets/hero-optimizacion.jpg";

const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  "ia-aplicada": { title: "IA Aplicada al Negocio — TOOXS", description: "Aplicamos inteligencia artificial en procesos críticos para acelerar decisiones, reducir errores y escalar operaciones empresariales." },
  "automatizacion": { title: "Automatización de Procesos — TOOXS", description: "Diseñamos y automatizamos procesos end-to-end con RPA e IA para reducir fricción, errores y tiempos operativos." },
  "data-analytics": { title: "Data & Analytics — TOOXS", description: "Unificamos, modelamos y activamos datos dispersos para mejorar visibilidad y toma de decisiones ejecutivas." },
  "automatizacion-documental": { title: "Automatización Documental — TOOXS", description: "Extraemos, validamos y gestionamos información desde documentos complejos con IA y OCR inteligente." },
  "optimizacion-operacional": { title: "Optimización Operacional — TOOXS", description: "Optimizamos procesos críticos con mantenimiento predictivo, monitoreo y mejora continua para mayor productividad." },
};

export const Route = createFileRoute("/services/$serviceSlug")({
  head: ({ params }) => {
    const seo = SERVICE_SEO[params.serviceSlug];
    if (!seo) return { meta: [{ title: "Servicio — TOOXS" }] };
    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: `https://www.tooxs.com/services/${params.serviceSlug}` },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
      ],
      links: [
        { rel: "canonical", href: `https://www.tooxs.com/services/${params.serviceSlug}` },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Servicio no encontrado</h1>
        <a href="/services" className="text-primary hover:underline">Volver a Servicios</a>
      </div>
    </div>
  ),
});

const SERVICES: Record<string, ServicePageData> = {
  "ia-aplicada": {
    hero: {
      title: "IA Aplicada al Negocio",
      subtitle: "Convierte datos en decisiones. Automatiza lo que hoy depende de personas.",
      description: "Aplicamos inteligencia artificial directamente en procesos críticos para acelerar decisiones, reducir errores y escalar operaciones.",
      image: heroIa,
    },
    statement: [
      "La IA no genera valor por sí sola. Genera valor cuando está integrada en decisiones, procesos y flujos reales.",
      "En TOOXS diseñamos IA que no se queda en modelos, sino que opera dentro del negocio.",
    ],
    values: [
      { title: "Decisiones automatizadas", description: "Implementamos modelos que priorizan, recomiendan y ejecutan acciones en tiempo real." },
      { title: "Copilotos operacionales", description: "Asistentes inteligentes que ayudan a equipos a resolver tareas complejas más rápido." },
      { title: "Predicción y anticipación", description: "Modelos que identifican patrones y anticipan riesgos, demanda o fallas." },
      { title: "IA en procesos críticos", description: "Integramos IA directamente en operaciones, no como capa aislada." },
    ],
    metrics: [
      { value: "2x a 5x", label: "Productividad" },
      { value: "-20% a -60%", label: "Costos operativos" },
      { value: "-50% a -90%", label: "Tiempos de proceso" },
    ],
    metricsSource: "Fuente: McKinsey & Company / Deloitte",
    capabilities: ["Modelos predictivos", "IA generativa", "Agentes autónomos", "Copilotos empresariales"],
    cta: {
      title: "Activa IA donde realmente impacta tu negocio",
      buttonText: "Solicita un diagnóstico en 48 horas",
    },
  },
  "automatizacion": {
    hero: {
      title: "Automatización de Procesos",
      subtitle: "Elimina tareas manuales. Acelera tu operación.",
      description: "Diseñamos y automatizamos procesos end-to-end para reducir fricción, errores y tiempos.",
      image: heroAuto,
    },
    statement: [
      "La mayoría de las organizaciones no tienen un problema de estrategia, sino de ejecución.",
      "Automatizar procesos es la forma más directa de mejorar velocidad, eficiencia y escalabilidad.",
    ],
    values: [
      { title: "Automatización end-to-end", description: "Desde ingreso de datos hasta ejecución final." },
      { title: "Orquestación de workflows", description: "Conectamos personas, sistemas y decisiones." },
      { title: "RPA + IA", description: "Automatizamos tareas repetitivas y decisiones simples." },
      { title: "Eliminación de reprocesos", description: "Reducimos errores y retrabajo." },
    ],
    metrics: [
      { value: "-50% a -90%", label: "Tiempos de proceso" },
      { value: "-20% a -60%", label: "Costos operativos" },
      { value: "-70%", label: "Errores manuales" },
    ],
    metricsSource: "Fuente: Deloitte / PwC",
    capabilities: ["RPA", "Workflow orchestration", "Integración de sistemas", "Automatización documental"],
    cta: {
      title: "Automatiza donde hoy pierdes tiempo y margen",
      buttonText: "Conversemos sobre tu operación",
    },
  },
  "data-analytics": {
    hero: {
      title: "Data & Analytics",
      subtitle: "Convierte datos dispersos en decisiones accionables.",
      description: "Unificamos, modelamos y activamos datos para mejorar visibilidad y toma de decisiones.",
      image: heroData,
    },
    statement: [
      "El problema no es falta de datos. Es falta de decisiones basadas en ellos.",
      "TOOXS convierte datos en una capa operativa real.",
    ],
    values: [
      { title: "Integración de datos", description: "Unificamos múltiples fuentes en una sola vista." },
      { title: "Dashboards ejecutivos", description: "Visibilidad en tiempo real para toma de decisiones." },
      { title: "Forecasting", description: "Proyección de demanda, riesgo o desempeño." },
      { title: "Analítica operacional", description: "Identificación de cuellos de botella y oportunidades." },
    ],
    metrics: [
      { value: "+20% a +30%", label: "Mejor precisión en decisiones" },
      { value: "-30%", label: "Tiempo en análisis" },
      { value: "+15%", label: "Eficiencia operativa" },
    ],
    metricsSource: "Fuente: Boston Consulting Group",
    capabilities: ["BI y dashboards", "Forecasting", "Data integration", "Control towers"],
    cta: {
      title: "Transforma datos en decisiones que impactan resultados",
      buttonText: "Solicita un diagnóstico",
    },
  },
  "automatizacion-documental": {
    hero: {
      title: "Automatización Documental",
      subtitle: "De documentos a datos en segundos.",
      description: "Extraemos, validamos y gestionamos información desde documentos complejos con IA.",
      image: heroDoc,
    },
    statement: [
      "Gran parte de la operación empresarial sigue atrapada en PDFs, correos y documentos.",
      "Liberar esa información es una de las mayores oportunidades de eficiencia.",
    ],
    values: [
      { title: "OCR inteligente", description: "Lectura automática de documentos." },
      { title: "Extracción de datos", description: "Conversión de documentos en información estructurada." },
      { title: "Validación documental", description: "Reducción de errores humanos." },
      { title: "Consulta inteligente", description: "Acceso inmediato a información crítica." },
    ],
    metrics: [
      { value: "-70% a -90%", label: "Tiempo de procesamiento" },
      { value: "-60% a -80%", label: "Errores" },
      { value: "+3x", label: "Velocidad operativa" },
    ],
    metricsSource: "Fuente: EY",
    capabilities: ["OCR + IA", "Clasificación documental", "Data extraction", "Knowledge search"],
    cta: {
      title: "Deja de buscar documentos. Encuentra información.",
      buttonText: "Solicita una demo",
    },
  },
  "optimizacion-operacional": {
    hero: {
      title: "Optimización Operacional",
      subtitle: "Más eficiencia. Menos pérdida operativa.",
      description: "Optimizamos procesos críticos para mejorar productividad, continuidad y rentabilidad.",
      image: heroOpt,
    },
    statement: [
      "Las mejoras más grandes no vienen de nuevas inversiones, sino de operar mejor lo que ya tienes.",
    ],
    values: [
      { title: "Mantenimiento predictivo", description: "Reducción de fallas y downtime." },
      { title: "Monitoreo en tiempo real", description: "Visibilidad de operaciones críticas." },
      { title: "Optimización de recursos", description: "Mejor uso de activos y capacidad." },
      { title: "Mejora continua", description: "Identificación de oportunidades operativas." },
    ],
    metrics: [
      { value: "-30% a -50%", label: "Downtime" },
      { value: "+10% a +20%", label: "Productividad" },
      { value: "-15% a -30%", label: "Costos" },
    ],
    metricsSource: "Fuente: McKinsey & Company",
    capabilities: ["Predictive maintenance", "Digital twin", "Monitoring", "Optimization models"],
    cta: {
      title: "Optimiza tu operación donde realmente importa",
      buttonText: "Solicita un diagnóstico",
    },
  },
};

function ServiceDetailPage() {
  const { serviceSlug } = Route.useParams();
  const data = SERVICES[serviceSlug];

  if (!data) {
    throw notFound();
  }

  return <ServicePageTemplate data={data} />;
}
