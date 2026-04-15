import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, ArrowRight, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Industrias — TOOXS" },
      { name: "description", content: "Descubre cómo TOOXS aplica inteligencia en más de 25 industrias para transformar operaciones y decisiones." },
      { property: "og:title", content: "Industrias — TOOXS" },
      { property: "og:description", content: "Descubre cómo TOOXS aplica inteligencia en más de 25 industrias." },
    ],
  }),
  component: IndustriesPage,
});

const industries = [
  { title: "Aeroespacial y Defensa", description: "Descubre cómo ayudamos a nuestros clientes a expandir los límites en aire y espacio, y a proteger medios de vida a través de capacidades, tecnologías y talento." },
  { title: "Agricultura", description: "Descubre cómo aceleramos el crecimiento sostenible e inclusivo y generamos impacto transformacional para empresas y organizaciones de alimentos y agricultura impulsando eficiencias, crecimiento e innovación." },
  { title: "Automotriz y Ensamblaje", description: "Descubre cómo ayudamos a fabricantes automotrices, proveedores, distribuidores, OEMs de maquinaria y conglomerados industriales con sus desafíos digitales, estratégicos, organizacionales y operativos." },
  { title: "Químicos", description: "Descubre cómo ayudamos a empresas químicas a optimizar operaciones, mejorar el desempeño e identificar oportunidades de crecimiento." },
  { title: "Bienes de Consumo", description: "Descubre cómo ayudamos a clientes de bienes de consumo a utilizar insights del consumidor para incrementar sus ventas." },
  { title: "Educación", description: "Descubre cómo trabajamos con instituciones educativas para mejorar resultados estudiantiles, incrementar el acceso y la accesibilidad, y habilitar nueva investigación académica." },
  { title: "Energía Eléctrica y Gas Natural", description: "Descubre cómo ayudamos a clientes en la industria energética a replantear estrategias, construir capacidades y mejorar el desempeño para una ventaja competitiva sostenida." },
  { title: "Energía y Materiales", description: "Habilitamos organizaciones en los sectores de energía, materiales y recursos naturales para transformar sus operaciones y estrategia." },
  { title: "Ingeniería, Construcción y Materiales", description: "Descubre cómo ayudamos a líderes de la industria de la construcción a acelerar el crecimiento, habilitado por ideas transformadoras, ejecución efectiva y desarrollo profundo de capacidades." },
  { title: "Servicios Financieros", description: "Descubre cómo ayudamos al espectro completo de firmas de servicios financieros a mejorar su desempeño y transformación digital." },
  { title: "Salud", description: "Descubre cómo ayudamos a líderes de salud públicos y privados a hacer la atención médica mejor, más accesible y más asequible para millones de personas en todo el mundo." },
  { title: "Industriales y Electrónicos", description: "Descubre cómo ayudamos a nuestros clientes industriales y electrónicos a aprovechar nuevas tecnologías, buscar crecimiento y mejorar sus operaciones." },
  { title: "Infraestructura", description: "Descubre cómo ayudamos a clientes del sector público y privado a desarrollar, entregar y operar infraestructura a gran escala para un crecimiento extraordinario." },
  { title: "Ciencias de la Vida", description: "Descubre cómo trabajamos con innovadores en ciencias de la vida para ayudarlos a superar expectativas e innovar en todas las industrias de ciencias de la vida." },
  { title: "Logística", description: "Descubre cómo ayudamos a clientes en transporte marítimo, carga, ferrocarril, distribución, paquetería y más a impulsar la innovación, optimizar operaciones y aprovechar nuevas oportunidades." },
  { title: "Metales y Minería", description: "Descubre cómo ayudamos a empresas de metales y minería a acelerar el crecimiento aprovechando IA y analítica avanzada para dar forma a su estrategia e impulsar la innovación." },
  { title: "Petróleo y Gas", description: "Descubre cómo ayudamos a líderes de la industria a desarrollar estrategias para gestionar riesgos, mejorar el desempeño y construir capacidades duraderas." },
  { title: "Empaques y Papel", description: "Descubre cómo ayudamos a clientes a refinar estrategias y modelos de negocio para mejorar productos, operaciones y efectividad organizacional." },
  { title: "Capital Privado", description: "Descubre cómo ayudamos a organizaciones de inversión a abordar sus desafíos operativos y organizacionales más urgentes." },
  { title: "Sector Público", description: "Descubre cómo trabajamos con organizaciones del sector público y gobierno para mejorar la vida de los ciudadanos ayudando a resolver los desafíos económicos y sociales más apremiantes." },
  { title: "Bienes Raíces", description: "Descubre cómo ayudamos a clientes a cultivar mayores retornos económicos y sociales en el entorno construido, generando oportunidades de crecimiento sostenible e inclusivo." },
  { title: "Retail", description: "Descubre cómo ayudamos a clientes a incrementar la eficiencia e impulsar el crecimiento refinando la oferta comercial y desarrollando nuevas capacidades organizacionales y tecnológicas." },
  { title: "Semiconductores", description: "Descubre cómo trabajamos en toda la industria de semiconductores — desde fundiciones y fabless hasta IDMs y fabricantes de equipos — ayudándolos a innovar, transformarse y crecer." },
  { title: "Sector Social", description: "Descubre cómo ayudamos a instituciones líderes a identificar soluciones a grandes desafíos sociales y mejorar la salud, la vida y los medios de sustento de personas en todo el mundo." },
  { title: "Tecnología, Medios y Telecomunicaciones", description: "Descubre cómo ayudamos a líderes de tecnología, medios y telecomunicaciones a crear valor a largo plazo a través de construcción de capacidades, analítica digital y transformaciones organizacionales." },
  { title: "Viajes y Turismo", description: "Descubre cómo ayudamos a clientes de aerolíneas, aviación, hospitalidad, viajes y turismo a impulsar la innovación, optimizar operaciones y mejorar la experiencia del cliente." },
];

