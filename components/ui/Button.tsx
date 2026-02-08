import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({ className, variant = "secondary", size = "md", ...props }: Props) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}

export function buttonVariants({
  variant = "secondary",
  size = "md",
  className,
}: {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full border font-medium transition duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60";
  const variants: Record<string, string> = {
    primary:
      "border-sky-100/20 bg-gradient-to-r from-sky-200 via-blue-300 to-violet-300 text-slate-900 shadow-[0_14px_36px_rgba(113,158,255,.28)] hover:brightness-105",
    secondary: "border-white/15 bg-white/[0.04] text-slate-100 hover:bg-white/[0.1]",
    ghost: "border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/[0.06]",
  };
  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };
  return cn(base, variants[variant], sizes[size], className);
}
