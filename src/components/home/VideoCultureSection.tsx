"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, X, Volume2, VolumeX } from "lucide-react";
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
      // Ignore cross-origin postMessage errors if any
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
          // Resume background video if previously paused
          postIframeCommand("playVideo");
        } else {
          setIsInView(false);
          // Pause background video when user leaves section to save resources
          postIframeCommand("pauseVideo");
        }
      },
      {
        threshold: 0.15,
        rootMargin: "80px", // Starts loading smoothly right before user reaches
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
      // Pause background video while modal is active
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
      // If modal was closed and section is still in view, resume background video
      if (isInView) {
        postIframeCommand("playVideo");
      }
    }
  }, [isModalOpen, isInView, postIframeCommand]);

  // Mute / Unmute toggle for background video
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    postIframeCommand(nextMuted ? "mute" : "unMute");
  };

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <ScrollReveal duration={0.7} yOffset={35}>
          <div
            ref={sectionRef}
            className="relative rounded-[28px] overflow-hidden bg-neutral-900 text-white min-h-[440px] lg:min-h-[520px] flex items-center justify-center p-8 sm:p-14 shadow-2xl group"
          >
            {/* 1. Base Static Image: 10.webp (always visible as instant poster & graceful fallback) */}
            <Image
              src="/images/10.webp"
              alt="Qrious Tech Life and Working Methodology"
              fill
              priority={false}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className={`object-cover transition-opacity duration-1000 ${
                isVideoLoaded ? "opacity-35" : "opacity-50"
              }`}
            />

            {/* 2. Autoplaying Background Video (loads & plays automatically when user reaches section) */}
            {hasEnteredView && (
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <iframe
                  ref={iframeRef}
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0`}
                  title="Qrious Tech Culture & Office Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  onLoad={() => setIsVideoLoaded(true)}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] min-w-[177.77%] aspect-video object-cover pointer-events-none transition-opacity duration-1000 ${
                    isVideoLoaded ? "opacity-60" : "opacity-0"
                  }`}
                />
              </div>
            )}

            {/* 3. Dark Film Gradient Overlay (guarantees crystal-clear typography readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/35 pointer-events-none" />

            {/* 4. Live Culture Reel Badge (bottom-left) */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/10 text-[11px] font-medium text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Office &amp; Engineering Culture</span>
            </div>

            {/* 5. Sound Control Pill (bottom-right) */}
            {hasEnteredView && isVideoLoaded && (
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex items-center">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute background video" : "Mute background video"}
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5 text-neutral-300" />
                      <span className="hidden sm:inline text-neutral-300 font-medium">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline text-emerald-300 font-bold">Sound On</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* 6. Content Centered Above Video */}
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6">
              {/* Play Button: Opens Full Video Modal with HD controls & audio */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Watch Qrious Tech Video in Full"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn cursor-pointer"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black ml-1 group-hover/btn:scale-105 transition-transform" />
                </button>
              </div>

              {/* Authentic Statement from index.html (Lines 588-591 & 2197-2200) */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Qrious Tech Team LLP will get you on the move towards your goals.
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
                Our IT solutions will get you on move towards your destination faster than rivals in a more reliable way. Explore our verified engineering pods and high-velocity sprint frameworks.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/company#methodology"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-100 transition-all duration-200 shadow-md active:scale-95"
                >
                  <span>Proven IT Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 text-sm font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  <span>Let&apos;s Connect</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 7. Full Video Modal (Full HD player with sound & interactive controls) */}
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
                  Meet The Qrious Tech Team | Life &amp; Engineering Culture
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
