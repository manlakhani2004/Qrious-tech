"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Workflow,
  Search,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Database,
  Cpu,
  GitCommit,
  Check,
  Play,
  RotateCw
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

export default function AboutProductIdeaSection() {
  // Pillar 1: Interactive Agent Simulation State
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(2); // Default to completed state for instant aesthetic

  // Pillar 2: Interactive Query Selection
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const ragExamples = [
    {
      query: "Vendor SLA & Incident Response Protocol",
      source: "Master Service Agreement §14.2",
      excerpt: "Critical (P1) incidents require engineer acknowledgment in < 15m and live hourly updates.",
      confidence: "99.8% Match"
    },
    {
      query: "Client Data Purge & Vault Retention",
      source: "Security Architecture Guide v3.1",
      excerpt: "All client backups are cryptographically destroyed within 30 days of contract termination.",
      confidence: "99.4% Match"
    }
  ];

  const runPipelineSim = () => {
    if (pipelineRunning) return;
    setPipelineRunning(true);
    setPipelineStep(0);

    setTimeout(() => setPipelineStep(1), 500);
    setTimeout(() => setPipelineStep(2), 1200);
    setTimeout(() => setPipelineRunning(false), 1500);
  };

  return (
    <section
      id="capabilities"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden"
    >
      {/* Modern Background Design: Linear / Raycast Stippled Micro-Dot Matrix */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(rgba(0,0,0,0.06)_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(rgba(255,255,255,0.06)_1.2px,transparent_1.2px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_45%,transparent_100%)]" />

      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[950px] h-[360px] bg-gradient-to-tr from-blue-600/6 via-cyan-500/6 to-purple-600/6 blur-[140px] pointer-events-none -z-20 rounded-full" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* ============================================================== */}
        {/* SECTION HEADER: MINIMALIST & BOLD (NO NESTED CARDS)            */}
        {/* ============================================================== */}
        <ScrollReveal className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>01 / Core Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            How We Bring AI Into Your Core Operations
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
            We don’t build generic chatbots or prompt wrappers. We engineer deterministic multi-agent swarms, private enterprise knowledge engines, and custom software that integrate directly with your existing infrastructure.
          </p>
        </ScrollReveal>

        {/* ============================================================== */}
        {/* 3-PILLAR OPEN ARCHITECTURAL GRID (VERCEL & STRIPE MINIMALISM)  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/80 dark:divide-white/10 border-t border-b border-neutral-200/80 dark:border-white/10">
          {/* ============================================================ */}
          {/* PILLAR 01: AUTONOMOUS AGENT SWARMS                           */}
          {/* ============================================================ */}
          <div className="py-10 lg:py-12 lg:pr-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  01 // Operations
                </span>
                <span className="p-2 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200">
                  <Workflow className="w-4 h-4 text-blue-500" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mb-3">
                Autonomous Agent Swarms
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                Eliminate manual operational bottlenecks. We build self-correcting multi-agent pipelines that ingest invoices, validate data against business schemas, and sync records into your ERP and CRM in seconds.
              </p>

              {/* Minimal Interactive Visual Flow */}
              <div className="rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/70 dark:bg-white/[0.02] p-4 mb-6">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-200/60 dark:border-white/[0.06]">
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    Document ➔ ERP Pipeline
                  </span>
                  <button
                    onClick={runPipelineSim}
                    disabled={pipelineRunning}
                    className="inline-flex items-center space-x-1 text-[11px] font-semibold text-blue-600 dark:text-sky-400 hover:underline cursor-pointer disabled:opacity-50"
                  >
                    {pipelineRunning ? (
                      <>
                        <RotateCw className="w-3 h-3 animate-spin" />
                        <span>Running</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Simulate</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-2">
                  <div
                    className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors duration-200 ${
                      pipelineStep >= 0
                        ? "bg-white dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white font-medium"
                        : "text-neutral-400"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="w-3.5 h-3.5 text-neutral-500" />
                      <span>PDF Ingestion &amp; OCR</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                      {pipelineStep >= 0 ? "Processed" : "Pending"}
                    </span>
                  </div>

                  <div
                    className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors duration-200 ${
                      pipelineStep >= 1
                        ? "bg-white dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white font-medium"
                        : "text-neutral-400"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>Schema &amp; Policy Guardrail</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                      {pipelineStep >= 1 ? "Zero Variance" : "Awaiting"}
                    </span>
                  </div>

                  <div
                    className={`flex items-center justify-between p-2 rounded-lg text-xs transition-colors duration-200 ${
                      pipelineStep >= 2
                        ? "bg-white dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white font-medium"
                        : "text-neutral-400"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Database className="w-3.5 h-3.5 text-purple-500" />
                      <span>NetSuite / Salesforce Sync</span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                      {pipelineStep >= 2 ? "Synced (< 1.4s)" : "Queued"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="pt-4 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                <span>Accuracy: <strong className="text-black dark:text-white font-semibold">99.8%</strong></span>
                <span>Time Saved: <strong className="text-black dark:text-white font-semibold">84%</strong></span>
              </div>

              <Link
                href="/services/ai-agent-development"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
              >
                <span>Explore Autonomous Agents</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* PILLAR 02: PRIVATE ENTERPRISE RAG                            */}
          {/* ============================================================ */}
          <div className="py-10 lg:py-12 lg:px-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  02 // Intelligence
                </span>
                <span className="p-2 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200">
                  <Lock className="w-4 h-4 text-purple-500" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mb-3">
                Private Enterprise RAG
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                Transform company manuals, standard operating procedures, and contract archives into an instant, air-gapped search engine. Hosted in your private VPC with zero third-party model retraining.
              </p>

              {/* Minimal Interactive Search Preview */}
              <div className="rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/70 dark:bg-white/[0.02] p-4 mb-6">
                <div className="flex items-center space-x-1.5 mb-3">
                  {ragExamples.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`text-left text-[11px] px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                        activeQueryIndex === idx
                          ? "bg-white dark:bg-white/10 text-black dark:text-white font-semibold shadow-2xs border border-neutral-200/80 dark:border-white/10"
                          : "text-neutral-500 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      Case {idx + 1}
                    </button>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-white dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
                  <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 mb-1">
                    Query: &quot;{ragExamples[activeQueryIndex].query}&quot;
                  </div>
                  <p className="text-xs text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal mb-2">
                    {ragExamples[activeQueryIndex].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] font-mono pt-1.5 border-t border-neutral-100 dark:border-white/[0.06]">
                    <span className="text-blue-600 dark:text-sky-400 font-semibold">
                      {ragExamples[activeQueryIndex].source}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      {ragExamples[activeQueryIndex].confidence}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="pt-4 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                <span>Privacy: <strong className="text-black dark:text-white font-semibold">100% Air-Gapped</strong></span>
                <span>Latency: <strong className="text-black dark:text-white font-semibold">&lt; 14ms</strong></span>
              </div>

              <Link
                href="/services/ai-ml-development"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
              >
                <span>Explore Enterprise RAG</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* PILLAR 03: CUSTOM AI SOFTWARE & PODS                         */}
          {/* ============================================================ */}
          <div className="py-10 lg:py-12 lg:pl-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                  03 // Delivery
                </span>
                <span className="p-2 rounded-lg bg-neutral-100 dark:bg-white/[0.05] text-neutral-800 dark:text-neutral-200">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mb-3">
                Custom AI Copilots &amp; Pods
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                Off-the-shelf software doesn’t fit proprietary workflows. We embed dedicated in-house engineers directly into your GitHub and Slack to deliver customized copilot software and internal portals.
              </p>

              {/* Minimal Architecture Preview */}
              <div className="rounded-xl border border-neutral-200/80 dark:border-white/10 bg-neutral-50/70 dark:bg-white/[0.02] p-4 mb-6">
                <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mb-2.5 flex items-center justify-between">
                  <span>Pod Deployment Topology</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">14-Day Delivery</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
                    <div className="text-[11px] font-bold text-black dark:text-white">AI Systems Architect</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Security &amp; Schemas</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
                    <div className="text-[11px] font-bold text-black dark:text-white">Full-Stack Lead</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Next.js &amp; APIs</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
                    <div className="text-[11px] font-bold text-black dark:text-white">LLM / Agent Eng</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Swarms &amp; Evals</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
                    <div className="text-[11px] font-bold text-black dark:text-white">QA &amp; Reliability</div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400">Deterministic CI/CD</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="pt-4 border-t border-neutral-200/80 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-4">
                <span>Code Ownership: <strong className="text-black dark:text-white font-semibold">100% Client Transferred</strong></span>
                <span>Speed: <strong className="text-black dark:text-white font-semibold">14-Day POC</strong></span>
              </div>

              <Link
                href="/how-we-work"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
              >
                <span>Learn How Pods Work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
