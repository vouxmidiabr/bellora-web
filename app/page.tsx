import { LanguageProvider } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Features } from "@/components/Features";
import { Platform } from "@/components/Platform";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <LanguageProvider>
      <ScrollReveal />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Platform />
        <HowItWorks />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
