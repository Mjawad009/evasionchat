export interface FaqSchemaItem {
  question: string;
  answer: string;
}

export function faqPageJsonLd(items: FaqSchemaItem[]) {
  if (!Array.isArray(items)) {
    return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [] };
  }
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
