"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function Toast({ open, title, description, onClose }: { open: boolean; title: string; description?: string; onClose: () => void }) {
  React.useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 3200);
    return () => clearTimeout(t);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-4 z-[60] mx-auto flex max-w-xl justify-center px-4 transition",
        open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      )}
      aria-live="polite"
    >
      <div className="pointer-events-auto card w-full px-5 py-4 shadow-glow">
        <div className="text-sm font-semibold">{title}</div>
        {description ? <div className="mt-1 text-sm text-slate-300">{description}</div> : null}
      </div>
    </div>
  );
}
