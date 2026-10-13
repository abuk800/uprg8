"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { NAV_LINKS } from "@/components/sections/nav-links";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

/** Unterhalb von lg: shadcn Sheet mit allen Sektions-Ankern und dem Erstgespräch-Button. */
export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="-mr-2.5 grid size-11 place-items-center lg:hidden" aria-label="Menü öffnen">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent className="text-foreground">
        <SheetTitle className="sr-only">Menü</SheetTitle>
        <nav aria-label="Mobile Navigation" className="mt-12 flex flex-col">
          {NAV_LINKS.map((l) => (
            <SheetClose asChild key={l.href}>
              <a href={l.href} className="border-b border-border py-3 text-[18px] font-medium">
                {l.label}
              </a>
            </SheetClose>
          ))}
        </nav>
        <SheetClose asChild>
          <a
            href="#kontakt"
            data-cta="menu"
            className="group mt-8 inline-flex items-center gap-3 self-start rounded-full bg-[#191818] py-2 pl-7 pr-2 text-[16px] font-medium text-white"
          >
            Erstgespräch buchen
            <span className="grid size-10 place-items-center rounded-full bg-[#FF6978] text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </a>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
