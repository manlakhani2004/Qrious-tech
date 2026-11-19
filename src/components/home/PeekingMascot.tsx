"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

type MascotType = "astro" | "mona" | "sprite";

export default function PeekingMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);
  const [mascotType, setMascotType] = useState<MascotType>("astro");
  const [isBlinking, setIsBlinking] = useState(false);

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

  const cycleMascot = () => {
    setMascotType((prev) => {
      if (prev === "astro") return "mona";
      if (prev === "mona") return "sprite";
      return "astro";
    });
  };

  return (
    <div
      ref={mascotRef}
      className="relative flex flex-col items-center select-none"
    >
      {/* Mascot Graphic with click-to-cycle (zero tooltips, zero labels) */}
      <div
        onClick={cycleMascot}
        className="relative w-28 sm:w-32 h-16 sm:h-20 cursor-pointer"
      >
        <motion.div
          key={mascotType}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 450, damping: 25 }}
          style={{
            rotate: headRotate,
            x: headX,
            y: headY,
            transformOrigin: "bottom center"
          }}
          whileHover={{ y: -6, scale: 1.05 }}
          className="relative w-full h-full flex items-end justify-center"
        >
          {/* ========================================================== */}
          {/* OPTION 1: ASTRO BOT (High-Tech Futuristic AI Android)       */}
          {/* ========================================================== */}
          {mascotType === "astro" && (
            <svg
              viewBox="0 0 120 80"
              className="w-full h-full overflow-visible drop-shadow-lg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic Shell Gradient */}
                <linearGradient id="astroHelmet" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="45%" stopColor="#f1f5f9" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>

                {/* Dark Visor Glass Gradient */}
                <linearGradient id="astroVisor" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#09090b" />
                  <stop offset="100%" stopColor="#1e1e24" />
                </linearGradient>

                {/* Glowing Cyan LED Eye Gradient */}
                <radialGradient id="cyanLedEye" cx="45%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#a5f3fc" />
                  <stop offset="40%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0891b2" />
                </radialGradient>

                {/* Neon Cyan Glow Filter */}
                <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Antennae */}
              <line x1="60" y1="18" x2="60" y2="6" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="60" cy="5" r="4.5" fill="#06b6d4" filter="url(#cyanGlow)" />
              <circle cx="60" cy="5" r="2" fill="#ffffff" />

              {/* Ears / Side Sensor Pods */}
              <rect x="14" y="36" width="6" height="18" rx="3" fill="#475569" />
              <rect x="100" y="36" width="6" height="18" rx="3" fill="#475569" />
              <circle cx="17" cy="45" r="1.5" fill="#06b6d4" />
              <circle cx="103" cy="45" r="1.5" fill="#06b6d4" />

              {/* Outer Helmet Shell */}
              <ellipse cx="60" cy="46" rx="44" ry="34" fill="url(#astroHelmet)" stroke="#94a3b8" strokeWidth="1" />

              {/* Dark Curved Glass Visor Screen */}
              <ellipse cx="60" cy="48" rx="36" ry="24" fill="url(#astroVisor)" stroke="#06b6d4" strokeWidth="1.2" />

              {/* Visor Glossy Specular Arc (Apple Vision style) */}
              <path
                d="M 32 36 C 46 29, 74 29, 88 36"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.35"
              />

              {/* Eyes with Dynamic Cursor Tracking */}
              <g>
                {/* Left Eye */}
                <g transform="translate(45, 48)">
                  <motion.g
                    animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                    transition={{ duration: 0.08 }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                      {/* Cyan Glowing LED Ring */}
                      <circle cx="0" cy="0" r="8" fill="url(#cyanLedEye)" filter="url(#cyanGlow)" />
                      {/* Dark Inner Pupil */}
                      <circle cx="0" cy="0" r="4.5" fill="#09090b" />
                      {/* Crisp Specular Light */}
                      <circle cx="-2.5" cy="-2.5" r="2" fill="#ffffff" />
                      <circle cx="2" cy="2" r="1" fill="#a5f3fc" />
                    </motion.g>
                  </motion.g>
                </g>

                {/* Right Eye */}
                <g transform="translate(75, 48)">
                  <motion.g
                    animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                    transition={{ duration: 0.08 }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                      {/* Cyan Glowing LED Ring */}
                      <circle cx="0" cy="0" r="8" fill="url(#cyanLedEye)" filter="url(#cyanGlow)" />
                      {/* Dark Inner Pupil */}
                      <circle cx="0" cy="0" r="4.5" fill="#09090b" />
                      {/* Crisp Specular Light */}
                      <circle cx="-2.5" cy="-2.5" r="2" fill="#ffffff" />
                      <circle cx="2" cy="2" r="1" fill="#a5f3fc" />
                    </motion.g>
                  </motion.g>
                </g>
              </g>

              {/* Cute Digital LED Smile */}
              <path
                d="M 56 61 Q 60 64 64 61"
                stroke="#06b6d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                filter="url(#cyanGlow)"
              />

              {/* Chrome Robotic Hands Resting on Ledge */}
              <rect x="24" y="71" width="14" height="9" rx="4.5" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="82" y="71" width="14" height="9" rx="4.5" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
            </svg>
          )}

          {/* ========================================================== */}
          {/* OPTION 2: MONA KITTY (GitHub Copilot Anime Cat Mascot)      */}
          {/* ========================================================== */}
          {mascotType === "mona" && (
            <svg
              viewBox="0 0 120 80"
              className="w-full h-full overflow-visible drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="mascotFaceGradient" cx="50%" cy="40%" r="65%">
                  <stop offset="0%" stopColor="#ff9a9e" />
                  <stop offset="55%" stopColor="#fecfef" />
                  <stop offset="100%" stopColor="#a18cd1" />
                </radialGradient>

                <linearGradient id="mascotHoodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2e1065" />
                  <stop offset="60%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                <radialGradient id="irisGradient" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="45%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </radialGradient>

                <linearGradient id="innerEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff758c" />
                  <stop offset="100%" stopColor="#ff7eb3" />
                </linearGradient>
              </defs>

              {/* Left Ear */}
              <path d="M 22 45 C 16 26, 26 6, 38 16 C 46 22, 46 38, 44 48 Z" fill="url(#mascotHoodGradient)" />
              <path d="M 26 38 C 22 26, 28 14, 35 20 C 40 24, 40 34, 38 40 Z" fill="url(#innerEarGradient)" opacity="0.85" />

              {/* Right Ear */}
              <path d="M 98 45 C 104 26, 94 6, 82 16 C 74 22, 74 38, 76 48 Z" fill="url(#mascotHoodGradient)" />
              <path d="M 94 38 C 98 26, 92 14, 85 20 C 80 24, 80 34, 82 40 Z" fill="url(#innerEarGradient)" opacity="0.85" />

              {/* Outer Hood */}
              <ellipse cx="60" cy="46" rx="46" ry="36" fill="url(#mascotHoodGradient)" />

              {/* Cute Inner Face */}
              <ellipse cx="60" cy="48" rx="38" ry="28" fill="url(#mascotFaceGradient)" />

              {/* Blushing Cheeks */}
              <ellipse cx="34" cy="56" rx="5" ry="3" fill="#ff4d79" opacity="0.4" />
              <ellipse cx="86" cy="56" rx="5" ry="3" fill="#ff4d79" opacity="0.4" />

              {/* Eyes */}
              <g>
                <g transform="translate(43, 46)">
                  <ellipse cx="0" cy="0" rx="9" ry="12" fill="#ffffff" />
                  <motion.g
                    animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                    transition={{ duration: 0.08 }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                      <circle cx="0" cy="0" r="7.5" fill="url(#irisGradient)" />
                      <circle cx="0" cy="0" r="4.5" fill="#0f0e17" />
                      <circle cx="-2" cy="-2.5" r="2.2" fill="#ffffff" />
                      <circle cx="2" cy="2.2" r="1.1" fill="#ffffff" opacity="0.9" />
                    </motion.g>
                  </motion.g>
                  <path d="M -9 -4 C -6 -12, 6 -12, 9 -4" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" fill="none" />
                </g>

                <g transform="translate(77, 46)">
                  <ellipse cx="0" cy="0" rx="9" ry="12" fill="#ffffff" />
                  <motion.g
                    animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                    transition={{ duration: 0.08 }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                      <circle cx="0" cy="0" r="7.5" fill="url(#irisGradient)" />
                      <circle cx="0" cy="0" r="4.5" fill="#0f0e17" />
                      <circle cx="-2" cy="-2.5" r="2.2" fill="#ffffff" />
                      <circle cx="2" cy="2.2" r="1.1" fill="#ffffff" opacity="0.9" />
                    </motion.g>
                  </motion.g>
                  <path d="M -9 -4 C -6 -12, 6 -12, 9 -4" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" fill="none" />
                </g>
              </g>

              {/* Tiny Nose & Smile */}
              <path d="M 59 52 L 61 52 L 60 54 Z" fill="#7c3aed" opacity="0.8" />
              <path d="M 56 57 C 58 60, 62 60, 64 57" stroke="#4c1d95" strokeWidth="1.5" strokeLinecap="round" fill="none" />

              {/* Paws Resting on Ledge */}
              <ellipse cx="28" cy="74" rx="7" ry="5" fill="#1e1b4b" />
              <ellipse cx="28" cy="73" rx="4.5" ry="3" fill="#ff758c" opacity="0.8" />
              <ellipse cx="92" cy="74" rx="7" ry="5" fill="#1e1b4b" />
              <ellipse cx="92" cy="73" rx="4.5" ry="3" fill="#ff758c" opacity="0.8" />
            </svg>
          )}

          {/* ========================================================== */}
          {/* OPTION 3: CYBER SPRITE (Holographic AI Ghost / Cloud)       */}
          {/* ========================================================== */}
          {mascotType === "sprite" && (
            <svg
              viewBox="0 0 120 80"
              className="w-full h-full overflow-visible drop-shadow-lg"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="spriteBody" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>

                <radialGradient id="spriteGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Floating Holographic Halo Ring */}
              <ellipse cx="60" cy="14" rx="18" ry="4" stroke="#34d399" strokeWidth="1.5" fill="none" opacity="0.8" />

              {/* Outer Ambient Glow */}
              <circle cx="60" cy="46" r="38" fill="url(#spriteGlow)" />

              {/* Cute Floating Cloud / Ghost Body */}
              <path
                d="M 28 54 C 20 42, 28 24, 60 22 C 92 24, 100 42, 92 54 C 86 64, 80 68, 60 68 C 40 68, 34 64, 28 54 Z"
                fill="url(#spriteBody)"
              />

              {/* Eyes with Dynamic Cursor Tracking */}
              <g>
                <g transform="translate(46, 45)">
                  <ellipse cx="0" cy="0" rx="8" ry="10" fill="#0f172a" />
                  <motion.g
                    animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                    transition={{ duration: 0.08 }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                      <circle cx="0" cy="0" r="6" fill="#34d399" />
                      <circle cx="0" cy="0" r="3.5" fill="#064e3b" />
                      <circle cx="-1.5" cy="-2" r="1.8" fill="#ffffff" />
                    </motion.g>
                  </motion.g>
                </g>

                <g transform="translate(74, 45)">
                  <ellipse cx="0" cy="0" rx="8" ry="10" fill="#0f172a" />
                  <motion.g
                    animate={{ scaleY: isBlinking ? 0.08 : 1 }}
                    transition={{ duration: 0.08 }}
                    style={{ transformOrigin: "0px 0px" }}
                  >
                    <motion.g style={{ x: pupilX, y: pupilY }}>
                      <circle cx="0" cy="0" r="6" fill="#34d399" />
                      <circle cx="0" cy="0" r="3.5" fill="#064e3b" />
                      <circle cx="-1.5" cy="-2" r="1.8" fill="#ffffff" />
                    </motion.g>
                  </motion.g>
                </g>
              </g>

              {/* Cheerful Smile */}
              <path d="M 57 55 Q 60 58 63 55" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />

              {/* Floating Little Paws */}
              <circle cx="32" cy="72" r="5" fill="#10b981" />
              <circle cx="88" cy="72" r="5" fill="#10b981" />
            </svg>
          )}
        </motion.div>
      </div>
    </div>
  );
}
