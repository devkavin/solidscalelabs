"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Contact } from "@/components/sections/Contact";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    title: "Prismatic Commerce",
    tag: "E-commerce",
    description: "Sculptural product storytelling with tactile transitions and velocity-based layout shifts.",
  },
  {
    title: "Atlas Command",
    tag: "B2B SaaS",
    description: "Data-heavy interface translated into a cinematic operations canvas with guided interaction rhythm.",
  },
  {
    title: "Nova Mobility",
    tag: "Product Launch",
    description: "Editorial hero choreography with kinetic typography and adaptive call-to-action rails.",
  },
  {
    title: "Pulse Health",
    tag: "Platform",
    description: "Organic shape language and trust layers built for conversion, retention, and accessibility.",
  },
];

const tiles = [
  {
    title: "Scroll choreography",
    body: "Layer speeds and reveal timing are tuned to create narrative flow rather than random animation noise.",
  },
  {
    title: "Pointer-reactive surfaces",
    body: "Tiles and hero surfaces react to cursor position with magnetic glow and parallax for tactile depth.",
  },
  {
    title: "Fluid geometry",
    body: "Soft brutalist corners and asymmetric blobs create a signature visual language across sections.",
  },
  {
    title: "Conversion rhythm",
    body: "CTA moments are spaced between kinetic sections to align emotion and intent during exploration.",
  },
  {
    title: "Motion hierarchy",
    body: "Primary actions get high-contrast motion cues while supporting content remains calm and readable.",
  },
  {
    title: "Living layout",
    body: "The grid shifts from magazine to cinematic proportions while preserving responsive behavior.",
  },
];

const stats = [
  ["+46%", "Average engagement lift"],
  ["38%", "Faster perceived navigation"],
  ["2.8x", "More CTA interactions"],
] as const;

export default function Page() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [spotlight, setSpotlight] = React.useState({ x: 50, y: 50 });
  const [activeTile, setActiveTile] = React.useState(0);
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

      <section className="relative overflow-hidden pb-20 pt-16 md:pt-20">
        <motion.div style={{ y: floatY, rotate: floatRotate }} className="shape shape-a" />
        <motion.div style={{ x: orbX }} className="shape shape-b" />
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> Artistic interaction redesign</span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.9] tracking-tight text-white md:text-8xl">
              A complete
              <span className="block text-gradient">Awwwards-style visual transformation</span>
              with scroll-reactive storytelling.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 md:text-lg">
              The interface now behaves like a living exhibition: tile systems, kinetic transitions, and experimental layout compositions that still prioritize clarity and conversion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#carousel"><Button variant="primary" size="lg">Explore carousel <ArrowRight size={16} /></Button></a>
              <a href="#tiles"><Button size="lg">Open tile lab</Button></a>
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
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Interactive DNA</p>
            <div className="mt-5 grid gap-3">
              {tiles.slice(0, 3).map((item, idx) => (
                <button
                  key={item.title}
                  onMouseEnter={() => setActiveTile(idx)}
                  onFocus={() => setActiveTile(idx)}
                  className={cn("tile-chip focus-ring", idx === activeTile ? "tile-chip--active" : "")}
                >
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.body}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="carousel" className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Featured carousel</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Showcase reel with fluid transitions.</h2>
            </div>
            <div className="flex gap-2">
              <button className="focus-ring icon-btn" onClick={() => moveSlide("prev")} aria-label="Previous slide"><ChevronLeft size={16} /></button>
              <button className="focus-ring icon-btn" onClick={() => moveSlide("next")} aria-label="Next slide"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="mt-7 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 md:p-5">
            <motion.div className="flex" animate={{ x: `-${activeSlide * 100}%` }} transition={{ type: "spring", stiffness: 110, damping: 20 }}>
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

      <section id="tiles" className="relative py-16 md:py-20">
        <motion.div style={{ y: floatY }} className="shape shape-c" />
        <div className="container">
          <span className="eyebrow">Interactive tiles</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">From card stack to kinetic tile system.</h2>
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

      <Contact />
    </>
  );
}
