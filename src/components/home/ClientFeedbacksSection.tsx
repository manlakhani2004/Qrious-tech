"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Quote, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

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
    // Overlapping parallelogram blocks (matches Webflow Motive)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-neutral-300 dark:text-neutral-600">
        <rect x="7" y="5" width="18" height="6" rx="3" fill="currentColor" opacity="0.6" />
        <rect x="4" y="13" width="18" height="6" rx="3" fill="currentColor" opacity="0.85" />
        <rect x="10" y="21" width="18" height="6" rx="3" fill="currentColor" />
      </svg>
    );
  }
  if (type === 2) {
    // Abstract geometric loop / ring
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
  // Abstract modern geometric polygon
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

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="bg-white/95 dark:bg-[#121215]/95 backdrop-blur-2xl rounded-[32px] p-5 sm:p-7 xl:p-8 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_50px_rgba(0,0,0,0.7)] transition-all duration-300 select-none">
      {/* Specular top highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent dark:block hidden pointer-events-none" />

      {/* Header: Initials Avatar + Author/Role + BrandMarkIcon */}
      <div className="flex items-center justify-between mb-3.5 sm:mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-xs tracking-wider shadow-xs shrink-0 select-none">
            {item.initials}
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-black dark:text-white tracking-tight leading-snug">
              {item.author}
            </div>
            <div className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 font-medium mt-0.5">
              {item.role}
            </div>
          </div>
        </div>

        <div className="shrink-0 opacity-70">
          <BrandMarkIcon type={item.iconType} />
        </div>
      </div>

      {/* Rating & Domain Tag */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center space-x-1 text-amber-400">
          {[...Array(item.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400" />
          ))}
        </div>
        <span className="text-[9.5px] sm:text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-white/[0.06] px-2 py-0.5 rounded-full border border-neutral-200/60 dark:border-white/10">
          {item.domain}
        </span>
      </div>

      {/* Quote */}
      <p className="text-[11.5px] sm:text-[13.5px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal line-clamp-4 sm:line-clamp-none">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Verified footer */}
      <div className="mt-3.5 sm:mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="font-medium text-neutral-600 dark:text-neutral-300">Verified Client Project</span>
        </div>
        <span className="text-[9.5px] sm:text-[10px] text-neutral-400 dark:text-neutral-500">100% IP &amp; NDA</span>
      </div>
    </div>
  );
}

