import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SERVICES_LIST } from "@/data/company";
import { CASE_STUDIES } from "@/data/projects";
import ServiceDetailClient from "./ServiceDetailClient";

export const instant = false;

export function generateStaticParams() {
  return SERVICES_LIST.map((srv) => ({
    slug: srv.slug
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

function ServiceDetailSkeleton() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-pulse">
      <div className="h-6 w-36 bg-neutral-200/80 rounded-full mx-auto mb-6" />
      <div className="h-12 w-2/3 max-w-xl bg-neutral-200/80 rounded-2xl mx-auto mb-6" />
      <div className="h-4 w-1/2 max-w-md bg-neutral-100 rounded-lg mx-auto mb-8" />
      <div className="h-12 w-48 bg-neutral-200/80 rounded-full mx-auto" />
    </section>
  );
}

async function ServiceDetailContent({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Filter case studies relevant to this service
  const relevantCaseStudies = CASE_STUDIES.filter((cs) => {
    const sId = service.id.toLowerCase();
    const cTab = cs.tab.toLowerCase();
    const cCat = cs.category.toLowerCase();
    if (sId.includes("ai") && (cTab.includes("ai") || cCat.includes("ai"))) return true;
    if (sId.includes("salesforce") && (cTab.includes("salesforce") || cCat.includes("salesforce"))) return true;
    if (sId.includes("power") || sId.includes("data") || sId.includes("visual")) {
      return cTab.includes("bi") || cCat.includes("bi") || cCat.includes("power");
    }
    if (sId.includes("web") && (cTab.includes("web") || cCat.includes("web"))) return true;
    if (sId.includes("mobile") && (cTab.includes("mobile") || cCat.includes("mobile"))) return true;
    return true;
  }).slice(0, 3);

  return (
    <ServiceDetailClient
      service={service}
      relevantCaseStudies={relevantCaseStudies}
    />
  );
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-[#0c0407] dark:text-[#f4f4f5] flex flex-col transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pb-20 lg:pb-28">
        <Suspense fallback={<ServiceDetailSkeleton />}>
          <ServiceDetailContent params={params} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
