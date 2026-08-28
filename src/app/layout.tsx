import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jopi, servicios a domicilio en Colombia",
  description:
    "Publica lo que necesitas, recibe ofertas de aliados cerca de ti y elige con quién trabajar. Plomería, electricidad, cerrajería, pintura y más, sin salir de casa.",
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
