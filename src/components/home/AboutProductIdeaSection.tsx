"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
  Zap,
  Clock,
  Code2,
  FileText,
  Mail,
  Scale
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

function JimoPerspectiveCard({
  children,
  className = "",
  beamColor = "from-blue-500/70 via-indigo-500/80 to-purple-500/70"
}: {
  children: React.ReactNode;
  className?: string;
  beamColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.2, -3.2]), {
    stiffness: 220,
    damping: 28
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.2, 3.2]), {
    stiffness: 220,
    damping: 28
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className={`relative overflow-hidden transition-shadow duration-300 ${className}`}
    >
      {/* Jimo-style animated top border beam highlight */}
      <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${beamColor} pointer-events-none z-20`} />
      {children}
    </motion.div>
  );
}

export default function AboutProductIdeaSection() {
  // Interactive real-world scenario tab for Feature 1 (Vercel/Stripe style)
  const [activeWorkflow, setActiveWorkflow] = useState<"invoices" | "support" | "compliance">("invoices");

  const workflows = {
    invoices: {
      title: "Invoice & Bill Processing",
      humanTask: "Accounts team spends 3 hours manually cross-checking PDF invoices with purchase orders.",
      automatedAction: "Software reads incoming PDFs, verifies line items & tax IDs, and posts clean journal entries into NetSuite.",
      humanOutcome: "Reconciliation time cut from 3 hours to 25 seconds. Zero duplicate payments.",
      metric: "15 hrs saved / week",
      timeReduction: "96% faster",
      tag: "FINANCE & OPS"
    },
    support: {
      title: "Technical Customer Inquiries",
      humanTask: "Support team answers the same 40 product setup questions across Zendesk and email all day.",
      automatedAction: "Assistant searches internal engineering docs, drafts a detailed response with code snippets, and cues it for human approval.",
      humanOutcome: "First response time drops from 4 hours to under 3 minutes. Customer satisfaction up 38%.",
      metric: "< 3 min response",
      timeReduction: "8x quicker",
      tag: "SUPPORT & CX"
    },
    compliance: {
      title: "Vendor Contract & Risk Review",
      humanTask: "Legal counsel manually reviews 60-page vendor MSAs for non-standard indemnity clauses.",
      automatedAction: "System highlights deviation from standard corporate policy, flags high-risk clauses, and suggests approved redlines.",
      humanOutcome: "Contract review turns around in 1 day instead of 2 weeks. Legal costs drop by half.",
      metric: "1-day turnaround",
      timeReduction: "70% review time saved",
      tag: "LEGAL & RISK"
    }
  };

  const current = workflows[activeWorkflow];

  return (
    <section
      id="capabilities"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden"
    >
      {/* Jimo-Style Concentric Coordinate Depth Rings */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[650px] h-[650px] pointer-events-none -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/10" />
        <div className="absolute inset-[25%] rounded-full border border-dashed border-neutral-400/20 dark:border-white/[0.06]" />
        <div className="absolute inset-[50%] rounded-full border border-neutral-400/15 dark:border-white/[0.04]" />
      </div>

      {/* Ambient background grid with subtle central radial fade */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_30%,transparent_100%)]" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Editorial Section Header: Human, Honest, Compelling */}
        <ScrollReveal className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>What We Actually Build</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            Less busywork. More work that actually moves your business forward.
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            Most AI demos look cool in a sandbox and break in production. We don’t build toy chatbots or generic prompt wrappers. We build reliable, tailored software that connects to your existing tools so your team gets hours of their week back.
          </p>
        </ScrollReveal>

        {/* Modern Vercel & Stripe Asymmetric Bento Grid (No Clunky Outdated Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8">
          {/* Bento Card 1: Interactive Real-World Workflow Automation (Left 7 Cols) */}
          <JimoPerspectiveCard
            beamColor="from-blue-500/70 via-sky-400/80 to-blue-600/70"
            className="lg:col-span-7 rounded-[2px] bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/90 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                  {current.tag}
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-[2px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60 font-semibold">
                  {current.metric}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight mb-3">
                Take the repetitive grind off your team&apos;s plate.
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Whether it&apos;s cross-checking vendor bills, filing customer requests, or moving data between old databases—we build autonomous assistants that do the heavy lifting in seconds, so your people only intervene when a real human decision is needed.
              </p>

              {/* Interactive Scenario Switcher */}
              <div className="mb-6">
                <div className="text-xs font-mono font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                  Explore how it works in practice:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveWorkflow("invoices")}
                    className={`px-3 py-2 rounded-[2px] text-xs font-semibold text-left transition-all cursor-pointer flex items-center space-x-2 border ${
                      activeWorkflow === "invoices"
                        ? "bg-white dark:bg-white/10 border-black/20 dark:border-white/20 text-black dark:text-white shadow-xs font-bold"
                        : "bg-transparent border-transparent text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0 text-blue-500" />
                    <span className="truncate">Invoices</span>
                  </button>

                  <button
                    onClick={() => setActiveWorkflow("support")}
                    className={`px-3 py-2 rounded-[2px] text-xs font-semibold text-left transition-all cursor-pointer flex items-center space-x-2 border ${
                      activeWorkflow === "support"
                        ? "bg-white dark:bg-white/10 border-black/20 dark:border-white/20 text-black dark:text-white shadow-xs font-bold"
                        : "bg-transparent border-transparent text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0 text-purple-500" />
                    <span className="truncate">Support</span>
                  </button>

                  <button
                    onClick={() => setActiveWorkflow("compliance")}
                    className={`px-3 py-2 rounded-[2px] text-xs font-semibold text-left transition-all cursor-pointer flex items-center space-x-2 border ${
                      activeWorkflow === "compliance"
                        ? "bg-white dark:bg-white/10 border-black/20 dark:border-white/20 text-black dark:text-white shadow-xs font-bold"
                        : "bg-transparent border-transparent text-neutral-500 hover:text-black dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-white/[0.04]"
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5 shrink-0 text-emerald-500" />
                    <span className="truncate">Contracts</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Before & After Breakdown */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWorkflow}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-[2px] bg-white dark:bg-black/40 border border-neutral-200/80 dark:border-white/10 p-4.5 space-y-3"
                >
                  <div className="flex items-start space-x-3 pb-3 border-b border-neutral-100 dark:border-white/[0.06]">
                    <span className="text-[11px] font-mono font-bold text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5">
                      BEFORE:
                    </span>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {current.humanTask}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3 pb-3 border-b border-neutral-100 dark:border-white/[0.06]">
                    <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-sky-400 shrink-0 mt-0.5">
                      HOW IT RUNS:
                    </span>
                    <p className="text-xs text-neutral-800 dark:text-neutral-200 font-medium leading-relaxed">
                      {current.automatedAction}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{current.humanOutcome}</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400">
                      {current.timeReduction}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-white/[0.06] flex items-center justify-between">
              <Link
                href="/services/ai-agent-development"
                className="inline-flex items-center space-x-2 text-xs font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
              >
                <span>See Our Workflow Engineering Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono hidden sm:inline">
                Plugs into Slack, ERP &amp; CRMs
              </span>
            </div>
          </JimoPerspectiveCard>

          {/* Bento Card 2: Private Knowledge & Search (Right 5 Cols) */}
          <JimoPerspectiveCard
            beamColor="from-purple-500/70 via-indigo-500/80 to-pink-500/70"
            className="lg:col-span-5 rounded-[2px] bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/90 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  PRIVATE KNOWLEDGE
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-[2px] bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/60 font-semibold">
                  Zero Data Leakage
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight mb-3">
                Instant answers from your own company&apos;s brains.
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                Stop pinging coworkers or digging through 50-page PDF contracts and outdated wikis. We turn your internal files, SOPs, and spreadsheets into an instant, private assistant that gives verified answers in plain English with page numbers.
              </p>

              {/* Clean Human Value Box */}
              <div className="rounded-[2px] bg-white dark:bg-black/40 border border-neutral-200/80 dark:border-white/10 p-5 space-y-3.5">
                <div className="flex items-center space-x-2.5 text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                  <div className="w-5 h-5 rounded-[2px] bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Answers backed by exact document citations</span>
                </div>

                <div className="flex items-center space-x-2.5 text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                  <div className="w-5 h-5 rounded-[2px] bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <span>Hosted inside your own private cloud or VPC</span>
                </div>

                <div className="flex items-center space-x-2.5 text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                  <div className="w-5 h-5 rounded-[2px] bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Zero public model retraining on your customer secrets</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200/60 dark:border-white/[0.06] flex items-center justify-between">
              <Link
                href="/services/ai-ml-development"
                className="inline-flex items-center space-x-2 text-xs font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
              >
                <span>Explore Private Knowledge Engines</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </JimoPerspectiveCard>

          {/* Bento Card 3: Dedicated In-House Senior Pods (Full 12 Cols Bottom Bar) */}
          <JimoPerspectiveCard
            beamColor="from-emerald-500/70 via-teal-400/80 to-blue-500/70"
            className="lg:col-span-12 rounded-[2px] bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/90 dark:border-white/10 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-xl"
          >
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2.5 mb-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  DEDICATED SENIOR SQUADS
                </span>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
                  100% In-House Engineers
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-black dark:text-white tracking-tight mb-2">
                Skip the 6-month recruiting cycle. Get a senior AI team in your sprints next week.
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-normal">
                We don’t outsource to junior contractors or sell rigid software and disappear. Our senior engineers join your Slack, commit clean code directly to your company GitHub, and hand over complete source code ownership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <Link
                href="/how-we-work"
                className="group relative overflow-hidden px-6 py-3 rounded-[2px] bg-black text-white dark:bg-white dark:text-black hover:text-white dark:hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center space-x-2"
              >
                <span className="relative z-20 flex items-center space-x-2">
                  <span>How Our Pods Work</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 z-10 translate-y-[50%] scale-0 rounded-full transition-transform duration-350 ease-out group-hover:scale-x-[180%] group-hover:scale-y-[250%] bg-purple-600 pointer-events-none" />
              </Link>

              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 sm:text-right">
                Agile Sprints • Full Code Ownership
              </span>
            </div>
          </JimoPerspectiveCard>
        </div>
      </div>
    </section>
  );
}
