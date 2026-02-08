import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "focus-ring h-11 w-full rounded-2xl border border-white/10 bg-black/20 px-4 text-sm text-slate-100 placeholder:text-slate-400",
        className
      )}
      {...props}
    />
  );
}
