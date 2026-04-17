import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MeetingProvider } from "../components/MeetingDialog";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-mint px-6 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tooxs — Inteligencia Aplicada para Organizaciones" },
      { name: "description", content: "Tooxs diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tooxs" },
      { property: "og:locale", content: "es_CL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@toaborada" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Tooxs" },
      { name: "theme-color", content: "#0A2647" },
      { property: "og:title", content: "Tooxs — Inteligencia Aplicada para Organizaciones" },
      { name: "twitter:title", content: "Tooxs — Inteligencia Aplicada para Organizaciones" },
      { property: "og:description", content: "Tooxs diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa." },
      { name: "twitter:description", content: "Tooxs diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51bbc6a5-8645-4ae1-91ef-a87096f3567e/id-preview-e54ed6b9--f2b0cd74-d6eb-43c0-b984-e6424c9ab13f.lovable.app-1776441484363.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51bbc6a5-8645-4ae1-91ef-a87096f3567e/id-preview-e54ed6b9--f2b0cd74-d6eb-43c0-b984-e6424c9ab13f.lovable.app-1776441484363.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap" },
      { rel: "canonical", href: "https://www.tooxs.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Tooxs",
          "url": "https://www.tooxs.com",
          "logo": "https://www.tooxs.com/tooxs-logo.png",
          "description": "Tooxs diseña e implementa inteligencia aplicada para transformar procesos complejos en decisiones, eficiencia y ventaja operativa.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressCountry": "CL"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+56 2 2345 6789",
            "contactType": "sales",
            "email": "contacto@tooxs.com"
          },
          "sameAs": [
            "https://www.linkedin.com/company/tooxs"
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Tooxs",
          "url": "https://www.tooxs.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.tooxs.com/newsletter?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <MeetingProvider>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </MeetingProvider>
  );
}
