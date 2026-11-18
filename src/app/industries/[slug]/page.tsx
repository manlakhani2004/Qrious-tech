import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { INDUSTRIES_LIST } from "@/data/company";
import { CASE_STUDIES } from "@/data/projects";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const instant = false;

export function generateStaticParams() {
  return INDUSTRIES_LIST.map((ind) => ({
    slug: ind.id
  }));
}

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

function IndustryDetailSkeleton() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-pulse">
      <div className="h-6 w-36 bg-neutral-200/80 dark:bg-neutral-800 rounded-full mx-auto mb-6" />
      <div className="h-12 w-2/3 max-w-xl bg-neutral-200/80 dark:bg-neutral-800 rounded-2xl mx-auto mb-6" />
      <div className="h-4 w-1/2 max-w-md bg-neutral-100 dark:bg-neutral-800/60 rounded-lg mx-auto mb-8" />
      <div className="h-12 w-48 bg-neutral-200/80 dark:bg-neutral-800 rounded-full mx-auto" />
    </section>
  );
}

async function IndustryDetailContent({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = INDUSTRIES_LIST.find((i) => i.id === slug);

  if (!industry) {
    notFound();
  }

  // Filter case studies relevant to this industry
  const relevantCaseStudies = CASE_STUDIES.filter((cs) => {
    const iName = industry.name.toLowerCase();
    const cCat = cs.category.toLowerCase();
    const cDesc = cs.heroDesc.toLowerCase();
    return cCat.includes(iName) || cDesc.includes(iName);
  }).slice(0, 3);

  return (
    <>
      {/* Motive Centered Hero */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Ambient background glow for luxury dark mode */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(120,119,198,0.14),transparent)] dark:block hidden" />

        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400" />
          <span>Industry Specialization</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
          {industry.name}: <br />
          <span className="text-neutral-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-500 font-normal">{industry.tagline}</span>
        </h1>

        <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          {industry.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href={`/contact?industry=${encodeURIComponent(industry.name)}`}
            className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[14px] font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Build for {industry.name}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-[14px] font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200"
          >
            <span>All Tech Practices</span>
          </Link>
        </div>
      </section>

      {/* Key Solutions & Domain Architecture Grid */}
      <section className="py-16 bg-[#f8f8f9] dark:bg-[#0c0c0e] border-y border-neutral-100 dark:border-neutral-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
              Domain Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
              Specialized Engineering for {industry.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.keySolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#f8f8f9] dark:bg-neutral-800 flex items-center justify-center mb-6 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-black dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{sol}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                  Designed and audited to meet strict regulatory benchmarks, high data integrity, and enterprise SLAs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Case Studies */}
      {relevantCaseStudies.length > 0 && (
        <section className="py-20 lg:py-28 bg-white dark:bg-[#09090b]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-black dark:text-white tracking-tight">
                  Case Studies in {industry.name}
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center space-x-1"
              >
                <span>Explore All 37 Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relevantCaseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className="bg-[#f8f8f9] dark:bg-[#121215] rounded-[28px] p-7 sm:p-8 border border-transparent dark:border-neutral-800/60 hover:border-neutral-200/60 dark:hover:border-neutral-700 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider bg-white dark:bg-[#18181b] px-3 py-1 rounded-full border border-neutral-200/80 dark:border-neutral-700 shadow-2xs">
                      {cs.category}
                    </span>
                    <h3 className="text-lg font-bold text-black dark:text-white my-3 leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {cs.heroDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800">
                    <Link
                      href={`/case-studies/${cs.id}`}
                      className="text-xs font-bold text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 flex items-center space-x-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function IndustryDetailPage({ params }: IndustryPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        <Suspense fallback={<IndustryDetailSkeleton />}>
          <IndustryDetailContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
