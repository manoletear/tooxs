// Shared articles data for Newsletter
import heroAiAgents from "@/assets/newsletter/hero-ai-agents.jpg";
import articleDigitalTransform from "@/assets/newsletter/article-digital-transform.jpg";
import articleDataReport from "@/assets/newsletter/article-data-report.jpg";
import articleAutomation from "@/assets/newsletter/article-automation.jpg";
import articleSovereignAi from "@/assets/newsletter/article-sovereign-ai.jpg";
import podcastInterview from "@/assets/newsletter/podcast-interview.jpg";
import articleHealthcareAi from "@/assets/newsletter/article-healthcare-ai.jpg";
import articleAgentesIa from "@/assets/newsletter/article-agentes-ia.jpg";
import articleCeoCambio from "@/assets/newsletter/article-ceo-cambio.jpg";
import articleAltaDireccion from "@/assets/newsletter/article-alta-direccion.jpg";
import articleDilemasCeo from "@/assets/newsletter/article-dilemas-ceo.jpg";
import articleEquiposMundial from "@/assets/newsletter/article-equipos-mundial.jpg";
import articleLiderazgoSiglo from "@/assets/newsletter/article-liderazgo-siglo.jpg";
import articleManufacturaIa from "@/assets/newsletter/article-manufactura-ia.jpg";
import articleGanarCurvas from "@/assets/newsletter/article-ganar-curvas.jpg";
import articleRedisenoOrg from "@/assets/newsletter/article-rediseno-org.jpg";
import articleGuiaCios from "@/assets/newsletter/article-guia-cios.jpg";
import articleIaAgenticaLecciones from "@/assets/newsletter/article-ia-agentica-lecciones.jpg";
import articleInnovacionIndustria from "@/assets/newsletter/article-innovacion-industria.jpg";
import articlePuntosCiegosCeo from "@/assets/newsletter/article-puntos-ciegos-ceo.jpg";
import articleReconfigurarTrabajo from "@/assets/newsletter/article-reconfigurar-trabajo.jpg";
import articleTodosTechies from "@/assets/newsletter/article-todos-techies.jpg";
import articleModeloOperativo from "@/assets/newsletter/article-modelo-operativo.jpg";
import articleMovilidadLogistica from "@/assets/newsletter/article-movilidad-logistica.jpg";
import articleAccionesCeos2023 from "@/assets/newsletter/article-acciones-ceos-2023.jpg";
import articleCeoAltoPotencial from "@/assets/newsletter/article-ceo-alto-potencial.jpg";
import articleEstadoIa2024 from "@/assets/newsletter/article-estado-ia-2024.jpg";
import articleResetMinorista from "@/assets/newsletter/article-reset-minorista.jpg";
import articlePlantaSiderurgica from "@/assets/newsletter/article-planta-siderurgica.jpg";
import articleColaboracionDigital from "@/assets/newsletter/article-colaboracion-digital.jpg";
import articleEmpresaReconfigurada from "@/assets/newsletter/article-empresa-reconfigurada.jpg";
import articleIndustria40 from "@/assets/newsletter/article-industria-4-0.jpg";
import articleDialogosCeos from "@/assets/newsletter/article-dialogos-ceos.jpg";
import articleNuevoLiderazgo from "@/assets/newsletter/article-nuevo-liderazgo.jpg";
import articleFuturoFuerzaLaboral from "@/assets/newsletter/article-futuro-fuerza-laboral.jpg";
import articleConsumidor2025 from "@/assets/newsletter/article-consumidor-2025.jpg";
import articleEnergiaRenovable from "@/assets/newsletter/article-energia-renovable.jpg";
import articleServiciosIndustriales from "@/assets/newsletter/article-servicios-industriales.jpg";
import articleConsumidor2024 from "@/assets/newsletter/article-consumidor-2024.jpg";
import articleMandosIntermedios from "@/assets/newsletter/article-mandos-intermedios.jpg";
import articleTrabajoRemoto from "@/assets/newsletter/article-trabajo-remoto.jpg";
import articleDeconstruirSilos from "@/assets/newsletter/article-deconstruir-silos.jpg";

export interface Article {
  id: number;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}

/* ═══════════ CATEGORY GROUPING ═══════════ */
/* Mapea las 30+ categorías específicas a 5 grupos macro para filtrado en UI */

export type CategoryGroup =
  | "Estrategia & Liderazgo"
  | "AI & Tecnología"
  | "Operaciones & Industria"
  | "Talento & Cultura"
  | "Mercados & Consumo";

export const CATEGORY_GROUPS: CategoryGroup[] = [
  "Estrategia & Liderazgo",
  "AI & Tecnología",
  "Operaciones & Industria",
  "Talento & Cultura",
  "Mercados & Consumo",
];

