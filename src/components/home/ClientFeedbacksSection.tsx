"use client";

import React, { useRef } from "react";
import { Quote } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  initials: string;
  quote: string;
  iconType: number;
}

// 4 Authentic Client Endorsements from Qrious Tech Team LLP
const AUTHENTIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "stuart-rox",
    initials: "SR",
    author: "STUART ROX",
    role: "Founder / CEO",
    quote:
      "Partnering with Qrioustech Team LLP has been a seamless experience. Their developers are highly skilled, professional, and adaptable to complex requirements. The team consistently delivers high-quality solutions that meet our project goals. Their expertise across various domains, including healthcare and service-based industries, has been invaluable.",
    iconType: 0
  },
  {
    id: "lorel-parker",
    initials: "LP",
    author: "LOREL PARKER",
    role: "CTO",
    quote:
      "We were impressed by Qrioustech Team LLP's commitment to excellence. Their developers integrated effortlessly into our existing team, contributing innovative ideas and solutions. From CRM development to AI-driven projects, their technical proficiency ensured the success of our initiatives. Highly recommended for businesses seeking reliable development support.",
    iconType: 1
  },
  {
    id: "shota-oda",
    initials: "SO",
    author: "SHOTA ODA",
    role: "CEO",
    quote:
      "Qrioustech Team LLP has been a game-changer for our business. Their expertise in Mobile Apps and CRM implementation helped us achieve significant milestones. Despite the complexity of our project in the oil industry, their team delivered beyond expectations. Their ability to work discreetly and efficiently is unmatched.",
    iconType: 2
  },
  {
    id: "shin-paul",
    initials: "SP",
    author: "SHIN PAUL",
    role: "Co-Founder / Managing Director",
    quote:
      "The Qrioustech team exceeded our expectations. Their proactive approach and technical knowledge in music-related projects brought our vision to life. Their ability to collaborate and deliver under tight deadlines was truly commendable. We look forward to working with them on future endeavors.",
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

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="bg-white/85 dark:bg-[#121215]/90 backdrop-blur-xl rounded-[32px] p-7 sm:p-9 border border-neutral-200/90 dark:border-neutral-800 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-none hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.18)] transition-all duration-300 select-none">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3.5">
          {/* Client Initials Badge (First and Last Name initial) */}
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

      <p className="text-sm sm:text-[15px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
        &ldquo;{item.quote}&rdquo;
      </p>
    </div>
  );
}

// Helper component for animated desktop cards with individual scroll transforms
function DesktopAnimatedCard({
  item,
  progress,
  range,
  positionClass
}: {
  item: TestimonialItem;
  progress: MotionValue<number>;
  range: [number, number];
  positionClass: string;
}) {
  const [start, end] = range;
  const fadeInEnd = start + (end - start) * 0.22;
  const fadeOutStart = end - (end - start) * 0.22;

  const y = useTransform(progress, [start, end], ["110vh", "-110vh"]);
  const opacity = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [0.92, 1, 1, 0.94]
  );

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className={`absolute w-[400px] md:w-[450px] lg:w-[500px] xl:w-[540px] z-20 pointer-events-auto ${positionClass}`}
    >
      <TestimonialCard item={item} />
    </motion.div>
  );
}

// Helper component for animated mobile cards (sequentially centered)
function MobileAnimatedCard({
  item,
  progress,
  range
}: {
  item: TestimonialItem;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const [start, end] = range;
  const fadeInEnd = start + (end - start) * 0.22;
  const fadeOutStart = end - (end - start) * 0.22;

  const y = useTransform(progress, [start, end], ["105vh", "-105vh"]);
  const opacity = useTransform(
    progress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] max-w-md z-20 pointer-events-auto top-0"
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

        {/* PINNED CENTER HEADER: Always stationary in viewport center */}
        <div className="relative text-center max-w-2xl mx-auto px-4 z-10 pointer-events-none select-none">
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

        {/* ========================================================================= */}
        {/* DESKTOP PARALLAX CARDS (md: and up): 4 Authentic Clients Flying Upwards    */}
        {/* Sequence: Right (SR) -> Left (LP) -> Center (SO) -> Right (SP)            */}
        {/* ========================================================================= */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          {/* Card 1: STUART ROX (SR) - Right Column */}
          <DesktopAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[0]}
            progress={scrollYProgress}
            range={[0.0, 0.40]}
            positionClass="right-6 lg:right-12 xl:right-24 top-0"
          />

          {/* Card 2: LOREL PARKER (LP) - Left Column */}
          <DesktopAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[1]}
            progress={scrollYProgress}
            range={[0.18, 0.58]}
            positionClass="left-6 lg:left-12 xl:left-24 top-0"
          />

          {/* Card 3: SHOTA ODA (SO) - Center Column */}
          <DesktopAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[2]}
            progress={scrollYProgress}
            range={[0.38, 0.78]}
            positionClass="left-1/2 -translate-x-1/2 top-0"
          />

          {/* Card 4: SHIN PAUL (SP) - Right Column */}
          <DesktopAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[3]}
            progress={scrollYProgress}
            range={[0.58, 0.98]}
            positionClass="right-6 lg:right-12 xl:right-24 top-0"
          />
        </div>

        {/* ========================================================================= */}
        {/* MOBILE PARALLAX CARDS (< md): Center-flowing cards for small screens       */}
        {/* ========================================================================= */}
        <div className="md:hidden absolute inset-0 pointer-events-none">
          <MobileAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[0]}
            progress={scrollYProgress}
            range={[0.0, 0.35]}
          />
          <MobileAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[1]}
            progress={scrollYProgress}
            range={[0.22, 0.57]}
          />
          <MobileAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[2]}
            progress={scrollYProgress}
            range={[0.44, 0.79]}
          />
          <MobileAnimatedCard
            item={AUTHENTIC_TESTIMONIALS[3]}
            progress={scrollYProgress}
            range={[0.65, 1.0]}
          />
        </div>
      </div>
    </section>
  );
}
