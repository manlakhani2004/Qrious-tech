"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, AnimatePresence } from "motion/react";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const ITEMS = [
  {
    id: "agents",
    index: "01",
    label: "AI Agents",
    sub: "Autonomous pipelines that execute multi-step work — your team stays in control of every decision.",
    videoSrc: "/GIF/AI_agents_white.mp4",
    href: "/services/ai-ml-development",
  },
  {
    id: "assistants",
    index: "02",
    label: "Intelligent Assistants",
    sub: "One brain for your whole company — answers staff questions, resolves tickets, and drafts reports instantly.",
    videoSrc: "/GIF/AI_assistant.mp4",
    href: "/services/custom-software-development",
  },
  {
    id: "apps",
    index: "03",
    label: "Custom AI Apps",
    sub: "Software built exactly around how you operate — not how a vendor thinks you should.",
    videoSrc: "/GIF/AI_apps.mp4",
    href: "/services/mobile-app-development",
  },
] as const;

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function WhatWeBuildSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  /* scroll tracks the full 400 vh outer container */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      const idx = Math.min(Math.floor(v * ITEMS.length), ITEMS.length - 1);
      setActiveIdx(idx);
    });
    return unsub;
  }, [scrollYProgress]);

  /* jump-scroll on sidebar click */
  const jumpTo = (i: number) => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    // each item occupies 1/3 of the section scroll range
    const perItem = (el.scrollHeight - window.innerHeight) / ITEMS.length;
    window.scrollTo({ top: sectionTop + perItem * i + 10, behavior: "smooth" });
  };

  const active = ITEMS[activeIdx];

  return (
    /* Outer: 400 vh = ~133 vh per item */
    <div
      ref={containerRef}
      id="what-we-build"
      className="relative"
      style={{ height: "400vh" }}
    >
      {/* ── Sticky wrapper — fills viewport while outer scrolls ── */}
      <div className="sticky top-0 h-screen bg-white dark:bg-[#09090b] border-t border-b border-neutral-200/80 dark:border-white/[0.07] overflow-hidden flex flex-col">

        {/* ═══ TOP BAR ════════════════════════════════════════════════════ */}
        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 2xl:px-20 pt-10 sm:pt-12 pb-5 sm:pb-6 border-b border-neutral-100 dark:border-white/[0.05] flex-shrink-0">
          {/* Section eyebrow */}
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500">
            What we build
          </p>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            {ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => jumpTo(i)}
                aria-label={`Go to ${item.label}`}
                className={`block rounded-full transition-all duration-500 focus:outline-none ${
                  i === activeIdx
                    ? "w-8 h-1 bg-neutral-900 dark:bg-white"
                    : "w-1 h-1 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-500 dark:hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ═══ MAIN BODY ══════════════════════════════════════════════════ */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 overflow-hidden">

          {/* ─── LEFT CONTENT COLUMN ─────────────────────────────────── */}
          <div className="flex flex-col px-6 sm:px-10 lg:px-16 2xl:px-20 py-6 sm:py-8 overflow-hidden">

            {/* Video window — contained, not edge-to-edge */}
            <div className="relative flex-1 min-h-0 rounded-2xl sm:rounded-3xl bg-neutral-50 dark:bg-[#111114] border border-neutral-200/70 dark:border-white/[0.07] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-4 sm:p-8"
                >
                  <video
                    src={active.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle corner index badge */}
              <span className="absolute top-4 left-4 font-mono text-[10px] font-bold tracking-widest text-neutral-400 dark:text-neutral-600">
                {active.index} / {String(ITEMS.length).padStart(2, "0")}
              </span>
            </div>

            {/* ─── Bottom text + CTA ─────────────────────────────────── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-5 sm:pt-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 flex-shrink-0"
              >
                <div className="flex-1">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold tracking-tight text-neutral-950 dark:text-white leading-none">
                    {active.label}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-normal max-w-lg leading-relaxed">
                    {active.sub}
                  </p>
                </div>

                <Link
                  href={active.href}
                  className="group inline-flex items-center gap-2.5 self-start sm:self-end shrink-0 mb-0.5"
                >
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors tracking-wide">
                    Explore
                  </span>
                  <span className="w-9 h-9 rounded-full border border-neutral-300 dark:border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 text-neutral-700 dark:text-neutral-200 group-hover:text-white transition-colors" />
                  </span>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── RIGHT SIDEBAR — vertical nav strip ──────────────────── */}
          <div className="hidden lg:flex flex-col justify-center gap-1 pr-10 2xl:pr-14 border-l border-neutral-100 dark:border-white/[0.05] pl-7 2xl:pl-9">
            {ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => jumpTo(i)}
                className={`group flex items-center gap-3 py-3 text-left w-full focus:outline-none transition-all duration-200 ${
                  i === activeIdx
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                {/* Active bar */}
                <span
                  className={`block rounded-full transition-all duration-300 flex-shrink-0 ${
                    i === activeIdx
                      ? "w-4 h-0.5 bg-neutral-900 dark:bg-white"
                      : "w-2 h-0.5 bg-neutral-400 dark:bg-neutral-500 group-hover:w-3"
                  }`}
                />
                <span
                  className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                    i === activeIdx
                      ? "text-neutral-950 dark:text-white"
                      : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}

            {/* Scroll hint */}
            <div
              className={`mt-6 flex flex-col items-center gap-2 transition-opacity duration-500 ${
                activeIdx === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
                scroll
              </span>
              <span className="w-px h-6 bg-gradient-to-b from-neutral-300 to-transparent dark:from-neutral-600 animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
