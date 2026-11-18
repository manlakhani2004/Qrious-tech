import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CASE_STUDIES } from "@/data/projects";
import CaseStudyDetailView from "@/components/case-studies/CaseStudyDetailView";

export const instant = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({
    id: cs.id
  }));
}

interface CaseStudyDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const study = CASE_STUDIES.find((c) => c.id === id);

  if (!study) {
    return {
      title: "Case Study Not Found | Qrious Tech Team LLP"
    };
  }

  return {
    title: `${study.title} | Case Study | Qrious Tech Team LLP`,
    description: study.heroDesc
  };
}

function CaseStudyDetailSkeleton() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 animate-pulse">
      <div className="h-6 w-32 bg-neutral-200/80 dark:bg-neutral-800 rounded-full mb-6" />
      <div className="h-12 w-2/3 max-w-xl bg-neutral-200/80 dark:bg-neutral-800 rounded-2xl mb-6" />
      <div className="h-4 w-1/2 max-w-md bg-neutral-200/60 dark:bg-neutral-800/60 rounded-lg mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-neutral-100 dark:bg-white/[0.04] rounded-2xl border border-neutral-200/70 dark:border-white/10" />
        ))}
      </div>
    </section>
  );
}

async function CaseStudyDetailContent({ params }: CaseStudyDetailPageProps) {
  const { id } = await params;
  const study = CASE_STUDIES.find((c) => c.id === id);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailView study={study} />;
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-8 pb-20 lg:pb-28">
        <Suspense fallback={<CaseStudyDetailSkeleton />}>
          <CaseStudyDetailContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
