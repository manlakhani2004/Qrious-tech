"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Workflow,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Search,
  Code2,
  Check,
  Zap,
  Lock,
  Clock,
  Terminal,
  Activity
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

interface RoadmapStep {
  step: string;
  number: string;
  timeframe: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  techStack: string;
  outcomeMetric: string;
  outcomeLabel: string;
}

const STEPS: RoadmapStep[] = [
  {
    step: "Step 01",
    number: "01",
    timeframe: "Days 1 – 3",
    badge: "Opportunity Discovery",
    title: "Workflow & Opportunity Audit",
    headline: "We pinpoint where AI saves your business the most hours and money",
    description:
      "We sit down directly with your team and review daily operational bottlenecks. We inspect your data schemas, security constraints, and manual workflows to design an AI roadmap with guaranteed, measurable business ROI.",
    deliverables: [
      "Process Bottleneck & ROI Analysis",
      "Private Cloud & Data Boundary Scoping",
      "Model Architecture & LLM Selection (Llama, Claude, GPT)",
      "Target Software API Mapping (CRM, ERP, DBs)"
    ],
    techStack: "Architecture Audit • Schema Invariants • SOC2 Scoping",
    outcomeMetric: "100%",
    outcomeLabel: "De-Risked Adoption Scope"
  },
  {
    step: "Step 02",
    number: "02",
    timeframe: "Days 4 – 10",
    badge: "Engineering & Integration",
    title: "Custom Build & Tool Integration",
    headline: "We build and connect AI directly into your existing software",
    description:
      "No need to switch to new, unfamiliar tools. Our in-house engineers build custom autonomous agents and vector search pipelines that integrate directly into your current Slack, NetSuite, Salesforce, email, or database.",
    deliverables: [
      "Custom Multi-Agent Swarm Construction",
      "Private Vector Indexing on Company Documents",
      "Deterministic Guardrails & Pydantic Validation",
      "Bi-Directional API Hooks into Your Current Stack"
    ],
    techStack: "LangGraph • Qdrant • Next.js 16 • FastAPI • Webhooks",
    outcomeMetric: "14-Day",
    outcomeLabel: "Functional Working Prototype"
  },
  {
    step: "Step 03",
    number: "03",
    timeframe: "Days 11 – 14",
    badge: "Launch & Empowerment",
    title: "Deployment, Training & 24/7 Support",
    headline: "Seamless deployment, team onboarding, and continuous monitoring",
    description:
      "We deploy the AI systems inside your private cloud boundary with zero client data retention. We train your staff so everyone feels empowered, and our dedicated pod provides 24/7 continuous sprint support and monitoring.",
    deliverables: [
      "Private VPC Air-Gapped Cloud Deployment",
      "100% Full Source Code & Model Weights Transfer",
      "Hands-On Team Training & Documentation",
      "24/7 Uptime Telemetry & Low-Latency SLA"
    ],
    techStack: "Air-Gapped VPC • Full IP Transfer • 24/7 Sprint Pods",
    outcomeMetric: "85%+",
    outcomeLabel: "Manual Task Reduction"
  }
];

export default function BusinessAIIntegrationRoadmapSection() {
  const [activeStepIdx, setActiveStepIdx] = useState(1);
  const activeStep = STEPS[activeStepIdx];

  return (
    <section
      id="how-we-bring-ai-to-business"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] 2xl:w-[1200px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Workflow className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
            <span>Simple 3-Step Business Adoption</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14] mb-4">
            How We Bring AI <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              Directly Into Your Business
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            You don’t have to overhaul your company to adopt AI. We connect intelligent automation into the software you already use — smoothly, securely, and within two weeks.
          </p>
        </ScrollReveal>

        {/* 3 Step Interactive Process Grid with Kinetic Progress Beam (Prompt-Motion style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {STEPS.map((s, idx) => {
            const isSelected = activeStepIdx === idx;
            return (
              <motion.div
                key={s.step}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-6 sm:p-7 rounded-[28px] border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between text-left ${
                  isSelected
                    ? "bg-white dark:bg-[#121215] border-blue-500/80 dark:border-cyan-500/60 shadow-xl"
                    : "bg-[#fbfbfc]/80 dark:bg-[#0c0c0e]/80 border-neutral-200/80 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 shadow-xs"
                }`}
              >
                {/* Active Specular Highlight Beam */}
                {isSelected && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-black dark:text-white">
                      {s.number}
                    </span>
                    <span className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/5 px-2.5 py-1 rounded-full">
                      {s.timeframe}
                    </span>
                  </div>

                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.05] text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    {s.badge}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-5">
                    {s.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                    {s.outcomeLabel}:
                  </span>
                  <span className="font-mono font-bold text-black dark:text-white">
                    {s.outcomeMetric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector Canvas (Animos / Vercel style) */}
        <div className="rounded-[28px] border border-neutral-200/80 dark:border-white/[0.1] bg-[#f8f8f9] dark:bg-[#0e0e11] p-6 sm:p-10 shadow-lg relative overflow-hidden text-left">
          {/* Top hairline specular */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200/70 dark:border-white/10 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-bold">
                    {activeStep.step} Deep-Dive
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">•</span>
                  <span className="font-bold text-black dark:text-white">{activeStep.title}</span>
                </div>
                <div className="text-neutral-500 dark:text-neutral-400">
                  Sprint Duration: <strong className="text-black dark:text-white font-semibold">{activeStep.timeframe}</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight">
                    {activeStep.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {activeStep.description}
                  </p>

                  <div className="pt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    <span className="font-bold text-black dark:text-white">Underlying Tech: </span>
                    <span>{activeStep.techStack}</span>
                  </div>
                </div>

                {/* Deliverables Checklist Column */}
                <div className="lg:col-span-5 p-5 rounded-2xl bg-white dark:bg-[#151518] border border-neutral-200/80 dark:border-white/[0.08] shadow-xs space-y-3">
                  <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>Key Deliverables</span>
                    <span className="text-emerald-600 dark:text-emerald-400">✓ Guaranteed</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeStep.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs text-neutral-800 dark:text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 border-t border-neutral-200/70 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>100% In-House Ahmedabad HQ Engineers • Direct Slack &amp; Git Access</span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-sm group"
                >
                  <span>Start With a Workflow Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

