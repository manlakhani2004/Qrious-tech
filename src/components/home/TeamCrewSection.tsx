"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users2, ArrowRight, Orbit, RefreshCw } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

// Generate all 89 authentic team members from public/images/staff-headshots/1.webp to 89.webp
const ALL_STAFF_MEMBERS = Array.from({ length: 89 }, (_, idx) => ({
  id: idx + 1,
  src: `/images/staff-headshots/${idx + 1}.webp`,
  alt: `Qtech Team Member`
}));

// 4 Concentric Circular Orbits with Large Avatars (Total: 12 + 18 + 26 + 33 = 89 members)
const ORBIT_RING_1 = ALL_STAFF_MEMBERS.slice(0, 12);  // 12 members (Radius: 180px)
const ORBIT_RING_2 = ALL_STAFF_MEMBERS.slice(12, 30); // 18 members (Radius: 300px)
const ORBIT_RING_3 = ALL_STAFF_MEMBERS.slice(30, 56); // 26 members (Radius: 420px)
const ORBIT_RING_4 = ALL_STAFF_MEMBERS.slice(56, 89); // 33 members (Radius: 540px)

// Precomputed clean orbital coordinate calculator (avoids floating point & Turbopack SSR hydration mismatch)
function getOrbitCoord(radius: number, index: number, total: number) {
  const angle = (index / total) * 360;
  const rad = (angle * Math.PI) / 180;
  const x = Math.round(radius * Math.cos(rad) * 100) / 100;
  const y = Math.round(radius * Math.sin(rad) * 100) / 100;
  return {
    left: x >= 0 ? `calc(50% + ${x}px)` : `calc(50% - ${Math.abs(x)}px)`,
    top: y >= 0 ? `calc(50% + ${y}px)` : `calc(50% - ${Math.abs(y)}px)`,
    transform: "translate(-50%, -50%)"
  };
}

// Horizontal Tracks Distribution (for fallback / toggle)
const ROW_1 = ALL_STAFF_MEMBERS.slice(0, 23);
const ROW_2 = ALL_STAFF_MEMBERS.slice(23, 45);
const ROW_3 = ALL_STAFF_MEMBERS.slice(45, 67);
const ROW_4 = ALL_STAFF_MEMBERS.slice(67, 89);

