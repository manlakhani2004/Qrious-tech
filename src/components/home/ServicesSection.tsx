"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Globe,
  Smartphone,
  CloudLightning,
  BarChart3,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { SERVICES_LIST } from "@/data/company";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES_LIST[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    BrainCircuit: <BrainCircuit className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    CloudLightning: <CloudLightning className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />
  };

  const selectedService = SERVICES_LIST.find((s) => s.id === activeTab) || SERVICES_LIST[0];

  return (
    <section className="py-20 lg:py-28 bg-[#070b14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Core Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Engineering <br />
              <span className="gradient-text-orange">Practices & Solutions</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
            >
              <span>Explore All Engineering Stacks</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Interactive Tabbed Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Column */}
          <div className="lg:col-span-4 space-y-2">
            {SERVICES_LIST.map((srv) => {
              const isSelected = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center space-x-4 ${
                    isSelected
                      ? "bg-slate-800/90 border-orange-500/50 shadow-lg shadow-orange-500/10"
                      : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/50 hover:border-slate-700"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {iconMap[srv.iconName] || <Sparkles className="w-5 h-5" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className={`text-sm font-bold truncate ${
                        isSelected ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {srv.title}
                    </div>
                    <div className="text-xs text-slate-400 truncate mt-0.5">
                      {srv.tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed View */}
          <div className="lg:col-span-8 bg-gradient-to-br from-slate-900 via-[#0d1322] to-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl relative">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
                    Practice Profile
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
                <Link
                  href={`/services#${selectedService.id}`}
                  className="inline-flex items-center text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  <span>Full Capabilities Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Key Features / Solutions */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Key Capabilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2 text-xs text-slate-200 bg-slate-900/60 border border-slate-800/80 rounded-xl p-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Ready to deploy a dedicated pod or build your next platform?
                </div>
                <Link
                  href={`/contact?subject=${encodeURIComponent(selectedService.title)}`}
                  className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all shrink-0"
                >
                  <span>Schedule Technical Discovery</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
