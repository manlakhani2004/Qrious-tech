"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Bot, ShieldCheck, CheckCircle2, Zap, Lock, Cpu } from "lucide-react";
import { motion, AnimatePresence, useInView, animate } from "motion/react";
import HeroInteractiveCanvas from "./HeroInteractiveCanvas";
import HeroInteractiveConsole from "./HeroInteractiveConsole";

// Modern Interactive Stat Counter that counts up when scrolled into view
function StatCounter({
  value,
  suffix = "+",
  duration = 2.2
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.round(latest))
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums font-black">
      {count}
      <span className="text-neutral-400 dark:text-neutral-500 font-extrabold ml-0.5">{suffix}</span>
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Clear, direct AI headers focused on providing AI to businesses
  const heroSlides = [
    {
      badge: "AI Solutions for Businesses",
      titlePrefix: "Building & Deploying AI",
      titleSuffix: "For Your Business.",
      description:
        "We help companies automate daily operations, build custom AI agents, and integrate smart software that saves hours of manual work and accelerates business growth."
    },
    {
      badge: "Custom AI Agents • Workflow Automation",
      titlePrefix: "We Make AI Work",
      titleSuffix: "For Your Business.",
      description:
        "From intelligent document search to autonomous customer workflows and custom software, we deliver reliable, ready-to-use AI solutions tailored to your business."
    }
  ];

  // Auto-switch between slides in a continuous smooth loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 2xl:pt-40 2xl:pb-36 bg-transparent transition-colors duration-200">
      {/* Interactive Cursor-Reactive Neural Canvas (Tracks Cursor Arrow & Click Shockwaves) */}
      <HeroInteractiveCanvas />

      {/* Stripe Radiant Aurora Mesh */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] 2xl:w-[1100px] h-[480px] bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-purple-500/10 dark:from-indigo-600/15 dark:via-blue-600/15 dark:to-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Ambient top radial glow for luxury dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl 2xl:max-w-7xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative pt-4 sm:pt-6">
        {/* Animated Loop for AI Leadership Headlines */}
        <div className="min-h-[220px] sm:min-h-[250px] lg:min-h-[270px] 2xl:min-h-[320px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0
                  }
                },
                exit: {
                  opacity: 0,
                  x: 30,
                  transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto"
            >
              {/* Pillar Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>{heroSlides[currentSlide].badge}</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[68px] xl:text-[76px] 2xl:text-[90px] 3xl:text-[102px] font-extrabold tracking-tight text-black dark:text-white max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto leading-[1.12] mb-5 break-words">
                <motion.span
                  className="block text-black dark:text-white"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {heroSlides[currentSlide].titlePrefix}
                </motion.span>
                <motion.span
                  className="block mt-1 sm:mt-1.5 text-neutral-500 dark:text-neutral-400 font-extrabold"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {heroSlides[currentSlide].titleSuffix}
                </motion.span>
              </h1>

              {/* Value Statement */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto leading-relaxed font-normal mb-2"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 my-6 2xl:my-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}`}
              className={`h-1.5 2xl:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-7 2xl:w-10 bg-black dark:bg-white" : "w-2 2xl:w-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 z-10"
        >
          {/* Subtle cyan/blue glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] 2xl:w-[720px] h-[220px] 2xl:h-[300px] bg-gradient-to-r from-cyan-200/50 via-blue-200/40 to-purple-200/50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 blur-[90px] 2xl:blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* Primary Button with Motion.dev Spring Physics */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/case-studies"
              className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-8 py-3.5 2xl:px-10 2xl:py-4.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] 2xl:text-base font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200 shadow-md dark:shadow-[0_0_24px_rgba(255,255,255,0.18)]"
            >
              <span>Explore AI Solutions &amp; Case Studies</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Secondary Button with Motion.dev Spring Physics */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 2xl:px-9 2xl:py-4.5 rounded-full bg-white dark:bg-white/[0.05] text-black dark:text-white border border-neutral-200 dark:border-white/10 hover:border-black dark:hover:border-white/30 hover:bg-neutral-50 dark:hover:bg-white/[0.09] transition-colors duration-200 text-[14px] 2xl:text-base font-semibold shadow-2xs backdrop-blur-sm"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive AI Architecture Command Console (Vercel & Stripe style with 3D Parallax & Live Node Telemetry) */}
        <HeroInteractiveConsole />

        {/* Enterprise Impact Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 2xl:mt-24 3xl:mt-28 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 dark:divide-white/10">
            {/* Stat 1: 500+ Projects Done */}
            <div className="text-center sm:px-8 2xl:px-12 pb-8 sm:pb-0 first:pt-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-black dark:text-white tracking-tight leading-none mb-3">
                <StatCounter value={500} />
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                Projects Delivered
              </div>
              <div className="text-xs 2xl:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium">
                AI &amp; Enterprise Platforms Since 2017
              </div>
            </div>

            {/* Stat 2: 84% Average Workflow Acceleration */}
            <div className="text-center sm:px-8 2xl:px-12 py-8 sm:py-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-black dark:text-white tracking-tight leading-none mb-3">
                <StatCounter value={84} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                Task Acceleration
              </div>
              <div className="text-xs 2xl:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium">
                Average Manual Process Reduction
              </div>
            </div>

            {/* Stat 3: 100+ Team Members */}
            <div className="text-center sm:px-8 2xl:px-12 pt-8 sm:pt-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-black dark:text-white tracking-tight leading-none mb-3">
                <StatCounter value={100} />
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                Engineers &amp; Architects
              </div>
              <div className="text-xs 2xl:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium">
                In-House Dedicated AI Pods
              </div>
            </div>
          </div>

          {/* Vercel Enterprise Capability Proof Strip */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-neutral-200/80 dark:border-white/10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>SOC2 Type II &amp; HIPAA Protocol Aligned</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-blue-500" />
              <span>100% Code &amp; IP Ownership Transferred</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Sub-200ms Low-Latency Inference Telemetry</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-purple-500" />
              <span>Dedicated In-House AI Pods (Ahmedabad HQ)</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
