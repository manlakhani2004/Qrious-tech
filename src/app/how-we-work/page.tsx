"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users2,
  Workflow
} from "lucide-react";

interface ModelItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
  tags: string[];
  idealFor?: string;
  bullets: string[];
}

const models: ModelItem[] = [
  {
    id: "dedicated-teams",
    badge: "Staff Augmentation",
    title: "Dedicated Development Teams",
    desc: "Scale your product capacity instantly with an embedded development team that works as a seamless, transparent extension of your in-house engineering.",
    image: "/images/resource/dedicated-teams-cover.png",
    tags: ["Tech Lead", "Senior Developers", "QA Automation", "DevOps"],
    idealFor: "Enterprises needing agile engineering velocity without recruitment overhead.",
    bullets: [
      "Direct communication via your Slack, Teams, or Jira",
      "Pre-screened developers matched to your tech stack within 48h",
      "Overlapping time-zone coverage for USA & European markets",
      "100% IP ownership & continuous code reviews"
    ]
  },
  {
    id: "saas-partner",
    badge: "Product Partnership",
    title: "SaaS Development Partner",
    desc: "Turn your software idea into a market-ready SaaS product. We take you from MVP conceptualization and architecture to production deployment and launch.",
    image: "/images/resource/saas-partner-cover.png",
    tags: ["Startups & Scaleups", "MVP to Production", "Multi-Tenant", "Cloud Infra"],
    idealFor: "Founders and enterprises launching new digital SaaS initiatives.",
    bullets: [
      "End-to-end product architecture and UX wireframing",
      "Multi-tenant database schema & secure auth design",
      "Automated CI/CD pipelines on AWS / Google Cloud",
      "Rapid 90-day zero-to-one MVP release sprints"
    ]
  },
  {
    id: "ai-modernization",
    badge: "AI Integration",
    title: "AI Modernization Partner",
    desc: "Modernize your existing legacy product with AI. We re-engineer workflows, integrate LLMs or predictive machine learning models, and unlock intelligent features.",
    image: "/images/resource/ai-modernization-cover.png",
    tags: ["Legacy Modernization", "LLM Integration", "Automated Workflows", "AI Audit"],
    idealFor: "Established products looking to automate processes and integrate generative AI.",
    bullets: [
      "Comprehensive architectural and data readiness audit",
      "Custom LLM fine-tuning, embeddings, and RAG pipelines",
      "Intelligent document parsing and computer vision",
      "Enterprise data privacy & zero data-leakage protocols"
    ]
  }
];

// Single Overlapping Card component with scroll-linked scale and depth
function OverlappingCard({
  model,
  index,
  total
}: {
  model: ModelItem;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Scale down subtly (1.0 -> 0.94) as subsequent cards scroll over it
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index - 1) * 0.035]
  );

  // Subtle opacity dimming for layered depth as newer cards overlap
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === total - 1 ? 1 : 0.85]
  );

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{
        // Staggered sticky top position so cards overlap like a stacked deck
        top: `calc(90px + ${index * 26}px)`,
        zIndex: index + 10,
        marginBottom: `${(total - index - 1) * 20}px`
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="bg-white dark:bg-[#121215] rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-14 border border-neutral-200/90 dark:border-neutral-800 shadow-[0_-12px_36px_rgba(0,0,0,0.06),0_24px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_-12px_36px_rgba(0,0,0,0.4),0_24px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column: Number, Badge, Title, Bullets, Tags */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 font-mono tracking-tight">
                ({String(index + 1).padStart(2, "0")})
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                <span>{model.badge}</span>
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12]">
              {model.title}
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed font-normal">
              {model.desc}
            </p>

            {/* Bullets with divider lines */}
            <div className="pt-2 divide-y divide-neutral-200/80 dark:divide-neutral-800 border-y border-neutral-200/80 dark:border-neutral-800">
              {model.bullets.map((bullet, bIdx) => (
                <div key={bIdx} className="py-3 flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                  <span className="text-sm sm:text-[15px] font-semibold text-neutral-900 dark:text-neutral-100">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech & Focus Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {model.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 text-sm font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                <span>Explore this model</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-inner group">
            <Image
              src={model.image}
              alt={model.title}
              fill
              sizes="(max-width: 1024px) 100vw, 450px"
              className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowWeWorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <Layers className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Engagement Models</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              How We Work: <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Flexible Models for Every Scale</span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Every business has unique needs. Choose the engagement model that aligns with your product goals, team structure, and growth timeline.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/working-methodology"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
              >
                <span>Working Methodology</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Overlapping Stacking Cards Section (as user scrolls, cards overlap each other) */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-16 pb-20">
            {models.map((model, index) => (
              <OverlappingCard
                key={model.id}
                model={model}
                index={index}
                total={models.length}
              />
            ))}
          </div>
        </section>

        {/* Consultation CTA Banner */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] overflow-hidden bg-neutral-900 dark:bg-[#121215] border border-transparent dark:border-neutral-800 text-white p-8 sm:p-14 text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Kickstart Your Product</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to collaborate with a verified engineering pod?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Tell us about your technical roadmap and timeline. We’ll match senior engineers to your stack within 48 hours.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-100 transition-all duration-200 shadow-md active:scale-95"
              >
                Schedule Architecture Call
              </Link>
              <Link
                href="/working-methodology"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all duration-200"
              >
                Explore Working Methodology
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
