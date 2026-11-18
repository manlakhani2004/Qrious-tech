"use client";

import React from "react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  SiReact,
  SiNextdotjs,
  SiLangchain,
  SiTypescript,
  SiFlutter,
  SiSwift,
  SiAndroid,
  SiGooglecloud,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs
} from "react-icons/si";
import { FaSalesforce, FaAws } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";

// Official 2-Color Python Logo (Blue & Yellow Interlocking Snakes)
function OfficialPythonLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
      <path
        fill="#3776AB"
        d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z"
      />
      <path
        fill="#FFD43B"
        d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.34l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.85l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h5.6l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01h-8.16v.83h8.17l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05zm6.3-1.98l.23-.33.08-.41-.08-.41-.23-.34-.33-.22-.41-.09-.41.09-.33.22-.23.34-.08.41.08.41.23.33.33.22.41.09.41-.09z"
      />
    </svg>
  );
}

// Official Microsoft Power BI 3-Tier Fluent Bars
function OfficialPowerBILogo() {
  return (
    <svg viewBox="0 0 1200 1600" className="w-5 h-5 shrink-0" fill="none">
      <path
        d="M1200 66.75v1466.5c0 36.86-29.89 66.75-66.75 66.75H716.75c-36.865 0-66.75-29.89-66.75-66.75V66.75C650 29.885 679.885 0 716.75 0h416.5c36.87 0 66.75 29.885 66.75 66.75z"
        fill="#C87E0E"
      />
      <path
        d="M875 466.667V1600H325V466.667C325 429.848 354.848 400 391.667 400h416.663c36.82 0 66.67 29.848 66.67 66.667z"
        fill="#F2C811"
      />
      <path
        d="M0 866.667v666.663c0 36.82 29.848 66.67 66.667 66.67H550V866.667C550 829.848 520.152 800 483.333 800H66.667C29.848 800 0 829.848 0 866.667z"
        fill="#F9E589"
      />
    </svg>
  );
}

interface TechItem {
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
}

