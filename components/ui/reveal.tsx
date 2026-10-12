"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type State = "idle" | "hidden" | "shown";

/**
 * Dezentes Einblenden. Der Startzustand ist sichtbar (auch ohne JS).
 * Nur Elemente unterhalb des Viewports werden nach dem Mount versteckt und beim Scrollen eingeblendet.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<State>("idle");

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={state === "shown" && delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        state === "hidden" && "translate-y-3 opacity-0",
        state === "shown" && "translate-y-0 opacity-100 transition-[opacity,transform] duration-500 ease-out",
        className,
      )}
    >
      {children}
    </div>
  );
}
