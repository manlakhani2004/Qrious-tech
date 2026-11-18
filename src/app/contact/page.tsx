"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Building,
  ArrowRight
} from "lucide-react";
import {
  LinkedInIcon,
  XTwitterIcon,
  InstagramIcon,
  FacebookIcon
} from "@/components/icons/SocialIcons";
import { COMPANY_INFO } from "@/data/company";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "ai-ml",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subj = params.get("subject") || params.get("service") || params.get("slot");
      if (subj) {
        setFormData((prev) => ({
          ...prev,
          message: `Inquiry regarding: ${subj}\n\n`
        }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        {/* Motive Centered Hero with Smooth Animation */}
        <section className="py-16 sm:py-24 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 text-center relative overflow-hidden">
          {/* Ambient background glow for luxury dark mode */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

          <ScrollReveal>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
              <Mail className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
              <span>Let&apos;s Connect</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
              Start Your Next <br />
              <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">
                Technology Journey
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a discovery session with our software architects. We provide tailored AI roadmaps, dedicated engineering pods, and rapid 14-day working POCs.
            </p>
          </ScrollReveal>
        </section>

        {/* Contact Details & Form Grid with Smooth Staggered Animation */}
        <section className="py-8 max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Office & Direct Channels */}
            <ScrollReveal className="lg:col-span-5 space-y-6">
              <div className="bg-[#f8f8f9] dark:bg-[#111114] border border-neutral-200/80 dark:border-white/[0.08] rounded-3xl p-8 space-y-6 shadow-sm dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-md transition-all duration-300">
                <h2 className="text-xl font-bold text-black dark:text-white flex items-center">
                  <Building className="w-5 h-5 text-neutral-700 dark:text-neutral-300 mr-2" />
                  Qrious Tech Team LLP
                </h2>

                <div className="space-y-4 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-neutral-500 mt-1 shrink-0" />
                    <div>
                      <strong className="text-black dark:text-white block text-sm mb-1">
                        Corporate Headquarters
                      </strong>
                      <p className="leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-2">
                    <Phone className="w-4 h-4 text-neutral-500 shrink-0" />
                    <div>
                      <strong className="text-black dark:text-white block mb-0.5">Telephone:</strong>
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-black dark:text-white font-bold hover:underline"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-1">
                    <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                    <div>
                      <strong className="text-black dark:text-white block mb-0.5">Business & Sales:</strong>
                      <a
                        href={`mailto:${COMPANY_INFO.salesEmail}`}
                        className="text-black dark:text-white font-bold hover:underline"
                      >
                        {COMPANY_INFO.salesEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-1">
                    <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                    <div>
                      <strong className="text-black dark:text-white block mb-0.5">Careers & HR:</strong>
                      <a
                        href={`mailto:${COMPANY_INFO.hrEmail}`}
                        className="text-neutral-500 dark:text-neutral-400 font-semibold hover:underline"
                      >
                        {COMPANY_INFO.hrEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Channels with Hover Motion */}
                <div className="pt-4 border-t border-neutral-200/70 dark:border-white/[0.08]">
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500 block mb-3 font-bold uppercase tracking-wider">
                    Follow Our Updates
                  </span>
                  <div className="flex items-center space-x-3">
                    {[
                      { href: COMPANY_INFO.socials.linkedin, icon: <LinkedInIcon className="w-3.5 h-3.5" />, label: "LinkedIn" },
                      { href: COMPANY_INFO.socials.twitter, icon: <XTwitterIcon className="w-3.5 h-3.5" />, label: "Twitter" },
                      { href: COMPANY_INFO.socials.instagram, icon: <InstagramIcon className="w-3.5 h-3.5" />, label: "Instagram" },
                      { href: COMPANY_INFO.socials.facebook, icon: <FacebookIcon className="w-3.5 h-3.5" />, label: "Facebook" }
                    ].map((s, idx) => (
                      <motion.a
                        key={idx}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-full bg-white dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white transition-all shadow-2xs"
                        aria-label={s.label}
                      >
                        {s.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-[#f8f8f9] dark:bg-[#111114] rounded-[28px] p-6 sm:p-7 space-y-3.5 hover:shadow-xl transition-all duration-300 border border-neutral-200/80 dark:border-white/[0.08] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Strict NDA Before Any Code or Architecture Review</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-600 dark:text-neutral-300">
                  <Clock className="w-4 h-4 text-neutral-700 dark:text-neutral-400 shrink-0" />
                  <span>Senior Developer Matching within 48 Hours</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Submission Form */}
            <ScrollReveal delay={0.15} className="lg:col-span-7 bg-[#f8f8f9] dark:bg-[#111114] rounded-[28px] p-8 sm:p-10 hover:shadow-xl transition-all duration-300 border border-neutral-200/80 dark:border-white/[0.08] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_rgba(0,0,0,0.6)]">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="text-center py-16 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">Consultation Request Received</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                      Thank you. An engineering lead will review your submission and contact you within 24 hours with a custom AI roadmap and NDA details.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-7 py-3 text-xs font-bold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-full transition-all active:scale-95 shadow-sm"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl font-extrabold text-black dark:text-white mb-2">
                      Request an Engineering Proposal
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 bg-white dark:bg-[#16161a] border border-neutral-200/80 dark:border-white/10 rounded-2xl text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@enterprise.com"
                          className="w-full px-4 py-3 bg-white dark:bg-[#16161a] border border-neutral-200/80 dark:border-white/10 rounded-2xl text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white/40 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Your Company"
                          className="w-full px-4 py-3 bg-white dark:bg-[#16161a] border border-neutral-200/80 dark:border-white/10 rounded-2xl text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 bg-white dark:bg-[#16161a] border border-neutral-200/80 dark:border-white/10 rounded-2xl text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white/40 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Technology Practice Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-[#16161a] border border-neutral-200/80 dark:border-white/10 rounded-2xl text-sm text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white/40 transition-all"
                      >
                        <option value="ai-ml">AI & LangGraph Multi-Agent Systems</option>
                        <option value="web-dev">Cloud-Native Web (Next.js / Node.js)</option>
                        <option value="mobile-dev">Mobile App (Flutter / React Native)</option>
                        <option value="salesforce">Salesforce Multi-Cloud Consulting</option>
                        <option value="data-power-bi">Power BI & Microsoft Fabric</option>
                        <option value="dedicated-pod">Dedicated Engineering Pod</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                        Project Requirements & Timeline
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline your project scope, target timeline, technical requirements, or team scale needs..."
                        className="w-full px-4 py-3 bg-white dark:bg-[#16161a] border border-neutral-200/80 dark:border-white/10 rounded-2xl text-sm text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white/40 transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-100 shadow-sm dark:shadow-[0_0_24px_rgba(255,255,255,0.18)] hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95"
                    >
                      <span>Submit & Request Specialist Discovery</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