export default function TechMarqueeSection() {
  const techRow1: TechItem[] = [
    {
      name: "React 19",
      category: "Frontend",
      color: "#61DAFB",
      icon: <SiReact className="w-5 h-5 shrink-0 text-[#61DAFB]" />
    },
    {
      name: "Next.js 16",
      category: "Full-Stack",
      color: "#000000",
      icon: <SiNextdotjs className="w-5 h-5 shrink-0 text-black dark:text-white" />
    },
    {
      name: "Python AI / ML",
      category: "Artificial Intelligence",
      color: "#3776AB",
      icon: <OfficialPythonLogo />
    },
    {
      name: "LangChain & Agents",
      category: "LLM Orchestration",
      color: "#10B981",
      icon: <SiLangchain className="w-5 h-5 shrink-0 text-[#10B981]" />
    },
    {
      name: "TypeScript",
      category: "Language",
      color: "#3178C6",
      icon: <SiTypescript className="w-5 h-5 shrink-0 text-[#3178C6]" />
    },
    {
      name: "Flutter & Dart",
      category: "Cross-Platform",
      color: "#02569B",
      icon: <SiFlutter className="w-5 h-5 shrink-0 text-[#02569B]" />
    },
    {
      name: "iOS (Swift)",
      category: "Mobile Native",
      color: "#F05138",
      icon: <SiSwift className="w-5 h-5 shrink-0 text-[#F05138]" />
    },
    {
      name: "Android (Kotlin)",
      category: "Mobile Native",
      color: "#3DDC84",
      icon: <SiAndroid className="w-5 h-5 shrink-0 text-[#3DDC84]" />
    },
    {
      name: "Salesforce CPQ",
      category: "Enterprise Cloud",
      color: "#00A1E0",
      icon: <FaSalesforce className="w-6 h-6 shrink-0 text-[#00A1E0]" />
    },
    {
      name: "Microsoft Power BI",
      category: "Business Intelligence",
      color: "#F2C811",
      icon: <OfficialPowerBILogo />
    },
  ];

  const techRow2: TechItem[] = [
    {
      name: "Node.js",
      category: "Backend Runtime",
      color: "#539E43",
      icon: <SiNodedotjs className="w-5 h-5 shrink-0 text-[#539E43]" />
    },
    {
      name: "AWS Cloud",
      category: "Infrastructure",
      color: "#FF9900",
      icon: <FaAws className="w-6 h-6 shrink-0 text-[#FF9900]" />
    },
    {
      name: "Google Cloud Platform",
      category: "DevOps",
      color: "#4285F4",
      icon: <SiGooglecloud className="w-5 h-5 shrink-0 text-[#4285F4]" />
    },
    {
      name: "Docker & K8s",
      category: "Containers",
      color: "#2496ED",
      icon: <SiDocker className="w-5 h-5 shrink-0 text-[#2496ED]" />
    },
    {
      name: "PostgreSQL",
      category: "Relational DB",
      color: "#336791",
      icon: <SiPostgresql className="w-5 h-5 shrink-0 text-[#336791]" />
    },
    {
      name: "MongoDB",
      category: "NoSQL DB",
      color: "#47A248",
      icon: <SiMongodb className="w-5 h-5 shrink-0 text-[#47A248]" />
    },
    {
      name: "Salesforce Service Cloud",
      category: "CRM Ecosystem",
      color: "#00A1E0",
      icon: <FaSalesforce className="w-6 h-6 shrink-0 text-[#00A1E0]" />
    },
    {
      name: "Tailwind CSS",
      category: "UI Engine",
      color: "#06B6D4",
      icon: <SiTailwindcss className="w-5 h-5 shrink-0 text-[#06B6D4]" />
    },
    {
      name: "GraphQL APIs",
      category: "API Layer",
      color: "#E10098",
      icon: <SiGraphql className="w-5 h-5 shrink-0 text-[#E10098]" />
    },
    {
      name: "OpenAI & Claude APIs",
      category: "Generative AI",
      color: "#10A37F",
      icon: <RiOpenaiFill className="w-5 h-5 shrink-0 text-[#10A37F]" />
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 overflow-hidden transition-colors duration-200">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        {/* Motive Centered Label */}
        <p className="text-xs sm:text-[13px] text-neutral-500 dark:text-neutral-400 font-semibold tracking-wider uppercase mb-3">
          Technologies of Company
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-white">
          Modern Frameworks &amp; Engineering Stack
        </h2>
      </ScrollReveal>

      {/* Marquee Row 1 (Auto-scrolling Left) */}
      <div className="relative w-full overflow-hidden mb-5 py-3">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 58,
            ease: "linear"
          }}
          className="flex items-center space-x-4 sm:space-x-5 w-max"
        >
          {[...techRow1, ...techRow1, ...techRow1, ...techRow1].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[#f8f8f9] dark:bg-[#121215] border border-transparent hover:border-neutral-200/60 dark:hover:border-neutral-800 shadow-xs hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300 whitespace-nowrap cursor-default group"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1f1f23] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0 border border-neutral-100 dark:border-neutral-800">
                {tech.icon}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-[15px] font-bold text-black dark:text-white tracking-tight group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 (Auto-scrolling Right / Reverse) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-white dark:from-[#09090b] via-white/80 dark:via-[#09090b]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 58,
            ease: "linear"
          }}
          className="flex items-center space-x-4 sm:space-x-5 w-max"
        >
          {[...techRow2, ...techRow2, ...techRow2, ...techRow2].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3.5 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[#f8f8f9] dark:bg-[#121215] border border-transparent hover:border-neutral-200/60 dark:hover:border-neutral-800 shadow-xs hover:shadow-xl dark:shadow-none hover:-translate-y-1 transition-all duration-300 whitespace-nowrap cursor-default group"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1f1f23] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0 border border-neutral-100 dark:border-neutral-800">
                {tech.icon}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-[15px] font-bold text-black dark:text-white tracking-tight group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
