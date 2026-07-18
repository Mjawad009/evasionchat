import type { LucideIcon } from "lucide-react";
import { ShoppingBag, Stethoscope, GraduationCap, Building2, Layers, Briefcase } from "lucide-react";

export interface SolutionData {
  slug: string;
  industry: string;
  icon: LucideIcon;
  headline: string;
  subheading: string;
  stats: { value: string; label: string }[];
  painPoints: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  quote: {
    text: string;
    role: string;
    company: string;
  };
}

export const solutions: SolutionData[] = [
  {
    slug: "e-commerce",
    industry: "E-commerce",
    icon: ShoppingBag,
    headline: "Answer every product question, at 2am and at 2pm.",
    subheading:
      "Train your chatbot on your product catalog, shipping policy, and return policy — so customers get an instant answer instead of abandoning their cart.",
    stats: [
      { value: "[Support Deflection Rate]", label: "of questions answered without a ticket" },
      { value: "24/7", label: "availability during sales and promotions" },
      { value: "[Setup Time]", label: "to train on your product catalog" },
    ],
    painPoints: [
      {
        title: "Cart abandonment from unanswered questions",
        description: "Shoppers who can't find sizing, shipping, or return info leave. Your chatbot answers before they click away.",
      },
      {
        title: "The same 10 questions, every single day",
        description: "Shipping times, return windows, and stock questions repeat endlessly. Let AI handle the repeats so your team handles the exceptions.",
      },
      {
        title: "Support that can't keep up with sales spikes",
        description: "During a promotion or holiday rush, conversation volume spikes — your chatbot doesn't need overtime pay to keep up.",
      },
    ],
    faqs: [
      {
        question: "Can it check live stock or order status?",
        answer: "It can answer from your product pages and policies out of the box. Checking live inventory or order status requires connecting it to your store platform — talk to us about your specific setup.",
      },
      {
        question: "Will it recommend products?",
        answer: "It can point customers toward relevant pages based on your product catalog, but it isn't a personalized recommendation engine — it's built to answer questions accurately, not upsell.",
      },
      {
        question: "Does it handle returns and refunds directly?",
        answer: "It can explain your return policy and next steps, and capture the request for your team — the actual refund still goes through your existing process.",
      },
    ],
    quote: {
      text: "Our chatbot now answers most of our repeat customer questions before a human ever sees them.",
      role: "Head of Support",
      company: "[Company Name]",
    },
  },
  {
    slug: "healthcare",
    industry: "Healthcare",
    icon: Stethoscope,
    headline: "Answer patient questions without compromising on privacy.",
    subheading:
      "Train your chatbot on your intake forms, office policies, and FAQs — so patients get clear answers while sensitive data stays fully protected.",
    stats: [
      { value: "0", label: "data incidents on record" },
      { value: "24/7", label: "patient questions answered" },
      { value: "[Setup Time]", label: "to train on your practice's FAQs" },
    ],
    painPoints: [
      {
        title: "Phone lines tied up with routine questions",
        description: "Office hours, insurance accepted, and appointment policies take up staff time that could go to patient care.",
      },
      {
        title: "Patients need answers outside office hours",
        description: "Questions don't stop at 5pm. A chatbot trained on your practice's own information can help around the clock.",
      },
      {
        title: "Data privacy isn't optional",
        description: "Every conversation and document stays encrypted and isolated — built for organizations where privacy is non-negotiable.",
      },
    ],
    faqs: [
      {
        question: "Is this HIPAA-compliant?",
        answer: "The platform is built with encryption and strict data isolation as defaults. Talk to us about your specific compliance requirements before deploying anything patient-facing.",
      },
      {
        question: "Can it discuss a patient's specific medical history?",
        answer: "No — it's designed to answer general questions from your practice's own FAQs and policies, not to access or discuss individual patient records.",
      },
      {
        question: "Can it schedule appointments?",
        answer: "It can explain how to book and hand off to your scheduling system or staff — direct booking depends on connecting it to your existing scheduling software.",
      },
    ],
    quote: {
      text: "As a healthcare provider, data privacy was non-negotiable. This gave us full confidence.",
      role: "Compliance Lead",
      company: "[Company Name]",
    },
  },
  {
    slug: "education",
    industry: "Education",
    icon: GraduationCap,
    headline: "Help students find answers without waiting on office hours.",
    subheading:
      "Train your chatbot on course catalogs, enrollment steps, and student handbooks — so students and parents get answers the moment they ask.",
    stats: [
      { value: "24/7", label: "answers for students and parents" },
      { value: "[Support Deflection Rate]", label: "of routine questions handled by AI" },
      { value: "[Setup Time]", label: "to train on your handbook" },
    ],
    painPoints: [
      {
        title: "Enrollment and admissions questions never stop",
        description: "Deadlines, requirements, and financial aid questions repeat every semester. Free up staff for the questions that need a human.",
      },
      {
        title: "Students expect instant answers",
        description: "A chatbot trained on your handbook and FAQs meets students where they already are — on your website, any time of day.",
      },
      {
        title: "One assistant, every department",
        description: "Run separate chatbots for admissions, financial aid, and student services — all managed from a single dashboard.",
      },
    ],
    faqs: [
      {
        question: "Can different departments have different chatbots?",
        answer: "Yes — admissions, financial aid, and student services can each have their own chatbot trained on their own materials, all managed from one dashboard.",
      },
      {
        question: "Can it help with financial aid questions?",
        answer: "It can answer general questions based on the financial aid documentation you provide. Anything involving a student's specific application should still go to your financial aid office.",
      },
      {
        question: "Does it work for higher ed and K-12 both?",
        answer: "Yes — it's trained on whatever content you provide, so it adapts to your institution's own materials and tone regardless of level.",
      },
    ],
    quote: {
      text: "Our chatbot answers customer questions instantly, even outside business hours.",
      role: "Operations Manager",
      company: "[Company Name]",
    },
  },
  {
    slug: "agencies",
    industry: "Agencies",
    icon: Building2,
    headline: "One platform, a chatbot for every client.",
    subheading:
      "Run a separate, fully trained AI chatbot for each client's website — managed, monitored, and billed from a single dashboard.",
    stats: [
      { value: "[Client Count]", label: "client chatbots managed from one dashboard" },
      { value: "[Setup Time]", label: "to launch a new client's chatbot" },
      { value: "Multi-tenant", label: "by design" },
    ],
    painPoints: [
      {
        title: "Managing support for multiple clients is chaos",
        description: "Juggling separate tools per client wastes hours. Manage every client's chatbot in one place instead.",
      },
      {
        title: "Clients want to see value fast",
        description: "Show a working, trained chatbot on a client's own site within minutes — a tangible result you can point to.",
      },
      {
        title: "White-label ready",
        description: "Offer AI chatbots as a service under your own agency's brand.",
      },
    ],
    faqs: [
      {
        question: "Can I white-label this for my clients?",
        answer: "White-labeling options exist on higher plans — talk to us about what your agency needs.",
      },
      {
        question: "How do I bill clients for their chatbot?",
        answer: "You manage and bill your clients however you already do — the platform gives you the dashboard to run every client's chatbot, not a billing system of its own.",
      },
      {
        question: "Can each client's chatbot look different?",
        answer: "Yes — each chatbot can be configured with its own tone, personality, and appearance to match the client's brand.",
      },
    ],
    quote: {
      text: "We run a separate chatbot for each of our clients — all from one dashboard.",
      role: "Founder",
      company: "[Agency Name]",
    },
  },
  {
    slug: "saas",
    industry: "SaaS Companies",
    icon: Layers,
    headline: "Cut support tickets without cutting corners.",
    subheading:
      "Train your chatbot on your documentation, changelog, and FAQs — so users get accurate answers without opening a ticket.",
    stats: [
      { value: "[Support Deflection Rate]", label: "of tickets deflected" },
      { value: "24/7", label: "documentation answered instantly" },
      { value: "[Setup Time]", label: "to train on your docs" },
    ],
    painPoints: [
      {
        title: "Support tickets clog up your team's day",
        description: "Most tickets are questions your docs already answer — if only customers could find them. Your chatbot finds it for them, instantly.",
      },
      {
        title: "Documentation nobody reads",
        description: "A chatbot trained on your docs surfaces the exact answer instead of asking users to search a help center.",
      },
      {
        title: "Onboarding new users at scale",
        description: "Answer setup and configuration questions the moment a new user has them — no waiting on a support queue.",
      },
    ],
    faqs: [
      {
        question: "Does it update automatically when we ship docs changes?",
        answer: "Yes — re-uploading or updating your connected documentation refreshes what the chatbot knows automatically.",
      },
      {
        question: "Can it help with account-specific issues?",
        answer: "It answers from your general documentation, not individual account data — account-specific issues still route to your support team.",
      },
      {
        question: "Does it integrate with our existing help desk?",
        answer: "It can hand off conversations that need a human with full context — specific help desk integrations depend on your setup, so it's worth a conversation.",
      },
    ],
    quote: {
      text: "Our chatbot now answers most of our repeat customer questions before a human ever sees them.",
      role: "Head of Support",
      company: "[Company Name]",
    },
  },
  {
    slug: "professional-services",
    industry: "Professional Services",
    icon: Briefcase,
    headline: "A knowledgeable first point of contact, every time.",
    subheading:
      "Train your chatbot on your service offerings, pricing structure, and FAQs — so prospective clients get clear answers before they ever call.",
    stats: [
      { value: "24/7", label: "answers for prospective clients" },
      { value: "[Lead Response Time]", label: "faster first response" },
      { value: "[Setup Time]", label: "to train on your services" },
    ],
    painPoints: [
      {
        title: "Prospective clients have the same questions",
        description: "Services offered, pricing structure, and process questions repeat with every new inquiry. Let AI answer them upfront.",
      },
      {
        title: "Leads go cold waiting for a callback",
        description: "A chatbot captures the inquiry and answers immediately, keeping the prospect engaged until your team can follow up.",
      },
      {
        title: "Your expertise, available on demand",
        description: "Give visitors instant, accurate answers drawn from your own service documentation — not generic guesses.",
      },
    ],
    faqs: [
      {
        question: "Can it quote pricing directly?",
        answer: "It can explain your pricing structure and typical ranges if you provide that content — for anything requiring a custom quote, it captures the inquiry for your team.",
      },
      {
        question: "Will it feel like it understands our specific services?",
        answer: "Yes — it's trained specifically on the service descriptions and FAQs you provide, so it answers in the context of what you actually offer.",
      },
      {
        question: "Can it book consultations?",
        answer: "It can guide visitors to your booking process and capture their details — direct calendar booking depends on connecting it to your scheduling tool.",
      },
    ],
    quote: {
      text: "We run a separate chatbot for each of our clients — all from one dashboard.",
      role: "Founder",
      company: "[Agency Name]",
    },
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
