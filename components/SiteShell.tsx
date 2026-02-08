"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Gem, Mail, Home, CircleHelp } from "lucide-react";

const navLinks = [
  { href: "#top", label: "Top", icon: Home },
  { href: "#carousel", label: "Carousel", icon: Compass },
  { href: "#tiles", label: "Tiles", icon: Gem },
  { href: "#faq", label: "FAQ", icon: CircleHelp },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [activeLink, setActiveLink] = React.useState(navLinks[0].href);

  React.useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href)).filter(Boolean) as Element[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveLink(`#${visible.target.id}`);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="orbital-rail" aria-label="Primary">
        <Link href="/" className="rail-home focus-ring" aria-label="Home">
          <Image src="/logo.png" alt="Solid Scale Labs" width={24} height={24} className="rounded-md" />
        </Link>

        {navLinks.map((link) => {
          const isActive = activeLink === link.href;
          return (
            <a key={link.href} href={link.href} className="focus-ring rail-link" aria-current={isActive ? "page" : undefined}>
              <link.icon size={15} className={isActive ? "text-white" : "text-slate-300"} />
              <span className="rail-label">{link.label}</span>
              {isActive && <motion.span layoutId="rail-active" className="rail-active" />}
            </a>
          );
        })}
      </motion.nav>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-black/25">
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
