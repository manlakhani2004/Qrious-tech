"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Zap,
  Cpu,
  ArrowRight,
  Database,
  FileText,
  Search,
  Lock,
  CheckCircle2,
  Workflow,
  Check,
  Play,
  RotateCw,
  GitCommit,
  GitPullRequest,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";

// Reusable Spotlight Card Component for Vercel/Stripe Cursor Manipulation
function BentoCard({
  children,
  className = "",
  colSpan = "lg:col-span-6"
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-[28px] border border-neutral-200/80 dark:border-white/[0.08] bg-[#fbfbfc] dark:bg-[#0e0e11] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-2xl transition-all duration-300 hover:border-neutral-300 dark:hover:border-white/20 ${colSpan} ${className}`}
    >
      {/* Dynamic Cursor Spotlight Beam (Vercel & Stripe style) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) =>
              `radial-gradient(480px circle at ${x}px ${y}px, rgba(56, 189, 248, 0.08), transparent 70%)`
          )
        }}
      />

      {/* Subtle top edge specular highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300/40 dark:via-white/15 to-transparent pointer-events-none" />

      {children}
    </motion.div>
  );
}

export default function AboutProductIdeaSection() {
  // Tile 1 Scenario & Simulation State
  const [activeScenario, setActiveScenario] = useState<"doc" | "support" | "db">("doc");
  const [isSimulatingTile1, setIsSimulatingTile1] = useState(false);
  const [simStepTile1, setSimStepTile1] = useState(0);

  // Tile 2 RAG Query State
  const [activeRagQuery, setActiveRagQuery] = useState(0);

  // Tile 3 Active Sprint Milestone State
  const [activeSprintStep, setActiveSprintStep] = useState(2);

  const scenarios = {
    doc: {
      name: "Invoice & Doc Ingestion",
      tagline: "PDF & OCR ➔ Semantic Extraction ➔ ERP Match",
      node1: "Inbound Document",
      node2: "AI Schema & Policy Check",
      node3: "NetSuite ERP Sync",
      sample: {
        title: "Vendor Invoice #INV-8842",
        detail: "$34,800.00 • 3 line items matched PO #4092",
        latency: "140ms",
        accuracy: "99.8%"
      }
    },
    support: {
      name: "Customer Operations Agent",
      tagline: "Omnichannel Message ➔ Intent ➔ Automated Resolution",
      node1: "Customer Inbound",
      node2: "Account & SLA Evaluation",
      node3: "CRM Automated Action",
      sample: {
        title: "Enterprise SLA Query",
        detail: "SLA Clause §14 retrieved • Auto-dispatched",
        latency: "115ms",
        accuracy: "99.9%"
      }
    },
    db: {
      name: "ERP & Database Reconciliation",
      tagline: "CRM Event ➔ Logic Check ➔ Live Ledger Sync",
      node1: "Transaction Webhook",
      node2: "Ledger Discrepancy Filter",
      node3: "PostgreSQL Ledger Update",
      sample: {
        title: "Cross-System Ledger Update",
        detail: "Validated 12,400 rows • 0 variances found",
        latency: "92ms",
        accuracy: "100%"
      }
    }
  };

  const ragQueries = [
    {
      query: "What is our enterprise dispute resolution SLA?",
      citation: "Enterprise Master Services Agreement • Sec 8.4",
      answer: "Disputes must be acknowledged within 2 business hours and resolved within 5 banking days with a verifiable audit log.",
      latency: "14ms",
      match: "0.984"
    },
    {
      query: "Show compliance policy for cloud data residency",
      citation: "Global InfoSec Standard v3.1 • Page 42",
      answer: "All client records and model inference pipelines must execute strictly within designated regional VPC boundaries.",
      latency: "18ms",
      match: "0.991"
    },
    {
      query: "What is the escalation procedure for P1 outages?",
      citation: "Operations Incident Handbook • Clause 2.1",
      answer: "On-call engineering leads are paged automatically via PagerDuty within 60 seconds with live Slack war-room creation.",
      latency: "12ms",
      match: "0.978"
    }
  ];

  const currentScenario = scenarios[activeScenario];
  const currentRag = ragQueries[activeRagQuery];

  const runTile1Simulation = () => {
    if (isSimulatingTile1) return;
    setIsSimulatingTile1(true);
    setSimStepTile1(1);

    setTimeout(() => {
      setSimStepTile1(2);
      setTimeout(() => {
        setSimStepTile1(3);
        setTimeout(() => {
          setIsSimulatingTile1(false);
        }, 1200);
      }, 1000);
    }, 1000);
  };

  return (
    <section id="capabilities" className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-100 dark:border-neutral-800 relative transition-colors duration-200 isolate overflow-hidden">
      {/* Ambient Radial Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[950px] h-[350px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>Enterprise AI Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            Intelligent Systems Engineered <br className="hidden sm:inline" />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              For Real Business Scale
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            We replace manual bottlenecks with autonomous multi-agent workflows, zero-leakage enterprise RAG, and senior in-house engineering squads that deploy directly into your stack.
          </p>
        </ScrollReveal>

        {/* Vercel / Stripe Style 4-Tile Interactive Bento Grid with Cursor Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 2xl:gap-7">
          {/* ========================================================================= */}
          {/* TILE 1 (Col Span 7): Autonomous Multi-Agent Swarms */}
          {/* ========================================================================= */}
          <BentoCard colSpan="lg:col-span-7">
            <div>
              {/* Header with Title and Mode Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-md">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight">
                      Autonomous Multi-Agent Swarms
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      Cross-System Workflow Automation
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                  <span>Deterministic Guardrails</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                Specialized agents handle repetitive business procedures end-to-end: parsing unstructured files, evaluating policy guardrails, and updating existing databases without human latency.
              </p>

              {/* Scenario Switcher with Motion.dev Fluid Pill */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(["doc", "support", "db"] as const).map((key) => {
                  const isActive = activeScenario === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveScenario(key)}
                      className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors duration-150 ${
                        isActive
                          ? "text-white dark:text-black font-bold"
                          : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeBentoScenarioPill"
                          className="absolute inset-0 rounded-full bg-black dark:bg-white shadow-xs"
                          transition={{ type: "spring", stiffness: 450, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{scenarios[key].name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Pipeline Showcase (Clean, Minimalist, Motion.dev Style) */}
              <div className="bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-white/[0.08] rounded-2xl p-5 shadow-xs mb-4">
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-neutral-100 dark:border-white/5">
                  <div className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-400">
                    <span>Active Pipeline: </span>
                    <strong className="text-black dark:text-white font-semibold">
                      {currentScenario.tagline}
                    </strong>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={runTile1Simulation}
                    disabled={isSimulatingTile1}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold cursor-pointer disabled:opacity-50 transition-colors shadow-2xs"
                  >
                    {isSimulatingTile1 ? (
                      <>
                        <RotateCw className="w-3 h-3 animate-spin" />
                        <span>Running...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Simulate</span>
                      </>
                    )}
                  </motion.button>
                </div>

                {/* 3 Clear Pipeline Nodes Connected with SVG Beam */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
                  {/* Node 1 */}
                  <div
                    className={`p-3.5 rounded-xl border transition-all duration-300 text-left ${
                      simStepTile1 >= 1
                        ? "bg-blue-50/70 dark:bg-blue-950/20 border-blue-400 dark:border-blue-700/50 shadow-xs"
                        : "bg-neutral-50/80 dark:bg-white/[0.02] border-neutral-200/70 dark:border-white/[0.06]"
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Step 01
                    </div>
                    <div className="text-xs font-bold text-black dark:text-white truncate">
                      {currentScenario.node1}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {simStepTile1 >= 1 ? "✓ Verified Ingest" : "Awaiting payload"}
                    </div>
                  </div>

                  {/* Node 2 */}
                  <div
                    className={`p-3.5 rounded-xl border transition-all duration-300 text-left ${
                      simStepTile1 >= 2
                        ? "bg-purple-50/70 dark:bg-purple-950/20 border-purple-400 dark:border-purple-700/50 shadow-xs"
                        : "bg-neutral-50/80 dark:bg-white/[0.02] border-neutral-200/70 dark:border-white/[0.06]"
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Step 02
                    </div>
                    <div className="text-xs font-bold text-black dark:text-white truncate">
                      {currentScenario.node2}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {simStepTile1 >= 2 ? "✓ Invariants Held" : "Rule evaluation"}
                    </div>
                  </div>

                  {/* Node 3 */}
                  <div
                    className={`p-3.5 rounded-xl border transition-all duration-300 text-left ${
                      simStepTile1 >= 3
                        ? "bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-400 dark:border-emerald-700/50 shadow-xs"
                        : "bg-neutral-50/80 dark:bg-white/[0.02] border-neutral-200/70 dark:border-white/[0.06]"
                    }`}
                  >
                    <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Step 03
                    </div>
                    <div className="text-xs font-bold text-black dark:text-white truncate">
                      {currentScenario.node3}
                    </div>
                    <div className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {simStepTile1 >= 3 ? "✓ Synced (140ms)" : "Ready to commit"}
                    </div>
                  </div>
                </div>

                {/* Outcome strip */}
                <div className="mt-4 pt-3.5 border-t border-neutral-100 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                  <div className="flex items-center space-x-2 text-neutral-800 dark:text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">{currentScenario.sample.title}:</span>
                    <span className="text-neutral-500 dark:text-neutral-400 truncate">
                      {currentScenario.sample.detail}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 font-mono text-[11px] text-neutral-500 shrink-0">
                    <span>P99: {currentScenario.sample.latency}</span>
                    <span className="font-bold text-neutral-700 dark:text-neutral-300">
                      {currentScenario.sample.accuracy}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60 dark:border-white/10 mt-2">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                LangGraph • Multi-Agent Swarms • Deterministic Guardrails
              </span>
              <Link
                href="/services/ai-ml-development"
                className="inline-flex items-center space-x-1 text-xs font-bold text-black dark:text-white hover:underline group-hover:translate-x-1 transition-transform"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* ========================================================================= */}
          {/* TILE 2 (Col Span 5): Zero-Leakage Private Knowledge RAG */}
          {/* ========================================================================= */}
          <BentoCard colSpan="lg:col-span-5">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-md">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight">
                      100% Private Knowledge RAG
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      Zero Data Leakage • Isolated Cloud VPC
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-white/10 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5 font-normal">
                Connect your internal company files, manuals, and records into an accurate, sub-second semantic search engine that never shares data with public model trainers.
              </p>

              {/* Interactive Query Simulator with Motion Spring Highlight */}
              <div className="bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-white/[0.08] rounded-2xl p-4 shadow-xs space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 pb-2 border-b border-neutral-100 dark:border-white/5">
                  <Search className="w-3.5 h-3.5 text-blue-500" />
                  <span>Click to Test Real Enterprise Query:</span>
                </div>

                {/* Clickable Queries */}
                <div className="space-y-1.5">
                  {ragQueries.map((item, idx) => {
                    const isSelected = activeRagQuery === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveRagQuery(idx)}
                        className={`relative w-full text-left p-2.5 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "font-bold text-black dark:text-white"
                            : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeRagHighlightPill"
                            className="absolute inset-0 bg-neutral-100 dark:bg-white/[0.08] border border-neutral-200/90 dark:border-white/10 rounded-xl"
                            transition={{ type: "spring", stiffness: 450, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10 truncate">{item.query}</span>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60 relative z-10" />
                      </button>
                    );
                  })}
                </div>

                {/* Live Grounded Citation Result */}
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    <span className="text-blue-600 dark:text-sky-400 truncate max-w-[220px]">
                      {currentRag.citation}
                    </span>
                    <span className="font-mono text-neutral-500 dark:text-neutral-400">
                      Match: {currentRag.match} • {currentRag.latency}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                    &ldquo;{currentRag.answer}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60 dark:border-white/10 mt-2">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                Qdrant • Milvus • Cross-Encoder Reranking
              </span>
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                SOC2 &amp; HIPAA Ready
              </span>
            </div>
          </BentoCard>

          {/* ========================================================================= */}
          {/* TILE 3 (Col Span 5): 14-Day Working POC Guarantee */}
          {/* ========================================================================= */}
          <BentoCard colSpan="lg:col-span-5">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-md">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight">
                      14-Day Working POC
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      De-Risked AI Adoption Sprint
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200">
                  Fixed 14 Calendar Days
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5 font-normal">
                Validate real business ROI before major commitments. We deliver a functional, live Proof of Concept wired to your data schemas in exactly 14 calendar days.
              </p>

              {/* Interactive 3-Phase Sprint Roadmap */}
              <div className="space-y-2.5 mb-4">
                {[
                  {
                    step: 1,
                    title: "Days 1–3: Pipeline & Schema Audit",
                    desc: "Identify operational bottlenecks, schema readiness, and zero-leakage security boundaries."
                  },
                  {
                    step: 2,
                    title: "Days 4–9: Agentic & RAG Build",
                    desc: "Engineer custom multi-agent workflows, safety guardrails, and private vector search."
                  },
                  {
                    step: 3,
                    title: "Days 10–14: Live Benchmark & Executive Demo",
                    desc: "Validate accuracy, latency, and business ROI with your stakeholder team."
                  }
                ].map((s, idx) => {
                  const isCurrent = activeSprintStep === s.step;
                  return (
                    <div
                      key={s.step}
                      onClick={() => setActiveSprintStep(s.step)}
                      className={`p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isCurrent
                          ? "bg-white dark:bg-[#151518] border-neutral-300 dark:border-white/20 shadow-xs"
                          : "bg-neutral-50/70 dark:bg-white/[0.02] border-neutral-200/60 dark:border-white/[0.05] hover:bg-white/80 dark:hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                            isCurrent
                              ? "bg-black text-white dark:bg-white dark:text-black"
                              : "bg-neutral-200/80 dark:bg-white/10 text-neutral-700 dark:text-neutral-300"
                          }`}
                        >
                          {s.step === 3 ? "✓" : s.step}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-black dark:text-white">
                            {s.title}
                          </div>
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                            {s.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60 dark:border-white/10 mt-2">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                Fixed Scope • Zero Vendor Lock-In
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1 text-xs font-bold text-black dark:text-white hover:underline group-hover:translate-x-1 transition-transform"
              >
                <span>Request POC</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>

          {/* ========================================================================= */}
          {/* TILE 4 (Col Span 7): Dedicated In-House AI Engineering Pods */}
          {/* ========================================================================= */}
          <BentoCard colSpan="lg:col-span-7">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-md">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight">
                      Dedicated AI Engineering Pods
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      Ahmedabad HQ • Direct Embedded Talent
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200">
                  100+ Engineers
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-normal">
                Skip hiring delays. Senior machine learning specialists, cloud architects, and full-stack software engineers join your team directly inside your Slack, GitHub, and Jira workflows.
              </p>

              {/* GitHub-Style Squad Deployment Cockpit (Replacing the toy laptop photo) */}
              <div className="bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-white/[0.08] rounded-2xl p-4 sm:p-5 shadow-xs mb-4">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100 dark:border-white/5 font-mono text-[11px] text-neutral-500">
                  <div className="flex items-center space-x-2">
                    <GitPullRequest className="w-3.5 h-3.5 text-blue-500" />
                    <span className="font-bold text-black dark:text-white">qtech/engineering-pod-v4</span>
                  </div>
                  <span>Ahmedabad Engineering HQ</span>
                </div>

                {/* 4 Pod Roles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  {[
                    {
                      role: "AI Systems Architect",
                      focus: "Enterprise Security & Topology",
                      badge: "12+ Yrs Exp"
                    },
                    {
                      role: "Senior LLM / Agent Eng",
                      focus: "Multi-Agent Swarms & Eval",
                      badge: "Production Pod"
                    },
                    {
                      role: "Full-Stack Systems Eng",
                      focus: "Next.js 15 • FastAPI • Redis",
                      badge: "Daily Standups"
                    },
                    {
                      role: "QA & Reliability Lead",
                      focus: "Automated Regression Benchmarks",
                      badge: "SOC2 Verified"
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/60 dark:border-white/5 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs font-bold text-black dark:text-white">
                          {item.role}
                        </div>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                          {item.focus}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 bg-neutral-200/60 dark:bg-white/5 px-2 py-0.5 rounded-full shrink-0">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Delivery Protocol Guarantee Strip */}
                <div className="pt-3 border-t border-neutral-100 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Daily Standups &amp; Timezone Overlap</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                    <span>100% Code &amp; IP Transferred</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60 dark:border-white/10 mt-2">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                Established 2017 • 500+ Deployments
              </span>
              <Link
                href="/how-we-work"
                className="inline-flex items-center space-x-1 text-xs font-bold text-black dark:text-white hover:underline group-hover:translate-x-1 transition-transform"
              >
                <span>How We Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
