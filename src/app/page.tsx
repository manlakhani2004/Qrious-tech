import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CaseStudiesSpotlight from "@/components/home/CaseStudiesSpotlight";
import ServicesSection from "@/components/home/ServicesSection";
import ExecutiveOverview from "@/components/home/ExecutiveOverview";
import MethodologySection from "@/components/home/MethodologySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTASection from "@/components/home/ContactCTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111827] flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Motive Hero */}
        <HeroSection />

        {/* Motive Latest Works */}
        <CaseStudiesSpotlight />

        {/* Motive What We Do */}
        <ServicesSection />

        {/* Motive Why Choose Us & CEO Message */}
        <ExecutiveOverview />

        {/* Motive 5 Simple Steps */}
        <MethodologySection />

        {/* Motive Industry Verticals */}
        <IndustriesSection />

        {/* Motive Client Testimonials */}
        <TestimonialsSection />

        {/* Motive Latest News & Insights */}
        <ArticlesSection />

        {/* Motive FAQ 2-Column Sticky */}
        <FAQSection />

        {/* Motive Let's Connect & Appointment Booking */}
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}