export default function TeamCrewSection() {
  const [streamStyle, setStreamStyle] = useState<"circular" | "horizontal">("circular");
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 overflow-hidden relative transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative z-10">
        {/* Motive Centered Header with Authentic Text from index.html (Lines 2295-2300) */}
        <ScrollReveal className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Users2 className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>The Crew @ Qtech</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight mb-4 leading-tight">
            Teamwork is the only <br className="hidden sm:inline" />
            <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">way we work</span>
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Strength in Unity, Success in Teamwork. Our 88+ team members collaborate daily to build visionary products and empower global enterprises.
          </p>

          {/* Interactive Stream Style Switcher: Circular Stream vs Horizontal Stream */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <div className="inline-flex items-center p-1 bg-neutral-100 dark:bg-white/[0.06] rounded-full border border-neutral-200/80 dark:border-white/10 shadow-2xs backdrop-blur-sm">
              <button
                onClick={() => setStreamStyle("circular")}
                className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  streamStyle === "circular"
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <Orbit className="w-3.5 h-3.5" />
                <span>Circular Stream (89 in Orbit)</span>
              </button>

              <button
                onClick={() => setStreamStyle("horizontal")}
                className={`inline-flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  streamStyle === "horizontal"
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Horizontal Stream</span>
              </button>
            </div>

            <Link
              href="/crew"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* ========================================================================= */}
      {/* 1. EXPANDED CIRCULAR STREAM: 4 CONCENTRIC ORBITAL RINGS WITH LARGE AVATARS */}
      {/* ========================================================================= */}
      {streamStyle === "circular" && (
        <div
          className="relative w-full overflow-hidden flex items-center justify-center py-6 sm:py-10 min-h-[500px] xs:min-h-[560px] sm:min-h-[740px] md:min-h-[880px] lg:min-h-[1050px] xl:min-h-[1220px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle Ambient Radial Lighting in Center */}
          <div className="absolute w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-orange-100/35 via-neutral-100/40 to-blue-50/25 dark:from-orange-950/20 dark:via-neutral-900/20 dark:to-blue-950/20 blur-3xl pointer-events-none" />

          {/* Scaled Circular Container: 1180px base responsive on all viewports */}
          <div
            suppressHydrationWarning
            className="relative w-[1180px] h-[1180px] shrink-0 scale-[0.32] xs:scale-[0.38] sm:scale-[0.55] md:scale-[0.68] lg:scale-[0.84] xl:scale-100 origin-center transition-transform"
          >
            {/* Dashed Orbital Guide Lines */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Ring 1 Track (Diameter: 360px) */}
              <div className="w-[360px] h-[360px] rounded-full border border-dashed border-neutral-300/80 dark:border-neutral-700/80" />
              {/* Ring 2 Track (Diameter: 600px) */}
              <div className="w-[600px] h-[600px] rounded-full border border-dashed border-neutral-300/80 dark:border-neutral-700/80 absolute" />
              {/* Ring 3 Track (Diameter: 840px) */}
              <div className="w-[840px] h-[840px] rounded-full border border-dashed border-neutral-300/80 dark:border-neutral-700/80 absolute" />
              {/* Ring 4 Track (Diameter: 1080px) */}
              <div className="w-[1080px] h-[1080px] rounded-full border border-dashed border-neutral-300/80 dark:border-neutral-700/80 absolute" />
            </div>

            {mounted && (
              <>
                {/* RING 4 (OUTERMOST ORBIT): 33 Team Members -> Radius 540px, Counter-Clockwise */}
                <motion.div
                  animate={{ rotate: isPaused ? undefined : -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 80,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  {ORBIT_RING_4.map((member, i) => (
                    <div
                      key={`r4-${member.id}`}
                      className="absolute"
                      style={getOrbitCoord(540, i, ORBIT_RING_4.length)}
                    >
                      {/* Counter-rotate avatar so face stays perfectly upright */}
                      <motion.div
                        animate={{ rotate: isPaused ? undefined : 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 80,
                          ease: "linear"
                        }}
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-neutral-100 border-4 border-white shadow-lg hover:scale-125 hover:shadow-2xl hover:border-black transition-all duration-300 cursor-default"
                      >
                        <Image
                          src={member.src}
                          alt={member.alt}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                {/* RING 3 (MIDDLE-OUTER ORBIT): 26 Team Members -> Radius 420px, Clockwise */}
                <motion.div
                  animate={{ rotate: isPaused ? undefined : 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 65,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  {ORBIT_RING_3.map((member, i) => (
                    <div
                      key={`r3-${member.id}`}
                      className="absolute"
                      style={getOrbitCoord(420, i, ORBIT_RING_3.length)}
                    >
                      {/* Counter-rotate avatar so face stays perfectly upright */}
                      <motion.div
                        animate={{ rotate: isPaused ? undefined : -360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 65,
                          ease: "linear"
                        }}
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-neutral-100 border-4 border-white shadow-lg hover:scale-125 hover:shadow-2xl hover:border-black transition-all duration-300 cursor-default"
                      >
                        <Image
                          src={member.src}
                          alt={member.alt}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                {/* RING 2 (MIDDLE-INNER ORBIT): 18 Team Members -> Radius 300px, Counter-Clockwise */}
                <motion.div
                  animate={{ rotate: isPaused ? undefined : -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 52,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  {ORBIT_RING_2.map((member, i) => (
                    <div
                      key={`r2-${member.id}`}
                      className="absolute"
                      style={getOrbitCoord(300, i, ORBIT_RING_2.length)}
                    >
                      {/* Counter-rotate avatar clockwise to stay upright */}
                      <motion.div
                        animate={{ rotate: isPaused ? undefined : 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 52,
                          ease: "linear"
                        }}
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-neutral-100 border-4 border-white shadow-lg hover:scale-125 hover:shadow-2xl hover:border-black transition-all duration-300 cursor-default"
                      >
                        <Image
                          src={member.src}
                          alt={member.alt}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                {/* RING 1 (INNER ORBIT): 12 Team Members -> Radius 180px, Clockwise */}
                <motion.div
                  animate={{ rotate: isPaused ? undefined : 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 38,
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  {ORBIT_RING_1.map((member, i) => (
                    <div
                      key={`r1-${member.id}`}
                      className="absolute"
                      style={getOrbitCoord(180, i, ORBIT_RING_1.length)}
                    >
                      {/* Counter-rotate avatar counter-clockwise to stay upright */}
                      <motion.div
                        animate={{ rotate: isPaused ? undefined : -360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 38,
                          ease: "linear"
                        }}
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden bg-neutral-100 border-4 border-white shadow-lg hover:scale-125 hover:shadow-2xl hover:border-black transition-all duration-300 cursor-default"
                      >
                        <Image
                          src={member.src}
                          alt={member.alt}
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </>
            )}

            {/* CENTRAL NUCLEUS: The Authentic Hub of Qrious Tech */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white dark:bg-[#121215] border-2 border-neutral-200/90 dark:border-neutral-800 shadow-2xl flex flex-col items-center justify-center p-5 text-center z-30 group hover:scale-105 transition-transform duration-300">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden mb-2 shrink-0">
                  <Image
                    src="/images/qt-logo/mark.png"
                    alt="Qrious Tech Logo"
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div className="text-sm sm:text-base font-extrabold text-black dark:text-white tracking-tight leading-tight">
                  88+ Members
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mt-0.5">
                  In-House Pods
                </div>
                <div className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] font-bold text-[#f26522] mt-2">
                  <span className="w-2 h-2 rounded-full bg-[#f26522] animate-pulse" />
                  <span>Ahmedabad HQ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. HORIZONTAL STREAM (ALTERNATIVE MODE VIA TOGGLE) */}
      {/* ============================================================== */}
      {streamStyle === "horizontal" && (
        <div className="relative w-full overflow-hidden space-y-4 py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/80 to-transparent z-20 pointer-events-none" />

          {/* Track 1: Scrolling Left */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
              className="flex items-center space-x-4 w-max"
            >
              {[...ROW_1, ...ROW_1].map((member, idx) => (
                <div
                  key={`hr1-${idx}`}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl hover:scale-108 hover:border-black dark:hover:border-white transition-all duration-300 shrink-0 cursor-default"
                >
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Track 2: Scrolling Right */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
              className="flex items-center space-x-4 w-max"
            >
              {[...ROW_2, ...ROW_2].map((member, idx) => (
                <div
                  key={`hr2-${idx}`}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl hover:scale-108 hover:border-black dark:hover:border-white transition-all duration-300 shrink-0 cursor-default"
                >
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Track 3: Scrolling Left */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
              className="flex items-center space-x-4 w-max"
            >
              {[...ROW_3, ...ROW_3].map((member, idx) => (
                <div
                  key={`hr3-${idx}`}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl hover:scale-108 hover:border-black dark:hover:border-white transition-all duration-300 shrink-0 cursor-default"
                >
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Track 4: Scrolling Right */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex items-center space-x-4 w-max"
            >
              {[...ROW_4, ...ROW_4].map((member, idx) => (
                <div
                  key={`hr4-${idx}`}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs hover:shadow-xl hover:scale-108 hover:border-black dark:hover:border-white transition-all duration-300 shrink-0 cursor-default"
                >
                  <Image
                    src={member.src}
                    alt={member.alt}
                    fill
                    sizes="144px"
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* Motive Bottom Metrics Strip */}
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mt-12 sm:mt-14">
        <div className="bg-[#f8f8f9] dark:bg-[#121215] border border-transparent dark:border-neutral-800 hover:border-neutral-200/60 dark:hover:border-neutral-700 rounded-[28px] p-6 sm:p-8 shadow-xs hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/70 dark:divide-neutral-800">
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight">
                88+
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                Full-Time Team Members
              </p>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight">
                100%
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                Collaborative In-House Talent
              </p>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight">
                500+
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                Projects Successfully Delivered
              </p>
            </div>
            <div className="pt-3 sm:pt-0 flex flex-col items-center justify-center">
              <Link
                href="/crew"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
              >
                <span>Explore Life @ Qtech</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1">
                Ahmedabad Headquarters
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
