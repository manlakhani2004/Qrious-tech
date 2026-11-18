"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Search,
  Cpu,
  ShieldCheck,
  Rocket,
  CheckCircle2
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function MethodologySection() {
  const steps = [
    {
      id: "01",
      icon: <Search className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "AI Architecture & Feasibility Discovery",
      description:
        "We audit your enterprise data pipelines, identify high-ROI automation bottlenecks, and architect deterministic multi-agent and RAG schemas with strict zero-leakage boundaries.",
      tags: ["Data Readiness Audit", "Zero-Leakage Blueprint", "< 48h Feasibility Matrix"]
    },
    {
      id: "02",
      icon: <Cpu className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "14-Day Working Agentic POC",
      description:
        "Before full rollout, we deliver an interactive, functional Proof-of-Concept wired to your real data schemas to validate latency, hallucination thresholds, and business ROI.",
      tags: ["Working Live POC", "Sub-200ms Latency Test", "Ground-Truth Benchmarking"]
    },
    {
      id: "03",
      icon: <ShieldCheck className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Enterprise Hardening & Private Deployment",
      description:
        "Deploy into your private cloud (AWS, Azure, GCP or On-Prem). Implement strict guardrails, role-based access control, SOC2/HIPAA compliance, and token-cost controls.",
      tags: ["Dedicated VPC / On-Prem", "SOC2 & HIPAA Compliant", "Llama 3.3 / Claude / DeepSeek"]
    },
    {
      id: "04",
      icon: <Rocket className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Scale With Dedicated AI Engineering Pods",
      description:
        "Seamlessly embed senior AI engineers, MLOps specialists, and full-stack architects directly into your sprints for continuous model evaluation, tool expansion, and 99.9% uptime.",
      tags: ["Integrated Slack & Jira Pods", "Continuous Evaluation", "100% Code & IP Ownership"]
    }
  ];

  return (
    <section id="methodology" className="py-20 lg:py-28 2xl:py-36 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative overflow-hidden isolate">
      {/* Vercel Precision Micro-Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Ambient Radial Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[950px] h-[350px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Motive Centered Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>How We Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight leading-[1.12] mb-4">
            How We Bring AI To <br className="hidden sm:inline" />
            Your Business in 4 Steps
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A simple, transparent process from initial discovery to a working prototype and seamless deployment.
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

                {/* Strategy Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/60 dark:border-neutral-800 shadow-xl text-neutral-900 dark:text-white pointer-events-none">
                  <div className="flex items-center space-x-2 text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>AI Architecture &amp; Sprint Pods</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-black dark:text-white leading-snug">
                    Dedicated AI architects &amp; ML engineers embedded directly into your sprint roadmap
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Step Cards Scrolling Past */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 lg:space-y-12 pb-32 lg:pb-48 relative">
            {/* Vercel / Stripe Glowing Connecting Laser Beam */}
            <div className="absolute left-10 top-16 bottom-32 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent hidden sm:block pointer-events-none opacity-20 dark:opacity-30 -z-10" />
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-[#f8f8f9] dark:bg-[#121215] border border-neutral-200/80 dark:border-white/[0.08] rounded-[28px] p-6 sm:p-8 hover:shadow-2xl dark:hover:shadow-[0_8px_32px_rgba(255,255,255,0.06)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Top specular highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent pointer-events-none" />
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-white dark:bg-[#1f1f23] border border-neutral-200/80 dark:border-neutral-800 rounded-2xl flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-neutral-300 dark:text-neutral-700 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/80">
                  {step.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-300 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>{tag}</span>
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
