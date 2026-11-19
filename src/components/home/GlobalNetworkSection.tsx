"use client";

import React from "react";
import { Globe } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "motion/react";

interface NetworkNode {
  id: string;
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor: "middle" | "start" | "end";
  isHQ?: boolean;
}

// Global network nodes connected to Ahmedabad HQ with city location names and label positions
const NODES: NetworkNode[] = [
  {
    id: "san-francisco",
    name: "San Francisco",
    x: 160,
    y: 140,
    labelX: 160,
    labelY: 174,
    anchor: "middle"
  },
  {
    id: "new-york",
    name: "New York",
    x: 270,
    y: 130,
    labelX: 270,
    labelY: 100,
    anchor: "middle"
  },
  {
    id: "london",
    name: "London",
    x: 440,
    y: 110,
    labelX: 440,
    labelY: 82,
    anchor: "middle"
  },
  {
    id: "dubai",
    name: "Dubai",
    x: 535,
    y: 170,
    labelX: 504,
    labelY: 154,
    anchor: "end"
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad (HQ)",
    x: 580,
    y: 190,
    labelX: 580,
    labelY: 228,
    anchor: "middle",
    isHQ: true
  },
  {
    id: "tokyo",
    name: "Tokyo",
    x: 770,
    y: 145,
    labelX: 770,
    labelY: 116,
    anchor: "middle"
  },
  {
    id: "sydney",
    name: "Sydney",
    x: 840,
    y: 270,
    labelX: 840,
    labelY: 304,
    anchor: "middle"
  },
];

// Arcs connecting Ahmedabad HQ to each global hub with bezier curve control points
const ARCS = [
  { from: { x: 580, y: 190 }, to: { x: 160, y: 140 }, control: { x: 370, y: 50 }, dur: "3.4s" },
  { from: { x: 580, y: 190 }, to: { x: 270, y: 130 }, control: { x: 425, y: 70 }, dur: "3.1s" },
  { from: { x: 580, y: 190 }, to: { x: 440, y: 110 }, control: { x: 510, y: 110 }, dur: "2.6s" },
  { from: { x: 580, y: 190 }, to: { x: 535, y: 170 }, control: { x: 555, y: 160 }, dur: "2.0s" },
  { from: { x: 580, y: 190 }, to: { x: 770, y: 145 }, control: { x: 675, y: 105 }, dur: "2.8s" },
  { from: { x: 580, y: 190 }, to: { x: 840, y: 270 }, control: { x: 735, y: 250 }, dur: "3.3s" },
  // Subtle mesh arcs for interconnected infrastructure feel
  { from: { x: 440, y: 110 }, to: { x: 270, y: 130 }, control: { x: 355, y: 90 }, dur: "4.0s", secondary: true },
  { from: { x: 770, y: 145 }, to: { x: 840, y: 270 }, control: { x: 820, y: 200 }, dur: "3.6s", secondary: true },
];

