import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    phase: "Phase 1",
    title: "Discovery & scope",
    desc: "We align on outcomes, constraints, success metrics, and acceptance criteria.",
    bullets: ["Functional + non-functional requirements", "Timeline + milestones", "Costed proposal"],
  },
  {
    phase: "Phase 2",
    title: "Build & iterate",
    desc: "Modular delivery with weekly demos, testing, and predictable progress.",
    bullets: ["Design system + components", "CI quality gates", "Performance budgets"],
  },
  {
    phase: "Phase 3",
    title: "Launch & scale",
    desc: "Clean handover, monitoring, and a roadmap that supports scale.",
    bullets: ["Observability + alerting", "Docs + training", "Roadmap + backlog"],
  },
];

export function Process() {
  return (
    <section id="process" className="py-16">
      <div className="container">
        <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">PROCESS</span></div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">A delivery process executives trust.</h2>
        <p className="mt-3 max-w-3xl text-pretty text-base text-slate-300">
          You get predictable milestones, clear scope control, and production-grade engineering. No surprises. No messy handovers.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.phase} className="card p-6">
              <div className="text-[11px] font-mono tracking-[0.18em] text-slate-400">{s.phase.toUpperCase()}</div>
              <div className="mt-2 text-lg font-extrabold">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <div className="hr my-5" />
              <ul className="grid gap-2 text-sm text-slate-300">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-[2px] text-sky-200" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
