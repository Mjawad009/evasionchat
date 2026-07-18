import dynamic from "next/dynamic";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";

// Below-the-fold sections are code-split into their own chunks via
// next/dynamic. SSR stays on (default) so the HTML content, SEO, and visual
// result are unchanged — this only changes how the JS is bundled/loaded,
// so the browser isn't forced to parse/execute one giant bundle up front.
const SocialProofSection = dynamic(() =>
  import("@/components/landing/social-proof-section").then((m) => m.SocialProofSection)
);
const FeaturesSection = dynamic(() =>
  import("@/components/landing/features-section").then((m) => m.FeaturesSection)
);
const HowItWorksSection = dynamic(() =>
  import("@/components/landing/how-it-works-section").then((m) => m.HowItWorksSection)
);
const InfrastructureSection = dynamic(() =>
  import("@/components/landing/infrastructure-section").then((m) => m.InfrastructureSection)
);
const MetricsSection = dynamic(() =>
  import("@/components/landing/metrics-section").then((m) => m.MetricsSection)
);
const IntegrationsSection = dynamic(() =>
  import("@/components/landing/integrations-section").then((m) => m.IntegrationsSection)
);
const SecuritySection = dynamic(() =>
  import("@/components/landing/security-section").then((m) => m.SecuritySection)
);
const DevelopersSection = dynamic(() =>
  import("@/components/landing/developers-section").then((m) => m.DevelopersSection)
);
const TestimonialsSection = dynamic(() =>
  import("@/components/landing/testimonials-section").then((m) => m.TestimonialsSection)
);
const PricingSection = dynamic(() =>
  import("@/components/landing/pricing-section").then((m) => m.PricingSection)
);
const CtaSection = dynamic(() =>
  import("@/components/landing/cta-section").then((m) => m.CtaSection)
);
const FooterSection = dynamic(() =>
  import("@/components/landing/footer-section").then((m) => m.FooterSection)
);

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <MetricsSection />
      <IntegrationsSection />
      <SecuritySection />
      <DevelopersSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
