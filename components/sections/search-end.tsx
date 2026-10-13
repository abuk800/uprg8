import { Check, Minus } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

// Entwurf: Gegenüberstellung aus den Aussagen der Seite abgeleitet, vom Kunden bestätigen lassen
const ROWS = [
  {
    topic: "Wer berät",
    classic: "Junior-Berater erarbeiten die Folien, die Partner sieht man vor allem zu Beginn.",
    upgr8: "Partner am Tisch, die selbst Verantwortung für Strategie und Ergebnisse getragen haben.",
  },
  {
    topic: "Das Wissen",
    classic: "Das Konzept entsteht ohne Ihr Team.",
    upgr8: "Wir holen das Wissen aus allen Ebenen, nicht nur aus der Geschäftsführung.",
  },
  {
    topic: "Die Strategie",
    classic: "Strategie entsteht oben und versandet unten.",
    upgr8: "Eine Roadmap mit klaren Zuständigkeiten, getragen von denen, die sie mitentwickelt haben.",
  },
  {
    topic: "Ihre Leute",
    classic: "Sie bekommen das Ergebnis erklärt und sollen es umsetzen.",
    upgr8: "Ihre Leute denken mit. Die Entscheidung bleibt bei Ihnen.",
  },
  {
    topic: "Danach",
    classic: "Nach der Abschlusspräsentation sind die Berater weg.",
    upgr8: "Wir bleiben, bis die Ergebnisse im Alltag sichtbar sind.",
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
        <div aria-hidden className="hidden md:grid md:grid-cols-[1fr_2fr_2fr] md:gap-x-0">
          <div />
          <p className="px-8 pb-4 text-[15px] text-muted-foreground">Klassische Beratung</p>
          <p className="rounded-t-2xl bg-[#191818] px-8 pb-4 pt-5 text-[15px] font-medium text-accent">upgr8</p>
        </div>

        <ul className="grid gap-6 md:gap-0">
          {ROWS.map((r, i) => {
            const last = i === ROWS.length - 1;
            return (
              <li key={r.topic} className="grid gap-3 max-md:[&:not(:first-child)]:border-t max-md:[&:not(:first-child)]:pt-6 md:grid-cols-[1fr_2fr_2fr] md:gap-0">
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
