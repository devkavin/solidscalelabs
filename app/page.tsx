"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, MousePointer2, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Contact } from "@/components/sections/Contact";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    title: "Quantum Commerce Grid",
    tag: "Retail Platform",
    description: "A conversion-focused storefront architecture with immersive storytelling and lightning-fast navigation.",
  },
  {
    title: "Orbit Operations Hub",
    tag: "B2B SaaS",
    description: "Complex enterprise workflows transformed into a clear control surface with guided user momentum.",
  },
  {
    title: "Nova Launch Console",
    tag: "Product Marketing",
    description: "A futuristic launch experience combining interactive brand moments with measurable demand generation.",
  },
  {
    title: "Pulse Care Network",
    tag: "Digital Platform",
    description: "Trust-first design language and onboarding flows engineered for retention, accessibility, and scale.",
  },
];

const tiles = [
  {
    title: "Narrative architecture",
    body: "Every section moves the visitor from curiosity to confidence with content, hierarchy, and interaction cues.",
  },
  {
    title: "Signal-first motion",
    body: "Animation emphasizes intent, focus, and outcomes instead of distraction-heavy decorative effects.",
  },
  {
    title: "Adaptive visual systems",
    body: "A futuristic component language flexes across devices while preserving consistency and readability.",
  },
  {
    title: "Conversion pathways",
    body: "Key calls-to-action are sequenced through the journey so commercial intent appears at the right moments.",
  },
  {
    title: "Performance discipline",
    body: "Visual richness is balanced with fast loading, healthy Core Web Vitals, and practical implementation patterns.",
  },
  {
    title: "Scalable experience stack",
    body: "The interface is engineered as a modular system your internal team can extend with confidence.",
  },
];

const stats = [
  ["+52%", "Average engagement increase"],
  ["41%", "Faster task completion"],
  ["3.1x", "Higher qualified lead actions"],
] as const;

const modes = [
  { key: "neon", label: "Neon Pulse", accent: "#8eb2ff" },
  { key: "violet", label: "Violet Flux", accent: "#cf97ff" },
  { key: "aurora", label: "Aurora Blend", accent: "#89ffe0" },
] as const;

const faqs = [
  {
    q: "How fast can we launch a redesigned experience?",
    a: "Most projects start with a 2-week strategy and prototype sprint, followed by phased delivery so value ships early while the full platform evolves.",
  },
  {
    q: "Can this work with our existing CMS and backend stack?",
    a: "Yes. We design around your current architecture first, then propose only the integrations or upgrades that improve reliability and velocity.",
  },
  {
    q: "What makes your approach ‘futuristic’ but still practical?",
    a: "We combine cinematic motion, interactive storytelling, and modern visual language with strict accessibility, performance, and governance standards.",
  },
  {
    q: "How do you prove business impact after launch?",
    a: "We define measurable KPIs up front, instrument the funnel, and review post-launch analytics to prioritize the next set of conversion wins.",
  },
];

