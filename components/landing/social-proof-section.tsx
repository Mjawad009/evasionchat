"use client";

import { useEffect, useRef, useState } from "react";

const companies = [
  { name: "Microsoft", url: "https://www.microsoft.com" },
  { name: "Stripe", url: "https://stripe.com" },
  { name: "Shopify", url: "https://www.shopify.com" },
  { name: "Notion", url: "https://www.notion.so" },
  { name: "HubSpot", url: "https://www.hubspot.com" },
  { name: "Slack", url: "https://slack.com" },
];

export function SocialProofSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 lg:py-16 border-b border-foreground/10"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p
          className={`text-center text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Especially Built for Consultants and Survey Companies Like Yours
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-x-12 gap-y-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wide text-foreground/50 hover:text-foreground transition-colors"
            >
              {company.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
