export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  result: string;
  resultLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote: { text: string; role: string };
}

// PLACEHOLDER CASE STUDIES — replace with real, permissioned customer stories,
// names, companies, and metrics before publishing.
export const caseStudies: CaseStudy[] = [
  {
    slug: "company-a-ecommerce",
    company: "[Company Name]",
    industry: "E-commerce",
    result: "[Support Deflection Rate]",
    resultLabel: "of questions answered by AI",
    summary:
      "A growing online retailer trained its chatbot on its product catalog and shipping policy, cutting repeat support tickets and freeing up its team for complex cases.",
    challenge:
      "Support volume grew faster than the team could hire for it. Most tickets were the same handful of questions — shipping times, sizing, and return windows — repeated dozens of times a day across email and live chat.",
    solution:
      "The team trained a chatbot on their existing product pages, shipping policy, and return policy — no new documentation needed. It went live on the site within the same week, answering the routine questions immediately and handing off anything more complex to the support queue with full context attached.",
    outcome:
      "The team now spends most of its time on complex, judgment-based tickets instead of repeating the same answers. Response times for the questions that do reach a human dropped as well, since the queue is no longer clogged with routine requests.",
    quote: {
      text: "Our chatbot now answers most of our repeat customer questions before a human ever sees them.",
      role: "Head of Support",
    },
  },
  {
    slug: "company-b-healthcare",
    company: "[Company Name]",
    industry: "Healthcare",
    result: "0",
    resultLabel: "data incidents since launch",
    summary:
      "A multi-location healthcare provider deployed a chatbot trained on office policies and FAQs — answering routine patient questions while keeping data fully isolated and encrypted.",
    challenge:
      "Front-desk staff spent a significant part of each day answering the same questions about hours, insurance, and appointment policies — time that came directly out of time available for patients in the office.",
    solution:
      "The provider trained a chatbot on their office policies, accepted insurance list, and general FAQs, with strict requirements around data isolation and encryption given the sensitivity of the setting. The chatbot handles the general questions and clearly defers anything patient-specific to staff.",
    outcome:
      "Phone and front-desk volume from routine questions dropped, giving staff more time for in-person patient interactions, with data handling that met the organization's privacy requirements throughout.",
    quote: {
      text: "As a healthcare provider, data privacy was non-negotiable. This gave us full confidence.",
      role: "Compliance Lead",
    },
  },
  {
    slug: "agency-c-multi-client",
    company: "[Agency Name]",
    industry: "Agency",
    result: "[Client Count]",
    resultLabel: "client chatbots managed from one dashboard",
    summary:
      "A digital agency now offers AI chatbots as a service to its clients, deploying and managing every client's assistant from a single, centralized dashboard.",
    challenge:
      "Clients kept asking for a chatbot as part of their engagement, but standing up and managing a separate tool per client wasn't sustainable for a small team.",
    solution:
      "The agency adopted the platform's multi-tenant setup to train and deploy a separate chatbot for each client's own website and content, managing all of them from one dashboard rather than juggling separate logins and tools per client.",
    outcome:
      "The agency now offers chatbot deployment as a standard part of its service offering, with new client chatbots going live in a fraction of the time it previously took to scope and build a custom solution.",
    quote: {
      text: "We run a separate chatbot for each of our clients — all from one dashboard.",
      role: "Founder",
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
