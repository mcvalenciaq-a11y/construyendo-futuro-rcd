import type { MetadataRoute } from "next";

const SITE_URL = "https://construyendofuturo-rcd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    { path: "/", priority: 1.0 },
    { path: "/servicios", priority: 0.9 },
    { path: "/productos", priority: 0.8 },
    { path: "/cobertura", priority: 0.7 },
    { path: "/normativa", priority: 0.7 },
    { path: "/nosotros", priority: 0.6 },
    { path: "/contacto", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
