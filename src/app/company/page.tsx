import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Quote,
  Target,
  ShieldCheck,
  Sparkles,
  Lock,
  Building2,
  Users2,
  ArrowUpRight
} from "lucide-react";
import {
  CEO_MESSAGE,
  COMPANY_INFO,
  CORE_VALUES
} from "@/data/company";
import FAQSection from "@/components/home/FAQSection";
import ProductsSection from "@/components/home/ProductsSection";
import MethodologySection from "@/components/home/MethodologySection";

export const metadata = {
  title: "About Us & Leadership | Qrious Tech Team LLP",
  description: "Learn about Qrious Tech Team LLP: over two decades of offshore IT delivery, our CEO's vision, working methodology, proprietary products, and values."
};

export default function CompanyPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-5 h-5 text-orange-500" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
    Lock: <Lock className="w-5 h-5 text-emerald-600" />
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111827] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Motive Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#ececec] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>About Qrious Tech</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0c0407] tracking-tight max-w-4xl mx-auto">
              Empowering Innovation <br />
              <span className="text-orange-500">Through Technology</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#555555] max-w-3xl mx-auto leading-relaxed">
              Qrious Tech is not merely an offshore vendor; it is a close-knit engineering family dedicated to translating bold visions into high-performing, secure software realities across India, the USA, and globally.
            </p>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#ececec] rounded-3xl p-8 lg:p-14 shadow-sm relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-orange-600">
                  <Quote className="w-3.5 h-3.5" />
                  <span>Executive Address</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c0407]">
                  Message from the CEO
                </h2>

                <blockquote className="text-base sm:text-xl text-[#222222] leading-relaxed italic border-l-3 border-orange-500 pl-4 py-1 font-medium">
                  &ldquo;{CEO_MESSAGE.quote}&rdquo;
                </blockquote>

                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  {CEO_MESSAGE.details}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-[#f0f0f0]">
                  <div className="w-12 h-12 rounded-full bg-[#0c0407] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                    RT
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#0c0407]">{CEO_MESSAGE.name}</div>
                    <div className="text-xs text-orange-600 font-semibold">
                      {CEO_MESSAGE.role} • {CEO_MESSAGE.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Facts Card */}
              <div className="lg:col-span-4 bg-[#f8f8f8] border border-[#ececec] rounded-2xl p-6 space-y-6">
                <h3 className="text-sm font-bold text-[#0c0407] flex items-center uppercase tracking-wider">
                  <Building2 className="w-4 h-4 text-orange-500 mr-2" />
                  Company Snapshot
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="pb-3 border-b border-[#e5e5e5]">
                    <span className="text-[#777777] block font-medium">Corporate Headquarters:</span>
                    <strong className="text-[#0c0407] block mt-0.5">
                      Dev Aurum, Prahladnagar, Ahmedabad, Gujarat, India
                    </strong>
                  </div>

                  <div className="pb-3 border-b border-[#e5e5e5]">
                    <span className="text-[#777777] block font-medium">Engineering Force:</span>
                    <strong className="text-[#0c0407] block mt-0.5">
                      60+ Full-Time Developers & Architects
                    </strong>
                  </div>

                  <div className="pb-3 border-b border-[#e5e5e5]">
                    <span className="text-[#777777] block font-medium">Global Footprint:</span>
                    <strong className="text-[#0c0407] block mt-0.5">
                      India (Development HQ) & USA (Client Operations)
                    </strong>
                  </div>

                  <div>
                    <span className="text-[#777777] block font-medium">Key Partnerships:</span>
                    <strong className="text-[#0c0407] block mt-0.5">
                      Nested OEM Alliances, White-Label Pods, Enterprise Co-Development
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white border-y border-[#ececec]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c0407] tracking-tight">
                Our Core Engineering Values
              </h2>
              <p className="mt-3 text-sm text-[#555555]">
                The cultural foundation that has sustained our client relationships for over 20 years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f8f8] border border-[#ececec] rounded-2xl p-6 hover:shadow-md hover:border-[#d1d5db] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e5e5e5] flex items-center justify-center">
                    {iconMap[val.icon] || <Sparkles className="w-5 h-5 text-orange-500" />}
                  </div>
                  <h4 className="text-base font-bold text-[#0c0407] mt-4">{val.title}</h4>
                  <p className="text-xs text-[#555555] mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <div id="methodology">
          <MethodologySection />
        </div>

        {/* Proprietary In-House Products */}
        <div id="products">
          <ProductsSection />
        </div>

        {/* FAQs */}
        <div id="faqs">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
