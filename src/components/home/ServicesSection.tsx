"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Brain,
  Cpu,
  Sparkles,
  Database,
  BarChart3,
  ArrowRight,
  Bot,
  Zap,
  ShieldCheck,
  Code2,
  Terminal,
  Activity,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  GitBranch,
  Lock,
  Workflow
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServicePractice {
  id: string;
  tabTitle: string;
  badge: string;
  headline: string;
  tagline: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  latency: string;
  accuracy: string;
  compliance: string;
  techStack: string[];
  capabilities: string[];
  pipelineNodes: {
    step: string;
    label: string;
    sublabel: string;
    status: string;
    color: string;
  }[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
}

const AI_PRACTICES: ServicePractice[] = [
  {
    id: "autonomous-agents",
    tabTitle: "Autonomous AI Agents",
    badge: "Multi-Agent Orchestration",
    headline: "Autonomous Multi-Agent Swarms That Run Critical Workflows 24/7",
    tagline: "LangGraph • CrewAI • Deterministic Tool Execution • Self-Correcting",
    description:
      "We replace slow manual business bottlenecks with deterministic multi-agent swarms. Each agent is specialized for extraction, reasoning, validation, and multi-system dispatch to Salesforce, SAP, and databases with zero human latency.",
    href: "/services/ai-ml-development",
    icon: <Bot className="w-5 h-5 text-blue-500" />,
    latency: "184ms P99",
    accuracy: "99.8% Ground Truth",
    compliance: "Air-Gapped VPC",
    techStack: ["LangGraph", "CrewAI", "vLLM", "Python 3.12", "FastAPI", "Redis Queue"],
    capabilities: [
      "Autonomous extraction from messy PDFs, emails, invoices & CRM events",
      "Self-correcting loop with automated validation before write-back",
      "Bi-directional sync to Salesforce, SAP, HubSpot, Slack & Postgres",
      "Deterministic human-in-the-loop review threshold for edge cases"
    ],
    pipelineNodes: [
      {
        step: "01",
        label: "Omnichannel Ingestion",
        sublabel: "PDF, Webhook, CRM Event, Email",
        status: "Active",
        color: "text-blue-500 border-blue-500/30 bg-blue-500/10"
      },
      {
        step: "02",
        label: "Multi-Agent Supervisor",
        sublabel: "Task Decomposition & Intent Router",
        status: "Routing",
        color: "text-purple-500 border-purple-500/30 bg-purple-500/10"
      },
      {
        step: "03",
        label: "Domain Execution Agents",
        sublabel: "Parallel Retrieval & Tool Execution",
        status: "Executing",
        color: "text-amber-500 border-amber-500/30 bg-amber-500/10"
      },
      {
        step: "04",
        label: "Verified Action Dispatch",
        sublabel: "Salesforce / SAP / SQL Write-Back",
        status: "Success (99.8%)",
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
      }
    ],
    codeSnippet: {
      filename: "workflow.agent_swarm.py",
      language: "python",
      code: `from langgraph.graph import StateGraph, END
from qtech_ai.orchestrator import SwarmSupervisor, Guardrails

# Define Multi-Agent Autonomous Swarm
supervisor = SwarmSupervisor(
    model="meta-llama/Llama-3.3-70B-Instruct",
    vpc_airgapped=True,
    guardrails=Guardrails(zero_leakage=True, audit_trail=True)
)

workflow = StateGraph(EnterpriseState)
workflow.add_node("ingest", parse_omnichannel_payload)
workflow.add_node("reasoning", supervisor.execute_domain_agents)
workflow.add_node("dispatch", write_verified_crm_database)

workflow.set_entry_point("ingest")
workflow.add_edge("ingest", "reasoning")
workflow.add_edge("reasoning", "dispatch")
workflow.add_edge("dispatch", END)`
    }
  },
  {
    id: "private-rag",
    tabTitle: "Private Enterprise RAG",
    badge: "Zero-Leakage Architecture",
    headline: "Air-Gapped Private Knowledge Search Over All Enterprise Data",
    tagline: "Hybrid Semantic + Keyword Search • Sourced Citations • Zero Data Leakage",
    description:
      "Transform dispersed internal documents, Notion wikis, ERP records, and PDF manuals into an ultra-fast private intelligence engine. Your proprietary data is never used to train external models and stays within your private VPC.",
    href: "/services/ai-ml-development",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    latency: "14ms Vector Match",
    accuracy: "100% Sourced Citations",
    compliance: "SOC2 Type II Aligned",
    techStack: ["Qdrant", "Pinecone", "BGE-M3", "Hybrid Sparse-Dense", "Chunking Engine", "Private VPC"],
    capabilities: [
      "Sub-20ms hybrid vector and keyword search across millions of documents",
      "Exact paragraph-level citations with visual PDF page verification",
      "Strict role-based access control (RBAC): users only see authorized files",
      "Complete on-prem or private cloud hosting (AWS, GCP, Azure, or Private Servers)"
    ],
    pipelineNodes: [
      {
        step: "01",
        label: "Enterprise Data Connectors",
        sublabel: "SharePoint, Google Drive, SQL, PDFs",
        status: "Auto-Sync",
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
      },
      {
        step: "02",
        label: "Semantic Chunking & Embedding",
        sublabel: "BGE-M3 Dense + BM25 Sparse",
        status: "Vectorized",
        color: "text-sky-500 border-sky-500/30 bg-sky-500/10"
      },
      {
        step: "03",
        label: "Re-Ranking & RBAC Filter",
        sublabel: "Cohere Re-Rank + Permission Boundary",
        status: "Filtered",
        color: "text-indigo-500 border-indigo-500/30 bg-indigo-500/10"
      },
      {
        step: "04",
        label: "Grounded Generation",
        sublabel: "Exact Document Citations & Audit Log",
        status: "Zero Leakage",
        color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
      }
    ],
    codeSnippet: {
      filename: "rag_retrieval_pipeline.py",
      language: "python",
      code: `from qtech_ai.rag import HybridVectorStore, RBACFilter
from qtech_ai.models import PrivateInferenceEngine

# Query air-gapped private vector index
store = HybridVectorStore(endpoint="vpc://qdrant.internal:6333")
rbac = RBACFilter(user_roles=["executive", "legal_counsel"])

context_chunks = store.search(
    query="Review SLA indemnification in 2026 enterprise contract",
    top_k=5,
    filter=rbac.get_security_context(),
    rerank=True
)

response = PrivateInferenceEngine.generate(
    prompt=context_chunks.build_grounded_prompt(),
    strict_citations_only=True
)`
    }
  },
  {
    id: "custom-ai-software",
    tabTitle: "Custom AI Software",
    badge: "Next.js 16 & Serverless",
    headline: "Custom Web & Mobile Software With Native Embedded AI Copilots",
    tagline: "React 19 • Next.js 16 • High-Concurrency Serverless • Sub-Second UI",
    description:
      "We design and build bespoke software platforms with AI copilots baked into every workflow. From high-concurrency customer portals to automated internal business tools, we engineer products built to scale to millions of users.",
    href: "/services/web-development",
    icon: <Code2 className="w-5 h-5 text-indigo-500" />,
    latency: "< 50ms Edge TTFB",
    accuracy: "99.99% Uptime",
    compliance: "PCI-DSS & HIPAA Ready",
    techStack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    capabilities: [
      "Custom SaaS architectures engineered for high concurrency and sub-second loads",
      "Real-time streaming AI completions and generative UI micro-widgets",
      "Offline-first mobile applications built with Swift, Kotlin, and Flutter",
      "Full CI/CD automated test suites with 100% intellectual property transfer"
    ],
    pipelineNodes: [
      {
        step: "01",
        label: "Modern Web Frontend",
        sublabel: "Next.js 16 Server Components & Edge SSR",
        status: "Streaming",
        color: "text-indigo-500 border-indigo-500/30 bg-indigo-500/10"
      },
      {
        step: "02",
        label: "Copilot Streaming API",
        sublabel: "AI SDK V4 + SSE Bi-Directional Stream",
        status: "Active",
        color: "text-blue-500 border-blue-500/30 bg-blue-500/10"
      },
      {
        step: "03",
        label: "Serverless Microservices",
        sublabel: "FastAPI / Node.js Distributed Workers",
        status: "Healthy",
        color: "text-purple-500 border-purple-500/30 bg-purple-500/10"
      },
      {
        step: "04",
        label: "Transactional Database",
        sublabel: "Postgres + pgvector & Redis Cache",
        status: "Replicated",
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
      }
    ],
    codeSnippet: {
      filename: "CopilotChatStream.tsx",
      language: "typescript",
      code: `import { useChat } from "ai/react";
import { AICopilotWidget, GenerativeCard } from "@/components/ai";

export function EnterpriseCopilot({ tenantId }: { tenantId: string }) {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/copilot/stream",
    body: { tenantId, vpcAirgapped: true },
    onFinish: (message) => {
      telemetry.track("copilot_action_completed", { id: message.id });
    }
  });

  return (
    <AICopilotWidget
      messages={messages}
      input={input}
      onSend={handleSubmit}
      loading={isLoading}
      renderToolInvocation={(tool) => <GenerativeCard action={tool} />}
    />
  );
}`
    }
  },
  {
    id: "predictive-fabric-bi",
    tabTitle: "Predictive BI & Fabric",
    badge: "Business Intelligence",
    headline: "Enterprise Power BI, Microsoft Fabric & Automated ML Forecasting",
    tagline: "DAX Modeling • Microsoft Fabric Lakehouse • Automated Revenue Predictor",
    description:
      "Transform opaque spreadsheets and disconnected databases into clean, automated executive dashboards and predictive machine-learning pipelines. Forecast cash flows, detect operational anomalies, and drive board-level clarity.",
    href: "/services/data-visualization",
    icon: <BarChart3 className="w-5 h-5 text-amber-500" />,
    latency: "< 2s Query Refresh",
    accuracy: "97.4% Forecast Precision",
    compliance: "Microsoft Gold Tier Standards",
    techStack: ["Microsoft Fabric", "Power BI", "DAX", "Azure Synapse", "PySpark", "OneLake"],
    capabilities: [
      "Custom Power BI and Microsoft Fabric semantic models with direct OneLake query",
      "Automated machine learning models predicting 30/60/90-day demand and revenue",
      "Executive KPI dashboards with role-level data security and scheduled email delivery",
      "Embedded analytics SDK for SaaS customer-facing reporting portals"
    ],
    pipelineNodes: [
      {
        step: "01",
        label: "OneLake Data Ingestion",
        sublabel: "ERP, CRM, Stripe, POS & SQL Feeds",
        status: "Continuous",
        color: "text-amber-500 border-amber-500/30 bg-amber-500/10"
      },
      {
        step: "02",
        label: "Fabric Medallion Lakehouse",
        sublabel: "Bronze -> Silver -> Gold Delta Tables",
        status: "Cleaned",
        color: "text-orange-500 border-orange-500/30 bg-orange-500/10"
      },
      {
        step: "03",
        label: "Predictive ML Forecasting",
        sublabel: "Time-Series AutoARIMA + XGBoost",
        status: "Fitted (97.4%)",
        color: "text-blue-500 border-blue-500/30 bg-blue-500/10"
      },
      {
        step: "04",
        label: "Executive Power BI Dashboards",
        sublabel: "Direct Lake Query with Sub-Second DAX",
        status: "Real-Time",
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
      }
    ],
    codeSnippet: {
      filename: "fabric_delta_lake.dax",
      language: "dax",
      code: `// Dynamic AI Revenue Forecast Measure
Predicted_Revenue_Q4 = 
VAR HistoricalRunRate = CALCULATE(
    [Net_Recognized_MRR],
    DATESBETWEEN('Date'[Date], MIN('Date'[Date]), TODAY())
)
VAR ML_Multiplier = LOOKUPVALUE(
    'ML_Forecast_Parameters'[Weight],
    'ML_Forecast_Parameters'[Metric], "Trend_Coefficient"
)
RETURN
    HistoricalRunRate * (1 + ML_Multiplier)`
    }
  },
  {
    id: "dedicated-ai-pods",
    tabTitle: "Dedicated AI Pods",
    badge: "Senior Embedded Squads",
    headline: "Dedicated AI Engineering Pods That Ship Working Code Every Sprint",
    tagline: "100+ In-House Engineers • Direct Slack & Jira Integration • 14-Day Delivery",
    description:
      "Scale your engineering capacity without recruitment delays or freelance risk. Our full-time, in-house AI engineers, MLOps specialists, and full-stack architects embed seamlessly into your existing development team and release velocity.",
    href: "/how-we-work",
    icon: <Cpu className="w-5 h-5 text-rose-500" />,
    latency: "< 24h Onboarding",
    accuracy: "100% In-House Staff",
    compliance: "100% IP & Repo Ownership",
    techStack: ["Slack Connect", "GitHub Enterprise", "Jira / Linear", "AWS / Azure", "Docker / K8s"],
    capabilities: [
      "100+ full-time in-house software engineers and AI architects in Ahmedabad HQ",
      "Guaranteed 14-day working POC sprint before committing to long-term roadmaps",
      "Zero contractor churn: stable squads with daily standups and transparent commits",
      "Full legal IP assignment: all code, repositories, and models belong exclusively to you"
    ],
    pipelineNodes: [
      {
        step: "01",
        label: "Architecture Alignment",
        sublabel: "Sprint Goal Scoping & Stack Selection",
        status: "Day 1-2",
        color: "text-rose-500 border-rose-500/30 bg-rose-500/10"
      },
      {
        step: "02",
        label: "Embedded Integration",
        sublabel: "Slack Connect, Linear & GitHub Setup",
        status: "Day 3",
        color: "text-purple-500 border-purple-500/30 bg-purple-500/10"
      },
      {
        step: "03",
        label: "14-Day Working POC",
        sublabel: "Live Functional Prototype with Real Data",
        status: "Day 14",
        color: "text-blue-500 border-blue-500/30 bg-blue-500/10"
      },
      {
        step: "04",
        label: "Continuous Production Velocity",
        sublabel: "Bi-Weekly Releases & 99.9% Uptime SLA",
        status: "Production",
        color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/10"
      }
    ],
    codeSnippet: {
      filename: "sprint_sla_charter.yml",
      language: "yaml",
      code: `team_pod_spec:
  pod_name: "enterprise-ai-core-01"
  headcount: 5 # 1 Lead AI Architect, 2 Backend/ML, 1 Next.js, 1 QA
  location: "Ahmedabad Engineering Center"
  employment_type: "100% In-House Full-Time (Zero Freelancers)"
  telemetry:
    sprint_cadence: "14-Day Working Deliverables"
    repo_transfer: "Immediate commits to Client GitHub"
    ip_ownership: "100% Client-Owned Intellectual Property"
    sla_response_time: "< 15 minutes during overlapping business hours"`
    }
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("autonomous-agents");
  const [viewMode, setViewMode] = useState<"architecture" | "code">("architecture");

  const currentService =
    AI_PRACTICES.find((s) => s.id === activeTab) || AI_PRACTICES[0];

  return (
    <section
      id="services"
      className="py-20 lg:py-28 2xl:py-36 bg-white dark:bg-[#09090b] border-b border-neutral-100 dark:border-neutral-800 transition-colors duration-200 relative overflow-hidden isolate"
    >
      {/* Precision Micro-Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-20 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Multi-Hue Ambient Radiant Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] 2xl:w-[1000px] h-[400px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[1760px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/10 text-xs font-semibold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>Enterprise AI Practices &amp; Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-black dark:text-white tracking-tight leading-[1.14] mb-4">
            Production-Ready AI Systems <br className="hidden sm:inline" />
            Engineered For Real Business Scale
          </h2>

          <p className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We eliminate manual bottlenecks with autonomous multi-agent swarms, private zero-leakage RAG, custom web platforms, and dedicated engineering pods that deliver in 14-day sprints.
          </p>
        </ScrollReveal>

        {/* Interactive Stripe/Vercel Command Deck Container */}
        <div className="bg-[#f8f8f9] dark:bg-[#101014] border border-neutral-200/90 dark:border-white/[0.08] rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden">
          {/* Top Specular Line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 border-b border-neutral-200/80 dark:border-white/[0.08] scrollbar-none">
            {AI_PRACTICES.map((srv) => {
              const isActive = srv.id === activeTab;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => setActiveTab(srv.id)}
                  className={`flex items-center space-x-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black shadow-md scale-102"
                      : "bg-white/60 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-white/[0.08] border border-neutral-200/60 dark:border-white/5"
                  }`}
                >
                  <span className="shrink-0">{srv.icon}</span>
                  <span>{srv.tabTitle}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Main Stage Grid: Left Content Details + Right Live Telemetry & Pipeline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column (5 Cols): Capabilities, Description & CTAs */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div>
                  {/* Badge & Title */}
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-[11px] font-bold text-neutral-800 dark:text-neutral-200 shadow-2xs mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>{currentService.badge}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight leading-snug mb-2">
                    {currentService.headline}
                  </h3>

                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-wide">
                    {currentService.tagline}
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 font-normal">
                    {currentService.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-neutral-200/70 dark:border-white/[0.08]">
                    <div className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                      Enterprise Core Deliverables
                    </div>
                    {currentService.capabilities.map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-2.5 text-xs text-neutral-700 dark:text-neutral-300 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                      Engineered With
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {currentService.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-medium text-neutral-800 dark:text-neutral-300 font-mono shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={currentService.href}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-xs sm:text-sm font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm active:scale-95"
                  >
                    <span>Explore {currentService.tabTitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-white dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/10 text-xs sm:text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors"
                  >
                    <span>Request 14-Day POC</span>
                  </Link>
                </div>
              </div>

              {/* Right Column (7 Cols): Interactive Stage with Mode Switcher (Pipeline vs Code) */}
              <div className="lg:col-span-7 bg-white dark:bg-[#0c0c0f] border border-neutral-200/90 dark:border-white/[0.08] rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
                {/* Stage Header: Telemetry Strip + View Mode Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-neutral-100 dark:border-neutral-800/80">
                  {/* Left: Telemetry KPI Chips */}
                  <div className="flex items-center space-x-2 sm:space-x-3 text-[11px] font-mono">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{currentService.latency}</span>
                    </span>

                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-medium">
                      <span>{currentService.accuracy}</span>
                    </span>

                    <span className="hidden sm:inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-medium">
                      <Lock className="w-3 h-3 mr-0.5" />
                      <span>{currentService.compliance}</span>
                    </span>
                  </div>

                  {/* Right: View Switcher (Architecture vs Code) */}
                  <div className="flex items-center p-0.5 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 text-[11px] font-medium">
                    <button
                      type="button"
                      onClick={() => setViewMode("architecture")}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        viewMode === "architecture"
                          ? "bg-white dark:bg-neutral-800 text-black dark:text-white font-bold shadow-2xs"
                          : "text-neutral-500 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      Architecture
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("code")}
                      className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                        viewMode === "code"
                          ? "bg-white dark:bg-neutral-800 text-black dark:text-white font-bold shadow-2xs"
                          : "text-neutral-500 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      Code / Spec
                    </button>
                  </div>
                </div>

                {/* View 1: Architecture Pipeline Nodes */}
                {viewMode === "architecture" ? (
                  <div className="space-y-3.5">
                    <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 flex items-center justify-between pb-1">
                      <span>DATAFLOW PIPELINE</span>
                      <span className="text-emerald-500 font-bold">ALL NODES HEALTHY (100%)</span>
                    </div>

                    <div className="space-y-3">
                      {currentService.pipelineNodes.map((node, nIdx) => (
                        <div
                          key={nIdx}
                          className="relative p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-white/[0.06] hover:border-neutral-300 dark:hover:border-white/20 transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center space-x-3.5">
                            {/* Step Badge */}
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold border ${node.color}`}
                            >
                              {node.step}
                            </span>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-black dark:text-white">
                                {node.label}
                              </div>
                              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                                {node.sublabel}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 shadow-2xs">
                              {node.status}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom SLA banner inside card */}
                    <div className="mt-4 pt-3.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                      <span className="flex items-center space-x-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Zero Data Retention SLA</span>
                      </span>
                      <span>Air-Gapped Private VPC</span>
                    </div>
                  </div>
                ) : (
                  /* View 2: Live Code / YAML / DAX Terminal */
                  <div className="rounded-xl overflow-hidden bg-neutral-950 text-neutral-200 border border-neutral-800 font-mono text-xs">
                    {/* Terminal Header */}
                    <div className="px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-[11px] text-neutral-400">
                          {currentService.codeSnippet.filename}
                        </span>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500">
                        {currentService.codeSnippet.language}
                      </span>
                    </div>

                    {/* Code Body */}
                    <div className="p-4 overflow-x-auto text-[11.5px] leading-relaxed max-h-[340px] scrollbar-thin">
                      <pre className="text-neutral-300">
                        <code>{currentService.codeSnippet.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Capability Proof Strip */}
          <div className="mt-8 pt-6 border-t border-neutral-200/80 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/5">
              <div className="text-base sm:text-lg font-bold text-black dark:text-white font-mono">
                14 Days
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Working Live POC Guarantee
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/5">
              <div className="text-base sm:text-lg font-bold text-black dark:text-white font-mono">
                100%
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                IP &amp; Repository Ownership
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/5">
              <div className="text-base sm:text-lg font-bold text-black dark:text-white font-mono">
                &lt; 200ms
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Sub-Second Telemetry SLA
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-neutral-200/60 dark:border-white/5">
              <div className="text-base sm:text-lg font-bold text-black dark:text-white font-mono">
                Air-Gapped
              </div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Private Cloud VPC Deployment
              </div>
            </div>
          </div>
        </div>

        {/* View All Practices CTA */}
        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/services"
            className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 text-xs sm:text-sm font-semibold text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-2xs"
          >
            <span>Explore all 10+ Enterprise AI &amp; Cloud practices</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
