"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  { n: "01", title: "Einsammeln", text: "Wir holen das Wissen aus allen Ebenen, nicht nur aus der Geschäftsführung." },
  { n: "02", title: "Entscheiden", text: "Wir verdichten es zu wenigen, klaren Prioritäten. Die Entscheidung treffen Sie." },
  { n: "03", title: "Umsetzen", text: "Eine Roadmap mit klaren Zuständigkeiten, getragen von denen, die sie mitentwickelt haben." },
  { n: "04", title: "Begleiten", text: "Wir bleiben, bis die Ergebnisse im Alltag sichtbar sind." },
];

const STEP_MS = 700;

/**
 * Schritt-Liste: Beim Scrollen zieht sich nacheinander die Linie über jedem Schritt auf,
 * dazu setzt ein Coral-Punkt an die Nummer. Ohne JavaScript bleibt alles sichtbar.
 */
export function MethodSteps() {
  const ref = React.useRef<HTMLOListElement>(null);
  const [reached, setReached] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setReached(STEPS.length);
      return;
    }
    const timers: number[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        STEPS.forEach((_, i) => {
          timers.push(window.setTimeout(() => setReached(i + 1), 150 + i * STEP_MS));
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <ol ref={ref} className="border-b border-border">
      {STEPS.map((s, i) => {
        const on = reached > i;
        return (
          <li key={s.n} className="relative grid gap-3 border-t border-border py-8 md:grid-cols-[7rem_1fr] md:gap-6 md:py-10">
            <span
              aria-hidden
              className={cn(
                "absolute -top-px left-0 h-px w-full origin-left bg-foreground transition-transform ease-out",
                on ? "scale-x-100 duration-700" : "scale-x-0 duration-0",
              )}
            />
            <div className="relative text-[40px] font-medium leading-none tracking-[-0.04em] tabular-nums">
              {s.n}
              <span
                aria-hidden
                className={cn(
                  "absolute left-[3.1rem] top-0.5 size-2 rounded-full bg-accent transition-all duration-500",
                  on ? "scale-100 opacity-100" : "scale-0 opacity-0",
                )}
              />
            </div>
            <div>
              <h3 className="text-[28px] font-medium leading-tight tracking-[-0.03em] md:text-[32px]">{s.title}</h3>
              <p className="mt-3 max-w-[460px] text-[16px] text-muted-foreground">{s.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
