"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { Sparkles } from "lucide-react";

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

function BlurWord({ children, progress, range }: WordProps) {
  // As scroll passes through the range, opacity goes 0.15 -> 1.0, and blur goes 10px -> 0px
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blurVal = useTransform(progress, range, [10, 0]);
  const filter = useMotionTemplate`blur(${blurVal}px)`;
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="relative inline-block mx-1.5 my-1 sm:mx-2 sm:my-1.5 lg:mx-2.5 lg:my-2">
      <motion.span
        style={{
          opacity,
          filter,
          y,
          willChange: "filter, opacity, transform"
        }}
        className="inline-block text-black dark:text-white font-medium select-none"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function ScrollTextRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the tall 260vh sticky track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const statement =
    "Qrious Tech simplifies AI adoption for modern businesses, enabling teams to automate manual bottlenecks, deploy private intelligence, and launch custom software without engineering overhead.";

  const words = statement.split(" ");

  // Progress bar width indicator across top of sticky section
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] sm:h-[280vh] bg-white dark:bg-[#070709] transition-colors duration-200"
    >
      {/* Pinned Sticky Viewport Window (Stops scrolling and reveals text word-by-word with blur) */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 sm:px-12 z-20">
        {/* Subtle Ambient Radial Spotlight behind text (Animos style) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[1000px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

        {/* Minimalist Top Scroll Progress Bar */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-neutral-200/40 dark:bg-white/5">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500"
          />
        </div>

        <div className="max-w-5xl 2xl:max-w-6xl mx-auto text-center relative z-10 py-8">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12 shadow-2xs backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
            <span>The Qrious Tech Mission</span>
          </div>

          {/* Sticky Word-by-Word Gaussian Blur Text Reveal (Animos.app Signature) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-[68px] font-medium leading-[1.24] tracking-tight max-w-5xl mx-auto">
            {words.map((word, i) => {
              // Stagger each word across the scroll timeline (leaving a little buffer at the end)
              const start = (i / words.length) * 0.85;
              const end = start + 0.12;
              return (
                <BlurWord key={i} progress={scrollYProgress} range={[start, Math.min(1, end)]}>
                  {word}
                </BlurWord>
              );
            })}
          </h2>

          {/* Minimalist Bottom Guide */}
          <div className="mt-10 sm:mt-14 flex items-center justify-center space-x-4 text-xs font-mono text-neutral-400 dark:text-neutral-500">
            <span>Scroll to reveal mission</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
