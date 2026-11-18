"use client";

import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  originalX: number;
  originalY: number;
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
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const isDarkMode = () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark");

    const getColors = () => {
      const dark = isDarkMode();
      return dark
        ? {
            particles: [
              "rgba(56, 189, 248, 0.45)",  // Sky blue
              "rgba(129, 140, 248, 0.45)", // Indigo
              "rgba(192, 132, 252, 0.45)", // Purple
              "rgba(52, 211, 153, 0.45)"   // Emerald
            ],
            lineColor: "rgba(99, 102, 241, 0.08)",
            cursorLineColor: "rgba(56, 189, 248, 0.25)",
            cursorGlow: "rgba(59, 130, 246, 0.08)",
            sparkColors: ["#38bdf8", "#818cf8", "#c084fc", "#34d399"]
          }
        : {
            particles: [
              "rgba(37, 99, 235, 0.35)",  // Blue
              "rgba(79, 70, 229, 0.35)",  // Indigo
              "rgba(147, 51, 234, 0.35)", // Purple
              "rgba(16, 185, 129, 0.35)"  // Emerald
            ],
            lineColor: "rgba(99, 102, 241, 0.06)",
            cursorLineColor: "rgba(37, 99, 235, 0.2)",
            cursorGlow: "rgba(59, 130, 246, 0.05)",
            sparkColors: ["#2563eb", "#4f46e5", "#9333ea", "#10b981"]
          };
    };

    // Responsive Particle Count
    const particleCount = Math.min(Math.floor((width * height) / 10000), 85);
    const particles: Particle[] = [];
    const sparks: Spark[] = [];
    const waves: Wave[] = [];

    const colors = getColors();

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2 + 1.2,
        color: colors.particles[Math.floor(Math.random() * colors.particles.length)]
      });
    }

    // Cursor tracking state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      prevX: -1000,
      prevY: -1000,
      radius: 190,
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

      // Emit interactive micro-sparks on cursor movement
      const speed = Math.hypot(
        mouse.targetX - mouse.prevX,
        mouse.targetY - mouse.prevY
      );
      if (speed > 4 && sparks.length < 50) {
        const curColors = getColors();
        for (let s = 0; s < 2; s++) {
          sparks.push({
            x: mouse.targetX + (Math.random() - 0.5) * 10,
            y: mouse.targetY + (Math.random() - 0.5) * 10,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            alpha: 0.9,
            color:
              curColors.sparkColors[
                Math.floor(Math.random() * curColors.sparkColors.length)
              ],
            size: Math.random() * 2.2 + 1
          });
        }
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    // Click creates interactive shockwave ripple that displaces particles
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
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      waves.push({
        x: clickX,
        y: clickY,
        radius: 12,
        maxRadius: 260,
        alpha: 0.75
      });
    };

    // Touch support for mobile devices
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
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // Animation Loop with IntersectionObserver
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth cursor lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.16;
      mouse.y += (mouse.targetY - mouse.y) * 0.16;

      const dynamicColors = getColors();

      // 1. Draw cursor interactive glow spotlight
      if (mouse.isHovered && mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        gradient.addColorStop(0, dynamicColors.cursorGlow);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Update & Render Click Shockwaves
      for (let w = waves.length - 1; w >= 0; w--) {
        const wave = waves[w];
        wave.radius += 6.5;
        wave.alpha *= 0.945;

        ctx.strokeStyle = `rgba(56, 189, 248, ${wave.alpha})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (wave.radius >= wave.maxRadius || wave.alpha <= 0.02) {
          waves.splice(w, 1);
        }
      }

      // 3. Update & Render Cursor Sparks
      for (let s = sparks.length - 1; s >= 0; s--) {
        const spark = sparks[s];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.alpha *= 0.92;

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

      // 4. Update and Draw Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Autonomous Gentle Drift
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;
        if (p.y < -15) p.y = height + 15;
        if (p.y > height + 15) p.y = -15;

        // Interactive Cursor Manipulation (Magnetic Push & Filament Links)
        if (mouse.isHovered && mouse.x > 0) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            // Spring displacement force
            const force = (1 - dist / mouse.radius) * 4.2;
            const angle = Math.atan2(dy, dx);
            p.x -= Math.cos(angle) * force;
            p.y -= Math.sin(angle) * force;

            // Connect glowing filament line from cursor arrow to particle
            ctx.strokeStyle = dynamicColors.cursorLineColor;
            ctx.lineWidth = (1 - dist / mouse.radius) * 1.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Apply wave impulse from click shockwaves
        for (let w = 0; w < waves.length; w++) {
          const wave = waves[w];
          const wdx = p.x - wave.x;
          const wdy = p.y - wave.y;
          const wdist = Math.sqrt(wdx * wdx + wdy * wdy);
          if (Math.abs(wdist - wave.radius) < 30) {
            const push = (1 - Math.abs(wdist - wave.radius) / 30) * 5.5 * wave.alpha;
            const angle = Math.atan2(wdy, wdx);
            p.x += Math.cos(angle) * push;
            p.y += Math.sin(angle) * push;
          }
        }

        // Draw particle dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect adjacent particles with subtle neural threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ndx = p.x - p2.x;
          const ndy = p.y - p2.y;
          const nDist = Math.sqrt(ndx * ndx + ndy * ndy);

          if (nDist < 115) {
            const alpha = (1 - nDist / 115) * 0.28;
            ctx.strokeStyle = isDarkMode()
              ? `rgba(129, 140, 248, ${alpha})`
              : `rgba(79, 70, 229, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
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
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
