"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Zap, Gauge } from "lucide-react";

const bullets = [
  { icon: Zap, label: "Fast delivery, zero chaos" },
  { icon: ShieldCheck, label: "Security-first defaults" },
  { icon: Gauge, label: "Performance budgets + observability" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      <div className="pointer-events-none absolute -top-36 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500/20 to-violet-500/20 blur-3xl" />
      <div className="container grid items-center gap-10 pb-10 md:grid-cols-[1.15fr_.85fr] md:pb-16">
        <div>
          <div className="badge">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] tracking-[0.18em]">SOLUTIONS • DELIVERY • SCALE</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mt-4 text-balance text-4xl font-extrabold leading-[1.03] tracking-tight md:text-6xl"
          >
            Your company should feel <span className="bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">unstoppable</span> online.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-4 max-w-2xl text-pretty text-base text-slate-300 md:text-lg"
          >
            Solid Scale Labs builds enterprise-grade websites, dashboards, integrations, and automation — with clean UX, measurable performance, and
            production-ready engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a href="#contact"><Button variant="primary" size="lg">Request a proposal <ArrowRight size={18} /></Button></a>
            <a href="#services"><Button variant="secondary" size="lg">See services</Button></a>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-2">
            {bullets.map((b) => (
              <span key={b.label} className="badge">
                <b.icon size={14} className="text-sky-300" />
                {b.label}
              </span>
            ))}
          </div>

          <div className="mt-6 text-xs text-slate-400">
            Typical engagement: <span className="font-mono text-slate-300">2–6 weeks</span> • Weekly demos • Clear handover
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="card p-5 md:p-6"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-glow">
              <Image src="/logo.png" alt="Solid Scale Labs" width={64} height={64} className="rounded-xl" />
            </div>
            <div>
              <div className="text-sm font-extrabold">Enterprise-grade delivery</div>
              <div className="mt-1 text-sm text-slate-300">Modern stack • secure defaults • scalable architecture</div>
            </div>
          </div>

          <div className="hr my-5" />

          <div className="grid gap-3 sm:grid-cols-2">
            <MiniStat label="Time-to-first-demo" value="5–7 days" />
            <MiniStat label="UX score target" value="A / Core Web Vitals" />
            <MiniStat label="Security posture" value="OWASP-ready" />
            <MiniStat label="Docs + handover" value="Included" />
          </div>

          <div className="hr my-5" />

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold">Interactive preview</div>
              <span className="kbd">Try hover</span>
            </div>
            <div className="mt-3 grid gap-2">
              <div className="h-10 rounded-xl border border-white/10 bg-gradient-to-r from-sky-400/20 to-violet-500/20 transition hover:from-sky-400/35 hover:to-violet-500/35" />
              <div className="h-10 rounded-xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 transition hover:from-white/10 hover:to-white/5" />
              <div className="h-10 rounded-xl border border-white/10 bg-gradient-to-r from-emerald-400/10 to-sky-400/10 transition hover:from-emerald-400/20 hover:to-sky-400/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.06]">
      <div className="text-[11px] font-mono tracking-[0.16em] text-slate-400">{label.toUpperCase()}</div>
      <div className="mt-1 text-sm font-semibold text-slate-100">{value}</div>
    </div>
  );
}
