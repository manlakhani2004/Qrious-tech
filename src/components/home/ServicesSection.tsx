"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Rocket,
  Cpu,
  BarChart3,
  Globe,
  Smartphone,
  CloudLightning,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { FOCUS_AREAS } from "@/data/company";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(FOCUS_AREAS[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Rocket: <Rocket className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />,
    Smartphone: <Smartphone className="w-5 h-5" />,
    CloudLightning: <CloudLightning className="w-5 h-5" />
  };

  const selectedArea = FOCUS_AREAS.find((s) => s.id === activeTab) || FOCUS_AREAS[0];

  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header with Old Qrious Tech Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>What we do ?</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
              Solutions And <br />
              <span className="text-orange-500">Focus Areas</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-bold text-[#0c0407] hover:text-orange-500 transition-colors group"
            >
              <span>Explore All Engineering Practices</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Motive Interactive Tabs & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Buttons List */}
          <div className="lg:col-span-4 space-y-2.5">
            {FOCUS_AREAS.map((srv) => {
              const isSelected = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center space-x-4 ${
                    isSelected
                      ? "bg-[#0c0407] text-white border-[#0c0407] shadow-md"
                      : "bg-[#f8f8f8] text-[#333333] border-[#e5e5e5] hover:bg-[#f0f0f0] hover:border-[#d1d5db]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-orange-500 text-white"
                        : "bg-white text-[#555555] border border-[#e5e5e5]"
                    }`}
                  >
                    {iconMap[srv.iconName] || <Sparkles className="w-5 h-5 text-orange-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">
                      {srv.title}
                    </div>
                    <div
                      className={`text-[11px] truncate mt-0.5 ${
                        isSelected ? "text-slate-300" : "text-[#777777]"
                      }`}
                    >
                      {srv.tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Selected Focus Area Detail */}
          <div className="lg:col-span-8 bg-[#f8f8f8] border border-[#ececec] rounded-3xl p-8 lg:p-10 shadow-sm relative space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e5e5e5]">
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">
                  Focus Area
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c0407] mt-1">
                  {selectedArea.title}
                </h3>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center text-xs font-bold text-[#0c0407] bg-white border border-[#e5e5e5] px-4 py-2 rounded-full hover:border-[#111111] transition-all shadow-sm shrink-0"
              >
                <span>Full Spec</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:rotate-45 transition-transform" />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
              {selectedArea.description}
            </p>

            {/* Scope / Key Deliverables */}
            <div>
              <h4 className="text-xs font-bold text-[#0c0407] uppercase tracking-wider mb-3">
                Key Deliverables & Engineering Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedArea.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-2 text-xs text-[#333333] bg-white border border-[#ececec] rounded-xl p-3 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="pt-4 border-t border-[#e5e5e5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#777777]">
                Ready to accelerate this solution with our certified specialists?
              </span>
              <Link
                href={`/contact?subject=${encodeURIComponent(selectedArea.title)}`}
                className="group inline-flex items-center pl-5 pr-1.5 py-1.5 text-xs font-bold text-white bg-[#0c0407] hover:bg-orange-500 rounded-full transition-all duration-300"
              >
                <span>Schedule Technical Discovery</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#0c0407] flex items-center justify-center ml-3 group-hover:rotate-45 group-hover:text-orange-500 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
