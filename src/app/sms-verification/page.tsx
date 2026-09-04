import type { Metadata } from "next";

import { SmsPolicyPage } from "@/components/SmsPolicyPage";
import { COPY } from "@/lib/sms-policy";

export const metadata: Metadata = {
  title: COPY.en.metaTitle,
  description: COPY.en.metaDescription,
  alternates: {
    canonical: "/sms-verification",
    languages: {
      es: "/verificacion-sms",
      en: "/sms-verification",
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "/sms-verification",
    siteName: "Jopi",
    title: COPY.en.metaTitle,
    description: COPY.en.metaDescription,
  },
};

export default function SmsVerification() {
  return <SmsPolicyPage lang="en" />;
}
