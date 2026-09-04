import type { Metadata } from "next";

import { SmsPolicyPage } from "@/components/SmsPolicyPage";
import { COPY } from "@/lib/sms-policy";

export const metadata: Metadata = {
  title: COPY.es.metaTitle,
  description: COPY.es.metaDescription,
  alternates: {
    canonical: "/verificacion-sms",
    languages: {
      es: "/verificacion-sms",
      en: "/sms-verification",
    },
  },
  openGraph: {
    type: "article",
    locale: "es_CO",
    url: "/verificacion-sms",
    siteName: "Jopi",
    title: COPY.es.metaTitle,
    description: COPY.es.metaDescription,
    images: [
      {
        url: "/logo/jopi-logo.png",
        width: 1254,
        height: 1254,
        alt: "Jopi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COPY.es.metaTitle,
    description: COPY.es.metaDescription,
    images: ["/logo/jopi-logo.png"],
  },
};

export default function VerificacionSms() {
  return <SmsPolicyPage lang="es" />;
}
