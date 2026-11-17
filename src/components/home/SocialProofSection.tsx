"use client";

import React from "react";

export default function SocialProofSection() {
  const logos = [
    {
      name: "Velora",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <circle cx="6" cy="12" r="3" />
          <circle cx="12" cy="6" r="3" />
          <circle cx="18" cy="12" r="3" />
          <circle cx="12" cy="18" r="3" />
        </svg>
      )
    },
    {
      name: "Lunex",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: "AFC",
      icon: (
        <span className="font-extrabold tracking-tighter text-sm">AFC</span>
      )
    },
    {
      name: "Novatra",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <rect x="3" y="5" width="18" height="3" rx="1.5" transform="rotate(-15 12 6.5)" />
          <rect x="3" y="11" width="18" height="3" rx="1.5" transform="rotate(-15 12 12.5)" />
          <rect x="3" y="17" width="18" height="3" rx="1.5" transform="rotate(-15 12 18.5)" />
        </svg>
      )
    },
    {
      name: "Bravio",
      icon: (
        <span className="font-serif italic font-bold text-base">Bravio</span>
      )
    },
    {
      name: "Syntrapior",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
          <path d="M12 3v18M12 3l8 14H4L12 3z" />
        </svg>
      )
    },
    {
      name: "Montra",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <circle cx="7" cy="8" r="2.5" />
          <circle cx="17" cy="8" r="2.5" />
          <circle cx="12" cy="16" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-16 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Motive Centered Small Label (Screenshot 3) */}
        <p className="text-xs sm:text-[13px] text-neutral-500 font-medium tracking-normal mb-8">
          Professional guidance you can rely on
        </p>

        {/* Motive Client Logos Strip (Screenshot 3) */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-neutral-600 hover:text-black transition-colors duration-200 cursor-default"
            >
              {logo.icon}
              <span className="text-base sm:text-lg font-bold tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
