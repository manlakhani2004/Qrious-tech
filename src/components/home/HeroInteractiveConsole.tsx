"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  Search,
  Users2,
  ShieldCheck,
  Zap,
  Play,
  RotateCw,
  Sparkles,
  FileText,
  Database,
  Terminal,
  Activity,
  Check
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import PeekingMascot from "./PeekingMascot";

type TabId = "workflows" | "rag" | "squads";

interface TabData {
  id: TabId;
  label: string;
  badge: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  caseStudyUrl: string;
}

const TABS: TabData[] = [
  {
    id: "workflows",
    label: "Autonomous Workflows",
    badge: "Enterprise Automation",
    title: "Autonomous AI Pods That Eliminate Manual Bottlenecks",
    description:
      "We replace slow, repetitive operational steps with autonomous multi-agent pipelines. From document ingestion and invoice reconciliation to CRM synchronization, tasks that took hours now finish in seconds.",
    metrics: [
      { value: "84%", label: "Manual Time Saved" },
      { value: "99.8%", label: "Extraction Accuracy" },
      { value: "< 2s", label: "Average Execution Time" }
    ],
    caseStudyUrl: "/case-studies"
  },
  {
    id: "rag",
    label: "Private Enterprise RAG",
    badge: "VPC Air-Gapped Knowledge",
    title: "Private Search Across Your Entire Enterprise Knowledge Base",
    description:
      "Enable your team to query contracts, standard operating procedures, and customer histories with instant, grounded citations. All hosted inside your private cloud with zero risk of third-party model data training.",
    metrics: [
      { value: "14ms", label: "Semantic Search Latency" },
      { value: "100%", label: "Data Privacy & Air-Gapped" },
      { value: "0%", label: "External LLM Retraining" }
    ],
    caseStudyUrl: "/services/ai-ml-development"
  },
  {
    id: "squads",
    label: "Dedicated In-House Squads",
    badge: "Embedded Talent",
    title: "Senior AI Pods That Deploy Directly Into Your Engineering Team",
    description:
      "Full-stack developers, machine learning engineers, and system architects from our Ahmedabad HQ working directly within your codebase, GitHub repositories, and daily standup sprints.",
    metrics: [
      { value: "100+", label: "In-House Engineers" },
      { value: "14 Days", label: "Working POC Delivery" },
      { value: "100%", label: "IP Ownership Transferred" }
    ],
    caseStudyUrl: "/how-we-work"
  }
];

