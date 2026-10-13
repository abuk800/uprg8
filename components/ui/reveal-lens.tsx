"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Oberste Ebene (z. B. „Heute“). Bestimmt die Höhe. */
  base: React.ReactNode;
  /** Ebene dahinter (z. B. „Mit upgr8“), erscheint im Kreis um den Mauszeiger. */
  reveal: React.ReactNode;
  className?: string;
  baseClassName?: string;
  revealClassName?: string;
  /** Radius des Kreises relativ zur Breite des Containers. Groß gewählt, damit fast sofort alles sichtbar ist. */
  radiusRatio?: number;
};

const lerp = (a: number, b: number, f: number) => a + (b - a) * f;

/**
 * Gleiche Technik wie MagneticText (morphing-cursor): ein per lerp nachgeführter Kreis folgt dem Mauszeiger.
 * Statt eines Textes wird hier eine ganze Karte freigelegt. Der Kreis ist bewusst riesig,
 * damit man beim Drüberfahren die dahinterliegende Karte sofort fast vollständig sieht.
 */
export function RevealLens({ base, reveal, className, baseClassName, revealClassName, radiusRatio = 0.62 }: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const baseRef = React.useRef<HTMLDivElement>(null);
  const target = React.useRef({ x: 0, y: 0, r: 0 });
  const current = React.useRef({ x: 0, y: 0, r: 0 });
  const raf = React.useRef<number | undefined>(undefined);
  const reduce = React.useRef(false);

  const paint = React.useCallback(() => {
    const el = baseRef.current;
    if (!el) return;
    const { x, y, r } = current.current;
    const mask = r < 1 ? "none" : `radial-gradient(circle ${r}px at ${x}px ${y}px, transparent ${r - 1}px, #000 ${r}px)`;
    el.style.maskImage = mask;
    el.style.webkitMaskImage = mask;
  }, []);

  const loop = React.useCallback(() => {
    const c = current.current;
    const t = target.current;
    if (reduce.current) {
      c.x = t.x;
      c.y = t.y;
      c.r = t.r;
    } else {
      c.x = lerp(c.x, t.x, 0.2);
      c.y = lerp(c.y, t.y, 0.2);
      c.r = lerp(c.r, t.r, 0.12);
    }
    paint();
    const settled = Math.abs(c.x - t.x) < 0.5 && Math.abs(c.y - t.y) < 0.5 && Math.abs(c.r - t.r) < 0.5;
    if (settled) {
      c.x = t.x;
      c.y = t.y;
      c.r = t.r;
      paint();
      raf.current = undefined;
      return;
    }
    raf.current = requestAnimationFrame(loop);
  }, [paint]);

  const kick = React.useCallback(() => {
    if (raf.current === undefined) raf.current = requestAnimationFrame(loop);
  }, [loop]);

  React.useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const place = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return { rect, x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const p = place(e);
    if (!p) return;
    target.current = { x: p.x, y: p.y, r: Math.max(p.rect.width * radiusRatio, 420) };
    current.current.x = p.x;
    current.current.y = p.y;
    kick();
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const p = place(e);
    if (!p) return;
    target.current.x = p.x;
    target.current.y = p.y;
    kick();
  };

  const onLeave = () => {
    target.current.r = 0;
    kick();
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={onEnter}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn("relative overflow-hidden rounded-3xl", className)}
    >
      <div className={cn("absolute inset-0", revealClassName)}>{reveal}</div>
      <div ref={baseRef} className={cn("relative", baseClassName)}>
        {base}
      </div>
    </div>
  );
}
