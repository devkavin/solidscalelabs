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
      setMsg({ title: "Message sent", desc: "We’ll reply with a scoped roadmap and timeline." });
      setOpen(true);
    } catch {
      setMsg({ title: "Couldn’t send", desc: "Please retry or connect this form to your CRM provider." });
      setOpen(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20">
      <Toast open={open} title={msg.title} description={msg.desc} onClose={() => setOpen(false)} />
      <div className="container">
        <div className="glass-panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
            <div>
              <span className="eyebrow">Contact</span>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Ready for a world-class product presence?</h2>
              <p className="mt-4 text-slate-300">
                Tell us what you are building and where the current experience falls short. We will return a concise strategy with design and implementation phases.
              </p>
            </div>
            <form onSubmit={onSubmit} className="grid gap-3">
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Work email" required />
              <Input name="company" placeholder="Company" />
              <Textarea name="message" placeholder="Goals, constraints, and timeline" required />
              <Button type="submit" variant="primary" size="lg" disabled={loading}>
                {loading ? "Sending..." : "Request proposal"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
