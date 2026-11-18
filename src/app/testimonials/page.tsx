"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "motion/react";
import {
  Quote,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

function BrandMarkIcon({ type }: { type: number }) {
  if (type === 0) {
    // 8-petal pinwheel / asterisks icon (matches Webflow Motive / Homepage review)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
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
    // Overlapping parallelogram blocks (matches Webflow Motive / Homepage review)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
        <rect x="7" y="5" width="18" height="6" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="4" y="13" width="18" height="6" rx="3" fill="currentColor" opacity="0.85" />
        <rect x="10" y="21" width="18" height="6" rx="3" fill="currentColor" />
      </svg>
    );
  }
  if (type === 2) {
    // Abstract geometric loop / ring (matches Webflow Motive / Homepage review)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
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
  // Abstract modern geometric polygon (matches Webflow Motive / Homepage review)
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
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

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: "stuart-rox",
      quote:
        "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
      author: "STUART ROX",
      role: "Founder / CEO",
      domain: "Healthcare & Enterprise Client",
      initials: "SR",
      rating: 5
    },
    {
      id: "lorel-parker",
      quote:
        "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support.",
      author: "LOREL PARKER",
      role: "Chief Technology Officer",
      domain: "SaaS & CRM Enterprise Client",
      initials: "LP",
      rating: 5
    },
    {
      id: "shota-oda",
      quote:
        "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched.",
      author: "SHOTA ODA",
      role: "Chief Executive Officer",
      domain: "Oil & Energy / Mobile Apps",
      initials: "SO",
      rating: 5
    },
    {
      id: "shin-paul",
      quote:
        "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music-related projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors.",
      author: "SHIN PAUL",
      role: "Co-Founder / Managing Director",
      domain: "Digital Streaming & Music Platform Partner",
      initials: "SP",
      rating: 5
    },
    {
      id: "healthcare-vp",
      quote:
        "Qrious Tech provided us with dedicated senior full-stack developers who integrated into our HIPAA-compliant pipelines seamlessly. Zero security incidents, sub-second API speeds, and 100% adherence to clinical milestones.",
      author: "HEALTHCARE ENTERPRISE",
      role: "Vice President of Engineering",
      domain: "Telehealth & EMR Integration",
      initials: "HE",
      rating: 5
    },
    {
      id: "fintech-lead",
      quote:
        "Their architects designed a fault-tolerant transaction processing engine that handles over 50,000 operations per minute with sub-50ms latency. The communication was transparent, and sprint deliverables were always on schedule.",
      author: "FINTECH PLATFORM",
      role: "Director of Product Architecture",
      domain: "Financial Technology & Payments",
      initials: "FP",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero */}
        <section className="py-16 sm:py-24 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <Quote className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Verified Client Endorsements</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              The Experiences Behind <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Our Shared Success</span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Read authentic feedback from founders, CEOs, and CTOs who trust Qrious Tech Team LLP to build their AI solutions, automation workflows, and scalable software.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
              >
                <span>Explore 37 Case Studies</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Testimonials 6-Card Grid without images (matches Homepage Review Card Design) */}
        <section className="py-16 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-y border-neutral-100 dark:border-neutral-800/70">
          <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="bg-white dark:bg-[#121215] rounded-[32px] p-7 sm:p-9 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_60px_-16px_rgba(0,0,0,0.16)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Specular top-edge highlight in dark mode */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent dark:block hidden pointer-events-none" />

                  <div>
                    {/* Top Header: Initials Badge + Author & Role + BrandMarkIcon (exactly like Homepage review) */}
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
                        <BrandMarkIcon type={idx % 4} />
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

                    {/* Quote text */}
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

