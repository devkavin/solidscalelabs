"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Gem, Mail } from "lucide-react";

const navLinks = [
  { href: "#carousel", label: "Carousel", icon: Compass },
  { href: "#tiles", label: "Tiles", icon: Gem },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [activeLink, setActiveLink] = React.useState(navLinks[0].href);

  React.useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveLink(`#${visible.target.id}`);
        }
      },
      { threshold: [0.3, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-brand">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Solid Scale Labs" width={38} height={38} className="rounded-xl border border-white/20 bg-white/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">Solid Scale Labs</div>
            <div className="text-xs text-slate-400">Interactive experience studio</div>
          </div>
        </Link>
      </header>

      <motion.nav
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="floating-dock"
        aria-label="Primary"
      >
        {navLinks.map((link) => {
          const isActive = activeLink === link.href;

          return (
            <a key={link.href} href={link.href} className="focus-ring dock-item" aria-current={isActive ? "page" : undefined}>
              <link.icon size={16} className={isActive ? "text-white" : "text-slate-300"} />
              <span>{link.label}</span>
              {isActive && <motion.span layoutId="dock-pill" className="dock-pill" />}
            </a>
          );
        })}
      </motion.nav>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-black/25 pb-28 md:pb-12">
        <div className="container py-10 text-sm text-slate-400">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Solid Scale Labs</p>
            <p>Designed for confident decisions and measurable growth.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
