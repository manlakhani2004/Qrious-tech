"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Workflow,
  Crosshair,
  Users2,
  Code2,
  FileCheck2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles
} from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ReactNode;
  deliverables: string[];
}

function MethodologyStepCard({
  item,
  index,
  total
}: {
  item: StepItem;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Scale down subtly as subsequent cards scroll over it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Subtle opacity dimming for layered depth as newer cards overlap
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === total - 1 ? 1 : 0.88]
  );

  return (
    <div
      ref={cardRef}
      className="sticky scroll-mt-28"
      style={{
        // Staggered sticky top position so cards overlap like a stacked deck
        top: `calc(90px + ${index * 22}px)`,
        zIndex: index + 10,
        marginBottom: `${(total - index - 1) * 20}px`
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="bg-white dark:bg-[#121215] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_-12px_36px_rgba(0,0,0,0.06),0_24px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-300 relative overflow-hidden"
      >
        {/* Subtle top edge specular highlight in dark mode */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent dark:block hidden pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
          <div className="lg:col-span-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700 flex items-center justify-center font-extrabold text-base sm:text-lg text-black dark:text-white shadow-2xs">
              {item.step}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-2">
            <div className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
              {item.subtitle}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white">
              {item.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#f8f8f9] dark:bg-[#18181b] rounded-2xl p-4 sm:p-5 border border-neutral-200/60 dark:border-neutral-800 space-y-2">
            <div className="text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-2">
              Key Deliverables
            </div>
            {item.deliverables.map((del, dIdx) => (
              <div
                key={dIdx}
                className="flex items-center text-xs font-medium text-neutral-800 dark:text-neutral-200 space-x-2"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{del}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkingMethodologyPage() {
  const steps = [
    {
      step: "01",
      title: "Share Your Business Requirements",
      subtitle: "Requirement Discovery",
      desc: "Provide us with your requirements and we will provide you with the best of our resources that would meet your expectations.",
      icon: <Crosshair className="w-5 h-5 text-neutral-800" />,
      deliverables: ["Project Scope Definition", "Tech Stack Architecture", "Resource Matrix Specification"]
    },
    {
      step: "02",
      title: "Get Developer CVs & Profiles",
      subtitle: "Talent Curation",
      desc: "Receive pre-vetted, certified senior engineer profiles tailored to your exact tech stack and time zone requirements within 48 hours.",
      icon: <Users2 className="w-5 h-5 text-neutral-800" />,
      deliverables: ["Curated Candidate Portfolios", "Code Samples & Repos", "Verified Technical Ratings"]
    },
    {
      step: "03",
      title: "Schedule Technical Interview",
      subtitle: "Live Technical Validation",
      desc: "You can schedule a direct live interview to validate the candidates we provide for your concern, reviewing code quality and architectural fit.",
      icon: <Code2 className="w-5 h-5 text-neutral-800" />,
      deliverables: ["1-on-1 Video Assessment", "Live Pair Programming", "Cultural & Communication Check"]
    },
    {
      step: "04",
      title: "Review and Sign Contract",
      subtitle: "Transparent Agreement",
      desc: "Our team is here to assist you throughout the contract review and signing process with 100% intellectual property assignment and clear terms.",
      icon: <FileCheck2 className="w-5 h-5 text-neutral-800" />,
      deliverables: ["Mutual NDA Execution", "100% IP Ownership Guarantee", "Transparent Sprint Milestones"]
    },
    {
      step: "05",
      title: "Get Started & Sprint Launch",
      subtitle: "Continuous Delivery",
      desc: "Upon your confirmation, our developer will commence work on the agreed-upon date with daily standups, Jira tracking, and full transparency.",
      icon: <Rocket className="w-5 h-5 text-neutral-800" />,
      deliverables: ["Environment Onboarding", "Sprint 1 Backlog Kickoff", "Direct Slack/Teams Channel"]
    }
  ];

  const guarantees = [
    {
      title: "48-Hour Talent Allocation",
      desc: "Pre-screened engineering pods assembled and ready for review within 2 business days."
    },
    {
      title: "100% Intellectual Property",
      desc: "All source code, designs, and architectural assets belong solely to your organization."
    },
    {
      title: "Risk-Free Trial Sprints",
      desc: "Validate developer performance in your production codebase before committing to long-term contracts."
    },
    {
      title: "Flexible Scaling",
      desc: "Ramp up or ramp down developer pods on demand with standard 14 to 30 days notice."
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
              <Workflow className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Operational Framework</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              Working Methodology: <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Acquire our Team&apos;s Expertise</span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Explore Qrious Tech Team LLP&apos;s proven 5-step operational framework for predictable sprint delivery, top-tier engineering talent, and measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Hire Developers Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/how-we-work"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
              >
                <span>Engagement Models</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* 5-Step Operational Methodology */}
        <section className="py-16 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-y border-neutral-100 dark:border-neutral-800/70">
          <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mb-4">
                The 5-Step Process to Success
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                From initial requirement discovery to live production deployment, our workflow ensures seamless communication and architectural excellence.
              </p>
            </ScrollReveal>

            <div className="space-y-16 pb-20">
              {steps.map((item, idx) => (
                <MethodologyStepCard
                  key={item.step}
                  item={item}
                  index={idx}
                  total={steps.length}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SLA & Guarantees Section */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b]">
          <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-4 shadow-2xs backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>Our Commitments</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-4">
                Transparent SLAs & Guarantees
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                We believe in establishing trust from day one through ironclad security, transparent contracts, and agile delivery.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((g, idx) => (
                <div
                  key={idx}
                  className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {g.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

