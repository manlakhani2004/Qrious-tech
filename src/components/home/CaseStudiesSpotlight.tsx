"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  TrendingUp,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_TABS, CaseStudy } from "@/data/projects";
import CaseStudyModal from "@/components/modals/CaseStudyModal";

export default function CaseStudiesSpotlight() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    selectedTab === "all"
      ? CASE_STUDIES.slice(0, 6)
      : CASE_STUDIES.filter((c) => c.tab === selectedTab).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8] relative border-t border-[#ececec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e5e5e5] text-xs font-bold text-[#0c0407] shadow-sm mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              <span>Latest works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0c0407] tracking-tight">
              Performance that delivers <br />
              <span className="text-orange-500">visible growth</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-xs font-bold text-[#0c0407] hover:text-orange-500 transition-colors group"
            >
              <span>Explore All 37 Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Motive Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-[#e5e5e5]">
          {CASE_STUDY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedTab === tab.id
                  ? "bg-[#0c0407] text-white shadow-sm"
                  : "bg-white text-[#555555] hover:text-[#0c0407] hover:bg-[#f0f0f0] border border-[#e5e5e5]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Motive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveModalStudy(study)}
              className="bg-white border border-[#ececec] rounded-3xl p-6 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Category Badge & Circular Arrow */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: `${study.themeColor || "#f97316"}15`,
                      color: study.themeColor || "#ea580c"
                    }}
                  >
                    {study.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f8f8f8] border border-[#e5e5e5] flex items-center justify-center text-[#0c0407] group-hover:rotate-45 group-hover:bg-[#0c0407] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed">
                  {study.heroDesc}
                </p>

                {/* KPIs Row */}
                {study.kpis && study.kpis.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#f0f0f0]">
                    {study.kpis.slice(0, 3).map((kpi, kIdx) => (
                      <div key={kIdx} className="bg-[#f8f8f8] border border-[#ececec] rounded-xl p-2 text-center">
                        <div
                          className="text-sm font-extrabold"
                          style={{ color: study.themeColor || "#ea580c" }}
                        >
                          {kpi.val}
                        </div>
                        <div className="text-[10px] text-[#777777] truncate mt-0.5 font-medium">
                          {kpi.lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#777777]">
                <span className="text-[11px] font-semibold text-[#888888]">Architecture Spec</span>
                <span className="font-bold text-[#0c0407] group-hover:text-orange-600 transition-colors">
                  Inspect Solution &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-[#0c0407] bg-white border border-[#e5e5e5] rounded-full hover:bg-[#0c0407] hover:text-white transition-all shadow-sm"
          >
            <span>Browse Complete Directory of 37 Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-orange-500" />
          </Link>
        </div>
      </div>

      {/* Detail Modal */}
      <CaseStudyModal
        caseStudy={activeModalStudy}
        onClose={() => setActiveModalStudy(null)}
      />
    </section>
  );
}