export default function HeroInteractiveConsole() {
  const [activeTabId, setActiveTabId] = useState<TabId>("workflows");
  const [workflowRunning, setWorkflowRunning] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(0);

  // Sample RAG search state
  const [selectedRagQuery, setSelectedRagQuery] = useState(0);

  const ragQueries = [
    {
      q: "What is our customer SLA response requirement for critical incidents?",
      source: "Master Service Agreement §12.4",
      score: "99.4% Match",
      answer:
        "Critical (P1) incidents require initial engineer acknowledgment within 15 minutes and root-cause status reporting every 60 minutes until resolution."
    },
    {
      q: "How does our data retention policy handle client backups after contract end?",
      source: "Security & Privacy Protocol v4.2",
      score: "98.9% Match",
      answer:
        "All client data in secondary backup vaults is cryptographically purged within 30 days of contract termination, with an audit certificate provided."
    }
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  // Motion 3D Parallax Tilt Values responding dynamically to cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [3.5, -3.5]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-3.5, 3.5]);

  // Spotlight coordinates on container
  const spotlightX = useMotionValue(350);
  const spotlightY = useMotionValue(150);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalized coordinates between -0.5 and 0.5
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);

    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const runWorkflowSimulation = () => {
    if (workflowRunning) return;
    setWorkflowRunning(true);
    setWorkflowStep(1);

    setTimeout(() => {
      setWorkflowStep(2);
      setTimeout(() => {
        setWorkflowStep(3);
        setTimeout(() => {
          setWorkflowRunning(false);
        }, 1200);
      }, 1000);
    }, 900);
  };

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl 2xl:max-w-5xl mx-auto mt-12 sm:mt-16 2xl:mt-18 select-none perspective-[1200px]"
    >
      {/* GitHub Copilot-style Cartoon Mascot peeking over the shelf and staring at cursor */}
      <div className="absolute -top-12 sm:-top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <PeekingMascot />
      </div>

      {/* 3D Motion Perspective Card Wrapper with Animos-Style Gentle Floating Levitation */}
      <motion.div
        animate={{ y: [-3.5, 3.5, -3.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative rounded-none sm:rounded-[3px] border border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-[#0c0c10] shadow-[0_1px_3px_rgba(0,0,0,0.05),0_12px_36px_rgba(0,0,0,0.04)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
      >
        {/* Continuous Animated Border Beam Highlight (Prompt-Motion / Magic UI style) */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 dark:via-sky-400/60 to-transparent pointer-events-none" />

        {/* Dynamic Cursor Spotlight Radial Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) =>
                `radial-gradient(500px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.09), transparent 75%)`
            )
          }}
        />

        {/* macOS Window Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 border-b border-neutral-200/80 dark:border-white/[0.08] bg-[#f8f9fa] dark:bg-white/[0.03]">
          {/* macOS Traffic Lights + Breadcrumb */}
          <div className="flex items-center space-x-2.5">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-emerald-500/40" />
            </div>
            <div className="h-3.5 w-px bg-neutral-200 dark:bg-white/10 mx-1 hidden sm:block" />
            <div className="flex items-center space-x-1.5 text-[11px] sm:text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400">
              <Terminal className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
              <span className="text-[#09090b] dark:text-white font-semibold">qtech://ai-engine.v4</span>
              <span>/</span>
              <span className="text-blue-600 dark:text-sky-400 font-semibold">{activeTab.id}</span>
            </div>
          </div>

          {/* Right: Window Status */}
          <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 hidden sm:flex">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Production Ready</span>
          </div>
        </div>

        {/* Tab Navigation with Motion.dev Fluid Pill Indicator */}
        <div className="px-4 sm:px-6 py-2 border-b border-neutral-200/80 dark:border-white/[0.08] bg-white dark:bg-black/20 flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
            {TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative px-3 py-1.5 rounded-[2px] text-xs font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-black dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="macConsoleTabCompact"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-[2px] bg-white dark:bg-white/10 shadow-2xs border border-neutral-200/80 dark:border-white/15"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Area */}
        <div className="p-4 sm:p-6 lg:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center"
            >
              {/* Left Column: Business Problem, Solution & Metrics (5 cols) */}
              <div className="lg:col-span-5 text-left space-y-3.5">
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] text-[11px] font-semibold text-[#09090b] dark:text-[#f8f9fa]">
                  <Sparkles className="w-3 dot-3 text-blue-600 dark:text-blue-400" />
                  <span>{activeTab.badge}</span>
                </div>

                <h3 className="text-base sm:text-lg lg:text-[21px] font-bold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-snug">
                  {activeTab.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                  {activeTab.description}
                </p>

                {/* 3 Compact Enterprise Metric Badges */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {activeTab.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-2.5 rounded-[2px] bg-[#f8f9fa] dark:bg-white/[0.03] border border-neutral-200/80 dark:border-white/[0.08] text-left"
                    >
                      <div className="text-sm sm:text-base font-black text-[#09090b] dark:text-[#f8f9fa] tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary CTA Link */}
                <div className="pt-1">
                  <Link
                    href={activeTab.caseStudyUrl}
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#09090b] dark:text-[#f8f9fa] hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span>Explore Verified Case Studies &amp; Outcomes</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean, Authentic Interactive Visual (7 cols) */}
              <div className="lg:col-span-7">
                {activeTab.id === "workflows" && (
                  <div className="p-3.5 sm:p-4 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] shadow-inner text-left">
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-neutral-200/70 dark:border-white/[0.08]">
                      <div>
                        <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                          Autonomous Pipeline
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#09090b] dark:text-[#f8f9fa]">
                          Invoice Ingestion &amp; ERP Reconciliation
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={runWorkflowSimulation}
                        disabled={workflowRunning}
                        className="inline-flex items-center space-x-1 px-3 py-1 rounded-[2px] bg-black text-white dark:bg-white dark:text-black text-[11px] font-semibold cursor-pointer disabled:opacity-50 transition-colors shadow-2xs"
                      >
                        {workflowRunning ? (
                          <>
                            <RotateCw className="w-2.5 h-2.5 animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-2.5 h-2.5 fill-current" />
                            <span>Run Live Simulation</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    {/* 3 Step Visual Pipeline with Micro-Animations */}
                    <div className="space-y-2">
                      {/* Step 1 */}
                      <div
                        className={`p-2.5 rounded-[2px] border transition-all duration-300 flex items-center justify-between ${
                          workflowStep >= 1
                            ? "bg-blue-50/80 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700/50 shadow-xs"
                            : "bg-white dark:bg-white/[0.02] border-neutral-200 dark:border-white/[0.07]"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <div
                            className={`w-6 h-6 rounded-[2px] flex items-center justify-center font-bold text-xs ${
                              workflowStep >= 1
                                ? "bg-blue-600 text-white"
                                : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
                            }`}
                          >
                            <FileText className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black dark:text-white">
                              1. Inbound Ingestion
                            </div>
                            <div className="text-[10.5px] text-neutral-500 dark:text-neutral-400">
                              PDF Invoice #INV-8492 received ($24,500.00)
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                          {workflowStep >= 1 ? "✓ Ingested" : "Standby"}
                        </span>
                      </div>

                      {/* Step 2 */}
                      <div
                        className={`p-2.5 rounded-[2px] border transition-all duration-300 flex items-center justify-between ${
                          workflowStep >= 2
                            ? "bg-purple-50/80 dark:bg-purple-950/20 border-purple-300 dark:border-purple-700/50 shadow-xs"
                            : "bg-white dark:bg-white/[0.02] border-neutral-200 dark:border-white/[0.07]"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <div
                            className={`w-6 h-6 rounded-[2px] flex items-center justify-center font-bold text-xs ${
                              workflowStep >= 2
                                ? "bg-purple-600 text-white"
                                : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
                            }`}
                          >
                            <ShieldCheck className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black dark:text-white">
                              2. AI Rule &amp; Schema Validation
                            </div>
                            <div className="text-[10.5px] text-neutral-500 dark:text-neutral-400">
                              PO #4092 matched • Line items verified • 0 variances
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                          {workflowStep >= 2 ? "✓ Validated" : "Awaiting Step 1"}
                        </span>
                      </div>

                      {/* Step 3 */}
                      <div
                        className={`p-2.5 rounded-[2px] border transition-all duration-300 flex items-center justify-between ${
                          workflowStep >= 3
                            ? "bg-emerald-50/80 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700/50 shadow-xs"
                            : "bg-white dark:bg-white/[0.02] border-neutral-200 dark:border-white/[0.07]"
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <div
                            className={`w-6 h-6 rounded-[2px] flex items-center justify-center font-bold text-xs ${
                              workflowStep >= 3
                                ? "bg-emerald-600 text-white"
                                : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
                            }`}
                          >
                            <Database className="w-3 h-3" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-black dark:text-white">
                              3. Enterprise ERP Dispatch
                            </div>
                            <div className="text-[10.5px] text-neutral-500 dark:text-neutral-400">
                              Synced to NetSuite ERP &amp; payment scheduled
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {workflowStep >= 3 ? "✓ Synced (< 1.4s)" : "Queued"}
                        </span>
                      </div>
                    </div>

                    {/* Execution Outcome */}
                    <div className="mt-2.5 pt-2 border-t border-neutral-200/70 dark:border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                      <span>Human oversight: <strong className="text-[#09090b] dark:text-[#f8f9fa] font-semibold">Exception Only</strong></span>
                      <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Live Pipeline Verified</span>
                    </div>
                  </div>
                )}

                {activeTab.id === "rag" && (
                  <div className="p-3.5 sm:p-4 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] shadow-inner text-left">
                    <div className="pb-2 mb-3 border-b border-neutral-200/70 dark:border-white/[0.08]">
                      <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-0.5">
                        Private Cloud Knowledge Query
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#09090b] dark:text-[#f8f9fa]">
                        Zero-Leakage Air-Gapped Search Test
                      </div>
                    </div>

                    {/* Query Switcher Pills */}
                    <div className="flex flex-col sm:flex-row gap-1.5 mb-3">
                      {ragQueries.map((item, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => setSelectedRagQuery(qIdx)}
                          className={`text-left p-2 rounded-[2px] border text-[11px] font-medium transition-colors cursor-pointer flex-1 ${
                            selectedRagQuery === qIdx
                              ? "bg-white dark:bg-[#0c0c10] border-blue-500 text-[#09090b] dark:text-[#f8f9fa] shadow-2xs"
                              : "bg-white/60 dark:bg-white/[0.02] border-neutral-200/80 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-400 hover:text-[#09090b] dark:hover:text-[#f8f9fa]"
                          }`}
                        >
                          <div className="truncate">{item.q}</div>
                        </button>
                      ))}
                    </div>

                    {/* Grounded Result Display */}
                    <div className="p-3 rounded-[2px] bg-white dark:bg-[#0c0c10] border border-neutral-200/80 dark:border-white/[0.08] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-[2px] bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          <span>{ragQueries[selectedRagQuery].source}</span>
                        </span>
                        <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-[10.5px]">
                          {ragQueries[selectedRagQuery].score}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal">
                        {ragQueries[selectedRagQuery].answer}
                      </p>

                      <div className="pt-1.5 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-[10.5px] text-neutral-400">
                        <span>Model: Private Llama-3 70B</span>
                        <span className="text-blue-600 dark:text-blue-400">Zero data retention</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab.id === "squads" && (
                  <div className="p-3.5 sm:p-4 rounded-[2px] bg-[#f8f9fa] dark:bg-[#121217] border border-neutral-200/80 dark:border-white/[0.08] shadow-inner text-left">
                    <div className="pb-2 mb-3 border-b border-neutral-200/70 dark:border-white/[0.08] flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                          Dedicated Pod Architecture
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#09090b] dark:text-[#f8f9fa]">
                          In-House Ahmedabad Squad Topology
                        </div>
                      </div>
                      <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        Full-Time Squad
                      </span>
                    </div>

                    {/* 4 Pod Roles Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                      {[
                        { role: "AI Systems Architect", focus: "Architecture & Security" },
                        { role: "Senior LLM / Agent Eng", focus: "Agent Swarms & Eval" },
                        { role: "Full-Stack Engineer", focus: "Next.js / FastAPI / APIs" },
                        { role: "QA & Reliability Lead", focus: "Automated Benchmarks" }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="p-2.5 rounded-[2px] bg-white dark:bg-[#0c0c10] border border-neutral-200/80 dark:border-white/[0.08]"
                        >
                          <div className="text-xs font-bold text-[#09090b] dark:text-[#f8f9fa]">
                            {item.role}
                          </div>
                          <div className="text-[10.5px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                            {item.focus}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-[2px] bg-white/70 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                      <span>Delivery Cycle: <strong className="text-[#09090b] dark:text-[#f8f9fa] font-semibold">14-Day Production Sprints</strong></span>
                      <span>Direct Slack &amp; Git Access</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
