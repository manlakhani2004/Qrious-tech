"use client";

import React from "react";
import Link from "next/link";
import { Quote, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  domain: string;
  initials: string;
  quote: string;
  rating: number;
  iconType: number;
}

// 4 Authentic Client Endorsements from Qrious Tech Team LLP
const AUTHENTIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "stuart-rox",
    initials: "SR",
    author: "STUART ROX",
    role: "Founder / CEO",
    domain: "Healthcare & Enterprise Client",
    quote:
      "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
    rating: 5,
    iconType: 0
  },
  {
    id: "lorel-parker",
    initials: "LP",
    author: "LOREL PARKER",
    role: "Chief Technology Officer",
    domain: "SaaS & CRM Enterprise Client",
    quote:
      "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support.",
    rating: 5,
    iconType: 1
  },
  {
    id: "shota-oda",
    initials: "SO",
    author: "SHOTA ODA",
    role: "Chief Executive Officer",
    domain: "Oil & Energy / Mobile Apps",
    quote:
      "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched.",
    rating: 5,
    iconType: 2
  },
  {
    id: "shin-paul",
    initials: "SP",
    author: "SHIN PAUL",
    role: "Co-Founder / Managing Director",
    domain: "Digital Streaming & Music Platform Partner",
    quote:
      "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music-related projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors.",
    rating: 5,
    iconType: 3
  }
];

function BrandMarkIcon({ type }: { type: number }) {
  if (type === 0) {
    // 8-petal pinwheel / asterisks icon (matches Webflow Motive)
    return (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
        <path
          d="M16 4V28M4 16H28M7.5 7.5L24.5 24.5M24.5 7.5L7.5 24.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === 1) {
    // Overlapping parallelogram blocks (matches Webflow Motive)
    return (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
        <rect x="7" y="5" width="18" height="6" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="4" y="13" width="18" height="6" rx="3" fill="currentColor" opacity="0.85" />
        <rect x="10" y="21" width="18" height="6" rx="3" fill="currentColor" />
      </svg>
    );
  }
  if (type === 2) {
    // Abstract geometric loop / ring
    return (
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="3" opacity="0.4" />
        <path
          d="M8 20L24 12"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // Abstract modern geometric polygon
  return (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
      <path
        d="M16 5L26 11V21L16 27L6 21V11L16 5Z"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

export default function ClientFeedbacksSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 overflow-hidden">
      {/* Subtle Ambient Background Watermark Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-10 select-none"
        style={{
          backgroundImage: "url('/images/icons/background-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "280px"
        }}
      />

      <div className="relative max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 z-10">
        {/* CENTER HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 select-none">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-5 backdrop-blur-sm">
            <Quote className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-black dark:text-white tracking-tight mb-5 leading-[1.12]">
            Client experiences that <br />
            speak for our craftsmanship
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Direct feedback from founders, CEOs, and CTOs who accelerate engineering velocity and scale mission-critical products with Qrious Tech Team LLP.
          </p>
        </div>

        {/* AUTHENTIC TESTIMONIAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {AUTHENTIC_TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white dark:bg-[#121215] rounded-[32px] p-7 sm:p-9 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_60px_-16px_rgba(0,0,0,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Specular top-edge highlight in dark mode */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent dark:block hidden pointer-events-none" />

              <div>
                {/* Header: Avatar Badge + Author / Role + BrandMarkIcon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-sm tracking-wider shadow-xs shrink-0 select-none">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-base font-bold text-black dark:text-white tracking-tight leading-snug">
                        {item.author}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
                        {item.role}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 opacity-70">
                    <BrandMarkIcon type={item.iconType} />
                  </div>
                </div>

                {/* Rating Stars + Domain Tag */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-neutral-200/60 dark:border-white/10">
                    {item.domain}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-[15px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Footer: Verified Client Project */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="font-medium text-neutral-600 dark:text-neutral-300">Verified Client Project</span>
                </div>
                <span className="text-[11px] text-neutral-400 dark:text-neutral-500">100% IP &amp; NDA Protected</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Testimonials CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95 group"
          >
            <span>Explore All Client Testimonials</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
