"use client";

import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TechMarqueeSection() {
  const techRow1 = [
    { name: "React 19", category: "Frontend", color: "#61DAFB", icon: "⚛️" },
    { name: "Next.js 16", category: "Full-Stack", color: "#000000", icon: "▲" },
    { name: "Python AI / ML", category: "Artificial Intelligence", color: "#3776AB", icon: "🐍" },
    { name: "LangChain & Agents", category: "LLM Orchestration", color: "#10B981", icon: "🤖" },
    { name: "TypeScript", category: "Language", color: "#3178C6", icon: "TS" },
    { name: "Flutter & Dart", category: "Cross-Platform", color: "#02569B", icon: "📱" },
    { name: "iOS (Swift)", category: "Mobile Native", color: "#F05138", icon: "" },
    { name: "Android (Kotlin)", category: "Mobile Native", color: "#7F52FF", icon: "🤖" },
    { name: "Salesforce CPQ", category: "Enterprise Cloud", color: "#00A1E0", icon: "☁️" },
    { name: "Microsoft Power BI", category: "Business Intelligence", color: "#F2C811", icon: "📊" },
  ];

  const techRow2 = [
    { name: "Node.js", category: "Backend Runtime", color: "#339933", icon: "🟢" },
    { name: "AWS Cloud", category: "Infrastructure", color: "#FF9900", icon: "☁️" },
    { name: "Google Cloud Platform", category: "DevOps", color: "#4285F4", icon: "🌐" },
    { name: "Docker & K8s", category: "Containers", color: "#2496ED", icon: "🐳" },
    { name: "PostgreSQL", category: "Relational DB", color: "#4169E1", icon: "🐘" },
    { name: "MongoDB", category: "NoSQL DB", color: "#47A248", icon: "🍃" },
    { name: "Salesforce Service Cloud", category: "CRM Ecosystem", color: "#00A1E0", icon: "⚡" },
    { name: "Tailwind CSS", category: "UI Engine", color: "#06B6D4", icon: "🎨" },
    { name: "GraphQL APIs", category: "API Layer", color: "#E10098", icon: "◈" },
    { name: "OpenAI & Claude APIs", category: "Generative AI", color: "#10A37F", icon: "✨" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-100 overflow-hidden">
      <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        {/* Motive Centered Label */}
        <p className="text-xs sm:text-[13px] text-neutral-500 font-semibold tracking-wider uppercase mb-3">
          Technologies of Company
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black">
          Modern Frameworks & Engineering Stack
        </h2>
      </ScrollReveal>

      {/* Marquee Row 1 (Auto-scrolling Left) */}
      <div className="relative w-full overflow-hidden mb-4">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-4">
          {[...techRow1, ...techRow1, ...techRow1].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 px-5 py-3 rounded-full bg-[#f8f8f9] border border-neutral-200/80 hover:border-black hover:bg-white hover:shadow-md transition-all duration-200 whitespace-nowrap cursor-default group"
            >
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold shadow-2xs group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-[13px] font-bold text-black tracking-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-medium">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Auto-scrolling Right / Reverse) */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center space-x-4">
          {[...techRow2, ...techRow2, ...techRow2].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 px-5 py-3 rounded-full bg-[#f8f8f9] border border-neutral-200/80 hover:border-black hover:bg-white hover:shadow-md transition-all duration-200 whitespace-nowrap cursor-default group"
            >
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold shadow-2xs group-hover:scale-110 transition-transform">
                {tech.icon}
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-[13px] font-bold text-black tracking-tight">
                  {tech.name}
                </span>
                <span className="text-[10px] text-neutral-500 font-medium">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
