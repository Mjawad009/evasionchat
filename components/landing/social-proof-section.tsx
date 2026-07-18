"use client";

import { useEffect, useRef, useState } from "react";

// TODO: Replace these placeholder logo slots with real customer logos once
// you have permission to display them. Keep the same grid — just swap the
// placeholder <div> for an <img src="/logos/company.svg" ... /> per slot.
// Until then, this renders as neutral placeholder marks rather than fabricated names.
const logoSlots = new Array(6).fill(null);

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
    <section ref={sectionRef} className="relative py-12 lg:py-16 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className={`text-center text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          Built for businesses across e-commerce, healthcare, education, and professional services
        </p>

        <div className={`flex flex-wrap items-center justify-center gap-x-12 gap-y-6 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {logoSlots.map((_, i) => (
            // TODO: swap this placeholder block for <img src="/logos/company-x.svg" alt="Company X" className="h-6 w-auto opacity-50 hover:opacity-100 transition-opacity" />
            <div
              key={i}
              className="h-6 w-28 rounded bg-foreground/10"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
