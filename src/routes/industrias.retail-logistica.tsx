import { createFileRoute } from "@tanstack/react-router";
import { IndustryPageTemplate } from "../components/IndustryPageTemplate";
import heroImage from "../assets/hero-retail.jpg";

export const Route = createFileRoute("/industrias/retail-logistica")({
  head: () => ({
    meta: [
      { title: "Retail y Logística — TOOXS | Cadena de Suministro Inteligente" },
      { name: "description", content: "Optimización de inventario, disponibilidad y cadena de suministro con IA y automatización para retailers y operadores logísticos." },
      { property: "og:title", content: "Retail y Logística — TOOXS" },
      { property: "og:description", content: "Inventario inteligente, ejecución más rápida y cadena de suministro como ventaja competitiva." },
      { property: "og:url", content: "https://www.tooxs.com/industrias/retail-logistica" },
      { name: "keywords", content: "retail IA, logística automatización, inventario inteligente, supply chain, TOOXS" },
    ],
    links: [{ rel: "canonical", href: "https://www.tooxs.com/industrias/retail-logistica" }],
  }),
  component: RetailPage,
});

function RetailPage() {
  return (
    <IndustryPageTemplate
      data={{
        hero: {
          title: "Retail y Logística",
          subtitle: "Inventario inteligente. Ejecución más rápida. Menos quiebres operativos.",
          description: "Ayudamos a retailers, operadores logísticos y negocios omnicanal a optimizar inventario, mejorar disponibilidad y convertir la cadena de suministro en una ventaja competitiva.",
          image: heroImage,
        },
        statement: [
          "En retail y logística, el problema rara vez es solo vender más. El problema real es mantener disponibilidad sin sobrecargar capital, responder a la demanda con agilidad y operar con visibilidad de punta a punta.",
          "Tooxs integra datos comerciales, operacionales y logísticos para transformar abastecimiento, reposición, planificación y ejecución.",
        ],
        services: [
          { title: "Optimización de inventario", description: "Modelamos demanda, buffers y reposición para reducir sobrestock y minimizar quiebres en categorías críticas." },
          { title: "Forecasting de demanda", description: "Mejoramos la calidad de la planificación usando datos históricos, estacionalidad, promociones, comportamiento comercial y variables externas." },
          { title: "Visibilidad logística", description: "Unificamos información de bodegas, transporte, reposición y cumplimiento para detectar desvíos y priorizar decisiones." },
          { title: "Automatización de operaciones", description: "Reducimos trabajo manual en seguimiento de pedidos, conciliaciones, actualizaciones de estado, excepciones y reportes." },
          { title: "Pricing y promoción", description: "Conectamos datos comerciales y operacionales para mejorar decisiones de surtido, precio y campañas." },
          { title: "Omnicanalidad operativa", description: "Ayudamos a sincronizar inventario, promesa de entrega y ejecución entre canales físicos y digitales." },
        ],
        metrics: [
          { value: "-20%", label: "de inventario sin deteriorar servicio" },
          { value: "hasta 2x", label: "mejora en disponibilidad de producto" },
          { value: "+20% a +30%", label: "mejor forecast accuracy con digital twin" },
        ],
        benchmark: "Benchmarks de referencia: BCG documentó un caso en retail con reducción de inventario de 20% mientras casi duplicaba la disponibilidad de producto. En supply chain, BCG también reporta mejoras de 20% a 30% en forecast accuracy con digital twins.",
        capabilities: [
          { title: "Stock Optimizer AI", description: "IA aplicada a reposición, buffers y abastecimiento para equilibrar servicio y capital de trabajo." },
          { title: "Demand Intelligence", description: "Modelos de proyección para demanda, estacionalidad, promociones y comportamiento comercial." },
          { title: "Logistics Control Tower", description: "Visibilidad operativa con alertas, SLAs, incidencias y seguimiento de ejecución logística." },
        ],
        cta: {
          title: "Convierte inventario y logística en una palanca de crecimiento",
          subtitle: "Más disponibilidad cuando importa. Menos capital inmovilizado donde no aporta.",
          buttonText: "Evaluar oportunidades",
        },
      }}
    />
  );
}
