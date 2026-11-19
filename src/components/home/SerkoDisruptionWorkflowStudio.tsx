"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Clock,
  Layers,
  Zap,
  Lock,
  GitBranch,
  Bot
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";

interface WorkflowOptionCard {
  id: string;
  type: "disrupted" | "alternative" | "confirmed";
  badge: string;
  badgeType: "warning" | "neutral" | "confirmed" | "info";
  tag: string;
  title: string;
  subtitle: string;
  timeEstimate: string;
  routeLabel: string;
  flowSteps: [string, string, string];
  btnLabel: string;
  isConfirmed?: boolean;
}

const CARDS: WorkflowOptionCard[] = [
  {
    id: "disrupted-card",
    type: "disrupted",
    badge: "Disruption Detected",
    badgeType: "warning",
    tag: "ERP PIPELINE BOTTLENECK",
    title: "Vendor Invoice #8492",
    subtitle: "Acme Global Corp • $24,500.00",
    timeEstimate: "3+ hours manual review",
    routeLabel: "Tax & PO #4092 Mismatch",
    flowSteps: ["PDF Ingestion", "PO #4092 Missing", "Stalled in Review"],
    btnLabel: "Bottleneck Detected",
  },
  {
    id: "alt-1",
    type: "alternative",
    badge: "Schema Check (84%)",
    badgeType: "neutral",
    tag: "PRIVATE KNOWLEDGE ENGINE",
    title: "Vector Document Match",
    subtitle: "Master Services Agreement §14.2",
    timeEstimate: "14ms Grounded Citation",
    routeLabel: "Partial Clause Precedent Found",
    flowSteps: ["Vector Search", "Clause Match", "Manual Approval Needed"],
    btnLabel: "Review Clause",
  },
  {
    id: "alt-2-confirmed",
    type: "confirmed",
    badge: "Confirmed",
    badgeType: "confirmed",
    tag: "AUTONOMOUS AI POD",
    title: "Deterministic Agent Swarm",
    subtitle: "Invoice ↔ PO ↔ ERP Ledger",
    timeEstimate: "< 1.2s • Zero Variance",
    routeLabel: "Self-Healing 3-Way Match Verified",
    flowSteps: ["Schema Ingest", "Self-Healing Pydantic Check", "Direct NetSuite Match"],
    btnLabel: "Auto-Dispatched",
    isConfirmed: true,
  },
  {
    id: "alt-3",
    type: "alternative",
    badge: "Live ERP Sync",
    badgeType: "info",
    tag: "SYSTEM OF RECORD",
    title: "NetSuite Ledger Dispatch",
    subtitle: "ERP Ref #JE-99201",
    timeEstimate: "Instant Webhook Dispatch",
    routeLabel: "Ledger Reconciled & Closed",
    flowSteps: ["Journal Posted", "Slack Team Alerted", "Audit Trail Saved"],
    btnLabel: "Synced (200 OK)",
  },
];

export default function SerkoDisruptionWorkflowStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [manualPhase, setManualPhase] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate active phase (0: Disruption, 1: Fan-out Alternatives, 2: Dedicated Squad)
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (manualPhase !== null) return;
      if (latest < 0.22) setActiveStep(0);
      else if (latest < 0.68) setActiveStep(1);
      else setActiveStep(2);
    });
  }, [smoothProgress, manualPhase]);

  // Phase 1 -> Phase 2 Fan-out transforms:
  // Card 1 starts in the exact horizontal center!
  // In Phase 1: translateX is set so Card 1 is centered.
  // In Phase 2: translateX smoothly glides left from center -> 0 -> end
  const trackTranslateX = useTransform(smoothProgress, (val) => {
    // Dynamic responsive offsets
    const p1Offset = isMobile ? 425 : 500;
    const p2Offset = isMobile ? -280 : -480;

    if (val <= 0.22) {
      return `${p1Offset}px`;
    } else if (val <= 0.45) {
      const t = (val - 0.22) / (0.45 - 0.22);
      return `${p1Offset * (1 - t)}px`;
    } else if (val <= 0.68) {
      const t = (val - 0.45) / (0.68 - 0.45);
      return `${p2Offset * t}px`;
    } else {
      return `${p2Offset}px`;
    }
  });

  // Cards 2, 3, 4 fade in and fan out when moving from Phase 1 to Phase 2
  const extraCardsOpacity = useTransform(
    smoothProgress,
    [0.18, 0.28],
    [0, 1]
  );
  const extraCardsScale = useTransform(
    smoothProgress,
    [0.18, 0.28],
    [0.85, 1]
  );
  const extraCardsX = useTransform(
    smoothProgress,
    [0.18, 0.28],
    [60, 0]
  );

  // Phase 2 -> Phase 3: The entire card track dissolves out
  const cardsContainerOpacity = useTransform(
    smoothProgress,
    [0.64, 0.72],
    [1, 0]
  );
  const cardsContainerScale = useTransform(
    smoothProgress,
    [0.64, 0.72],
    [1, 0.88]
  );

  // Phase 3 Support Capsule scales and fades in
  const supportCapsuleOpacity = useTransform(
    smoothProgress,
    [0.68, 0.78],
    [0, 1]
  );
  const supportCapsuleScale = useTransform(
    smoothProgress,
    [0.68, 0.82],
    [0.85, 1]
  );

  // Top header text crossfade
  const headerDisruptionOpacity = useTransform(
    smoothProgress,
    [0.62, 0.7],
    [1, 0]
  );
  const headerSupportOpacity = useTransform(
    smoothProgress,
    [0.68, 0.76],
    [0, 1]
  );

  const handleTabClick = (stepIndex: number) => {
    setManualPhase(stepIndex);
    setActiveStep(stepIndex);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollDistance = rect.height - window.innerHeight;
    const targetY =
      stepIndex === 0
        ? scrollTop
        : stepIndex === 1
        ? scrollTop + scrollDistance * 0.45
        : scrollTop + scrollDistance * 0.9;
    window.scrollTo({ top: targetY, behavior: "smooth" });
    setTimeout(() => setManualPhase(null), 800);
  };

  const handleSeeAlternatives = () => {
    handleTabClick(1);
  };

  return (
    <div ref={containerRef} className="relative h-[250vh] sm:h-[280vh] w-full">
      {/* Sticky Cinematic Canvas (Serko.ai Studio Viewport) */}
      <div className="sticky top-20 sm:top-24 h-[620px] sm:h-[680px] lg:h-[720px] max-h-[84vh] w-full rounded-[4px] border border-neutral-200/90 dark:border-white/[0.08] overflow-hidden flex flex-col justify-between p-5 sm:p-8 lg:p-10 relative isolate transition-colors duration-300">
        
        {/* ============================================================== */}
        {/* SERKO-STYLE SOFT GLOWING AURORA MESH BACKGROUND */}
        {/* ============================================================== */}
        {/* Light Mode: Soft glowing pastel wash (sky, lilac, blush peach) */}
        <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-br from-[#e0f2fe]/50 via-[#fdf2f8]/40 to-[#ffedd5]/45 dark:hidden" />
        <div className="absolute top-[-20%] left-[20%] w-[550px] h-[450px] rounded-full bg-blue-400/15 blur-[120px] pointer-events-none -z-10 dark:hidden" />
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[400px] rounded-full bg-rose-300/15 blur-[130px] pointer-events-none -z-10 dark:hidden" />

        {/* Dark Mode: Luxury Obsidian with Electric Cobalt & Cyan Nebula */}
        <div className="absolute inset-0 pointer-events-none -z-10 hidden dark:block bg-[#0c0c10]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-500/12 blur-[140px] pointer-events-none -z-10 hidden dark:block" />

        {/* Subtle Engineering Dot Grid */}
        <div className="absolute inset-0 pointer-events-none -z-10 opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,#000_40%,transparent_85%)] bg-[radial-gradient(rgba(0,0,0,0.12)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* ============================================================== */}
        {/* TOP DYNAMIC HEADLINE (CROSSFADES PER STAGE) */}
        {/* ============================================================== */}
        <div className="relative w-full text-center max-w-2xl mx-auto z-20 min-h-[72px] sm:min-h-[84px] flex items-center justify-center">
          
          {/* Phase 1 & 2 Headline: Always monitoring. Always ready with alternatives */}
          <motion.div
            style={{ opacity: headerDisruptionOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-neutral-200/80 dark:border-white/[0.08] text-[10.5px] font-mono font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 mb-2 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span>Real-Time Workflow Interceptor</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-snug">
              Always monitoring. <br className="hidden sm:inline" />
              Always ready with alternatives.
            </h3>
          </motion.div>

          {/* Phase 3 Headline: 24/7 Human Support & Direct Slack Access */}
          <motion.div
            style={{ opacity: headerSupportOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm border border-neutral-200/80 dark:border-white/[0.08] text-[10.5px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>100% In-House AI Engineers</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-snug">
              24/7 human engineering support, <br className="hidden sm:inline" />
              whenever your business needs it.
            </h3>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* CENTER STAGE: CARDS TRACK & SUPPORT CAPSULE */}
        {/* ============================================================== */}
        <div className="relative flex-1 w-full flex items-center justify-center my-4 overflow-hidden">
          
          {/* ------------------------------------------------------------ */}
          {/* TRACK 1: CARDS ROW (SERKO EXPANDING CAROUSEL) */}
          {/* ------------------------------------------------------------ */}
          <motion.div
            style={{
              opacity: cardsContainerOpacity,
              scale: cardsContainerScale,
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <motion.div
              style={{ x: trackTranslateX }}
              className="flex items-center gap-4 sm:gap-6 will-change-transform"
            >
              {CARDS.map((card, idx) => {
                const isDisrupted = card.type === "disrupted";
                const isConfirmed = card.isConfirmed;

                // Card 1 is always visible; Cards 2, 3, 4 fan out on scroll!
                return (
                  <motion.div
                    key={card.id}
                    style={
                      idx === 0
                        ? undefined
                        : {
                            opacity: extraCardsOpacity,
                            scale: extraCardsScale,
                            x: extraCardsX,
                          }
                    }
                    className={`w-[270px] sm:w-[310px] h-[340px] sm:h-[370px] shrink-0 rounded-[3px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden select-none ${
                      isConfirmed
                        ? "bg-white dark:bg-[#121217] border-2 border-emerald-500/80 shadow-[0_8px_30px_rgba(16,185,129,0.18)] dark:shadow-[0_8px_32px_rgba(16,185,129,0.22)]"
                        : isDisrupted
                        ? "bg-white dark:bg-[#121217] border border-orange-300/80 dark:border-orange-500/30 shadow-[0_4px_24px_rgba(249,115,22,0.08)]"
                        : "bg-white/95 dark:bg-[#121217]/95 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                    }`}
                  >
                    {/* Top Row: Icon & Status Badge Pill */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-9 h-9 rounded-[2px] flex items-center justify-center shrink-0 border ${
                            isConfirmed
                              ? "bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400"
                              : isDisrupted
                              ? "bg-orange-50 dark:bg-orange-950/60 border-orange-200 dark:border-orange-500/30 text-orange-600 dark:text-orange-400"
                              : "bg-[#f8f9fa] dark:bg-white/[0.04] border-neutral-200 dark:border-white/[0.08] text-neutral-600 dark:text-neutral-300"
                          }`}
                        >
                          {isConfirmed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : isDisrupted ? (
                            <AlertTriangle className="w-4 h-4" />
                          ) : (
                            <FileText className="w-4 h-4" />
                          )}
                        </div>

                        {/* Serko-style Pill Badge */}
                        <div
                          className={`px-3 py-1 rounded-[2px] text-[11px] font-mono font-bold uppercase tracking-wider border ${
                            card.badgeType === "warning"
                              ? "bg-[#fff1eb] text-[#ea580c] border-[#ffedd5] dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-500/30"
                              : card.badgeType === "confirmed"
                              ? "bg-[#ecfdf5] text-[#059669] border-[#a7f3d0] dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/40 shadow-xs"
                              : card.badgeType === "info"
                              ? "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/30"
                              : "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-white/[0.06] dark:text-neutral-300 dark:border-white/10"
                          }`}
                        >
                          {card.badge}
                        </div>
                      </div>

                      {/* Main Title & Subtitle */}
                      <div className="space-y-1 mb-3">
                        <div className="text-[10.5px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold">
                          {card.tag}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-snug">
                          {card.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                          {card.subtitle}
                        </p>
                      </div>

                      {/* Execution Latency & Specs */}
                      <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 py-1.5 border-t border-neutral-100 dark:border-white/[0.06]">
                        <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{card.timeEstimate}</span>
                      </div>
                    </div>

                    {/* Middle: Serko Flight-Style Trajectory Path SVG */}
                    <div className="py-2.5">
                      <div className="relative w-full h-8 flex items-center">
                        {/* Trajectory baseline */}
                        <div className="absolute inset-x-0 h-0.5 bg-neutral-200 dark:bg-neutral-800" />
                        
                        {/* Colored trajectory fill */}
                        <div
                          className={`absolute left-0 h-0.5 ${
                            isConfirmed
                              ? "w-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                              : isDisrupted
                              ? "w-2/5 bg-orange-500"
                              : "w-3/4 bg-blue-500"
                          }`}
                        />

                        {/* Left origin marker */}
                        <div className="absolute left-0 w-2 h-2 rounded-full bg-neutral-400 dark:bg-neutral-600 -translate-y-[1px]" />
                        
                        {/* Dynamic Packet / Node */}
                        <div
                          className={`absolute w-3.5 h-3.5 rounded-full flex items-center justify-center -translate-y-[1px] ${
                            isConfirmed
                              ? "right-0 bg-emerald-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.9)] animate-pulse"
                              : isDisrupted
                              ? "left-2/5 bg-orange-500 text-white"
                              : "left-3/4 bg-blue-500 text-white"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>

                        {/* Right destination marker */}
                        <div className="absolute right-0 w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 -translate-y-[1px]" />
                      </div>

                      <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 truncate mt-1">
                        {card.routeLabel}
                      </div>
                    </div>

                    {/* Bottom: Action CTA Button */}
                    <div className="pt-2">
                      {isDisrupted && activeStep === 0 ? (
                        <button
                          type="button"
                          onClick={handleSeeAlternatives}
                          className="w-full py-2.5 px-3 rounded-[2px] text-xs font-mono font-bold tracking-wider uppercase text-center bg-[#09090b] text-white dark:bg-white dark:text-[#09090b] hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm cursor-pointer transition-all flex items-center justify-center space-x-1.5"
                        >
                          <span>See Alternatives</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <div
                          className={`w-full py-2.5 px-3 rounded-[2px] text-xs font-mono font-bold tracking-wider uppercase text-center transition-all ${
                            isConfirmed
                              ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-[#060608] shadow-sm flex items-center justify-center space-x-1.5"
                              : isDisrupted
                              ? "bg-neutral-100 text-neutral-500 dark:bg-white/[0.04] dark:text-neutral-400 border border-neutral-200/80 dark:border-white/[0.06]"
                              : "bg-[#09090b] text-white dark:bg-white dark:text-[#09090b] hover:bg-neutral-800 dark:hover:bg-neutral-200 shadow-sm"
                          }`}
                        >
                          {isConfirmed && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                          <span>{card.btnLabel}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* ------------------------------------------------------------ */}
          {/* TRACK 2: SERKO 24/7 HUMAN SUPPORT CAPSULE PILL (PHASE 3) */}
          {/* ------------------------------------------------------------ */}
          <motion.div
            style={{
              opacity: supportCapsuleOpacity,
              scale: supportCapsuleScale,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 pointer-events-auto"
          >
            {/* Main Interactive Support Capsule (like Serko recording 00:08) */}
            <div className="w-full max-w-xl p-6 sm:p-8 rounded-[4px] bg-white/95 dark:bg-[#121217]/95 backdrop-blur-md border border-neutral-200/90 dark:border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.6)] text-center space-y-6">
              
              {/* Overlapping Engineer Portraits + Call Action */}
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center -space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-[#121217] shadow-md">
                    <Image
                      src="/images/resource/ASU07005.webp"
                      alt="Lead AI Systems Architect"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#121217]" />
                  </div>

                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-[#121217] shadow-md">
                    <Image
                      src="/images/resource/ASU07123.webp"
                      alt="Senior LLM Agent Specialist"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#121217]" />
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <PhoneCall className="w-4 h-4 animate-bounce" />
                </div>
              </div>

              {/* Support Team Narrative */}
              <div className="space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-[#09090b] dark:text-[#f8f9fa] tracking-tight">
                  Direct In-House Squad In Your Slack &amp; GitHub
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
                  Our senior architects and machine learning engineers in Ahmedabad join your internal workflow as an embedded extension. Zero layers of non-technical middlemen.
                </p>
              </div>

              {/* 3 Reassuring Value Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-2 border-t border-neutral-100 dark:border-white/[0.06] text-left">
                <div className="p-2 sm:p-2.5 rounded-[2px] bg-[#f8f9fa] dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06]">
                  <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">Onboarding</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] mt-0.5">48h SLA</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-[2px] bg-[#f8f9fa] dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06]">
                  <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">Engineers</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] mt-0.5">100% In-House</div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-[2px] bg-[#f8f9fa] dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06]">
                  <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">IP Rights</div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#09090b] dark:text-[#f8f9fa] mt-0.5">100% Client Owned</div>
                </div>
              </div>

              {/* CTA Discovery Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center space-x-2 px-6 py-3 rounded-[2px] bg-[#09090b] text-white dark:bg-white dark:text-[#09090b] hover:text-white dark:hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-md"
                >
                  <span className="relative z-20 flex items-center space-x-2">
                    <span>Schedule Architecture Call</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 z-10 translate-y-[50%] scale-0 rounded-full transition-transform duration-350 ease-out group-hover:scale-x-[180%] group-hover:scale-y-[250%] bg-blue-600 dark:bg-blue-600 pointer-events-none" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM STAGE NAVIGATOR PILLS (SYNCED TO SCROLL) */}
        {/* ============================================================== */}
        <div className="relative z-30 pt-3 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            {[
              { id: 0, label: "01 Disruption" },
              { id: 1, label: "02 Alternatives" },
              { id: 2, label: "03 Dedicated Squad" },
            ].map((tab) => {
              const isActive = activeStep === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative px-3.5 py-1.5 rounded-[2px] text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#09090b] dark:text-[#f8f9fa] font-bold"
                      : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSerkoStage"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-[2px] border border-neutral-300 dark:border-white/20 shadow-xs"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 flex items-center space-x-1.5">
            <span>Scroll to scrub animation phases</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </div>
  );
}
