import { ArrowDown, ArrowRight, Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
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

export function BeforeAfter() {
  return (
    <Section id="ergebnisbild" aria-labelledby="ba-h">
      <Reveal className="max-w-3xl">
        <Eyebrow>Was sich verändert</Eyebrow>
        <H2 id="ba-h" className="mt-5">
          Vom Engpass zum Motor.
        </H2>
      </Reveal>

      <Reveal className="mt-12 grid items-center gap-4 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="rounded-2xl bg-[#F7F6F4] p-8">
          <p className="text-[14px] text-muted-foreground">Heute</p>
          <ul className="mt-6 space-y-4">
            {BEFORE.map((t) => (
              <li key={t} className="flex gap-3 text-[17px]">
                <Minus className="mt-1 size-5 shrink-0 text-muted-foreground" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden className="mx-auto grid size-12 place-items-center rounded-full bg-foreground text-white">
          <ArrowRight className="hidden size-5 md:block" />
          <ArrowDown className="size-5 md:hidden" />
        </div>

        <div className="rounded-2xl bg-[#191818] p-8 text-white">
          <p className="text-[14px] text-accent">Mit upgr8</p>
          <ul className="mt-6 space-y-4">
            {AFTER.map((t) => (
              <li key={t} className="flex gap-3 text-[17px]">
                <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
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
