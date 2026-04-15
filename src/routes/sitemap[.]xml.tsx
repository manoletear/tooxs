import { createFileRoute } from "@tanstack/react-router";

const SITE = "https://www.tooxs.com";

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/newsletter", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/case-studies", priority: "0.7", changefreq: "monthly" },
  { path: "/faqs", priority: "0.5", changefreq: "monthly" },
  // Services
  { path: "/services/ia-aplicada", priority: "0.8", changefreq: "monthly" },
  { path: "/services/automatizacion-procesos", priority: "0.8", changefreq: "monthly" },
  { path: "/services/data-analytics", priority: "0.8", changefreq: "monthly" },
  { path: "/services/automatizacion-documental", priority: "0.8", changefreq: "monthly" },
  { path: "/services/optimizacion-operacional", priority: "0.8", changefreq: "monthly" },
  // Industries
  { path: "/industrias/mineria-utilities", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/retail-logistica", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/banca-finanzas", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/agroindustria", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/telecomunicaciones", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/salud", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/automotriz", priority: "0.7", changefreq: "monthly" },
  { path: "/industrias/real-estate", priority: "0.7", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const urls = staticRoutes
          .map(
            (r) =>
              `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
          )
          .join("\n");

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(sitemap, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
