"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Dot, MoveRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Contact } from "@/components/sections/Contact";
import { cn } from "@/lib/utils";

const pillars = [
  {
    key: "experience",
    label: "Experience Architecture",
    summary: "Flow-first design systems with cinematic polish and practical conversion intent.",
    details: ["Narrative wireframes", "Motion rules", "Accessibility rhythm"],
  },
  {
    key: "product",
    label: "Product Engineering",
    summary: "Fast, resilient delivery with design parity from first commit to launch.",
    details: ["Component contracts", "Performance budgets", "Instrumentation"],
  },
  {
    key: "growth",
    label: "Growth Loops",
    summary: "Experiment-ready funnels with measurable signals and iterative optimization.",
    details: ["Conversion analytics", "Experiment backlog", "CRM-ready events"],
  },
];

const projects = [
  {
    name: "Atlas Operations",
    impact: "-41% incident resolution time",
    brief: "Rebuilt a fragmented dashboard into a command-center experience with calmer density and clearer priority states.",
  },
  {
    name: "Helio Commerce",
    impact: "+32% qualified demo requests",
    brief: "Reframed the buyer journey around trust signals, proof rhythm, and progressive disclosure.",
  },
  {
    name: "Northstar Platform",
    impact: "2.2x faster feature shipping",
    brief: "Unified tokens, components, and release workflows for consistent interface quality across teams.",
  },
];

const faqs = [
  ["How custom is this approach?", "Every engagement is tailored to your business model, team velocity, and customer intent. We use systems, not templates."],
  ["Is the experience heavy to load?", "No. Motion is purposeful and lightweight, and we prioritize core web vitals, code-splitting, and responsive performance."],
  ["Can this scale across products?", "Yes. The system is designed as a reusable foundation with governance rules for multiple teams and verticals."],
] as const;

export default function Page() {
  const [activePillar, setActivePillar] = React.useState(pillars[0].key);
  const [activeProject, setActiveProject] = React.useState(0);
  const [openFaq, setOpenFaq] = React.useState(0);

  const currentPillar = pillars.find((x) => x.key === activePillar) ?? pillars[0];

  return (
    <>
      <section className="hero-shell relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <span className="eyebrow"><Sparkles size={14} /> Curated digital product experiences</span>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl">
                A complete visual and interaction overhaul built for <span className="text-gradient">clarity, confidence, and conversion.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 md:text-lg">
                Inspired by world-class editorial product design: refined typography, intentional motion, layered depth, and responsive behavior that feels premium without noise.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact"><Button variant="primary" size="lg">Start your redesign <ArrowRight size={17} /></Button></a>
                <a href="#work"><Button size="lg">See interaction concepts <MoveRight size={17} /></Button></a>
              </div>
            </div>
            <div className="glass-panel p-6 md:p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Design pulse</p>
              <div className="mt-4 grid gap-3">
                {[
                  ["Perceived performance", "Fluid transitions + meaningful skeleton states"],
                  ["Content hierarchy", "Magazine-like rhythm for scanning and action"],
                  ["Conversion intent", "Strategic CTA cadence with contextual proof"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-300">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow">Service matrix</span>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Interactive capabilities with clear depth.</h2>
          </div>
          <div className="glass-panel p-5 md:p-6">
            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <button
                  key={pillar.key}
                  onClick={() => setActivePillar(pillar.key)}
                  className={cn(
                    "focus-ring rounded-full border px-4 py-2 text-sm transition",
                    activePillar === pillar.key ? "border-white/40 bg-white/15 text-white" : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.07]"
                  )}
                >
                  {pillar.label}
                </button>
              ))}
            </div>
            <motion.div key={currentPillar.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
              <p className="text-xl font-medium text-white">{currentPillar.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
                {currentPillar.details.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-black/20 p-3">{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="work" className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Selected transformations</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Proof-led design outcomes.</h2>
            </div>
            <div className="text-sm text-slate-400">Use the cards to switch context.</div>
          </div>
          <div className="mt-7 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <div className="grid gap-3">
              {projects.map((project, idx) => (
                <button key={project.name} onClick={() => setActiveProject(idx)} className={cn("focus-ring rounded-2xl border p-4 text-left transition", idx === activeProject ? "border-sky-200/50 bg-sky-300/10" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06]")}>
                  <p className="font-medium text-white">{project.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{project.impact}</p>
                </button>
              ))}
            </div>
            <motion.article key={projects[activeProject].name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Case narrative</p>
              <p className="mt-4 text-2xl font-semibold text-white">{projects[activeProject].name}</p>
              <p className="mt-3 text-base text-slate-300">{projects[activeProject].brief}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <Dot size={20} /> {projects[activeProject].impact}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="container max-w-4xl">
          <span className="eyebrow">FAQ</span>
          <div className="mt-4 grid gap-3">
            {faqs.map(([question, answer], idx) => {
              const isOpen = idx === openFaq;
              return (
                <div key={question} className="glass-panel overflow-hidden">
                  <button className="focus-ring flex w-full items-center justify-between px-5 py-4 text-left" onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                    <span className="font-medium text-white">{question}</span>
                    <span className="text-sm text-slate-400">{isOpen ? "Close" : "Open"}</span>
                  </button>
                  <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <p className="overflow-hidden px-5 pb-5 text-slate-300">{answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
