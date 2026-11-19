"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Compass,
  Rocket,
  Lock,
  GitBranch,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface JourneyStep {
  stepNumber: string;
  phase: string;
  title: string;
  subtitle: string;
  story: string;
  deliverable: string;
  icon: typeof Compass;
}

const STEPS: JourneyStep[] = [
  {
    stepNumber: "01",
    phase: "Phase 1 • Scoping",
    title: "We map what actually slows your team down.",
    subtitle: "Pinpoint real bottlenecks with clear ROI.",
    story: "We sit down on a call with your team and look at the daily tasks that steal their time—whether it's copying data between old systems, answering repetitive emails, or searching through messy contracts. We map out the exact solution and agree on milestones before writing a single line of code.",
    deliverable: "Clear Architecture Plan & Agreed Scope",
    icon: Compass
  },
  {
    stepNumber: "02",
    phase: "Phase 2 • Sprint Build",
    title: "We build it directly into the tools you already use.",
    subtitle: "Daily GitHub commits with zero disruption.",
    story: "You don't need to force your staff to adopt unfamiliar software. We write clean, tested code that plugs right into what you already use—Slack, your CRM, or your company database. You see daily commits on your company GitHub and test real working features as they get built.",
    deliverable: "Working Prototype Tested in Sprints",
    icon: Code2
  },
  {
    stepNumber: "03",
    phase: "Phase 3 • Production",
    title: "We deploy to your private cloud and hand you the keys.",
    subtitle: "100% code ownership. Zero vendor lock-in.",
    story: "We launch the system inside your private cloud environment so your customer data never touches public models. We train your staff so everyone feels empowered, and hand over 100% of the source code, weights, and documentation.",
    deliverable: "Live in Production + Full Code Handover",
    icon: Rocket
  }
];

export default function BusinessAIIntegrationRoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  // Animated energy beam traversing horizontally across the top border of the 3 columns
  const beamWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const beamGlowOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      id="how-we-bring-ai-to-business"
      className="py-20 lg:py-28 2xl:py-36 bg-transparent border-b border-neutral-200/80 dark:border-white/10 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Jimo-Style Concentric Coordinate Depth Rings */}
      <div className="absolute top-1/2 right-[-15%] -translate-y-1/2 w-[700px] h-[700px] pointer-events-none -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/10" />
        <div className="absolute inset-[20%] rounded-full border border-dashed border-neutral-400/20 dark:border-white/[0.06]" />
        <div className="absolute inset-[40%] rounded-full border border-neutral-400/15 dark:border-white/[0.04]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_65%)]" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header: Human, Clear, Honest */}
        <ScrollReveal className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span>How We Work Together</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            From discovery to live production. Fast, transparent, and milestone-driven.
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            No 6-month consulting bloat. No confusing 100-page slide decks. Here is our sprint-by-sprint engineering process tailored to your scope.
          </p>
        </ScrollReveal>

        {/* 3-Step Milestone Flow with Jimo-Style Kinetic Scroll-Linked Energy Beam */}
        <div className="relative border-t border-b border-neutral-200/80 dark:border-white/10">
          
          {/* Scroll-Driven Horizontal Glowing Energy Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden pointer-events-none -translate-y-1/2 z-20">
            <motion.div
              style={{
                width: beamWidth,
                opacity: beamGlowOpacity
              }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 via-sky-400 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/80 dark:divide-white/10">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.stepNumber}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`py-10 lg:py-12 flex flex-col justify-between group transition-colors duration-200 ${
                    idx === 0 ? "lg:pr-10" : idx === 1 ? "lg:px-10" : "lg:pl-10"
                  }`}
                >
                  <div>
                    {/* Step Number & Phase Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-extrabold font-mono text-black dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                        {s.stepNumber}
                      </span>
                      <span className="text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-white/[0.06] px-3 py-1 rounded-[2px] border border-neutral-200/60 dark:border-white/10 group-hover:border-blue-500/40 transition-colors">
                        {s.phase}
                      </span>
                    </div>

                    {/* Subtitle / Headline */}
                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-tight mb-3">
                      {s.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-sky-400 mb-4">
                      {s.subtitle}
                    </p>

                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                      {s.story}
                    </p>
                  </div>

                  {/* Clear Outcome Milestone Box */}
                  <div className="pt-6 border-t border-neutral-100 dark:border-white/[0.06]">
                    <div className="p-3.5 rounded-[2px] bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/10 flex items-center space-x-2.5 group-hover:border-blue-500/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                        {s.deliverable}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-[2px] bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-200/90 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-[2px] bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-black dark:text-white">
                Milestone-Validated Delivery Guarantee
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                We establish clear sprint criteria before starting. You only sign off when working milestones are delivered and tested.
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="group relative overflow-hidden px-6 py-2.5 rounded-[2px] bg-black text-white dark:bg-white dark:text-black hover:text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shadow-sm shrink-0 flex items-center space-x-2"
          >
            <span className="relative z-20 flex items-center space-x-1.5">
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 z-10 translate-y-[50%] scale-0 rounded-full transition-transform duration-350 ease-out group-hover:scale-x-[180%] group-hover:scale-y-[250%] bg-purple-600 pointer-events-none" />
          </Link>
        </div>
      </div>
    </section>
  );
}
