"use client";

import React, { useRef, useState, useEffect } from "react";

interface ScrollTextRevealSectionProps {
  text?: string;
}

export default function ScrollTextRevealSection({
  text = "Qrious Tech simplifies AI adoption for modern businesses, enabling teams to automate manual bottlenecks, deploy private intelligence, and launch custom software without engineering overhead."
}: ScrollTextRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

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

  return (
    <section
      ref={containerRef}
      style={{ height: "185vh" }}
      className="relative bg-white dark:bg-[#000000] transition-colors duration-300"
    >
      {/* Sticky Viewport Window with 1000px 3D perspective (Animos signature) */}
      <div
        className="sticky top-0 flex min-h-screen items-center justify-center px-6 sm:px-10 lg:px-16 overflow-hidden z-20"
        style={{ perspective: "1000px" }}
      >
        {/* Subtle Atmospheric Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[950px] h-[360px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

        {/* Clean, perfectly proportioned typographical statement */}
        <p
          className="max-w-[1000px] text-center font-medium select-none text-neutral-900 dark:text-[#ededed]"
          style={{
            fontSize: "clamp(1.6rem, 3.4vw, 2.65rem)",
            lineHeight: 1.34,
            letterSpacing: "-0.8px"
          }}
        >
          {words.map((word, idx) => {
            // Effective progress mapped to reveal all words by ~0.84 of sticky track, leaving a pause to read
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
                      "filter 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                >
                  {word}
                </span>
                {idx < total - 1 ? " " : ""}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
