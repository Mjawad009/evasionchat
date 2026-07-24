"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const integrations = [
  { icon: "🌐", name: "Website", value: "Train AI from your website", slug: "website" },
  { icon: "📄", name: "Documents", value: "Learn from PDFs, Word, Excel & more", slug: "documents" },
  { icon: "📚", name: "Knowledge Base", value: "Centralize company knowledge", slug: "knowledge-base" },
  { icon: "💬", name: "Customer Support", value: "Answer customers 24/7", slug: "customer-support" },
  { icon: "👥", name: "Lead Generation", value: "Capture and qualify visitors", slug: "lead-generation" },
  { icon: "🤖", name: "Business Automation", value: "Automate repetitive business tasks", slug: "business-automation" },
  { icon: "⚙️", name: "Workflow Automation", value: "Trigger actions across your tools", slug: "workflow-automation" },
  { icon: "📊", name: "Business Analytics", value: "Discover customer insights", slug: "business-analytics" },
  { icon: "🔍", name: "AI Search", value: "Find information instantly", slug: "ai-search" },
  { icon: "🔗", name: "Business Integrations", value: "Connect your existing software", slug: "business-integrations" },
  { icon: "👨‍💼", name: "Team Productivity", value: "Help employees find answers faster", slug: "team-productivity" },
  { icon: "🔐", name: "Enterprise Security", value: "Keep your business data protected", slug: "enterprise-security" },
];

export function IntegrationsSection({ showHeader = true }: { showHeader?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
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
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden">

      {/* Header — centré verticalement sur l'image */}
      {showHeader && (
      <div className="relative z-10 pt-32 lg:pt-40 text-center">
        <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Fits right into how you already work
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          Plug into your
          <br />
          <span className="text-muted-foreground">existing stack.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          From your CRM to your help desk, your AI chatbot connects to the tools you already run your business on — no extra software to learn.
        </p>
      </div>
      )}

      {/* Full-width image */}
      <div className={`relative left-1/2 -translate-x-1/2 w-screen -mt-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/connection-KeJwWPQvn6l0a7C48tCARYtNEdC92H.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Integration grid — remonte sur l'image avec spacing mobile approprié */}
      <div className="relative z-10 mt-0 lg:-mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {integrations.map((integration, index) => (
            <Link
              key={integration.name}
              href={`/integrations/${integration.slug}`}
              className={`group relative overflow-hidden p-6 lg:p-8 border transition-all duration-500 block ${
                hoveredIndex === index
                  ? "border-foreground bg-foreground/[0.04] scale-[1.02]"
                  : "border-foreground/10 hover:border-foreground/30"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${index * 30 + 300}ms`,
              }}
              onMouseEnter={(e) => {
                setHoveredIndex(index);
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setMousePos(null);
              }}
            >
              {/* Cursor-following halo */}
              {hoveredIndex === index && mousePos && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                  style={{
                    background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                  }}
                />
              )}

              {/* Icon */}
              <div className={`w-10 h-10 mb-6 flex items-center justify-center text-2xl transition-transform duration-500 ${
                hoveredIndex === index ? "scale-110" : ""
              }`}>
                {integration.icon}
              </div>

              <span className="font-medium block mb-2">{integration.name}</span>
              <span className="text-sm text-muted-foreground leading-relaxed block">{integration.value}</span>

              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                <div className={`h-full bg-foreground transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 pb-32 lg:pb-40 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "500+", label: "Tools you can already use" },
              { value: "Top Notch Security", label: "Data is always protected" },
              { value: "Best Tools", label: "Always up to date" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            See all integrations
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
