"use client";

import * as React from "react";
import { CtaButton } from "@/components/ui/cta-button";
import { cn } from "@/lib/utils";

/** Feste Leiste unten (nur mobil), erscheint nach dem Hero. */
export function MobileBar() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0.05 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-90 border-t border-border bg-white px-6 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!show}
    >
      <CtaButton href="#kontakt" data-cta="mobile" className="w-full justify-between" tabIndex={show ? 0 : -1}>
        Erstgespräch mit Armin buchen
      </CtaButton>
    </div>
  );
}
