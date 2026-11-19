"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles } from "lucide-react";

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative inline-block mx-1.5 my-1">
      <motion.span
        style={{ opacity, y }}
        className="inline-block text-black dark:text-white transition-colors duration-150"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function ScrollTextRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"]
  });

  const statement =
    "We engineer dedicated autonomous AI agent swarms and private knowledge engines, enabling forward-thinking businesses to automate manual bottlenecks, accelerate engineering velocity, and deploy production software with zero friction.";

  const words = statement.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 lg:py-40 bg-transparent border-b border-neutral-200/80 dark:border-white/10 relative transition-colors duration-200 overflow-hidden"
    >
      {/* Subtle Atmospheric Radial Glow (Animos style) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] 2xl:w-[900px] h-[350px] bg-gradient-to-tr from-blue-500/8 via-cyan-500/8 to-purple-500/8 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-400 mb-8 shadow-2xs backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
          <span>The Qrious Tech Mission</span>
        </div>

        {/* Scroll-Driven Text Reveal (Animos.app Signature Motion) */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-[54px] font-medium leading-[1.28] tracking-tight max-w-4xl mx-auto">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </h2>

        {/* Supporting Signature Subtext */}
        <div className="mt-8 flex items-center justify-center space-x-3 text-xs font-mono text-neutral-400 dark:text-neutral-500">
          <span>100% In-House Engineers</span>
          <span>•</span>
          <span>Air-Gapped Private VPC</span>
          <span>•</span>
          <span>14-Day Delivery Sprints</span>
        </div>
      </div>
    </section>
  );
}
