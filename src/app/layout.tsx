import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = "Jopi, servicios a domicilio en Colombia";
const DESCRIPTION =
  "Publica lo que necesitas, recibe ofertas de aliados cerca de ti y elige con quién trabajar. Plomería, electricidad, cerrajería, pintura y más, sin salir de casa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Jopi",
  keywords: [
    "servicios a domicilio",
    "servicios a domicilio Colombia",
    "plomero a domicilio",
    "electricista a domicilio",
    "cerrajero a domicilio",
    "pintura",
    "lavado de muebles",
    "reparación de electrodomésticos",
    "app de servicios",
    "Jopi",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    siteName: "Jopi",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/logo/jopi-logo.png",
        width: 1254,
        height: 1254,
        alt: "Jopi, servicios a domicilio en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo/jopi-logo.png"],
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-jopi-paper text-jopi-ink dark:bg-[#120a1f] dark:text-[#f4f1fa]">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
