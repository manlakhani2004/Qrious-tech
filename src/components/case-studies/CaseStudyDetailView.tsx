"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  TrendingUp,
  ShieldAlert,
  CheckCircle2,
  Code2,
  Layers,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Sparkles,
  ExternalLink,
  Target,
  BarChart3,
  Flame,
  Check
} from "lucide-react";
import { CaseStudy } from "@/data/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudyDetailViewProps {
  study: CaseStudy;
}

const TABS = [
  { id: "overview", label: "Overview", num: 1 },
  { id: "architecture", label: "Architecture", num: 2 },
  { id: "problems", label: "Problem Space", num: 3 },
  { id: "engineering", label: "Engineering", num: 4 },
  { id: "performance", label: "Performance", num: 5 }
];

export default function CaseStudyDetailView({ study }: CaseStudyDetailViewProps) {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const currentTabIndex = TABS.findIndex((t) => t.id === activeTab);

  const handlePrevTab = () => {
    if (currentTabIndex > 0) {
      setActiveTab(TABS[currentTabIndex - 1].id);
    }
  };

  const handleNextTab = () => {
    if (currentTabIndex < TABS.length - 1) {
      setActiveTab(TABS[currentTabIndex + 1].id);
    }
  };

  // Image path normalize
  const imageSrc = study.image
    ? study.image.startsWith("/")
      ? study.image
      : `/${study.image}`
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      {/* Top Breadcrumb & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <Link
          href="/case-studies"
          className="group inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All 37 Case Studies</span>
        </Link>

        <div className="flex items-center space-x-3">
          <Link
            href={`/contact?subject=${encodeURIComponent(study.title)}`}
            className="group inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-2xs active:scale-95"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Motive Hero Section */}
      <ScrollReveal className="space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 bg-[#f8f8f9] dark:bg-[#18181b] px-3.5 py-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-800 shadow-2xs">
            {study.category}
          </span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
            Platform Deck: {study.id}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-5xl">
          {study.title}
        </h1>

        <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-xl leading-relaxed font-normal max-w-4xl">
          {study.heroDesc}
        </p>

        {/* KPIs Grid */}
        {study.kpis && study.kpis.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {study.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[24px] sm:rounded-[28px] p-6 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white">
                  {kpi.val}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1 leading-snug">
                  {kpi.lbl}
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollReveal>

      {/* Authentic Platform Showcase Image */}
      {imageSrc && (
        <ScrollReveal duration={0.7} yOffset={25}>
          <div className="relative rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-lg group">
            <div className="relative aspect-[16/9] max-h-[560px] w-full">
              <Image
                src={imageSrc}
                alt={study.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
              <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                Verified Production Architecture
              </span>
              <span className="hidden sm:inline bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                Delivered by Qtech Team LLP
              </span>
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Interactive 5 Tabs Bar (Motive Agency & Old Qtech Signature Navigation) */}
      <section className="space-y-8">
        <div className="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#09090b] sticky top-20 z-20 py-2">
          <div className="flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
            {/* Tab buttons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                        : "bg-[#f8f8f9] dark:bg-[#18181b] text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200/80 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                        isActive
                          ? "bg-white text-black dark:bg-black dark:text-white"
                          : "bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      {tab.num}
                    </span>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Pager controls */}
            <div className="hidden sm:flex items-center space-x-2 pl-4 border-l border-neutral-200 dark:border-neutral-800 shrink-0">
              <button
                onClick={handlePrevTab}
                disabled={currentTabIndex === 0}
                className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Previous section"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                0{currentTabIndex + 1} / 0{TABS.length}
              </span>
              <button
                onClick={handleNextTab}
                disabled={currentTabIndex === TABS.length - 1}
                className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                aria-label="Next section"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Panes Container with AnimatePresence */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            {/* PANE 1: OVERVIEW */}
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Executive Overview
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mt-1">
                    {study.overview?.subtitle || "Platform Scope & Business Context"}
                  </h2>
                </div>

                {/* Narrative Summary: Challenge, Approach & Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-xs">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white">The Core Challenge</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {study.challengeText}
                    </p>
                  </div>

                  <div className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xs">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white">The Engineering Approach</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {study.approachText}
                    </p>
                  </div>

                  <div className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white">Measurable Outcomes</h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {study.resultsText}
                    </p>
                  </div>
                </div>

                {/* Key Highlights Grid */}
                {study.overview?.highlights && study.overview.highlights.length > 0 && (
                  <div className="space-y-4 pt-4">
                    <h3 className="text-base font-bold text-black dark:text-white">Key Architectural Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {study.overview.highlights.map((hl, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start space-x-3 group"
                        >
                          <div className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-black dark:text-white">{hl.title}</h4>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                              {hl.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* PANE 2: ARCHITECTURE */}
            {activeTab === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    System Architecture
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mt-1">
                    {study.architecture?.subtitle || "Distributed Microservices & Cloud Infrastructure"}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.architecture?.features?.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-black dark:text-white shadow-xs shrink-0">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-black dark:text-white">{feat.title}</h3>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                        {feat.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200/60 dark:border-neutral-800">
                        {feat.tags?.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1.5 rounded-full bg-white dark:bg-[#18181b] text-neutral-800 dark:text-neutral-200 text-[11px] font-semibold border border-neutral-200/80 dark:border-neutral-700 shadow-2xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PANE 3: PROBLEM SPACE */}
            {activeTab === "problems" && (
              <motion.div
                key="problems"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Problem Space & Friction
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mt-1">
                    {study.problems?.subtitle || "Legacy Constraints & Technical Debt Overcome"}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.problems?.list?.map((item, pIdx) => (
                    <div
                      key={pIdx}
                      className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-rose-600 dark:text-rose-400 shadow-xs shrink-0">
                          <ShieldAlert className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-black dark:text-white">{item.title}</h3>
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* PANE 4: ENGINEERING */}
            {activeTab === "engineering" && (
              <motion.div
                key="engineering"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Engineering Deep-Dive
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mt-1">
                    {study.engineering?.subtitle || "Strategic Decisions & Custom Implementations"}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Challenge Box */}
                  {study.engineering?.challenge && (
                    <div className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-9 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between">
                      <div className="space-y-5">
                        <div className="flex items-center space-x-3.5 pb-4 border-b border-neutral-200/70 dark:border-neutral-800">
                          <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-amber-600 dark:text-amber-400 shadow-xs shrink-0">
                            <ShieldAlert className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-bold text-black dark:text-white">
                            {study.engineering.challenge.title}
                          </h3>
                        </div>

                        <div className="space-y-4">
                          {study.engineering.challenge.items?.map((item, cIdx) => (
                            <div key={cIdx} className="space-y-1">
                              <h4 className="text-sm font-bold text-black dark:text-white">{item.title}</h4>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {study.engineering.challenge.footer && (
                        <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 italic">
                          {study.engineering.challenge.footer}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Solution Box */}
                  {study.engineering?.solution && (
                    <div className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-9 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between">
                      <div className="space-y-5">
                        <div className="flex items-center space-x-3.5 pb-4 border-b border-neutral-200/70 dark:border-neutral-800">
                          <div className="w-12 h-12 rounded-full bg-white dark:bg-[#18181b] flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-xs shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-bold text-black dark:text-white">
                            {study.engineering.solution.title}
                          </h3>
                        </div>

                        <div className="space-y-4">
                          {study.engineering.solution.items?.map((item, sIdx) => (
                            <div key={sIdx} className="space-y-1">
                              <h4 className="text-sm font-bold text-black dark:text-white">{item.title}</h4>
                              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {study.engineering.solution.footer && (
                        <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800 text-xs text-neutral-500 dark:text-neutral-400 italic">
                          {study.engineering.solution.footer}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* PANE 5: PERFORMANCE */}
            {activeTab === "performance" && (
              <motion.div
                key="performance"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div>
                  <span className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                    Performance & Production SLAs
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mt-1">
                    {study.performance?.subtitle || "Validated Production Benchmarks & Uptime"}
                  </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {study.performance?.metrics?.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
                    >
                      <div className="text-3xl font-extrabold text-black dark:text-white">{m.val}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1 leading-snug">
                        {m.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Motive Bottom Appointment CTA Banner */}
      <section className="pt-16 pb-8 border-t border-neutral-100 dark:border-neutral-800/80">
        <ScrollReveal duration={0.7} yOffset={25}>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.14]">
              Ready to achieve similar velocity <br />
              <span className="text-neutral-400 dark:text-neutral-500 font-normal">for your enterprise product?</span>
            </h3>

            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Schedule a discovery session with our senior technical specialists to review your architecture, scope dedicated engineering pods, and explore proven delivery frameworks with zero commitment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                href={`/contact?subject=${encodeURIComponent(study.title)}`}
                className="group inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95 w-full sm:w-auto"
              >
                <span>Schedule a Meeting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+916355794606"
                className="inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-white dark:bg-[#121215] border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-50 dark:hover:bg-[#18181b] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-2xs w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Call +91 63557 94606</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
