"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// TODO: Wire this up to your real email list provider (Mailchimp, Resend,
// Loops, etc.) — e.g. POST to an API route that forwards the address.
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="border border-foreground/10 rounded-2xl p-10 text-center">
      {submitted ? (
        <p className="text-muted-foreground">You&apos;re on the list — thanks for subscribing.</p>
      ) : (
        <>
          <h3 className="text-xl font-display mb-2">Get new posts in your inbox</h3>
          <p className="text-sm text-muted-foreground mb-6">No spam. Unsubscribe anytime.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1"
            />
            <Button type="submit" className="rounded-full shrink-0">
              Subscribe
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
