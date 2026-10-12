import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

const ROWS: { name: string; present: boolean; note?: string }[] = [
  { name: "Geschäftsführung", present: true },
  { name: "Bereichsleitung", present: true },
  { name: "Externer Berater", present: true },
  { name: "Ihr Vertrieb", present: false, note: "weiß, warum Kunden abspringen" },
  { name: "Ihre Teamleitungen", present: false, note: "wissen, wo täglich Zeit verloren geht" },
  { name: "Ihre jungen Talente", present: false, note: "wissen, welche Tools keiner mehr nutzt" },
];

/** Dunkler Höhepunkt 1. */
export function BlindSpot() {
  return (
    <Section
      id="blinder-fleck"
      aria-labelledby="blind-h"
      className="bg-[#191818] py-28 text-white md:py-40"
      innerClassName="grid items-center gap-12 md:grid-cols-2 md:gap-16"
    >
      <Reveal>
        <Eyebrow className="text-white/60">Warum es bisher nicht funktioniert hat</Eyebrow>
        <H2 id="blind-h" className="mt-5 md:text-[56px]">
          In der Strategieklausur sitzt keiner von ihnen.
        </H2>
        <p className="mt-6 max-w-[480px] text-[18px] text-white/70">
          Die besten Antworten für Ihr Unternehmen gibt es meist schon. Sie stecken in den Köpfen Ihrer Leute. Bisher hat sie nur niemand gefragt.
        </p>
      </Reveal>

      <div>
        <div className="relative overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.06] p-6 md:p-8">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.06]"
          />
          <div className="relative">
            <p className="border-b border-white/[0.12] pb-4 text-[14px] text-white/60">Teilnehmerliste · Strategieklausur</p>
            <ul>
              {ROWS.map((r, i) => (
                <li key={r.name}>
                  <Reveal delay={i * 120} className="flex items-start gap-4 border-b border-white/[0.12] py-4 last:border-b-0">
                    {r.present ? (
                      <Check className="mt-0.5 size-5 shrink-0 text-white" aria-label="dabei" />
                    ) : (
                      <X className="mt-0.5 size-5 shrink-0 text-accent" aria-label="nicht dabei" />
                    )}
                    <div>
                      <p className={r.present ? "text-[17px] font-medium text-white" : "text-[17px] text-white/50 line-through"}>{r.name}</p>
                      {r.note && <p className="mt-0.5 text-[14px] italic text-white">{r.note}</p>}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-[16px] text-white">Das nennen wir kollektive Intelligenz. Wir holen sie an den Tisch.</p>
      </div>

      <div className="flex justify-center md:col-span-2">
        <CtaButton href="#kontakt" variant="light" data-cta="blindfleck">
          Erstgespräch buchen
        </CtaButton>
      </div>
    </Section>
  );
}
