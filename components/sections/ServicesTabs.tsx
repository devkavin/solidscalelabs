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
    lead: "High-impact digital presence crafted for speed, storytelling, and conversion.",
    points: ["Visual language + design tokens", "Information architecture + UX flow", "SEO, CWV, accessibility-by-default"],
  },
  {
    key: "integrations",
    title: "Integrations & Automation",
    icon: PlugZap,
    lead: "Connected systems that remove operational drag and reveal real-time visibility.",
    points: ["Cross-platform APIs + sync", "Automated workflows + background jobs", "Role-specific dashboards"],
  },
  {
    key: "security",
    title: "Security & Hardening",
    icon: Shield,
    lead: "Practical hardening strategy aligned with enterprise governance requirements.",
    points: ["Auth + RBAC architecture", "OWASP threat review", "Audit logs + incident readiness"],
  },
  {
    key: "delivery",
    title: "Delivery & DevOps",
    icon: Rocket,
    lead: "Reliable release operations with predictable cadence and clean handovers.",
    points: ["Dockerized environments", "CI/CD and quality gates", "Monitoring, SLOs, and alerting"],
  },
] as const;

export function ServicesTabs() {
  const [active, setActive] = React.useState<(typeof tabs)[number]["key"]>("platform");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section id="services" className="py-16">
      <div className="container">
        <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">CAPABILITIES</span></div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Premium experience design, backed by production-grade delivery.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card p-5 md:p-6">
            <div className="grid gap-2">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={cn(
                    "focus-ring flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition",
                    active === t.key ? "border-sky-300/35 bg-white/[0.09]" : "border-white/10 bg-black/20 hover:bg-white/[0.06]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("grid h-9 w-9 place-items-center rounded-xl border", active === t.key ? "border-sky-300/35 bg-sky-400/15" : "border-white/10 bg-white/5")}>
                      <t.icon size={18} className={active === t.key ? "text-sky-200" : "text-slate-200"} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="text-xs text-slate-400">Tap to inspect offering</div>
                    </div>
                  </div>
                  <span className="kbd">↔</span>
                </button>
              ))}
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
                  <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-gradient-to-r from-sky-400/20 to-violet-500/20">
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
                    <li key={p} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3">
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
