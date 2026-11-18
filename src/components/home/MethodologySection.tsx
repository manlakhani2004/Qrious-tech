"use client";

import React from "react";
import Image from "next/image";
import {
  LayoutGrid,
  Crosshair,
  BarChart2,
  Code2,
  Rocket
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MethodologySection() {
  // Authentic Working Methodology Steps from Legacy Qtech Website (working-methodology.html)
  const steps = [
    {
      id: "01",
      icon: <Crosshair className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Share Your Business Requirements",
      description:
        "Provide us with your technical requirements, goals, and timeline, and we will tailor the best senior resources to meet your exact criteria.",
      tags: ["Confidential Mutual NDA", "Scope Analysis", "< 24h Turnaround"]
    },
    {
      id: "02",
      icon: <BarChart2 className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Shortlist Developer Profiles",
      description:
        "Within 48 hours, our talent engine shares pre-vetted senior engineer profiles aligned with your tech stack, domain, and time zone for screening.",
      tags: ["Pre-Vetted Senior Engineers", "Time Zone Aligned", "Domain Matching"]
    },
    {
      id: "03",
      icon: <Code2 className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Schedule Technical Interview",
      description:
        "Conduct direct 1-on-1 technical interviews and live coding assessments with the candidates to validate architectural and cultural alignment.",
      tags: ["Direct 1-on-1 Interview", "Code Assessment", "Architecture Review"]
    },
    {
      id: "04",
      icon: <Rocket className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Review Contract & Commence Work",
      description:
        "Review transparent agreements with 100% IP ownership and zero hidden fees. Upon confirmation, developers commence work on the agreed date.",
      tags: ["100% IP Ownership", "Zero Hidden Fees", "Agile Sprint Kickoff"]
    }
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative">
      {/* Subtle Background Watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-10 select-none overflow-hidden -z-10"
        style={{
          backgroundImage: "url('/images/icons/background-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "280px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Motive Centered Section Header (Matching Screenshots 1, 2, 3) */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <LayoutGrid className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>4 Simple Steps</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            From strategy to success <br className="hidden sm:inline" />
            in four steps
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our approach combines strategy, optimization, and engineering rigor to help your brand grow faster with dependable offshore talent.
          </p>
        </ScrollReveal>

        {/* 2-Column Sticky Layout: Left Image Sticks, Right Cards Scroll Past */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative">
          {/* Left Column: Sticky Tall Image Pinned During Scroll */}
          <div className="lg:col-span-5 relative w-full">
            <div className="lg:sticky lg:top-20 xl:top-24 w-full">
              <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/[0.1] h-[600px] sm:h-[680px] lg:h-[calc(100vh-130px)] lg:min-h-[660px] lg:max-h-[820px] w-full shadow-2xl group transition-all duration-300">
                <Image
                  src="/images/4.webp"
                  alt="Qrious Tech engineering team collaborating on project requirements"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-[center_22%] group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                {/* Strategy Badge - Clean without green circle */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 dark:border-neutral-800 shadow-xl text-neutral-900 dark:text-white pointer-events-none">
                  <div className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
                    Strategy &amp; Sprint Kickoff
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-black dark:text-white leading-snug">
                    Senior engineering pod aligning on architecture and delivery milestones
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Step Cards Scrolling Past */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 lg:space-y-12 pb-32 lg:pb-48">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 lg:p-12 border border-neutral-200/70 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 shadow-xs hover:shadow-xl dark:shadow-none transition-all duration-300 group"
              >
                {/* Circular Icon Pill (Matching Motive) */}
                <div className="w-13 h-13 bg-white dark:bg-[#1c1c20] border border-neutral-200/60 dark:border-white/10 rounded-full flex items-center justify-center shadow-xs mb-5 group-hover:scale-105 transition-transform duration-200">
                  {step.icon}
                </div>

                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                  <span>Step {step.id}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-black dark:text-white tracking-tight mb-2.5">
                  {step.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  {step.description}
                </p>

                {/* Capability Tags */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-neutral-200/60 dark:border-white/[0.06]">
                  {step.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white dark:bg-white/[0.05] text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/10 shadow-2xs mt-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
