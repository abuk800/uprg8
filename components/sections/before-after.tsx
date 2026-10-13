import { ArrowDown, ArrowRight, Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
import { RevealLens } from "@/components/ui/reveal-lens";
import { Reveal } from "@/components/ui/reveal";

const BEFORE = [
  "Jede wichtige Entscheidung landet bei Ihnen.",
  "Strategie entsteht oben und versandet unten.",
  "Klausuren erzeugen Einigkeit, aber keine Umsetzung.",
  "Ihre Leute warten auf Ansage.",
];

const AFTER = [
  "Wenige, klare Prioritäten, die alle kennen.",
  "Verantwortliche für jede Maßnahme, nicht nur für Sie.",
  "Ihr Führungsteam treibt die Umsetzung.",
  "Ihre Leute tragen mit, weil sie mitgedacht haben.",
];

/** Gleiches Layout für beide Ebenen, damit die Zeilen beim Aufdecken exakt übereinander liegen. */
function BigPanel({ label, items, tone }: { label: string; items: string[]; tone: "light" | "dark" }) {
  const Icon = tone === "light" ? Minus : Check;
  return (
    <div className="flex h-full flex-col p-8 md:p-14">
      <p className={tone === "light" ? "text-[14px] text-muted-foreground" : "text-[14px] text-accent"}>{label}</p>
      <ul className="mt-10 space-y-6 md:mt-14 md:space-y-8">
        {items.map((t) => (
          <li key={t} className="flex gap-5 text-[30px] font-medium leading-[1.1] tracking-[-0.03em] md:text-[40px]">
            <Icon className={tone === "light" ? "mt-2 size-7 shrink-0 text-muted-foreground" : "mt-2 size-7 shrink-0 text-accent"} aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SmallPanel({ label, items, tone }: { label: string; items: string[]; tone: "light" | "dark" }) {
  const Icon = tone === "light" ? Minus : Check;
  return (
    <div className={tone === "light" ? "rounded-2xl bg-[#F7F6F4] p-8" : "rounded-2xl bg-[#191818] p-8 text-white"}>
      <p className={tone === "light" ? "text-[14px] text-muted-foreground" : "text-[14px] text-accent"}>{label}</p>
      <ul className="mt-6 space-y-4">
        {items.map((t) => (
          <li key={t} className="flex gap-3 text-[17px]">
            <Icon className={tone === "light" ? "mt-1 size-5 shrink-0 text-muted-foreground" : "mt-1 size-5 shrink-0 text-accent"} aria-hidden />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <Section id="ergebnisbild" aria-labelledby="ba-h">
      <Reveal className="max-w-3xl">
        <Eyebrow>Was sich verändert</Eyebrow>
        <H2 id="ba-h" className="mt-5">
          Vom Engpass zum Motor.
        </H2>
      </Reveal>

      {/* Maus: große „Heute“-Karte, die „Mit upgr8“-Karte dahinter wird per Kreis aufgedeckt */}
      <Reveal className="mt-12 hidden md:mt-16 [@media(hover:hover)]:md:block xl:-mx-24">
        <RevealLens
          className="min-h-[72vh]"
          baseClassName="min-h-[72vh] bg-[#F7F6F4]"
          revealClassName="bg-[#191818] text-white"
          base={
            <div className="flex min-h-[72vh] flex-col">
              <BigPanel label="Heute" items={BEFORE} tone="light" />
              <p className="mt-auto px-14 pb-8 text-[14px] text-muted-foreground">Mit der Maus über die Karte fahren</p>
            </div>
          }
          reveal={<BigPanel label="Mit upgr8" items={AFTER} tone="dark" />}
        />
      </Reveal>

      {/* Touch und Mobil: beide Karten untereinander mit Pfeil */}
      <Reveal className="mt-12 grid items-center gap-4 [@media(hover:hover)]:md:hidden md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <SmallPanel label="Heute" items={BEFORE} tone="light" />
        <div aria-hidden className="mx-auto grid size-12 place-items-center rounded-full bg-foreground text-white">
          <ArrowRight className="hidden size-5 md:block" />
          <ArrowDown className="size-5 md:hidden" />
        </div>
        <SmallPanel label="Mit upgr8" items={AFTER} tone="dark" />
      </Reveal>

      <Reveal className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <CtaButton href="#kontakt" data-cta="vorher-nachher">
          Erstgespräch buchen
        </CtaButton>
        <p className="text-[14px] text-muted-foreground">30 Minuten · unverbindlich</p>
      </Reveal>
    </Section>
  );
}
