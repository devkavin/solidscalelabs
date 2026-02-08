import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/Button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/75 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Solid Scale Labs" width={38} height={38} className="rounded-xl border border-white/20 bg-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Solid Scale Labs</div>
              <div className="text-xs text-slate-400">Experience engineering studio</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} className="focus-ring rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="#contact" className={buttonVariants({ variant: "primary", size: "md" })}>
            Book intro
          </Link>
        </div>
      </header>

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
