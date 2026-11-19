"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Zap,
  ArrowRight,
  X,
  PhoneCall,
  ShieldCheck,
  Database,
  Layers,
  Bot,
  FileText,
  Sparkles,
  RefreshCw,
  GitBranch
} from "lucide-react";

interface WorkflowCardData {
  id: string;
  brand: string;
  brandColor: string;
  logoType: "netsuite" | "salesforce" | "vector" | "qrious" | "stripe";
  statusBadge: {
    label: string;
    variant: "canceled" | "confirmed" | "available" | "recommended";
  };
  directionLabel: string;
  title: string;
  spec: string;
  detailRows: [string, string];
  btnLabel: string;
  isConfirmedWinner?: boolean;
}

const CARDS_DATA: WorkflowCardData[] = [
  {
    id: "card-crm",
    brand: "Salesforce Data Cloud",
    brandColor: "#00a1e0",
    logoType: "salesforce",
    statusBadge: {
      label: "Available",
      variant: "available"
    },
    directionLabel: "Outbound to CRM Sync",
    title: "Real-Time Pipeline Match",
    spec: "200ms · Webhook Event",
    detailRows: ["Live Lead Schema Validation", "Direct Salesforce Enterprise Sync"],
    btnLabel: "Select"
  },
  {
    id: "card-rag",
    brand: "Private Knowledge Engine",
    brandColor: "#8b5cf6",
    logoType: "vector",
    statusBadge: {
      label: "Available",
      variant: "available"
    },
    directionLabel: "Outbound to Private VPC",
    title: "Vector Policy Engine",
    spec: "14ms · Grounded Match",
    detailRows: ["Air-Gapped Document Index", "Zero Model Data Retention"],
    btnLabel: "Select"
  },
  {
    id: "card-disrupted",
    brand: "NetSuite ERP",
    brandColor: "#ea580c",
    logoType: "netsuite",
    statusBadge: {
      label: "Canceled",
      variant: "canceled"
    },
    directionLabel: "Outbound to NetSuite ERP",
    title: "Vendor Invoice #8492",
    spec: "3+ hours manual review",
    detailRows: ["Tax & PO #4092 Mismatch", "Unstructured PDF Review Stall"],
    btnLabel: "See alternatives"
  },
  {
    id: "card-qrious-winner",
    brand: "Qrious Tech AI Pod",
    brandColor: "#10b981",
    logoType: "qrious",
    statusBadge: {
      label: "Confirmed",
      variant: "confirmed"
    },
    directionLabel: "Inbound to Autonomous Pod",
    title: "Deterministic 3-Way Match",
    spec: "< 1.2s · Nonstop Autonomous",
    detailRows: ["Pydantic Schema Validation", "Self-Healing Auto-Dispatch"],
    btnLabel: "Select",
    isConfirmedWinner: true
  },
  {
    id: "card-stripe",
    brand: "Stripe Billing Engine",
    brandColor: "#6366f1",
    logoType: "stripe",
    statusBadge: {
      label: "Available",
      variant: "available"
    },
    directionLabel: "Outbound to Payment Ledger",
    title: "Direct Ledger Dispatch",
    spec: "Instant Settlement SLA",
    detailRows: ["Multi-Currency Verification", "Automated Journal Staging"],
    btnLabel: "Select"
  }
];

export default function SerkoDisruptionWorkflowStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [manualScrub, setManualScrub] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    restDelta: 0.001
  });

  // Calculate active phase for navigation
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    return smoothProgress.on("change", (latest) => {
      if (manualScrub !== null) return;
      if (latest < 0.20) setActiveStage(0); // 01 Disrupted
      else if (latest < 0.50) setActiveStage(1); // 02 Alternatives
      else if (latest < 0.72) setActiveStage(2); // 03 Confirmed
      else setActiveStage(3); // 04 24/7 Human Crew
    });
  }, [smoothProgress, manualScrub]);

  // Transform card measurements
  const cardWidth = isMobile ? 260 : 310;
  const cardGap = isMobile ? 14 : 20;
  const step = cardWidth + cardGap;

  // Track scroll position of the entire cards row:
  // Phase 1 (0.00 to 0.40): Row is centered on Card 2 (Disrupted Card).
  // Phase 2 (0.40 to 0.68): Row shifts left by 1 Step (-step) so Card 3 (Winner) is centered!
  const trackX = useTransform(smoothProgress, [0.40, 0.62], [0, -step]);

  // Overall Cards deck scale & opacity (Fades out when transitioning to Human Support)
  const cardsDeckOpacity = useTransform(smoothProgress, [0.68, 0.76], [1, 0]);
  const cardsDeckScale = useTransform(smoothProgress, [0.68, 0.76], [1, 0.88]);

  // Top Headline 1 (Disruption & Alternatives) vs Headline 2 (24/7 Human Support)
  const headline1Opacity = useTransform(smoothProgress, [0.66, 0.73], [1, 0]);
  const headline1Y = useTransform(smoothProgress, [0.66, 0.73], [0, -15]);

  const headline2Opacity = useTransform(smoothProgress, [0.73, 0.80], [0, 1]);
  const headline2Y = useTransform(smoothProgress, [0.73, 0.80], [15, 0]);

  // Human Support Capsule (Phase 4)
  const supportCapsuleOpacity = useTransform(smoothProgress, [0.74, 0.82], [0, 1]);
  const supportCapsuleScale = useTransform(smoothProgress, [0.74, 0.84], [0.85, 1]);

  // Phase Jump Helper
  const handleJumpToPhase = (phaseIndex: number) => {
    setManualScrub(phaseIndex);
    setActiveStage(phaseIndex);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalDist = rect.height - window.innerHeight;

    let targetPct = 0.05;
    if (phaseIndex === 1) targetPct = 0.35;
    if (phaseIndex === 2) targetPct = 0.58;
    if (phaseIndex === 3) targetPct = 0.88;

    window.scrollTo({
      top: scrollTop + totalDist * targetPct,
      behavior: "smooth"
    });

    setTimeout(() => {
      setManualScrub(null);
    }, 750);
  };

  return (
    <div ref={containerRef} className="relative h-[340vh] sm:h-[360vh] w-full">
      {/* ============================================================== */}
      {/* STICKY CINEMATIC CANVAS (MATCHING SERKO.AI FULL-SCREEN VIBE) */}
      {/* ============================================================== */}
      <div className="sticky top-16 sm:top-20 w-full h-[78vh] sm:h-[82vh] min-h-[580px] max-h-[780px] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-12 relative isolate select-none border border-white/60 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.55)]">
        
        {/* ============================================================== */}
        {/* SERKO-STYLE PASTEL AURORA SKY GRADIENT (EXACT COLOR PALETTE) */}
        {/* ============================================================== */}
        {/* Light Mode: Heavenly sky-blue into soft lavender into warm peach */}
        <div className="absolute inset-0 pointer-events-none -z-10 bg-gradient-to-b from-[#bce3fe] via-[#ded3fe] to-[#fecfc3] dark:hidden" />
        
        {/* Dark Mode: Luxury Midnight Obsidian & Twilight Aurora */}
        <div className="absolute inset-0 pointer-events-none -z-10 hidden dark:block bg-gradient-to-b from-[#0d1829] via-[#181635] to-[#281329]" />
        
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-white/20 blur-[90px] pointer-events-none -z-10 dark:bg-blue-500/10" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] rounded-full bg-rose-200/25 blur-[100px] pointer-events-none -z-10 dark:bg-purple-500/10" />

        {/* ============================================================== */}
        {/* TOP DYNAMIC HEADLINE (CROSSFADES PER SERKO RECORDING) */}
        {/* ============================================================== */}
        <div className="relative w-full text-center max-w-3xl mx-auto z-20 min-h-[96px] sm:min-h-[110px] flex items-center justify-center">
          
          {/* Phase 1 & 2 Headline: Always monitoring. Always ready with alternatives */}
          <motion.div
            style={{ opacity: headline1Opacity, y: headline1Y }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-[1.18]">
              Always monitoring. <br />
              Always ready with alternatives.
            </h3>
          </motion.div>

          {/* Phase 3 & 4 Headline: 24/7 Human Support whenever you need it */}
          <motion.div
            style={{ opacity: headline2Opacity, y: headline2Y }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-[1.18] mb-2">
              24/7 human support, <br />
              whenever you need it.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto leading-relaxed font-medium">
              Our engineering support crew in Ahmedabad is here to help and available any time, day or night, embedded directly in your Slack.
            </p>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* CENTER INTERACTIVE CARDS STAGE & HUMAN SUPPORT CAPSULE */}
        {/* ============================================================== */}
        <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-auto">
          
          {/* ------------------------------------------------------------ */}
          {/* SERKO EXPANDING CARDS DECK (HORIZONTAL SCRUB & FAN-OUT) */}
          {/* ------------------------------------------------------------ */}
          <motion.div
            style={{
              opacity: cardsDeckOpacity,
              scale: cardsDeckScale,
            }}
            className="w-full h-full flex items-center justify-center pointer-events-auto"
          >
            <motion.div
              style={{ x: trackX }}
              className="flex items-center justify-center will-change-transform relative"
            >
              {CARDS_DATA.map((card, idx) => {
                const isCenterCard = idx === 2; // Card 2: Disrupted
                const isWinnerCard = idx === 3; // Card 3: Winner Qrious Pod
                const diffFromCenter = idx - 2; // -2, -1, 0, 1, 2

                return (
                  <SerkoCardItem
                    key={card.id}
                    card={card}
                    index={idx}
                    diffFromCenter={diffFromCenter}
                    isCenterCard={isCenterCard}
                    isWinnerCard={isWinnerCard}
                    step={step}
                    smoothProgress={smoothProgress}
                    onSeeAlternatives={() => handleJumpToPhase(1)}
                    onSelectWinner={() => handleJumpToPhase(2)}
                  />
                );
              })}
            </motion.div>
          </motion.div>

          {/* ------------------------------------------------------------ */}
          {/* SERKO 24/7 HUMAN SUPPORT CAPSULE PILL (PHASE 4) */}
          {/* ------------------------------------------------------------ */}
          <motion.div
            style={{
              opacity: supportCapsuleOpacity,
              scale: supportCapsuleScale,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-30"
          >
            <div className="p-2 sm:p-2.5 rounded-full bg-white/95 dark:bg-[#16161b]/95 backdrop-blur-md border border-white/80 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex items-center space-x-3 sm:space-x-5 px-5 sm:px-8 py-3.5 sm:py-4">
              
              {/* Avatar 1: Senior Systems Lead */}
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-white dark:border-[#16161b] shadow-md shrink-0">
                <Image
                  src="/images/resource/ASU07005.webp"
                  alt="Senior AI Engineer"
                  width={52}
                  height={52}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#16161b]" />
              </div>

              {/* Animated Live Voice Audio Waveform */}
              <div className="flex items-center space-x-1 sm:space-x-1.5 px-2 sm:px-4 h-8">
                {[14, 22, 10, 28, 18, 26, 12, 30, 24, 16, 26, 14, 22, 10, 24, 18, 12].map((height, barIdx) => (
                  <span
                    key={barIdx}
                    className="w-1 sm:w-1.5 bg-neutral-800 dark:bg-white rounded-full transition-all duration-300"
                    style={{
                      height: `${height}px`,
                      animation: `serkoWaveform 1.2s ease-in-out infinite alternate`,
                      animationDelay: `${barIdx * 75}ms`
                    }}
                  />
                ))}
              </div>

              {/* Avatar 2: Cloud Architect */}
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-white dark:border-[#16161b] shadow-md shrink-0">
                <Image
                  src="/images/resource/ASU07123.webp"
                  alt="Cloud Systems Architect"
                  width={52}
                  height={52}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#16161b]" />
              </div>

              {/* Serko Close Action Button */}
              <button
                type="button"
                onClick={() => handleJumpToPhase(0)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200/80 dark:border-white/10 flex items-center justify-center text-neutral-400 hover:text-neutral-800 dark:hover:text-white transition-colors cursor-pointer bg-neutral-50 dark:bg-white/[0.04]"
                title="Reset Flow"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Slack Connect Pill */}
            <div className="mt-6 flex items-center space-x-3">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#09090b] text-white dark:bg-white dark:text-[#09090b] text-xs font-semibold hover:scale-105 transition-all shadow-md"
              >
                <span>Connect With Lead Engineers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM MINIMAL STAGE NAVIGATOR PILLS (SYNCED WITH SCROLL) */}
        {/* ============================================================== */}
        <div className="relative z-30 pt-3 border-t border-neutral-300/60 dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            {[
              { id: 0, label: "01 Disruption" },
              { id: 1, label: "02 Alternatives" },
              { id: 2, label: "03 Confirmed Pod" },
              { id: 3, label: "04 24/7 Human Crew" },
            ].map((tab) => {
              const isActive = activeStage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleJumpToPhase(tab.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#09090b] dark:text-[#f8f9fa] font-bold"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="serkoActiveTab"
                      className="absolute inset-0 bg-white/90 dark:bg-white/10 rounded-full border border-neutral-300/80 dark:border-white/20 shadow-xs"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 flex items-center space-x-1.5">
            <span>Scroll to scrub flow animation</span>
            <span>↓</span>
          </div>
        </div>
      </div>

      {/* Global Embedded Keyframes for Audio Waveform Pulse */}
      <style jsx global>{`
        @keyframes serkoWaveform {
          0% {
            transform: scaleY(0.35);
          }
          100% {
            transform: scaleY(1.35);
          }
        }
      `}</style>
    </div>
  );
}

// ============================================================================
// INDIVIDUAL SERKO CARD COMPONENT WITH FAN-OUT AND SELECTION DYNAMICS
// ============================================================================
function SerkoCardItem({
  card,
  index,
  diffFromCenter,
  isCenterCard,
  isWinnerCard,
  step,
  smoothProgress,
  onSeeAlternatives,
  onSelectWinner
}: {
  card: WorkflowCardData;
  index: number;
  diffFromCenter: number;
  isCenterCard: boolean;
  isWinnerCard: boolean;
  step: number;
  smoothProgress: any;
  onSeeAlternatives: () => void;
  onSelectWinner: () => void;
}) {
  // Initial Stacked Offsets (Phase 1: 0.00 to 0.15):
  // Cards are tucked behind Card 2 with small peek angles!
  const initialStackX = diffFromCenter * 8; // -16, -8, 0, 8, 16
  const initialStackY = Math.abs(diffFromCenter) * 4; // 8, 4, 0, 4, 8
  const initialStackRotate = diffFromCenter * 2.5; // -5deg, -2.5deg, 0deg, 2.5deg, 5deg
  const initialStackScale = 1 - Math.abs(diffFromCenter) * 0.04; // 0.92, 0.96, 1, 0.96, 0.92
  const initialStackOpacity = isCenterCard ? 1 : 0.85 - Math.abs(diffFromCenter) * 0.2;

  // Final Fanned-Out Offsets (Phase 2: 0.15 to 0.40):
  const fannedX = diffFromCenter * step;
  const fannedY = 0;
  const fannedRotate = 0;
  const fannedScale = 1.0;
  const fannedOpacity = 1.0;

  // Dynamic transforms based on smooth scroll
  const x = useTransform(
    smoothProgress,
    [0.12, 0.38],
    [initialStackX, fannedX]
  );

  const y = useTransform(
    smoothProgress,
    [0.12, 0.38, 0.52, 0.65],
    [initialStackY, fannedY, fannedY, isWinnerCard ? -12 : 0]
  );

  const rotate = useTransform(
    smoothProgress,
    [0.12, 0.38],
    [initialStackRotate, fannedRotate]
  );

  const scale = useTransform(
    smoothProgress,
    [0.12, 0.38, 0.52, 0.65],
    [initialStackScale, fannedScale, fannedScale, isWinnerCard ? 1.06 : 0.97]
  );

  const opacity = useTransform(
    smoothProgress,
    [0.12, 0.38, 0.52, 0.65],
    [initialStackOpacity, fannedOpacity, fannedOpacity, isWinnerCard ? 1.0 : 0.45]
  );

  // Winner card status badge pop (switches from 'Recommended' to 'Confirmed' on scroll)
  const [badgeLabel, setBadgeLabel] = useState(card.statusBadge.label);

  useEffect(() => {
    if (!isWinnerCard) return;
    return smoothProgress.on("change", (v: number) => {
      if (v >= 0.52) {
        setBadgeLabel("Confirmed");
      } else {
        setBadgeLabel("Recommended");
      }
    });
  }, [smoothProgress, isWinnerCard]);

  // Card Brand Logo Renderer
  const renderLogo = () => {
    switch (card.logoType) {
      case "netsuite":
        return (
          <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-orange-600 dark:text-orange-400">
            <AlertTriangle className="w-4 h-4" />
          </div>
        );
      case "qrious":
        return (
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        );
      case "salesforce":
        return (
          <div className="w-8 h-8 rounded-full bg-sky-100 dark:bg-sky-950/60 flex items-center justify-center text-sky-600 dark:text-sky-400">
            <Sparkles className="w-4 h-4" />
          </div>
        );
      case "vector":
        return (
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Database className="w-4 h-4" />
          </div>
        );
      case "stripe":
        return (
          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Zap className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-600">
            <Layers className="w-4 h-4" />
          </div>
        );
    }
  };

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: isCenterCard ? 30 : isWinnerCard ? 25 : 15 - Math.abs(diffFromCenter),
      }}
      className={`absolute w-[270px] sm:w-[310px] h-[370px] sm:h-[395px] rounded-[24px] p-6 flex flex-col justify-between transition-shadow duration-300 select-none bg-white dark:bg-[#15151a] border border-black/[0.06] dark:border-white/[0.08] ${
        isWinnerCard
          ? "shadow-[0_20px_45px_rgba(16,185,129,0.22)] dark:shadow-[0_25px_50px_rgba(16,185,129,0.25)] ring-1 ring-emerald-500/40"
          : isCenterCard
          ? "shadow-[0_16px_40px_rgba(249,115,22,0.12)] dark:shadow-[0_20px_45px_rgba(0,0,0,0.5)] ring-1 ring-orange-400/30"
          : "shadow-[0_12px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
      }`}
    >
      {/* Top Header: Brand Logo & Status Pill Badge */}
      <div>
        <div className="flex items-center justify-between mb-4">
          {renderLogo()}

          {/* Status Badge */}
          {card.statusBadge.variant === "canceled" ? (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fee8d6] text-[#ea580c] dark:bg-orange-950/60 dark:text-orange-400">
              Canceled
            </span>
          ) : isWinnerCard ? (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 ${
                badgeLabel === "Confirmed"
                  ? "bg-[#dcfce7] text-[#15803d] dark:bg-emerald-950/70 dark:text-emerald-400 shadow-xs"
                  : "bg-neutral-100 text-neutral-600 dark:bg-white/[0.08] dark:text-neutral-300"
              }`}
            >
              {badgeLabel}
            </span>
          ) : (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-neutral-400 dark:text-neutral-500 bg-neutral-100/60 dark:bg-white/[0.04]">
              Alternative
            </span>
          )}
        </div>

        {/* Direction Tag & Main Title */}
        <div className="space-y-1 mb-2">
          <div className="text-[11px] font-sans text-neutral-400 dark:text-neutral-500 font-medium tracking-tight">
            {card.directionLabel}
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-snug">
            {card.title}
          </h4>
        </div>

        {/* Latency / Flight Spec */}
        <div className="flex items-center space-x-1.5 text-xs text-neutral-500 dark:text-neutral-400 pt-1">
          <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span>{card.spec}</span>
        </div>
      </div>

      {/* Middle: Serko Flight-Style Skeleton Detail Rows */}
      <div className="space-y-2.5 py-3 border-t border-neutral-100 dark:border-white/[0.06]">
        {card.detailRows.map((detail, dIdx) => (
          <div key={dIdx} className="flex items-center space-x-2.5">
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                isWinnerCard
                  ? "bg-emerald-500"
                  : isCenterCard
                  ? "bg-orange-400"
                  : "bg-neutral-300 dark:bg-neutral-600"
              }`}
            />
            <span className="text-[11.5px] font-medium text-neutral-600 dark:text-neutral-300 truncate">
              {detail}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <div className="pt-2">
        {isCenterCard ? (
          <button
            type="button"
            onClick={onSeeAlternatives}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-neutral-800 dark:text-neutral-100 bg-neutral-100/90 hover:bg-neutral-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] transition-all cursor-pointer shadow-2xs text-center"
          >
            See alternatives
          </button>
        ) : isWinnerCard ? (
          <button
            type="button"
            onClick={onSelectWinner}
            className={`w-full py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer text-center flex items-center justify-center space-x-1.5 ${
              badgeLabel === "Confirmed"
                ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-[#060608] shadow-md hover:bg-emerald-700"
                : "bg-[#09090b] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#09090b] shadow-sm"
            }`}
          >
            {badgeLabel === "Confirmed" && (
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            )}
            <span>{badgeLabel === "Confirmed" ? "Confirmed ✓" : "Select"}</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onSelectWinner}
            className="w-full py-2.5 rounded-full text-xs font-semibold text-white bg-[#09090b] hover:bg-neutral-800 dark:text-[#09090b] dark:bg-white dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-sm text-center"
          >
            Select
          </button>
        )}
      </div>
    </motion.div>
  );
}
