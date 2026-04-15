import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { ScrollReveal } from "../hooks/use-scroll-reveal";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes — TOOXS | IA y Automatización" },
      { name: "description", content: "Respuestas a las preguntas más frecuentes sobre los servicios de consultoría en IA, automatización y transformación digital de TOOXS." },
      { property: "og:title", content: "Preguntas Frecuentes — TOOXS" },
      { property: "og:description", content: "Resuelve tus dudas sobre nuestros servicios de IA y automatización." },
      { property: "og:url", content: "https://www.tooxs.com/faqs" },
      { name: "twitter:title", content: "FAQ — TOOXS" },
      { name: "twitter:description", content: "Preguntas frecuentes sobre IA, automatización y consultoría tecnológica." },
      { name: "keywords", content: "preguntas frecuentes, FAQ, consultoría IA, automatización, TOOXS" },
    ],
    links: [
      { rel: "canonical", href: "https://www.tooxs.com/faqs" },
    ],
  }),
  component: FAQsPage,
});

const faqs = [
  { q: "What industries does Stratwell Consulting serve?", a: "We serve a wide range of industries including technology, healthcare, manufacturing, retail, financial services, and more. Our methodology is adaptable to any industry, and our team brings deep expertise across multiple sectors." },
  { q: "How long does a typical consulting engagement last?", a: "Engagement duration varies based on scope and complexity. Strategy projects typically run 8-12 weeks, while comprehensive transformation programs can span 6-18 months. We tailor every engagement to your specific needs." },
  { q: "What makes Stratwell different from other consulting firms?", a: "We combine the strategic depth of large firms with the personalized attention of a boutique practice. Our 92% client retention rate speaks to our commitment to building lasting partnerships and delivering measurable results." },
  { q: "How do you measure the success of your engagements?", a: "We establish clear KPIs at the outset of every engagement and track progress continuously. Our Measure phase ensures that strategies translate into tangible business outcomes that can be quantified." },
  { q: "Do you work with startups or only established businesses?", a: "We work with businesses at all stages — from early-stage startups seeking growth strategies to established enterprises looking to optimize operations or undergo digital transformation." },
  { q: "What is your pricing structure?", a: "Our pricing is tailored to each engagement based on scope, duration, and complexity. We offer project-based fees, retainer arrangements, and performance-based models. Contact us for a customized proposal." },
  { q: "Can you work with our existing internal teams?", a: "Absolutely. We believe in collaborative engagement and often work as an extension of your team. Knowledge transfer and capability building are integral to our approach." },
  { q: "Do you offer virtual or remote consulting services?", a: "Yes, we offer flexible engagement models including fully remote, hybrid, and on-site consulting. Our digital collaboration tools ensure seamless communication regardless of location." },
  { q: "What is the first step in working with Stratwell?", a: "The first step is a complimentary consultation where we learn about your business, discuss your challenges and goals, and explore how we can help. Book a consultation through our contact page to get started." },
  { q: "Do you provide ongoing support after an engagement ends?", a: "Yes, we offer ongoing advisory retainers and check-in programs to ensure strategies continue to deliver results. Many of our clients maintain long-term relationships with us." },
];

function FAQsPage() {
  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about working with Stratwell Consulting."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80"
      />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <AccordionItem value={`faq-${i}`} className="border rounded-xl px-6 bg-card">
                  <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline" style={{ fontFamily: 'var(--font-heading)' }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        subtitle="Our team is ready to help. Reach out and let's start a conversation."
        buttonText="Contact Us"
      />
    </div>
  );
}
