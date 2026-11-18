"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InlineAvatarBanner() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Authentic Statement with Inline Avatars */}
        <ScrollReveal duration={0.75} yOffset={30}>
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.3] text-black dark:text-white">
            <span>Qrious Tech Team LLP helps enterprises turn </span>
            {/* Avatar Pill 1 */}
            <span className="inline-flex items-center align-middle mx-2 my-1 px-1.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/90 dark:border-white/10 shadow-2xs hover:scale-110 transition-transform duration-200">
              <span className="relative w-10 h-6 sm:w-12 sm:h-7 rounded-full overflow-hidden inline-block">
                <Image
                  src="/images/staff-headshots/14.webp"
                  alt="Qtech Engineer"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            </span>
            <span>product ideas into reality with </span>
            <br className="hidden sm:inline" />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">proven IT solutions </span>
            {/* Avatar Pill 2 */}
            <span className="inline-flex items-center align-middle mx-2 my-1 px-1.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/90 dark:border-white/10 shadow-2xs hover:scale-110 transition-transform duration-200">
              <span className="relative w-10 h-6 sm:w-12 sm:h-7 rounded-full overflow-hidden inline-block">
                <Image
                  src="/images/staff-headshots/22.webp"
                  alt="Qtech Architect"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            </span>
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">and dedicated engineering pods that </span>
            <br className="hidden sm:inline" />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">accelerate your roadmap with </span>
            {/* Avatar Pill 3 */}
            <span className="inline-flex items-center align-middle mx-2 my-1 px-1.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/90 dark:border-white/10 shadow-2xs hover:scale-110 transition-transform duration-200">
              <span className="relative w-10 h-6 sm:w-12 sm:h-7 rounded-full overflow-hidden inline-block">
                <Image
                  src="/images/staff-headshots/32.webp"
                  alt="Qtech Lead"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
            </span>
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">measurable success.</span>
          </h2>
        </ScrollReveal>

        {/* Action Button: Let's Connect */}
        <ScrollReveal delay={0.2} duration={0.6}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Let&apos;s Connect</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
