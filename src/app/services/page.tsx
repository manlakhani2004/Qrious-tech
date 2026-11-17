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
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  Code2
} from "lucide-react";
import { SERVICES_LIST, TECH_PRACTICES_CATEGORIES } from "@/data/company";
import ContactCTASection from "@/components/home/ContactCTASection";

export const metadata = {
  title: "Engineering Services & Technology Practices | Qrious Tech Team LLP",
  description: "Explore our full spectrum of software services: AI/ML, Cloud-Native Web, Mobile Apps, Salesforce Consulting, Power BI, and Dedicated Development Pods."
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-8 h-8 text-orange-400" />,
    Globe: <Globe className="w-8 h-8 text-blue-400" />,
    Smartphone: <Smartphone className="w-8 h-8 text-emerald-400" />,
    CloudLightning: <CloudLightning className="w-8 h-8 text-sky-400" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-amber-400" />,
    Users: <Users className="w-8 h-8 text-purple-400" />
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-grow pt-12 pb-24">
        {/* Services Page Hero */}
        <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-800/80">
          <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Comprehensive Technology Offerings
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto">
              Modern Enterprise Services & <br />
              <span className="gradient-text-orange">Technology Practices</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              From autonomous multi-agent AI ecosystems to high-concurrency cloud architectures and multi-cloud Salesforce integrations, we design and scale solutions engineered for real-world impact.
            </p>
          </div>
        </section>

        {/* Detailed Service Cards */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_LIST.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.id}
              className="bg-gradient-to-br from-slate-900/90 via-[#0a0f1e] to-slate-900/90 border border-slate-800 rounded-3xl p-8 lg:p-12 shadow-2xl relative scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center shadow-lg">
                      {iconMap[srv.iconName] || <Sparkles className="w-8 h-8 text-orange-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                        Practice 0{idx + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {srv.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Key Capabilities & Architectural Scope
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start text-xs text-slate-200 bg-slate-900/60 border border-slate-800 rounded-xl p-3"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Standard Engineering Deliverables
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {srv.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-xs font-medium px-3 py-1 rounded-lg bg-orange-500/10 text-orange-300 border border-orange-500/20"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Tech Stack & CTA */}
                <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center mb-3">
                      <Code2 className="w-4 h-4 text-cyan-400 mr-2" />
                      Core Tech Stack & Frameworks
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {srv.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2 text-xs text-slate-300">
                    <div className="font-semibold text-white flex items-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
                      Engagement Guarantees
                    </div>
                    <p>
                      Backed by our 20-year offshore track record, strict bilateral NDAs, 100% client code ownership, and flexible 2-week trial sprints.
                    </p>
                  </div>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(srv.title)}`}
                    className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                  >
                    <span>Discuss {srv.title} Project</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Master Tech Stack Matrix */}
        <section className="py-16 bg-[#050811] border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Complete Technology Practice Matrix
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Our 60+ full-time engineers are certified across multi-cloud and modern language ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TECH_PRACTICES_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 space-y-3"
                >
                  <h3 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.techs.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
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

        {/* Contact Form CTA */}
        <ContactCTASection />
      </main>

      <Footer />
    </div>
  );
}
