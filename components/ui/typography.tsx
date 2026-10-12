import * as React from "react";
import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-[14px] leading-none", className)}>
      <Sparkle className="size-4 fill-current" aria-hidden />
      {children}
    </span>
  );
}

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 className={cn("text-[44px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[80px]", className)} {...props} />;
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-[34px] font-medium leading-[1.1] tracking-[-0.04em] md:text-[48px]", className)} {...props} />;
}

export function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return <h3 className={cn("text-[20px] font-medium leading-snug tracking-[-0.02em]", className)} {...props} />;
}
