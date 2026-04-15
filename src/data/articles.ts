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
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, count);
}
