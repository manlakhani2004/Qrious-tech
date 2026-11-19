"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";

export default function PeekingMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to mascot center
  const mouseRelX = useMotionValue(0);
  const mouseRelY = useMotionValue(0);

  // Springs for buttery-smooth gaze and head tilt
  const springConfig = { damping: 20, stiffness: 180, mass: 0.6 };
  const smoothRelX = useSpring(mouseRelX, springConfig);
  const smoothRelY = useSpring(mouseRelY, springConfig);

  // Pupil offsets (max ±8px horizontal, ±6px vertical)
  const pupilX = useTransform(smoothRelX, [-600, 600], [-8, 8]);
  const pupilY = useTransform(smoothRelY, [-500, 500], [-6, 6]);

  // Subtle head tilt and lean towards cursor
  const headRotate = useTransform(smoothRelX, [-600, 600], [-10, 10]);
  const headX = useTransform(smoothRelX, [-600, 600], [-4, 4]);
  const headY = useTransform(smoothRelY, [-500, 500], [-3, 3]);

  // Track global cursor movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      mouseRelX.set(e.clientX - centerX);
      mouseRelY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseRelX, mouseRelY]);

  // Periodic natural blinking
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleBlink = () => {
      const nextBlink = Math.random() * 3500 + 2500; // 2.5 to 6 seconds
      timeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 140);
      }, nextBlink);
    };

    scheduleBlink();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      ref={mascotRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-28 sm:w-32 h-16 sm:h-20 select-none cursor-pointer group"
    >
      {/* Interactive Speech / Reaction Bubble on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-[10.5px] font-mono font-bold shadow-lg border border-neutral-700 dark:border-neutral-200 z-30 pointer-events-none"
          >
            <span>Qrious AI watching ✦</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-neutral-900 dark:bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Mascot Head with Cursor Eye-Tracking */}
      <motion.div
        style={{
          rotate: headRotate,
          x: headX,
          y: headY,
          transformOrigin: "bottom center"
        }}
        whileHover={{ y: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        className="relative w-full h-full flex items-end justify-center"
      >
        <svg
          viewBox="0 0 120 80"
          className="w-full h-full overflow-visible drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Mascot Face Radial Gradient (GitHub Copilot Mona inspired) */}
            <radialGradient id="mascotFaceGradient" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#ff9a9e" />
              <stop offset="55%" stopColor="#fecfef" />
              <stop offset="100%" stopColor="#a18cd1" />
            </radialGradient>

            {/* Mascot Outer Hood / Ear Gradient */}
            <linearGradient id="mascotHoodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e1065" />
              <stop offset="60%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Eye Iris Gradient */}
            <radialGradient id="irisGradient" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="45%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient>

            {/* Inner Ear Glow */}
            <linearGradient id="innerEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff758c" />
              <stop offset="100%" stopColor="#ff7eb3" />
            </linearGradient>
          </defs>

          {/* 1. Left Ear */}
          <path
            d="M 22 45 C 16 26, 26 6, 38 16 C 46 22, 46 38, 44 48 Z"
            fill="url(#mascotHoodGradient)"
          />
          <path
            d="M 26 38 C 22 26, 28 14, 35 20 C 40 24, 40 34, 38 40 Z"
            fill="url(#innerEarGradient)"
            opacity="0.85"
          />

          {/* 2. Right Ear */}
          <path
            d="M 98 45 C 104 26, 94 6, 82 16 C 74 22, 74 38, 76 48 Z"
            fill="url(#mascotHoodGradient)"
          />
          <path
            d="M 94 38 C 98 26, 92 14, 85 20 C 80 24, 80 34, 82 40 Z"
            fill="url(#innerEarGradient)"
            opacity="0.85"
          />

          {/* 3. Outer Hood / Head Silhouette */}
          <ellipse
            cx="60"
            cy="46"
            rx="46"
            ry="36"
            fill="url(#mascotHoodGradient)"
          />

          {/* 4. Cute Inner Face */}
          <ellipse
            cx="60"
            cy="48"
            rx="38"
            ry="28"
            fill="url(#mascotFaceGradient)"
          />

          {/* 5. Cheerful Blushing Cheeks */}
          <ellipse cx="34" cy="56" rx="5" ry="3" fill="#ff4d79" opacity="0.4" />
          <ellipse cx="86" cy="56" rx="5" ry="3" fill="#ff4d79" opacity="0.4" />

          {/* 6. Eyes Group with Live Dynamic Gaze Tracking */}
          <g>
            {/* ================= LEFT EYE ================= */}
            <g transform="translate(43, 46)">
              {/* Eye Socket / Background White */}
              <ellipse cx="0" cy="0" rx="9" ry="12" fill="#ffffff" />

              {/* Eye Clip Region for Blinking */}
              <motion.g
                animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                transition={{ duration: 0.08 }}
                style={{ transformOrigin: "0px 0px" }}
              >
                {/* Moving Pupil & Iris driven by Motion cursor tracking */}
                <motion.g style={{ x: pupilX, y: pupilY }}>
                  {/* Iris */}
                  <circle cx="0" cy="0" r="7.5" fill="url(#irisGradient)" />

                  {/* Deep Pupil Core */}
                  <circle cx="0" cy="0" r="4.5" fill="#0f0e17" />

                  {/* Primary Glossy Specular Catchlight */}
                  <circle cx="-2" cy="-2.5" r="2.2" fill="#ffffff" />

                  {/* Secondary Tiny Sparkle Catchlight */}
                  <circle cx="2" cy="2.2" r="1.1" fill="#ffffff" opacity="0.9" />
                </motion.g>
              </motion.g>

              {/* Upper Eyeliner */}
              <path
                d="M -9 -4 C -6 -12, 6 -12, 9 -4"
                stroke="#1e1b4b"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>

            {/* ================= RIGHT EYE ================= */}
            <g transform="translate(77, 46)">
              {/* Eye Socket / Background White */}
              <ellipse cx="0" cy="0" rx="9" ry="12" fill="#ffffff" />

              {/* Eye Clip Region for Blinking */}
              <motion.g
                animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                transition={{ duration: 0.08 }}
                style={{ transformOrigin: "0px 0px" }}
              >
                {/* Moving Pupil & Iris driven by Motion cursor tracking */}
                <motion.g style={{ x: pupilX, y: pupilY }}>
                  {/* Iris */}
                  <circle cx="0" cy="0" r="7.5" fill="url(#irisGradient)" />

                  {/* Deep Pupil Core */}
                  <circle cx="0" cy="0" r="4.5" fill="#0f0e17" />

                  {/* Primary Glossy Specular Catchlight */}
                  <circle cx="-2" cy="-2.5" r="2.2" fill="#ffffff" />

                  {/* Secondary Tiny Sparkle Catchlight */}
                  <circle cx="2" cy="2.2" r="1.1" fill="#ffffff" opacity="0.9" />
                </motion.g>
              </motion.g>

              {/* Upper Eyeliner */}
              <path
                d="M -9 -4 C -6 -12, 6 -12, 9 -4"
                stroke="#1e1b4b"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </g>
          </g>

          {/* 7. Cute Tiny Nose */}
          <path
            d="M 59 52 L 61 52 L 60 54 Z"
            fill="#7c3aed"
            opacity="0.8"
          />

          {/* 8. Sweet Smile */}
          <path
            d="M 56 57 C 58 60, 62 60, 64 57"
            stroke="#4c1d95"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* 9. Paws Peeking Over Ledge (anchored at y=76 bottom) */}
          {/* Left Paw */}
          <ellipse cx="28" cy="74" rx="7" ry="5" fill="#1e1b4b" />
          <ellipse cx="28" cy="73" rx="4.5" ry="3" fill="#ff758c" opacity="0.8" />

          {/* Right Paw */}
          <ellipse cx="92" cy="74" rx="7" ry="5" fill="#1e1b4b" />
          <ellipse cx="92" cy="73" rx="4.5" ry="3" fill="#ff758c" opacity="0.8" />
        </svg>
      </motion.div>
    </div>
  );
}
