"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  MoveHorizontal
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

// 5 Core Capability Dimensions
interface CapabilityDimension {
  id: string;
  number: string;
  label: string;
  tagline: string;
  headline: string;
  legacy: {
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
    flow: string[];
  };
  qrious: {
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
    flow: string[];
    badge: string;
  };
}

const DIMENSIONS: CapabilityDimension[] = [
  {
    id: "speed",
    number: "01",
    label: "Delivery Speed",
    tagline: "Time to First Working Prototype",
    headline: "Fast Agile Sprints vs. 6-Month Waterfall Delay",
    legacy: {
      title: "Traditional Outsourcing",
      description: "Months spent in bureaucratic scoping meetings and static wireframe decks without a single executable line of code.",
      metric: "180+ Days",
      metricLabel: "Time to Live Prototype",
      flow: ["Waterfall Specs", "Approval Delays", "Wireframe Mockups", "Delayed Delivery"]
    },
    qrious: {
      title: "Qrious Tech AI Pods",
      description: "A production-grade, functional Proof of Concept wired to your real data schemas and evaluated in rapid, transparent sprints.",
      metric: "Fast Sprints",
      metricLabel: "Milestone-Driven Delivery",
      flow: ["Sprint 1: Schema Audit", "Sprint 2: Core Build", "Sprint 3: Live Benchmark", "Production Ready"],
      badge: "5.4x Faster Velocity"
    }
  },
  {
    id: "privacy",
    number: "02",
    label: "Data Privacy",
    tagline: "Air-Gapped Sovereign Security",
    headline: "Air-Gapped Private VPC vs. Public Model Data Leakage",
    legacy: {
      title: "Traditional Outsourcing",
      description: "Direct API calls to public AI models with corporate data, risking customer records and sensitive IP to third-party model retraining.",
      metric: "High Risk",
      metricLabel: "Public Cloud Exposure",
      flow: ["Customer Data", "Public Model API", "Data Retention Risk", "Zero Audit Logs"]
    },
    qrious: {
      title: "Qrious Tech AI Pods",
      description: "Dedicated instances deployed inside your private VPC. Zero data retention, zero third-party retraining, and strict SOC2/HIPAA compliance.",
      metric: "0% Retention",
      metricLabel: "Private Sovereign Boundary",
      flow: ["Client VPC Sandbox", "Dedicated LLM Instance", "Zero Retention Lock", "SOC2 & HIPAA Compliant"],
      badge: "100% Private Cloud"
    }
  },
  {
    id: "reliability",
    number: "03",
    label: "Architecture & Reliability",
    tagline: "Self-Correcting Multi-Agent Swarms",
    headline: "Deterministic Validation vs. Brittle Prompt Wrappers",
    legacy: {
      title: "Traditional Outsourcing",
      description: "Brittle single-prompt scripts that fail silently and hallucinate when edge-case payloads deviate from standard templates.",
      metric: "~38% Error",
      metricLabel: "Edge-Case Failure Rate",
      flow: ["Single Prompt", "No Guardrails", "Silent Hallucination", "Production Breakage"]
    },
    qrious: {
      title: "Qrious Tech AI Pods",
      description: "Deterministic multi-agent swarms enforcing Pydantic & Zod schema validation with automatic self-healing feedback loops.",
      metric: "99.8%",
      metricLabel: "Ground Truth Accuracy",
      flow: ["Orchestrator Ingest", "Pydantic Schema Check", "Self-Healing Retry Loop", "Deterministic ERP Sync"],
      badge: "Deterministic Guardrails"
    }
  },
  {
    id: "talent",
    number: "04",
    label: "Engineering Talent",
    tagline: "100+ Full-Time In-House Engineers",
    headline: "100% In-House AI Engineers vs. Freelance Churn",
    legacy: {
      title: "Traditional Outsourcing",
      description: "Unvetted junior contractors passed through layers of non-technical middlemen with constant turnover mid-sprint.",
      metric: "40%+ Churn",
      metricLabel: "Annual Offshore Turnover",
      flow: ["Unvetted Freelancers", "Project Manager Layers", "Mid-Project Churn", "Knowledge Loss"]
    },
    qrious: {
      title: "Qrious Tech AI Pods",
      description: "Senior machine learning specialists, cloud architects, and full-stack software engineers embedded directly in your Slack.",
      metric: "100%",
      metricLabel: "Full-Time In-House Engineers",
      flow: ["100+ In-House Lab", "Direct Slack & GitHub Access", "Daily Timezone Overlap", "48h Onboarding SLA"],
      badge: "0% Freelancer Risk"
    }
  },
  {
    id: "ownership",
    number: "05",
    label: "IP & Code Ownership",
    tagline: "Direct Client GitHub Commits",
    headline: "Full Client IP Ownership vs. Proprietary Vendor Lock-In",
    legacy: {
      title: "Traditional Outsourcing",
      description: "Custom features locked behind vendor-owned proprietary libraries, vague IP clauses, and expensive maintenance contracts.",
      metric: "Locked",
      metricLabel: "Vendor Dependency",
      flow: ["Proprietary Wrappers", "Ambiguous IP Clauses", "Licensing Surcharges", "Vendor Lock-In"]
    },
    qrious: {
      title: "Qrious Tech AI Pods",
      description: "Immediate daily commits to your GitHub. 100% of code, model weights, schemas, and tests are transferred to you on day 1.",
      metric: "100%",
      metricLabel: "Client IP Transferred",
      flow: ["Direct Client GitHub Push", "Open Modern Tooling", "Complete Weights & Docs", "Zero Vendor Lock-In"],
      badge: "100% Code & IP Transfer"
    }
  }
];

