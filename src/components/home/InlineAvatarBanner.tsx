"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function InlineAvatarBanner() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Motive Inline-Avatar Statement with Scroll Reveal */}
        <ScrollReveal duration={0.75} yOffset={30}>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.3] text-black">
            <span>Qrious Tech helps brands turn </span>
            {/* Avatar Pill 1 */}
            <span className="inline-flex items-center align-middle mx-2 my-1 px-1.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/90 shadow-2xs hover:scale-110 transition-transform duration-200">
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
            <span>technical roadmaps into measurable</span>
            <br className="hidden sm:inline" />
            <span> growth with </span>
            <span className="text-neutral-500 font-normal">smart insights </span>
            {/* Avatar Pill 2 */}
            <span className="inline-flex items-center align-middle mx-2 my-1 px-1.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/90 shadow-2xs hover:scale-110 transition-transform duration-200">
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
            <span className="text-neutral-500 font-normal">and more seamless</span>
            <br className="hidden sm:inline" />
            <span className="text-neutral-500 font-normal">software delivery with </span>
            {/* Avatar Pill 3 */}
            <span className="inline-flex items-center align-middle mx-2 my-1 px-1.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/90 shadow-2xs hover:scale-110 transition-transform duration-200">
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
            <span className="text-neutral-500 font-normal">better results.</span>
          </h2>
        </ScrollReveal>

        {/* Motive Schedule A Call Button with Staggered Scroll Reveal */}
        <ScrollReveal delay={0.2} duration={0.6}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-black text-white text-[14px] font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Schedule a call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
