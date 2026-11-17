import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ExecutiveOverview from "@/components/home/ExecutiveOverview";
import ServicesSection from "@/components/home/ServicesSection";
import CaseStudiesSpotlight from "@/components/home/CaseStudiesSpotlight";
import PortfolioSpotlight from "@/components/home/PortfolioSpotlight";
import MethodologySection from "@/components/home/MethodologySection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ProductsSection from "@/components/home/ProductsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTASection from "@/components/home/ContactCTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111827] flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ExecutiveOverview />
        <ServicesSection />
        <CaseStudiesSpotlight />
        <PortfolioSpotlight />
        <MethodologySection />
        <IndustriesSection />
        <TestimonialsSection />
        <ProductsSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
}
