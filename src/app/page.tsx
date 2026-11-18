import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TechMarqueeSection from "@/components/home/TechMarqueeSection";
import AboutProductIdeaSection from "@/components/home/AboutProductIdeaSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import GlobalNetworkSection from "@/components/home/GlobalNetworkSection";
import ClientFeedbacksSection from "@/components/home/ClientFeedbacksSection";
import TeamCrewSection from "@/components/home/TeamCrewSection";
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

        {/* 5. Enterprise Velocity & Performance Matrix: Traditional vs QTech AI Engine */}
        <WhyChooseUsSection />

        {/* 6. Global Delivery Network: GitHub-Style Animated Connected Canvas */}
        <GlobalNetworkSection />

        {/* 7. Client Endorsements & Proof */}
        <ClientFeedbacksSection />

        {/* 8. Team Crew: Horizontal Drifting Avatars */}
        <TeamCrewSection />
      </main>

      {/* 9. Minimalist Enterprise Footer */}
      <Footer />
    </div>
  );
}
