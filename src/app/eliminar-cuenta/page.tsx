import type { Metadata } from "next";

import { AccountDeletionPage } from "@/components/AccountDeletionPage";
import { META_DESCRIPTION, META_TITLE } from "@/lib/account-deletion";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: {
    canonical: "/eliminar-cuenta",
  },
  openGraph: {
    type: "article",
    locale: "es_CO",
    url: "/eliminar-cuenta",
    siteName: "Jopi",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/logo/jopi-logo.png"],
  },
};

export default function EliminarCuenta() {
  return <AccountDeletionPage />;
}
