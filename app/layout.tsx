import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

// TODO: replace with your real production domain once deployed — this
// affects how OpenGraph images and canonical URLs resolve.
const SITE_URL = "https://example.com";
const SITE_NAME = "[Product Name]";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI Chatbot & Business Assistant`,
    template: `%s — ${SITE_NAME}`,
  },
  description: "Train an AI chatbot on your website, PDFs, and FAQs. Answer customers, capture leads, and save your team hours — 24/7.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — AI Chatbot & Business Assistant`,
    description: "Train an AI chatbot on your website, PDFs, and FAQs. Answer customers, capture leads, and save your team hours — 24/7.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — AI Chatbot & Business Assistant`,
    description: "Train an AI chatbot on your website, PDFs, and FAQs. Answer customers, capture leads, and save your team hours — 24/7.",
  },
}

// Organization + SoftwareApplication structured data, present on every page.
// This is what lets Google understand what the business/product actually is
// (and is a prerequisite for a lot of rich-result eligibility).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "AI chatbot trained on your website, PDFs, and FAQs — answers customers, captures leads, and works 24/7.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        {/*
          TODO: Mount your real chatbot widget here once it's built.
          e.g. <ChatbotWidget apiKey={...} /> — a fixed-position component
          (bottom-right corner) that calls your own chatbot API.
          This is the one spot that should render on every page, so the
          widget is available site-wide rather than per-section.
        */}
      </body>
    </html>
  )
}
