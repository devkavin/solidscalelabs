"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { BriefcaseBusiness, Timer, TrendingUp } from "lucide-react";

function useCountUp(target: number, durationMs = 900) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return val;
}

export function Proof() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const kpis = [
    { icon: Timer, label: "Time-to-first-demo", value: inView ? "5–7 days" : "—" },
    { icon: TrendingUp, label: "Conversion UX", value: inView ? "Tuned" : "—" },
    { icon: BriefcaseBusiness, label: "Enterprise readiness", value: inView ? "Yes" : "—" },
  ];

  const metric1 = useCountUp(inView ? 99 : 0);
  const metric2 = useCountUp(inView ? 45 : 0);

  return (
    <section id="proof" className="py-16">
      <div className="container">
        <div className="card p-6 md:p-8" ref={ref}>
          <div className="grid gap-8 md:grid-cols-[1.05fr_.95fr] md:items-center">
            <div>
              <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">PROOF</span></div>
              <h3 className="mt-4 text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
                Designed to impress decision-makers — and deliver results.
              </h3>
              <p className="mt-3 max-w-2xl text-pretty text-base text-slate-300">
                The experience is intentionally built like an enterprise product: high-trust design, clean information architecture, and frictionless conversion.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {kpis.map((k) => (
                  <div key={k.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <k.icon size={18} className="text-sky-200" />
                    <div className="mt-2 text-[11px] font-mono tracking-[0.16em] text-slate-400">{k.label.toUpperCase()}</div>
                    <div className="mt-1 text-sm font-semibold">{k.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="text-sm font-semibold">Live metrics (demo)</div>
              <div className="mt-3 grid gap-3">
                <Metric label="UX Satisfaction Target" value={`${metric1}%`} />
                <Metric label="Avg. Delivery Cycle (days)" value={`${metric2}`} />
                <Metric label="Stakeholder Clarity" value="High" />
              </div>
              <div className="mt-4 text-xs text-slate-400">
                Replace these with your real KPI data once you have it (analytics, performance budgets, etc.).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <div className="text-sm text-slate-300">{label}</div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="text-sm font-semibold"
      >
        {value}
      </motion.div>
    </div>
  );
}
