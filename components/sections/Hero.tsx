"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Sparkles, Gauge } from "lucide-react";

const bullets = [
  { icon: Sparkles, label: "Narrative-first UI direction" },
  { icon: ShieldCheck, label: "Enterprise trust built in" },
  { icon: Gauge, label: "Web-vitals obsessed execution" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-14 md:pt-20">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

      <div className="container grid items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-10">
        <div>
          <div className="badge">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] tracking-[0.2em]">AWWWARDS-INSPIRED PREMIUM EXPERIENCE</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl"
          >
            Digital products that feel <span className="showcase-text">cinematic</span> and convert like a machine.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 max-w-2xl text-pretty text-base text-slate-300 md:text-lg"
          >
            We elevated this experience with bold visual hierarchy, layered depth, immersive gradients, and a conversion-driven layout system inspired by top-tier creative studios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a href="#contact"><Button variant="primary" size="lg">Request proposal <ArrowRight size={18} /></Button></a>
            <a href="#work"><Button variant="secondary" size="lg">View transformations</Button></a>
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-2">
            {bullets.map((b) => (
              <span key={b.label} className="badge">
                <b.icon size={14} className="text-sky-300" />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="card p-5 md:p-6"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-2 shadow-glow">
              <Image src="/logo.png" alt="Solid Scale Labs" width={64} height={64} className="rounded-xl" />
            </div>
            <div>
              <div className="text-sm font-extrabold">Experience systems</div>
              <div className="mt-1 text-sm text-slate-300">Brand emotion + product clarity + conversion intent</div>
            </div>
          </div>

          <div className="hr my-5" />

          <div className="grid gap-3 sm:grid-cols-2">
            <MiniStat label="Visual language" value="Editorial + high contrast" />
            <MiniStat label="Motion behavior" value="Subtle, confident, purposeful" />
            <MiniStat label="Architecture" value="Sectional + modular" />
            <MiniStat label="Conversion UX" value="Narrative CTA placement" />
          </div>

          <div className="hr my-5" />

          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <div className="text-sm font-semibold">Interface rhythm preview</div>
            <div className="mt-3 grid gap-2">
              <div className="h-10 rounded-xl border border-white/15 bg-gradient-to-r from-sky-400/25 to-violet-500/25 transition hover:from-sky-400/40 hover:to-violet-500/40" />
              <div className="h-10 rounded-xl border border-white/15 bg-gradient-to-r from-white/10 to-white/0 transition hover:from-white/20 hover:to-white/5" />
              <div className="h-10 rounded-xl border border-white/15 bg-gradient-to-r from-emerald-400/15 to-sky-400/15 transition hover:from-emerald-400/30 hover:to-sky-400/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]">
      <div className="text-[11px] font-mono tracking-[0.16em] text-slate-400">{label.toUpperCase()}</div>
      <div className="mt-1 text-sm font-semibold text-slate-100">{value}</div>
    </div>
  );
}
