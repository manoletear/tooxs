import { useState, useRef, useCallback, type ReactNode } from "react";
import { X, FileText, Shield, FolderSearch, Receipt } from "lucide-react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

import docuengineImg from "../assets/solution-docuengine.jpg";
import safevisionImg from "../assets/solution-safevision.jpg";
import gestorImg from "../assets/solution-gestor.jpg";
import facturasImg from "../assets/solution-facturas.jpg";

/* ── Types ── */
interface SolutionStep { title: string; description: string }
interface Solution {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  icon: ReactNode;
  accentColor: string;
  fullDescription: string;
  problems: string[];
  benefits: string[];
  steps: SolutionStep[];
  integrations?: string[];
  useCases?: string[];
}

const solutions: Solution[] = [
  {
    id: "docuengine",
    category: "Automatización documental",
    title: "DocuEngine",
    subtitle: "Convierte documentos en procesos accionables.",
    image: docuengineImg,
    icon: <FileText size={24} />,
    accentColor: "#177FC6",
    fullDescription: "DocuEngine transforma documentos dispersos en flujos de trabajo estructurados. Lee contenido, identifica tipo documental, extrae datos relevantes y activa procesos automáticos según reglas de negocio.",
    problems: [
      "Documentos que llegan por múltiples canales y generan carga manual.",
      "Procesos lentos por clasificación, lectura o digitación repetitiva.",
      "Falta de trazabilidad sobre estado, responsable y resultado del documento.",
    ],
    benefits: ["Menos digitación manual.", "Menos errores operativos.", "Mayor velocidad de respuesta.", "Trazabilidad completa del ciclo documental."],
    steps: [
      { title: "Recepción", description: "Captura documentos desde correo, carpetas, formularios o repositorios." },
      { title: "Comprensión", description: "Clasifica el documento y extrae campos clave mediante lectura inteligente." },
      { title: "Orquestación", description: "Aplica reglas para derivar, aprobar, rechazar o escalar automáticamente." },
      { title: "Trazabilidad", description: "Registra estados, acciones y resultados para control y auditoría." },
    ],
    integrations: ["ERP", "SharePoint", "Correo", "API", "Bases de datos", "FTP / SFTP"],
  },
  {
    id: "safevision",
    category: "Seguridad operacional",
    title: "SafeVision",
    subtitle: "Detecta riesgos antes de que se conviertan en accidentes.",
    image: safevisionImg,
    icon: <Shield size={24} />,
    accentColor: "#C62D2D",
    fullDescription: "SafeVision utiliza análisis de video para identificar conductas, condiciones o eventos de riesgo en tiempo real. Fortalece la prevención, genera alertas tempranas y apoya decisiones de seguridad.",
    problems: [
      "Dependencia excesiva de supervisión humana para detectar eventos de riesgo.",
      "Baja capacidad de reacción ante condiciones inseguras en tiempo real.",
      "Falta de evidencia visual organizada para investigación y mejora continua.",
    ],
    benefits: ["Prevención proactiva.", "Respuesta más rápida ante eventos críticos.", "Mayor control sobre zonas de alto riesgo.", "Evidencia útil para auditoría."],
    steps: [
      { title: "Monitoreo", description: "Recibe video desde cámaras o flujos conectados a la operación." },
      { title: "Detección", description: "Analiza patrones para reconocer eventos, conductas o condiciones de riesgo." },
      { title: "Alerta", description: "Notifica a supervisores cuando se supera un umbral de riesgo." },
      { title: "Registro", description: "Conserva evidencia y trazabilidad para análisis posterior." },
    ],
    useCases: ["Monitoreo de zonas restringidas.", "Control de conductas inseguras.", "Verificación de protocolos en terreno.", "Apoyo a comités de seguridad."],
  },
  {
    id: "gestor",
    category: "Gestión de conocimiento",
    title: "Gestor Documental",
    subtitle: "Ordena, encuentra y controla tu información crítica.",
    image: gestorImg,
    icon: <FolderSearch size={24} />,
    accentColor: "#17A86A",
    fullDescription: "Centraliza documentos corporativos, controla versiones, organiza permisos y facilita el acceso mediante búsqueda semántica. Su foco es la gobernanza documental y la disponibilidad del conocimiento.",
    problems: [
      "Repositorios dispersos, documentos duplicados y versiones inconsistentes.",
      "Dificultad para encontrar información crítica por nombre o ubicación.",
      "Pérdida de conocimiento por dependencia de personas o carpetas aisladas.",
    ],
    benefits: ["Mayor gobernanza documental.", "Acceso más rápido a información clave.", "Control de permisos y versiones.", "Menor pérdida de conocimiento corporativo."],
    steps: [
      { title: "Centralización", description: "Reúne documentos desde distintas fuentes en un entorno organizado." },
      { title: "Estructuración", description: "Aplica taxonomías, categorías, metadatos y lógica de versionado." },
      { title: "Acceso inteligente", description: "Permite encontrar información por contenido, tema o contexto." },
      { title: "Gobernanza", description: "Controla permisos, vigencia documental y reglas de acceso." },
    ],
    integrations: ["SharePoint", "Google Drive", "OneDrive", "Repositorios internos", "Bases de datos"],
  },
  {
    id: "facturas",
    category: "Finanzas y abastecimiento",
    title: "Facturas Import.",
    subtitle: "Automatiza la recepción y validación de facturas de importación.",
    image: facturasImg,
    icon: <Receipt size={24} />,
    accentColor: "#C6961A",
    fullDescription: "Captura facturas y documentos anexos, extrae información relevante, valida consistencia con órdenes de compra y deriva excepciones para revisión. Reduce fricción en cuentas por pagar y control documental.",
    problems: [
      "Recepción manual de facturas y documentos asociados a importaciones.",
      "Errores en digitación, validación y comparación documental.",
      "Baja visibilidad sobre diferencias, faltantes o excepciones.",
    ],
    benefits: ["Menos reprocesos y errores manuales.", "Mejor control documental y tributario.", "Aprobaciones más rápidas.", "Trazabilidad para auditoría."],
    steps: [
      { title: "Ingreso documental", description: "Recibe factura, anexos y soporte asociado al proceso de importación." },
      { title: "Extracción", description: "Lee automáticamente proveedor, montos, fechas y campos críticos." },
      { title: "Validación", description: "Contrasta información con órdenes de compra y registros internos." },
      { title: "Gestión de excepciones", description: "Deriva diferencias y faltantes para revisión con trazabilidad." },
    ],
    integrations: ["ERP", "Correo", "OC / Compras", "Aduanas / logística", "Flujos de aprobación"],
  },
];

