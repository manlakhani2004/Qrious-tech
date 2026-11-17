"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_TABS, CaseStudy } from "@/data/projects";
import CaseStudyModal from "@/components/modals/CaseStudyModal";

export default function CaseStudiesSpotlight() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  // Filter studies
  const filteredStudies =
    selectedTab === "all"
      ? CASE_STUDIES.slice(0, 6)
      : CASE_STUDIES.filter((c) => c.tab === selectedTab).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#050811] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
              Real-World Engineering & Proven Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Enterprise <br />
              <span className="gradient-text-orange">Case Studies & Deployments</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors group"
            >
              <span>Explore All 37 Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800">
          {CASE_STUDY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedTab === tab.id
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setActiveModalStudy(study)}
              className="bg-gradient-to-br from-slate-900/90 via-[#0a0f1d] to-slate-900/90 border border-slate-800/90 rounded-3xl p-6 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Badge & Tab */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      backgroundColor: `${study.themeColor || "#f97316"}20`,
                      color: study.themeColor || "#f97316"
                    }}
                  >
                    {study.category}
                  </span>
                  <span className="text-xs text-slate-400 group-hover:text-orange-400 transition-colors flex items-center">
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {study.heroDesc}
                </p>

                {/* KPIs Row */}
                {study.kpis && study.kpis.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                    {study.kpis.slice(0, 3).map((kpi, kIdx) => (
                      <div key={kIdx} className="bg-slate-800/40 rounded-xl p-2 text-center">
                        <div
                          className="text-sm font-extrabold"
                          style={{ color: study.themeColor || "#f97316" }}
                        >
                          {kpi.val}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {kpi.lbl}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-400">Production Architecture</span>
                <span className="font-semibold text-white group-hover:text-orange-400 transition-colors">
                  View Full Solution &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-2xl hover:border-orange-500/50 hover:text-white transition-all shadow-lg"
          >
            <span>Browse Complete Directory of 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-2 text-orange-400" />
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
