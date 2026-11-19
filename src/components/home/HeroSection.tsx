"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import HeroInteractiveCanvas from "./HeroInteractiveCanvas";
import HeroInteractiveConsole from "./HeroInteractiveConsole";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = (cmd: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
      {/* Local Blueprint Grid (Confined to Hero only, softly fades at edges & bottom) */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.032)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.032)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_40%,transparent_100%)]" />

      {/* Interactive Cursor-Reactive Neural Canvas (Tracks Cursor Arrow & Click Shockwaves) */}
      <div id="hero-interactive-canvas">
        <HeroInteractiveCanvas />
      </div>

      {/* Stripe Radiant Aurora Mesh */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] 2xl:w-[1100px] h-[480px] bg-gradient-to-tr from-indigo-500/10 via-sky-500/10 to-purple-500/10 dark:from-indigo-600/15 dark:via-blue-600/15 dark:to-violet-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Ambient top radial glow for luxury dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl 2xl:max-w-7xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

      <div id="hero-content-wrap" className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative pt-4 sm:pt-6">
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
              {/* Kiro-Style "What's New" Live Radar Ticker */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="mb-3.5 inline-block"
              >
                <Link
                  href="/services/ai-ml-development"
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-[2px] bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/90 dark:border-white/10 text-xs font-mono hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-200 group backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider text-[10.5px]">
                    What’s New
                  </span>
                  <span className="text-neutral-300 dark:text-neutral-700">|</span>
                  <span className="text-neutral-700 dark:text-neutral-300 font-sans font-medium text-[11.5px]">
                    Autonomous Swarms v4.2 • Rapid Agile Delivery
                  </span>
                  <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-0.5 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-all" />
                </Link>
              </motion.div>

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
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[2px] bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-md"
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
              className={`h-1.5 2xl:h-2 rounded-[1px] transition-all duration-300 cursor-pointer ${
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

          {/* Primary Button with Kiro Liquid Expanding Bubble Hover Animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/case-studies"
              className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 2xl:px-10 2xl:py-4.5 rounded-[2px] bg-black text-white dark:bg-white dark:text-black hover:text-white dark:hover:text-white text-[14px] 2xl:text-base font-semibold transition-all duration-300 shadow-md dark:shadow-[0_0_24px_rgba(255,255,255,0.18)] border border-black/10 dark:border-white/20"
            >
              <span className="relative z-20 flex items-center space-x-2">
                <span>Explore AI Solutions &amp; Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              {/* Kiro Signature Radial Expansion Bubble */}
              <span className="absolute inset-0 z-10 translate-y-[50%] scale-0 rounded-full transition-transform duration-350 ease-out group-hover:scale-x-[180%] group-hover:scale-y-[250%] bg-purple-600 dark:bg-purple-600 pointer-events-none" />
            </Link>
          </motion.div>

          {/* Secondary Button with Motion.dev Spring Physics */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 2xl:px-9 2xl:py-4.5 rounded-[2px] bg-white dark:bg-white/[0.05] text-black dark:text-white border border-neutral-200 dark:border-white/10 hover:border-black dark:hover:border-white/30 hover:bg-neutral-50 dark:hover:bg-white/[0.09] transition-colors duration-200 text-[14px] 2xl:text-base font-semibold shadow-2xs backdrop-blur-sm"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Kiro-Style Interactive Quick CLI / SDK Install Command Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-neutral-500 dark:text-neutral-400"
        >
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-[2px] bg-neutral-100/90 dark:bg-black/60 border border-neutral-200/90 dark:border-white/10 shadow-xs backdrop-blur-sm">
            <Terminal className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
            <span className="text-neutral-400 dark:text-neutral-600 select-none">$</span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium">curl -fsSL https://qtech.ai/install | bash</span>
            <button
              onClick={() => handleCopyCommand("curl -fsSL https://qtech.ai/install | bash")}
              className="p-1 rounded-[2px] hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 transition-colors ml-1 cursor-pointer"
              title="Copy install command"
              aria-label="Copy CLI command"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
          <span className="text-[11px] text-neutral-400 dark:text-neutral-500 hidden sm:inline">
            Production Pods • 100% Client IP Ownership
          </span>
        </motion.div>

        {/* Interactive AI Architecture Command Console (Vercel & Stripe style with 3D Parallax & Live Node Telemetry) */}
        <HeroInteractiveConsole />
      </div>
    </section>
  );
}
