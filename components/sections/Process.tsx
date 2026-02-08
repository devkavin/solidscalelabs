import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    phase: "Phase 1",
    title: "Discovery & positioning",
    desc: "Align the story, audience, and measurable goals before a pixel is shipped.",
    bullets: ["Brand + audience alignment", "Success metrics + acceptance criteria", "Roadmap with milestone confidence"],
  },
  {
    phase: "Phase 2",
    title: "Design & build sprint",
    desc: "Rapid, modular execution with polished interactions and clear weekly review cycles.",
    bullets: ["UI system + interaction patterns", "Implementation with quality gates", "Performance and accessibility checks"],
  },
  {
    phase: "Phase 3",
    title: "Launch & optimize",
    desc: "Deploy with observability and iterate using behavior and conversion insight.",
    bullets: ["Deployment runbook + observability", "Knowledge transfer + documentation", "Post-launch optimization backlog"],
  },
];

export function Process() {
  return (
    <section id="process" className="py-16">
      <div className="container">
        <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">PROCESS</span></div>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">A studio-style workflow with enterprise reliability.</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.phase} className="card p-6">
              <div className="text-[11px] font-mono tracking-[0.18em] text-slate-400">{s.phase.toUpperCase()}</div>
              <div className="mt-2 text-lg font-extrabold">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <div className="hr my-5" />
              <ul className="grid gap-2 text-sm text-slate-300">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3">
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
