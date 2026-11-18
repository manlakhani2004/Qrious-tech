"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView, animate } from "motion/react";

// Modern Interactive Stat Counter that counts up when scrolled into view
function StatCounter({
  value,
  suffix = "+",
  duration = 2.2
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setCount(Math.round(latest))
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums font-black">
      {count}
      <span className="text-neutral-400 dark:text-neutral-500 font-extrabold ml-0.5">{suffix}</span>
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      subTitle: "IT Solutions For Easy Integration",
      titlePrefix: "Pioneering Business Growth with",
      titleSuffix: "AI Innovation & IT Solutions",
      description:
        "Building lasting relationships between IT companies and certified engineering experts. Simple, effective, and tailored technology solutions to help your business succeed in the digital age."
    },
    {
      subTitle: "IT Solutions For Easy Integration",
      titlePrefix: "IT Services To Develop",
      titleSuffix: "Solutions Your Way!",
      description:
        "Building a relationship between IT companies & experts. Providing high-performance engineering pods, cloud-native architectures, and dependable tech delivery tailored to your goals."
    }
  ];

  // Auto-switch between both authentic Qtech headers in a continuous loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Scroll-driven animation for the hero image expansion matching Motive Webflow template
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Spring physics config for buttery-smooth, gradual momentum (eliminates fast/abrupt jumps)
  const springConfig = {
    stiffness: 85,
    damping: 26,
    mass: 0.35,
    restDelta: 0.001
  };

  // Raw transformation across a wider, gradual scroll range (0 to 0.42)
  const rawScale = useTransform(scrollYProgress, [0, 0.42], [0.72, 1.0]);
  const scale = useSpring(rawScale, springConfig);

  const rawRadiusNum = useTransform(scrollYProgress, [0, 0.42], [38, 18]);
  const smoothRadiusNum = useSpring(rawRadiusNum, springConfig);
  const borderRadius = useTransform(smoothRadiusNum, (r) => `${r}px`);

  const rawOpacity = useTransform(scrollYProgress, [0, 0.18], [0.92, 1]);
  const opacity = useSpring(rawOpacity, springConfig);

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 2xl:pt-20 2xl:pb-36 bg-white dark:bg-[#09090b] transition-colors duration-200">
      {/* Ambient top radial glow for luxury dark mode */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl 2xl:max-w-7xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative pt-4 sm:pt-6">
        {/* Animated Loop for Both Authentic Qtech Headers with Smooth Left-to-Right Motion */}
        <div className="min-h-[220px] sm:min-h-[250px] lg:min-h-[270px] 2xl:min-h-[320px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                    delayChildren: 0
                  }
                },
                exit: {
                  opacity: 0,
                  x: 30,
                  transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto"
            >
              {/* Authentic Subtitle: Left-to-Right Smooth Entrance */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="text-xs sm:text-sm 2xl:text-base font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
              >
                IT Solutions For Easy{" "}
                <span className="text-black dark:text-white font-extrabold">Integration</span>
              </motion.div>

              {/* Main Headline: Staggered Lines Moving Left-to-Right with Crisp Solid Visibility */}
              <h1 className="text-xl xs:text-2xl sm:text-5xl lg:text-[70px] xl:text-[76px] 2xl:text-[92px] 3xl:text-[104px] font-extrabold tracking-tight text-black dark:text-white max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto leading-[1.12] mb-5 break-words">
                <motion.span
                  className="block text-black dark:text-white"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {heroSlides[currentSlide].titlePrefix}
                </motion.span>
                <motion.span
                  className="block mt-1 sm:mt-1.5 text-neutral-500 dark:text-neutral-400 font-extrabold"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                >
                  {heroSlides[currentSlide].titleSuffix}
                </motion.span>
              </h1>

              {/* Tagline / Value Statement: Smooth Left-to-Right Entrance */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg 2xl:text-xl 3xl:text-2xl max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto leading-relaxed font-normal mb-2"
              >
                {heroSlides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Switch Indicator Dots */}
        <div className="flex items-center justify-center space-x-2 my-6 2xl:my-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Switch to slide ${idx + 1}`}
              className={`h-1.5 2xl:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-7 2xl:w-10 bg-black dark:bg-white" : "w-2 2xl:w-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600"
              }`}
            />
          ))}
        </div>

        {/* Dual Action Buttons matching Motive with Authentic Qtech Actions */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 z-10"
        >
          {/* Subtle cyan/blue glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] 2xl:w-[720px] h-[220px] 2xl:h-[300px] bg-gradient-to-r from-cyan-200/50 via-blue-200/40 to-purple-200/50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-purple-900/20 blur-[90px] 2xl:blur-[120px] rounded-full pointer-events-none -z-10" />

          {/* Primary Button: Let's Connect */}
          <Link
            href="/contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-8 py-3.5 2xl:px-10 2xl:py-4.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] 2xl:text-base font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all duration-200 shadow-md dark:shadow-[0_0_24px_rgba(255,255,255,0.18)] active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary Button: Case Studies */}
          <Link
            href="/case-studies"
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 px-7 py-3.5 2xl:px-9 2xl:py-4.5 rounded-full bg-white dark:bg-white/[0.05] text-black dark:text-white border border-neutral-200 dark:border-white/10 hover:border-black dark:hover:border-white/30 hover:bg-neutral-50 dark:hover:bg-white/[0.09] transition-all duration-200 text-[14px] 2xl:text-base font-semibold shadow-2xs active:scale-95 backdrop-blur-sm"
          >
            <span>Explore 37 Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Authentic Hero Media Container with Scroll-Driven Scale Motion (matching Motive Webflow dynamic expansion) */}
        <div className="mt-12 sm:mt-16 2xl:mt-20 w-full max-w-6xl 2xl:max-w-[1560px] 3xl:max-w-[1760px] mx-auto flex justify-center">
          <motion.div
            style={{
              scale,
              borderRadius,
              opacity,
              transformOrigin: "center top"
            }}
            className="w-full relative overflow-hidden border border-black/[0.08] dark:border-white/[0.1] shadow-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2/1] group transition-shadow duration-300"
          >
            <Image
              src="/images/qtech-team.webp"
              alt="Qrious Tech Team Ahmedabad Headquarters"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, (max-width: 1920px) 1560px, 1760px"
              className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Modern Enterprise Impact Metrics: Open Frameless Strip with Live Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 2xl:mt-24 3xl:mt-28 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 dark:divide-white/10">
            {/* Stat 1: 200+ Happy Clients */}
            <div className="text-center sm:px-8 2xl:px-12 pb-8 sm:pb-0 first:pt-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-black dark:text-white tracking-tight leading-none mb-3">
                <StatCounter value={200} />
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                Happy Clients
              </div>
              <div className="text-xs 2xl:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium">
                Across USA &amp; Global Markets
              </div>
            </div>

            {/* Stat 2: 500+ Projects Done */}
            <div className="text-center sm:px-8 2xl:px-12 py-8 sm:py-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-black dark:text-white tracking-tight leading-none mb-3">
                <StatCounter value={500} />
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                Projects Done
              </div>
              <div className="text-xs 2xl:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium">
                Delivered on Time &amp; Scope
              </div>
            </div>

            {/* Stat 3: 100+ Team Members */}
            <div className="text-center sm:px-8 2xl:px-12 pt-8 sm:pt-0">
              <div className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl 3xl:text-8xl font-black text-black dark:text-white tracking-tight leading-none mb-3">
                <StatCounter value={100} />
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-extrabold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest">
                Team Members
              </div>
              <div className="text-xs 2xl:text-sm text-neutral-500 dark:text-neutral-400 mt-1.5 font-medium">
                Certified Engineers &amp; Architects
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
