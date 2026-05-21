import { LanguageProvider } from "@/context/LanguageContext";
import { DemoModalProvider } from "@/context/DemoModalContext";
import { DemoModal } from "@/components/DemoModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Platform } from "@/components/Platform";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <LanguageProvider>
      <DemoModalProvider>
        <DemoModal />
        <ScrollReveal />
        <Nav />
        <main>
          <Hero />
          <Features />
          <Platform />
          <HowItWorks />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </DemoModalProvider>
    </LanguageProvider>
  );
}
