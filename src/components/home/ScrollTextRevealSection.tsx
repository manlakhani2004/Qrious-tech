"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface ScrollTextRevealSectionProps {
  text?: string;
}

export default function ScrollTextRevealSection({
  text = "Qrious Tech simplifies AI adoption for modern businesses, enabling teams to automate manual bottlenecks, deploy private intelligence, and launch custom software without engineering overhead."
}: ScrollTextRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001
  });

  // Jimo-Style Concentric Wireframe Rotation & Scaling
  const ringRotate = useTransform(smoothProgress, [0, 1], [0, 90]);
  const ringScale = useTransform(smoothProgress, [0, 0.5, 1], [0.88, 1.05, 0.95]);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const currentScroll = totalScrollable > 0 ? -rect.top / totalScrollable : 0;
      setProgress(Math.max(0, Math.min(1, currentScroll)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const words = text.split(" ");
  const total = words.length;

  // Animos exact kinematics constants
  const maxBlur = 6; // px (refined Gaussian blur)
  const minOpacity = 0.12; // deep muted initial contrast
  const minScale = 0.92; // 3D depth pop
  const maxTranslateY = 16; // px vertical travel
  const maxRotateX = 24; // deg 3D perspective tilt

  const progressPercent = Math.min(100, Math.round(progress * 100));

  return (
    <section
      ref={containerRef}
      style={{ height: "190vh" }}
      className="relative bg-white dark:bg-[#09090b] transition-colors duration-300 border-b border-neutral-200/80 dark:border-white/10"
    >
      {/* Sticky Viewport Window with 1000px 3D perspective */}
      <div
        className="sticky top-0 flex min-h-screen items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden z-20"
        style={{ perspective: "1000px" }}
      >
        {/* Jimo-Style Concentric Orbital Depth Wireframe Funnel */}
        <motion.div
          style={{ rotate: ringRotate, scale: ringScale }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[900px] h-[720px] sm:h-[900px] pointer-events-none -z-10 opacity-35 dark:opacity-25"
        >
          <div className="absolute inset-0 rounded-full border border-neutral-300 dark:border-white/10" />
          <div className="absolute inset-[15%] rounded-full border border-dashed border-neutral-400/40 dark:border-white/[0.08]" />
          <div className="absolute inset-[30%] rounded-full border border-neutral-300 dark:border-white/[0.06]" />
          <div className="absolute inset-[45%] rounded-full border border-dashed border-neutral-400/30 dark:border-white/[0.04]" />
          {/* Subtle crosshairs inside concentric rings */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-neutral-200 dark:bg-white/[0.04]" />
          <div className="absolute left-0 right-0 top-1/2 h-px bg-neutral-200 dark:bg-white/[0.04]" />
        </motion.div>

        {/* Four-Corner Cartesian Coordinate Crosshairs */}
        <div className="absolute top-8 left-8 hidden sm:flex items-center space-x-1 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 select-none">
          <span className="text-blue-500 font-bold">+</span>
          <span>SYS.LAT: 23.0225° N</span>
        </div>
        <div className="absolute top-8 right-8 hidden sm:flex items-center space-x-1 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 select-none">
          <span>SYS.LON: 72.5714° E</span>
          <span className="text-blue-500 font-bold">+</span>
        </div>
        <div className="absolute bottom-10 left-8 hidden sm:flex items-center space-x-1 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 select-none">
          <span className="text-blue-500 font-bold">+</span>
          <span>ENGINE: QRIOUS // CORE</span>
        </div>
        <div className="absolute bottom-10 right-8 hidden sm:flex items-center space-x-2 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>SCROLL KINETICS: ACTIVE</span>
          <span className="text-blue-500 font-bold">+</span>
        </div>

        {/* Subtle Atmospheric Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[950px] h-[360px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

        {/* Typographical Statement with Word Luminosity Bloom */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>The Enterprise Manifesto</span>
          </div>

          <p
            className="max-w-[1000px] text-center font-medium select-none text-neutral-900 dark:text-[#ededed]"
            style={{
              fontSize: "clamp(1.6rem, 3.4vw, 2.65rem)",
              lineHeight: 1.34,
              letterSpacing: "-0.8px"
            }}
          >
            {words.map((word, idx) => {
              // Effective progress mapped to reveal all words by ~0.84 of sticky track
              const activeRange = 0.84;
              const normProgress = Math.min(1, progress / activeRange);

              // Stagger with smooth liquid wave overlap
              const wordStart = idx / total;
              const rawY = (normProgress - wordStart) * (total / 1.6);
              const w = Math.max(0, Math.min(1, rawY));

              const blur = maxBlur * (1 - w);
              const opacity = minOpacity + (1 - minOpacity) * w;
              const scale = minScale + (1 - minScale) * w;
              const translateY = maxTranslateY * (1 - w);
              const rotateX = maxRotateX * (1 - w);
              const isFullyLit = w >= 0.95;

              return (
                <span key={idx}>
                  <span
                    style={{
                      display: "inline-block",
                      filter: `blur(${blur.toFixed(2)}px)`,
                      opacity: Number(opacity.toFixed(3)),
                      transform: `scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px) rotateX(${rotateX.toFixed(1)}deg)`,
                      transformOrigin: "50% 100%",
                      willChange: "filter, opacity, transform",
                      transition:
                        "filter 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
                      textShadow: isFullyLit
                        ? "0 0 24px rgba(59, 130, 246, 0.25)"
                        : "none"
                    }}
                  >
                    {word}
                  </span>
                  {idx < total - 1 ? " " : ""}
                </span>
              );
            })}
          </p>

          {/* Jimo-Style Telemetry Scroll Progress Bar */}
          <div className="mt-10 flex items-center space-x-3 text-xs font-mono text-neutral-400 dark:text-neutral-500">
            <span>0%</span>
            <div className="w-40 sm:w-56 h-[2px] bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-black dark:text-white font-bold min-w-[36px]">{progressPercent}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
