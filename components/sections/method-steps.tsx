"use client";

import * as React from "react";
import { H3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const STEPS = [
  { n: "01", title: "Einsammeln", text: "Wir holen das Wissen aus allen Ebenen, nicht nur aus der Geschäftsführung." },
  { n: "02", title: "Entscheiden", text: "Wir verdichten es zu wenigen, klaren Prioritäten. Die Entscheidung treffen Sie." },
  { n: "03", title: "Umsetzen", text: "Eine Roadmap mit klaren Zuständigkeiten, getragen von denen, die sie mitentwickelt haben." },
  { n: "04", title: "Begleiten", text: "Wir bleiben, bis die Ergebnisse im Alltag sichtbar sind." },
];

const STEP_MS = 900;

/**
 * Die vier Schritte laufen nacheinander an, sobald sie sichtbar sind:
 * Ein Coral-Punkt setzt den Anker, die Linie zum nächsten Schritt füllt sich.
 * Alle vier Schritte sehen im Ausgangszustand gleich aus; ohne JavaScript bleibt alles sichtbar.
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
          timers.push(window.setTimeout(() => setReached(i + 1), 250 + i * STEP_MS));
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <ol ref={ref} className="mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-8">
      {STEPS.map((s, i) => {
        const on = reached > i;
        return (
          <li key={s.n}>
            <div className="flex items-center gap-4">
              <span className="relative text-[48px] font-medium leading-none tracking-[-0.04em] tabular-nums text-foreground">
                {s.n}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -right-3 top-1 size-2 rounded-full bg-accent transition-all duration-500",
                    on ? "scale-100 opacity-100" : "scale-0 opacity-0",
                  )}
                />
              </span>
              <span aria-hidden className="relative ml-2 hidden h-px flex-1 overflow-hidden bg-border md:block">
                <span
                  className={cn(
                    "absolute inset-0 origin-left bg-foreground transition-transform ease-out",
                    on ? "scale-x-100 duration-[900ms]" : "scale-x-0 duration-0",
                  )}
                />
              </span>
            </div>
            <div aria-hidden className="relative mt-4 h-px overflow-hidden bg-border md:hidden">
              <span
                className={cn(
                  "absolute inset-0 origin-left bg-foreground transition-transform ease-out",
                  on ? "scale-x-100 duration-[900ms]" : "scale-x-0 duration-0",
                )}
              />
            </div>
            <H3 className="mt-4">{s.title}</H3>
            <p className="mt-2 text-[15px] text-muted-foreground">{s.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
