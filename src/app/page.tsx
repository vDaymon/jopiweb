import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Impact } from "@/components/sections/Impact";
import { Services } from "@/components/sections/Services";
import { TrustSecurity } from "@/components/sections/TrustSecurity";
import { DownloadCta } from "@/components/sections/DownloadCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionReveal>
          <TrustStrip />
        </SectionReveal>
        <SectionReveal>
          <HowItWorks />
        </SectionReveal>
        <SectionReveal>
          <Impact />
        </SectionReveal>
        <SectionReveal>
          <Services />
        </SectionReveal>
        <SectionReveal>
          <TrustSecurity />
        </SectionReveal>
        <SectionReveal>
          <DownloadCta />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