export function getCategoryGroup(category: string): CategoryGroup {
  const c = category.toLowerCase();
  if (
    c.includes("ai") ||
    c.includes("ia ") ||
    c.includes(" ia") ||
    c === "ia" ||
    c.includes("tech") ||
    c.includes("datos") ||
    c.includes("salud")
  ) {
    return "AI & Tecnología";
  }
  if (
    c.includes("talento") ||
    c.includes("cultura") ||
    c.includes("equipos") ||
    c.includes("desarrollo")
  ) {
    return "Talento & Cultura";
  }
  if (
    c.includes("consumo") ||
    c.includes("mercados") ||
    c.includes("retail") ||
    c.includes("macroeconomía")
  ) {
    return "Mercados & Consumo";
  }
  if (
    c.includes("operaciones") ||
    c.includes("manufactura") ||
    c.includes("industria") ||
    c.includes("logística") ||
    c.includes("energía") ||
    c.includes("eficiencia") ||
    c.includes("casos")
  ) {
    return "Operaciones & Industria";
  }
  // Estrategia, Liderazgo, CEO, C-Suite, Gobernanza, Org, Insights, Libros, default
  return "Estrategia & Liderazgo";
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "riesgo-geopolitico-oportunidad-empresarial",
    category: "Estrategia",
    date: "14 Abril 2026",
    readTime: "6 min",
    title: "Riesgo geopolítico como oportunidad: cómo las empresas industriales pueden ganar en la incertidumbre",
    excerpt: "En un mundo fragmentado por tensiones comerciales y aranceles cambiantes, las empresas que mapean su exposición geopolítica y abrazan la agilidad no solo sobreviven — prosperan.",
    image: heroAiAgents,
    content: `La volatilidad geopolítica ya no es un "cisne negro" — es el nuevo normal. Guerras comerciales, sanciones cruzadas, reshoring y nearshoring están reconfigurando las cadenas de suministro globales. Y para las empresas de minería, energía e industria en Latinoamérica, esto no es solo ruido de fondo: es una variable estratégica de primer orden.

## El concepto clave: "Valor en riesgo geopolítico"

McKinsey propone que las empresas multinacionales cuantifiquen su "geopolitical value at stake" — el valor empresarial directamente vinculado a cambios regulatorios, arancelarios o de acceso a mercados causados por tensiones entre países. No se trata de hacer política, sino de hacer números.

Para una minera chilena que exporta cobre a China y litio a Europa, esto significa modelar escenarios donde los aranceles cambian, donde un país restringe exportaciones de minerales críticos, o donde un acuerdo comercial se cae.

## Qué están haciendo las empresas líderes

Las compañías que mejor navegan este entorno comparten tres prácticas:

**1. Mapeo granular de exposición.** No basta con saber que "exportamos a Asia". Las líderes desglosan su cadena de valor por país, proveedor y ruta logística, identificando exactamente dónde están los puntos de quiebre.

**2. Escenarios dinámicos, no estáticos.** En vez de un plan A y un plan B, mantienen modelos que se actualizan con datos en tiempo real — aranceles, movimientos regulatorios, señales diplomáticas.

**3. Agilidad operacional.** Capacidad de redirigir flujos comerciales, cambiar proveedores o ajustar producción en semanas, no en trimestres. Esto requiere inversión en tecnología y automatización de decisiones.

## Por qué esto importa para tu empresa

Si operas en minería, manufactura o logística en Chile o LATAM, tu exposición geopolítica probablemente es mayor de lo que crees. El litio, el cobre, el hidrógeno verde — todos son recursos estratégicos en la nueva geopolítica de los materiales críticos.

La pregunta no es si te va a afectar, sino cuándo y cuánto. Las empresas que hoy invierten en visibilidad de su cadena de suministro y en herramientas de modelado de escenarios van a tener una ventaja brutal cuando venga el próximo shock.

## El take de Tooxs

En Tooxs ayudamos a empresas industriales a construir esa agilidad operacional con tecnología. Desde dashboards de riesgo en tiempo real hasta workflows automatizados que disparan alertas cuando un indicador geopolítico cruza un umbral. La geopolítica no se controla, pero la respuesta a ella sí se puede diseñar.`,
  },
  {
    id: 2,
    slug: "ai-scheduling-proyectos-capital",
    category: "AI & Operaciones",
    date: "14 Abril 2026",
    readTime: "5 min",
    title: "Scheduling generativo: cómo la IA está transformando la ejecución de proyectos de capital",
    excerpt: "McKinsey y ALICE Technologies integran IA y analytics avanzados para que las constructoras y operadoras muevan más rápido, gestionen riesgo y desbloqueen valor medible en sus proyectos.",
    image: articleDigitalTransform,
    content: `Si has gestionado un proyecto de construcción o expansión industrial grande, sabes que el scheduling es donde se gana o se pierde la partida. Un día de retraso en una planta minera puede costar millones. Y el scheduling tradicional — basado en Gantt charts estáticos y la experiencia del project manager — simplemente no escala.

## La alianza McKinsey + ALICE Technologies

McKinsey acaba de anunciar una alianza con ALICE Technologies para llevar "generative scheduling" a proyectos de capital. ¿Qué significa esto? En vez de que un equipo humano construya un cronograma y lo ajuste reactivamente, un motor de IA genera miles de escenarios de ejecución posibles, optimizando por tiempo, costo y riesgo simultáneamente.

## Cómo funciona el scheduling generativo

Imagina que estás construyendo una planta de procesamiento de litio. El scheduling generativo:

**Modela todas las restricciones** — equipos disponibles, clima, permisos, dependencias entre tareas, disponibilidad de materiales.

**Genera cientos de cronogramas posibles** — no uno solo, sino un espacio de soluciones que el equipo puede explorar.

**Optimiza dinámicamente** — cuando algo cambia (un equipo se retrasa, un material no llega), recalcula automáticamente el mejor camino hacia adelante.

**Cuantifica el riesgo** — cada escenario viene con su probabilidad de éxito y su impacto en costo.

## Por qué esto cambia el juego en minería e industria

Los proyectos de capital en minería son enormes, complejos y tienen tolerancia cero al retraso. Un scheduling 10% más eficiente en un proyecto de $500M son $50M en valor. Y eso es conservador.

Además, esto no es ciencia ficción. La tecnología ya existe y está en producción. Lo que falta en muchas empresas latinoamericanas es la integración: conectar los datos de obra, los ERPs, los sensores de campo y las herramientas de planificación en un flujo continuo.

## El take de Tooxs

Esto es exactamente el tipo de integración que construimos. El scheduling generativo necesita datos limpios y conectados — y ahí es donde herramientas como n8n, Supabase y APIs personalizadas brillan. Si tu empresa está evaluando digitalizar la gestión de proyectos de capital, hablemos. El ROI es brutal y medible.`,
  },
  {
    id: 3,
    slug: "estado-alimentos-bebidas-cpg-2026",
    category: "Industria",
    date: "8 Abril 2026",
    readTime: "5 min",
    title: "El estado de alimentos y bebidas 2026: por qué las CPG deben reinventarse o perder terreno",
    excerpt: "La erosión de valor en bienes de consumo se está acelerando. Los líderes que no reforman sus portafolios, afinan su propuesta de valor y adoptan AI a fondo van a ceder terreno — rápido.",
    image: articleDataReport,
    content: `El último reporte de McKinsey sobre el estado de la industria de alimentos y bebidas pinta un panorama claro: la erosión lenta de valor que venían sufriendo las empresas de consumo masivo (CPG) ahora se está acelerando. Y los que no actúen van a quedarse atrás.

## Las tres palancas que separan a los líderes

McKinsey identifica tres áreas donde las CPG que crecen se diferencian:

**1. Reformar el portafolio.** Los consumidores cambian más rápido que los catálogos de productos. Las líderes están eliminando SKUs de bajo rendimiento y concentrando inversión en las categorías con mayor margen y crecimiento.

**2. Afilar la propuesta de valor.** El consumidor de 2026 es más informado, más sensible al precio y más exigente con la calidad. Las marcas que ganan son las que logran comunicar claramente por qué valen lo que cuestan.

**3. Adoptar AI y tech a fondo.** No como piloto, no como POC, sino como parte integral de pricing, demand forecasting, gestión de categorías y supply chain. Las CPG que han integrado IA en revenue growth management están viendo mejoras de 3-5% en margen.

## La conexión con industria y minería

¿Qué tiene que ver esto con minería? Más de lo que parece. Las cadenas de suministro de CPG dependen de materias primas, packaging, logística — todo conectado a la industria pesada.

## El take de Tooxs

Para las empresas industriales que proveen a CPGs, la señal es clara: tus clientes se están sofisticando tecnológicamente y van a exigir lo mismo de ti. Tener un ERP moderno, automatizaciones inteligentes y visibilidad en tiempo real de tu operación ya no es un "nice to have" — es un requisito para mantener contratos.`,
  },
  {
    id: 4,
    slug: "que-es-ia-soberana",
    category: "AI & Geopolítica",
    date: "Abril 2026",
    readTime: "5 min",
    title: "IA Soberana: por qué los países quieren controlar su propio stack de inteligencia artificial",
    excerpt: "El control sobre modelos de IA, datos de entrenamiento e infraestructura de cómputo se está convirtiendo en una prioridad estratégica nacional.",
    image: articleSovereignAi,
    content: `"IA Soberana" suena a concepto de think tank, pero tiene implicaciones muy concretas para cualquier empresa que use (o planee usar) inteligencia artificial.

## Qué es la IA Soberana

En términos simples: es la capacidad de un país o región de desarrollar, operar y controlar su propia infraestructura de IA — desde los chips y data centers hasta los modelos de lenguaje y los datos de entrenamiento.

¿Por qué importa? Porque si tu empresa depende 100% de modelos de IA alojados en servidores de otro país, regulados por leyes de otro país, estás expuesto a un riesgo que la mayoría no ha mapeado.

## Los tres pilares del stack soberano

McKinsey desglosa la IA Soberana en tres capas:

**Infraestructura** — Data centers, chips (GPU/TPU), redes de conectividad. Aquí China y EEUU llevan la delantera, pero Europa, India y países del Golfo están invirtiendo fuerte.

**Modelos y plataformas** — Modelos de lenguaje entrenados con datos locales, en idiomas locales, con regulaciones locales.

**Datos y gobernanza** — Quién controla los datos de entrenamiento, bajo qué marco legal, con qué garantías de privacidad.

## Qué significa para LATAM y Chile

Latinoamérica está notablemente ausente de la carrera por IA soberana. No tenemos modelos de lenguaje propios de escala, dependemos de infraestructura de cloud en EEUU, y nuestros marcos regulatorios de IA están en pañales.

## El take de Tooxs

En Tooxs diseñamos arquitecturas de IA que permiten a nuestros clientes usar lo mejor del mercado sin quedar atrapados en un vendor lock-in. APIs agnósticas, datos que puedes hostear donde quieras, y workflows que se pueden conectar a cualquier modelo. Soberanía práctica, no teórica.`,
  },
  {
    id: 5,
    slug: "de-implementacion-a-impacto-ai",
    category: "AI & Transformación",
    date: "Abril 2026",
    readTime: "6 min",
    title: "De implementación a impacto: qué hacen bien las organizaciones que realmente ganan con IA",
    excerpt: "El caso Reckitt y otras empresas líderes muestra que el gap entre 'tener IA' y 'generar valor con IA' se cierra con cambios organizacionales, no solo tecnológicos.",
    image: articleDigitalTransform,
    content: `Hay un patrón que vemos una y otra vez: empresas que invierten en IA, hacen pilotos exitosos... y nunca escalan. El POC funciona, el board se entusiasma, pero 12 meses después el impacto real en el P&L es marginal. ¿Qué está pasando?

## El caso Reckitt: de pilot hell a revenue growth

McKinsey destaca el caso de Reckitt, el gigante global de productos de salud y hogar, que decidió usar IA para redefinir su revenue growth management. No como un experimento, sino como una transformación completa de cómo toman decisiones de pricing, promociones y mix de canal.

La clave no fue el modelo de IA — fue cómo cambiaron la organización alrededor de él.

## Tres patrones de las organizaciones que generan impacto

**1. Cambian el flujo de decisiones, no solo las herramientas.** No basta con darle un dashboard de IA al gerente de ventas. Las empresas que generan impacto redefinen QUIÉN toma QUÉ decisión y con QUÉ dato.

**2. Miden impacto en dinero, no en adopción.** Muchas empresas miden "% de usuarios que usan la herramienta de IA". Las ganadoras miden "$ adicionales generados por decisiones informadas por IA".

**3. Construyen capacidades internas.** No terciarizan todo a consultoras y vendors. Desarrollan talento interno que entiende tanto el negocio como la tecnología.

## La trampa del "piloto eterno"

En LATAM vemos esto constantemente. Empresas mineras que llevan 2 años en "fase piloto" de mantenimiento predictivo. Retailers con un chatbot que nadie usa. La causa raíz casi siempre es la misma: la tecnología funciona, pero la organización no cambió para aprovecharla.

## El take de Tooxs

Cuando implementamos soluciones de IA para nuestros clientes, insistimos en tres cosas: que el output de la IA esté conectado a una acción concreta, que midamos impacto en KPIs de negocio desde el día 1, y que capacitemos al equipo interno. La IA sin cambio organizacional es solo un gasto de IT disfrazado de innovación.`,
  },
  {
    id: 6,
    slug: "agentes-ia-camino-escalamiento",
    category: "AI & Desarrollo",
    date: "10 Abril 2026",
    readTime: "5 min",
    title: "El camino de los agentes de IA: menos demos espectaculares, más cambio operativo",
    excerpt: "El CEO de Factory explica por qué escalar IA en ingeniería de software depende menos de modelos más poderosos y más de cómo se reorganizan los equipos.",
    image: podcastInterview,
    content: `Matan Grinberg, CEO de Factory — una empresa que construye herramientas de IA para ingeniería de software — tiene una perspectiva que debería incomodar a muchos entusiastas de la IA: los demos no importan tanto como el modelo operativo.

## La tesis central

En su entrevista con McKinsey, Grinberg argumenta que el cuello de botella para escalar agentes de IA en empresas no es la capacidad del modelo. GPT-5, Claude Opus, Gemini Ultra — todos son impresionantemente capaces. El problema real es que las organizaciones no han rediseñado sus flujos de trabajo para incorporar agentes como participantes activos del proceso.

## Qué significa "cambiar el modelo operativo"

No es un eufemismo corporativo. Significa cosas concretas:

**Redefinir roles.** Si un agente de IA puede escribir el 80% del código de un feature, ¿qué hace el developer? Review, arquitectura, definición de requerimientos.

**Rediseñar flujos de revisión.** El code review de código generado por IA es diferente al de código humano. Necesitas nuevos criterios, nuevas herramientas, nuevas habilidades.

**Ajustar expectativas de velocidad.** Si tu equipo puede entregar 5x más rápido con agentes, pero tu proceso de QA sigue siendo manual y lento, creaste un cuello de botella nuevo.

## El take de Tooxs

Esto es exactamente nuestra experiencia con clientes. Cuando implementamos agentes de IA, el 20% del esfuerzo es la tecnología y el 80% es el cambio de proceso. Las empresas que más valor capturan son las que se atreven a rediseñar cómo trabajan, no solo a agregar una herramienta más al stack.`,
  },
  {
    id: 7,
    slug: "competitividad-eeuu-ai-talento-deuda",
    category: "Macroeconomía",
    date: "9 Abril 2026",
    readTime: "5 min",
    title: "¿Puede EEUU mantener su ventaja competitiva? Lo que AI, talento y deuda revelan sobre el futuro",
    excerpt: "Un nuevo estudio examina cómo la convergencia de IA, talento, infraestructura y deuda está reconfigurando la competitividad estadounidense — con lecciones para LATAM.",
    image: podcastInterview,
    content: `El McKinsey Global Institute acaba de publicar un análisis profundo sobre la competitividad de Estados Unidos. La pregunta central es directa: ¿puede EEUU mantener la ventaja que ha tenido en las últimas décadas?

## Las cuatro fuerzas en juego

**IA como multiplicador.** EEUU lidera en desarrollo de IA — tiene a OpenAI, Anthropic, Google DeepMind, Meta AI. Pero liderar en investigación no garantiza liderar en adopción.

**Talento como cuello de botella.** La ventaja histórica de EEUU ha sido atraer al mejor talento global. Con restricciones migratorias y competencia de hubs como Dubai, Singapur y Londres, esa ventaja se erosiona.

**Infraestructura envejecida.** Mientras China construye trenes de alta velocidad y redes 5G masivas, EEUU lucha por mantener puentes y carreteras.

**Deuda creciente.** La deuda nacional de EEUU limita la inversión pública futura.

## La lectura para LATAM

Si EEUU pierde competitividad en manufactura avanzada, el nearshoring a México y otros países de LATAM se acelera. Chile ya está viendo esto con centros de datos y producción de litio.

Pero para capturar esta oportunidad, las empresas latinoamericanas necesitan estar tecnológicamente listas.

## El take de Tooxs

Cada señal de reshoring o nearshoring es una oportunidad concreta para nuestros clientes. Pero la oportunidad tiene fecha de vencimiento: los que estén digitalizados la capturan, los que no, ven pasar el tren.`,
  },
  {
    id: 8,
    slug: "agentic-ai-retail-merchandising",
    category: "AI & Retail",
    date: "2 Abril 2026",
    readTime: "5 min",
    title: "De dashboards a decisiones: cómo la IA agéntica está transformando el merchandising",
    excerpt: "La IA agéntica puede automatizar trabajo rutinario y mejorar decisiones de merchandising a escala.",
    image: articleAutomation,
    content: `El retail está viviendo una transformación silenciosa. Mientras todos hablan de chatbots y asistentes virtuales, la aplicación más impactante de la IA en retail está ocurriendo en el back-office: en las decisiones de merchandising.

## Qué es la IA agéntica en merchandising

A diferencia de un dashboard que te muestra datos (y espera que tú actúes), un agente de IA toma acciones autónomamente dentro de parámetros definidos. En merchandising, esto significa:

**Ajuste automático de precios** basado en demanda, inventario, competencia y elasticidad — en tiempo real, no semanal.

**Recomendaciones de surtido** que consideran miles de variables que un category manager nunca podría procesar.

**Gestión de promociones** donde el agente decide qué producto promocionar, en qué tienda, a qué precio, y mide el resultado automáticamente.

## El cambio de paradigma

McKinsey lo resume bien: pasamos de "el humano analiza datos y decide" a "el agente decide y el humano supervisa y ajusta". Esto no elimina al merchandiser — lo potencia.

## El take de Tooxs

Ya estamos construyendo agentes de este tipo para clientes industriales: agentes que monitorean inventario de repuestos y generan órdenes de compra automáticamente, agentes que ajustan pricing de servicios basados en demanda y capacidad.`,
  },
  {
    id: 9,
    slug: "rewired-segunda-edicion-transformacion-ai",
    category: "Libros & Ideas",
    date: "6 Abril 2026",
    readTime: "4 min",
    title: "Rewired 2da edición: el playbook actualizado para ganar con tecnología e IA",
    excerpt: "McKinsey actualiza su libro más influyente sobre transformación digital con nuevos capítulos sobre IA generativa, agentes y lo que hacen diferente las empresas que realmente transforman.",
    image: articleAutomation,
    content: `"Rewired" de McKinsey se convirtió en el libro de referencia para líderes que querían entender cómo las empresas realmente se transforman con tecnología. La segunda edición llega en un momento perfecto.

## Qué hay de nuevo

Los autores agregan capítulos sobre:

**IA generativa en producción.** Ya no estamos en la fase de "experimentemos con ChatGPT". Las empresas líderes están poniendo modelos de IA en el centro de procesos críticos de negocio.

**Agentes de IA como workforce.** La segunda edición aborda directamente el concepto de agentes — software que actúa autónomamente — y cómo integrarlos en la organización.

**El rol del CEO como líder tech.** Un argumento fuerte del libro: la transformación digital no puede delegarse al CTO.

## La tesis central que se mantiene

El mensaje core de Rewired sigue intacto: la transformación digital no es un proyecto de IT. Es una rewiring — un recableado — de cómo opera la empresa entera.

## El take de Tooxs

Si eres CEO, gerente general o líder de operaciones en una empresa industrial, este libro debería estar en tu mesa. En Tooxs somos el equipo que ejecuta ese "rewiring" — la lectura del libro es el contexto, nosotros somos la implementación.`,
  },
  {
    id: 10,
    slug: "healthcare-digital-alcanzar-pacientes",
    category: "Salud & Tech",
    date: "7 Abril 2026",
    readTime: "4 min",
    title: "Salud en transformación: cómo la tecnología está cerrando la brecha entre pacientes y proveedores",
    excerpt: "El CEO de HCA Healthcare reflexiona sobre cómo las tecnologías emergentes y un liderazgo firme pueden llegar a los pacientes donde realmente están.",
    image: articleHealthcareAi,
    content: `Sam Hazen, CEO de HCA Healthcare — la red de hospitales más grande de EEUU — tiene una perspectiva privilegiada sobre la intersección de salud y tecnología. El mensaje es claro: la tecnología no es opcional en healthcare, pero tampoco es suficiente sin un liderazgo que la dirija hacia el paciente.

## El problema central

El sistema de salud se siente cada vez más distante para los pacientes. Costos crecientes, complejidad administrativa, falta de personalización. La confianza del consumidor en los proveedores de salud está en mínimos históricos.

Y aquí viene la paradoja: nunca hemos tenido tanta tecnología disponible — telemedicina, IA diagnóstica, wearables — y sin embargo la experiencia del paciente no mejora proporcionalmente.

## Dónde está la desconexión

Hazen identifica que el problema no es tecnológico sino de integración. Los hospitales tienen sistemas que no hablan entre sí. Los datos del paciente están fragmentados en 15 plataformas diferentes.

## El take de Tooxs

Aunque no operamos directamente en healthcare, el patrón es universal: la digitalización solo genera valor cuando los sistemas están integrados y los datos fluyen. Las mismas herramientas sirven para conectar lo que hoy está desconectado.`,
  },
  {
    id: 11,
    slug: "personalizar-salud-confianza-consumidor",
    category: "Datos de la Semana",
    date: "Abril 2026",
    readTime: "3 min",
    title: "Personalizar la atención para restaurar la confianza del consumidor",
    excerpt: "La atención de salud es profundamente personal — pero para muchos consumidores se siente distante, costosa y confusa, erosionando una confianza ya frágil.",
    image: articleHealthcareAi,
    content: `Los datos semanales revelan una tensión creciente en healthcare: los consumidores quieren atención personalizada pero reciben experiencias genéricas y frustrantes.

## Los números que importan

La confianza del consumidor en el sistema de salud está erosionándose. Los costos suben, la complejidad administrativa aumenta, y la experiencia del paciente se siente cada vez más impersonal.

Pero los datos también muestran una oportunidad: los proveedores que invierten en personalización — usar datos del paciente para anticipar necesidades, simplificar procesos y comunicar de forma relevante — están viendo mejoras significativas en satisfacción y retención.

## La lección para cualquier industria

Este insight no es exclusivo de salud. En cualquier industria B2B o B2C, la personalización basada en datos es la diferencia entre un cliente que se queda y uno que se va.

## El take de Tooxs

La personalización a escala requiere tres cosas: datos limpios, automatización inteligente y la capacidad de actuar en tiempo real. Si quieres que tu empresa deje de tratar a todos los clientes igual, la tecnología ya existe. Lo que falta es implementarla.`,
  },
  {
    id: 12,
    slug: "agentes-ia-automatizacion-2026",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "Agentes de IA en 2026: del piloto a la producción — y por qué el 40% de los proyectos van a fracasar",
    excerpt: "La automatización inteligente dejó de ser un experimento. Pero sin gobernanza, estrategia clara y visión operativa, la inversión se pierde. Esto es lo que los ejecutivos industriales en Latinoamérica necesitan saber ahora.",
    image: articleAgentesIa,
    content: `La volatilidad geopolítica ya no es un "cisne negro" — es el nuevo normal. Durante 2024 y 2025, la conversación sobre inteligencia artificial giró en torno a modelos de lenguaje, chatbots y pilotos internos. Pero 2026 marca un punto de inflexión: los agentes de IA están pasando de la experimentación a la producción.

Según McKinsey, el 88% de las organizaciones ya usa IA en al menos una función empresarial. Pero la cifra que importa es otra: solo el 23% ha logrado escalar agentes de IA en al menos una función de negocio. El resto sigue en piloto, POC o evaluación.

## Agentes de IA: no son chatbots, no son RPA

Una confusión común entre ejecutivos es tratar a los agentes de IA como una evolución del RPA (Robotic Process Automation). No lo son. Son una categoría distinta.

**RPA** ejecuta tareas repetitivas siguiendo scripts predefinidos. Es determinista: mismo input, mismo output. Funciona bien para procesos estructurados pero es frágil — si cambia una interfaz, se rompe.

**Un agente de IA**, en cambio, percibe su entorno, razona sobre un objetivo, planifica acciones y se adapta a condiciones cambiantes. Usa modelos de lenguaje como cerebro para interpretar contexto, manejar datos no estructurados y tomar decisiones en escenarios ambiguos.

La diferencia clave: RPA ejecuta tareas; un agente logra objetivos.

## Lo que dicen los datos: oportunidad masiva, riesgo real

McKinsey estima que los agentes de IA podrían agregar entre $2.6 y $4.4 billones de dólares en valor anual. IDC proyecta un aumento de 10x en el uso de agentes por empresas del G2000 para 2027.

PwC reporta que el 66% de las empresas que ya adoptaron agentes registran ganancias de productividad mensurables, y el 57% reporta ahorros de costos tangibles. Gartner predice que para fin de 2026, el 40% de las aplicaciones empresariales tendrán agentes de IA integrados.

Pero Gartner también advierte que más del 40% de los proyectos de agentes podrían ser cancelados antes de fin de 2027. Las razones: costos que escalan sin control, valor empresarial poco claro, y agentes que violan políticas internas.

## Dónde están generando valor hoy

**Operaciones y cadena de suministro.** Agentes que coordinan robots, sensores y sistemas logísticos en tiempo real. El 58% de las empresas ya usa "Physical AI" en algún nivel.

**Finanzas y administración.** Facturación automatizada, pronósticos financieros y auditoría de gastos. Resultado: aceleración de procesos de cierre entre 30% y 50%.

**Servicio al cliente.** Agentes que manejan reembolsos, escalaciones y soporte omnicanal con contexto completo del historial del cliente. Equipos pequeños recuperan más de 40 horas mensuales.

**Ventas y marketing.** Generación de leads, alcance personalizado y calificación automática con mejoras de 2-3x en velocidad del pipeline.

## La oportunidad para Latinoamérica

Chile, con su industria minera, tiene un terreno natural para agentes que optimicen mantenimiento predictivo, gestión de flotas autónomas y monitoreo ambiental en tiempo real. Brasil y México pueden implementar agentes que coordinen líneas de producción y optimicen cadenas de suministro complejas.

El desafío no es tecnológico — es organizacional. La barrera número uno es la brecha de habilidades. Las empresas que resuelvan primero esta ecuación van a capturar una ventaja competitiva difícil de replicar.

## Qué necesita un ejecutivo para no ser parte del 40% que fracasa

**Gobernanza desde el día uno.** Definir qué decisiones puede tomar un agente de forma autónoma y cuáles requieren supervisión humana.

**ROI medible antes de escalar.** Antes de escalar un agente, hay que demostrar valor concreto en un proceso acotado.

**Integración híbrida.** Los agentes más efectivos no reemplazan la automatización tradicional — la orquestan. Un sistema maduro combina RPA para tareas estructuradas con agentes de IA para razonamiento y decisión.

**Capacitación del equipo.** Presupuesto sin capacidad de ejecución es gasto, no inversión. La brecha de habilidades es el cuello de botella real.`,
  },
  {
    id: 13,
    slug: "agente-del-cambio-ceos",
    category: "Liderazgo & AI",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "El agente del cambio: Por qué tu CEO está perdiendo contra la IA",
    excerpt: "88% de las empresas han desplegado IA, pero 86% no está lista para operarla. Los números no mienten: o inviertes 5 veces más en personas que en tecnología, o tu transformación fracasará.",
    image: articleCeoCambio,
    content: `En el último año, hemos visto mineras en El Teniente instalar sistemas de IA predictiva para mantenimiento de equipos, empresas de logística en Valparaíso implementar agentes autónomos de ruta, y fábricas en Arica optimizando cadenas con aprendizaje automático. El problema: solo 14% de los CEO actúa como campeón del cambio. La mayoría ve la IA como un proyecto IT, no como una transformación que requiere repensar cómo trabaja la gente.

## La paradoja: tenemos la IA, pero no los líderes

McKinsey documentó algo brutal: 86% de las organizaciones reconoce que no está preparada para operar IA a escala. No es que no tengan la tecnología. Es que tienen un liderazgo que entiende algoritmos pero no entiende transformación organizacional.

## El dinero está en el lugar equivocado

Hemos trabajado con clientes en Chile que han gastado US$2 millones en infraestructura de IA y luego descubrieron que necesitaban el doble en capacitación, cambio de procesos y re-thinking de roles. La regla de McKinsey: por cada dólar invertido en tecnología, deberías invertir 5 en las personas.

Los CEOs que logran mantener o mejorar el performance durante transformaciones son 4 veces más probables de priorizar la gente junto con la tecnología.

## El agujero negro de la gobernanza

Uno de cada seis CEO no tiene propietario designado en el C-Suite para la estrategia de IA. Es decir, 1 en 6 organizaciones está ejecutando la transformación más importante del siglo sin un dueño claro.

## Por qué las empresas tradicionales fracasan

La manufactura, logística y minería en Latinoamérica tienen culturas donde la obediencia jerárquica es fuerte. Con IA agéntica, es una debilidad. Los equipos necesitan entender POR QUÉ cambia el proceso, necesitan espacio para sugerir mejoras, necesitan ver el error como data de aprendizaje.

## La acción urgente: tres cosas que deberías hacer hoy

**Primero: designa un dueño ejecutivo.** No puede ser el IT director. Tiene que ser alguien con poder para mover recursos humanos, redefinir roles, y tomar decisiones rápido.

**Segundo: invierte en comprensión de tu gente.** Antes de automatizar un proceso, entiende qué hace que la gente se sienta segura o amenazada con el cambio.

**Tercero: crea un fondo de experimentación rápida.** USD 200K-500K distribuidos entre equipos para que prueben casos de uso pequeños de IA. Fallar rápido, aprender rápido, escalar lo que funciona.`,
  },
  {
    id: 14,
    slug: "desempeno-alta-direccion",
    category: "C-Suite & Gobernanza",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "Cómo desmitificar el desempeño de los equipos de alta dirección",
    excerpt: "Solo 24% de las empresas es altamente exitosa en transformaciones. 63% cumple parcialmente. Seis obstáculos derrotan a tu C-Suite. Aquí cómo esquivarlos.",
    image: articleAltaDireccion,
    content: `McKinsey estudió 1,500+ transformaciones empresariales en los últimos 5 años. Solo 24% fue altamente exitosa. 63% cumplió "la mayoría de objetivos." El resto: fracaso o abandono. No es por falta de dinero o mercado. Es por debilidad de liderazgo de C-Suite.

## Los seis obstáculos que derrota a la mayoría del C-Suite

**Obstáculo 1: Falta de alineación ejecutiva sobre la visión.** El CEO ve IA como eficiencia operacional. El CTO ve IA como innovación técnica. El CFO ve IA como riesgo de costo. Ninguno está equivocado, pero si no se alinean en QUÉ es el proyecto, los resultados son contradictorios.

**Obstáculo 2: Distribución ineficiente del tiempo ejecutivo.** Si tu CEO pasa 5% del tiempo en IA (2 horas por semana), eso envía un mensaje: no es prioridad. Las empresas exitosas: el CEO pasa 20-30% del tiempo.

**Obstáculo 3: Gestión de stakeholders débil.** Directorios que quieren dividendos ahora, accionistas que no entienden el case, empleados que temen por sus puestos. Un C-Suite fuerte comunica valor y obtiene alineación.

**Obstáculo 4: Métricas de éxito mal definidas.** IT mide "% de adoption." Operaciones mide "costo evitado." Finanzas mide "ROI." Si no convergen, parecería que algunos ganan y otros pierden.

**Obstáculo 5: Gestión del riesgo reactiva, no proactiva.** Sin un plan proactivo de riesgos y gobernanza clara, cada riesgo se convierte en crisis.

**Obstáculo 6: Falta de accountability estructurada.** Si nadie es responsable por la transformación, todos son. Y eso significa nadie.

## Plan de 60 días para fortalecer tu C-Suite

**Semanas 1-2:** Diagnóstico de alineación. Reúnete con cada C-Suite player por separado.

**Semanas 3-4:** Alineación ejecutiva (off-site). Un día de trabajo donde el C-Suite articula visión compartida.

**Semanas 5-8:** Comunicación cascada. El CEO comunica la visión alineada a toda la organización.

**Semanas 9-12:** Governance mensual. C-Suite se junta una vez al mes, 90 minutos enfocados.

## El take de Tooxs

La correlación es simple: empresas donde el C-Suite está alineado, comprometido, y claro en visión ganan. Donde está dividido, distraído, o poco comprometido, pierden. No es que una tenga mejor tecnología. Es que tiene mejor liderazgo.`,
  },
  {
    id: 15,
    slug: "cinco-dilemas-imposibles-ceos",
    category: "Estrategia & Liderazgo",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "Los Cinco Dilemas Imposibles: Cómo los Mejores CEOs Navegan lo Irresuelto",
    excerpt: "McKinsey entrevistó a ~100 CEOs senior. Las decisiones más críticas no tienen solución correcta. Tienen tensión permanente. Los mejores líderes lo saben y actúan diferente.",
    image: articleDilemasCeo,
    content: `Tu CEO natural quiere certeza. Pregunta: "¿Hago X o hago Y?" Espera respuesta clara. Realidad: las decisiones que definen tu empresa no tienen respuesta clara. Tienen tensión.

McKinsey mapeó cinco dilemas que repiten en toda organización. CEO mediocres eligen lado A y viven en conflicto permanente. CEO buenos reconocen que ambos lados son válidos y buscan "tanto/como" solución.

## Dilema 1: Preservar Core vs. Innovar

Minera chilena vende mineral commodity. Margen bajo. Ve que mercado quiere "mineral verificado ESG" y paga premium 15-20%. Quiere innovar. Pero eso requiere cambio de procesos, inversión, riesgo.

**CEO mediocre dice:** "Core es sagrado. Innovamos, pero no amenazamos core." Nunca innova de verdad.

**CEO bueno dice:** "Core es nuestro colchón financiero por 24 meses. En ese tiempo, lanzamos innovación paralela."

## Dilema 2: Corto Plazo vs. Largo Plazo

**CEO mediocre:** "Necesito mostrar números ahora." Corta inversión de largo plazo. Funciona trimestre 1. Trimestre 4, carencia de inversión golpea.

**CEO bueno:** "¿Dónde gasto menos pero con más impacto?" Requiere más creatividad.

## Dilema 3: Estrellas Individuales vs. Colectivo

**CEO mediocre:** "Es demasiado talentoso para perder. Le permito comportamiento tóxico."

**CEO bueno:** "Talento excepcional que no juega en equipo no tiene lugar aquí. 3 meses para cambiar. Si no, sale."

## Dilema 4: Empoderar vs. Controlar

**CEO bueno:** "Empodero dentro de límites claros. Si está dentro de límite, decide sin pedirme. Si está fuera, escalas."

## Dilema 5: Role Immersion vs. Personal Identity

**CEO bueno:** "Necesito estar sharp para mi empresa. Eso significa dormir, relación sana, actividad que recarga baterías." Un CEO de manufactura en Monterrey lo implementó. Burnout bajó 60%.

## El Patrón: Both/And, no Either/Or

CEOs ganadores no creen que dilemas se resuelven. Creen que se navegan. No es "preservar O innovar." Es "¿Cómo preservo core Y innovo en paralelo?" Esa mentalidad "both/and" es lo que diferencia.`,
  },
  {
    id: 16,
    slug: "equipos-clase-mundial",
    category: "Talento & Equipos",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "De lo Peor a lo Mejor: Los 4 Pilares de los Equipos de Clase Mundial",
    excerpt: "McKinsey estudió a los mejores equipos del mundo en deportes, negocios y militares. La sorpresa: no nacen talentosos. Se construyen. Y hay una fórmula clara que funciona en Santiago, Medellín o Lima.",
    image: articleEquiposMundial,
    content: `Hay una creencia en empresas latinoamericanas: "Nuestro talento no es el problema. El talento en Chile simplemente no existe." Falso.

McKinsey comparó equipos "de élite" con equipos "mediocres" en contextos idénticos. La diferencia: cómo estaban organizados y liderados. Solo 38% de nuevos coaches alcanzan éxito en primeros 6 meses. Solo 23% sobreviven al cuarto año.

## Pilar 1: Estándares Claros y Cultura No-Negociable

Equipos mediocres tienen "valores" colgados en la pared. "Integridad." "Excelencia." Nadie sabe qué significa. Equipos de clase mundial definen con precisión brutal qué esperan.

Ejemplo de una minera chilena: no dijeron "seguridad es importante." Especificaron estándares medibles con consecuencias reales. Cuando especificas así, la cultura cambia en meses.

## Pilar 2: Selección de Talento Complementario

Equipos de clase mundial piensan: "¿Qué capacidades NECESITAMOS para ganar? ¿Quién cubre cada una? ¿Dónde hay huecos?" Buscan gente que rellena huecos, no gente que "es buena."

Una fintech en Bogotá contrató 4 personas diferentes, ninguna era la "estrella más brillante." Pero juntos tardaron 9 meses en producción; competencia tardó 16.

## Pilar 3: Manuales de Operación Detallados

Un equipo de logística tenía caos. Cada persona resolvía problemas de forma diferente. Crearon un manual con procedimientos claros. Nuevas personas operaban sin fricción en 2 semanas vs. 3 meses antes. Inconsistencia bajó 70%.

## Pilar 4: Liderazgo Distribuido (No Heroísmo)

Equipos mediocres dependen del héroe. Cuando se va, colapsa. Equipos de clase mundial distribuyen decisiones. 23% de equipos liderados heroicamente sobreviven 4 años. 70% de equipos con liderazgo distribuido lo hacen.

## Cómo Pasar de Mediocre a Excelencia en 18 Meses

**Meses 1-3:** Define estándares explícitos. Comunica. Cambia gente que no está de acuerdo.

**Meses 3-6:** Analiza huecos en complementariedad. Contrata para rellenar.

**Meses 6-9:** Crea manuales operacionales.

**Meses 9-18:** Suelta poder. Deja que cada persona decida en su área.`,
  },
  {
    id: 17,
    slug: "fabrica-liderazgo-siglo-xxi",
    category: "Desarrollo de Talento",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "La Fábrica de Liderazgo del Siglo XXI: Por Qué no Puedes Outsourcear Desarrollo de Talento",
    excerpt: "McKinsey identificó los 6 traits del liderazgo moderno. Desarrollar líderes no es una iniciativa de RRHH — es responsabilidad personal del CEO. Las empresas que ganan lo saben.",
    image: articleLiderazgoSiglo,
    content: `McKinsey entrevistó a 1000+ líderes y sus equipos para mapear qué distingue líderes efectivos en 2026. No es MBA. No es carisma. Son estos 6 traits:

**1) Energía positiva** — Capacidad de mantener optimismo bajo presión sin ser ingenuo.

**2) Liderazgo servicial** — Tu rol no es "estar en el pico de la pirámide." Es remover obstáculos para que otros hagan su mejor trabajo.

**3) Aprendizaje continuo** — El mercado cambia cada 6 meses. Si tu mental model es 2020, eres dinosaurio.

**4) Resiliencia** — Vas a fracasar. Los líderes que "se rompen" no llegan a cumplir. Los resilientes atraviesan.

**5) Agilidad** — Capacidad de pivotar decisiones rápidamente cuando contexto cambia.

**6) Accountability** — Sin excusas. Cuando algo falla, dices "yo fui responsable."

47% de empresas reportan "talent gaps" como barrera crítica para IA y transformación digital. ¿Por qué? Porque no tienen máquina para producir líderes con estos 6 traits.

## Las 4 Disciplinas de la Fábrica de Liderazgo

**Disciplina 1: Identificación temprana.** Desde día 1, observas quién tiene curiosidad, resiliencia, capacidad de influenciar sin autoridad.

**Disciplina 2: Rotaciones deliberadas.** Rotas talento por 2-3 áreas diferentes en primeros 5 años. Líderes necesitan amplitud.

**Disciplina 3: Tutoría directa.** El CEO, COO, VP dedican tiempo mensual a mentorar gente con potencial. Feedback estructurado.

**Disciplina 4: Promoción basada en potencial, no en performance.** Mejor performer en rol A no es buen líder en rol B.

## Por Qué RRHH No Puede Hacerlo Solo

Desarrollo de liderazgo necesita autoridad y contexto que solo CEO tiene. Un programa de entrenamiento sin sponsor CEO es teatro. Una minera en Antofagasta: nuevo CEO dijo "Esto es prioridad mía. 4 horas/semana." En 18 meses identificó 15 personas con potencial, las rotó, las mentoró, promovió 5 a liderazgo.

## El Juego de Largo Plazo

Una minera en Perú invirtió fuertemente hace 5 años. Hoy, 78% de posiciones de liderazgo medio se rellenan internamente vs. 30% hace 5 años. Costo de contratación bajó 40%. Retención creció 25%.`,
  },
  {
    id: 18,
    slug: "faros-manufactura-ia",
    category: "Manufactura & AI",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "Lo que Chile puede aprender de las fábricas más avanzadas del mundo",
    excerpt: "60% de los casos de uso más nuevos en manufactura usan IA. Empresas líderes logran 2-3x ganancia de productividad, 99% reducción de defectos, 30% ahorro en energía. ¿Tu fábrica está lista?",
    image: articleManufacturaIa,
    content: `En las primeras olas de transformación manufacturera (2015-2020), veías IoT, robótica, cloud computing. Ahora, en 2026, 60% de los nuevos use cases de manufactura de clase mundial usan IA. Comparado con menos del 20% en la primera ola. Ahora eres competitivo o quedas atrás.

## Qué ven en las fábricas "Lighthouse"

Visita una de estas plantas — están en Alemania, Japón, Corea, Estados Unidos. La gente dentro es la misma que en Chile: operarios, supervisores, ingenieros. La diferencia: 2-3x más productividad por metro cuadrado. El defecto casi desaparece: 99% de conformidad versus 94-96% en plantas típicas. Y el consumo energético cae 30%.

## Las tres aplicaciones de IA que ves en líderes globales

**Primero: Predicción de mantenimiento.** Sensores + modelos de IA predicen cuándo fallará una máquina. Resultado: 40% menos downtime no programado.

**Segundo: Optimización de calidad en tiempo real.** Cámaras + IA inspecciona cada unidad mientras se produce. Ahorro de scrap: 50-70%.

**Tercero: Optimización de procesos dinámicos.** Parámetros como temperatura, velocidad, presión se ajustan automáticamente. Aprendizaje continuo que mejora cada turno.

## Chile en manufactura: Excelencia operativa, no liderazgo tecnológico

Las plantas chilenas son eficientes, sólidas, profesionales. Pero la mayoría opera con esquemas de 2015-2018. Una planta siderúrgica: IoT en máquinas pero datos en silos por departamento. Ganancias actuales: 8%. Potencial sin explotar: 25%.

## Los obstáculos que frenan a manufactura chilena

**Infraestructura de datos fragmentada.** PLC's, SCADA, MES, ERP no hablan entre ellos.

**Falta de talento.** En Chile no sobran ingenieros especialistas en IA aplicada a manufactura.

**Ciclos de decisión lentos.** Una propuesta requiere aprobación de múltiples capas.

**Miedo cultural.** "¿Y si el algoritmo falla?" "Los operarios van a perder empleo."

## Cómo comenzar: Empezar pequeño, pensar grande

No remodelas toda la fábrica de una. Comienza con un use case de alto impacto, bajo riesgo. A los 6 meses, ves resultados. Luego escalas.

## El take de Tooxs

Implementar IA en una planta sin rediseñar el modelo operativo completo fracasa. Primero datos limpios, luego procesos digitales, luego entrenamiento del equipo, luego el modelo de IA. Esa secuencia importa.`,
  },
  {
    id: 19,
    slug: "ganar-en-las-curvas",
    category: "Estrategia",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "Ganar en las Curvas: 5 Movimientos Estratégicos que tu Empresa Necesita Ahora",
    excerpt: "La incertidumbre global se duplicó desde los 90s. Las empresas que ganan en tiempos de volatilidad no son las que mejor predicen el futuro, sino las que aprenden a moverse rápido.",
    image: articleGanarCurvas,
    content: `Hace tres décadas, la incertidumbre global era predecible. Hoy es el doble. Las mineras chilenas que planeaban a 10 años ya no pueden. La volatilidad es tu nueva normalidad.

McKinsey mapeó cómo ganan las empresas en este entorno: las compañías que se adaptan rápido generan 2x más retorno que el mercado. No es magia. Es disciplina en cinco movimientos específicos.

## Movimiento 1: Decide Dónde Jugar (y Dónde NO)

Los ganadores eligen explícitamente en qué mercados/segmentos van a ganar y en cuáles aceptan perder. Una minera chilena no puede ser excelente simultáneamente en litio, cobre y oro.

La pregunta para tu equipo: ¿En qué 3 segmentos vamos a ser inexpugnables? Si la respuesta es "en todos somos fuertes", tu estrategia está rota.

## Movimiento 2: Innova en tu Modelo de Negocio, no Solo en Producto

Los ganadores innovan en CÓMO generan y capturan valor. Una minera que evoluciona de vender mineral a vender soluciones de trazabilidad ESG. 92% de las empresas planean aumentar inversión en IA. Pero si no redefines tu modelo de negocio alrededor de IA, gastarás dinero sin retorno.

## Movimiento 3: Linka Tu Talento al Valor que Generan

Las empresas tech tienen 40% más rotación en top 20 personas vs hace 5 años. Los ganadores crean claridad brutal entre qué hace tu empresa y quién crea valor real. Diseñan incentivos explícitos.

## Movimiento 4: Asigna Capital Dinámicamente, no en Silos

Los ganadores reasignan capital trimestralmente basados en dónde están surgiendo oportunidades. Dinamismo, no rigidez.

## Movimiento 5: M&A Programático

Las adquisiciones no son apuestas de casino. Los ganadores hacen M&A sistemáticamente para acceder a talento, tecnología o mercados. Las compañías que hacen esto generan 2x retorno que aquellas que expanden solo orgánicamente.

## El take de Tooxs

Ejecutar estos movimientos requiere: decisiones duras, velocidad, integración de sistemas, y mentalidad de experimento. Esto no es software que compres. Es arquitectura organizacional que diseñas.`,
  },
  {
    id: 20,
    slug: "rediseno-organizacional-era-agentica",
    category: "Org Design & AI",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "El rediseño organizacional que nadie en Chile está hablando (y por qué es urgente)",
    excerpt: "75% de los roles van a cambiar. Necesitarás nuevos roles: agent orchestrators, hybrid managers, AI coaches. Tu jerarquía tradicional no sobrevivirá. ¿Estás preparado?",
    image: articleRedisenoOrg,
    content: `En el próximo lustro, con IA agéntica, la realidad es cruda: 75% de los roles en la mayoría de las industrias van a cambiar significativamente. No desaparecerán todos. Pero transformarán. Un analista de costos que dedicaba 4 horas al procesamiento de datos ahora hace análisis estratégico. Un técnico que hacía mantenimiento reactivo ahora orquesta mantenimiento predictivo.

## Los nuevos roles que emergen

**Agent Orchestrator:** Define el comportamiento de sistemas de IA. No es programador — entiende procesos + IA + riesgos.

**Hybrid Manager:** Administra la interacción entre humanos y agentes. Decide cuándo delega al agente, cuándo interviene un humano.

**AI Coach:** Capacita a empleados en cómo trabajar con sistemas de IA. No es training clásico. Es enseñar a confiar, usar, y mejorar colaboración con máquinas.

## Las organizaciones que funcionan en era agéntica: Planas, rápidas, fluidas

Olvida la pirámide tradicional. En lugar de 8 niveles de aprobación, tienes 2-3. Los agentes de IA manejan decisiones de bajo riesgo. Los humanos se concentran en empatía, negociación, pensamiento estratégico ambiguo.

## El rol de Manager se redefinió

Un manager gasta 40% del tiempo en meetings de aprobación, reportes, y microgestión. En era agéntica, eso desaparece. Los agentes manejan flujos. El manager entrena al equipo, resuelve problemas que los agentes no pueden, y define guías éticas.

## Cómo comienzan empresas líderes

Identifican un departamento donde el cambio es menos riesgoso. Definen qué agentes pueden hacer. Entrenan al equipo en "trabajar con agentes." Rediseñan roles. A los 6 meses, ven ganancia de productividad y equipo más enganchado.

## Las cosas que necesitas hacer ahora

**Primero: Auditoría de roles.** ¿Cuáles se benefician de IA agéntica? ¿Cuáles evolucionarían?

**Segundo: Piloto temprano.** Elige un área y comienza experimentando. Aprenderás más en 3 meses de piloto real que en 12 de planificación.

**Tercero: Programa de desarrollo talento.** ¿Cómo capacitas a gente en "trabajo con IA"?

**Cuarto: Redefine liderazgo.** ¿Qué significa ser un buen manager en esta era?

## El take de Tooxs

Las empresas que ganan primero definen el modelo organizacional futuro, luego arman el talento, luego construyen la tecnología. No al revés. Un grupo empresarial que hizo esto logró adopción rápida, confianza del equipo, y ganancia de productividad real de 28% en el primer año.`,
  },
  {
    id: 21,
    slug: "guia-practica-cios-ctos-ia-generativa",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "La guía práctica para CIOs y CTOs que no quieren quedarse atrás",
    excerpt: "IA generativa podría agregar USD 2.6-4.4 billones anuales. 65% de organizaciones ya usan gen AI regularmente. Como CIO/CTO, esto no es opcional. Acá están las 9 acciones estratégicas que necesitás tomar—ya.",
    image: articleGuiaCios,
    content: `El potencial económico de IA generativa no es especulación. McKinsey estima que gen AI podría contribuir entre USD 2.6 y 4.4 billones anuales en valor económico, dependiendo de adopción y aplicación. Para contexto: eso es mayor al PIB anual de la mayoría de países. ¿Tu empresa está capturando algún % de eso? Si eres CIO/CTO en 2026 y no tienes una estrategia clara de gen AI, no es un problema futuro. Es un problema ahora.

## La velocidad de adopción es brutal: De 32% a 65% en 12 meses

Hace un año, solo 32% de las organizaciones usaba gen AI regularmente. Hoy, 65% lo hace. Eso no es adopción gradual. Eso es fricción exponencial. Competidores de tu industria ya están experimentando. En Chile, hemos visto esto en retail, telecomunicaciones, y financiero: empresas que hace 18 meses decían "veremos qué pasa" hoy están corriendo para no quedarse atrás. Y muchas descubren que la infraestructura técnica que tenían no está lista.

## Acción 1: Audita tu arquitectura de datos—es el foundation de todo

Gen AI sin datos buenos es un sueño húmedo. Si tu empresa aún tiene datos dispersos en silos, PDFs almacenados sin metadata, bases de datos legadas sin integración, estás perdiendo. Necesitás: datos centralizados y limpios, gobernanza de datos clara (quién puede acceder qué, para qué), y documentación de schemas. Una empresa de seguros que asesoramos descubrió que 40% de sus bases de datos tenían inconsistencias de formato. Antes de tocar gen AI, pasaron 4 meses limpiando. Dolor. Pero necesario.

## Acción 2: Define qué problemas gen AI resolverá en tu negocio—no al revés

No comiences con "queremos un chatbot gen AI" o "necesitamos LLMs porque es trendy". Comienza con problemas reales: ¿Cuánto tiempo gastan tus analistas leyendo reportes? ¿Cuántos errores hay en procesamiento de documentos? ¿Cuánta investigación hace tu equipo de ventas antes de cada call? Esos son problemas que gen AI resuelve. Prioriza por: impacto económico x probabilidad de éxito x complejidad técnica. Ese score te dice dónde comenzar.

## Acción 3: Identifica use cases quick-win (6 meses, impacto demostrable)

No esperes a tener "la estrategia gen AI perfecta". Identifica 2-3 casos donde gen AI puede producir valor comprobable en 6 meses. Ejemplos: automatizar resumen de emails, mejorar búsqueda en bases de conocimiento internos, optimizar generación de reportes iniciales. Una empresa de logística en LATAM comenzó con "resumen automático de logs de envío"—parecía pequeño, pero ahorró 200 horas/mes de trabajo manual.

## Acción 4: Forma un "AI platform team" cross-funcional

Gen AI no es un problema de IT solamente. Necesitás gente de IT, sí, pero también de business, operaciones, y funciones impactadas. Este equipo: define estándares de seguridad y privacidad, selecciona herramientas y modelos, entrena otros equipos, y escala lo que funciona.

## Acción 5: Selecciona stack tecnológico—cloud, modelos, vector databases

¿Vas a usar OpenAI APIs, Anthropic, Google Vertex, o modelos open-source locales? ¿Dónde almacenás embeddings? ¿Cloud o on-premise? Las decisiones acá impactan costo, latencia, y privacidad. Una empresa financiera chilena descubrió que sus modelos gen AI iban a procesar datos de clientes en servidores de USA. Regulador dijo: "No". Tuvieron que rediseñar on-premise.

## Acción 6: Implementa RAG (Retrieval Augmented Generation)—gen AI sobre tus datos

Un LLM vanilla te da respuestas probabilísticas basadas en entrenamiento. RAG te permite "inyectar" contexto específico de tu empresa—documentos, bases de datos, procedimientos—para que gen AI responda basado en TU información, no información genérica.

## Acción 7: Diseña guardrails de seguridad y gobernanza

**Prompt injection:** Alguien intenta manipular tu modelo con prompts maliciosos. **Hallucinations:** El modelo inventa datos. **Sesgos:** El modelo refleja sesgos en datos de entrenamiento. **Privacidad:** ¿Qué datos se usan para entrenar y mejorar modelos? Necesitás políticas claras.

## Acción 8: Capacita tu gente en "prompt engineering" y evaluación de respuestas

Gen AI no es un botón que presionas. Requiere habilidad en formular preguntas (prompting) y criterio en evaluar si las respuestas tienen sentido. En empresas que vimos fracasar con gen AI, el equipo no sabía cómo usar las herramientas correctamente.

## Acción 9: Monitorea, aprende, itera—no es "set and forget"

Desplegás un modelo gen AI. Primero mes: excelente. Tercero: ves degradación porque los datos o contexto cambiaron. Necesitás monitoreo continuo de: accuracy de respuestas, latencia, cost por query, adoption de usuarios.

## La perspectiva Tooxs: Gen AI es infraestructura, no feature

El error común que ves en empresas chilenas: tratar gen AI como un "proyecto que entregás". No. Gen AI es infraestructura que evoluciona. Requiere investment continuo en datos, mejora de modelos, feedback de usuarios, y rediseño según aprenda. Para CIOs/CTOs: Gen AI es transformación técnica Y organizacional. Los 9 pasos acá no son secuenciales—algunos suceden en paralelo. Pero todos son necesarios. Si saltas alguno, pagarás el precio después.`,
  },
  {
    id: 22,
    slug: "ia-agentica-seis-lecciones-ganadores",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "Un año de IA agéntica: Seis lecciones que los ganadores aprendieron",
    excerpt: "Mientras 86% de las empresas aún planifica, 14% ya está ejecutando con IA agéntica. Estos son los aprendizajes reales de quienes están en el campo, no en boardrooms teóricos.",
    image: articleIaAgenticaLecciones,
    content: `Las empresas que ganaron con IA agéntica no esperaron al proyecto "transformacional" de 18 meses. Empezaron con casos de uso pequeños. Una minera en Codelco inició con IA para optimizar rutas de carga en un solo sector de la operación. Logística en Puerto Valparaíso comenzó automatizando la asignación de grúas para 3 de 12 muelles. Ninguno fue "Enterprise IA Initiative". Todos fueron experimentos controlados con ROI claro en 60-90 días.

## Lección 1: Pequeño y rápido late a grande y perfecto

Lo que funciona: Pick one process, one team, one clear metric. Ejecuta. Aprende. Escala. Los que fracasan son los que quieren "transformación digital integral". Son proyectos de 24 meses que llegan atrasados, over-budget, y sin adopción.

## Lección 2: Tu dato es peor de lo que piensas

Los primeros tres meses de casi todos los proyectos de IA incluyen shock: el dato es inconsistente, está duplicado, tiene anomalías históricas. La lección dura: presupuesta 30-40% del esfuerzo en preparación de datos, no 10-15% como la mayoría de los planes dicen.

## Lección 3: El bottleneck es la validación de negocio, no la tecnología

A mitad de 2024, la mayoría de los problemas de IA no eran técnicos. Era un gerente de operaciones que no sabía si confiar en la recomendación de un algoritmo. Solución: invertir en explicabilidad e integración humana. No es "IA toma decisiones". Es "IA sugiere, humano valida, sistema aprende".

## Lección 4: Necesitas expertos de dominio, no solo data scientists

Un equipo con un data scientist y tres operacionales expertos gana casi siempre vs cuatro data scientists y un operacional. La buena data science es una conversación constante entre matemáticas y contexto operacional.

## Lección 5: Mide adopción, no solo precisión

Un algoritmo que predice con 94% de precisión pero que nadie usa es un fracaso costoso. Métrica clave: tasa de adopción sostenida después de 6 meses. Si no sigue subiendo, hay problema.

## Lección 6: El cambio de rol precede al cambio de tecnología

Las empresas que ganaron hicieron esto en orden: primero redefinieron qué hace cada rol, LUEGO implementaron IA. No al revés. Tecnología entra en vasos preparados para recibirla, no en estructuras viejas que rechazarán el cambio.

## La perspectiva Tooxs: Ganadores vs soñadores

La diferencia entre una empresa que logra transformación con IA y una que gasta millones sin ROI es simple: los ganadores ven IA como una herramienta operacional, no como magia digital. Eso significa presupuesto realista, expectativas claras, métricas honestas, y paciencia con el cambio organizacional.

## El 2026 es el año de la ejecución, no la planeación

Si tu organización sigue planeando transformación digital, ya estás atrasada. Los ganadores de 2024 ya tienen casos de uso en producción, están midiendo adopción, y están escaleando lo que funciona.`,
  },
  {
    id: 23,
    slug: "innovacion-impulso-industria-chile",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "Mientras Chile mejora procesos, el mundo crea mercados nuevos",
    excerpt: "La mayoría de las empresas chilenas itera sobre lo que ya existe. Los líderes globales lo reinventan. Empresas que crecen por innovación logran el doble de crecimiento de exceso en sus negocios core.",
    image: articleInnovacionIndustria,
    content: `La mitad de los líderes globales de industrias específicas llegaron a ese lugar mediante innovación revolucionaria, no mediante eficiencia. No imitaron mejor a sus competidores. Inventaron nuevas categorías. Mientras tanto, en Chile vemos empresas enfocadas en mejorar márgenes mediante reducción de costos. Es lógico, pero es insuficiente. La brecha crece cada trimestre.

## La verdad incómoda: Innovación radical expande el pastel, no solo redistribuye

Hay dos tipos de innovación. Incremental: haces lo que hacías, pero 5% mejor. Revolucionaria: creas una solución que no existía. Las empresas que crecen mediante innovación revolucionaria logran el doble de exceso de crecimiento en sus negocios principales. No es que ganen share—es que el mercado total crece.

## El patrón que ves en líderes globales: Visión a largo plazo + tolerancia a la experimentación

Las empresas que crean mercados nuevos invierten entre 8-15% de su revenue en innovation. De cada 10 iniciativas, 2-3 son hits, 5-6 mueren, y el resto aprende. Pero esos 2-3 hits pagan toda la inversión y más. Muchos CEOs chilenos aún tienen juntas directivas que exigen que cada iniciativa sea ganadora desde el día uno. Imposible innovar así.

## Caso de estudio: Por qué empresas de energía renovable en LATAM no lideran

Chile tiene recursos de energía renovable extraordinarios. Pero no lideramos soluciones. ¿Por qué? Porque copiamos modelos de Dinamarca y España. Las empresas que sí lideran—Tesla, Next-era Energy, Ørsted—no copiaron a nadie. Inventaron nuevas formas de generar, almacenar y distribuir energía.

## La brecha de innovación en Chile: Mejor a iterar, peor a revolucionar

En minería, manufactura y agronegocios chilenos vemos excelencia operativa. Pero innovación radical: casi nada. Una empresa minera descubrió una forma de extraer cobre de relaves con tecnología que inventó internamente. Pero requería años de investigación y capital arriesgado. La junta directiva casi lo mata tres veces.

## Las tres barreras que impiden innovación revolucionaria en LATAM

**Primero: Cortoplacismo financiero.** Si tu junta exige resultados trimestre a trimestre, no puedes invertir en investigación con horizonte de 3-5 años. **Segundo: Aversión al riesgo institucional.** Una iniciativa que fracasa es un golpe reputacional. **Tercero: Ecosistema débil.** Un startup en Silicon Valley tiene acceso a capital de riesgo y talento que en Santiago no tiene la misma escala.

## La perspectiva Tooxs: La innovación revolucionaria requiere arquitectura diferente

Hace dos años, un grupo agroindustrial chileno quería innovar en logística de alimentos frescos. En lugar de mejorar sus camiones existentes, preguntamos: ¿Y si rediseñamos el flujo completo usando IoT, inteligencia artificial y redes de distribución micro-regional? Fracasamos dos veces. Pero en el tercer pivote: predicción de demanda + distribución micro-hub + automatización de empaque que reduce waste 35% y acelera time-to-market 40%. El costo no fue solo dinero. Fue coraje ejecutivo.`,
  },
  {
    id: 24,
    slug: "puntos-ciegos-ceo-desempeno",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "Los Puntos Ciegos del CEO: Por Qué tu Desempeño es Probablemente la Mitad de lo que Crees",
    excerpt: "McKinsey analizó a los 200 CEOs que más valor generan globalmente. Encontró un patrón incómodo: todos sobrestiman su performance. Y los mejores tienen un truco para verlo.",
    image: articlePuntosCiegosCeo,
    content: `McKinsey llevó a cabo un estudio brutal. Entrevistaron a casi 200 CEOs de las empresas más grandes del mundo. Les pidieron que auto-evaluaran su desempeño. Después, pidieron la misma evaluación a sus reportes directos. A su junta directiva. A clientes clave.

El resultado: 100% de los CEOs sobrestiman su desempeño vs cómo los evalúan sus directs. No es 80%. No es 90%. Es universalmente verdadero. El CEO cree que está haciendo un 7/10. Su equipo dice 4/10.

¿Y los ganadores globales? Los que generan $5 trillones más en valor que sus pares? Ellos tienen cierta claridad que otros no. Pero no por intuición. Por sistema.

## Las Cuatro Estaciones del CEO

McKinsey mapeó algo útil: la vida del CEO tiene patrones. Cuatro "estaciones" donde el tipo de ceguera cambia.

**Primavera (Primeros 18 meses)** — Eres nuevo, humilde, observas. Tu punto ciego: no ves qué es realmente roto porque estás respetando cómo se hacen las cosas.

**Verano (18-36 meses)** — Tienes poder y momentum. Eres peligrosamente confiado. Tu punto ciego: asumes que lo que funcionó hace 12 meses sigue funcionando.

**Otoño (36-60 meses)** — Empiezas a ver que las cosas están más complicadas. Tu punto ciego: parálisis por análisis. Quieres información perfecta antes de decidir.

**Invierno (60+ meses)** — Cansancio, relevancia cuestionada. Tu punto ciego: quieres "asegurar el legado" y dejás de tomar riesgos reales.

## Cómo la Mayoría de CEOs en LATAM Pierde Años

Un CEO de una empresa minera creyó que estaba construyendo una "cultura de innovación." Sus ingenieros dirían que estaba micromanageando y matando iniciativas. Perdió 3 años y talento de élite.

Una CEO de manufactura creía estar siendo "prudente" durante volatilidad. Su equipo dirá que estaba asustada y dejaba plata sobre la mesa. Mientras tanto, competidor surcoreano comió su mercado.

McKinsey lo cuantifica: CEOs con puntos ciegos no resueltos generan 20-40% menos valor que su potencial.

## Los Ganadores Tienen un Sistema

**1) Retroalimentación radical e inmediata** — Conversaciones mensuales 1-on-1 donde preguntan explícitamente: "¿En qué me estoy equivocando?"

**2) Un "truth-teller" en la junta** — Alguien cuyo rol explícito es decirte cosas incómodas. Un director independiente que tiene permiso de ser brutal.

**3) Datos operacionales frescos** — No reportes excel de hace 3 semanas. Dashboards en tiempo real.

**4) Auto-reflexión estructurada** — Preguntas específicas cada trimestre: "¿Qué decidí mal? ¿Dónde no vi opciones?"

CEOs que hacen esto generan 3-4x más valor que pares sin sistema.

## La Perspectiva Tooxs: CEOs en Tiempos de Cambio Radical

En Chile y LATAM tenemos un contexto particular que amplifica los puntos ciegos: cambio tecnológico exponencial, volatilidad política y regulatoria, competencia desde lugares inesperados, y talento que piensa distinto. Esto no es problema de inteligencia. Es problema de información y retroalimentación.`,
  },
  {
    id: 25,
    slug: "reconfigurar-trabajo-gestion-cambio-ia",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "8 min",
    title: "Reconfigurar el trabajo: La gestión del cambio en la era de la IA generativa",
    excerpt: "Automatizar un proceso es fácil. Lo difícil es hacer que las personas acepten trabajar diferente. Aquí está cómo ganadores lo hacen.",
    image: articleReconfigurarTrabajo,
    content: `Escucharás mucho sobre "automatización" cuando hablamos de IA. Gerentes deciden que van a "eliminar 200 horas de trabajo manual por mes" mediante un algoritmo. Bonito en PowerPoint. En realidad, lo que necesita pasar es reconfiguración radical de cómo trabaja la gente.

En una minería donde implementamos mantenimiento predictivo, no eliminamos a los técnicos de mantenimiento. Lo que pasó: dejaron de hacer reparaciones reactivas. Ahora pasan 60% del tiempo previniendo fallas antes de que pasen. Es el mismo rol, pero la naturaleza del trabajo cambió radicalmente.

## Por qué la mayoría falla en la gestión del cambio

McKinsey ha documentado que trabajo que requiere reconfiguración real falla el 60-70% de las veces si no hay gestión de cambio estructurada. Pero en Latinoamérica, ¿cuántas implementaciones de IA tienen un verdadero Change Manager? Casi ninguna.

La brecha es brutal: 95% de los líderes dicen que el cambio organizacional es crítico, pero menos del 30% presupuesta dinero real en gestión del cambio.

## Los tres pilares de la reconfiguración de trabajo

**Pilar 1: Comunicación clara del "por qué"** — La gente necesita entender por qué el trabajo va a cambiar. No en una reunión de 30 minutos. En conversaciones repetidas. Es: "Vamos a predecir fallas 30 días antes, no reaccionar cuando pasa. Eso te ahorra noches de emergencia."

**Pilar 2: Redefinición clara de roles ANTES de tocar tecnología** — "Especialista de procesos ahora hace 40% menos trabajo de entrada de datos (lo hace la IA) y 100% más trabajo de excepción handling y mejora de procesos." Eso requiere nueva description de puesto, nuevas métricas de éxito, y capacitación.

**Pilar 3: Espacios seguros para preocupaciones y experimentación** — La gente tiene miedo. A perder el puesto, a no entender cómo funcionará. Si ignoras eso, rebotará como sabotaje silencioso.

## Modelo: Cómo reconfigurar trabajo sin quebrantar la organización

**Fase 1 (Semanas 1-4): Diagnóstico y comunicación** — Entiende cómo funciona el proceso actualmente. Habla con la gente involucrada: ¿cuáles son sus preocupaciones reales?

**Fase 2 (Semanas 5-12): Pilot controlado con early adopters** — Elige subgrupo voluntario. Implementa el sistema CON ellos, no PARA ellos. Feedback semanal.

**Fase 3 (Semanas 13+): Escala con ajuste continuo** — Usa early adopters como multiplicadores. Mide adoption sostenida, no solo tecnología disponible.

## Las métricas que importan en gestión del cambio

**Tasa de voluntariedad en pilots:** Meta: 70%+ voluntarios.

**Confianza en el sistema a los 90 días:** Debería crecer de ~40% a ~70%.

**Retención de gente post-transformación:** La gente no debería irse porque "la IA me reemplazó."

## La perspectiva Tooxs: Cambio sin liderazgo visible fracasa

Los ganadores entienden esto. Dedican 40-50% de esfuerzo de transformación a tecnología, y 50-60% a liderazgo, comunicación, desarrollo de talento, y manejo de cambio.`,
  },
  {
    id: 26,
    slug: "todos-somos-techies-brecha-talento",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "Ahora todos somos techies: Por qué la brecha de talento es tu límite real",
    excerpt: "Según McKinsey, la brecha de habilidades es la barrera #1 para integrar IA. En Chile, donde el talento tech se concentra en Santiago, esa brecha es exponencial.",
    image: articleTodosTechies,
    content: `Hay aproximadamente 1,200-1,500 data scientists certificados en Chile. La mayoría en Santiago. ¿Cuántas empresas quieren implementar IA? Mínimo 400-500 solo en minería, manufactura e industria. Matemática simple: demanda >> oferta.

McKinsey lo documentó a nivel global: la brecha de habilidades es el obstáculo #1, por encima incluso de dinero o estrategia. En Latinoamérica, es peor.

## El problema no es contratar, es desarrollar talento internamente

La mayoría de las empresas intenta resolver esto de manera tradicional: abre búsqueda en LinkedIn, paga premium por data scientists con experiencia. Cuatro de diez veces funciona. Las otras seis, ese senior data scientist no entiende tu negocio y termina diseñando soluciones que la operación rechaza.

Lo que hacen bien los ganadores: desarrollan talento internamente desde roles técnicos que ya tienen. Un ingeniero de mantenimiento puede aprender machine learning en 6 meses si trabaja en un caso real.

## Cómo se ve desarrollo real de talento

Una de nuestras mineras en Coquimbo identificó tres ingenieros de automatización con curiosidad natural por data. En 18 meses, dos eran productivos en proyectos de IA. Costo: USD 40K en capacitación y mentoría. Si contrataras dos senior data scientists, gastarías USD 300K+ en año uno.

## Las habilidades que realmente necesitas

**Facilitadores de cambio:** gente que entienda por qué la gente rechaza la IA y sepa hablar con operacionales.

**Ingenieros de datos:** gente que pueda limpiar datos, estructurar pipelines, conectar sistemas.

**Validadores de negocio:** especialistas de tu operación que entiendan qué hace que una recomendación de IA tenga sentido. Estos YA EXISTEN en tu empresa.

## Plan de 90 días para cerrar tu brecha de talento

**Semanas 1-2: Mapeo de talento** — Identifica gente curiosa sobre IA, técnicamente sólida, con 5+ años en la empresa.

**Semanas 3-6: Entrenamiento fundamentals** — Bootcamp corto de 8 semanas de IA aplicada con mentor senior.

**Semanas 7-12: Pilot asignado** — Un caso de uso real, pequeño, con ROI claro en 90 días.

## La perspectiva Tooxs: Talento no es un problema de escasez, es de estructura

Chile tiene un talento industrial formidable en minería, manufactura, energía. Esa gente entiende procesos complejos. Son candidatas perfectas para aprender IA aplicada si alguien las entrena bien. La brecha de habilidades no se cierra contratando, se cierra desarrollando.`,
  },
  {
    id: 27,
    slug: "transformacion-modelo-operativo-chile",
    category: "Insights",
    date: "15 Abril 2026",
    readTime: "7 min",
    title: "Por qué fracasan las transformaciones del modelo operativo en Chile (y cómo no caer en esos 6 traps)",
    excerpt: "Tu empresa tiene un plan de transformación. Pero ¿realmente funcionará? El 63% de las compañías logra sus objetivos principales, pero solo el 24% lo hace brillantemente.",
    image: articleModeloOperativo,
    content: `63% de las compañías cumple con sus objetivos principales. Suena bien, ¿verdad? Lástima que el 76% restante no logra resultados excepcionales. Las transformaciones del modelo operativo son brutales: requieren sincronización entre finanzas, tecnología, RR.HH. y operaciones. En Chile, donde muchas organizaciones aún operan con procesos heredados de los 90s, esto se multiplica.

## Trampa #1: Objetivos bonitos en PowerPoint, métricas borrosas en la realidad

La mayoría de los planes dice "mejorar la eficiencia" o "fortalecer la agilidad". Bonito. Inútil. Si no traducís esos objetivos a métricas específicas y medibles que el operario sepa cómo impactar, todo colapsa. Necesitaban: ciclo de procesamiento 8% más rápido, reducción de rechazos a <5%, downtime máximo 4 horas/mes.

## Trampa #2: Cambio organizacional sin liderazgo visible

Los líderes delegan el cambio, aprobando desde lejos. Pero los equipos necesitan patrocinadores activos en las trincheras. En las empresas manufactureras de LATAM que vimos fracasar, los CEOs estaban "comprometidos" pero nunca visitaban las plantas durante la transformación.

## Trampa #3: Arquitectura organizacional fuera de sincronía

Rediseñas los procesos, pero los organigramas siguen igual. Cada uno optimiza su mundo, y nadie optimiza el flujo total. Hemos visto empresas agrícolas que implementaron sistemas de trazabilidad cloud sin coordinar con logística.

## Trampa #4: Infraestructura de datos y sistemas no existe

Querés automatizar, pero tus bases de datos son un silo por departamento, tus sistemas no se hablan, y nadie sabe dónde vive la verdad operacional.

## Trampa #5: Gestión del cambio improvisada, no estructurada

Comunicamos el plan una vez, la gente sigue haciendo lo que hacía. Las empresas que vimos triunfar destinaron 15-20% del presupuesto a cambio puro: comunicación, training, coaching.

## Trampa #6: Métricas de éxito vagas o sin dueño claro

¿Cómo sabes que la transformación va bien? Necesitás un dashboard de indicadores clave—medibles, públicos, con dueño asignado. Productividad por FTE, tiempo de ciclo, costos operativos, tasa de error, adopción de nuevos procesos.

## La perspectiva Tooxs: El modelo operativo es un sistema, no una iniciativa

Las transformaciones que funcionan ven el modelo operativo como un sistema interconectado, no como un proyecto que cierras. En una empresa logística de LATAM que acompañamos, su tiempo de entrega cayó 35%, los costos se redujeron 18%, y el equipo supo exactamente por qué. El error: tratar la transformación como "implementación de software" en silos. Es un rediseño del cómo operás, con gente, procesos, datos y tecnología alineados.`,
  },
  {
    id: 28,
    slug: "movilidad-inteligente-logistica-mineria",
    category: "Logística & Movilidad",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Movilidad inteligente en logística: De la promesa a la ganancia real",
    excerpt: "Vehículos autónomos, rutas optimizadas, logística compartida. Hace años era ciencia ficción. Hoy, en minería y manufactura en Latinoamérica, es herramienta competitiva que reduce costos 15-25%.",
    image: articleMovilidadLogistica,
    content: `En 2020 hablábamos de "robo-taxis", "vehículos autónomos completos", "drones por todas partes". Era hype. Hoy, lo que funciona en minería y manufactura es más mundano pero más valioso: optimización de rutas, consolidación de cargas, monitoreo de flota.

McKinsey documentó que en logística industrial, movilidad "futura" ya es operación hoy, con ROI claro.

## Optimización de rutas con algoritmos

Un camión que hoy hace 12 viajes por semana para distribuir concentrado a puerto puede hacer 15 optimizando ruta, consolidando cargas, evitando vacíos de retorno. Impacto: -20% en costo de transporte. En minería con alto volumen, eso son millones por año.

## Monitoreo de flota en tiempo real

GPS + IoT en cada vehículo. Saber dónde está cada carga, velocidad, consumo de combustible, desviaciones de ruta. Impacto: -15% en consumo combustible y mejor utilización de flota.

## Mantenimiento predictivo en vehículos

Sensores en motores, transmisiones, frenos predicen fallos. No mantienes por calendario, sino cuando realmente necesita servicio. Menos downtime, menos costo.

## ¿Y los vehículos autónomos completos?

Dentro de algunas minas grandes existen camiones autónomos en operación (Rio Tinto en Australia). Pero en minería chilena aún no es mainstream por temas regulatorios, talento y costo (camión autónomo cuesta 2-3x más). En minería, lo realista es "asistencia autónoma": camión con operador, pero sistema maneja cambios de velocidad, mantiene carril, acelera/frena automáticamente.

## Cómo implementar movilidad inteligente hoy

**Paso 1: Auditar flota actual.** Cuántos vehículos, rutas, utilización, costo operacional.

**Paso 2: Instalar IoT + GPS en flota.** No es costoso. Cajas pequeñas que se cuelgan o adhieren.

**Paso 3: Algoritmo de optimización de rutas.** Reglas simples generan mejora 15-20%.

**Paso 4: Dashboard para despachadores.** Mapa en tiempo real, alertas de desvíos.

**Paso 5: Medir impacto.** Comparar antes/después: km recorridos, viajes completados, combustible, ingresos por viaje.

## Caso típico en minería chilena

Mina que transporta 500 toneladas/día de concentrado a puerto (400 km). Hoy 25 camiones, 50 viajes/día. Con optimización: misma cantidad con 21 camiones = ahorro de USD 500k-800k anual. Costo implementar: USD 50k-100k. Payback: 3-6 meses.

## La perspectiva Tooxs

Movilidad "futura" en minería no requiere tecnología mágica. Requiere visibilidad de lo que tienes hoy, algoritmos simples que optimicen rutas y cargas, y monitoreo continuo. La brecha se cerrará en 3 años. Las que esperen perderán competitividad en costo logístico.`,
  },
  {
    id: 29,
    slug: "acciones-mejores-ceos-2023",
    category: "Liderazgo & Estrategia",
    date: "16 Abril 2026",
    readTime: "8 min",
    title: "2023 definió a los CEOs de 2026: Qué hicieron diferente (antes de que fuera tarde)",
    excerpt: "McKinsey documentó qué CEOs tomaron acciones que los diferenciaban. No fueron grandes apuestas. Fueron decisiones simples pero poco frecuentes. Si tu CEO no hizo estas cosas hace 2-3 años, ya estás rezagado.",
    image: articleAccionesCeos2023,
    content: `McKinsey documentó en 2023-2024 qué CEOs tomaron acciones que los diferenciaban. Si tu CEO no hizo estas 3-4 cosas hace 2-3 años, ya estás rezagado.

## Acción 1: Invirtieron en talento diferente

Mientras muchas compañías hacían "cost cutting", los mejores CEOs hicieron lo opuesto: invirtieron agresivamente en traer talento diferente. Contrataron fuera de industria. Una minera contrató a gente de tech. Una manufacturera contrató a gente de logística. Pagaron premium por eso. Resultó en un tercio de nuevas ideas proviniendo de gente nueva.

## Acción 2: Dieron autonomía real a equipos operacionales

Mientras muchos CEOs seguían con "aprobación centralizada", los mejores escribieron límites claros de autoridad. "Gerentes pueden gastar hasta $1M sin aprobación C-suite. Arriba de eso, necesita aprobación. Pero implementa rápido." Velocidad de decisión aumentó 3x.

## Acción 3: Separaron decisiones "irreversibles" de "reversibles"

Los mejores CEOs notaron que estaban aprobando ambas con el mismo nivel de rigor. Decisiones reversibles se aprueban rápido con menos data. Decisiones irreversibles (cierro una línea de negocio) requieren análisis profundo. Velocidad aumentó, riesgo no aumentó.

## Acción 4: Invirtieron en visibilidad de caja en tiempo real

Mientras muchos CEOs veían números financieros 30 días después, los mejores invirtieron en dashboards que mostraban caja, reservas, flujos proyectados en tiempo real. Eso permitió actuar rápido si algo iba mal.

## Acción 5: Fueron públicos sobre dónde la empresa NO iba a competir

Es fácil decir "queremos ser los mejores en todo". Es difícil decir "no vamos a competir aquí". Un CEO de minería en 2023 dijo: "No vamos a competir en 'mina de volumen bajo costo'. Vamos a competir en 'mina especializada de alto margen'." Eso cambió cada decisión.

## Acción 6: Reembolsaron ganancias estratégicamente

Mientras mercado esperaba dividendos altos, algunos CEOs dijeron: "Vamos a retener efectivo para invertir en transformación." Requirió comunicación clara, pero permitió transformación sin deuda.

## Lo común: simplicidad, velocidad, claridad

No requirieron consultoría cara ni cambios de estructura. Fueron decisiones directas. Buscaban ir más rápido sin sacrificar control. Comunicaban límites claros, no ambigüedad.

## La perspectiva Tooxs

Trabajamos con CEOs que en 2026 intentan hacer lo que los mejores hicieron en 2023. Siempre es más difícil hacerlo después. Es más fácil establecer una cultura de velocidad desde el inicio que cambiarla 3 años después. Los CEOs que actúen en 2026 aún pueden implementar estas acciones, pero estarán 2-3 años atrás de competidores que lo hicieron en 2023.`,
  },
  {
    id: 30,
    slug: "ceo-alto-potencial-tres-capacidades",
    category: "Desarrollo Ejecutivo",
    date: "16 Abril 2026",
    readTime: "10 min",
    title: "No todos los CEOs son iguales: Los de alto potencial hacen tres cosas radicalmente diferente",
    excerpt: "McKinsey identificó cuáles ejecutivos tienen alto potencial para prosperar como CEOs. No es título. No es experiencia. Es mentalidad y capacidad. Si aspiras a ser CEO, debes saber qué los diferencia.",
    image: articleCeoAltoPotencial,
    content: `No es el que lleva 20 años en la compañía. No es el que tiene MBA de prestigio. Es alguien que prospera bajo incertidumbre, toma decisiones rápidas sin información perfecta, atrae talento y los desarrolla deliberadamente, sabe cuándo cambiar y cuándo persistir, y comunica con claridad brutal.

McKinsey estudió CEOs de alto potencial en varias industrias. El patrón era claro. No era tema de inteligencia. Era tema de cómo piensan y cómo actúan.

## Capacidad 1: Prosperar bajo incertidumbre radical

Cuando hay ambigüedad, la mayoría de ejecutivos se congela. Buscan más data. Reúnen más committees. Esperan certeza que nunca llega. Ejecutivos de alto potencial actúan diferente: toman decisión con 60-70% de información, implementan, miden, ajustan.

**Cómo desarrollarlo:** Identifica decisiones donde NO necesitas información perfecta. Tómalas rápido. No digas "vamos a estudiar". Di "vamos a pilotar, medimos en 6 semanas, decidimos". Mide obsesivamente.

## Capacidad 2: Atraer y desarrollar talento obsesivamente

CEOs de alto potencial dedican 20-30% de su tiempo a talento. No es "gestión de RH". Es buscar activamente mejor gente, convencerla de unirse, desarrollarla en roles cada vez más difíciles.

**Cómo desarrollarlo:** Sé claro sobre qué talento necesitas. Busca obsesivamente (LinkedIn, redes, headhunters, competidores). Invierte en su desarrollo (mentoring continuo, rol más desafiante cada 12-18 meses). Sé transparente sobre salida: si un talento que desarrollaste se va a ser CEO en otra compañía, eso es victoria.

## Capacidad 3: Comunicar con claridad brutal

La mayoría de ejecutivos "comunican" en corporatese. Frases largas, ambigüedad, marketing speak. CEOs de alto potencial comunican diferente:

- "Aquí está donde estamos. Aquí está donde necesitamos estar. Aquí está por qué."
- "Vamos a hacer X. Si sale mal, el costo es Y. Vale la pena."
- "No sé cómo vamos a lograr Z. Pero vamos a empezar aquí."

**Cómo desarrollarlo:** Escribe como hablas. Sé transparente sobre restricciones. Repite constantemente: dí el mismo mensaje 50 veces.

## Qué más diferencia a los de alto potencial

**Saben cuándo pivotar.** Si una estrategia no funciona a los 6 meses, cambian. Eso requiere ego manejable.

**Construyen para largo plazo pero actúan para corto plazo.** Visión de 5-10 años. Pero actúan en quarterly.

**Entienden el negocio profundamente.** Pasan tiempo en terreno, con clientes, con operaciones.

## El camino para desarrollar alto potencial

**Si eres ejecutivo ahora:** Toma decisiones rápido sin esperar aprobación. Desarrolla deliberadamente a 2-3 personas para roles más grandes. Comunica con claridad. Busca stretch assignments.

**Si eres aspirante a CEO:** Identifica un mentor que sea CEO de alto potencial. Toma un rol operacional donde puedas ver impacto directo. Desarrolla una junta o advisory para exponerte a pensamiento estratégico.

## La perspectiva Tooxs

Los mejores no esperan el rol de CEO para actuar como CEO. Actúan como CEO en su rol actual. Toman decisiones rápido. Desarrollan talento. Comunican claridad. Miden obsesivamente. Si quieres ser CEO, comienza ahora—en tu rol actual.`,
  },
  {
    id: 31,
    slug: "estado-ia-generativa-2024-adopcion",
    category: "AI & Operaciones",
    date: "16 Abril 2026",
    readTime: "9 min",
    title: "IA generativa dejó de ser futurista. Comenzó a ser ingeniería de costos.",
    excerpt: "A principios de 2024, IA generativa estaba en pruebas piloto en la mayoría de empresas. En 2026, las que siguieron piloteando están atrás de las que escalaron. La ventana se cierra rápidamente.",
    image: articleEstadoIa2024,
    content: `En 2023, CEO de empresa de manufactura decía "estamos evaluando IA." En 2024, director de operaciones decía "tenemos un piloto." En 2026, CFO dice "¿Por qué esta línea de producción cuesta 12% más que la del competidor? Ah, porque no tiene IA." El cambio es brutal: de experimento a imperativo operacional.

McKinsey documentó que empresas que adoptaron IA generativa temprano (2023-2024) lograron ahorros de 5-15% en costo operacional. Empresas que "siguen evaluando" en 2026 están 1,5-2,5 años atrás. Esa brecha es irreversible en ciclos de negocio de 3 años.

## Las tres aplicaciones que ya generan ROI claro

**Aplicación 1: Optimización de documentos y procesos operacionales.** IA generativa analiza manuales, procesos documentados, reportes de incidentes. Genera versión optimizada que elimina pasos redundantes. Procesos optimizados requerían 8-12% menos tiempo, con 10-15% menos errores. Inversión: 30-80K USD. Retorno: 200-300K USD anuales.

**Aplicación 2: Generación de reports y análisis.** En lugar de 3 analistas gastando 15 horas/semana generando reports, IA generativa lo hace en 2 horas, con 95% precisión. Lead time de decisión sobre cambios operacionales bajó de 2 semanas a 2 días. Ciclo de mejora continua acelerado 5x. Inversión: 20-50K USD.

**Aplicación 3: Asistencia en decisiones complejas.** Operador enfrenta decisión: "¿Cambio línea de producción de A a B ahora, o espero?" IA generativa sintetiza datos (demanda proyectada, stock, tiempo de cambio, costo, ingresos) y presenta opciones en 30 segundos vs. 30 minutos. Decisión es mejor y más rápida. Inversión: 15-40K USD. Retorno: 5-10% en eficiencia operacional.

## Por qué quien no adoptó en 2023-2024 va a luchar

No es porque IA sea mágica. Es porque competidor que adopta primero captura ahorros, invierte esos ahorros en mejorar producto o bajar precio. Tú no pudiste bajar precio porque aún no capturaste ahorros. Resultado: pierdes cliente.

Ejemplo: Transportista logístico que adopta IA generativa en 2024 para optimizar rutas, reduciendo costo por km 8-10%. Puede bajar precio a cliente 5%, mantener margen superior. Competidor sin IA no puede. En 2 años, perdió 15-20% de volumen. Es difícil de revertir.

## Cómo hacerlo bien

**1. No comiences con "grande".** Comienza con problema pequeño que duele. Un proceso de 15 horas/semana que IA generativa automatiza en 1 hora.

**2. Mide todo.** Antes y después. Diferencia es tu retorno.

**3. Escala lento.** Primero piloto con 1 equipo. Después, 3 equipos. Después, planta completa.

**4. Cambia procesos cuando sea necesario.** IA generativa no encaja en proceso antiguo. A veces necesitas redesign pequeño.

## La perspectiva Tooxs

El mito es "IA es cara." Verdad: pilotos mal diseñados son caros (500K-2M USD que no generan retorno). IA bien diseñada es barata: 30-150K USD, payback 6-12 meses. El tiempo de decidir es 2026, no 2027.`,
  },
  {
    id: 32,
    slug: "reset-minorista-comercio-integrado",
    category: "Retail & Comercio",
    date: "16 Abril 2026",
    readTime: "9 min",
    title: "El retail tradicional está muerto: Pero su reemplazo no es lo que crees",
    excerpt: "McKinsey documenta que retail no es simplemente física vs. digital. Los ganadores combinan ambos de formas que la mayoría de empresas no entiende.",
    image: articleResetMinorista,
    content: `Tienes una tienda física. No puedes cerrar porque tu marca y clientes dependen de ella. Pero sabes que no es suficiente. Entonces abres un e-commerce. Pero el e-commerce es un desastre sin logística. Ahora estás manejando dos negocios que compiten entre sí. McKinsey llama a esto el "reset" del retail. No es una transición. Es una reconfiguración completa.

## Los ganadores de 2026

**No es omnichannel** (ese término está muerto). Significaba "el cliente puede comprar en cualquier canal", pero si tu tienda física y e-commerce no están integrados operativamente, solo tienes dos negocios separados.

**Sí es: integración operativa real.** Inventario sincronizado. Logística unificada. Datos de cliente centralizados. El cliente es el centro, no el canal.

## Las nuevas tácticas que funcionan

### Táctica 1: Tienda como hub logístico (no solo punto de venta)

Tu tienda física es punto de recepción/devolución, almacén mini, punto de envío de e-commerce. Una tienda de ropa en Santiago vende online a todo Chile. Los clientes pueden recoger en tienda, devolver en tienda (aunque compraron online), ver stock online actualizado cada hora.

### Táctica 2: Diferenciación por experiencia, no por producto

Tu competidor online tiene 50x más selección. No puedes competir en catálogo. Compites en experiencia: personalización, servicio (un consultor que arma outfit completo), comunidad (events, talleres), fricción cero.

### Táctica 3: Datos de cliente como fuente de verdad

Capturar quién compra (programa de lealtad), qué compró, cuándo, a qué precio. Conectarlo con su actividad online. Actuar en base a eso.

### Táctica 4: Precio dinámico y local

El precio puede variar según inventario local, demanda local, competencia local. Requiere tecnología, pero significa más margen o más volumen.

### Táctica 5: Automatización donde importa menos

No automatices el customer-facing. Automatiza logística, inventory, fulfillment. Usa esa banda ancha para mejorar experiencia humana.

## El error que comete la mayoría

**Crear dos negocios separados.** "Vamos a lanzar una tienda online" pero como unidad separada, con CFO diferente, sistemas diferentes. Compiten por presupuesto, inventario, clientes. Necesita ser una estructura unificada con dos canales, no dos negocios.

**Invertir en tecnología sin cambiar operaciones.** Implementas un CDP pero no cambias cómo usan la data. Se vuelve un reporte que nadie mira.

## La perspectiva Tooxs

Trabajamos con minoristas en Chile en esta transición. Lo que hemos visto funcionar: comenzar pequeño (integración de inventario antes de logística), medir obsesivamente, iterar. Este es un reset, no una migración. Requiere pensar diferente sobre qué es retail en 2026.`,
  },
  {
    id: 33,
    slug: "planta-siderurgica-india-datos",
    category: "Casos & Industria",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Datos en el acero: Cómo una planta india ganó competencia global",
    excerpt: "Un caso real de transformación de datos en industria. No es ciencia de ficción, no son inversiones billonarias. Es disciplina, enfoque, y convertir lo que observas en decisiones que mejoran margen.",
    image: articlePlantaSiderurgica,
    content: `Una planta siderúrgica en Kalinganagar, India, producía acero de calidad mundial. Pero en la estación de metalurgia secundaria—donde se calienta el acero a temperaturas exactas—estaban dejando dinero sobre la mesa.

## El problema: excelencia operacional con datos rotos

El proceso requería precisión: sobrecalentar daña calidad; subcalentar baja eficiencia. Operadores experimentados lo hacían "a ojo", basado en experiencia y suerte. Resultado: variabilidad, defectos, ineficiencia.

## La solución: instrumentar, medir, optimizar

La planta instaló sensores de temperatura de alta precisión e integró esos datos con sistema de control automático que ajusta potencia en tiempo real. Parecía simple. Pero requería tres cosas:

1. **Hardware.** Sensores que resistieran 1600 grados Celsius sin fallar.
2. **Software.** Algoritmo que interpretara los datos y tomara decisiones rápidas (segundos, no minutos).
3. **Change management.** Operadores desconfiados que preferían su intuición tuvieron que aprender a confiar en la máquina.

## El impacto: números que hablan solos

Después de 18 meses de implementación:

- **Throughput +12%.** Más acero procesado con misma instalación.
- **Defectos -35%.** Menos rechazos, menos reproceso.
- **Energía -8%.** Control más preciso = menos desperdicio térmico.
- **Variabilidad en temperatura -60%.** Consistencia que operador manual nunca alcanzaría.

En dinero: una planta que procesa 500.000 toneladas/año = decenas de millones de dólares en EBITDA.

## Por qué los operadores aceptaron el cambio

Clave: entrenamiento y resultados visibles. No fue "máquina los reemplaza". Fue "máquina hace mejor lo que ustedes hacían, ustedes se enfocan en supervisión". Además, operadores vieron bonificación cuando mejora llegaba. Incentivos alineados = resistencia reducida a 0.

## Lecciones para minería en Latinoamérica

**1. Comienza en un proceso crítico, no en todo.** Pilotar es sabio.

**2. Obtén datos de calidad ANTES de optimizar.** 3 meses recolectando datos. Datos limpios = decisiones buenas.

**3. El operador es tu aliado, no rival.** Si se siente empoderado, apoya el cambio.

**4. Mide el impacto cada semana.** Throughput, defectos, energía, variabilidad.

## ¿Podría una mina chilena replicar esto?

Absolutamente. Procesos mineros que se beneficiarían: molienda (densidad, viscosidad, energía), flotación (pH, aireación, tiempo de residencia), concentración (flujos, densidades, temperaturas), espesamiento (humedad, flujo).

## La perspectiva Tooxs

Este no es un caso aislado. Es patrón replicable: identificar proceso crítico donde precisión = dinero, instalar sensores, diseñar lógica de control, probar en piloto, escalar con confianza. El acero indio no es más inteligente que el cobre chileno. Simplemente optó por convertir observación en acción.`,
  },
  {
    id: 34,
    slug: "colaboracion-digital-manufactura-conectada",
    category: "Manufactura & Tech",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Fuerza de trabajo conectada: Más que tecnología, es cultura",
    excerpt: "En minería y manufactura, si tu equipo no está conectado, los datos y automatización son inútiles. Colaboración digital no es Slack en las minas; son sistemas que permiten resolver problemas juntos, rápido.",
    image: articleColaboracionDigital,
    content: `Una mina típica tiene 10+ sistemas: ERP, SCADA, telemetría, email, WhatsApp, papeles. Información crítica está dispersa. Operador en turno no sabe qué conoce mantenimiento. Turno anterior dejó nota pero nadie la vio. Resultado: problemas sin resolver, ineficiencias que se repiten, talento frustrado.

## ¿Qué es colaboración digital en manufactura?

No es tener Zoom o Teams. Es integración de información y comunicación alrededor de operación. Ejemplo: hay vibraciones anormales en molino. Digitalmente integrado significa:

1. Sistema automático detecta vibraciones (sensor + análisis).
2. Alerta aparece en dashboard del operador, técnico mantenimiento, supervisor turno.
3. Operador abre aplicación, ve historial de este molino (fallos anteriores, qué se hizo, resultado).
4. Técnico ve especificaciones, manuales, acceso remoto para diagnóstico.
5. Todos pueden ver progreso en tiempo real.
6. Cuando se resuelve, queda registrado: "problema X, causa Y, solución Z, tiempo 4 horas".

## El impacto de colaboración digital integrada

McKinsey estudió plantas con sistemas colaborativos integrados vs. sin ellos:

- **Tiempo de resolución de problemas: -35%.** Información disponible inmediatamente.
- **Unplanned downtime: -25%.** Anticipas problemas antes del paro.
- **Satisfacción de operarios: +40%.** Entienden qué pasa, se sienten valorizados.
- **Productividad: +15%.** Menos tiempo gastado en buscar información.

## Qué sistemas deben estar integrados

**1. Datos operacionales en tiempo real.** Temperatura, flujos, presiones, vibraciones, energía. Accesibles desde cualquier pantalla en planta.

**2. Comunicación integrada.** Chat dentro del sistema operacional, no WhatsApp disperso. Si hay alerta, se notifica automáticamente a gente relevante.

**3. Historial de decisiones y problemas.** Base de conocimiento de qué pasó, cómo se resolvió. Aprendizaje documentado.

**4. Acceso remoto a diagnóstico.** Un técnico especialista puede ver lo que ve operador en planta sin estar físicamente.

**5. Capacitación integrada.** Enlaces a manuales, videos, contactos de especialistas.

## Barreras en LATAM

**Brecha de conectividad.** Minas remotas con banda ancha limitada. Solución: sistemas que funcionan offline y sincronizan.

**Resistencia a cambio.** "Siempre lo hemos hecho así." Solución: mostrar casos reales con menos trabajo manual.

**Diversidad de sistemas legacy.** Integrar SCADA de 1995 con sistemas nuevos es caro. Solución: middleware que traduce entre sistemas sin reemplazar legacy.

## La perspectiva Tooxs

Colaboración digital no es un proyecto de tech. Es transformación de cómo trabaja la gente. Requiere integración técnica de sistemas, cambio cultural (confianza, transparencia, documentación), entrenamiento, y métrica clara. Cuando operador, técnico y gerente ven misma información y pueden comunicarse instantáneamente, decisiones son más rápidas y correctas. Eso es ganancia operacional pura.`,
  },
  {
    id: 35,
    slug: "empresa-reconfigurada-vs-optimizar",
    category: "Estrategia & Org",
    date: "16 Abril 2026",
    readTime: "10 min",
    title: "Mientras competidores optimizan, los ganadores se reconfiguran",
    excerpt: "Cinco empresas diferentes (minería, manufactura, servicios) reconfiguran completamente sus operaciones. No es mejora. Es reinvención. McKinsey documentó lo que tienen en común.",
    image: articleEmpresaReconfigurada,
    content: `La mayoría de empresas optimizan. Reducen costos 5%. Mejoran calidad 3%. Es racional. Es seguro. Es insuficiente cuando la industria está cambiando.

Las compañías que McKinsey estudió no optimizaron. Se reconfiguraron. Cambiaron cómo trabajan, cómo organizan, cómo toman decisiones. No fue un cambio de 10%. Fue un cambio de 50%+.

## Patrón 1: Desafiaron sus asunciones sobre cómo funciona el negocio

"Siempre hemos hecho X" dejó de ser una razón válida.

**Ejemplo en minería:** Una minera de cobre asumía que "la minería requiere presencia física 24/7 en sitio". Hicieron pilotos con telepresencia, automatización, supervisión remota. Resultado: menos personas en sitio, rotación reducida 60%, productividad subió.

**Ejemplo en manufactura:** Una fábrica asumía "necesitas inventario de materias primas porque los proveedores son lentos". Implementó Just-In-Time radical. Liberó dinero de working capital.

## Patrón 2: Reordenaron cómo fluye la información y la decisión

Antes: CEO decide. Flujo de información sube lentamente. Acción es lenta. Después: información fluye en tiempo real. Decisiones se toman localmente. Escalation solo cuando es necesario.

**Caso real:** Una compañía de servicios tenía proceso de aprobación de cambios que tomaba 2 semanas. Reconfiguró: agente en terreno aprueba cambios menores inmediatamente. Tiempo bajó a 2 días. Satisfacción subió.

## Patrón 3: Cambiaron qué competencias valoran

Si antes valoraban "experiencia y antigüedad", ahora valoran "habilidad para aprender y adaptarse". Promovieron gente diferente. Crearon carreras para quien se adapta rápido.

## Patrón 4: Dieron el liderazgo a personas que entienden cambio

Necesitas líderes que hayan vivido cambio antes. No necesariamente de tu industria. Una minera contrató un VP de Operaciones de una compañía logística. Una manufacturera contrató un CFO de un startup de software.

## Reconfiguración requiere paciencia + urgencia

**Paciencia:** Las reconfiguraciones que funcionaron tomaron 18-24 meses. Algunas fases fueron piloto vs. escalamiento.

**Urgencia:** Pero tampoco lentamente. Necesitas norte claro y movimiento consistente. Las que tomaron 3 años perdieron oportunidad.

## Por qué fracasan la mayoría de intentos

**Razón 1: Cambio de liderazgo sin cambio organizacional.** El nuevo CEO choca contra la cultura. Se rinde o se va.

**Razón 2: Reconfiguración sin "para qué".** Sin objetivo claro, es cambio por cambiar.

**Razón 3: No comunicar los "por qué" constantemente.** La resistencia mata reconfiguración.

## Checklist para comenzar

- Identifica 3-5 asunciones sobre tu negocio que podrían estar obsoletas
- Para cada una, piensa: "¿Qué pasaría si invertimos eso?"
- Pilota un cambio pequeño (6-8 semanas). Mide impacto
- Si funciona, decide: ¿Escalamos o pivotamos?
- Comunica obsesivamente el "por qué" y los resultados
- Evalúa tu liderazgo. ¿Tienen mentalidad de reconfiguración o de optimización?

## La perspectiva Tooxs

Cuando una minera dice "necesita automatización", a veces significa "queremos que una máquina haga lo que hace un trabajador" (eso es optimización). Reconfiguración significa "queremos rediseñar completamente cómo funciona esa operación, de forma que la automatización sea un enabler". Las compañías que ganaron no persiguieron tecnología. Persiguieron reconfiguraciones que la tecnología habilitaba.`,
  },
  {
    id: 36,
    slug: "industria-4-0-post-covid-resiliencia",
    category: "Industria 4.0",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Post-COVID: Operaciones que no cierren cuando pase lo siguiente",
    excerpt: "La pandemia mostró que operaciones analógicas quiebran rápido. Las digitales resistieron. Ahora toca consolidar eso que aprendimos.",
    image: articleIndustria40,
    content: `En 2020, cuando todo cerró, surgió un patrón claro: plantas con sistemas digitales integrados continuaron. Plantas con silos analógicos colapsaron.

¿Por qué? Plantas digitales podían operar con menos gente presencialmente (supervisión remota), tenían información en tiempo real, tenían procesos documentados (alguien nuevo podía asumir rápido). Plantas analógicas dependían de personas clave que no podían ir, y todo se paralizaba.

## ¿Qué aprendió la industria?

Que resiliencia no es redundancia (tener "backup" de todo). Es **flexibilidad**: poder operar con configuraciones diferentes rápidamente. Eso requiere:

1. **Datos en tiempo real.** Saber qué pasa sin estar presente.
2. **Automatización de decisiones críticas.** Si gerente no está, sistema continúa tomando decisiones inteligentes.
3. **Documentación de procesos.** Nuevo operador puede funcionar el día uno sin training de semanas.
4. **Talento cruzado.** Varias personas pueden hacer el mismo rol.

## Industria 4.0 no es lujo, es seguro de operación

Las empresas que invierten en 4.0 hoy no lo ven como modernización tech. Lo ven como insurance contra la próxima crisis. Porque la próxima crisis vendrá. No sabemos cuál (climática, geopolítica, energética), pero vendrá. Las plantas preparadas ganan. Las no preparadas, cierran.

## Dónde hacer inversión 4.0 post-COVID

**1. Visibilidad de operaciones en tiempo real.** Dashboards que muestren estado de planta 24/7. En minutos, no en horas. Alguien remoto debería poder ver si la molienda está normal, si hay problema, qué hacer.

**2. Decisiones automáticas en procesos críticos.** Control automático de temperaturas, flujos, presiones. Si se sale de rango, alerta + acción automática.

**3. Sistemas de comunicación integrados.** Si una crisis requiere coordinar desde casas, plataforma única: video, chat, documentos, datos de operación.

**4. Capacitación digital.** E-learning para operadores nuevos. Si mañana necesitas 50% más gente rápido, debe ser posible sin esperar 3 meses de training presencial.

## El costo de NO hacer Industria 4.0 post-COVID

Si hoy tu planta sigue igual que pre-pandemia:

- **Riesgo operacional alto.** Una persona se enferma = problema.
- **Talento escaso.** Gente joven no quiere viajar a remotos 14/14 sin poder trabajar desde casa.
- **Márgenes bajos.** Sin automatización inteligente, costo operacional será siempre alto.
- **Próxima crisis te cierra.** Simple como eso.

## La perspectiva Tooxs

Post-COVID no es volver a pre-COVID. Es construir operaciones que resistan incertidumbre. Eso requiere 4.0: visibilidad en tiempo real, automatización inteligente, procesos documentados y escalables, talento preparado. La pandemia fue el canario en la mina—te mostró si tu operación es resiliente o frágil. Si fue frágil, no esperes a la próxima crisis. Comienza ahora.`,
  },
  {
    id: 37,
    slug: "dialogos-ceos-reimaginar-operaciones",
    category: "Liderazgo & Estrategia",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Lo que los CEOs de minería hablan en privado sobre operaciones",
    excerpt: "No es optimizar, es reimaginar. Los líderes industriales que ganan están replanteando cómo funciona una operación desde cero. No es ajustes incrementales, es cambio sistémico.",
    image: articleDialogosCeos,
    content: `McKinsey ha hablado con cientos de CEOs de operaciones industriales globales. El consenso es claro: los que buscan mejorar 5% año a año van a perder contra los que replantean operaciones completamente.

¿Por qué? Porque el contexto cambió: energía más cara, talento más escaso, regulaciones más estrictas, clientes más exigentes, volatilidad más alta. Ese contexto no es temporal, es estructural. Optimizar viejos modelos es como achicar un barco que se hunde.

## Reimaginar significa descartar lo que "siempre funcionó"

Un CEO de minería típico entra a una operación con 30 años de historia. Hay formas de hacer las cosas "porque siempre se han hecho así". Reimaginar significa cuestionarse cada supuesto:

- ¿Por qué el mantenimiento se hace cada 4 años? ¿Porque lo dice el manual, o porque realmente es óptimo?
- ¿Por qué tenemos 40 gerentes en la planta? ¿Porque es necesario, o porque la estructura organizacional es de 1995?
- ¿Por qué sacamos mineral así? ¿O hay otra secuencia que baja costo y emisiones?

## Los tres pilares que hablan los CEOs

**Pilar 1: Datos como la moneda de decisión.** Decisiones con "intuición" o "experiencia" se acabaron. Todo debe estar fundamentado en datos. No es análisis paralizante; es decisión rápida con información mejor. Requiere sistemas conectados que generen datos en tiempo real, equipos analíticos que conviertan datos en insights accionables, y procesos de decisión que incorporen datos.

**Pilar 2: Automatización con propósito.** No es robotizar lo primero que veas. Es identificar dónde la automatización reduce costo, baja riesgo, o mejora calidad. Y luego hacerlo rápido. Un CEO exitoso: "No vamos a automatizar solo porque sea posible. Vamos a automatizar lo que tiene payback en menos de 18 meses".

**Pilar 3: Resiliencia ante volatilidad.** Operaciones "optimizadas para un precio" quebrantan cuando el precio cae. Operaciones resilientes tienen costos variables, pueden escalar rápido, y tienen múltiples opciones de decisión. Eso requiere flexibilidad operacional, no eficiencia máxima.

## ¿Cuál es el timing de reimaginar?

Tres momentos clave:

1. **Crisis accionada por precio.** Cobre a USD 2.80/lb. De repente los márgenes son papeleta. Presión obliga replanteamiento.
2. **Cambio de tecnología.** Llega oportunidad de automatizar o conectar sistemas de forma que antes era impensable. Ventana de 18-24 meses.
3. **Cambio de liderazgo.** Nuevo CEO o COO ve la operación con ojos frescos.

## ¿Qué hace que un programa de reimaginación fracase?

- **Falta de urgencia ejecutiva.** Si el CEO no está personalmente comprometido, fracasa.
- **Resistencia del terreno.** Gerentes de 20 años que ven cambio como amenaza.
- **Cambio sin métrica clara.** Si no mides impacto cada mes, el proyecto se desinfla.
- **Esperar perfección antes de escalar.** Los CEOs ganadores pilotan rápido y escalan.

## La perspectiva Tooxs

Reimaginar una operación es proyecto de 18-36 meses, no una semana. Requiere liderazgo ejecutivo comprometido, diagnóstico profundo, visión clara del "futuro estado", plan por fases con victorias tempranas, y equipo dedicado con poder para cambiar. No es fácil. Pero el retorno es compuesto: mejor margen, operaciones más resilientes, equipo mejor preparado para el futuro.`,
  },
  {
    id: 38,
    slug: "nuevo-liderazgo-organizaciones-prosperas",
    category: "Liderazgo & Estrategia",
    date: "16 Abril 2026",
    readTime: "9 min",
    title: "El liderazgo que funcionaba en 1995 destruye empresas en 2026",
    excerpt: "Liderazgo jerárquico, centralizado, basado en autoridad—ese modelo está muerto. Las organizaciones que prosperan en 2026 tienen líderes que habilitan, distribuyen poder, y toman decisiones rápido con información incompleta.",
    image: articleNuevoLiderazgo,
    content: `McKinsey ha estudiado organizaciones "prósperas" en 2024-2026. No son aquellas con mejores procesos o más dinero. Son aquellas con liderazgo que ha reconfigurado fundamentalmente cómo toman decisiones y distribuyen poder.

Lo sorprendente: muchas no son startups o tech. Son mineras, bancos, manufactureras—empresas tradicionales que decidieron liderar diferente.

## Pilar 1: Distribución de poder (no delegación falsa)

**El viejo modelo:** CEO decide. Ejecutivos comunican. Empleados ejecutan. Toma semanas.

**El nuevo modelo:** Empleados en el frente tienen poder real para tomar decisiones. No piden permiso constantemente. Actúan con marcos claros.

Ejemplo real: una minera chilena cambió su modelo de aprobaciones. Antes un cambio en procedimiento de seguridad requería aprobación de 4 niveles. Ahora el supervisor del turno puede cambiarlo si se documenta y socializa. Resultado: decisiones más rápidas, más buy-in.

## Pilar 2: Decisiones con información incompleta

**El viejo modelo:** Esperamos toda la información antes de decidir. Exactitud antes que velocidad.

**El nuevo modelo:** Decidimos con 70% de información, ejecutamos, aprendemos, ajustamos. Velocidad antes que perfección.

En manufactura, esto significa que un gerente puede lanzar un nuevo proceso sin esperar análisis de viabilidad de 3 meses. Lanza en 2 semanas, mide, ajusta.

## Pilar 3: Transparencia radical sobre restricciones

**El viejo modelo:** Los números son privados de ejecutivos. La gente sigue órdenes sin contexto.

**El nuevo modelo:** Toda la organización sabe márgenes, ROI, costos. No números individuales (eso es confidencial), pero contexto empresarial sí.

Cuando empleados entienden que la minera tiene margen operativo de 12% y la competencia está en 18%, optimizar costos no es "corte de presupuesto". Es supervivencia.

## Pilar 4: Capacidad antes que autoridad

**El viejo modelo:** Tu posición define tu poder. Gerente > Supervisor > Empleado.

**El nuevo modelo:** Tu capacidad define tu influencia. Un joven ingeniero con expertise en IA puede liderar decisiones sobre IA aunque no sea gerente.

## Cómo se ve esto en práctica

**En una minera:** Decisión de automatización antes la aprobaba el CEO; ahora el equipo de operaciones que sabe qué duele propone, lidera piloto, itera. CEO revisa pero no decide. En crisis, el supervisor de turno tiene autoridad para hacer cambios de emergencia y reporta después.

**En una manufacturera:** Los técnicos ven el problema, hacen un cambio pequeño, miden el impacto en 1 semana, escalan o revierten. El gerente de operaciones puede invertir hasta cierto monto sin aprobación si demuestra ROI en 6 meses.

## El riesgo: caos si no lo haces bien

Distribución de poder sin marcos claros = anarquía. Lo que funciona:

- **Marcos claros:** "Puedes gastar hasta $100K sin aprobación. Esto requiere datos. Esto requiere input de otras áreas."
- **Confianza demostrada:** Comienza con personas que han ganado tu confianza. No con todos al mismo tiempo.
- **Medición:** Si alguien toma una decisión con poder distribuido, necesitas saber si fue buena o mala.

## La perspectiva Tooxs

El cambio es cultural, no solo organizacional. Requiere que el CEO genuinamente acepte que no controla cada decisión. Si tu organización aún funciona como "CEO ordena, ejecutivos implementan, empleados obedecen", estás dejando dinero en la mesa que tus competidores que lideran diferente ya están ganando.`,
  },
  {
    id: 39,
    slug: "futuro-fuerza-laboral-talento-incertidumbre",
    category: "Talento & Cultura",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Talento en incertidumbre: Qué las minas y plantas necesitan hacer ahora",
    excerpt: "El mercado laboral en minería y manufactura ha cambiado para siempre. Las empresas que invierten en talento hoy ganan; las que no, pierden.",
    image: articleFuturoFuerzaLaboral,
    content: `McKinsey advierte que el futuro del trabajo está definido por incertidumbre. Las industrias cambian rápido, los roles desaparecen y emergen nuevos. Las empresas que flotan son las que pueden reentrenar gente rápidamente.

En minería chilena esto es crítico. El sector enfrenta presión por descarbonización, automatización y volatilidad de precios. Los operadores manuales que conocen "una máquina" son vulnerables. Los que entienden sistemas integrados, datos, y pueden aprender nuevas tecnologías son valiosos.

## La brecha de habilidades crece más rápido que la educación

Las universidades entrenan para trabajos que existían hace 5 años. Las minas y plantas necesitan personas que hoy no existen en el mercado: especialistas en IoT industrial, analítica, ciberseguridad de operaciones, mantenimiento predictivo.

Solo hay dos opciones:

1. Traer talento del extranjero (caro, visa complicada).
2. Entrenar talento interno (requiere inversión, pero crea retención y lealtad).

## ¿Cuál es el ROI de invertir en talento?

McKinsey encontró que empresas con programas de desarrollo formal tienen:

- **+18% en productividad** comparado con competidores sin programas.
- **−25% en rotación** de personal crítico.
- **+12% en capacidad de innovación.**

En dinero: una mina de 500 personas ganando USD 50k/año, con +18% productividad = USD 4.5 millones extra anuales. El costo del programa: USD 500k-800k. Payback: menos de un año.

## Tres frentes críticos de inversión

**1. Reentrenamiento en tecnología digital.** Operadores, supervisores, técnicos: todos necesitan entender IoT, data, y automatización en un nivel funcional. Cursos de 3-6 meses, prácticas en sistemas reales, certificaciones.

**2. Desarrollo de liderazgo en incertidumbre.** Los gerentes de ahora tuvieron carrera en ambiente predecible. Necesitan nuevas habilidades: toma de decisión rápida, manejo de ambigüedad, liderazgo en remoto.

**3. Cultura de aprendizaje continuo.** No es un programa de "una vez". Es crear mentalidad que "los que aprenden rápido avanzan". Herramientas: plataformas de e-learning, mentoría interna, presupuesto anual de educación por persona.

## La perspectiva Tooxs

En minería y manufactura, la inversión en talento es tan importante como la inversión en tecnología. De hecho, sin talento, la tecnología se desperdicia. El plan debe incluir diagnóstico de brechas por rol, programa de capacitación estructurado (3-24 meses), integración con sistemas reales, y métrica de retorno.

Una mina con equipo joven, entrenado y motivado no solo opera mejor. Atrae clientes que saben que esa operación es confiable. Y los retiene más tiempo. Eso es rentabilidad compuesta.`,
  },
  {
    id: 40,
    slug: "estado-consumidor-2025-disrupcion-permanente",
    category: "Consumo & Mercados",
    date: "16 Abril 2026",
    readTime: "8 min",
    title: "El consumidor de 2025 no quiere mejor. Quiere diferente",
    excerpt: "Preferencias de consumidor cambian cada trimestre. Sostenibilidad no es diferenciador, es requisito. Las que ganan entienden que la disrupción de demanda es permanente, no temporal.",
    image: articleConsumidor2025,
    content: `McKinsey documenta cinco transformaciones del consumidor 2025 que cambian todo.

## Las cinco transformaciones permanentes

**1. Hiperpersonalización es obligatoria.** Consumidor espera que producto/servicio sea personalizado a sus preferencias. Amazon lo hizo con recomendaciones; ahora es estándar. En manufactura el cliente espera que el producto sea customizado a sus necesidades específicas, no que elija entre 3 opciones estándar. Empresas que no personalizan pierden cliente a las que sí.

**2. Transparencia de origen es requisito de entrada.** Consumidor quiere saber: ¿de dónde viene? ¿quién lo hizo? ¿bajo qué condiciones? Minería que pueda demostrar (con datos verificables) que su cobre se extrajo con menor impacto ambiental comanda premium de 10-20%.

**3. Velocidad de servicio: 48 horas es lento.** Consumidor en 2025 espera entrega/respuesta en 24 horas. Manufactureros que dependen de "customización manual" están atrás de los que tienen procesos que permiten manufactura-a-pedido en 48 horas. Logística que promete "entrega en 3 días" pierde cliente a la que promete "en 36 horas".

**4. Preocupación ambiental es criterio decisivo, no secundario.** Para 45%+ de consumidores en Latinoamérica, impacto ambiental es criterio tan importante como precio. Productor que ofrece producto con 40% menor huella, pero cuesta 8% más, captura consumidor que antes elegía solo por precio.

**5. Comunidad y propósito > posesión.** Millennials y Gen Z no quieren "poseer"; quieren "pertenecer". En lugar de "vender productos", crear comunidad de usuarios.

## Cómo impacta minería, manufactura y logística

**Minería:** Consumidor final (a través de cadena de valor) quiere cobre/litio de empresas que demuestren sostenibilidad. Minera que pueda trazar origen y certificar equidad laboral comanda +15% precio. La que no puede compite como commodity en precio.

**Manufactura:** Cliente B2B quiere proveedor que entregue customización en 2 semanas (no 8), transparencia en supply chain, y alineación en sostenibilidad.

**Logística:** Cliente quiere visibilidad real-time, entrega rápida (36 horas), y huella de carbono medida. Logística que ofrece eso cobra 10-15% premium.

## La perspectiva Tooxs: disrupción permanente significa pivote permanente

Empresa que asume "preferencias de consumidor van a ser estables próximos 3 años" está apostando mal. Apuesta correcta: "Preferencias van a cambiar, ¿cómo hacemos para cambiar rápido?"

Eso significa monitoreo continuo, capacidad de innovación acelerada, precio dinámico, y transparencia radical. En industria donde demanda está en transición, empresa que anticipa y ejecuta cambios primero captura mercado. La que sigue reaccionando queda atrás.`,
  },
  {
    id: 41,
    slug: "energia-renovable-almacenamiento-chile",
    category: "Energía & Sostenibilidad",
    date: "16 Abril 2026",
    readTime: "8 min",
    title: "Energía renovable sin almacenamiento es promesa sin ejecución",
    excerpt: "Latinoamérica invierte miles de millones en paneles solares y turbinas eólicas sin infraestructura de almacenamiento. El resultado: sobreproduce cuando no se necesita, carece cuando se necesita.",
    image: articleEnergiaRenovable,
    content: `Latinoamérica ha invertido más de USD 100B en energía renovable en los últimos 10 años. Chile está en la vanguardia—especialmente en solar en el norte y eólica en el sur. Pero hay un problema silencioso: la energía renovable es intermitente. Sin almacenamiento, genera volatilidad que el grid no puede manejar.

McKinsey estima que en 2026 Latinoamérica debe invertir al menos USD 15B en sistemas de almacenamiento para que la renovable sea viable a escala. Aún no estamos allí.

## El costo de no tener almacenamiento

**Para el grid nacional:**
- Desperdicio de generación cuando hay pico solar pero baja demanda.
- Generadores fósiles ineficientes que se mantienen como respaldo.
- Inestabilidad de voltaje que afecta el grid entero.

**Para operaciones industriales (minería, manufactura):**
- Costos de energía más altos por "energía firme".
- Restricciones de operación en períodos de baja generación.
- Penalidades por sobre-consumo en horarios peak.

## La solución: almacenamiento (¿pero cuál tipo?)

**Baterías de iones de litio.** Rápidas, escalables, costos bajando 15% anual. Ideales para fluctuaciones de corto plazo. Contras: caras para larga duración, degradación con ciclos. Ideal para mineras que quieren ser 80% renovables cubriendo cambios solares hora a hora.

**Almacenamiento hidráulico (bombeo).** Barato, confiable, larga duración. Requiere geografía específica (dos reservorios a diferentes elevaciones). Chile y Perú tienen geografía ideal.

**Almacenamiento térmico (sales fundidas).** Ideal para plantas solares de concentración. Almacena calor, no electricidad. Caso de uso: grandes operaciones solares en el desierto atacameño.

**Hidrógeno verde.** Almacenamiento de muy larga duración, cero emisiones si se produce con renovable. Tecnología aún cara, eficiencia 60-70%. Caso de uso: largo plazo (5+ años).

## La paradoja económica

McKinsey señala una paradoja: el almacenamiento es tan crítico que debería ser subsidiado o mandatado. Pero no lo es. Resultado: inviertes en paneles y turbinas (que ves), pero no inviertes en almacenamiento (invisible). El grid se quiebra silenciosamente, y luego acudes a plantas fósiles como respaldo costoso.

## ¿Qué significa para operaciones en Chile?

**Si eres minera o manufacturera:** Tienes dos opciones. 1) Esperar que el gobierno resuelva el almacenamiento (riesgo de energía cara e inestable), o 2) generar e almacenar tu propia energía. La opción 2 es más cara inicialmente, pero un fabricante que genera 70% de su energía con solar + almacenamiento tiene costos predecibles en 5 años.

**Si eres desarrollador de proyectos renovables:** El futuro es "renovable + almacenamiento". No es opcional.

## La perspectiva Tooxs

Trabajamos con mineras en el norte de Chile que han instalado plantas solares masivas. Algunos lo hicieron bien—paneles + almacenamiento. Otros solo paneles. Los que lo hicieron bien tienen energía predecible. Los que solo tenían paneles ahora pagan "energía firme" del grid cuando sus paneles no producen.

El costo de agregar almacenamiento después es 2-3x el costo de hacerlo desde el inicio. La moraleja: si planeas renovables, planea almacenamiento desde el día uno.`,
  },
  {
    id: 42,
    slug: "crecimiento-servicios-industriales-margen",
    category: "Industria & Servicios",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Servicios industriales: Donde está el dinero de verdad",
    excerpt: "En minería, manufactura y procesos industriales, vender equipos es el pasado. El crecimiento está en servicios: mantenimiento, data, soporte remoto. Margen 30-50% vs 10-15% en equipos.",
    image: articleServiciosIndustriales,
    content: `McKinsey estudió cientos de fabricantes de equipos industriales. El hallazgo es consistente: márgenes en equipos 10-15%; márgenes en servicios 30-50%.

Pero la mayoría de fabricantes todavía vende equipos como si fuera 1990. Entregan la máquina, se va el técnico, y eso es. No ven el potencial de ingresos recurrentes de servicios de mantenimiento, data y optimización durante los 15-20 años que el equipo opera.

## ¿Por qué los clientes prefieren servicios?

Porque reduce su riesgo. Un operador de mina que compra un concentrador quiere una cosa: que funcione sin parar. Está dispuesto a pagar más por predictibilidad.

Los fabricantes que ofrecen "uptime garantizado" —mantenimiento preventivo, monitoreo remoto, reposición automática— logran tres cosas: ingresos predecibles (contratos anuales), relación más profunda con el cliente, y datos valiosos para mejorar equipos futuros.

## La brecha de expectativas es enorme

McKinsey encontró que 62% de clientes B2B prefieren comprar y contratar servicios online. Pero apenas 10-13% de fabricantes industriales ofrecen plataformas digitales para hacerlo.

En minería chilena, los clientes están acostumbrados a portales, apps y autoservicio en todo lo demás. Pero cuando necesitan una pieza de repuesto vuelven al teléfono y fax.

## Cómo diseñar una estrategia de servicios

**1. Segmenta por necesidad, no por sector.** Algunos clientes valoran soporte 24/7 y pagan por ello. Otros solo quieren acceso online y precios competitivos. Modelos completamente diferentes.

**2. Diseña experiencias por segmento.** Premium: ejecutivos de cuenta, soporte predictivo. Estándar: portales online, alertas automáticas, comunidad.

**3. Integra datos de equipos en campo.** Si 500 de tus equipos están en minas, eso es oro: predecir fallos, optimizar mantenimiento, ofrecer mejoras de software.

**4. Crea plataformas digitales.** Apps para operadores, portales para compradores, dashboards para gerentes. Baja costo operacional para ti y para ellos.

## Caso real: aviación

Una compañía de aviación tenía buenas ventas de piezas pero sin crecimiento. Problema: los clientes no sabían que existía. Solución: rediseñaron sitio web, lanzaron app móvil, simplificaron pedidos. Resultado esperado: +10% en ventas de repuestos, sin tocar el producto.

## La perspectiva Tooxs

En minería y manufactura chilena, la mayoría de fabricantes locales todavía vende como hace 20 años. El que se mueva a modelo de servicios en los próximos 24 meses gana mercado. Requiere conectar datos de campo (IoT), integrar sistemas (ERP, CRM, portales), y entrenar equipos en mentalidad de servicio.

Los fabricantes que migran no solo ganan más márgenes. Crean empresas más resilientes con ingresos predecibles.`,
  },
  {
    id: 43,
    slug: "estado-consumidor-2024-tres-segmentos",
    category: "Consumo & Mercados",
    date: "16 Abril 2026",
    readTime: "8 min",
    title: "2024 fue el año en que el consumidor se fracturó en tres segmentos irreconciliables",
    excerpt: "Los días del consumidor promedio terminaron. Trading Down, Steady y Trading Up: tan diferentes en preferencias y poder adquisitivo que una sola estrategia ya no funciona.",
    image: articleConsumidor2024,
    content: `McKinsey documenta tres segmentos emergentes que ya no se pueden servir con una sola estrategia.

## Los tres segmentos

**Segmento 1: Trading Down (40% del mercado).** Consumidores que reducen gasto en categorías no-esenciales. Compran marca propia, evitan premium, buscan descuento. Sensibles a precio. En Latinoamérica este segmento creció por la inflación 2022-2023; aún no se recupera.

**Segmento 2: Steady (35% del mercado).** Ingresos estables. Compran lo mismo que hace 2 años. No buscan lujo, pero no aceptan marca propia. Buscan valor (buen producto a precio justo). Mayoría. Predecibles.

**Segmento 3: Trading Up (25% del mercado).** Aumentan gasto en categorías que les importan. Minoría poderosa. Pagan 20-50% más por producto que alinea con valores (sostenibilidad, origen local, propósito). No son sensibles a precio, sino a propósito.

## Cómo impacta estrategia comercial

**Para Trading Down:** Precio agresivo + calidad suficiente. Marca no importa. Distribución masiva. Promociones frecuentes. Márgenes bajos, volumen alto.

**Para Steady:** Consistencia + valor percibido. Relación precio-calidad correcta. Marca da confianza. Distribución selectiva.

**Para Trading Up:** Diferenciación + historia. Precio no importa si valor propuesto es fuerte. Marca importa mucho. Márgenes altos, volumen bajo pero precio alto.

## El problema de servir los tres con una sola estrategia

Empresa que intenta complacer a todos no agrada a nadie. Precio no es suficientemente bajo para "Trading Down". Valor no es suficientemente diferenciado para "Trading Up". "Steady" te ve como competidor mediocre.

Ejemplo: transportista logístico que ofrece "servicio estándar a precio moderado". Los sensibles al precio eligen el más barato. Los que valoran trazabilidad real-time eligen premium. El "estándar" queda con volumen de "Steady"—predecible pero no crece.

## Elegir segmento es decisión estratégica, no marketing

La pregunta correcta no es "¿cómo servimos mejor al consumidor?" Es "¿cuál segmento queremos servir?" Porque la respuesta determina inversión en tecnología, estructura de costos, cadena de valor, talento.

**Trading Down:** Necesitas eficiencia operacional extrema (8-12% de costo de producción vs. 15% promedio). Si no tenés ventaja de costo estructural, no funcionará.

**Steady:** Consistencia y confiabilidad. Calidad predecible. Marca que da confianza. Cambios lentos pero estables.

**Trading Up:** Diferenciación fuerte. Sustentabilidad demostrable con datos. Customización real. Cambios rápidos pero segmento pequeño.

## El número clave: costo de servir vs margen

- Trading Down: costo de servir 12%, margen 4% = -8% (volumen compensa).
- Steady: costo de servir 10%, margen 12% = +2%.
- Trading Up: costo de servir 8%, margen 35% = +27%.

Si la empresa puede escoger, "Trading Up" genera mejor EBITDA con volumen mucho más bajo. Pero requiere capacidad que muchas no tienen.

## La perspectiva Tooxs

Estos tres segmentos van a divergir más, no menos. La desigualdad está creciendo en Latinoamérica. Trading Down crecerá. Trading Up también. Steady decrecerá (clase media que se empobrece o enriquece). Consecuencia: las estrategias de "medio" van a fallar.`,
  },
  {
    id: 44,
    slug: "mandos-intermedios-corazon-empresa",
    category: "Talento & Cultura",
    date: "16 Abril 2026",
    readTime: "10 min",
    title: "Estás asfixiando a tus mandos intermedios sin saberlo: y están por renunciar",
    excerpt: "McKinsey revela que los mandos intermedios generan el ROI más alto en cualquier organización—pero están saturados de tareas administrativas, sin poder real, y poco apreciados.",
    image: articleMandosIntermedios,
    content: `Si el CEO es la cabeza y los empleados son el cuerpo, los mandos intermedios son el corazón. Son quienes traducen estrategia en acción.

McKinsey documentó algo incómodo: en organizaciones de alto desempeño, el mando intermedio genera el mayor ROI por dólar invertido en salario. No el CEO. No los especialistas. Ellos.

## El problema: atrapados entre dos fuegos

**Arriba:** "Necesito estos números en 3 horas." "¿Por qué bajó la productividad 2%?" Constantemente tratando de complacer a los ejecutivos.

**Abajo:** "Mi presupuesto fue cortado." "¿Por qué la promoción?" Absorben el descontento.

**En el medio:** Reportes, aprobaciones, compliance, meetings, documentación. Pasan 40-50% de su tiempo en administración pura, no en liderazgo real.

## El costo de no cuidarlos

**Rotación alta.** Un mando intermedio de 10 años se va. Costo de reemplazarlo: 18 meses de productividad reducida + reclutamiento + training.

**Desconexión de liderazgo.** Si está saturado de administración, su liderazgo se vuelve mediocre. Equipos mediocres dirigidos por líderes mediocres es contagioso.

**Pérdida de innovación ascendente.** Ven oportunidades que el C-suite no ve. Si están saturados, esas ideas nunca llegan a la mesa.

## Lo que NO funciona

- **Conferencias de liderazgo:** Regresan inspirados. Dos semanas después, atrapados en el mismo sistema.
- **Programas de retención:** Bono o promesa de promoción. Si el problema es saturación administrativa, dinero no lo resuelve.
- **Comunicación corporativa:** Mensajes inspiradores que suenan huecos cuando la realidad es "hacer más con menos".

## Lo que sí funciona

**1. Automatización y eliminación de tareas administrativas.** Si pasa 50% del tiempo en administración, esa tarea debe ser automatizada o eliminada. Aprobaciones con límites claros. Dashboards en lugar de Excel manual. Auditorías automatizadas.

**2. Claridad sobre poder real.** ¿Qué puede decidir sin pedir aprobación? Dáselo por escrito. Confía. Si constantemente apruebas o reviertes sus decisiones, no le diste poder real—solo teatro.

**3. Inversión en su desarrollo.** No conferencias de un día. Mentoring continuo. Acceso a líderes senior. Oportunidad de dirigir proyectos estratégicos.

**4. Diferenciación clara en compensación.** Un mando intermedio que gestiona USD 10M y lidera 20 personas debe ganar significativamente más que un profesional individual. En Chile vemos estructuras donde gerentes de 10 años ganan lo mismo que profesionales de 5 años. Eso destruye motivación.

## El impacto si lo haces bien

Una minera chilena rediseñó su estructura:

- Eliminó 40% de reportes mediante automatización.
- Aclaró autoridad de decisión (límites presupuestarios específicos).
- Aumentó inversión en mentoring.
- Aumentó compensación 20% para roles críticos.

**Resultado a 12 meses:** Rotación de mandos intermedios bajó de 18% a 6%. Engagement subió 30%. Velocidad de decisión aumentó. Innovación ascendente aumentó.

## La perspectiva Tooxs

Trabajamos frecuentemente con operaciones que enfrentan crisis de mandos intermedios. El síntoma es siempre el mismo: líderes que no tienen tiempo para liderar.

La solución casi siempre requiere tecnología para automatizar administración, claridad sobre decisiones y límites, e inversión real en desarrollo. McKinsey está en lo correcto—el mando intermedio es el corazón de tu organización. Si lo asfixias, tu empresa no funciona.`,
  },
  {
    id: 45,
    slug: "trabajo-remoto-mineria-hibrido",
    category: "Talento & Cultura",
    date: "16 Abril 2026",
    readTime: "5 min",
    title: "Trabajo remoto en minería: Lo que los operadores quieren (y no quieren)",
    excerpt: "En minas no todo puede ser remoto. Pero sí hay roles, turnos y decisiones que se podrían tomar desde Santiago, La Serena o el escritorio de casa.",
    image: articleTrabajoRemoto,
    content: `McKinsey estudió 2.000 tareas en 800 trabajos a través de 9 países. La conclusión: aproximadamente 25-35% de tareas en industria pueden hacerse remotamente sin perder productividad.

En minería y manufactura ese porcentaje es más bajo que en servicios o tech (porque hay trabajo físico obvio). Pero sigue siendo significativo: análisis de datos, supervisión remota, coordinación, reportes, planificación.

## ¿Qué quieren realmente los trabajadores?

Encuestas de McKinsey revelan algo interesante: la mayoría NO quiere trabajo 100% remoto. Quieren flexibilidad: algunos días en oficina/planta, otros desde casa, opción de elegir cuándo según la tarea, confianza sin micromanagement.

**En minería específicamente:** Operadores en turno: remoto no aplica. Pero supervisores, jefes de turno y gerentes podrían trabajar 2-3 días desde base de campamento, 2 días desde oficina en la ciudad. Eso baja estrés, mejora retención.

## El costo de NO ofrecer flexibilidad

McKinsey encontró que trabajadores que demandan flexibilidad y no la obtienen:

- **+40% probabilidad de irse a la competencia.**
- **−25% en satisfacción laboral** (incluso con sueldo igual).
- **−15% en productividad** (porque están pensando en irse).

## Las estructuras que funcionan en LATAM

**1. Modelo por rol.** Algunos roles permiten remoto: analistas de datos, especialistas en mantenimiento predictivo, coordinadores de logística, staff administrativo. Otros no: operadores, técnicos en terreno, supervisores directos. Por cada rol, definir explícitamente: "Este rol puede ser 50% remoto, 50% presencial".

**2. Modelo por fase de proyecto.** Fase de planificación: mucho remoto. Fase de implementación: más presencial.

**3. Modelo de presencia crítica.** Algunos momentos la presencia es crítica: arranque de campaña, crisis, decisiones de riesgo. Otros no tanto.

## Tecnología que hace remoto posible

Sin esto no funciona:

- **Dashboards en tiempo real** accesibles desde cualquier lado.
- **Videoconferencia integrada** sin fricción.
- **Documentación centralizada** (si está en papeles o emails, remoto no funciona).
- **Sistemas de soporte remoto** (técnico que diagnostica vía cámara/sensor desde lejos).

## La perspectiva Tooxs

Trabajo remoto en minería no es "sí o no". Es "qué, cuándo y cuánto". El proceso es:

1. Mapear cada rol: cuánto de su tiempo es realmente presente vs análisis/coordinación.
2. Definir políticas claras con criterios de cuándo sí y cuándo no.
3. Implementar tecnología de soporte.
4. Medir rotación, productividad, satisfacción. Ajustar según datos.

Las empresas que entienden esto ganan talento. En minería chilena, donde el talento es escaso y caro, eso es brecha competitiva real.`,
  },
  {
    id: 46,
    slug: "deconstruir-silos-excelencia-end-to-end",
    category: "Operaciones & Eficiencia",
    date: "16 Abril 2026",
    readTime: "8 min",
    title: "Los silos corporativos te están costando 10-15% de rentabilidad. Literal.",
    excerpt: "Empresa típica tiene Compras, Operaciones, Logística, Ventas. Cada uno optimiza su parte. Resultado: rentabilidad perdida en las fricciones. Deconstruir silos genera ahorros sin invertir en tecnología nueva.",
    image: articleDeconstruirSilos,
    content: `McKinsey analizó 150+ empresas de manufactura en rango USD 50M-500M revenue. Encontró que empresas donde funciones están integradas (Compras, Operaciones, Logística alineadas en objetivos) logran 10-15% mejor rentabilidad que empresas donde cada función optimiza independientemente.

¿Por qué? Cuando Compras elige proveedor basado solo en "precio", ignora costo total:

- Proveedor barato envía material con mayor defectosidad: +2% rechazo en Operaciones = +1,5% costo.
- Material de mala calidad requiere más manejo: tiempo de mantenimiento +5%.
- Entrega irregular: Logística mantiene stock mayor = +8% capital de trabajo.
- Cliente se queja: Ventas pierde ingresos potenciales -3%.

**Costo total: −8% margen.** Si margen típico es 15%, terminas con 7%. Si hubiera elegido proveedor 5% más caro pero mejor calidad, margen sería 14%. Diferencia: 100% mejor.

## Las tres deconstrucciones de silos que generan mayor ahorro

**Deconstrucción 1: Compras-Operaciones.** Objetivo unificado: minimizar costo total de material, no solo precio de compra. Métricas unificadas: si Operaciones reporta 2% rechazo por baja calidad, Compras es responsable. Resultado: rechazo cae 30-50%, costo por unidad producida cae 5-8%.

**Deconstrucción 2: Operaciones-Logística.** Objetivo unificado: producir lo que se vende, cuando se vende. Métrica: costo de entrega a tiempo. Si Logística no puede entregar en plazo, Operaciones ajusta plan. Resultado: stock en tránsito cae 25-35%, capital de trabajo cae 8-12%.

**Deconstrucción 3: Ventas-Operaciones.** Objetivo unificado: vender al precio y cantidad que Operaciones puede producir eficientemente. Si Ventas promete customización que requiere cambio de setup cada 2 horas, Operaciones es responsable de precio más alto al cliente. Resultado: margen de contribución sube 8-12%.

## Caso real: manufactura que deconstruyó silos

Empresa fabricante de componentes metálicos, revenue USD 80M. Operaba con silos clásicos: margen 11%.

Se integró: comité de "Operaciones end-to-end" con representantes de Compras, Operaciones, Logística, Ventas. Métrica común: "Costo total de servir al cliente".

Cambios:

1. Compras negoció con 5 proveedores en lugar de 15, con cláusulas de calidad. Ahorro: USD 500K en gestión + USD 300K menos rework.
2. Operaciones ajustó plan basado en demanda proyectada. Reducción de stock: USD 1,8M liberados.
3. Logística negoció entregas consolidadas cada 2 semanas. 20% reducción en costo de flete.
4. Ventas enfocó esfuerzo en productos de mayor margen. Mix cambió: ingresos +3%, margen +6,5%.

**Resultado: margen pasó de 11% a 17,5%. Ganancia en EBITDA: USD 5,2M anuales.** Inversión: USD 400K. ROI: 1200% en año 1.

## La perspectiva Tooxs: excelencia end-to-end es decisión gerencial

Deconstruir silos requiere cambiar métricas, incentivos y gobernanza. No es tecnología; es decisión de cómo organizar gente.

**Paso 1: Diagnóstico de silos.** Mapear puntos de fricción entre funciones. Típicamente hay 3-5 fricciones mayores.

**Paso 2: Definir end-to-end.** Elegir proceso crítico (ej: "Producir y entregar a cliente a tiempo"). Definir métrica única que todos optimicen.

**Paso 3: Cambiar incentivos.** Si Compras era bonificada por "precio bajo", ahora por "costo total". Incentivos alineados = comportamiento alineado.

**Paso 4: Implementar gobernanza.** Comité mensual donde funciones reportan métrica unificada. Sin este comité, los silos vuelven a formarse en 6 meses.

## El ahorro está ahí, esperando

En 90% de empresas de manufactura que auditamos existen ahorros de 10-15% de rentabilidad simplemente deconstruyendo silos. Están "escondidos" en ineficiencias entre funciones. Ningún área los ve aisladamente. Solo se ven cuando miras cross-functionally.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, count);
}
