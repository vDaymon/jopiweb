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
  },
};

export default function VerificacionSms() {
  return <SmsPolicyPage lang="es" />;
}
