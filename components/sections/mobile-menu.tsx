"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const LINKS = [
  { href: "#situation", label: "Ihre Situation" },
  { href: "#vorgehen", label: "Vorgehen" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

/** Mobil: shadcn Sheet mit den vier Links und „Kontakt“. */
export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" aria-label="Menü öffnen">
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
      </SheetContent>
    </Sheet>
  );
}
