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
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, count);
}