const featured = [
  {
    title: "Casos de Éxito",
    description: "Explora casos de estudio de clientes de TOOXS sobre cómo nos asociamos con empresas para definir estrategias audaces, integrar tecnología e IA, y crear crecimiento sostenible.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&h=320&fit=crop",
    link: "/case-studies",
  },
  {
    title: "Nuestro Ecosistema de Alianzas",
    description: "Para ayudar a nuestros clientes en un mundo que cambia rápidamente, innovamos continuamente y extendemos nuestras capacidades. Desde la nube e inteligencia artificial hasta sostenibilidad y más.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=320&fit=crop",
    link: "/services",
  },
  {
    title: "Soluciones",
    description: "Descubre el software propietario, datos y soluciones de talento que TOOXS combina con capacidades de consultoría para entregar insights más rápidos e impacto medible.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=320&fit=crop",
    link: "/services",
  },
];

function IndustriesPage() {
  return (
    <div>
      <PageHero
        title="Industrias"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
      />

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.title} delay={Math.min(i * 40, 300)}>
                <div className="group cursor-pointer rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-transparent hover:border-gray-100">
                  <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-1 group-hover:text-primary transition-colors">
                    {ind.title}
                    <ChevronRight size={16} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-8">DESTACADOS</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link to={item.link} className="group block">
                  <div className="rounded-xl overflow-hidden mb-4 aspect-[5/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-navy text-lg flex items-center gap-1 mb-2 group-hover:text-primary transition-colors">
                    {item.title} <ChevronRight size={16} />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Keep Exploring */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="text-3xl md:text-4xl text-white mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              Sigue explorando
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Link to="/" className="group flex items-center gap-3 text-white font-medium text-lg border-b border-white/30 pb-4 hover:border-white transition-colors">
                Historia de nuestra firma <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Link to="/services" className="group flex items-center gap-3 text-white font-medium text-lg border-b border-white/30 pb-4 hover:border-white transition-colors">
                Políticas de servicio al cliente <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
          >
            Conectemos
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:brightness-110 transition-all"
          >
            <Mail size={16} /> Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
