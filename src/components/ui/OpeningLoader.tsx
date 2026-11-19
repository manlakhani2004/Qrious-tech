"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";

interface OpeningLoaderProps {
  onComplete?: () => void;
}

export default function OpeningLoader({ onComplete }: OpeningLoaderProps) {
  // Whether this component should be mounted and run
  const [shouldRun, setShouldRun] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [fullyDismissed, setFullyDismissed] = useState(false);

  // Typewriter state
  const [typedLine1, setTypedLine1] = useState("");
  const [typedLine2Prefix, setTypedLine2Prefix] = useState("");
  const [typedLine2Brand, setTypedLine2Brand] = useState("");
  const [typedLine3, setTypedLine3] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const finishCalledRef = useRef(false);
  const typeTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Completion sequence: Curtain wipe up + hero reveal
  const finish = useCallback(() => {
    if (finishCalledRef.current) return;
    finishCalledRef.current = true;

    // Clear any pending typewriter letter timers
    typeTimeoutsRef.current.forEach((t) => clearTimeout(t));
    typeTimeoutsRef.current = [];

    setIsTyping(false);
    // Fill all text immediately so no partial words flash
    setTypedLine1("Hello,");
    setTypedLine2Prefix("We are ");
    setTypedLine2Brand("QRIOUS TECH");
    setTypedLine3("Engineering Autonomous AI for Business");

    // Add .from-loader class to root to coordinate hero & navbar smooth entrance
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("from-loader");
      document.documentElement.classList.remove("is-loading");
    }

    // Trigger dual curtain wipe
    setIsDone(true);

    // Save session flag so internal page navigation doesn't replay unless hard reloaded
    try {
      sessionStorage.setItem("qtech_opening_intro_seen", "true");
    } catch {
      // Storage might be disabled
    }
  }, []);

  // Initial check: Runs on first session visit OR hard reload
  useEffect(() => {
    setIsMounted(true);
    if (typeof window === "undefined") return;

    // Check for prefers-reduced-motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      document.documentElement.classList.remove("is-loading");
      setFullyDismissed(true);
      return;
    }

    // Check if hard reload (Navigation Timing API)
    let isHardReload = false;
    try {
      const navEntries = performance.getEntriesByType("navigation");
      if (navEntries.length > 0) {
        const nav = navEntries[0] as PerformanceNavigationTiming;
        isHardReload = nav.type === "reload";
      }
    } catch {
      // Fallback
    }

    const hasSeenIntro = sessionStorage.getItem("qtech_opening_intro_seen") === "true";
    const forceIntro = window.location.search.includes("intro=1");

    // Play if hard reload, first time in session, or forced via URL / command
    if (isHardReload || !hasSeenIntro || forceIntro) {
      setShouldRun(true);
      // Lock scroll while active
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.classList.add("is-loading");
    } else {
      setFullyDismissed(true);
      document.documentElement.classList.remove("is-loading");
    }
  }, []);

  // Guaranteed unmount timer once curtain wipe begins
  useEffect(() => {
    if (!isDone) return;

    const timer = setTimeout(() => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      }
      setFullyDismissed(true);
      if (onComplete) onComplete();
    }, 1300);

    return () => clearTimeout(timer);
  }, [isDone, onComplete]);

  // Listen for replay custom event (from Command Palette ⌘K)
  useEffect(() => {
    const handleReplay = () => {
      finishCalledRef.current = false;
      setTypedLine1("");
      setTypedLine2Prefix("");
      setTypedLine2Brand("");
      setTypedLine3("");
      setIsTyping(true);
      setIsDone(false);
      setFullyDismissed(false);
      setShouldRun(true);
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.classList.add("is-loading");
      document.documentElement.classList.remove("from-loader");
    };

    window.addEventListener("replay-qtech-intro", handleReplay);
    return () => window.removeEventListener("replay-qtech-intro", handleReplay);
  }, []);

  // Keyboard skip (Escape, Space, Enter)
  useEffect(() => {
    if (!shouldRun || fullyDismissed || isDone) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        finish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shouldRun, fullyDismissed, isDone, finish]);

  // Typewriter sequence execution
  useEffect(() => {
    if (!shouldRun || fullyDismissed || isDone) return;

    const line1 = "Hello,";
    const line2Pre = "We are ";
    const line2Brand = "QRIOUS TECH";
    const line3 = "Engineering Autonomous AI for Business";

    let delay = 200; // Initial calm pause

    // Helper to queue timeouts safely
    const queue = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      typeTimeoutsRef.current.push(t);
    };

    // Type Line 1
    for (let i = 0; i <= line1.length; i++) {
      const text = line1.slice(0, i);
      queue(() => setTypedLine1(text), delay);
      delay += 50;
    }

    delay += 220; // Pause between line 1 and line 2

    // Type Line 2 Prefix ("We are ")
    for (let i = 0; i <= line2Pre.length; i++) {
      const text = line2Pre.slice(0, i);
      queue(() => setTypedLine2Prefix(text), delay);
      delay += 45;
    }

    // Type Line 2 Brand ("QRIOUS TECH")
    for (let i = 0; i <= line2Brand.length; i++) {
      const text = line2Brand.slice(0, i);
      queue(() => setTypedLine2Brand(text), delay);
      delay += 50;
    }

    delay += 240; // Pause between line 2 and line 3

    // Type Line 3 ("Engineering Autonomous AI for Business")
    for (let i = 0; i <= line3.length; i++) {
      const text = line3.slice(0, i);
      queue(() => setTypedLine3(text), delay);
      delay += 25;
    }

    // Reading hold time before curtain wipe
    delay += 600;

    // Trigger exit curtain sweep
    queue(() => {
      finish();
    }, delay);

    // Hard fallback safety timer (5.0s maximum)
    const safety = setTimeout(() => {
      finish();
    }, 5000);

    return () => {
      clearTimeout(safety);
      typeTimeoutsRef.current.forEach((t) => clearTimeout(t));
      typeTimeoutsRef.current = [];
    };
  }, [shouldRun, fullyDismissed, isDone, finish]);

  if (!isMounted || !shouldRun || fullyDismissed) {
    return null;
  }

  return (
    <div
      id="qtech-opening-loader"
      onClick={finish}
      className={`fixed inset-0 w-screen h-screen z-[999999] flex flex-col items-center justify-center select-none overflow-hidden transition-none ${
        isDone ? "pointer-events-none" : "pointer-events-auto"
      }`}
      aria-hidden={isDone}
    >
      {/* Layer 1: Bottom Curtain - Vibrant Brand Accent (wipes up at 1.15s with 0.08s delay) */}
      <div
        className={`absolute inset-0 z-0 bg-gradient-to-tr from-[#312e81] via-[#4f46e5] via-[#6366f1] to-[#0284c7] will-change-transform will-change-[clip-path] pointer-events-none transition-all duration-[1150ms] ease-[cubic-bezier(0.77,0,0.175,1)] delay-[80ms] ${
          isDone
            ? "-translate-y-full [clip-path:inset(0_0_100%_0)] opacity-90"
            : "translate-y-0 [clip-path:inset(0_0_0_0)] opacity-100"
        }`}
      />

      {/* Layer 2: Top Curtain - Luxury Deep Obsidian Black (wipes up at 1.05s) */}
      <div
        className={`absolute inset-0 z-10 bg-[#060608] will-change-transform will-change-[clip-path] pointer-events-none transition-all duration-[1050ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isDone
            ? "-translate-y-full [clip-path:inset(0_0_100%_0)]"
            : "translate-y-0 [clip-path:inset(0_0_0_0)]"
        }`}
      />

      {/* Layer 3: Centered Typewriter Typography Block */}
      <div
        className={`relative z-20 max-w-3xl px-6 text-center transition-all duration-600 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isDone ? "opacity-0 -translate-y-6" : "opacity-100 translate-y-0"
        }`}
      >
        {/* Line 1: Crisp Monospace Greeting */}
        <div className="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-[0.28em] mb-3 min-h-[1.5em] flex items-center justify-center">
          <span>{typedLine1}</span>
          {isTyping && typedLine1.length < 6 && (
            <span className="inline-block w-1.5 h-3.5 bg-blue-400 ml-1.5 animate-pulse" />
          )}
        </div>

        {/* Line 2: Bold Brand Identification */}
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 min-h-[1.3em] flex items-center justify-center flex-wrap gap-x-2.5">
          <span>{typedLine2Prefix}</span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(99,102,241,0.45)]">
            {typedLine2Brand}
          </span>
          {isTyping && typedLine1.length >= 6 && typedLine3.length === 0 && (
            <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-9 bg-indigo-400 ml-1 animate-pulse" />
          )}
        </div>

        {/* Line 3: AI Mission Statement */}
        <div className="text-xs sm:text-sm md:text-base font-mono text-neutral-400 tracking-wide min-h-[1.5em] flex items-center justify-center">
          <span className="text-neutral-300">{typedLine3}</span>
          {isTyping && typedLine3.length > 0 && typedLine3.length < 38 && (
            <span className="inline-block w-1.5 h-4 bg-sky-400 ml-1.5 animate-pulse" />
          )}
        </div>
      </div>
    </div>
  );
}