// Card 1: SR - starts visible at progress 0 in lower-right
function DesktopCard1({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.0, 0.40], ["36vh", "-55vh"]);
  const opacity = useTransform(progress, [0.0, 0.28, 0.40], [1, 1, 0]);
  const scale = useTransform(progress, [0.0, 0.28, 0.40], [1, 1, 0.94]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute w-[360px] lg:w-[410px] xl:w-[460px] 2xl:w-[490px] z-20 pointer-events-auto right-4 lg:right-10 xl:right-16 2xl:right-24 top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Card 2: LP - floats on left lane
function DesktopCard2({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.12, 0.58], ["75vh", "-55vh"]);
  const opacity = useTransform(progress, [0.12, 0.24, 0.46, 0.58], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.12, 0.24, 0.46, 0.58], [0.94, 1, 1, 0.94]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute w-[360px] lg:w-[410px] xl:w-[460px] 2xl:w-[490px] z-20 pointer-events-auto left-4 lg:left-10 xl:left-16 2xl:left-24 top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Card 3: SO - floats on right lane
function DesktopCard3({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.35, 0.80], ["75vh", "-55vh"]);
  const opacity = useTransform(progress, [0.35, 0.46, 0.68, 0.80], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.35, 0.46, 0.68, 0.80], [0.94, 1, 1, 0.94]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute w-[360px] lg:w-[410px] xl:w-[460px] 2xl:w-[490px] z-20 pointer-events-auto right-4 lg:right-10 xl:right-16 2xl:right-24 top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Card 4: SP - floats on left lane
function DesktopCard4({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.55, 1.0], ["75vh", "-30vh"]);
  const opacity = useTransform(progress, [0.55, 0.66, 0.88, 1.0], [0, 1, 1, 0.8]);
  const scale = useTransform(progress, [0.55, 0.66, 0.88, 1.0], [0.94, 1, 1, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute w-[360px] lg:w-[410px] xl:w-[460px] 2xl:w-[490px] z-20 pointer-events-auto left-4 lg:left-10 xl:left-16 2xl:left-24 top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Mobile Card 1: Initial visible card on mobile in lower portion
function MobileCard1({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.0, 0.36], ["50vh", "44vh"]);
  const opacity = useTransform(progress, [0.0, 0.24, 0.36], [1, 1, 0]);
  const scale = useTransform(progress, [0.0, 0.24, 0.36], [1, 1, 0.95]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] max-w-sm z-20 pointer-events-auto top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Mobile Card 2
function MobileCard2({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.18, 0.58], ["58vh", "44vh"]);
  const opacity = useTransform(progress, [0.18, 0.28, 0.46, 0.58], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.18, 0.28, 0.46, 0.58], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] max-w-sm z-20 pointer-events-auto top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Mobile Card 3
function MobileCard3({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.40, 0.78], ["58vh", "44vh"]);
  const opacity = useTransform(progress, [0.40, 0.50, 0.68, 0.78], [0, 1, 1, 0]);
  const scale = useTransform(progress, [0.40, 0.50, 0.68, 0.78], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] max-w-sm z-20 pointer-events-auto top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Mobile Card 4
function MobileCard4({ item, progress }: { item: TestimonialItem; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0.60, 1.0], ["58vh", "44vh"]);
  const opacity = useTransform(progress, [0.60, 0.70, 0.88, 1.0], [0, 1, 1, 0.85]);
  const scale = useTransform(progress, [0.60, 0.70, 0.88, 1.0], [0.95, 1, 1, 1]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] max-w-sm z-20 pointer-events-auto top-0"
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

export default function ClientFeedbacksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      className="relative h-[270vh] sm:h-[300vh] bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200"
    >
      {/* Sticky Fullscreen Parallax Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Background Watermark Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-10 select-none"
          style={{
            backgroundImage: "url('/images/icons/background-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "280px"
          }}
        />

        {/* PINNED CENTER HEADER: Stationed in center on desktop, lifted on mobile so cards sit beneath */}
        <div className="relative text-center max-w-xl mx-auto px-4 z-10 pointer-events-none select-none -translate-y-28 sm:-translate-y-20 md:translate-y-0">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-[11px] sm:text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-3 sm:mb-4 backdrop-blur-sm">
            <Quote className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-black dark:text-white tracking-tight mb-3 sm:mb-4 leading-[1.14]">
            Client experiences that <br />
            speak for our craftsmanship
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto font-normal">
            Direct feedback from founders, CEOs, and CTOs who accelerate engineering velocity and scale mission-critical products with Qrious Tech Team LLP.
          </p>

          <div className="mt-4 sm:mt-5 pointer-events-auto">
            <Link
              href="/testimonials"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
            >
              <span>Explore All Verified Client Stories</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP PARALLAX CARDS (md: and up): Staggered in Left and Right Lanes    */}
        {/* Sequence: Right (SR) -> Left (LP) -> Right (SO) -> Left (SP)             */}
        {/* ========================================================================= */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <DesktopCard1 item={AUTHENTIC_TESTIMONIALS[0]} progress={scrollYProgress} />
          <DesktopCard2 item={AUTHENTIC_TESTIMONIALS[1]} progress={scrollYProgress} />
          <DesktopCard3 item={AUTHENTIC_TESTIMONIALS[2]} progress={scrollYProgress} />
          <DesktopCard4 item={AUTHENTIC_TESTIMONIALS[3]} progress={scrollYProgress} />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE PARALLAX CARDS (< md): Centered below the lifted title              */}
        {/* ========================================================================= */}
        <div className="md:hidden absolute inset-0 pointer-events-none">
          <MobileCard1 item={AUTHENTIC_TESTIMONIALS[0]} progress={scrollYProgress} />
          <MobileCard2 item={AUTHENTIC_TESTIMONIALS[1]} progress={scrollYProgress} />
          <MobileCard3 item={AUTHENTIC_TESTIMONIALS[2]} progress={scrollYProgress} />
          <MobileCard4 item={AUTHENTIC_TESTIMONIALS[3]} progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
