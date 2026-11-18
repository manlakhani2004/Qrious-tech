import rawPortfolio from "./portfolio-projects.json";
import rawCaseStudies from "./case-studies.json";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  originalContext: string;
  year: string;
  domain: string;
  category: string;
  image: string;
  accent: string;
  summary: string;
  overview: string[];
  technicalOverview: string[];
  technologies: string[];
  features: string[];
  metrics: ProjectMetric[];
}

export interface CaseStudyKPI {
  val: string;
  lbl: string;
}

export interface CaseStudyHighlight {
  title: string;
  desc: string;
  icon?: string;
}

export interface CaseStudyArchitectureFeature {
  title: string;
  desc: string;
  tags: string[];
  icon?: string;
}

export interface CaseStudyProblem {
  title: string;
  desc: string;
}

export interface CaseStudyChallengeSolution {
  title: string;
  items: { title: string; desc: string }[];
  footer?: string;
}

export interface CaseStudyMetric {
  val: string;
  lbl: string;
  desc: string;
}

export interface CaseStudy {
  id: string;
  tab: string;
  category: string;
  title: string;
  themeColor: string;
  image: string;
  heroDesc: string;
  challengeText: string;
  approachText: string;
  resultsText: string;
  kpis: CaseStudyKPI[];
  overview?: {
    subtitle?: string;
    summary?: string;
    highlights?: CaseStudyHighlight[];
  };
  architecture?: {
    subtitle?: string;
    features?: CaseStudyArchitectureFeature[];
  };
  problems?: {
    subtitle?: string;
    list?: CaseStudyProblem[];
  };
  engineering?: {
    subtitle?: string;
    challenge?: CaseStudyChallengeSolution;
    solution?: CaseStudyChallengeSolution;
  };
  performance?: {
    subtitle?: string;
    metrics?: CaseStudyMetric[];
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = rawPortfolio as PortfolioProject[];
export const CASE_STUDIES: CaseStudy[] = rawCaseStudies as CaseStudy[];

export const CASE_STUDY_TABS = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "salesforce", label: "Salesforce" },
  { id: "power-bi", label: "Power BI" }
];

export const PORTFOLIO_DOMAINS = [
  { id: "all", label: "All Sectors" },
  { id: "finance", label: "Finance & Wealth" },
  { id: "healthcare", label: "Healthcare & Diagnostics" },
  { id: "ecommerce", label: "E-Commerce & Retail" },
  { id: "community", label: "Community & Sports" },
  { id: "workforce", label: "Workforce & Operations" },
  { id: "housing", label: "Real Estate & Housing" }
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.id === id);
}

export function getPortfolioProjectById(id: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.id === id);
}

