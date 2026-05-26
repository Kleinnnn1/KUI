import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://kui-v1.vercel.app", priority: 1 },
    { url: "https://kui-v1.vercel.app/docs/button", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/badge", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/card", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/input", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/modal", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/toast", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/avatar", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/dropdown", priority: 0.8 },
    { url: "https://kui-v1.vercel.app/docs/tabs", priority: 0.8 },
  ];
}
