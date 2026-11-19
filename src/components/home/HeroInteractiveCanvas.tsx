"use client";

import React, { useRef, useEffect } from "react";

// Ray filament for Stripe fiber-optic rayburst
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

    // Colors calibrated for Stripe sunburst fiber-optics
    const getThemeConfig = () => {
      const dark = isDarkMode();
      return dark
        ? {
            // Core radiant warm amber/gold sunburst aura
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
    // STRIPE-STYLE RAYBURST GENERATION
    // Full bottom fan restored, with top height reduced slightly as requested
    // =========================================================================
    const RAY_COUNT = Math.min(Math.max(Math.floor(width / 5.5), 180), 260);
    const rays: Ray[] = [];
    const sparks: Spark[] = [];
    const waves: Wave[] = [];

    const initRays = () => {
      rays.length = 0;
      const theme = getThemeConfig();
      const originX = width / 2;
      // Restored to full bottom origin exactly as in original design
      const originY = height * 0.96;

      // Full horizontal width preserved across left & right edges
      const maxRadiusX = Math.min(width * 0.68, 1150);

      // Reduced from the top by a little (height * 0.87 instead of 0.98)
      // Tips stop right around the kicker radar / top of headline, without shooting off the page
      const maxRadiusY = Math.min(height * 0.87, 1150);

      for (let i = 0; i < RAY_COUNT; i++) {
        const t = i / (RAY_COUNT - 1); // 0 to 1 across upward semi-circle
        // Fan angle from -PI*0.96 (left horizon) to -PI*0.04 (right horizon)
        const angle = -Math.PI * 0.96 + t * (Math.PI * 0.92);

        // Multi-frequency harmonic envelope creates natural layered dandelion profile
        const domeCurve = Math.sin(t * Math.PI);
        const harmonic = Math.sin(t * Math.PI * 3) * 0.07;
        const jitter = (Math.sin(i * 17.1) * 0.5 + Math.cos(i * 5.3) * 0.5) * 0.22;

        // Elliptical scaling: wide horizontal spread on sides, slightly lowered height at the top
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const ellipseRadius = (maxRadiusX * maxRadiusY) / Math.sqrt(
          Math.pow(maxRadiusY * cosA, 2) + Math.pow(maxRadiusX * sinA, 2)
        );

        // Crown factor: top rays lowered just a little so they don't shoot past the top of the hero
        const crownFactor = Math.max(0.38, Math.min(1.02, 0.55 + domeCurve * 0.38 + harmonic + jitter));
        const length = ellipseRadius * crownFactor;

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
    // CURSOR ARROW TRACKING & MAGNETIC INTERACTION
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

      // Emit interactive micro-sparks on brisk cursor motion
      if (mouse.speed > 6 && sparks.length < 50) {
        const theme = getThemeConfig();
        for (let s = 0; s < 2; s++) {
          sparks.push({
            x: mouse.targetX + (Math.random() - 0.5) * 12,
            y: mouse.targetY + (Math.random() - 0.5) * 12,
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
    // MAIN RAF RENDER LOOP
    // =========================================================================
    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const theme = getThemeConfig();
      const originX = width / 2;
      const originY = height * 0.96;
      const maxRadiusY = Math.min(height * 0.87, 1150);

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

      // 3. Core Radiant Amber/Gold Sunrise Aura (Stripe signature dandelion glow at bottom)
      const coreAuraRadius = maxRadiusY * 0.42;
      const coreGrad = ctx.createRadialGradient(
        originX,
        originY,
        0,
        originX,
        originY,
        coreAuraRadius
      );
      coreGrad.addColorStop(0, theme.coreAmberInner);
      coreGrad.addColorStop(0.35, theme.coreAmberMid);
      coreGrad.addColorStop(0.70, theme.coreAmberOuter);
      coreGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(originX, originY, coreAuraRadius, 0, Math.PI * 2);
      ctx.fill();

      // Secondary ambient cyan wash
      const cyanGrad = ctx.createRadialGradient(
        originX,
        originY,
        maxRadiusY * 0.15,
        originX,
        originY,
        maxRadiusY * 0.85
      );
      cyanGrad.addColorStop(0, theme.coreAuraCyan);
      cyanGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = cyanGrad;
      ctx.beginPath();
      ctx.arc(originX, originY, maxRadiusY * 0.85, 0, Math.PI * 2);
      ctx.fill();

      // 4. Render Fiber-Optic Filament Rays with Magnetic Cursor Manipulation
      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];

        // Autonomous gentle breathing pulse
        const breathe = Math.sin(time * 1.5 + ray.pulseOffset) * 4.5;
        const currentTargetLength = ray.origLength + breathe;

        // Base resting tip position
        const targetTipX = originX + Math.cos(ray.baseAngle) * currentTargetLength;
        const targetTipY = originY + Math.sin(ray.baseAngle) * currentTargetLength;
        const targetCtrlX = originX + Math.cos(ray.baseAngle) * (currentTargetLength * 0.5);
        const targetCtrlY = originY + Math.sin(ray.baseAngle) * (currentTargetLength * 0.5);

        let isHovered = false;
        let hoverProximity = 0;

        // Interactive Cursor Manipulation (Magnetic Pull & Elastic Bending)
        if (mouse.isHovered && mouse.x > 0) {
          const dx = mouse.x - ray.tipX;
          const dy = mouse.y - ray.tipY;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            hoverProximity = 1 - dist / mouse.radius;
            isHovered = hoverProximity > 0.45;

            // Elastic pull force towards cursor arrow
            const pullForce = hoverProximity * 28;
            const pullAngle = Math.atan2(dy, dx);

            ray.vx += Math.cos(pullAngle) * pullForce * 0.14;
            ray.vy += Math.sin(pullAngle) * pullForce * 0.14;

            // Control point also bows gracefully toward cursor
            ray.ctrlX += (mouse.x - ray.ctrlX) * hoverProximity * 0.08;
            ray.ctrlY += (mouse.y - ray.ctrlY) * hoverProximity * 0.08;
          }
        }

        // Apply click shockwave displacement
        for (let w = 0; w < waves.length; w++) {
          const wave = waves[w];
          const wdx = ray.tipX - wave.x;
          const wdy = ray.tipY - wave.y;
          const wdist = Math.hypot(wdx, wdy);
          if (Math.abs(wdist - wave.radius) < 35) {
            const push = (1 - Math.abs(wdist - wave.radius) / 35) * 16 * wave.alpha;
            const angle = Math.atan2(wdy, wdx);
            ray.vx += Math.cos(angle) * push;
            ray.vy += Math.sin(angle) * push;
          }
        }

        // Spring physics: return smoothly toward resting coordinates
        const spring = 0.08;
        const damping = 0.82;

        ray.vx += (targetTipX - ray.tipX) * spring;
        ray.vy += (targetTipY - ray.tipY) * spring;
        ray.vx *= damping;
        ray.vy *= damping;

        ray.tipX += ray.vx;
        ray.tipY += ray.vy;

        ray.ctrlX += (targetCtrlX - ray.ctrlX) * 0.12;
        ray.ctrlY += (targetCtrlY - ray.ctrlY) * 0.12;

        // Draw curved quadratic filament line
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.quadraticCurveTo(ray.ctrlX, ray.ctrlY, ray.tipX, ray.tipY);

        if (isHovered) {
          ctx.strokeStyle = theme.rayStrokeHover;
          ctx.lineWidth = 1.35 * ray.widthFactor;
        } else if (hoverProximity > 0) {
          ctx.strokeStyle = `rgba(251, 191, 36, ${0.25 + hoverProximity * 0.55})`;
          ctx.lineWidth = (0.75 + hoverProximity * 0.5) * ray.widthFactor;
        } else {
          ctx.strokeStyle = theme.rayStroke;
          ctx.lineWidth = 0.75 * ray.widthFactor;
        }
        ctx.stroke();

        // Draw glowing tip micro-dot
        ctx.beginPath();
        const tipRadius = isHovered
          ? ray.dotRadius * 1.6
          : hoverProximity > 0
          ? ray.dotRadius * (1 + hoverProximity * 0.4)
          : ray.dotRadius;

        ctx.arc(ray.tipX, ray.tipY, tipRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#fbbf24" : ray.color;
        ctx.fill();

        // Extra specular bloom for active hovered tip
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(ray.tipX, ray.tipY, tipRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(251, 191, 36, 0.35)";
          ctx.fill();
        }
      }

      // 5. Cursor Filament Connection (Draw delicate golden thread from nearest ray to cursor)
      if (mouse.isHovered && mouse.x > 0) {
        let closestRay: Ray | null = null;
        let closestDist = Infinity;

        for (let i = 0; i < rays.length; i++) {
          const d = Math.hypot(mouse.x - rays[i].tipX, mouse.y - rays[i].tipY);
          if (d < closestDist && d < mouse.radius * 0.8) {
            closestDist = d;
            closestRay = rays[i];
          }
        }

        if (closestRay) {
          ctx.beginPath();
          ctx.moveTo(closestRay.tipX, closestRay.tipY);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = theme.cursorLine;
          ctx.lineWidth = (1 - closestDist / (mouse.radius * 0.8)) * 1.5;
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
