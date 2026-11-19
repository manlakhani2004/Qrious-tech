"use client";

import React, { useRef, useEffect, useState } from "react";
import { Sparkles, Orbit, Compass } from "lucide-react";

// Ray filament for Stripe-style rayburst (Image 1)
interface Ray {
  baseAngle: number;
  length: number;
  origLength: number;
  tipX: number;
  tipY: number;
  ctrlX: number;
  ctrlY: number;
  vx: number;
  vy: number;
  dotRadius: number;
  color: string;
  pulseOffset: number;
  widthFactor: number;
}

// 3D particle for Motion.dev-style sphere (Image 2)
interface SpherePoint {
  x3d: number;
  y3d: number;
  z3d: number;
  origX3d: number;
  origY3d: number;
  origZ3d: number;
  radius: number;
  color: string;
  sparkleSpeed: number;
  sparkleOffset: number;
  isAccent: boolean;
}

interface Wave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export default function HeroInteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeMode, setActiveMode] = useState<"unified" | "rayburst" | "sphere">("unified");
  const modeRef = useRef<"unified" | "rayburst" | "sphere">("unified");

  useEffect(() => {
    modeRef.current = activeMode;
  }, [activeMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    const isDarkMode = () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark");

    // Colors calibrated for Stripe sunburst (Image 1) & Motion.dev 3D sphere (Image 2)
    const getThemeConfig = () => {
      const dark = isDarkMode();
      return dark
        ? {
            // Core radiant warm amber/gold sunburst (Image 1 in dark mode)
            coreAmberInner: "rgba(245, 158, 11, 0.45)",
            coreAmberMid: "rgba(251, 191, 36, 0.22)",
            coreAmberOuter: "rgba(217, 119, 6, 0.08)",
            coreAuraCyan: "rgba(56, 189, 248, 0.06)",
            // Ray filaments
            rayStroke: "rgba(147, 197, 253, 0.22)",
            rayStrokeHover: "rgba(251, 191, 36, 0.85)",
            rayTipDots: [
              "#38bdf8", // Electric cyan
              "#818cf8", // Indigo
              "#fbbf24", // Warm gold
              "#f59e0b", // Amber
              "#c084fc", // Violet
              "#34d399"  // Mint
            ],
            // 3D Sphere particles (Image 2 - Motion.dev golden bronze)
            sphereDots: [
              "#fbbf24", // Brilliant gold
              "#f59e0b", // Deep amber
              "#d97706", // Bronze
              "#b45309", // Warm copper
              "#fef3c7"  // Specular cream
            ],
            sphereAccent: "#38bdf8", // Electric cyan highlights
            cursorLine: "rgba(251, 191, 36, 0.4)",
            cursorGlow: "rgba(245, 158, 11, 0.08)"
          }
        : {
            // Core radiant warm amber/gold sunburst (Image 1 in light mode - EXACT match)
            coreAmberInner: "rgba(245, 158, 11, 0.42)",
            coreAmberMid: "rgba(251, 191, 36, 0.24)",
            coreAmberOuter: "rgba(217, 119, 6, 0.10)",
            coreAuraCyan: "rgba(59, 130, 246, 0.08)",
            // Ray filaments in light mode: delicate royal sapphire & cobalt lines
            rayStroke: "rgba(37, 99, 235, 0.24)",
            rayStrokeHover: "rgba(217, 119, 6, 0.85)",
            rayTipDots: [
              "#1d4ed8", // Deep sapphire
              "#2563eb", // Royal blue
              "#d97706", // Amber bronze
              "#4338ca", // Indigo
              "#059669"  // Emerald
            ],
            sphereDots: [
              "#d97706", // Bronze
              "#b45309", // Warm amber
              "#2563eb", // Sapphire
              "#1e40af", // Deep blue
              "#f59e0b"  // Gold
            ],
            sphereAccent: "#0284c7",
            cursorLine: "rgba(217, 119, 6, 0.35)",
            cursorGlow: "rgba(245, 158, 11, 0.06)"
          };
    };

    // =========================================================================
    // 1. STRIPE-STYLE RAYBURST GENERATION (Image 1)
    // =========================================================================
    const RAY_COUNT = Math.min(Math.max(Math.floor(width / 5.5), 180), 260);
    const rays: Ray[] = [];

    const initRays = () => {
      rays.length = 0;
      const theme = getThemeConfig();
      const originX = width / 2;
      const originY = height * 0.96;
      // Majestic expansive radius so rays fan high and wide into the hero section
      const maxRadius = Math.min(width * 0.68, height * 0.98);

      for (let i = 0; i < RAY_COUNT; i++) {
        const t = i / (RAY_COUNT - 1); // 0 to 1 across upward semi-circle
        // Fan angle from -PI*0.96 (left horizon) to -PI*0.04 (right horizon)
        const angle = -Math.PI * 0.96 + t * (Math.PI * 0.92);

        // Multi-frequency harmonic envelope creates natural layered dandelion profile
        const domeCurve = Math.sin(t * Math.PI);
        const harmonic = Math.sin(t * Math.PI * 3) * 0.08;
        const jitter = (Math.sin(i * 17.1) * 0.5 + Math.cos(i * 5.3) * 0.5) * 0.24;
        const length = maxRadius * Math.max(0.38, Math.min(1.05, 0.55 + domeCurve * 0.40 + harmonic + jitter));

        const tipX = originX + Math.cos(angle) * length;
        const tipY = originY + Math.sin(angle) * length;
        const midX = originX + Math.cos(angle) * (length * 0.5);
        const midY = originY + Math.sin(angle) * (length * 0.5);

        rays.push({
          baseAngle: angle,
          length,
          origLength: length,
          tipX,
          tipY,
          ctrlX: midX,
          ctrlY: midY,
          vx: 0,
          vy: 0,
          dotRadius: Math.random() * 2.0 + 1.2,
          color: theme.rayTipDots[Math.floor(Math.random() * theme.rayTipDots.length)],
          pulseOffset: Math.random() * Math.PI * 2,
          widthFactor: Math.random() * 0.5 + 0.7
        });
      }
    };
    initRays();

    // =========================================================================
    // 2. MOTION.DEV-STYLE 3D PARTICLE SPHERE (Image 2)
    // =========================================================================
    const SPHERE_COUNT = 360;
    const spherePoints: SpherePoint[] = [];

    const initSphere = () => {
      spherePoints.length = 0;
      const theme = getThemeConfig();
      // Well-proportioned 3D sphere
      const sphereRadius = Math.min(width * 0.26, 210);

      // Fibonacci sphere distribution for uniform 3D surface points
      const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

      for (let i = 0; i < SPHERE_COUNT; i++) {
        const y = 1 - (i / (SPHERE_COUNT - 1)) * 2; // -1 to 1
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;

        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        const isAccent = Math.random() < 0.12;

        spherePoints.push({
          x3d: x * sphereRadius,
          y3d: y * sphereRadius,
          z3d: z * sphereRadius,
          origX3d: x * sphereRadius,
          origY3d: y * sphereRadius,
          origZ3d: z * sphereRadius,
          radius: Math.random() * 1.8 + 1.1,
          color: isAccent
            ? theme.sphereAccent
            : theme.sphereDots[Math.floor(Math.random() * theme.sphereDots.length)],
          sparkleSpeed: Math.random() * 0.04 + 0.02,
          sparkleOffset: Math.random() * Math.PI * 2,
          isAccent
        });
      }
    };
    initSphere();

    // =========================================================================
    // 3. CURSOR ARROW TRACKING & INTERACTIVE PHYSICS
    // =========================================================================
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      prevX: -1000,
      prevY: -1000,
      speed: 0,
      radius: 240,
      isHovered: false
    };

    // 3D rotation angles for Motion.dev sphere
    let rotX = 0.22;
    let rotY = 0;
    let targetRotX = 0.22;
    let targetRotY = 0;

    const waves: Wave[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        mouse.isHovered = false;
        return;
      }

      mouse.prevX = mouse.targetX;
      mouse.prevY = mouse.targetY;
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;

      // Track cursor velocity for fluid ray bending
      mouse.speed = Math.hypot(
        mouse.targetX - mouse.prevX,
        mouse.targetY - mouse.prevY
      );

      // Mouse offset drives 3D pitch/yaw rotation of Motion.dev particle sphere
      const sphereCenterX = width / 2;
      const sphereCenterY = height * 0.40;
      const dxFromCenter = mouse.targetX - sphereCenterX;
      const dyFromCenter = mouse.targetY - sphereCenterY;

      targetRotY = (dxFromCenter / (width * 0.5)) * 0.95;
      targetRotX = (dyFromCenter / (height * 0.5)) * 0.75;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      targetRotX = 0.22;
      targetRotY = 0;
    };

    // Click produces interactive shockwave that ripples across rays and 3D points
    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }
      waves.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 12,
        maxRadius: Math.max(width * 0.48, 400),
        alpha: 0.95
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        if (
          touch.clientX >= rect.left &&
          touch.clientX <= rect.right &&
          touch.clientY >= rect.top &&
          touch.clientY <= rect.bottom
        ) {
          mouse.targetX = touch.clientX - rect.left;
          mouse.targetY = touch.clientY - rect.top;
          mouse.isHovered = true;
        } else {
          mouse.isHovered = false;
        }
      }
    };

    const handleTouchEnd = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleResize = () => {
      resizeCanvas();
      initRays();
      initSphere();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    let globalTick = 0;

    // =========================================================================
    // 4. ANIMATION & RENDER LOOP
    // =========================================================================
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      globalTick += 0.02;

      // Smooth cursor lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // Smooth 3D sphere rotation with momentum
      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY + 0.0035) * 0.06; // Continuous subtle spin

      const theme = getThemeConfig();
      const originX = width / 2;
      const originY = height * 0.96;
      const currentMode = modeRef.current;

      // -----------------------------------------------------------------------
      // A. RENDER STRIPE RAYBURST (Image 1)
      // -----------------------------------------------------------------------
      if (currentMode === "rayburst" || currentMode === "unified") {
        // 1. Radiant Amber / Gold Center Glow at base (Image 1 core bloom)
        const glowRadius = Math.min(width * 0.48, 520);
        const baseGradient = ctx.createRadialGradient(
          originX,
          originY,
          0,
          originX,
          originY,
          glowRadius
        );
        baseGradient.addColorStop(0, theme.coreAmberInner);
        baseGradient.addColorStop(0.32, theme.coreAmberMid);
        baseGradient.addColorStop(0.60, theme.coreAmberOuter);
        baseGradient.addColorStop(0.82, theme.coreAuraCyan);
        baseGradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = baseGradient;
        ctx.beginPath();
        ctx.arc(originX, originY, glowRadius, Math.PI, 0); // Upward semi-circle
        ctx.fill();

        // 2. Cursor Halo Spotlight
        if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
          const cursorGlow = ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            mouse.radius
          );
          cursorGlow.addColorStop(0, theme.cursorGlow);
          cursorGlow.addColorStop(1, "rgba(0,0,0,0)");
          ctx.fillStyle = cursorGlow;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3. Draw Rays & Calculate Cursor Arrow Magnetic Deflection
        const closestTips: { x: number; y: number; dist: number }[] = [];

        for (let i = 0; i < rays.length; i++) {
          const ray = rays[i];

          // Natural undeflected tip coordinates
          const naturalTipX = originX + Math.cos(ray.baseAngle) * ray.length;
          const naturalTipY = originY + Math.sin(ray.baseAngle) * ray.length;
          const naturalMidX = originX + Math.cos(ray.baseAngle) * (ray.length * 0.5);
          const naturalMidY = originY + Math.sin(ray.baseAngle) * (ray.length * 0.5);

          let targetTipX = naturalTipX;
          let targetTipY = naturalTipY;
          let targetCtrlX = naturalMidX;
          let targetCtrlY = naturalMidY;

          // Subtle organic breeze oscillation
          const breeze = Math.sin(globalTick + ray.pulseOffset) * 4.5;
          targetTipX += Math.cos(ray.baseAngle + Math.PI / 2) * breeze;
          targetTipY += Math.sin(ray.baseAngle + Math.PI / 2) * breeze;

          let isNearCursor = false;
          let cursorProximity = 0;

          // Magnetic attraction / deflection toward cursor arrow
          if (mouse.isHovered && mouse.x > 0) {
            const dx = mouse.x - naturalTipX;
            const dy = mouse.y - naturalTipY;
            const distToTip = Math.hypot(dx, dy);

            if (distToTip < mouse.radius) {
              isNearCursor = true;
              cursorProximity = 1 - distToTip / mouse.radius;

              // Pull control point and tip towards cursor like magnetic dandelion hairs
              const pullFactor = Math.pow(cursorProximity, 1.8) * 75;
              const pullAngle = Math.atan2(dy, dx);

              targetCtrlX += Math.cos(pullAngle) * (pullFactor * 0.75);
              targetCtrlY += Math.sin(pullAngle) * (pullFactor * 0.75);

              targetTipX += Math.cos(pullAngle) * pullFactor;
              targetTipY += Math.sin(pullAngle) * pullFactor;

              closestTips.push({ x: ray.tipX, y: ray.tipY, dist: distToTip });
            }
          }

          // Apply click shockwave displacement along ray length
          for (let w = 0; w < waves.length; w++) {
            const wave = waves[w];
            const wdx = naturalTipX - wave.x;
            const wdy = naturalTipY - wave.y;
            const wdist = Math.hypot(wdx, wdy);
            if (Math.abs(wdist - wave.radius) < 45) {
              const push = (1 - Math.abs(wdist - wave.radius) / 45) * 28 * wave.alpha;
              const wAngle = Math.atan2(wdy, wdx);
              targetTipX += Math.cos(wAngle) * push;
              targetTipY += Math.sin(wAngle) * push;
            }
          }

          // Spring physics: dampening & velocity integration
          const k = 0.13; // Spring stiffness
          const damp = 0.82; // Friction damping
          ray.vx = (ray.vx + (targetTipX - ray.tipX) * k) * damp;
          ray.vy = (ray.vy + (targetTipY - ray.tipY) * k) * damp;
          ray.tipX += ray.vx;
          ray.tipY += ray.vy;

          ray.ctrlX += (targetCtrlX - ray.ctrlX) * 0.16;
          ray.ctrlY += (targetCtrlY - ray.ctrlY) * 0.16;

          // Render curved ray filament
          ctx.beginPath();
          ctx.moveTo(originX, originY);
          ctx.quadraticCurveTo(ray.ctrlX, ray.ctrlY, ray.tipX, ray.tipY);

          if (isNearCursor) {
            ctx.strokeStyle = theme.rayStrokeHover;
            ctx.lineWidth = (0.9 + cursorProximity * 1.5) * ray.widthFactor;
          } else {
            ctx.strokeStyle = theme.rayStroke;
            ctx.lineWidth = 0.65 * ray.widthFactor;
          }
          ctx.stroke();

          // Render glowing ray tip dot
          ctx.fillStyle = ray.color;
          ctx.beginPath();
          const curDotRadius = isNearCursor
            ? ray.dotRadius * (1 + cursorProximity * 0.95)
            : ray.dotRadius;
          ctx.arc(ray.tipX, ray.tipY, curDotRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw magnetic filament arcs connecting cursor arrow to closest ray tips
        if (mouse.isHovered && mouse.x > 0 && closestTips.length > 0) {
          closestTips.sort((a, b) => a.dist - b.dist);
          const topConnections = closestTips.slice(0, 4);
          for (let c = 0; c < topConnections.length; c++) {
            const tip = topConnections[c];
            const alpha = (1 - tip.dist / mouse.radius) * 0.6;
            ctx.strokeStyle = isDarkMode()
              ? `rgba(251, 191, 36, ${alpha})`
              : `rgba(217, 119, 6, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(tip.x, tip.y);
            ctx.stroke();
          }
        }
      }

      // -----------------------------------------------------------------------
      // B. RENDER MOTION.DEV 3D PARTICLE SPHERE (Image 2)
      // -----------------------------------------------------------------------
      if (currentMode === "sphere" || currentMode === "unified") {
        const sphereCenterX = width / 2;
        // Float in upper center in unified mode; center in pure sphere mode
        const sphereCenterY = currentMode === "unified" ? height * 0.38 : height * 0.44;
        const fov = 420;

        // Sort points by rotated Z for correct 3D depth rendering (back-to-front)
        const projectedPoints: {
          x2d: number;
          y2d: number;
          zRot: number;
          scale: number;
          alpha: number;
          radius: number;
          color: string;
        }[] = [];

        // 3D rotation matrices
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        for (let p = 0; p < spherePoints.length; p++) {
          const pt = spherePoints[p];

          // 1. Rotate around Y axis (Yaw)
          const x1 = pt.origX3d * cosY + pt.origZ3d * sinY;
          const y1 = pt.origY3d;
          const z1 = -pt.origX3d * sinY + pt.origZ3d * cosY;

          // 2. Rotate around X axis (Pitch)
          const x2 = x1;
          const y2 = y1 * cosX - z1 * sinX;
          const z2 = y1 * sinX + z1 * cosX;

          // 3. 3D Cursor magnetic bulge (stretches sphere toward cursor when close)
          let finalX = x2;
          let finalY = y2;
          let finalZ = z2;

          if (mouse.isHovered && mouse.x > 0) {
            const screenX = sphereCenterX + (x2 * fov) / (fov + z2 + 200);
            const screenY = sphereCenterY + (y2 * fov) / (fov + z2 + 200);
            const mDist = Math.hypot(mouse.x - screenX, mouse.y - screenY);

            if (mDist < 180 && z2 > -60) {
              const bulge = (1 - mDist / 180) * 42;
              const len = Math.hypot(x2, y2, z2) || 1;
              finalX += (x2 / len) * bulge;
              finalY += (y2 / len) * bulge;
              finalZ += (z2 / len) * bulge;
            }
          }

          // 4. Perspective projection
          const depth = fov + finalZ + 220;
          if (depth > 10) {
            const scale = fov / depth;
            const x2d = sphereCenterX + finalX * scale;
            const y2d = sphereCenterY + finalY * scale;

            // Depth fade: front-facing points are bright and large, back points fade softly
            const normalizedZ = (finalZ + 210) / 420; // 0 (far) to 1 (near)
            const alpha = Math.max(0.14, Math.min(1.0, Math.pow(normalizedZ, 1.45)));

            // Twinkle pulse
            const sparkle = Math.sin(globalTick * 2.2 + pt.sparkleOffset) * 0.2 + 0.8;

            projectedPoints.push({
              x2d,
              y2d,
              zRot: finalZ,
              scale,
              alpha: alpha * sparkle,
              radius: pt.radius * scale,
              color: pt.color
            });
          }
        }

        // Sort back to front
        projectedPoints.sort((a, b) => a.zRot - b.zRot);

        // Render 3D particles
        for (let i = 0; i < projectedPoints.length; i++) {
          const pt = projectedPoints[i];
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = pt.alpha;
          ctx.beginPath();
          ctx.arc(pt.x2d, pt.y2d, Math.max(pt.radius, 0.85), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;
      }

      // -----------------------------------------------------------------------
      // C. UPDATE & RENDER CLICK SHOCKWAVES
      // -----------------------------------------------------------------------
      for (let w = waves.length - 1; w >= 0; w--) {
        const wave = waves[w];
        wave.radius += 8.5;
        wave.alpha *= 0.94;

        ctx.strokeStyle = isDarkMode()
          ? `rgba(251, 191, 36, ${wave.alpha * 0.75})`
          : `rgba(217, 119, 6, ${wave.alpha * 0.75})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (wave.radius >= wave.maxRadius || wave.alpha <= 0.02) {
          waves.splice(w, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />

      {/* Interactive Mode Switcher Pill (Stripe Rayburst / Motion.dev 3D Orb / Unified) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-auto z-20 flex items-center p-1 rounded-[2px] bg-white/80 dark:bg-[#0c0c10]/85 backdrop-blur-md border border-neutral-200/90 dark:border-white/10 shadow-lg text-[11px] font-mono">
        <button
          onClick={() => setActiveMode("rayburst")}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-[2px] transition-all cursor-pointer ${
            activeMode === "rayburst"
              ? "bg-amber-500 text-white font-bold shadow-xs"
              : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
          title="Stripe-style fiber-optic rayburst with magnetic cursor bending"
        >
          <Sparkles className="w-3 h-3" />
          <span>Stripe Burst</span>
        </button>

        <button
          onClick={() => setActiveMode("sphere")}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-[2px] transition-all cursor-pointer ${
            activeMode === "sphere"
              ? "bg-purple-600 text-white font-bold shadow-xs"
              : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
          title="Motion.dev-style 3D particle sphere with cursor manipulation"
        >
          <Orbit className="w-3 h-3" />
          <span>Motion.dev Orb</span>
        </button>

        <button
          onClick={() => setActiveMode("unified")}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-[2px] transition-all cursor-pointer ${
            activeMode === "unified"
              ? "bg-black text-white dark:bg-white dark:text-black font-bold shadow-xs"
              : "text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
          }`}
          title="Unified Symphony: Both Stripe Rayburst & Motion.dev 3D Orb combined"
        >
          <Compass className="w-3 h-3" />
          <span>Unified</span>
        </button>
      </div>
    </div>
  );
}
