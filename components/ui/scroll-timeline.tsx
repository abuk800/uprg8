"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TimelineStep {
  id: string;
  label: string;
  text: string;
}

/**
 * Schlichte Scroll-Timeline: Eine Linie zeichnet sich beim Scrollen, die Schritte werden nacheinander aktiv.
 * Ab md horizontal, mobil als vertikale Linie links.
 */
export default function ScrollTimeline({ steps, className }: { steps: TimelineStep[]; className?: string }) {
  const ref = React.useRef<HTMLOListElement>(null);
  // Startwert 1: ohne JS und bei reduzierter Bewegung ist alles sichtbar
  const [progress, setProgress] = React.useState(1);

  React.useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const { top } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Beginnt bei 85 % der Viewporthöhe, ist bei 40 % komplett gezeichnet
      setProgress(Math.max(0, Math.min(1, (vh * 0.85 - top) / (vh * 0.45))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ol ref={ref} className={cn("relative grid gap-12 max-md:pl-8 md:grid-cols-3 md:gap-8", className)}>
      {/* Hintergrundlinie und gezeichnete Linie: mobil vertikal, ab md horizontal */}
      <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-border md:h-px md:w-full" />
      <span
        aria-hidden
        className="absolute left-0 top-0 w-px bg-foreground md:hidden"
        style={{ height: `${progress * 100}%` }}
      />
      <span
        aria-hidden
        className="absolute left-0 top-0 hidden h-px bg-foreground md:block"
        style={{ width: `${progress * 100}%` }}
      />

      {steps.map((s, i) => {
        const active = progress >= i / steps.length + 0.02;
        return (
          <li key={s.id} className="relative md:pt-8">
            <span
              aria-hidden
              className={cn(
                "absolute size-3 rounded-full border-2 transition-all duration-500 max-md:-left-[38px] max-md:top-1 md:-top-[6px] md:left-0",
                active ? "scale-125 border-foreground bg-accent" : "border-border bg-background",
              )}
            />
            <div className={cn("transition-all duration-700 ease-out", active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-30")}>
              <p className="text-[14px] tabular-nums text-muted-foreground">{s.label}</p>
              <p className="mt-6 text-[22px] font-medium leading-snug tracking-[-0.02em] md:text-[24px]">{s.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
