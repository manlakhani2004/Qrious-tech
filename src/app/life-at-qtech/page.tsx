"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Sparkles,
  PartyPopper,
  Calendar,
  Award,
  ArrowRight,
  Smile,
  X,
  ZoomIn
} from "lucide-react";

export default function LifeAtQtechPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    category: string;
  } | null>(null);

  const photos = [
    {
      src: "/images/life-at-qtech-1.png",
      title: "Team Collaboration & Lounge",
      category: "workplace",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_2530.webp",
      title: "Engineering All-Hands Celebration",
      category: "celebrations",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_2738.webp",
      title: "Indoor Table Tennis & Recreation",
      category: "events",
      position: "center 22%"
    },
    {
      src: "/images/resource/IMG_7698.webp",
      title: "Annual Gala & Team Celebration",
      category: "celebrations",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_7618.webp",
      title: "Player of the Match Award Ceremony",
      category: "celebrations",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_3318.webp",
      title: "Christmas Santa Celebration",
      category: "celebrations",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_7554.webp",
      title: "6th Anniversary Celebration Stage",
      category: "celebrations",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_7616.webp",
      title: "Annual Excellence Recognition",
      category: "celebrations",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_1480.webp",
      title: "Team Lunch & Bonding",
      category: "events",
      position: "top center"
    },
    {
      src: "/images/resource/IMG_8803.webp",
      title: "Annual Team Retreat & Dinner",
      category: "events",
      position: "top center"
    },
    {
      src: "/images/4.webp",
      title: "Technical Strategy & Standup",
      category: "workplace",
      position: "center center"
    },
    {
      src: "/images/5.webp",
      title: "Engineering Floor Collaboration",
      category: "workplace",
      position: "center center"
    },
    {
      src: "/images/resource/awards.webp",
      title: "Hall of Recognition & Awards",
      category: "workplace",
      position: "center center"
    },
    {
      src: "/images/resource/IMG_2294.webp",
      title: "Diwali Rangoli Art & Office Decor",
      category: "celebrations",
      position: "center center"
    }
  ];

  const filteredPhotos =
    activeTab === "all" ? photos : photos.filter((p) => p.category === activeTab);

  const pillars = [
    {
      title: "Festivals & Traditions",
      desc: "Celebrating Diwali, Navratri, Holi, and cultural milestones with full enthusiasm and office decorations."
    },
    {
      title: "Birthday & Milestone Bashes",
      desc: "Every team member's birthday, work anniversary, and personal achievement is celebrated together."
    },
    {
      title: "Sports Days & Retreats",
      desc: "Cricket tournaments, indoor games, annual outstation retreats, and weekend bonding sessions."
    },
    {
      title: "Knowledge Exchange & Tech Talks",
      desc: "Bi-weekly internal demo days and engineering pods sharing discoveries across AI, cloud, and architecture."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <Heart className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Life & Culture @ Qtech</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              A Dynamic Mix of Teamwork, <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">Creativity & Personal Growth</span>
            </h1>

            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              At Qrious Tech Team LLP, we foster an environment where friendships flourish, milestones are celebrated, and every day brings an exciting new challenge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/crew"
                className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <span>Join Our Crew</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
              >
                <span>The Company</span>
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Culture Pillars Grid */}
        <section className="py-16 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-y border-neutral-100 dark:border-neutral-800/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight mb-4">
                Workplace Happy Hours & Traditions
              </h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                Vibrant celebrations define our cultural essence and bring the team closer together.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#f8f8f9] dark:bg-neutral-800 flex items-center justify-center mb-5 shadow-xs">
                    <PartyPopper className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{pil.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">{pil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Photo Gallery with Filter Tabs */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                  Life Moments & Memories
                </h2>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm mt-1">
                  Snapshots from our Ahmedabad headquarters, celebrations, and outdoor retreats.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2">
                {[
                  { id: "all", label: "All Photos" },
                  { id: "workplace", label: "Workplace" },
                  { id: "celebrations", label: "Celebrations" },
                  { id: "events", label: "Events & Outings" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-xs"
                        : "bg-neutral-100 dark:bg-[#18181b] text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: (idx % 6) * 0.08 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative h-80 sm:h-96 rounded-[28px] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectPosition: photo.position || "top center" }}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white text-base font-bold tracking-tight">{photo.title}</span>
                    <span className="text-neutral-300 text-xs font-medium capitalize mt-1 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-neutral-300" />
                      {photo.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image */}
                <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Footer Info */}
                <div className="p-5 sm:p-6 bg-neutral-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-neutral-800/80">
                  <div>
                    <h3 className="text-white text-lg font-bold tracking-tight">
                      {selectedPhoto.title}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-0.5 capitalize">
                      {selectedPhoto.category} • Qrious Tech Team LLP
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-5 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold self-start sm:self-auto transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

