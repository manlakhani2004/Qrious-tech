"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GlobalBackgroundGrid() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Motion.dev spring physics for organic cursor tracking
  const springX = useSpring(mouseX, { stiffness: 180, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 28 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden isolate">
      {/* 1. Continuous Precision Engineering Grid Pattern (Full Homepage) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.038)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.038)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* 2. Interactive Cursor Spotlight on the Grid (Motion.dev & Vercel Style) */}
      {mounted && (
        <motion.div
          className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            x: springX,
            y: springY,
            background:
              "radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.04) 40%, transparent 70%)"
          }}
        />
      )}
    </div>
  );
}

