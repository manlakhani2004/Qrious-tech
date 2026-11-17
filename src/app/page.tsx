import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import ClientFeedbacksSection from "@/components/home/ClientFeedbacksSection";
import InlineAvatarBanner from "@/components/home/InlineAvatarBanner";
import ServicesSection from "@/components/home/ServicesSection";
import MethodologySection from "@/components/home/MethodologySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CaseStudiesSpotlight from "@/components/home/CaseStudiesSpotlight";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0c0407] flex flex-col">
      {/* Motive Navbar (Screenshot 1) */}
      <Navbar />

      <main className="flex-grow">
        {/* Motive Hero with Overlapping Avatars & Glowing Blur (Screenshot 1 & 2) */}
        <HeroSection />

        {/* Motive Social Proof Logos (Screenshot 3) */}
        <SocialProofSection />

        {/* Motive Client Feedbacks with Top Images (Screenshot 3 & 4) */}
        <ClientFeedbacksSection />

        {/* Motive Inline-Avatar Statement (Screenshot 4) */}
        <InlineAvatarBanner />

        {/* Motive Asymmetric 5 Services Grid (Screenshot 5) */}
        <ServicesSection />

        {/* Motive 4 Simple Steps with Portrait Photo (Screenshot 6) */}
        <MethodologySection />

        {/* Motive Testimonials Behind Success (Screenshot 7) */}
        <TestimonialsSection />

        {/* Real Qtech Projects Spotlight (Motive Latest Works) */}
        <CaseStudiesSpotlight />

        {/* Motive Sticky FAQ */}
        <FAQSection />
      </main>

      {/* Motive Footer (Screenshot 8) */}
      <Footer />
    </div>
  );
}
