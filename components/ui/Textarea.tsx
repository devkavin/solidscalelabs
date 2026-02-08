import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-[120px] w-full resize-y rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500",
        className
      )}
      {...props}
    />
  );
}
