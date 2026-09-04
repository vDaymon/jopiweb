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
    title: COPY.en.metaTitle,
    description: COPY.en.metaDescription,
    images: ["/logo/jopi-logo.png"],
  },
};

export default function SmsVerification() {
  return <SmsPolicyPage lang="en" />;
}
