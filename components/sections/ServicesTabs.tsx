"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Layers, PlugZap, Shield, Rocket } from "lucide-react";

const tabs = [
  {
    key: "platform",
    title: "Platform & Websites",
    icon: Layers,
    lead: "Modern enterprise web presence that converts, ranks, and performs.",
    points: ["Design system + components", "SEO + Core Web Vitals", "Analytics-ready, accessible UX"],
  },
  {
    key: "integrations",
    title: "Integrations & Automation",
    icon: PlugZap,
    lead: "Connect tools, remove manual work, improve visibility.",
    points: ["APIs + data sync", "Workflows + background jobs", "Dashboards + reporting"],
  },
  {
    key: "security",
    title: "Security & Hardening",
    icon: Shield,
    lead: "Practical security posture improvements that hold up under audits.",
    points: ["Auth/RBAC + least privilege", "OWASP-focused reviews", "Logging, monitoring, incident readiness"],
  },
  {
    key: "delivery",
    title: "Delivery & DevOps",
    icon: Rocket,
    lead: "Repeatable deployments, observability, and clean handovers.",
    points: ["Docker + environments", "CI/CD pipelines", "Health checks, metrics, alerting"],
  },
] as const;

export function ServicesTabs() {
  const [active, setActive] = React.useState<(typeof tabs)[number]["key"]>("platform");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">SERVICES</span></div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Built for leadership-level expectations.
        </h2>
        <p className="mt-3 max-w-3xl text-pretty text-base text-slate-300">
          This isn’t “a website.” It’s a system: polished UX, measurable performance, secure defaults, and a delivery process your stakeholders can trust.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card p-5 md:p-6">
            <div className="grid gap-2">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={cn(
                    "focus-ring flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition",
                    active === t.key ? "border-sky-300/35 bg-white/[0.07]" : "border-white/10 bg-black/15 hover:bg-white/[0.05]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("grid h-9 w-9 place-items-center rounded-xl border", active === t.key ? "border-sky-300/35 bg-sky-400/10" : "border-white/10 bg-white/5")}>
                      <t.icon size={18} className={active === t.key ? "text-sky-200" : "text-slate-200"} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="text-xs text-slate-400">Click to view details</div>
                    </div>
                  </div>
                  <span className="kbd">↔</span>
                </button>
              ))}
            </div>

            <div className="hr my-5" />

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="badge">App Router</span>
              <span className="badge">TypeScript</span>
              <span className="badge">Tailwind</span>
              <span className="badge">Animations</span>
              <span className="badge">A11y</span>
            </div>
          </div>

          <div className="card p-5 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-gradient-to-r from-sky-400/15 to-violet-500/15">
                    <current.icon size={18} className="text-sky-200" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold">{current.title}</div>
                    <div className="text-sm text-slate-300">{current.lead}</div>
                  </div>
                </div>

                <div className="hr my-5" />

                <ul className="grid gap-2 text-sm text-slate-200">
                  {current.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-[7px] h-2 w-2 rounded-full bg-sky-300/80" />
                      <span className="text-slate-300">{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#contact"><Button variant="primary">Get a proposal</Button></a>
                  <a href="#process"><Button>See process</Button></a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
