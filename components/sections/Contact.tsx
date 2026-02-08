"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";

export function Contact() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [msg, setMsg] = React.useState<{ title: string; desc?: string }>({ title: "" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");

      (e.currentTarget as HTMLFormElement).reset();
      setMsg({ title: "Message sent", desc: "We’ll respond with a plan and next steps." });
      setOpen(true);
    } catch {
      setMsg({ title: "Couldn’t send", desc: "Try again, or wire this form to your email/CRM." });
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16">
      <Toast open={open} title={msg.title} description={msg.desc} onClose={() => setOpen(false)} />
      <div className="container">
        <div className="card p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.05fr_.95fr] md:items-start">
            <div>
              <div className="badge"><span className="font-mono text-[11px] tracking-[0.18em]">CONTACT</span></div>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight md:text-4xl">Make visitors ask: “Can you do this for us?”</h2>
              <p className="mt-3 max-w-2xl text-pretty text-base text-slate-300">
                Tell us what you’re building. We’ll reply with a practical plan, timeline, and options — optimized for your constraints.
              </p>

              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs font-mono tracking-[0.16em] text-slate-400">WHAT YOU GET</div>
                  <ul className="mt-2 grid gap-2">
                    <li>• Clear scope + deliverables</li>
                    <li>• UX-focused layout + components</li>
                    <li>• Production-ready project setup</li>
                    <li>• Deployment guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={onSubmit} className="grid gap-3">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Work email" required />
                <Input name="company" placeholder="Company (optional)" />
                <Textarea name="message" placeholder="What do you need built? Include timeline + constraints." required />
                <Button type="submit" variant="primary" size="lg" disabled={loading}>
                  {loading ? "Sending…" : "Send request"}
                </Button>
                <div className="text-xs text-slate-400">
                  This demo posts to <span className="font-mono">/api/contact</span>. Replace with your CRM/email service.
                </div>
              </form>

              <div className="hr my-6" />

              <div className="grid gap-2 text-sm text-slate-300">
                <div><span className="font-mono text-slate-400">Email:</span> hello@solidscalelabs.com</div>
                <div><span className="font-mono text-slate-400">Availability:</span> Weekdays • Remote-friendly</div>
                <div><span className="font-mono text-slate-400">Start:</span> Typically 7–14 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
