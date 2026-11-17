"use client";

import React from "react";
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0b101f] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0b101f]/95 backdrop-blur-md border-b border-slate-800/80 px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: `${caseStudy.themeColor}20`,
                color: caseStudy.themeColor || "#f97316"
              }}
            >
              {caseStudy.category}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Production Architecture Deep-Dive
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Hero Desc */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {caseStudy.title}
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              {caseStudy.heroDesc}
            </p>
          </div>

          {/* KPIs Bar */}
          {caseStudy.kpis && caseStudy.kpis.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.kpis.map((kpi, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center"
                >
                  <div
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: caseStudy.themeColor || "#f97316" }}
                  >
                    {kpi.val}
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wide">
                    {kpi.lbl}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-red-400 font-semibold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.challengeText}
              </p>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Our Solution & Approach</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {caseStudy.approachText}
              </p>
            </div>
          </div>

          {/* Results Summary */}
          {caseStudy.resultsText && (
            <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border border-orange-500/30 rounded-2xl p-6 space-y-2">
              <div className="flex items-center space-x-2 text-orange-400 font-semibold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Business Impact & Production Results</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {caseStudy.resultsText}
              </p>
            </div>
          )}

          {/* Architecture Features */}
          {caseStudy.architecture?.features && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-bold text-white">System Architecture & Tech Stack</h3>
              </div>
              {caseStudy.architecture.subtitle && (
                <p className="text-sm text-slate-400">{caseStudy.architecture.subtitle}</p>
              )}

              <div className="grid grid-cols-1 gap-3">
                {caseStudy.architecture.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{feat.title}</div>
                      <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {feat.desc}
                      </div>
                    </div>
                    {feat.tags && (
                      <div className="flex flex-wrap gap-1.5 shrink-0">
                        {feat.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
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

          {/* Engineering Problem vs Solution matrix */}
          {caseStudy.engineering && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Engineering Deep-Dive</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.engineering.challenge && (
                  <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                      Technical Bottleneck
                    </div>
                    <div className="text-sm font-bold text-white">
                      {caseStudy.engineering.challenge.title}
                    </div>
                    <div className="space-y-2">
                      {caseStudy.engineering.challenge.items.map((it, iIdx) => (
                        <div key={iIdx} className="text-xs text-slate-300">
                          <strong className="text-slate-100">{it.title}:</strong> {it.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {caseStudy.engineering.solution && (
                  <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Architectural Solution
                    </div>
                    <div className="text-sm font-bold text-white">
                      {caseStudy.engineering.solution.title}
                    </div>
                    <div className="space-y-2">
                      {caseStudy.engineering.solution.items.map((it, iIdx) => (
                        <div key={iIdx} className="text-xs text-slate-300">
                          <strong className="text-slate-100">{it.title}:</strong> {it.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 bg-[#0b101f]/95 backdrop-blur-md border-t border-slate-800/80 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="text-xs text-slate-400">
            Have a project with similar architecture requirements?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
            <a
              href={`/contact?subject=${encodeURIComponent(caseStudy.title)}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all"
            >
              <span>Consult Our Specialists</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
