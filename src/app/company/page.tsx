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
  ArrowRight,
  CheckCircle2,
  Users2,
  Building2,
  Calendar,
  HeartHandshake,
  Award
} from "lucide-react";
import {
  CEO_MESSAGE,
  COMPANY_STATS,
  COMPANY_INFO,
  CORE_VALUES,
  METHODOLOGY_STEPS,
  IN_HOUSE_PRODUCTS,
  FAQS_LIST
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
    Target: <Target className="w-5 h-5 text-orange-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
    Lock: <Lock className="w-5 h-5 text-emerald-400" />
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Company Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Two Decades of Excellence • Est. 2004
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Empowering Innovation <br />
              <span className="gradient-text-orange">Through Technology</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Qrious Tech is not merely an offshore vendor; it is a close-knit engineering family dedicated to translating bold visions into high-performing, secure software realities across India, the USA, and globally.
            </p>
          </div>
        </section>

        {/* CEO Message Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-[#0c1221] to-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-14 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 text-xs font-semibold text-orange-400 border border-orange-500/20">
                  <Quote className="w-3.5 h-3.5" />
                  <span>Executive Address</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Message from the CEO
                </h2>

                <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-2 border-orange-500/80 pl-4 py-1">
                  &ldquo;{CEO_MESSAGE.quote}&rdquo;
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {CEO_MESSAGE.details}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-800">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/25">
                    RT
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{CEO_MESSAGE.name}</div>
                    <div className="text-xs text-orange-400 font-medium">
                      {CEO_MESSAGE.role} • {CEO_MESSAGE.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Facts Card */}
              <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-base font-bold text-white flex items-center">
                  <Building2 className="w-4 h-4 text-orange-400 mr-2" />
                  Company Snapshot
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="pb-3 border-b border-slate-800">
                    <span className="text-slate-400 block">Headquarters:</span>
                    <strong className="text-slate-200 block mt-0.5">
                      Dev Aurum, Prahladnagar, Ahmedabad, Gujarat, India
                    </strong>
                  </div>

                  <div className="pb-3 border-b border-slate-800">
                    <span className="text-slate-400 block">Engineering Team:</span>
                    <strong className="text-slate-200 block mt-0.5">
                      60+ Full-Time Developers & Architects
                    </strong>
                  </div>

                  <div className="pb-3 border-b border-slate-800">
                    <span className="text-slate-400 block">Global Footprint:</span>
                    <strong className="text-slate-200 block mt-0.5">
                      India (Development HQ) & USA (Client Operations)
                    </strong>
                  </div>

                  <div>
                    <span className="text-slate-400 block">Key Partnerships:</span>
                    <strong className="text-slate-200 block mt-0.5">
                      Nested OEM Alliances, White-Label Pods, Enterprise Co-Development
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-[#050811] border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Our Core Engineering Values
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                The cultural foundation that has sustained our client relationships for over 20 years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center">
                    {iconMap[val.icon] || <Sparkles className="w-5 h-5 text-orange-400" />}
                  </div>
                  <h4 className="text-base font-bold text-white mt-4">{val.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
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