export default function WhyChooseUsSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [sliderPct, setSliderPct] = useState(50); // 0 (Legacy) to 100 (Qrious)
  const [isDragging, setIsDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const manualScrollRef = useRef(false);

  // Track scroll progress within this sticky section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001
  });

  // Automatically switch dimensions as the user scrolls
  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (manualScrollRef.current) return;
      const clamped = Math.max(0, Math.min(0.999, latest));
      const step = Math.min(DIMENSIONS.length - 1, Math.floor(clamped * DIMENSIONS.length));
      setActiveTabIdx(step);
    });
  }, [smoothProgress]);

  const activeDim = DIMENSIONS[activeTabIdx];

  // Smooth click navigation to a dimension
  const handleTabClick = (idx: number) => {
    manualScrollRef.current = true;
    setActiveTabIdx(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetFraction = (idx + 0.45) / DIMENSIONS.length;
    const targetY = scrollTop + totalScrollable * targetFraction;
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(() => {
      manualScrollRef.current = false;
    }, 750);
  };

  // Drag calculation
  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const rawPct = ((clientX - rect.left) / rect.width) * 100;
    const clampedPct = Math.max(12, Math.min(88, rawPct));
    setSliderPct(clampedPct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateSliderFromClientX(e.clientX);
  };

  // Robust global window drag listeners so drag never breaks or gets stuck
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      updateSliderFromClientX(e.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [isDragging, updateSliderFromClientX]);

  // Reactive lens opacities based on sliderPct
  const legacyOpacity = Math.max(0.4, Math.min(1, 0.4 + (sliderPct / 100) * 0.6));
  const qriousOpacity = Math.max(0.4, Math.min(1, 0.4 + ((100 - sliderPct) / 100) * 0.6));

  return (
    <section
      id="why-choose-us"
      className="py-16 sm:py-24 bg-transparent border-b border-neutral-200/80 dark:border-white/[0.08] relative transition-colors duration-200 isolate"
    >
      {/* Precision Crosshair Reticle Matrix (Reduced Density & Whisper-Quiet Opacity) */}
      <div className="absolute inset-0 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,#000_30%,transparent_90%)] opacity-30 dark:opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crosshair-pattern" width="72" height="72" patternUnits="userSpaceOnUse">
              <path
                d="M 36 32 L 36 40 M 32 36 L 40 36"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                className="text-neutral-400 dark:text-neutral-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosshair-pattern)" />
        </svg>
      </div>

      {/* Jimo-Style Concentric Coordinate Depth Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/10" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-neutral-400/20 dark:border-white/[0.06]" />
        <div className="absolute inset-[40%] rounded-full border border-neutral-400/15 dark:border-white/[0.04]" />
        <div className="absolute inset-[60%] rounded-full border border-dashed border-neutral-400/10 dark:border-white/[0.03]" />
      </div>

      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[1000px] h-[350px] bg-gradient-to-r from-blue-500/8 via-indigo-500/8 to-purple-500/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Sticky Scroll-Driven Experience Container */}
      <div ref={containerRef} className="relative h-[260vh] sm:h-[290vh] w-full">
        {/* Sticky Viewport Window */}
        <div className="sticky top-16 sm:top-20 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10 flex flex-col justify-between py-4">
          
          {/* ============================================================== */}
          {/* SECTION HEADER: MINIMALIST & BOLD (EXACT ORIGINAL DESIGN) */}
          {/* ============================================================== */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] text-xs font-semibold text-[#09090b] dark:text-[#f8f9fa] shadow-2xs mb-3 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>The Enterprise Engineering Difference</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-[1.14] mb-3">
              Why Enterprise Leaders Choose <br className="hidden sm:inline" />
              Qrious Tech Over Legacy Agencies
            </h2>

            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Scroll down to explore each architectural dimension, or drag the lens to inspect the difference between traditional outsourcing and dedicated AI pods.
            </p>
          </ScrollReveal>

          {/* ============================================================== */}
          {/* OPEN CAPABILITY SELECTOR (EXACT ORIGINAL DESIGN) */}
          {/* ============================================================== */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-3 mb-6 sm:mb-8 border-b border-neutral-200/80 dark:border-white/[0.08]">
            {DIMENSIONS.map((dim, idx) => {
              const isActive = activeTabIdx === idx;
              return (
                <button
                  key={dim.id}
                  type="button"
                  onClick={() => handleTabClick(idx)}
                  className={`relative px-4 py-2 rounded-[2px] text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                    isActive
                      ? "text-[#09090b] dark:text-[#f8f9fa] font-bold"
                      : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeDimensionGlider"
                      className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#121217] rounded-[2px] border border-neutral-200/80 dark:border-white/[0.08] shadow-2xs"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 text-[10px] text-neutral-400 font-mono">
                    {dim.number}
                  </span>
                  <span className="relative z-10">{dim.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Headline (Exact Original Design with AnimatePresence) */}
          <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDim.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-1.5">
                  {activeDim.tagline}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight">
                  {activeDim.headline}
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ============================================================== */}
          {/* INTERACTIVE SPLIT COMPARISON LENS WITH WORKING DRAG */}
          {/* ============================================================== */}
          <div
            ref={stageRef}
            onPointerDown={handlePointerDown}
            className="relative w-full max-w-5xl mx-auto select-none touch-none py-6 sm:py-8 cursor-ew-resize"
          >
            {/* Subtle Stage Boundary Guide (Clean Top & Bottom Hairline) */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200/80 dark:via-white/[0.08] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200/80 dark:via-white/[0.08] to-transparent pointer-events-none" />

            {/* Precision Architectural Crosshairs */}
            <span className="absolute -top-2 left-4 sm:left-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
            <span className="absolute -top-2 right-4 sm:right-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
            <span className="absolute -bottom-2 left-4 sm:left-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
            <span className="absolute -bottom-2 right-4 sm:right-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>

            {/* Interactive Split Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDim.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                {/* ------------------------------------------------------------ */}
                {/* LEFT SIDE: TRADITIONAL OUTSOURCING (Muted, Grayscale) */}
                {/* ------------------------------------------------------------ */}
                <div
                  style={{ opacity: legacyOpacity }}
                  className="space-y-5 transition-opacity duration-150"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-bold flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-neutral-400" />
                      <span>{activeDim.legacy.title}</span>
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {activeDim.legacy.metricLabel}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-neutral-400 dark:text-neutral-500 tracking-tight">
                    {activeDim.legacy.metric}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-normal">
                    {activeDim.legacy.description}
                  </p>

                  {/* Dynamic Motion Graphic: Legacy Pipeline Stagnation */}
                  <div className="pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] space-y-3">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Workflow Bottleneck Flow:
                    </span>
                    <div className="space-y-2">
                      {activeDim.legacy.flow.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2.5 text-xs font-mono text-neutral-400 dark:text-neutral-500"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------------ */}
                {/* RIGHT SIDE: QRIOUS TECH AI ENGINEERING PODS (Vibrant, Bold) */}
                {/* ------------------------------------------------------------ */}
                <div
                  style={{ opacity: qriousOpacity }}
                  className="space-y-5 transition-opacity duration-150"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>{activeDim.qrious.title}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-[2px] bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold border border-blue-500/20">
                      {activeDim.qrious.badge}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#09090b] dark:text-[#f8f9fa] tracking-tight flex items-baseline space-x-3">
                    <span>{activeDim.qrious.metric}</span>
                    <span className="text-xs font-sans text-neutral-400 font-medium">
                      {activeDim.qrious.metricLabel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    {activeDim.qrious.description}
                  </p>

                  {/* Dynamic Motion Graphic: High-Velocity AI Pod Flow */}
                  <div className="pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] space-y-3">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider block font-semibold">
                      Accelerated Autonomous Pipeline:
                    </span>
                    <div className="space-y-2">
                      {activeDim.qrious.flow.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2.5 text-xs font-mono text-[#09090b] dark:text-[#f8f9fa] font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ============================================================ */}
            {/* FULLY FUNCTIONAL DRAG DIVIDER (EXACT ORIGINAL DESIGN) */}
            {/* ============================================================ */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none hidden lg:block"
              style={{ left: `${sliderPct}%` }}
            >
              {/* Vertical Laser Divider */}
              <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />

              {/* Draggable Center Pill with Motion Indicator */}
              <div
                onPointerDown={handlePointerDown}
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] bg-[#09090b] text-white dark:bg-[#f8f9fa] dark:text-[#09090b] text-[10px] font-mono font-bold tracking-wider pointer-events-auto cursor-ew-resize transition-transform duration-150 ${
                  isDragging ? "scale-110 shadow-2xl ring-2 ring-blue-500" : "shadow-xl hover:scale-105"
                }`}
              >
                <MoveHorizontal className="w-3 h-3 text-blue-400 dark:text-blue-600" />
                <span>DRAG</span>
              </div>
            </div>
          </div>

          {/* Cursor Manipulation Helper Notice */}
          <div className="text-center mt-3 text-[11px] font-mono text-neutral-400 flex items-center justify-center space-x-2">
            <span>⚡ Move or drag horizontally to manipulate the architectural comparison lens</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Scroll to explore all 5 dimensions</span>
            <span>↓</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 4 STAT PILLARS (EXACT ORIGINAL DESIGN) */}
      {/* ============================================================== */}
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-neutral-200/80 dark:border-white/[0.08]">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] font-mono tracking-tight mb-1.5">
              5.4x
            </div>
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
              Sprint Velocity
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
              Rapid sprint delivery vs. standard 6-month waterfall schedules.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] font-mono tracking-tight mb-1.5">
              0%
            </div>
            <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              Data Retention
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
              Air-gapped private VPC; zero model training or leakage.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] font-mono tracking-tight mb-1.5">
              99.8%
            </div>
            <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
              Ground Truth
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
              Continuous deterministic multi-agent regression tests.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] font-mono tracking-tight mb-1.5">
              100%
            </div>
            <div className="text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] uppercase tracking-wider mb-1">
              In-House Staff
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
              100+ full-time talent in Ahmedabad; zero freelancers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
