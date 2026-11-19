"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  MoveHorizontal
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

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
  const stageRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const activeDim = DIMENSIONS[activeTabIdx];

  // Motion cursor coordinates for interactive 3D tilt & dynamic glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const updateSliderFromClientX = useCallback((clientX: number) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const rawPct = ((clientX - rect.left) / rect.width) * 100;
    const clampedPct = Math.max(12, Math.min(88, rawPct));
    setSliderPct(clampedPct);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateSliderFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(relX * 24);
    mouseY.set(relY * 24);

    if (isDraggingRef.current) {
      updateSliderFromClientX(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <section
      id="why-choose-us"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-100 dark:border-neutral-800 relative transition-colors duration-200 overflow-hidden isolate"
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

      {/* Subtle Atmospheric Ambient Glow (Stripe / Animos style) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[1000px] h-[350px] bg-gradient-to-r from-blue-500/8 via-indigo-500/8 to-purple-500/8 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER: MINIMALIST & BOLD (NO CARDS) */}
        {/* ============================================================== */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[2px] bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>The Enterprise Engineering Difference</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14] mb-4">
            Why Enterprise Leaders Choose <br className="hidden sm:inline" />
            Qrious Tech Over Legacy Agencies
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Drag or slide with your cursor to inspect the architectural difference between traditional offshore outsourcing and dedicated, production-grade AI pods.
          </p>
        </ScrollReveal>

        {/* ============================================================== */}
        {/* OPEN CAPABILITY SELECTOR (NO CARD BOXES!) */}
        {/* ============================================================== */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-8 sm:mb-12 border-b border-neutral-100 dark:border-neutral-800">
          {DIMENSIONS.map((dim, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={dim.id}
                type="button"
                onClick={() => setActiveTabIdx(idx)}
                className={`relative px-4 py-2.5 rounded-[2px] text-xs font-mono transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                  isActive
                    ? "text-black dark:text-white font-bold"
                    : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeDimensionGlider"
                    className="absolute inset-0 bg-neutral-100 dark:bg-white/[0.08] rounded-[2px] border border-neutral-200/90 dark:border-white/15 shadow-2xs"
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

        {/* Active Dimension Headline (Open on Page) */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDim.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block mb-2">
                {activeDim.tagline}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                {activeDim.headline}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE CURSOR-MANIPULATED GRAPHIC (NO CARDS!) */}
        {/* ============================================================== */}
        <div
          ref={stageRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="relative w-full max-w-5xl mx-auto select-none touch-none py-6 sm:py-10 cursor-ew-resize"
        >
          {/* Subtle Stage Boundary Guide (Clean Top & Bottom Hairline) */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent pointer-events-none" />

          {/* Vercel-Style Precision Architectural Crosshairs (Structural Corner & Center Divider Accents Only) */}
          <span className="absolute -top-2 left-4 sm:left-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
          <span className="absolute -top-2 right-4 sm:right-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
          <span className="absolute -bottom-2 left-4 sm:left-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
          <span className="absolute -bottom-2 right-4 sm:right-0 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] text-neutral-400/80 dark:text-neutral-500/80 select-none pointer-events-none">+</span>

          {/* Interactive Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ------------------------------------------------------------ */}
            {/* LEFT SIDE: TRADITIONAL OUTSOURCING (Muted, Grayscale) */}
            {/* ------------------------------------------------------------ */}
            <motion.div
              style={{
                opacity: useTransform(
                  useMotionValue(sliderPct),
                  [10, 50, 90],
                  [1, 0.85, 0.4]
                )
              }}
              className="space-y-6"
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
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
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
            </motion.div>

            {/* ------------------------------------------------------------ */}
            {/* RIGHT SIDE: QRIOUS TECH AI ENGINEERING PODS (Vibrant, Bold) */}
            {/* ------------------------------------------------------------ */}
            <motion.div
              style={{
                opacity: useTransform(
                  useMotionValue(sliderPct),
                  [10, 50, 90],
                  [0.4, 0.85, 1]
                )
              }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{activeDim.qrious.title}</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-[2px] bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold border border-blue-200 dark:border-blue-500/20">
                  {activeDim.qrious.badge}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-black dark:text-white tracking-tight flex items-baseline space-x-3">
                <span>{activeDim.qrious.metric}</span>
                <span className="text-xs font-sans text-neutral-400 font-medium">
                  {activeDim.qrious.metricLabel}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {activeDim.qrious.description}
              </p>

              {/* Dynamic Motion Graphic: High-Velocity AI Pod Flow */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 uppercase tracking-wider block font-semibold">
                  Accelerated Autonomous Pipeline:
                </span>
                <div className="space-y-2">
                  {activeDim.qrious.flow.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2.5 text-xs font-mono text-black dark:text-neutral-200 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* INTERACTIVE CURSOR MANIPULATOR DIVIDER (MOTION & SPRING) */}
          {/* ============================================================ */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none hidden lg:block"
            style={{ left: `${sliderPct}%` }}
          >
            {/* Vertical Laser Divider */}
            <div className="absolute top-0 bottom-0 -left-px w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent" />

            {/* Draggable Center Pill with Motion Indicator */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center space-x-1.5 px-3 py-1.5 rounded-[2px] bg-black text-white dark:bg-white dark:text-black shadow-xl text-[10px] font-mono font-bold tracking-wider pointer-events-auto cursor-ew-resize">
              <MoveHorizontal className="w-3 h-3 text-blue-400 dark:text-blue-600" />
              <span>DRAG</span>
            </div>
          </div>
        </div>

        {/* Cursor Manipulation Helper Notice */}
        <div className="text-center mt-4 mb-16 text-[11px] font-mono text-neutral-400">
          ⚡ Move or drag horizontally to manipulate the architectural comparison lens
        </div>

        {/* ============================================================== */}
        {/* OPEN 4 STAT PILLARS (NO ENCLOSING CARD BOXES) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-neutral-100 dark:border-neutral-800/80">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white font-mono tracking-tight mb-1.5">
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
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white font-mono tracking-tight mb-1.5">
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
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white font-mono tracking-tight mb-1.5">
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
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white font-mono tracking-tight mb-1.5">
              100%
            </div>
            <div className="text-xs font-bold text-black dark:text-white uppercase tracking-wider mb-1">
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
