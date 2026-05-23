import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ARTICLES } from "@/data/articles";

const BASE_URL = "https://tooxs.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.9" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/activar-ia", changefreq: "monthly", priority: "0.9" },
          { path: "/talleres", changefreq: "monthly", priority: "0.8" },
          { path: "/industrias", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
          { path: "/newsletter", changefreq: "weekly", priority: "0.8" },
          { path: "/faqs", changefreq: "monthly", priority: "0.5" },
          { path: "/services/ia-aplicada", changefreq: "monthly", priority: "0.7" },
          { path: "/services/automatizacion-procesos", changefreq: "monthly", priority: "0.7" },
          { path: "/services/data-analytics", changefreq: "monthly", priority: "0.7" },
          { path: "/services/automatizacion-documental", changefreq: "monthly", priority: "0.7" },
          { path: "/services/optimizacion-operacional", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/mineria-utilities", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/retail-logistica", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/banca-finanzas", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/agroindustria", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/telecomunicaciones", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/salud", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/automotriz", changefreq: "monthly", priority: "0.7" },
          { path: "/industrias/real-estate", changefreq: "monthly", priority: "0.7" },
        ];

        const articleEntries: SitemapEntry[] = (ARTICLES ?? []).map((a: { slug: string }) => ({
          path: `/newsletter/${a.slug}`,
          changefreq: "monthly",
          priority: "0.6",
        }));

        const entries = [...staticEntries, ...articleEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});