import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  BrainCircuit,
  Globe,
  Smartphone,
  CloudLightning,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Code2
} from "lucide-react";
import { SERVICES_LIST, TECH_PRACTICES_CATEGORIES } from "@/data/company";
import ContactCTASection from "@/components/home/ContactCTASection";

export const metadata = {
  title: "Engineering Services & Practices | Qrious Tech Team LLP",
  description: "Explore our technology practices: AI/ML, Cloud-Native Web, Mobile Apps, Salesforce Consulting, Power BI, and Dedicated Development Pods."
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-6 h-6 text-orange-500" />,
    Globe: <Globe className="w-6 h-6 text-blue-600" />,
    Smartphone: <Smartphone className="w-6 h-6 text-emerald-600" />,
    CloudLightning: <CloudLightning className="w-6 h-6 text-sky-600" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-amber-500" />,
    Users: <Users className="w-6 h-6 text-purple-600" />
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#111827] flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Motive Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-[#ececec] bg-[#ffffff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Services & Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0c0407] tracking-tight max-w-4xl mx-auto">
              Modern Enterprise Services & <br />
              <span className="text-orange-500">Technology Practices</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#555555] max-w-3xl mx-auto leading-relaxed">
              From autonomous multi-agent AI ecosystems to high-concurrency cloud architectures and multi-cloud Salesforce integrations, we design and scale solutions engineered for real-world impact.
            </p>
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="bg-white border border-[#ececec] rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-all duration-300 relative scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center">
                      {iconMap[srv.iconName] || <Sparkles className="w-6 h-6 text-orange-500" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                        Practice 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c0407]">
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-[#0c0407] uppercase tracking-wider">
                      Key Capabilities & Architectural Scope
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start text-xs text-[#333333] bg-[#f8f8f8] border border-[#ececec] rounded-xl p-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold text-[#0c0407] uppercase tracking-wider">
                      Standard Engineering Deliverables
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {srv.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Tech Stack & CTA */}
                <div className="lg:col-span-5 bg-[#f8f8f8] border border-[#ececec] rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-[#0c0407] uppercase tracking-wider mb-3">
                      Core Tech Stack & Frameworks
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {srv.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white text-[#333333] border border-[#e5e5e5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#ececec] space-y-2 text-xs text-[#555555]">
                    <div className="font-bold text-[#0c0407] flex items-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5" />
                      Engagement Guarantees
                    </div>
                    <p>
                      Backed by our 20-year offshore track record, strict bilateral NDAs, 100% client code ownership, and flexible trial sprints.
                    </p>
                  </div>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(srv.title)}`}
                    className="group w-full inline-flex items-center justify-between pl-6 pr-2 py-2 text-xs font-bold text-white bg-[#0c0407] hover:bg-orange-500 rounded-full transition-all duration-300"
                  >
                    <span>Discuss {srv.title} Project</span>
                    <div className="w-8 h-8 rounded-full bg-white text-[#0c0407] flex items-center justify-center ml-2 group-hover:rotate-45 group-hover:text-orange-500 transition-transform">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Master Tech Stack Matrix */}
        <section className="py-16 bg-[#ffffff] border-y border-[#ececec]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c0407] tracking-tight">
                Complete Technology Practice Matrix
              </h2>
              <p className="mt-3 text-sm text-[#555555]">
                Our 60+ full-time engineers are certified across multi-cloud and modern language ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_PRACTICES_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f8f8] border border-[#ececec] rounded-2xl p-6 space-y-3"
                >
                  <h3 className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#333333] border border-[#e5e5e5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
