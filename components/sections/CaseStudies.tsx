"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, CirclePlay } from "lucide-react";

const items = [
  {
    title: "Operations command center",
    tag: "Observability",
    desc: "Unified metrics + alerts that reduce mean time to resolution.",
    bullets: ["Role-based views", "Live KPIs", "Audit trails"],
  },
  {
    title: "Procurement workflow engine",
    tag: "Automation",
    desc: "Automated approvals and notifications across multi-stage processes.",
    bullets: ["Rules engine", "Email/WhatsApp triggers", "Exportable reports"],
  },
  {
    title: "Multi-tenant platform suite",
    tag: "Scale",
    desc: "Tenant isolation with consistent config and billing hooks.",
    bullets: ["Tenant-aware data layer", "Per-tenant config", "Performance budgets"],
  },
];

export function CaseStudies() {
  const [idx, setIdx] = React.useState(0);
  const item = items[idx];

  React.useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="work" className="py-16">
      <div className="container">
        <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">WORK</span></div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">Transformation carousel.</h2>
        <p className="mt-3 max-w-3xl text-pretty text-base text-slate-300">
          Swipe through outcomes to inspect architecture decisions, UX patterns, and business impact.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.05fr_.95fr]">
          <div className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-lg font-extrabold">{item.title}</div>
                <div className="mt-1 text-sm text-slate-300">{item.desc}</div>
              </div>
              <span className="badge">{item.tag}</span>
            </div>

            <div className="hr my-5" />

            <ul className="grid gap-2 text-sm text-slate-300">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[7px] h-2 w-2 rounded-full bg-sky-300/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Button variant="secondary" onClick={() => setIdx((p) => (p - 1 + items.length) % items.length)}>
                <ChevronLeft size={18} /> Prev
              </Button>
              <Button variant="secondary" onClick={() => setIdx((p) => (p + 1) % items.length)}>
                Next <ChevronRight size={18} />
              </Button>
              <a className="ml-auto" href="#contact">
                <Button variant="primary">Build something like this</Button>
              </a>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-extrabold">Preview rail</div>
                <p className="mt-1 text-sm text-slate-300">Quickly jump across concepts.</p>
              </div>
              <CirclePlay size={18} className="text-sky-200" />
            </div>
            <div className="hr my-4" />
            <div className="grid gap-2">
              {items.map((x, i) => (
                <button
                  key={x.title}
                  onClick={() => setIdx(i)}
                  className={`focus-ring rounded-2xl border px-4 py-3 text-left transition ${
                    i === idx ? "border-sky-300/35 bg-white/[0.07]" : "border-white/10 bg-black/15 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{x.title}</div>
                      <div className="text-xs text-slate-400">{x.tag}</div>
                    </div>
                    <span className="kbd">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-5 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to card ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-sky-300" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
