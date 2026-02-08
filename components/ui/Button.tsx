import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "secondary", size = "md", ...props }: Props) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full border transition will-change-transform active:translate-y-[1px] disabled:opacity-60 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary:
      "border-white/10 bg-gradient-to-r from-sky-400 to-violet-500 text-slate-950 font-semibold shadow-[0_18px_60px_rgba(56,189,248,.12)] hover:opacity-95",
    secondary:
      "border-white/12 bg-white/[0.06] text-slate-100 hover:bg-white/[0.09]",
    ghost: "border-white/10 bg-transparent hover:bg-white/[0.06]",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-11 px-6 text-base",
  };
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
