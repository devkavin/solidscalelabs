"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Gem, HelpCircle, Home, Mail, Sparkles } from "lucide-react";

const navLinks = [
  { href: "#top", label: "Overview", icon: Home },
  { href: "#carousel", label: "Solutions", icon: Compass },
  { href: "#tiles", label: "Capabilities", icon: Gem },
  { href: "#faq", label: "FAQ", icon: HelpCircle },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [activeLink, setActiveLink] = React.useState(navLinks[0].href);
  const [railOpen, setRailOpen] = React.useState(false);

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
      <motion.aside
        initial={{ x: 26, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="orbital-rail" data-open={railOpen}
        aria-label="Experience navigation"
      >
        <div className="flex w-full items-center justify-between gap-2 md:w-auto md:flex-col md:items-stretch">
          <Link href="/" className="rail-home focus-ring" aria-label="Back to top">
            <Image src="/logo.png" alt="Solid Scale Labs" width={30} height={30} className="rounded-lg border border-white/20 bg-white/10" />
            {railOpen && (
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide text-white">Solid Scale Labs</div>
                <div className="text-[11px] text-slate-400">Interactive studio</div>
              </div>
            )}
          </Link>
          <button onClick={() => setRailOpen((prev) => !prev)} className="icon-btn focus-ring h-9 w-9" aria-label="Toggle nav labels">
            <Sparkles size={15} />
          </button>
        </div>

        <div className="mt-0 flex min-w-0 flex-1 items-center gap-1 overflow-x-auto pl-1 md:mt-1 md:grid md:w-full md:flex-none md:overflow-visible md:pl-0">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <a key={link.href} href={link.href} className="focus-ring rail-link" aria-current={isActive ? "page" : undefined}>
                <link.icon size={16} className={isActive ? "text-white" : "text-slate-300"} />
                {railOpen && <span className="hidden md:inline">{link.label}</span>}
                {isActive && <motion.span layoutId="rail-active" className="rail-active" />}
              </a>
            );
          })}
        </div>
      </motion.aside>

      <main>{children}</main>

      <footer className="border-t border-white/10 bg-black/25 pb-12">
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
