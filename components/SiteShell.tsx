import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-base-950/60 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Solid Scale Labs" width={40} height={40} className="rounded-xl border border-white/10 bg-white/5 shadow-glow" />
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide">Solid Scale Labs</div>
              <div className="text-xs text-slate-300">Enterprise Solutions Provider</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            <Link className="badge hover:bg-white/[0.06]" href="#services">Services</Link>
            <Link className="badge hover:bg-white/[0.06]" href="#proof">Proof</Link>
            <Link className="badge hover:bg-white/[0.06]" href="#process">Process</Link>
            <Link className="badge hover:bg-white/[0.06]" href="#faq">FAQ</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a className="hidden md:inline-flex" href="#contact">
              <Button variant="primary" size="md">
                Get a proposal <span className="kbd">↵</span>
              </Button>
            </a>
            <a className="md:hidden" href="#contact">
              <Button variant="primary" size="md">Contact</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-60" />
        <div className="pointer-events-none absolute inset-0 -z-10 scanlines" />
        {children}
      </main>

      <footer className="border-t border-white/10">
        <div className="container py-10">
          <div className="hr mb-6" />
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="text-sm font-extrabold">Solid Scale Labs</div>
              <p className="mt-1 max-w-md text-sm text-slate-300">
                Engineering calm systems that scale — clean architecture, secure defaults, and production-grade delivery.
              </p>
            </div>
            <div className="text-xs text-slate-400">© {new Date().getFullYear()} Solid Scale Labs • Built with Next.js</div>
          </div>
        </div>
      </footer>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            window.addEventListener('keydown', function(e){
              if(e.key !== 'Enter') return;
              var el = document.activeElement;
              if(!el) return;
              var tag = (el.tagName||'').toLowerCase();
              if(tag === 'input' || tag === 'textarea') return;
              var target = document.querySelector('#contact');
              if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
            });
          })();
        `,
        }}
      />
    </>
  );
}
