import { Check, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

const ROWS: { name: string; present: boolean; note?: string }[] = [
  { name: "Geschäftsführung", present: true },
  { name: "Bereichsleitung", present: true },
  { name: "Externer Berater", present: true },
  { name: "Ihr Vertrieb", present: false, note: "weiß, warum Kunden abspringen" },
  { name: "Ihre Teamleitungen", present: false, note: "wissen, wo täglich Zeit verloren geht" },
  { name: "Ihre jungen Talente", present: false, note: "wissen, welche Tools keiner mehr nutzt" },
];

export function BlindSpot() {
  return (
    <Section id="blinder-fleck" aria-labelledby="blind-h" innerClassName="grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <Reveal>
        <Eyebrow>Der blinde Fleck</Eyebrow>
        <H2 id="blind-h" className="mt-5 md:text-[56px]">
          In der Strategieklausur sitzt keiner von ihnen.
        </H2>
        <p className="mt-6 max-w-[480px] text-[18px] text-muted-foreground">
          Die besten Antworten für Ihr Unternehmen gibt es meist schon. Sie stecken in den Köpfen Ihrer Leute. Wir holen sie heraus und machen daraus Entscheidungen.
        </p>
      </Reveal>

      <div>
        <div className="relative overflow-hidden rounded-lg bg-muted p-6 md:p-8">
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.07]"
          />
          <div className="relative">
            <p className="border-b border-border pb-4 text-[14px] text-muted-foreground">Teilnehmerliste · Strategieklausur</p>
            <ul>
              {ROWS.map((r, i) => (
                <li key={r.name}>
                  <Reveal delay={i * 120} className="flex items-start gap-4 border-b border-border py-4 last:border-b-0">
                    {r.present ? (
                      <Check className="mt-0.5 size-5 shrink-0" aria-label="dabei" />
                    ) : (
                      <X className="mt-0.5 size-5 shrink-0 text-accent" aria-label="nicht dabei" />
                    )}
                    <div>
                      <p className={r.present ? "text-[17px] font-medium" : "text-[17px] text-muted-foreground line-through"}>{r.name}</p>
                      {r.note && <p className="mt-0.5 text-[14px] italic text-foreground">{r.note}</p>}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-[14px] text-muted-foreground">Das nennen wir kollektive Intelligenz. Und genau dort setzen wir an.</p>
      </div>
    </Section>
  );
}
