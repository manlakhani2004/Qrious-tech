"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SerkoDisruptionWorkflowStudio from "./SerkoDisruptionWorkflowStudio";

export default function AboutProductIdeaSection() {
  return (
    <section
      id="capabilities"
      className="py-16 sm:py-20 lg:py-28 bg-transparent border-b border-neutral-200/80 dark:border-white/[0.08] relative transition-colors duration-200"
    >
      {/* Jimo-Style Concentric Coordinate Depth Rings */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[650px] h-[650px] pointer-events-none -z-10 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 rounded-full border border-neutral-400/30 dark:border-white/10" />
        <div className="absolute inset-[25%] rounded-full border border-dashed border-neutral-400/20 dark:border-white/[0.06]" />
        <div className="absolute inset-[50%] rounded-full border border-neutral-400/15 dark:border-white/[0.04]" />
      </div>

      {/* Ambient background grid with subtle central radial fade */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_30%,transparent_100%)]" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Editorial Section Header: Human, Honest, Compelling (EXACT UNCHANGED) */}
        <ScrollReveal className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>What We Actually Build</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-[#09090b] dark:text-[#f8f9fa] tracking-tight leading-[1.12] mb-4">
            Less busywork. More work that actually moves your business forward.
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            Most AI demos look cool in a sandbox and break in production. We don’t build toy chatbots or generic prompt wrappers. We build reliable, tailored software that connects to your existing tools so your team gets hours of their week back.
          </p>
        </ScrollReveal>

        {/* Serko-Style Disruption & Workflow Studio */}
        <SerkoDisruptionWorkflowStudio />
      </div>
    </section>
  );
}
