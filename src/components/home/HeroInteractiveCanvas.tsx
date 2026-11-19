"use client";

import React, { useRef, useEffect } from "react";

// Ray filament for Stripe-style rayburst
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

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
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

    // Colors calibrated for Stripe sunburst (Image 1)
    const getThemeConfig = () => {
      const dark = isDarkMode();
      return dark
        ? {
            // Core radiant warm amber/gold sunburst in dark mode
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
            cursorLine: "rgba(251, 191, 36, 0.4)",
            cursorGlow: "rgba(245, 158, 11, 0.08)"
          }
        : {
            // Core radiant warm amber/gold sunburst in light mode (exact Stripe dandelion aura)
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
            cursorLine: "rgba(217, 119, 6, 0.35)",
            cursorGlow: "rgba(245, 158, 11, 0.06)"
          };
    };

    // =========================================================================
    // STRIPE-STYLE RAYBURST (Old animation restored, reduced from top, left & right)
    // =========================================================================
    const RAY_COUNT = Math.min(Math.max(Math.floor(width / 5.5), 180), 240);
    const rays: Ray[] = [];
    const sparks: Spark[] = [];
    const waves: Wave[] = [];

    const initRays = () => {
      rays.length = 0;
      const theme = getThemeConfig();
      const originX = width / 2;
      // Bottom touches exactly at the bottom border of the section
      const originY = height;

      // Reduced from top: height * 0.70 instead of 0.98
      // Reduced from left and right: width * 0.46 instead of 0.68
      const maxRadiusX = Math.min(width * 0.46, 700);
      const maxRadiusY = Math.min(height * 0.70, 780);

      for (let i = 0; i < RAY_COUNT; i++) {
        const t = i / (RAY_COUNT - 1); // 0 to 1 across upward semi-circle
        // Fan angle from -PI*0.96 (left horizon) to -PI*0.04 (right horizon)
        const angle = -Math.PI * 0.96 + t * (Math.PI * 0.92);

        // Multi-frequency harmonic envelope creates natural layered dandelion profile (from 0f3988f)
        const domeCurve = Math.sin(t * Math.PI);
        const harmonic = Math.sin(t * Math.PI * 3) * 0.08;
        const jitter = (Math.sin(i * 17.1) * 0.5 + Math.cos(i * 5.3) * 0.5) * 0.24;

        // Elliptical scaling: reduced left/right width, reduced top height
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const ellipseRadius = (maxRadiusX * maxRadiusY) / Math.sqrt(
          Math.pow(maxRadiusY * cosA, 2) + Math.pow(maxRadiusX * sinA, 2)
        );

        const length = ellipseRadius * Math.max(0.38, Math.min(1.05, 0.55 + domeCurve * 0.40 + harmonic + jitter));

        const tipX = originX + cosA * length;
        const tipY = originY + sinA * length;
        const midX = originX + cosA * (length * 0.5);
        const midY = originY + sinA * (length * 0.5);

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
    // CURSOR ARROW TRACKING & MAGNETIC PHYSICS (from 0f3988f)
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

      mouse.speed = Math.hypot(
        mouse.targetX - mouse.prevX,
        mouse.targetY - mouse.prevY
      );

      // Emit interactive micro-sparks on fast cursor motion
      if (mouse.speed > 5 && sparks.length < 50) {
        const theme = getThemeConfig();
        for (let s = 0; s < 2; s++) {
          sparks.push({
            x: mouse.targetX + (Math.random() - 0.5) * 10,
            y: mouse.targetY + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 2.2,
            vy: (Math.random() - 0.5) * 2.2 - 0.5,
            alpha: 0.9,
            color: theme.rayTipDots[Math.floor(Math.random() * theme.rayTipDots.length)],
            size: Math.random() * 2.0 + 1.0
          });
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        const cx = e.clientX - rect.left;
        const cy = e.clientY - rect.top;

        waves.push({
          x: cx,
          y: cy,
          radius: 12,
          maxRadius: 320,
          alpha: 0.85
        });

        const theme = getThemeConfig();
        for (let s = 0; s < 16; s++) {
          const angle = Math.random() * Math.PI * 2;
          const spd = Math.random() * 4.5 + 1.5;
          sparks.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            alpha: 1.0,
            color: theme.rayTipDots[Math.floor(Math.random() * theme.rayTipDots.length)],
            size: Math.random() * 2.5 + 1.2
          });
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = touch.clientX - rect.left;
        mouse.targetY = touch.clientY - rect.top;
        mouse.isHovered = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    const handleResize = () => {
      resizeCanvas();
      initRays();
    };
    window.addEventListener("resize", handleResize);

    const observer = new ResizeObserver(() => {
      resizeCanvas();
      initRays();
    });
    observer.observe(canvas);

    // =========================================================================
    // MAIN RAF RENDER LOOP (from 0f3988f)
    // =========================================================================
    let globalTick = 0;

    const render = () => {
      globalTick += 0.016;
      ctx.clearRect(0, 0, width, height);

      const theme = getThemeConfig();
      const originX = width / 2;
      const originY = height;

      // Smooth lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;

      // 1. Render Click Shockwaves
      for (let w = waves.length - 1; w >= 0; w--) {
        const wave = waves[w];
        wave.radius += 5.5;
        wave.alpha *= 0.94;

        ctx.strokeStyle = `rgba(245, 158, 11, ${wave.alpha * 0.5})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (wave.radius >= wave.maxRadius || wave.alpha <= 0.02) {
          waves.splice(w, 1);
        }
      }

      // 2. Render Micro-Sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const spark = sparks[s];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.alpha *= 0.93;

        ctx.fillStyle = spark.color;
        ctx.globalAlpha = spark.alpha;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;

        if (spark.alpha <= 0.05) {
          sparks.splice(s, 1);
        }
      }

      // 3. Core Radiant Amber / Gold Center Glow at base (touching bottom border)
      const glowRadius = Math.min(width * 0.38, 480);
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
      ctx.arc(originX, originY, glowRadius, Math.PI, 0); // Exact upward semi-circle touching bottom border
      ctx.fill();

      // 4. Cursor Halo Spotlight
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

      // 5. Draw Rays & Calculate Cursor Arrow Magnetic Deflection (from 0f3988f)
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

            const pullFactor = cursorProximity * 24;
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

      // 6. Draw magnetic filament arcs connecting cursor arrow to closest ray tips
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

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}
