import type { Metadata } from "next";
import { ContactClient, contactFaqs } from "./contact-client";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact & Book a Demo",
  description: "Tell us about your business and we'll show you a chatbot trained on your own website — no pressure, no sales script.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(contactFaqs)) }}
      />
      <ContactClient />
    </>
  );
}
