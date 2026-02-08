"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Sparkles, Gauge, Compass, Rocket } from "lucide-react";

const bullets = [
  { icon: Sparkles, label: "Narrative-first UI direction" },
  { icon: ShieldCheck, label: "Enterprise trust built in" },
  { icon: Gauge, label: "Web-vitals obsessed execution" },
];

const reel = [
  { title: "Product Launch Lab", note: "MVP + scale path in 5 weeks", icon: Rocket },
  { title: "UX Intelligence", note: "Heatmaps + conversion loops", icon: Compass },
  { title: "Premium Engineering", note: "Design system + reliable CI", icon: ShieldCheck },
];

export function Hero() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % reel.length), 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pb-12 pt-14 md:pt-20">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

      <div className="container grid items-center gap-8 md:grid-cols-[1.15fr_.85fr] md:gap-10">
        <div>
          <div className="badge">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-mono text-[11px] tracking-[0.2em]">INTERACTIVE EXPERIENCE STUDIO</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight md:text-7xl"
          >
            Build faster with a <span className="showcase-text">living product experience</span>, not static pages.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 max-w-2xl text-pretty text-base text-slate-300 md:text-lg"
          >
            We revamped the entire interface into an immersive, conversion-focused journey with responsive ambient visuals,
            richer interactions, and modular components designed for scale.
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

          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <div className="text-sm font-semibold">Live capabilities reel</div>
            <div className="mt-3 space-y-2">
              {reel.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setActive(i)}
                  className={`focus-ring flex w-full items-center justify-between rounded-xl border px-3 py-2 text-left transition ${
                    active === i ? "border-sky-300/35 bg-sky-400/10" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={15} className={active === i ? "text-sky-200" : "text-slate-300"} />
                    <div>
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-xs text-slate-400">{item.note}</div>
                    </div>
                  </div>
                  <span className="kbd">0{i + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
