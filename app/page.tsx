"use client";

import * as React from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Contact } from "@/components/sections/Contact";
import { cn } from "@/lib/utils";

const carouselItems = [
  { title: "Prismatic Commerce", tag: "E-commerce", description: "Sculptural storytelling with kinetic transitions and tactile product reveals." },
  { title: "Atlas Command", tag: "B2B SaaS", description: "Cinematic operations canvas with guided attention and progressive disclosure." },
  { title: "Nova Mobility", tag: "Product Launch", description: "Editorial motion rhythm blended with adaptive CTA sequencing." },
  { title: "Pulse Health", tag: "Platform", description: "Organic shape language and trust surfaces tuned for conversion." },
];

const tiles = [
  "Scroll choreography",
  "Pointer-reactive surfaces",
  "Fluid geometry",
  "Conversion rhythm",
  "Motion hierarchy",
  "Living layout",
  "Parallax depth fields",
  "Magnetic micro-interactions",
];

export default function Page() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [activeTile, setActiveTile] = React.useState(0);
  const [spotlight, setSpotlight] = React.useState({ x: 50, y: 50 });
  const [cursor, setCursor] = React.useState({ x: -200, y: -200 });

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.15 });
  const floatY = useTransform(smoothProgress, [0, 1], [0, -220]);
  const floatRotate = useTransform(smoothProgress, [0, 1], [0, 30]);
  const orbX = useTransform(smoothProgress, [0, 1], [-80, 160]);
  const barScale = useTransform(smoothProgress, [0, 1], [0.08, 1]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 200, damping: 26 });
  const smy = useSpring(my, { stiffness: 200, damping: 26 });

  React.useEffect(() => {
    const timer = setInterval(() => setActiveSlide((prev) => (prev + 1) % carouselItems.length), 4200);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
      mx.set(event.clientX - 180);
      my.set(event.clientY - 180);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const moveSlide = (direction: "next" | "prev") => {
    setActiveSlide((prev) => (direction === "next" ? (prev + 1) % carouselItems.length : (prev - 1 + carouselItems.length) % carouselItems.length));
  };

  return (
    <>
      <motion.div className="scroll-meter" style={{ scaleX: barScale }} />
      <motion.div className="cursor-aura" style={{ x: smx, y: smy }} />

      <section id="top" className="relative overflow-hidden pb-20 pt-16 md:pt-24">
        <motion.div style={{ y: floatY, rotate: floatRotate }} className="shape shape-a" />
        <motion.div style={{ x: orbX }} className="shape shape-b" />

        <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <span className="eyebrow"><Sparkles size={14} /> Hyper-interactive redesign</span>
            <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.9] tracking-tight text-white md:text-8xl">
              Navigation reimagined.
              <span className="block text-gradient">Interaction density turned to 11.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base text-slate-300 md:text-lg">
              No static top bar. No flat cards. This is now a living interface with kinetic tiles, pointer-reactive depth, magnetic motion, and scroll-driven choreography.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#tiles"><Button variant="primary" size="lg">Open tile system <ArrowRight size={16} /></Button></a>
              <a href="#carousel"><Button size="lg">See carousel</Button></a>
            </div>
          </div>

          <div
            className="art-card"
            onMouseMove={(event) => {
              const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
              setSpotlight({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
            }}
          >
            <div className="art-card__glow" style={{ background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(125,163,255,.34), rgba(165,97,255,.07) 34%, rgba(0,0,0,0) 72%)` }} />
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Realtime interaction field</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {tiles.slice(0, 4).map((tile, idx) => (
                <motion.button
                  key={tile}
                  onMouseEnter={() => setActiveTile(idx)}
                  onFocus={() => setActiveTile(idx)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={cn("focus-ring tile-chip", idx === activeTile && "tile-chip--active")}
                >
                  {tile}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="carousel" className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Featured carousel</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Velocity-based showcase transitions.</h2>
            </div>
            <div className="flex gap-2">
              <button className="focus-ring icon-btn" onClick={() => moveSlide("prev")} aria-label="Previous slide"><ChevronLeft size={16} /></button>
              <button className="focus-ring icon-btn" onClick={() => moveSlide("next")} aria-label="Next slide"><ChevronRight size={16} /></button>
            </div>
          </div>

          <div className="mt-7 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 md:p-5">
            <motion.div className="flex" animate={{ x: `-${activeSlide * 100}%` }} transition={{ type: "spring", stiffness: 115, damping: 20 }}>
              {carouselItems.map((item, idx) => (
                <article key={item.title} className="min-w-full p-2 md:p-4">
                  <motion.div className="carousel-tile" whileHover={{ scale: 1.01 }}>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{item.tag}</p>
                      <p className="mt-5 text-3xl font-semibold text-white md:text-5xl">{item.title}</p>
                      <p className="mt-3 max-w-xl text-slate-300">{item.description}</p>
                    </div>
                    <motion.div className="carousel-shape" animate={{ rotate: idx === activeSlide ? 8 : 0, scale: idx === activeSlide ? 1.06 : 1 }} transition={{ duration: 0.5 }} />
                  </motion.div>
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

      <section id="tiles" className="relative py-16 md:py-24">
        <motion.div style={{ y: floatY }} className="shape shape-c" />
        <div className="container">
          <span className="eyebrow">Interactive tile engine</span>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">Tap, hover, drag, and react.</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {tiles.map((tile, idx) => (
              <motion.button
                key={tile}
                drag
                dragElastic={0.2}
                dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                onMouseEnter={() => setActiveTile(idx)}
                onFocus={() => setActiveTile(idx)}
                whileHover={{ y: -10, rotate: idx % 2 ? 2 : -2 }}
                className={cn("focus-ring feature-tile", activeTile === idx && "feature-tile--active")}
              >
                <p className="text-lg font-semibold text-white">{tile}</p>
                <p className="mt-2 text-sm text-slate-300">High-response tile interaction with spring physics and adaptive emphasis.</p>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Live pointer telemetry</p>
            <p className="mt-3 text-2xl text-white">Cursor: {Math.round(cursor.x)}px / {Math.round(cursor.y)}px</p>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