export default function GlobalNetworkSection() {
  const mouseX = useMotionValue(600);
  const mouseY = useMotionValue(250);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle interactive parallax for the background network graphic
  const parallaxX = useTransform(smoothX, [0, 1400], [-10, 10]);
  const parallaxY = useTransform(smoothY, [0, 800], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="global-network"
      onMouseMove={handleMouseMove}
      className="py-14 sm:py-18 lg:py-22 bg-transparent border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative overflow-hidden"
    >
      {/* GitHub-style Ambient Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] 2xl:w-[1200px] h-[450px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 -z-10"
        style={{
          background: useMotionTemplate`radial-gradient(550px circle at ${smoothX}px ${smoothY}px, rgba(56, 189, 248, 0.08), transparent 70%)`
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-[2px] bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Globe className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>Global Delivery &amp; Dedicated Pods</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[44px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14] mb-3">
            Engineered In Ahmedabad. <br />
            <span className="text-neutral-500 dark:text-neutral-400 font-normal">
              Deployed For Enterprises Worldwide.
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our 100+ in-house engineers power mission-critical AI workflows and scalable software across North America, Europe, Asia-Pacific, and the Middle East with seamless timezone overlap.
          </p>
        </ScrollReveal>

        {/* Jimo-Style Live Telemetry Hub Dock */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-4 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">SFO:</span>
            <span>142ms</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">LON:</span>
            <span>108ms</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">DXB:</span>
            <span>48ms</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-[2px] bg-neutral-100 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">TYO:</span>
            <span>92ms</span>
          </div>
        </div>

        {/* Center Stage: Ambient Background Graphic with Open Arcs, Glowing Nodes & Location Labels */}
        <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[340px] flex items-center justify-center overflow-hidden my-2 sm:my-4 pointer-events-none select-none">
          <motion.div
            style={{ x: parallaxX, y: parallaxY }}
            className="w-full h-full max-w-[1200px] flex items-center justify-center"
          >
            <svg
              viewBox="0 0 1000 350"
              className="w-full h-full object-contain opacity-85 dark:opacity-80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Coordinate Grid Lines */}
              <g stroke="currentColor" strokeWidth="0.5" className="text-neutral-300/40 dark:text-white/5" strokeDasharray="3 5">
                <line x1="0" y1="90" x2="1000" y2="90" />
                <line x1="0" y1="180" x2="1000" y2="180" />
                <line x1="0" y1="270" x2="1000" y2="270" />
                <line x1="200" y1="0" x2="200" y2="350" />
                <line x1="400" y1="0" x2="400" y2="350" />
                <line x1="600" y1="0" x2="600" y2="350" />
                <line x1="800" y1="0" x2="800" y2="350" />
              </g>

              {/* Grid Crosshair Markers */}
              {[
                { x: 200, y: 90 }, { x: 400, y: 90 }, { x: 600, y: 90 }, { x: 800, y: 90 },
                { x: 200, y: 180 }, { x: 400, y: 180 }, { x: 600, y: 180 }, { x: 800, y: 180 },
                { x: 200, y: 270 }, { x: 400, y: 270 }, { x: 600, y: 270 }, { x: 800, y: 270 }
              ].map((pt, i) => (
                <g key={`cross-${i}`} stroke="currentColor" strokeWidth="1" className="text-neutral-300 dark:text-neutral-700">
                  <line x1={pt.x - 4} y1={pt.y} x2={pt.x + 4} y2={pt.y} />
                  <line x1={pt.x} y1={pt.y - 4} x2={pt.x} y2={pt.y + 4} />
                </g>
              ))}

              {/* Animated Curved Flow Arcs with Motion Drawing */}
              {ARCS.map((arc, aIdx) => {
                const pathD = `M ${arc.from.x} ${arc.from.y} Q ${arc.control.x} ${arc.control.y} ${arc.to.x} ${arc.to.y}`;
                return (
                  <g key={`arc-${aIdx}`}>
                    {/* Trajectory guide line */}
                    <path
                      d={pathD}
                      stroke="currentColor"
                      strokeWidth={arc.secondary ? "1" : "1.2"}
                      className={arc.secondary ? "text-neutral-400/20 dark:text-white/10" : "text-neutral-400/30 dark:text-white/15"}
                      strokeDasharray="3 4"
                    />

                    {/* Animated gradient stroke */}
                    <motion.path
                      d={pathD}
                      stroke={arc.secondary ? "url(#secondaryGradient)" : "url(#arcGradient)"}
                      strokeWidth={arc.secondary ? "1.2" : "1.8"}
                      strokeOpacity={arc.secondary ? 0.45 : 0.75}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, delay: aIdx * 0.12, ease: "easeInOut" }}
                    />

                    {/* Primary Animated Light Packet */}
                    <circle r={arc.secondary ? "2.5" : "3.5"} fill="#38bdf8" filter="url(#glow)">
                      <animateMotion
                        path={pathD}
                        dur={arc.dur}
                        repeatCount="indefinite"
                        rotate="auto"
                      />
                    </circle>

                    {/* Secondary trailing light packet */}
                    <circle r={arc.secondary ? "1.5" : "2"} fill="#818cf8" opacity="0.6">
                      <animateMotion
                        path={pathD}
                        dur={arc.dur}
                        begin={`${0.7 + aIdx * 0.2}s`}
                        repeatCount="indefinite"
                        rotate="auto"
                      />
                    </circle>
                  </g>
                );
              })}

              {/* Pure Glowing Nodes - Zero Text Labels */}
              {NODES.map((node, nIdx) => (
                <g key={node.id}>
                  {/* Radar Ripple Animation */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    initial={{ r: node.isHQ ? 8 : 5, opacity: 0.7 }}
                    animate={{ r: node.isHQ ? [8, 30, 30] : [5, 16, 16], opacity: [0.7, 0, 0] }}
                    transition={{
                      duration: node.isHQ ? 2.6 : 3.2,
                      delay: nIdx * 0.35,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    stroke={node.isHQ ? "#3b82f6" : "#06b6d4"}
                    strokeWidth="1.5"
                    fill="none"
                  />

                  {/* Secondary HQ Ripple */}
                  {node.isHQ && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      initial={{ r: 8, opacity: 0.5 }}
                      animate={{ r: [8, 44, 44], opacity: [0.5, 0, 0] }}
                      transition={{
                        duration: 2.6,
                        delay: 1.3,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                      stroke="#818cf8"
                      strokeWidth="1"
                      fill="none"
                    />
                  )}

                  {/* Outer Glow Halo */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.isHQ ? 12 : 7}
                    fill={node.isHQ ? "#3b82f6" : "#0284c7"}
                    fillOpacity={node.isHQ ? 0.3 : 0.2}
                  />

                  {/* Node Dot */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.isHQ ? 6 : 4}
                    fill={node.isHQ ? "#2563eb" : "#0ea5e9"}
                  />

                  {/* Core White Spark */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.isHQ ? 2.5 : 1.5}
                    fill="#ffffff"
                  />
                </g>
              ))}

              {/* Location Name Labels */}
              {NODES.map((node) => {
                if (node.isHQ) {
                  return (
                    <g key={`label-${node.id}`}>
                      {/* HQ Distinct Pill */}
                      <rect
                        x={node.labelX - 62}
                        y={node.labelY - 11}
                        width="124"
                        height="22"
                        rx="11"
                        className="fill-blue-500/10 dark:fill-blue-500/20 stroke-blue-500/50 dark:stroke-cyan-400/60"
                        strokeWidth="1.2"
                      />
                      <circle
                        cx={node.labelX - 44}
                        cy={node.labelY}
                        r="3"
                        className="fill-blue-500 dark:fill-cyan-400 animate-pulse"
                      />
                      <text
                        x={node.labelX + 4}
                        y={node.labelY}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="fill-blue-600 dark:fill-cyan-400 font-mono text-[11px] font-bold tracking-wider"
                      >
                        AHMEDABAD HQ
                      </text>
                    </g>
                  );
                }

                // Sleek, minimal city tags
                const labelWidth = node.name.length * 7.5 + 16;
                const rectX =
                  node.anchor === "end"
                    ? node.labelX - labelWidth
                    : node.anchor === "start"
                    ? node.labelX
                    : node.labelX - labelWidth / 2;

                return (
                  <g key={`label-${node.id}`}>
                    <rect
                      x={rectX}
                      y={node.labelY - 9}
                      width={labelWidth}
                      height="18"
                      rx="9"
                      className="fill-white/85 dark:fill-[#0c0c0e]/85 stroke-neutral-200/90 dark:stroke-white/10"
                      strokeWidth="0.75"
                    />
                    <text
                      x={node.labelX}
                      y={node.labelY}
                      textAnchor={node.anchor || "middle"}
                      dominantBaseline="central"
                      className="fill-neutral-800 dark:fill-neutral-200 font-mono text-[10.5px] font-semibold tracking-wide"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}

              {/* Gradients and Filters Definition */}
              <defs>
                <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.85" />
                </linearGradient>

                <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
                </linearGradient>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar - Open, Minimalist 4-Column Layout on the continuous grid */}
        <ScrollReveal className="pt-8 sm:pt-10 border-t border-neutral-200/80 dark:border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
                100<span className="text-blue-500 dark:text-cyan-400">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mt-2">
                In-House Engineers
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Direct full-time talent, zero subcontracting
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
                500<span className="text-blue-500 dark:text-cyan-400">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mt-2">
                Global Deployments
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Production systems across US, UK, EU, UAE &amp; APAC
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
                100<span className="text-blue-500 dark:text-cyan-400">%</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mt-2">
                Direct IP Ownership
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Full source code &amp; weights transfer upon delivery
              </p>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
                24<span className="text-blue-500 dark:text-cyan-400">/</span>7
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider mt-2">
                Continuous Sprints
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Continuous development &amp; overlapping timezone pods
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
