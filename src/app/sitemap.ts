import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/verificacion-sms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: {
          es: `${SITE_URL}/verificacion-sms`,
          en: `${SITE_URL}/sms-verification`,
        },
      },
    },
    {
      url: `${SITE_URL}/sms-verification`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: {
        languages: {
          es: `${SITE_URL}/verificacion-sms`,
          en: `${SITE_URL}/sms-verification`,
        },
      },
    },
  ];
}
