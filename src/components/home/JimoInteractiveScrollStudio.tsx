"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Search,
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
  Terminal,
  Database,
  GitBranch,
  Sparkles,
  Bot
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";

export default function JimoInteractiveScrollStudio() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this 300vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring physics for fluid interpolation (matching Jimo / Motion.dev)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001
  });

  // Active mode index based on scroll:
  // 0.00 - 0.36 => Mode 0 (Autonomous Swarms)
  // 0.36 - 0.70 => Mode 1 (Private Enterprise RAG)
  // 0.70 - 1.00 => Mode 2 (Dedicated Pods)
  const [activeTab, setActiveTab] = useState(0);

  // Sync tab state with scroll on change
  scrollYProgress.on("change", (latest) => {
    if (latest < 0.36) {
      if (activeTab !== 0) setActiveTab(0);
    } else if (latest < 0.70) {
      if (activeTab !== 1) setActiveTab(1);
    } else {
      if (activeTab !== 2) setActiveTab(2);
    }
  });

  // 3D Perspective transforms for the interactive stage
  const stageRotateX = useTransform(smoothProgress, [0, 0.36, 0.7, 1], [14, 0, -10, 0]);
  const stageRotateY = useTransform(smoothProgress, [0, 0.36, 0.7, 1], [-8, 0, 10, 0]);
  const stageScale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.94, 1, 0.98, 1.02, 1]);
  const bgRingsScale = useTransform(smoothProgress, [0, 1], [0.8, 1.35]);
  const bgRingsRotate = useTransform(smoothProgress, [0, 1], [0, 45]);
  const bgRingsOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.25, 0.6, 0.6, 0.2]);

  // Stage content data
  const MODES = [
    {
      id: "swarms",
      number: "01",
      tabLabel: "Autonomous Swarms",
      badge: "Self-Driving Operations",
      headline: "Replace repetitive manual grind with self-correcting agent swarms.",
      description:
        "Multi-agent pipelines that ingest vendor PDFs, cross-reference purchase orders against business rules, and sync validated entries directly into your ERP and CRM with zero variance.",
      latency: "< 1.2s",
      metricLabel: "Time Saved",
      metricValue: "84%",
      accuracy: "99.9%",
      tag: "FINANCE & LOGISTICS",
      simulation: {
        title: "Accounts Payable & Invoice Reconciliation",
        steps: [
          { name: "Inbound PDF Parsing & OCR", status: "Verified", time: "180ms" },
          { name: "Pydantic Schema & Tax Policy Check", status: "Zero Variance", time: "340ms" },
          { name: "NetSuite ERP Journal Dispatch", status: "Synced (200 OK)", time: "620ms" }
        ],
        summary: "Supplier invoice #INV-8492 ($24,500) matched with PO #4092. Synced to NetSuite."
      }
    },
    {
      id: "rag",
      number: "02",
      tabLabel: "Private Enterprise RAG",
      badge: "Sovereign Knowledge",
      headline: "Instant vector search across company archives in your private VPC.",
      description:
        "Turn standard operating procedures, technical manuals, and multi-thousand page contract binders into an instant, air-gapped search tool. Zero third-party model retraining.",
      latency: "14ms",
      metricLabel: "Search Speed",
      metricValue: "14ms",
      accuracy: "100% Air-Gapped",
      tag: "LEGAL & COMPLIANCE",
      simulation: {
        title: "Air-Gapped Contract & SOP Search Engine",
        steps: [
          { name: "Hybrid Vector + BM25 Retrieval", status: "Indexed (840 Docs)", time: "12ms" },
          { name: "Context Re-ranking & Deduplication", status: "Grounded", time: "16ms" },
          { name: "Exact Clause & Page Citation", status: "§14.2 Verified", time: "22ms" }
        ],
        summary: "Query: 'Incident response SLA protocol'. Matched Master Services Agreement §14.2 (99.8% match)."
      }
    },
    {
      id: "pods",
      number: "03",
      tabLabel: "Dedicated In-House Pods",
      badge: "Direct Codebase Ownership",
      headline: "Dedicated senior AI engineers embedded right inside your team.",
      description:
        "No agency fluff or off-the-shelf software compromises. Dedicated AI systems architects, agent engineers, and reliability specialists commit daily directly to your company GitHub.",
      latency: "Daily",
      metricLabel: "IP Ownership",
      metricValue: "100%",
      accuracy: "Sprint CI/CD",
      tag: "ENGINEERING PODS",
      simulation: {
        title: "Dedicated Pod Deployment Topology",
        steps: [
          { name: "AI Systems Architect (Schemas & Guardrails)", status: "Active Pod", time: "Daily Standup" },
          { name: "Agent Engineer (LangGraph & Multi-LLM)", status: "Direct Commits", time: "In-House" },
          { name: "Reliability & QA Lead (Evals & CI/CD)", status: "Deterministic", time: "Automated" }
        ],
        summary: "Full source code, private model weights, and production Terraform transferred to client ownership."
      }
    }
  ];

  const currentMode = MODES[activeTab];

  return (
    <section
      ref={containerRef}
      id="interactive-studio"
      className="relative bg-transparent border-b border-neutral-200/80 dark:border-white/10"
      style={{ height: "300vh" }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8 2xl:px-12 select-none">
        
        {/* Jimo-Style Dimensional Background Wireframe Funnel / Radial Depth */}
        <motion.div
          style={{
            scale: bgRingsScale,
            rotate: bgRingsRotate,
            opacity: bgRingsOpacity
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] sm:w-[1100px] lg:w-[1300px] h-[850px] sm:h-[1100px] lg:h-[1300px] pointer-events-none -z-10 flex items-center justify-center"
        >
          {/* Concentric coordinate rings */}
          <div className="absolute inset-0 rounded-full border border-neutral-300/40 dark:border-white/[0.06]" />
          <div className="absolute inset-[15%] rounded-full border border-dashed border-neutral-300/35 dark:border-white/[0.05]" />
          <div className="absolute inset-[30%] rounded-full border border-neutral-300/30 dark:border-white/[0.04]" />
          <div className="absolute inset-[45%] rounded-full border border-dashed border-neutral-300/25 dark:border-white/[0.03]" />
          <div className="absolute inset-[60%] rounded-full border border-neutral-300/20 dark:border-white/[0.025]" />
          {/* Subtle radar sweep gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_65%)]" />
        </motion.div>

        {/* Studio Content Container */}
        <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto w-full relative z-10 py-6 sm:py-8">
          
          {/* Header & Mode Switcher Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-neutral-200/80 dark:border-white/10">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>One Engine • Three Deployment Modes</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                Scroll to explore how autonomous AI works inside your business.
              </h2>
            </div>

            {/* Jimo-Style Mode Switcher Buttons */}
            <div className="inline-flex items-center p-1 rounded-[2px] bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/90 dark:border-white/10 backdrop-blur-md">
              {MODES.map((mode, idx) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 sm:px-4 py-1.5 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === idx
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                      : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  <span className="text-[10px] opacity-70">{mode.number}</span>
                  <span>{mode.tabLabel.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Split-Screen 3D Studio (Left: Simulation Stage | Right: Telemetry Controller) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Column: 3D Perspective Simulation Window (7 Cols) */}
            <motion.div
              style={{
                perspective: 1200,
                rotateX: stageRotateX,
                rotateY: stageRotateY,
                scale: stageScale
              }}
              className="lg:col-span-7 will-change-transform"
            >
              <div className="rounded-[2px] bg-white/85 dark:bg-[#0c0c10]/90 border border-neutral-200/90 dark:border-white/15 p-5 sm:p-7 shadow-xl backdrop-blur-xl relative overflow-hidden">
                
                {/* Window Chrome Title Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-200/70 dark:border-white/10 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    </div>
                    <span className="text-neutral-400 dark:text-neutral-500 text-[11px] ml-2 font-mono">
                      qtech://runtime/{currentMode.id}.stream
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-[11px]">
                    <span className="flex items-center text-emerald-600 dark:text-emerald-400 font-semibold space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      <span>LIVE TELEMETRY</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-[2px] bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 font-mono">
                      {currentMode.latency}
                    </span>
                  </div>
                </div>

                {/* Animated Mode Content Switcher */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-4"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold tracking-wider text-blue-600 dark:text-sky-400 uppercase">
                          {currentMode.tag}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-[2px] bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-neutral-200 font-bold">
                          {currentMode.badge}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black dark:text-white tracking-tight mb-2">
                        {currentMode.simulation.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-4">
                        {currentMode.description}
                      </p>
                    </div>

                    {/* Step-by-Step Interactive Pipeline Status */}
                    <div className="space-y-2.5 font-mono text-xs">
                      {currentMode.simulation.steps.map((step, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 sm:p-3 rounded-[2px] bg-neutral-50 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10 transition-colors"
                        >
                          <div className="flex items-center space-x-2.5">
                            <span className="w-5 h-5 rounded-[2px] bg-neutral-200/80 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 flex items-center justify-center text-[10px] font-bold">
                              {sIdx + 1}
                            </span>
                            <span className="text-neutral-800 dark:text-neutral-200 font-medium text-[11.5px] sm:text-xs">
                              {step.name}
                            </span>
                          </div>

                          <div className="flex items-center space-x-3">
                            <span className="text-[10px] text-neutral-400 dark:text-neutral-500 hidden sm:inline">
                              {step.time}
                            </span>
                            <span className="px-2 py-0.5 rounded-[2px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold text-[10.5px] border border-emerald-200/60 dark:border-emerald-800/60">
                              {step.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Grounded Result Banner */}
                    <div className="p-3 rounded-[2px] bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/50 flex items-center space-x-2.5 text-xs text-blue-900 dark:text-blue-200 font-mono">
                      <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span className="truncate">{currentMode.simulation.summary}</span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Column: Sticky Command Telemetry Dock (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Telemetry Card */}
              <div className="rounded-[2px] bg-neutral-50/90 dark:bg-white/[0.03] border border-neutral-200/90 dark:border-white/10 p-5 sm:p-6 backdrop-blur-md">
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2 flex items-center justify-between">
                  <span>Guaranteed Performance</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">99.8% Uptime SLA</span>
                </div>

                {/* 2-Grid Metric Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 rounded-[2px] bg-white dark:bg-black/50 border border-neutral-200/80 dark:border-white/10">
                    <span className="block text-[11px] font-mono text-neutral-500 uppercase">Latency</span>
                    <span className="text-2xl font-extrabold text-black dark:text-white font-mono">
                      {currentMode.latency}
                    </span>
                  </div>

                  <div className="p-3 rounded-[2px] bg-white dark:bg-black/50 border border-neutral-200/80 dark:border-white/10">
                    <span className="block text-[11px] font-mono text-neutral-500 uppercase">
                      {currentMode.metricLabel}
                    </span>
                    <span className="text-2xl font-extrabold text-blue-600 dark:text-sky-400 font-mono">
                      {currentMode.metricValue}
                    </span>
                  </div>
                </div>

                {/* Narrative Guarantee */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-5">
                  {currentMode.headline}
                </p>

                {/* Action CTA */}
                <Link
                  href="/contact"
                  className="group w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-[2px] bg-black text-white dark:bg-white dark:text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <span>Explore {currentMode.tabLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Scroll Track Progress Indicator */}
              <div className="px-4 py-2.5 rounded-[2px] bg-neutral-100/80 dark:bg-white/[0.04] border border-neutral-200/70 dark:border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="text-[11px]">SCROLL PROGRESS</span>
                <div className="flex space-x-1.5 items-center">
                  {MODES.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeTab === idx
                          ? "w-6 bg-blue-600 dark:bg-blue-400"
                          : "w-1.5 bg-neutral-300 dark:bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

