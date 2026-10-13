import { Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const ROWS = [
  {
    topic: "Wer am Tisch sitzt",
    classic: "Die Partner zum Auftakt, danach das Junior-Team.",
    upgr8: "Die Partner, vom ersten Workshop bis zum Ergebnis.",
  },
  {
    topic: "Woher die Antworten kommen",
    classic: "Aus Analysen, Benchmarks und Interviews mit der Führungsetage.",
    upgr8: "Aus Ihrer Organisation: Vertrieb, Teamleitungen, Fachkräfte.",
  },
  {
    topic: "Was am Ende auf dem Tisch liegt",
    classic: "Ein Konzept, das erst noch erklärt werden muss.",
    upgr8: "Wenige Prioritäten, die Ihre Leute schon kennen, weil sie mitgedacht haben.",
  },
  {
    topic: "KI",
    classic: "Ein Tool-Projekt für einzelne Prozesse.",
    upgr8: "Ein Führungsthema für das ganze Unternehmen.",
  },
  {
    topic: "Woran man sich misst",
    classic: "An der Abschlusspräsentation.",
    upgr8: "An dem, was im Alltag umgesetzt ist.",
  },
];

/** Gegenüberstellung: Klassische Beratung und upgr8 in fünf Punkten. Desktop als Tabelle, mobil je Punkt eine Karte. */
export function SearchEnd() {
  return (
    <Section id="unterschied" aria-labelledby="unterschied-h" className="border-t border-border">
      <Reveal className="max-w-3xl">
        <Eyebrow>Der Unterschied</Eyebrow>
        <H2 id="unterschied-h" className="mt-5">
          Was uns von klassischer Beratung unterscheidet.
        </H2>
      </Reveal>

      <Reveal className="mt-12 md:mt-16">
        {/* Spaltenköpfe, nur Desktop */}
        <div aria-hidden className="hidden md:grid md:grid-cols-[1.2fr_2fr_2fr] md:gap-x-0">
          <div />
          <p className="px-8 pb-4 text-[15px] text-muted-foreground">Klassische Beratung</p>
          <p className="rounded-t-2xl bg-[#191818] px-8 pb-4 pt-5 text-[15px] font-medium text-accent">upgr8</p>
        </div>

        <ul className="grid gap-6 md:gap-0">
          {ROWS.map((r, i) => {
            const last = i === ROWS.length - 1;
            return (
              <li key={r.topic} className="grid gap-3 max-md:[&:not(:first-child)]:border-t max-md:[&:not(:first-child)]:pt-6 md:grid-cols-[1.2fr_2fr_2fr] md:gap-0">
                <p className="text-[14px] text-muted-foreground md:border-t md:border-border md:py-8 md:text-[15px]">{r.topic}</p>

                <div className="md:border-t md:border-border md:px-8 md:py-8">
                  <p className="text-[13px] text-muted-foreground md:hidden">Klassische Beratung</p>
                  <p className="mt-1 flex gap-3 text-[17px] text-muted-foreground md:mt-0">
                    <Minus className="mt-1 size-5 shrink-0" aria-hidden />
                    {r.classic}
                  </p>
                </div>

                <div
                  className={cn(
                    "rounded-2xl bg-[#191818] p-6 text-white md:rounded-none md:border-t md:border-white/15 md:px-8 md:py-8",
                    i === 0 && "md:border-t-0",
                    last && "md:rounded-b-2xl",
                  )}
                >
                  <p className="text-[13px] font-medium text-accent md:hidden">upgr8</p>
                  <p className="mt-1 flex gap-3 text-[17px] md:mt-0">
                    <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                    {r.upgr8}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
