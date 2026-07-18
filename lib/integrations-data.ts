import type { LucideIcon } from "lucide-react";
import { Globe, FileText, BookOpen, MessageCircle, Users, Bot, Settings, BarChart3, Search, Link2, Briefcase, Lock } from "lucide-react";

export interface IntegrationDetail {
  slug: string;
  icon: LucideIcon;
  name: string;
  value: string;
  description: string;
}

export const integrationDetails: IntegrationDetail[] = [
  {
    slug: "website",
    icon: Globe,
    name: "Website",
    value: "Train AI from your website",
    description: "Point it at your website and it reads your pages the way a visitor would — product pages, policies, FAQs — turning them into answers a chatbot can give instantly.",
  },
  {
    slug: "documents",
    icon: FileText,
    name: "Documents",
    value: "Learn from PDFs, Word, Excel & more",
    description: "Upload PDFs, Word documents, spreadsheets, or slide decks. No reformatting needed — it reads the content as-is and learns from it directly.",
  },
  {
    slug: "knowledge-base",
    icon: BookOpen,
    name: "Knowledge Base",
    value: "Centralize company knowledge",
    description: "Bring scattered internal docs, wikis, and FAQs into one place your chatbot can draw on — so the answer is consistent no matter who's asking.",
  },
  {
    slug: "customer-support",
    icon: MessageCircle,
    name: "Customer Support",
    value: "Answer customers 24/7",
    description: "Handle the repetitive questions instantly, day or night, and hand off to a human the moment a conversation needs one.",
  },
  {
    slug: "lead-generation",
    icon: Users,
    name: "Lead Generation",
    value: "Capture and qualify visitors",
    description: "Ask the right follow-up questions automatically, and pass along only the visitors worth your team's time.",
  },
  {
    slug: "business-automation",
    icon: Bot,
    name: "Business Automation",
    value: "Automate repetitive business tasks",
    description: "Let routine, repeatable questions and requests get handled automatically — freeing your team for the work that actually needs a person.",
  },
  {
    slug: "workflow-automation",
    icon: Settings,
    name: "Workflow Automation",
    value: "Trigger actions across your tools",
    description: "Use a conversation to kick off a next step elsewhere — no manual re-entry, no dropped handoffs.",
  },
  {
    slug: "business-analytics",
    icon: BarChart3,
    name: "Business Analytics",
    value: "Discover customer insights",
    description: "See exactly what your customers are asking, spot patterns, and find the gaps in your own documentation before customers do.",
  },
  {
    slug: "ai-search",
    icon: Search,
    name: "AI Search",
    value: "Find information instantly",
    description: "Skip the search bar entirely — ask a question in plain language and get the exact answer, not a list of pages to dig through.",
  },
  {
    slug: "business-integrations",
    icon: Link2,
    name: "Business Integrations",
    value: "Connect your existing software",
    description: "Fits alongside the tools you already use — no need to replace your CRM, help desk, or existing workflows.",
  },
  {
    slug: "team-productivity",
    icon: Briefcase,
    name: "Team Productivity",
    value: "Help employees find answers faster",
    description: "Point it at your internal documentation and let your own team ask it questions — cutting down time spent searching for answers that already exist somewhere.",
  },
  {
    slug: "enterprise-security",
    icon: Lock,
    name: "Enterprise Security",
    value: "Keep your business data protected",
    description: "Every document and conversation is encrypted and isolated to your business — never shared, never used to train anyone else's AI.",
  },
];

export function getIntegrationBySlug(slug: string) {
  return integrationDetails.find((i) => i.slug === slug);
}
