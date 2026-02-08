"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What makes this ‘enterprise-grade’?",
    a: "We build with measurable non-functional requirements: performance budgets, security defaults, accessibility, and a delivery process with predictable milestones and clean handovers.",
  },
  {
    q: "Can you match our brand and design system?",
    a: "Yes. We can implement your existing design system or create a lightweight system (tokens + components) tailored to your brand, keeping UX consistent across pages and apps.",
  },
  {
    q: "Do you handle hosting and deployment?",
    a: "Yes. We can deploy to Vercel or self-host (Docker). The project ships with repeatable build steps and environment separation for dev/staging/prod.",
  },
  {
    q: "How fast can we start?",
    a: "Typically within 7–14 days depending on scope. We can fast-track if assets and approvals are ready.",
  },
];

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-16">
      <div className="container">
        <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">FAQ</span></div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">Answers stakeholders ask.</h2>
        <p className="mt-3 max-w-3xl text-pretty text-base text-slate-300">
          Designed to reduce purchase friction and improve decision confidence.
        </p>

        <div className="mt-8 grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="card">
                <button
                  className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="text-sm font-semibold">{f.q}</div>
                  <ChevronDown className={cn("transition", isOpen ? "rotate-180 text-sky-200" : "text-slate-300")} size={18} />
                </button>
                <div className={cn("grid transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden px-6 pb-5">
                    <div className="text-sm text-slate-300">{f.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