/* ── Modal ── */
function SolutionModal({ solution, onClose }: { solution: Solution; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[980px] max-h-[88vh] overflow-auto rounded-[28px] border shadow-2xl"
        style={{ background: "linear-gradient(to bottom, #111834, #0d1328)", borderColor: "rgba(255,255,255,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-11 h-11 rounded-full border border-white/14 bg-white/8 text-white hover:bg-white/15 transition-colors flex items-center justify-center"
        >
          <X size={18} />
        </button>

        <div className="p-8 md:p-9">
          <div className="flex items-start justify-between gap-5 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/7 border border-white/8 text-xs font-semibold uppercase tracking-wider" style={{ color: solution.accentColor }}>
                {solution.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3 mt-3">
                {solution.title}
              </h3>
              <p className="leading-relaxed max-w-[70ch]" style={{ color: "#a7b0c5" }}>{solution.fullDescription}</p>
            </div>
            <div className="hidden md:grid w-[72px] h-[72px] rounded-[22px] place-items-center border border-white/12 bg-white/7 text-white shrink-0">
              {solution.icon}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-3">Qué resuelve</h4>
              <ul className="space-y-2.5">
                {solution.problems.map((p, i) => (
                  <li key={i} className="relative pl-5 text-sm leading-relaxed" style={{ color: "#dbe4f9" }}>
                    <span className="absolute left-0 top-[9px] w-2 h-2 rounded-full" style={{ background: solution.accentColor }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-3">Beneficios</h4>
              <ul className="space-y-2.5">
                {solution.benefits.map((b, i) => (
                  <li key={i} className="relative pl-5 text-sm leading-relaxed" style={{ color: "#dbe4f9" }}>
                    <span className="absolute left-0 top-[9px] w-2 h-2 rounded-full" style={{ background: solution.accentColor }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 mt-4">
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-4">Cómo funciona</h4>
              <div className="space-y-3">
                {solution.steps.map((step, i) => (
                  <div key={i} className="grid grid-cols-[34px_1fr] gap-3 items-start p-3 rounded-2xl bg-white/4 border border-white/6">
                    <span className="w-[34px] h-[34px] grid place-items-center rounded-full text-white text-sm font-bold" style={{ background: `${solution.accentColor}33` }}>
                      {i + 1}
                    </span>
                    <div>
                      <strong className="text-white text-sm">{step.title}</strong>
                      <p className="text-sm leading-relaxed mt-0.5" style={{ color: "#a7b0c5" }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-3">
                {solution.integrations ? "Integraciones típicas" : "Casos de uso típicos"}
              </h4>
              {solution.integrations ? (
                <div className="flex flex-wrap gap-2.5 mt-3">
                  {solution.integrations.map((int) => (
                    <span key={int} className="px-3 py-2 rounded-xl bg-white/5 border border-white/8 text-sm font-medium" style={{ color: "#d4ddf4" }}>
                      {int}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5 mt-3">
                  {solution.useCases?.map((uc, i) => (
                    <li key={i} className="relative pl-5 text-sm leading-relaxed" style={{ color: "#dbe4f9" }}>
                      <span className="absolute left-0 top-[9px] w-2 h-2 rounded-full" style={{ background: solution.accentColor }} />
                      {uc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Accordion Gallery ── */
export default function SolutionShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalSolution, setModalSolution] = useState<Solution | null>(null);

  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: "radial-gradient(circle at top left, rgba(58,111,247,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(34,160,138,0.14), transparent 25%), linear-gradient(180deg, #09101f 0%, #0b1020 100%)",
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Soluciones destacadas
          </h2>
          <p className="text-base font-normal mt-3 max-w-[60ch]" style={{ color: "#a7b0c5" }}>
            Transformamos procesos críticos en ventajas competitivas usando IA, automatización y analítica avanzada.
          </p>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-4 items-stretch" style={{ height: "520px" }}>
            {solutions.map((sol, i) => {
              const isActive = activeIndex === i;

              return (
                <div
                  key={sol.id}
                  className="relative rounded-3xl overflow-hidden cursor-pointer shrink-0"
                  style={{
                    flex: isActive ? "4 1 0%" : "0 0 72px",
                    minWidth: isActive ? undefined : "72px",
                    transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)",
                    boxShadow: isActive ? `0 20px 60px ${sol.accentColor}30` : "0 2px 8px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => {
                    if (isActive) setModalSolution(sol);
                    else setActiveIndex(i);
                  }}
                >
                  {/* Background image */}
                  <img
                    src={sol.image}
                    alt={sol.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 1 }}
                  />

                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      zIndex: 2,
                      background: isActive
                        ? `linear-gradient(to top, ${sol.accentColor}CC 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.3) 100%)`
                        : "rgba(0,0,0,0.55)",
                    }}
                  />

                  {/* Collapsed: rotated title */}
                  <span
                    className="absolute font-semibold text-white whitespace-nowrap pointer-events-none"
                    style={{
                      zIndex: 3,
                      fontSize: "18px",
                      letterSpacing: "-0.01em",
                      left: "50%",
                      bottom: "110px",
                      transform: "translateX(-50%) rotate(-90deg)",
                      transformOrigin: "center center",
                      opacity: isActive ? 0 : 1,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    {sol.title}
                  </span>

                  {/* Expanded: content */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-7 flex flex-col justify-end"
                    style={{
                      zIndex: 3,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.5s cubic-bezier(0.4,0,0.2,1) 0.15s",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <span
                      className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{
                        background: `${sol.accentColor}30`,
                        color: "white",
                        border: `1px solid ${sol.accentColor}50`,
                      }}
                    >
                      {sol.icon}
                      {sol.category}
                    </span>

                    <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight mb-2">
                      {sol.title}
                    </h3>
                    <p className="text-white/85 text-base leading-relaxed mb-4 max-w-[50ch]">
                      {sol.subtitle}
                    </p>

                    <button
                      className="self-start px-5 py-2.5 rounded-full text-white text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-transform"
                      style={{
                        background: sol.accentColor,
                        boxShadow: `0 10px 24px ${sol.accentColor}50`,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalSolution(sol);
                      }}
                    >
                      Ver cómo funciona
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      {/* Modal */}
      {modalSolution && (
        <SolutionModal solution={modalSolution} onClose={() => setModalSolution(null)} />
      )}
    </section>
  );
}
