"use client";

import { useState } from "react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHero } from "@/components/landing/page-hero";
import { ChatWidgetMockup } from "@/components/landing/chat-widget-mockup";
import { FaqAccordion } from "@/components/landing/faq-accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Check } from "lucide-react";

export const contactFaqs = [
  {
    question: "Do I need any technical knowledge to get started?",
    answer: "No — most businesses get a chatbot trained and live without writing any code. Point it at your website or upload a few documents and it's ready.",
  },
  {
    question: "How long does setup actually take?",
    answer: "Most businesses have a working chatbot within minutes of connecting their content — training itself is fast, though refining tone and reviewing answers usually takes a bit longer.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "No long-term contract required — you can cancel anytime, and you can export your data if you do.",
  },
];

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Wire this up to your real backend / CRM / email service.
  // e.g. POST to an API route (app/api/contact/route.ts) that forwards
  // the lead to your CRM (HubSpot, Salesforce) or sends you an email.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />

      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s get your
            <br />
            <span className="text-muted-foreground">AI chatbot live.</span>
          </>
        }
        subheading="Tell us a bit about your business and we'll show you exactly how it would work — no pressure, no sales script."
      />

      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-10">
                  <div className="w-12 h-12 rounded-full bg-[#eca8d6]/15 flex items-center justify-center mb-6">
                    <Check className="w-5 h-5 text-[#eca8d6]" />
                  </div>
                  <h2 className="text-2xl font-display mb-3">Thanks — we&apos;ve got it.</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Someone from our team will reach out within one business day.
                    In the meantime, feel free to explore{" "}
                    <a href="/pricing" className="underline underline-offset-4 hover:text-foreground">
                      pricing
                    </a>{" "}
                    or{" "}
                    <a href="/features" className="underline underline-offset-4 hover:text-foreground">
                      what the platform can do
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input id="name" name="name" required placeholder="Jane Cooper" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" required placeholder="Acme Inc." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Your website</Label>
                    <Input id="website" name="website" placeholder="https://acme.com" />
                    <p className="text-xs text-muted-foreground">
                      Optional — helps us show you a relevant example during the call.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">What are you hoping to solve?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="e.g. We get the same 10 questions over and over on live chat and email..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group w-full sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Book a demo"}
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground font-mono">
                    No credit card. No obligation. Just a straight answer on fit.
                  </p>
                </form>
              )}
            </div>

            {/* Side panel */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-10">
                <div className="flex justify-center lg:justify-start">
                  <ChatWidgetMockup />
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      See a chatbot trained on your own website in the first 10 minutes of the call.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      No commitment — you decide after seeing it work on your own content.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#eca8d6] mt-1 shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Prefer to explore on your own first? Start a free trial instead — [Message Limit] conversations included.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-6">
            Before you reach out
          </span>
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
