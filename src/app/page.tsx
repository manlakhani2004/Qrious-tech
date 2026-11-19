import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TechMarqueeSection from "@/components/home/TechMarqueeSection";
import ScrollTextRevealSection from "@/components/home/ScrollTextRevealSection";
import AboutProductIdeaSection from "@/components/home/AboutProductIdeaSection";
import JimoInteractiveScrollStudio from "@/components/home/JimoInteractiveScrollStudio";
import AnimosProductionShowcaseSection from "@/components/home/AnimosProductionShowcaseSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import BusinessAIIntegrationRoadmapSection from "@/components/home/BusinessAIIntegrationRoadmapSection";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";
import OpeningLoader from "@/components/ui/OpeningLoader";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200 relative isolate">
      {/* 0. Luxury Dual-Curtain Opening Loader & Typewriter (aicommon.creamu.co.jp style) */}
      <OpeningLoader />

      {/* 1. Floating Frosted Island Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section: AI Positioning + Console + Peeking Mascot */}
        <HeroSection />

        {/* 3. Tech Stack Marquee */}
        <TechMarqueeSection />

        {/* 4. Animos-Style Scroll-Driven Manifesto Reveal */}
        <ScrollTextRevealSection />

        {/* 5. Core Enterprise AI Capabilities: Open 3-Pillar Architecture */}
        <AboutProductIdeaSection />

        {/* 6. Jimo-Style Sticky 3D Interactive Scroll Studio (One Engine • Three Modes) */}
        <JimoInteractiveScrollStudio />

        {/* 7. Animos-Style Production Showcase Stream */}
        <AnimosProductionShowcaseSection />

        {/* 7. Enterprise Velocity & Performance Matrix: Traditional vs QTech AI Engine */}
        <WhyChooseUsSection />

        {/* 8. How We Bring AI Into Your Business: 3-Step Adoption Roadmap */}
        <BusinessAIIntegrationRoadmapSection />

        {/* 9. Global Delivery Network: Ambient Connected Background Arcs & Stats */}
        <GlobalNetworkSection />
      </main>

      {/* 10. Minimalist Enterprise Footer */}
      <Footer />
    </div>
  );
}
