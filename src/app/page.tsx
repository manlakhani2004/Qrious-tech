import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TechMarqueeSection from "@/components/home/TechMarqueeSection";
import AboutProductIdeaSection from "@/components/home/AboutProductIdeaSection";
import ServicesSection from "@/components/home/ServicesSection";
import VideoCultureSection from "@/components/home/VideoCultureSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import MethodologySection from "@/components/home/MethodologySection";
import ClientFeedbacksSection from "@/components/home/ClientFeedbacksSection";
import InlineAvatarBanner from "@/components/home/InlineAvatarBanner";
import TeamCrewSection from "@/components/home/TeamCrewSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      {/* 1. Motive Navbar with Authentic Qtech Navigation & Official Logo */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section: AI Innovation & IT Solutions + Scroll Image Expansion + 4 Fun Facts */}
        <HeroSection  />

        {/* 3. Horizontal Auto-Scrolling Technologies of Company (Technologies @ Qtech) */}
        <TechMarqueeSection />

        {/* 4. Have a Product Idea? Let us be your next Preferred IT Partner (index.html lines 216-302) */}
        <AboutProductIdeaSection />

        {/* 5. What We Do ? Solutions and Focus Areas (5 Authentic Focus Areas from index.html lines 350-575) */}
        <ServicesSection />

        {/* 6. Video & Goal Statement: "Qrious Tech Team LLP will get you on the move towards your goals" */}
        <VideoCultureSection />

        {/* 7. Why Choose Qrious Tech Team LLP (Easier To Implement, Growth Rates, Branding of Future + Appointment) */}
        <WhyChooseUsSection />

        {/* 9. Working Methodology: From Strategy to Success in 4 Steps (working-methodology.html) */}
        <MethodologySection />

        {/* 10. Authentic Client Testimonials (Stuart Rox, Lorel Parker, Shota Oda, Shin Paul) */}
        <ClientFeedbacksSection />

        {/* 11. Statement with Real Inline Staff Avatars */}
        <InlineAvatarBanner />

        {/* 12. Teamwork is the only way we work (Authentic Staff Gallery & Join The Crew) */}
        <TeamCrewSection />

        {/* 13. Frequently Asked Questions (from faqs.html) */}
        <FAQSection />
      </main>

      {/* 14. Footer with Official Logo & Ahmedabad Headquarters */}
      <Footer />
    </div>
  );
}
