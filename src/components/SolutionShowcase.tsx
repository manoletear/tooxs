import { useState, type ReactNode } from "react";
import { X, FileText, Shield, FolderSearch, Receipt } from "lucide-react";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

/* ── Data ── */
interface SolutionMetric { label: string }
interface SolutionStep { title: string; description: string }
interface Solution {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  hoverCopy: string;
  tags: string[];
  icon: ReactNode;
  accentClass: string;
  // Modal
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
    summary: "Captura, interpreta y enruta documentos críticos sin trabajo manual. Extrae datos, clasifica contenido y activa flujos automáticos conectados con tus sistemas.",
    hoverCopy: "Digitaliza, entiende y mueve documentos automáticamente.",
    tags: ["Extracción automática", "Clasificación inteligente", "Trazabilidad"],
    icon: <FileText size={24} />,
    accentClass: "from-blue-500/20",
    fullDescription: "DocuEngine transforma documentos dispersos en flujos de trabajo estructurados. Lee contenido, identifica tipo documental, extrae datos relevantes y activa procesos automáticos según reglas de negocio, integrándose con sistemas como ERP, correo, SharePoint o repositorios documentales.",
    problems: [
      "Documentos que llegan por múltiples canales y generan carga manual.",
      "Procesos lentos por clasificación, lectura o digitación repetitiva.",
      "Falta de trazabilidad sobre estado, responsable y resultado del documento.",
    ],
    benefits: [
      "Menos digitación manual.",
      "Menos errores operativos.",
      "Mayor velocidad de respuesta.",
      "Trazabilidad completa del ciclo documental.",
    ],
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
    summary: "Analítica visual en tiempo real para entornos industriales y operacionales. Supervisa, alerta y documenta eventos críticos para fortalecer la prevención.",
    hoverCopy: "Ve riesgos operacionales en tiempo real.",
    tags: ["Video en tiempo real", "Alertas tempranas", "Evidencia visual"],
    icon: <Shield size={24} />,
    accentClass: "from-red-500/20",
    fullDescription: "SafeVision utiliza análisis de video para identificar conductas, condiciones o eventos de riesgo en tiempo real. Su objetivo es fortalecer la prevención, generar alertas tempranas y apoyar decisiones de seguridad en faenas, plantas, centros logísticos y operaciones críticas.",
    problems: [
      "Dependencia excesiva de supervisión humana para detectar eventos de riesgo.",
      "Baja capacidad de reacción ante condiciones inseguras en tiempo real.",
      "Falta de evidencia visual organizada para investigación y mejora continua.",
    ],
    benefits: [
      "Prevención proactiva.",
      "Respuesta más rápida ante eventos críticos.",
      "Mayor control sobre zonas de alto riesgo.",
      "Evidencia útil para auditoría y aprendizaje operacional.",
    ],
    steps: [
      { title: "Monitoreo", description: "Recibe video desde cámaras o flujos conectados a la operación." },
      { title: "Detección", description: "Analiza patrones predefinidos para reconocer eventos, conductas o condiciones de riesgo." },
      { title: "Alerta", description: "Notifica a supervisores o sistemas cuando se supera un umbral de riesgo." },
      { title: "Registro", description: "Conserva evidencia y trazabilidad para análisis posterior y mejora preventiva." },
    ],
    useCases: [
      "Monitoreo de zonas restringidas.",
      "Control de conductas inseguras.",
      "Verificación de protocolos en terreno.",
      "Apoyo a comités de seguridad y prevención.",
    ],
  },
  {
    id: "gestor",
    category: "Gestión de conocimiento",
    title: "Gestor Documental Inteligente",
    subtitle: "Ordena, encuentra y controla tu información crítica.",
    summary: "Centraliza documentos, versiones y permisos en un solo entorno. Facilita la búsqueda por contenido y convierte repositorios desordenados en conocimiento utilizable.",
    hoverCopy: "Tu documentación, ordenada y encontrable.",
    tags: ["Repositorio central", "Versionado", "Búsqueda semántica"],
    icon: <FolderSearch size={24} />,
    accentClass: "from-emerald-500/20",
    fullDescription: "Esta solución centraliza documentos corporativos, controla versiones, organiza permisos y facilita el acceso mediante búsqueda semántica. Su foco es la gobernanza documental y la disponibilidad del conocimiento, no solo el procesamiento de entradas.",
    problems: [
      "Repositorios dispersos, documentos duplicados y versiones inconsistentes.",
      "Dificultad para encontrar información crítica por nombre o ubicación.",
      "Pérdida de conocimiento por dependencia de personas o carpetas aisladas.",
    ],
    benefits: [
      "Mayor gobernanza documental.",
      "Acceso más rápido a información clave.",
      "Control de permisos y versiones.",
      "Menor pérdida de conocimiento corporativo.",
    ],
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
    title: "Recepción de Facturas de Importación",
    subtitle: "Automatiza la recepción y validación de facturas de importación.",
    summary: "Reduce errores, acelera la revisión documental y mejora el control operativo y tributario mediante captura, validación y gestión de excepciones.",
    hoverCopy: "Facturas de importación, validadas y trazables.",
    tags: ["Lectura de facturas", "Cruce documental", "Aprobación trazable"],
    icon: <Receipt size={24} />,
    accentClass: "from-amber-500/20",
    fullDescription: "La solución captura facturas y documentos anexos, extrae información relevante, valida consistencia con órdenes de compra, embarques o registros internos y deriva excepciones para revisión. Su foco es reducir fricción en cuentas por pagar, comercio exterior y control documental.",
    problems: [
      "Recepción manual de facturas y documentos asociados a importaciones.",
      "Errores en digitación, validación y comparación documental.",
      "Baja visibilidad sobre diferencias, faltantes o excepciones.",
    ],
    benefits: [
      "Menos reprocesos y errores manuales.",
      "Mejor control documental y tributario.",
      "Aprobaciones más rápidas.",
      "Trazabilidad para auditoría y cumplimiento.",
    ],
    steps: [
      { title: "Ingreso documental", description: "Recibe factura, anexos y soporte asociado al proceso de importación." },
      { title: "Extracción", description: "Lee automáticamente proveedor, montos, fechas, referencias y otros campos críticos." },
      { title: "Validación", description: "Contrasta información con órdenes de compra, embarques o registros internos." },
      { title: "Gestión de excepciones", description: "Deriva diferencias y faltantes para revisión y aprobación con trazabilidad." },
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
        className="relative w-full max-w-[980px] max-h-[88vh] overflow-auto rounded-[28px] bg-gradient-to-b from-[#111834] to-[#0d1328] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 mt-4 z-10 w-11 h-11 rounded-full border border-white/14 bg-white/8 text-white hover:bg-white/15 transition-colors flex items-center justify-center"
        >
          <X size={18} />
        </button>

        <div className="p-8 md:p-9">
          {/* Head */}
          <div className="flex items-start justify-between gap-5 mb-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/7 border border-white/8 text-[#d9e2f7] text-xs font-semibold uppercase tracking-wider mb-3">
                {solution.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                {solution.title}
              </h3>
              <p className="text-[#a7b0c5] leading-relaxed max-w-[70ch]">{solution.fullDescription}</p>
            </div>
            <div className="hidden md:grid w-[72px] h-[72px] rounded-[22px] place-items-center border border-white/12 bg-white/7 text-white shrink-0">
              {solution.icon}
            </div>
          </div>

          {/* Problems & Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-3">Qué resuelve</h4>
              <ul className="space-y-2.5">
                {solution.problems.map((p, i) => (
                  <li key={i} className="relative pl-5 text-[#dbe4f9] leading-relaxed text-sm">
                    <span className="absolute left-0 top-[9px] w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-3">Beneficios</h4>
              <ul className="space-y-2.5">
                {solution.benefits.map((b, i) => (
                  <li key={i} className="relative pl-5 text-[#dbe4f9] leading-relaxed text-sm">
                    <span className="absolute left-0 top-[9px] w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* How it works & Integrations */}
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 mt-4">
            <div className="p-5 rounded-[20px] bg-white/5 border border-white/8">
              <h4 className="text-white font-semibold mb-4">Cómo funciona</h4>
              <div className="space-y-3">
                {solution.steps.map((step, i) => (
                  <div key={i} className="grid grid-cols-[34px_1fr] gap-3 items-start p-3 rounded-2xl bg-white/4 border border-white/6">
                    <span className="w-[34px] h-[34px] grid place-items-center rounded-full bg-blue-500/20 text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <strong className="text-white text-sm">{step.title}</strong>
                      <p className="text-[#a7b0c5] text-sm leading-relaxed mt-0.5">{step.description}</p>
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
                    <span key={int} className="px-3 py-2 rounded-xl bg-white/5 border border-white/8 text-[#d4ddf4] text-sm font-medium">
                      {int}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2.5 mt-3">
                  {solution.useCases?.map((uc, i) => (
                    <li key={i} className="relative pl-5 text-[#dbe4f9] leading-relaxed text-sm">
                      <span className="absolute left-0 top-[9px] w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500" />
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

/* ── Card ── */
function SolutionCard({ solution, onClick }: { solution: Solution; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-3xl border border-white/12 bg-gradient-to-b from-white/7 to-white/4 p-6 md:p-7 min-h-[320px] shadow-[0_16px_40px_rgba(0,0,0,0.28)] overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1.5 hover:border-white/20 hover:from-white/10 hover:to-white/5 flex flex-col`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow */}
      <div className={`absolute -top-[40%] -left-[10%] w-[220px] h-[220px] rounded-full bg-gradient-radial ${solution.accentClass} to-transparent opacity-60 -z-[1] transition-transform duration-300 group-hover:scale-110`} />

      {/* Top row */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/7 border border-white/8 text-[#d9e2f7] text-xs font-semibold uppercase tracking-wider">
          {solution.category}
        </span>
        <div className="w-12 h-12 rounded-[14px] grid place-items-center bg-white/8 border border-white/10 text-white shrink-0">
          {solution.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight mb-2 max-w-[14ch]">
        {solution.title}
      </h3>
      <p className="text-[#eaf0ff] text-base leading-relaxed mb-4 max-w-[42ch]">{solution.subtitle}</p>
      <p className="text-[#a7b0c5] text-sm leading-relaxed max-w-[44ch]">{solution.summary}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {solution.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/8 text-[#d2dbf2] text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6 flex items-center justify-between gap-4">
        <p className={`text-[#d8e1f8] text-sm max-w-[26ch] transition-opacity duration-200 ${hovered ? "opacity-100" : "opacity-0"}`}>
          {solution.hoverCopy}
        </p>
        <button className="shrink-0 px-4 py-2.5 rounded-full bg-gradient-to-br from-[#3A6FF7] to-[#6f93ff] text-white text-sm font-bold shadow-[0_10px_24px_rgba(58,111,247,0.32)] hover:-translate-y-0.5 transition-transform">
          Ver cómo funciona
        </button>
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function SolutionShowcase() {
  const [activeSolution, setActiveSolution] = useState<Solution | null>(null);

  return (
    <section className="py-20 relative overflow-hidden" style={{
      background: "radial-gradient(circle at top left, rgba(58,111,247,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(34,160,138,0.14), transparent 25%), linear-gradient(180deg, #09101f 0%, #0b1020 100%)",
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Soluciones destacadas
          </h2>
          <p className="text-[#a7b0c5] text-base font-normal mt-3 max-w-[60ch]">
            Transformamos procesos críticos en ventajas competitivas usando IA, automatización y analítica avanzada.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.id} delay={i * 100}>
              <SolutionCard solution={sol} onClick={() => setActiveSolution(sol)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeSolution && (
        <SolutionModal solution={activeSolution} onClose={() => setActiveSolution(null)} />
      )}
    </section>
  );
}
