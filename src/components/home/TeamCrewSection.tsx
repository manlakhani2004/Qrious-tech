"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";

// Generate all 89 authentic team members from public/images/staff-headshots/1.webp to 89.webp
const ALL_STAFF_MEMBERS = Array.from({ length: 89 }, (_, idx) => ({
  id: idx + 1,
  src: `/images/staff-headshots/${idx + 1}.webp`,
  alt: `Qtech Team Member ${idx + 1}`
}));

// 4 Horizontal Stream Tracks Distribution
const ROW_1 = ALL_STAFF_MEMBERS.slice(0, 23);
const ROW_2 = ALL_STAFF_MEMBERS.slice(23, 45);
const ROW_3 = ALL_STAFF_MEMBERS.slice(45, 67);
const ROW_4 = ALL_STAFF_MEMBERS.slice(67, 89);

export default function TeamCrewSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-neutral-100 dark:border-neutral-800 overflow-hidden relative transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative z-10">
        {/* Centered Header */}
        <ScrollReveal className="max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Users2 className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>The Crew @ Qtech</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight mb-4 leading-tight">
            Teamwork is the only <br className="hidden sm:inline" />
            <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">
              way we work
            </span>
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            Strength in Unity, Success in Teamwork. Our 88+ team members collaborate daily to build visionary products and empower global enterprises.
          </p>

          <div className="flex items-center justify-center">
            <Link
              href="/crew"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* ============================================================== */}
      {/* HORIZONTAL STREAM: 4 CONTINUOUS DRIFTING AVATAR TRACKS */}
      {/* ============================================================== */}
      <div className="relative w-full overflow-hidden space-y-4 py-4">
        {/* Left and Right Vignette Fade Masks */}
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

      {/* Bottom Metrics Strip */}
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 mt-12 sm:mt-14">
        <div className="bg-[#f8f8f9] dark:bg-[#121215] border border-neutral-200/80 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 rounded-[28px] p-6 sm:p-8 shadow-xs hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/70 dark:divide-white/10">
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
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
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
