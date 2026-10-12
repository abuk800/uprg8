"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CtaButton } from "@/components/ui/cta-button";
import { Container } from "@/components/ui/section";
import { IMG } from "@/lib/images";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#situation", label: "Ihre Situation" },
  { href: "#vorgehen", label: "Unser Vorgehen" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-100 transition-colors duration-300",
        solid ? "border-b border-border bg-white text-foreground" : "bg-linear-to-b from-black/40 to-transparent text-white",
      )}
    >
      <Container className="grid h-[72px] grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <a href="#hero" aria-label="upgr8 – zur Startseite" className="inline-flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMG.logo} alt="upgr8 Logo" width={110} height={30} className={cn("h-[30px] w-auto", !solid && "invert")} />
        </a>
        <nav aria-label="Hauptnavigation" className="hidden gap-9 text-[15px] font-medium md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="py-2 transition-opacity hover:opacity-65">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end">
          <CtaButton href="#kontakt" data-cta="nav" size="sm" variant={solid ? "dark" : "light"} className="hidden md:inline-flex">
            Erstgespräch buchen
          </CtaButton>
          <Sheet>
            <SheetTrigger className="grid size-11 place-items-center md:hidden" aria-label="Menü öffnen">
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent className="text-foreground">
              <SheetTitle className="sr-only">Menü</SheetTitle>
              <nav aria-label="Mobile Navigation" className="mt-12 flex flex-col">
                {LINKS.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="border-b border-border py-4 text-[20px] font-medium">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <CtaButton href="#kontakt" data-cta="nav" className="mt-8 self-start">
                  Erstgespräch buchen
                </CtaButton>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
