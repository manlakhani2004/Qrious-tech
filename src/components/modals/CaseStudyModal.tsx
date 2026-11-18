"use client";

import React from "react";
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import { CaseStudy } from "@/data/projects";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#121215] border border-[#ececec] dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-b border-[#e5e5e5] dark:border-neutral-800 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${caseStudy.themeColor || "#f97316"}15`,
                color: caseStudy.themeColor || "#ea580c"
              }}
            >
              {caseStudy.category}
            </span>
            <span className="text-xs text-[#cccccc] dark:text-neutral-600 hidden sm:inline">•</span>
            <span className="text-xs text-[#666666] dark:text-neutral-400 hidden sm:inline">
              Production Architecture Deep-Dive
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#666666] dark:text-neutral-400 hover:text-[#0c0407] dark:hover:text-white hover:bg-[#f3f4f6] dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#ffffff] dark:bg-[#121215]">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c0407] dark:text-white tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#555555] dark:text-neutral-300 leading-relaxed">
              {caseStudy.heroDesc}
            </p>
          </div>

          {/* KPIs Bar */}
          {caseStudy.kpis && caseStudy.kpis.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f8f8] dark:bg-[#18181b] border border-[#ececec] dark:border-neutral-800 rounded-2xl p-4 flex flex-col justify-center"
                >
                  <div
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: caseStudy.themeColor || "#ea580c" }}
                  >
                    {kpi.val}
                  </div>
                  <div className="text-xs font-bold text-[#666666] dark:text-neutral-400 mt-1 uppercase tracking-wide">
                    {kpi.lbl}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-rose-950/20 border border-red-200 dark:border-rose-900/40 rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-red-700 dark:text-rose-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-[#444444] dark:text-neutral-300 leading-relaxed">
                {caseStudy.challengeText}
              </p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-800 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Our Solution & Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-[#444444] dark:text-neutral-300 leading-relaxed">
                {caseStudy.approachText}
              </p>
            </div>
          </div>

          {/* Results Summary */}
          {caseStudy.resultsText && (
            <div className="bg-orange-50 dark:bg-amber-950/20 border border-orange-200 dark:border-amber-900/40 rounded-2xl p-6 space-y-2">
              <div className="flex items-center space-x-2 text-orange-800 dark:text-amber-400 font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Production Impact & Results</span>
              </div>
              <p className="text-xs sm:text-sm text-[#333333] dark:text-neutral-300 leading-relaxed">
                {caseStudy.resultsText}
              </p>
            </div>
          )}

          {/* Architecture Features */}
          {caseStudy.architecture?.features && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-orange-500" />
                <h3 className="text-base sm:text-lg font-bold text-[#0c0407] dark:text-white">
                  System Architecture & Tech Stack
                </h3>
              </div>
              {caseStudy.architecture.subtitle && (
                <p className="text-xs text-[#666666] dark:text-neutral-400">{caseStudy.architecture.subtitle}</p>
              )}

              <div className="grid grid-cols-1 gap-3">
                {caseStudy.architecture.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f8f8f8] dark:bg-[#18181b] border border-[#ececec] dark:border-neutral-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#0c0407] dark:text-white">{feat.title}</div>
                      <div className="text-xs text-[#666666] dark:text-neutral-400 mt-1 leading-relaxed">
                        {feat.desc}
                      </div>
                    </div>
                    {feat.tags && (
                      <div className="flex flex-wrap gap-1.5 shrink-0">
                        {feat.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-[#121215] text-[#333333] dark:text-neutral-300 border border-[#e5e5e5] dark:border-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md border-t border-[#e5e5e5] dark:border-neutral-800 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-[#777777] dark:text-neutral-400">
            Have a project with similar architecture requirements?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#555555] dark:text-neutral-400 hover:text-[#0c0407] dark:hover:text-white rounded-full hover:bg-[#f3f4f6] dark:hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
            <a
              href={`/contact?subject=${encodeURIComponent(caseStudy.title)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#0c0407] dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-full transition-all"
            >
              <span>Consult Our Specialists</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
