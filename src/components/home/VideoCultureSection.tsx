"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  X,
  Volume2,
  VolumeX,
  Sparkles,
  ShieldCheck,
  Cpu,
  Users2,
  Activity,
  Maximize2
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const YOUTUBE_VIDEO_ID = "BRqfdyGFnvw";

export default function VideoCultureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Send command to the background YouTube iframe via postMessage
  const postIframeCommand = useCallback((func: string, args: unknown[] = []) => {
    try {
      if (iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func, args }),
          "*"
        );
      }
    } catch {
      // Ignore cross-origin postMessage errors
    }
  }, []);

  // Intersection Observer to detect when user reaches the section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          setIsInView(true);
          postIframeCommand("playVideo");
        } else {
          setIsInView(false);
          postIframeCommand("pauseVideo");
        }
      },
      {
        threshold: 0.15,
        rootMargin: "80px"
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [postIframeCommand]);

  // Handle modal keyboard (Escape) & body scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      postIframeCommand("pauseVideo");

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
      if (isInView) {
        postIframeCommand("playVideo");
      }
    }
  }, [isModalOpen, isInView, postIframeCommand]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    postIframeCommand(nextMuted ? "mute" : "unMute");
  };

  return (
    <section className="py-20 lg:py-28 2xl:py-36 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative overflow-hidden isolate">
      {/* Vercel Micro-Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Radiant Mesh Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[1000px] h-[350px] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>Inside Our Engineering Lab</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14] mb-4">
            Where Enterprise AI Systems Are <br className="hidden sm:inline" />
            Architected, Benchmarked, and Hardened
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Step inside our 100+ engineer development facility in Ahmedabad. We don&apos;t just prompt models — we engineer resilient multi-agent swarms, private RAG pipelines, and high-concurrency platforms.
          </p>
        </ScrollReveal>

        {/* Cinematic Studio Monitor Frame */}
        <ScrollReveal duration={0.7} yOffset={35}>
          <div
            ref={sectionRef}
            className="relative rounded-[32px] overflow-hidden bg-neutral-950 border border-neutral-800/90 shadow-2xl shadow-black/40 group max-w-6xl mx-auto"
          >
            {/* Top Hardware Bezel with macOS Controls & Live Telemetry Stream */}
            <div className="px-5 py-3.5 bg-neutral-900/90 border-b border-neutral-800/80 flex items-center justify-between z-20 relative backdrop-blur-md">
              {/* Window dots */}
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 hidden sm:inline text-[11px] font-mono text-neutral-400">
                  qtech://engineering-hub.v4/ahmedabad-hq
                </span>
              </div>

              {/* Center: Live stream indicator */}
              <div className="flex items-center space-x-2 text-[11px] font-mono text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold tracking-wider">LAB STREAM // AHMEDABAD HQ</span>
              </div>

              {/* Right: Audio Waveform & Resolution */}
              <div className="flex items-center space-x-3 text-[11px] font-mono text-neutral-400">
                <div className="hidden sm:flex items-center space-x-0.5 h-3">
                  <span className="w-0.5 h-2 bg-emerald-400 animate-pulse" />
                  <span className="w-0.5 h-3 bg-emerald-400 animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-emerald-400 animate-pulse delay-150" />
                  <span className="w-0.5 h-3 bg-emerald-400 animate-pulse delay-200" />
                </div>
                <span className="hidden sm:inline px-2 py-0.5 rounded bg-neutral-800 text-[10px] text-neutral-300 font-bold">
                  4K HDR • 60 FPS
                </span>
              </div>
            </div>

            {/* Video Viewport: 16:9 Aspect Ratio with Autoplay & Fallback Poster */}
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              {/* Base Poster: Image 10.webp */}
              <Image
                src="/images/10.webp"
                alt="Qrious Tech Engineering Team and Culture"
                fill
                priority={false}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className={`object-cover transition-opacity duration-1000 ${
                  isVideoLoaded ? "opacity-30" : "opacity-60"
                }`}
              />

              {/* YouTube Autoplaying Background Video */}
              {hasEnteredView && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <iframe
                    ref={iframeRef}
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0`}
                    title="Qrious Tech Culture & Office Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    onLoad={() => setIsVideoLoaded(true)}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] min-w-[177.77%] aspect-video object-cover pointer-events-none transition-opacity duration-1000 ${
                      isVideoLoaded ? "opacity-75" : "opacity-0"
                    }`}
                  />
                </div>
              )}

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none" />

              {/* Floating Top Telemetry Cards on Video */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none z-10">
                <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300">
                  <Users2 className="w-3.5 h-3.5 text-blue-400" />
                  <span>100+ Full-Time In-House Engineers</span>
                </div>

                <div className="hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>0% Freelancers • 100% IP Transferred</span>
                </div>
              </div>

              {/* Center Play Button with Studio HUD */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Watch Full High-Definition Engineering Keynote"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn cursor-pointer mb-4"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black ml-1 group-hover/btn:scale-105 transition-transform" />
                </button>

                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1 drop-shadow-md">
                  Watch Engineering Keynote &amp; Tour
                </div>
                <div className="text-[11px] font-mono text-neutral-400">
                  Click to open full studio player with stereo audio
                </div>
              </div>

              {/* Bottom Interactive HUD Bar */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between">
                {/* Left: Office Badge */}
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-medium text-neutral-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Science City, Ahmedabad Hub</span>
                </div>

                {/* Right: Sound Control & Fullscreen Button */}
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute background preview" : "Mute background preview"}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-neutral-300" />
                        <span className="hidden sm:inline text-neutral-300 text-[11px]">Sound Off</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="hidden sm:inline text-emerald-300 text-[11px] font-bold">Sound Active</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    aria-label="Expand Full Video"
                    className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/15 text-white shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Studio Action Bar */}
            <div className="p-6 sm:p-8 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Ready to deploy your first 14-day agentic AI sprint?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Review your architecture with our senior engineering team with zero commitment.
                </p>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-sm active:scale-95"
                >
                  <span>Schedule AI Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/life-at-qtech"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Explore Engineering Culture</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full HD Studio Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Qrious Tech Culture Video Modal"
        >
          <div
            className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/80 bg-neutral-900/90">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  Meet The Qrious Tech Engineering Team | Life &amp; Working Culture
                </h3>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href={`https://youtu.be/${YOUTUBE_VIDEO_ID}?si=jT_eh8bMHSzP8lRE`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-medium transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                  className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Video Player with Sound & Native Controls */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1`}
                title="Meet The Qrious Tech Team Full Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