export default function Page() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [spotlight, setSpotlight] = React.useState({ x: 50, y: 50 });
  const [activeTile, setActiveTile] = React.useState(0);
  const [mode, setMode] = React.useState<(typeof modes)[number]>(modes[0]);
  const [intensity, setIntensity] = React.useState(62);
  const [velocity, setVelocity] = React.useState(48);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.15 });

  const floatY = useTransform(smoothProgress, [0, 1], [0, -180]);
  const floatRotate = useTransform(smoothProgress, [0, 1], [0, 22]);
  const orbX = useTransform(smoothProgress, [0, 1], [-80, 120]);
  const barScale = useTransform(smoothProgress, [0, 1], [0.12, 1]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4400);

    return () => clearInterval(timer);
  }, []);

  const moveSlide = (direction: "next" | "prev") => {
    setActiveSlide((prev) => {
      if (direction === "next") return (prev + 1) % carouselItems.length;
      return (prev - 1 + carouselItems.length) % carouselItems.length;
    });
  };

  return (
    <>
      <motion.div className="scroll-meter" style={{ scaleX: barScale }} />

      <section id="top" className="relative overflow-hidden pb-20 pt-20 md:pt-20">
        <motion.div style={{ y: floatY, rotate: floatRotate }} className="shape shape-a" />
        <motion.div style={{ x: orbX }} className="shape shape-b" />
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> Future-ready digital systems</span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.9] tracking-tight text-white md:text-8xl">
              Build a
              <span className="block text-gradient">next-gen web presence</span>
              designed for trust, speed, and growth.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 md:text-lg">
              Solid Scale Labs helps ambitious teams launch high-performance websites and product experiences that feel futuristic while staying grounded in real business outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#carousel"><Button variant="primary" size="lg">Explore solutions <ArrowRight size={16} /></Button></a>
              <a href="#tiles"><Button size="lg">View capabilities</Button></a>
            </div>
          </div>

          <div
            className="art-card"
            onMouseMove={(event) => {
              const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width) * 100;
              const y = ((event.clientY - rect.top) / rect.height) * 100;
              setSpotlight({ x, y });
            }}
          >
            <div className="art-card__glow" style={{ background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(125,163,255,.32), rgba(131,84,255,.05) 34%, rgba(0,0,0,0) 72%)` }} />
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Capability matrix</p>
            <div className="mt-5 grid gap-3">
              {tiles.slice(0, 3).map((item, idx) => (
                <button
                  key={item.title}
                  onMouseEnter={() => setActiveTile(idx)}
                  className={cn("tile-chip", activeTile === idx ? "tile-chip--active" : "")}
                >
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-300">{item.body}</p>
                </button>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Outcome focus</p>
              <p className="mt-2 text-sm text-slate-200">Position your brand as category-leading while reducing friction from first impression to action.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="carousel" className="py-16 md:py-20">
        <div className="container">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="eyebrow">Showcase</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">Use-case blueprints for high-growth teams.</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => moveSlide("prev")} className="icon-btn focus-ring" aria-label="Previous slide"><ChevronLeft size={17} /></button>
              <button onClick={() => moveSlide("next")} className="icon-btn focus-ring" aria-label="Next slide"><ChevronRight size={17} /></button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#070d1d]/70 p-2 md:p-3">
            <motion.div className="flex" animate={{ x: `-${activeSlide * 100}%` }} transition={{ type: "spring", stiffness: 90, damping: 24 }}>
              {carouselItems.map((item) => (
                <article key={item.title} className="min-w-full p-2 md:p-4">
                  <div className="carousel-tile">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.tag}</p>
                      <p className="mt-5 text-3xl font-semibold text-white md:text-5xl">{item.title}</p>
                      <p className="mt-3 max-w-xl text-slate-300">{item.description}</p>
                    </div>
                    <div className="carousel-shape" />
                  </div>
                </article>
              ))}
            </motion.div>
            <div className="mt-3 flex justify-center gap-2">
              {carouselItems.map((item, idx) => (
                <button key={item.title} aria-label={`Slide ${idx + 1}`} onClick={() => setActiveSlide(idx)} className={cn("h-2.5 rounded-full transition", idx === activeSlide ? "w-8 bg-sky-200" : "w-2.5 bg-white/30")} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[1.05fr_.95fr] md:p-8">
            <div>
              <span className="eyebrow"><WandSparkles size={14} /> Experience tuning deck</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Align the visual intensity to your market.</h2>
              <p className="mt-4 text-slate-300">Use this sandbox to evaluate how motion, energy, and tone should feel for your audience before implementation begins.</p>
              <div className="mt-6 grid gap-3">
                <label className="text-sm text-slate-300">Intensity: <span className="text-white">{intensity}%</span></label>
                <input type="range" min={20} max={100} value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} className="accent-sky-300" />
                <label className="text-sm text-slate-300">Velocity: <span className="text-white">{velocity}%</span></label>
                <input type="range" min={10} max={100} value={velocity} onChange={(e) => setVelocity(Number(e.target.value))} className="accent-violet-300" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {modes.map((entry) => (
                  <button
                    key={entry.key}
                    onClick={() => setMode(entry)}
                    className={cn(
                      "focus-ring rounded-full border px-4 py-2 text-sm transition",
                      mode.key === entry.key ? "border-white/40 bg-white/15 text-white" : "border-white/15 bg-white/[0.03] text-slate-300"
                    )}
                  >
                    {entry.label}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              className="relative overflow-hidden rounded-[1.3rem] border border-white/15 bg-[#090f22] p-5"
              animate={{
                background: `radial-gradient(circle at ${intensity}% ${100 - intensity / 2}%, ${mode.accent}55, rgba(12,16,32,0.95) 42%, rgba(7,10,20,1) 100%)`,
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: velocity * 1.2 }}
                transition={{ duration: 8 - velocity / 18, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
                className="mx-auto mt-4 h-48 w-48 rounded-[36%_64%_57%_43%/42%_36%_64%_58%] border border-white/25"
                style={{ background: `radial-gradient(circle at 25% 25%, ${mode.accent}, rgba(255,255,255,0.06) 60%)` }}
              />
              <div className="mt-6 grid gap-3">
                <p className="inline-flex items-center gap-2 text-sm text-slate-200"><MousePointer2 size={14} /> Mode: {mode.label}</p>
                <p className="text-sm text-slate-300">Current profile balances <span className="text-white">{intensity}% atmosphere</span> with <span className="text-white">{velocity}% motion speed</span>.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="tiles" className="relative py-16 md:py-20">
        <motion.div style={{ y: floatY }} className="shape shape-c" />
        <div className="container">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">A modular framework for modern product storytelling.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tiles.map((tile, idx) => (
              <motion.button
                key={tile.title}
                onMouseEnter={() => setActiveTile(idx)}
                onFocus={() => setActiveTile(idx)}
                whileHover={{ y: -8, rotateX: 4, rotateY: idx % 2 ? -3 : 3 }}
                className={cn("focus-ring feature-tile", activeTile === idx ? "feature-tile--active" : "")}
              >
                <p className="text-lg font-semibold text-white">{tile.title}</p>
                <p className="mt-2 text-sm text-slate-300">{tile.body}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          {stats.map(([value, label], idx) => (
            <motion.div key={label} className="metric-tile" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.45, delay: idx * 0.06 }}>
              <p className="text-4xl font-semibold text-white md:text-5xl">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="container">
          <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[#0a1022]/90 via-[#11162e]/70 to-[#1b1233]/65 p-5 md:p-8">
            <span className="eyebrow">FAQ // Neural Briefing</span>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">Questions teams ask before shipping a future-ready platform.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">Clear answers on delivery, technical fit, and measurable impact so you can move from idea to execution with confidence.</p>
            <div className="mt-8 grid gap-3">
              {faqs.map((entry, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={entry.q} className="rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm">
                    <button
                      className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span className="text-sm font-semibold text-white md:text-base">{entry.q}</span>
                      <ChevronDown className={cn("transition", isOpen ? "rotate-180 text-sky-200" : "text-slate-300")} size={18} />
                    </button>
                    <div className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                      <div className="overflow-hidden px-5 pb-4 text-sm text-slate-300">{entry.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
