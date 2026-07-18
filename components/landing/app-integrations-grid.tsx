"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { appIntegrations } from "@/lib/app-integrations-data";

export function AppIntegrationsGrid() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return appIntegrations;
    return appIntegrations.filter(
      (app) => app.name.toLowerCase().includes(q) || app.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <div className="relative max-w-sm mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search apps..."
          className="pl-11 rounded-full"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground mb-2">Don&apos;t see it in the list?</p>
          <p className="text-sm text-muted-foreground">
            If it has an API, we can very likely still connect it —{" "}
            <Link href="/contact" className="underline underline-offset-4 hover:text-foreground">
              just ask
            </Link>
            .
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filtered.map((app) => (
            <div
              key={app.name}
              className="group flex flex-col items-center justify-center gap-3 aspect-square border border-foreground/10 rounded-xl p-4 text-center transition-colors hover:border-foreground/30 hover:bg-foreground/[0.02]"
            >
              <div className="w-10 h-10 rounded-full bg-foreground/[0.06] flex items-center justify-center transition-colors group-hover:bg-[#eca8d6]/15">
                <app.icon className="w-4 h-4 text-muted-foreground group-hover:text-[#eca8d6] transition-colors" />
              </div>
              <span className="text-xs font-medium leading-tight">{app.name}</span>
            </div>
          ))}

          {/* Closing tile for the long tail — the honest, defensible number */}
          <Link
            href="/contact"
            className="group flex flex-col items-center justify-center gap-3 aspect-square rounded-xl p-4 text-center bg-foreground/[0.04] hover:bg-foreground/[0.07] transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#eca8d6]/15 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#eca8d6]" />
            </div>
            <span className="text-xs font-medium leading-tight">
              +1,000 more
              <span className="block text-muted-foreground font-normal mt-0.5 inline-flex items-center gap-1">
                via automation <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
