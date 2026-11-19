import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TechMarqueeSection from "@/components/home/TechMarqueeSection";
import AboutProductIdeaSection from "@/components/home/AboutProductIdeaSection";
import BusinessAITransformationsSection from "@/components/home/BusinessAITransformationsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import BusinessAIIntegrationRoadmapSection from "@/components/home/BusinessAIIntegrationRoadmapSection";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";
import GlobalBackgroundGrid from "@/components/home/GlobalBackgroundGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200 relative isolate">
      {/* Continuous Engineering Grid & Cursor Spotlight across full homepage */}
      <GlobalBackgroundGrid />

      {/* 1. Floating Frosted Island Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section: AI Positioning + Scroll Image Expansion + Proof Strip */}
        <HeroSection />

        {/* 3. Tech Stack Marquee */}
        <TechMarqueeSection />

        {/* 4. Core Enterprise AI Capabilities: 4-Tile Interactive Bento Grid */}
        <AboutProductIdeaSection />

        {/* 5. Where AI Transforms Your Business: Interactive Department & Operations Explorer */}
        <BusinessAITransformationsSection />

        {/* 6. Enterprise Velocity & Performance Matrix: Traditional vs QTech AI Engine */}
        <WhyChooseUsSection />

        {/* 7. How We Bring AI Into Your Business: 3-Step Adoption Roadmap */}
        <BusinessAIIntegrationRoadmapSection />

        {/* 8. Global Delivery Network: Ambient Connected Background Arcs & Stats */}
        <GlobalNetworkSection />
      </main>

      {/* 9. Minimalist Enterprise Footer */}
      <Footer />
    </div>
  );
}
