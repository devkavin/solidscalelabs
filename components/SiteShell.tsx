import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#proof", label: "Outcomes" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-base-950/60 backdrop-blur-2xl">
        <div className="container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Solid Scale Labs" width={40} height={40} className="rounded-xl border border-white/15 bg-white/5 shadow-glow" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide">Solid Scale Labs</div>
              <div className="text-xs text-slate-300">Digital product engineering</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} className="badge transition hover:-translate-y-0.5 hover:bg-white/[0.08]" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <a href="#contact" className="hidden md:block">
            <Button variant="primary" size="md">
              Start a project <span className="kbd">↵</span>
            </Button>
          </a>
          <a href="#contact" className="md:hidden">
            <Button variant="primary" size="md">Contact</Button>
          </a>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-60" />
        <div className="pointer-events-none absolute inset-0 -z-10 scanlines" />
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="container py-12">
          <div className="hr mb-6" />
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-extrabold">Solid Scale Labs</div>
              <p className="mt-2 max-w-lg text-sm text-slate-300">
                We design high-performance digital systems with premium UX, measurable business impact, and reliable engineering execution.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
              <a href="#services" className="transition hover:text-sky-200">Services</a>
              <a href="#process" className="transition hover:text-sky-200">Process</a>
              <a href="#work" className="transition hover:text-sky-200">Case studies</a>
              <a href="#contact" className="transition hover:text-sky-200">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} Solid Scale Labs • Crafted with Next.js</div>
        </div>
      </footer>
    </>
  );
}
