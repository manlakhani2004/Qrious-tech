import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ScrollTextRevealSection from "@/components/home/ScrollTextRevealSection";
import AboutProductIdeaSection from "@/components/home/AboutProductIdeaSection";
import JimoInteractiveScrollStudio from "@/components/home/JimoInteractiveScrollStudio";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import BusinessAIIntegrationRoadmapSection from "@/components/home/BusinessAIIntegrationRoadmapSection";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";
import OpeningLoader from "@/components/ui/OpeningLoader";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#060608] text-[#09090b] dark:text-[#f8f9fa] flex flex-col transition-colors duration-200 relative isolate">
      {/* 0. Luxury Dual-Curtain Opening Loader & Typewriter (aicommon.creamu.co.jp style) */}
      <OpeningLoader />

      {/* 1. Floating Frosted Island Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section: AI Positioning + Console + Peeking Mascot */}
        <HeroSection />

        {/* 2. Animos-Style Scroll-Driven Manifesto Reveal */}
        <ScrollTextRevealSection />

        {/* 3. Core Enterprise AI Capabilities: Serko Disruption Studio */}
        <AboutProductIdeaSection />

        {/* 4. Jimo-Style Sticky 3D Interactive Scroll Studio (One Engine • Three Modes) */}
        <JimoInteractiveScrollStudio />

        {/* 5. Enterprise Velocity & Performance Matrix: Traditional vs QTech AI Engine */}
        <WhyChooseUsSection />

        {/* 6. How We Bring AI Into Your Business: 3-Step Adoption Roadmap */}
        <BusinessAIIntegrationRoadmapSection />

        {/* 7. Global Delivery Network: Ambient Connected Background Arcs & Stats */}
        <GlobalNetworkSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
