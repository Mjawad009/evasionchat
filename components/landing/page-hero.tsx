"use client";

import { useEffect, useState } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subheading?: string;
}

export function PageHero({ eyebrow, title, subheading }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 border-b border-foreground/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <span
          className={`inline-flex items-center gap-2 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
          {eyebrow}
        </span>

        <h1
          className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </h1>

        {subheading && (
          <p
            className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
