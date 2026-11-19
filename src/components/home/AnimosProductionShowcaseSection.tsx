"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Building2,
  Stethoscope,
  Laptop,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";

interface CaseStory {
  id: string;
  industry: string;
  client: string;
  headline: string;
  headache: string;
  solution: string;
  beforeAfter: { before: string; after: string; metricLabel: string; percentReduction: number };
  href: string;
  icon: typeof Building2;
  accent: string;
  beamColor: string;
}

const STORIES: CaseStory[] = [
  {
    id: "logistics",
    industry: "Logistics & Freight",
    client: "500-Person Freight Operator",
    headline: "Automating 400+ supplier invoices every single morning",
    headache: "Four finance managers spent 4 hours every morning manually cross-referencing messy PDF carrier invoices with purchase orders in NetSuite. Typos caused supplier disputes and delayed payments.",
    solution: "We built an autonomous background assistant that reads multi-page PDFs, verifies line items and tax IDs against their database, and automatically stages clean journal entries.",
    beforeAfter: {
      before: "4 hours daily",
      after: "30 seconds",
      metricLabel: "Reconciliation Time",
      percentReduction: 98
    },
    href: "/case-studies",
    icon: Building2,
    accent: "text-blue-600 dark:text-sky-400",
    beamColor: "from-blue-500 via-sky-400 to-indigo-500"
  },
  {
    id: "healthcare",
    industry: "Healthcare Network",
    client: "12-Location Specialty Clinics",
    headline: "Instant policy answers from 800+ pages of medical insurance rules",
    headache: "Doctors and clinical coordinators were losing 20+ minutes per patient trying to find specific insurance pre-authorization rules buried in 800-page policy binders.",
    solution: "We deployed an air-gapped search tool hosted directly inside their private, HIPAA-compliant VPC. Clinicians ask natural questions and get verified answers with page citations in under 2 seconds.",
    beforeAfter: {
      before: "20 min per patient",
      after: "2 seconds",
      metricLabel: "Pre-Auth Lookup",
      percentReduction: 99
    },
    href: "/case-studies",
    icon: Stethoscope,
    accent: "text-purple-600 dark:text-purple-400",
    beamColor: "from-purple-500 via-pink-400 to-indigo-500"
  },
  {
    id: "saas",
    industry: "B2B Cloud SaaS",
    client: "Series B Cloud Infrastructure",
    headline: "Capturing and booking international enterprise leads after hours",
    headache: "High-value enterprise leads coming in from London and Singapore after US business hours waited 14+ hours for an email reply. Over 35% booked demos with competitors instead.",
    solution: "We deployed an intelligent qualification copilot that instantly answers technical security questions, verifies company size and requirements, and books demos on sales reps' calendars 24/7.",
    beforeAfter: {
      before: "14-hour delay",
      after: "Instant (24/7)",
      metricLabel: "Lead Response Time",
      percentReduction: 95
    },
    href: "/case-studies",
    icon: Laptop,
    accent: "text-emerald-600 dark:text-emerald-400",
    beamColor: "from-emerald-500 via-teal-400 to-blue-500"
  }
];

function ShowcaseStoryCard({
  story,
  isSelected,
  onClick
}: {
  story: CaseStory;
  isSelected: boolean;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 240,
    damping: 28
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 240,
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
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1100,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`relative rounded-[2px] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden ${
        isSelected
          ? "bg-white dark:bg-[#111114] border-black dark:border-white/30 shadow-xl"
          : "bg-neutral-50/70 dark:bg-white/[0.02] border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-white/[0.04]"
      }`}
    >
      {/* Jimo-style animated top border beam on selected card */}
      {isSelected && (
        <div
          className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r ${story.beamColor} pointer-events-none z-20`}
        />
      )}

      <div>
        {/* Top Metadata: Industry & Client */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 flex items-center space-x-1.5">
            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
            <span>{story.industry}</span>
          </span>
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-medium">
            {story.client}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white tracking-tight mb-3">
          {story.headline}
        </h3>

        {/* The Real Headache */}
        <div className="mb-4 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
          <strong className="text-neutral-800 dark:text-neutral-200 block mb-1">
            The Challenge:
          </strong>
          {story.headache}
        </div>

        {/* What We Shipped */}
        <div className="mb-6 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal p-3 rounded-[2px] bg-neutral-100/70 dark:bg-white/[0.04] border border-neutral-200/60 dark:border-white/[0.06]">
          <strong className="text-black dark:text-white block mb-1 font-semibold">
            What We Built:
          </strong>
          {story.solution}
        </div>
      </div>

      {/* Before vs After Impact Box with Jimo Kinetic Meter */}
      <div>
        <div className="pt-4 border-t border-neutral-200/60 dark:border-white/10 mb-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              Before
            </div>
            <div className="text-xs font-mono line-through text-neutral-400">
              {story.beforeAfter.before}
            </div>
          </div>

          <ArrowRight className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-600 shrink-0 mx-2" />

          <div className="text-right">
            <div className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              {story.beforeAfter.metricLabel}
            </div>
            <div className="text-sm font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
              {story.beforeAfter.after}
            </div>
          </div>
        </div>

        {/* Jimo-style micro-telemetry progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mb-1">
            <span>VELOCITY EFFICIENCY</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400">+{story.beforeAfter.percentReduction}%</span>
          </div>
          <div className="h-1 w-full bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 transition-all duration-500"
              style={{ width: `${story.beforeAfter.percentReduction}%` }}
            />
          </div>
        </div>

        <Link
          href={story.href}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors group"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function AnimosProductionShowcaseSection() {
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % STORIES.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + STORIES.length) % STORIES.length);
  };

  return (
    <section
      id="showcase"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden"
    >
      {/* Jimo-Style Concentric Coordinate Depth Rings in Background */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[650px] h-[650px] pointer-events-none -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/10" />
        <div className="absolute inset-[25%] rounded-full border border-dashed border-neutral-400/20 dark:border-white/[0.06]" />
        <div className="absolute inset-[50%] rounded-full border border-neutral-400/15 dark:border-white/[0.04]" />
      </div>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-gradient-to-r from-blue-600/6 via-cyan-500/6 to-purple-600/6 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Editorial Section Header: Human, Relatable, Founder-to-Founder */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span>Real Customer Stories</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-3">
              Real problems we solved. <br />
              <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                Real hours and revenue saved.
              </span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
              Here is what happens when growing businesses replace manual spreadsheets and slow processes with clean, custom AI tools.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-2 mt-6 md:mt-0">
            <button
              onClick={prevStory}
              className="p-3 rounded-[2px] bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous customer story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextStory}
              className="p-3 rounded-[2px] bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-pointer shadow-2xs"
              aria-label="Next customer story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Human Story Cards Grid with 3D Spatial Spring Physics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((story, idx) => (
            <ShowcaseStoryCard
              key={story.id}
              story={story}
              isSelected={idx === activeStory}
              onClick={() => setActiveStory(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
