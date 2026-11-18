"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Users2,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Clock,
  Heart,
  Award,
  BookOpen,
  Code2,
  Smartphone,
  BarChart3,
  CloudLightning,
  Brain,
  ShieldCheck
} from "lucide-react";

interface PositionItem {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  desc: string;
}

const roleIcons: Record<string, React.ReactNode> = {
  "fullstack-sr": <Code2 className="w-5 h-5 text-black dark:text-white" />,
  "mobile-lead": <Smartphone className="w-5 h-5 text-black dark:text-white" />,
  "power-bi-architect": <BarChart3 className="w-5 h-5 text-black dark:text-white" />,
  "salesforce-dev": <CloudLightning className="w-5 h-5 text-black dark:text-white" />,
  "ai-engineer": <Brain className="w-5 h-5 text-black dark:text-white" />,
  "qa-automation": <ShieldCheck className="w-5 h-5 text-black dark:text-white" />
};

function OverlappingRoleCard({
  pos,
  index,
  total,
  icon
}: {
  pos: PositionItem;
  index: number;
  total: number;
  icon: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"]
  });

  // Scale down subtly as subsequent cards scroll over it
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  // Subtle opacity dimming for depth as newer cards overlap
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, index === total - 1 ? 1 : 0.88]
  );

  return (
    <div
      ref={cardRef}
      id={pos.id}
      className="sticky scroll-mt-28"
      style={{
        // Staggered sticky top position so cards overlap smoothly like a deck
        top: `calc(84px + ${Math.min(index, 6) * 14}px)`,
        zIndex: index + 10,
        marginBottom: `${(total - index - 1) * 16}px`
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="bg-white dark:bg-[#111114] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 lg:p-10 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_-12px_36px_rgba(0,0,0,0.06),0_24px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-300 relative overflow-hidden"
      >
        {/* Subtle top specular highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent dark:block hidden pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start space-x-4 sm:space-x-5 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/70 dark:border-neutral-700 flex items-center justify-center shrink-0 text-black dark:text-white shadow-2xs mt-1">
              {icon}
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200/80 dark:border-neutral-700">
                  {pos.dept}
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-semibold">• {pos.type}</span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-semibold">• Exp: {pos.experience}</span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium hidden sm:inline-flex items-center gap-1">
                  • <MapPin className="w-3 h-3 text-neutral-400" /> {pos.location}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold text-black dark:text-white tracking-tight leading-snug">
                {pos.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {pos.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {pos.skills.map((s, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg bg-neutral-100/90 dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700 text-[11px] font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 flex items-center md:flex-col md:items-end justify-between gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-100 dark:border-neutral-800">
            <span className="text-xs font-mono font-bold text-neutral-400 dark:text-neutral-500">
              Role 0{index + 1} / 0{total}
            </span>
            <Link
              href={`/contact?role=${encodeURIComponent(pos.title)}`}
              className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs sm:text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function CrewPage() {
  const openPositions = [
    {
      id: "fullstack-sr",
      title: "Senior Full-Stack Engineer",
      dept: "Web Engineering",
      location: "Ahmedabad, India (Hybrid)",
      type: "Full-Time",
      experience: "4-7 Years",
      skills: ["Next.js 16", "React 19", "Node.js", "TypeScript", "PostgreSQL"],
      desc: "Architect and lead customer-facing web applications with sub-second response times and scalable microservice architectures."
    },
    {
      id: "mobile-lead",
      title: "Mobile App Developer (Flutter / Native)",
      dept: "Mobile Pod",
      location: "Ahmedabad, India",
      type: "Full-Time",
      experience: "3-6 Years",
      skills: ["Flutter", "Dart", "Swift", "Kotlin", "Firebase"],
      desc: "Build intuitive cross-platform and native companion mobile apps for global healthcare and logistics clients."
    },
    {
      id: "power-bi-architect",
      title: "Power BI & Analytics Architect",
      dept: "Data Intelligence",
      location: "Ahmedabad, India",
      type: "Full-Time",
      experience: "4-8 Years",
      skills: ["Power BI", "DAX", "Microsoft Fabric", "Azure Synapse", "SQL"],
      desc: "Design enterprise data models, ETL pipelines, and high-impact executive dashboards for multinational enterprises."
    },
    {
      id: "salesforce-dev",
      title: "Salesforce CPQ & Cloud Specialist",
      dept: "Enterprise CRM",
      location: "Ahmedabad, India",
      type: "Full-Time",
      experience: "3-5 Years",
      skills: ["Salesforce CRM", "Apex", "LWC", "Salesforce CPQ", "REST APIs"],
      desc: "Implement multi-cloud Salesforce workflows, Lightning Web Components, and automated quote-to-cash CPQ pipelines."
    },
    {
      id: "ai-engineer",
      title: "AI / ML Research Engineer",
      dept: "AI Innovation",
      location: "Ahmedabad, India",
      type: "Full-Time",
      experience: "2-5 Years",
      skills: ["Python", "PyTorch", "LangChain", "OpenAI / Gemini APIs", "Vector DBs"],
      desc: "Build generative AI agents, retrieval-augmented generation (RAG) pipelines, and intelligent automation systems."
    },
    {
      id: "qa-automation",
      title: "Senior QA Automation Engineer",
      dept: "Quality Assurance",
      location: "Ahmedabad, India",
      type: "Full-Time",
      experience: "3-6 Years",
      skills: ["Playwright", "Cypress", "Selenium", "API Testing", "CI/CD"],
      desc: "Enforce end-to-end automated testing suites, regression pipelines, and performance benchmarks for client deliverables."
    }
  ];

  const perks = [
    {
      icon: <Award className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Global Enterprise Projects",
      desc: "Work directly on high-scale systems for USA and European enterprises."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Sponsored Certifications",
      desc: "Full sponsorship for AWS, Salesforce, Google Cloud, and AI credentials."
    },
    {
      icon: <Heart className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Vibrant Work Culture",
      desc: "Regular hackathons, birthday celebrations, sports tournaments, and annual retreats."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />,
      title: "Competitive Compensation",
      desc: "Top-of-market salary packages with annual performance bonuses and health coverage."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <Users2 className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Join The Crew @ Qtech</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              Unleash Your Potential in <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Our Innovation Hub</span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              At Qrious Tech Team LLP, we build an inspiring environment for software creators, architects, and innovators. Join our senior engineering pods in Ahmedabad.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="#open-roles"
                className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/life-at-qtech"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
              >
                <span>Life @ Qtech</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Culture & Perks Grid */}
        <section className="py-16 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-y border-neutral-100 dark:border-neutral-800/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mb-4">
                Why Engineers Love Working at Qtech
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                Empowering every team member with technical autonomy, modern tooling, and meaningful career progression.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f8f8f9] dark:bg-neutral-800 flex items-center justify-center mb-6 shadow-xs">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{p.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Roles Section - Stacking Overlapping Cards */}
        <section id="open-roles" className="py-20 lg:py-28 bg-[#fafafb]/60 dark:bg-[#09090b] border-t border-neutral-100 dark:border-neutral-800/70 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
                <Briefcase className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
                <span>Career Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight mb-4">
                Current Openings
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                Explore available roles across our web, mobile, AI, and enterprise cloud development pods.
              </p>
            </ScrollReveal>

            <div className="space-y-14 sm:space-y-16 pb-20">
              {openPositions.map((pos, idx) => (
                <OverlappingRoleCard
                  key={pos.id}
                  pos={pos}
                  index={idx}
                  total={openPositions.length}
                  icon={roleIcons[pos.id] || <Briefcase className="w-5 h-5 text-black dark:text-white" />}
                />
              ))}
            </div>

            {/* Direct HR Application Note */}
            <div className="mt-16 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Don&apos;t see your exact role? Send your resume directly to{" "}
              <a href="mailto:hr@qrioustech.in" className="text-black dark:text-white font-bold hover:underline">
                hr@qrioustech.in
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

