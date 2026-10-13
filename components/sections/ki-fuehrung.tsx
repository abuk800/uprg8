import { Brain, Check, Minus, Network } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

// Entwurf: Probleme und Lösungen auf Basis von Recherche, vom Kunden bestätigen lassen
const LEVELS = [
  {
    icon: Network,
    title: "KI ganzheitlich im Unternehmen",
    pains: [
      "KI wird nicht von allen genutzt: Einige experimentieren, viele schauen zu.",
      "Jeder arbeitet mit eigenen Tools und eigenen Regeln. Nichts passt zusammen.",
      "Einzelne Pilotprojekte entstehen ohne Strategie und versanden.",
    ],
    solutions: [
      "Eine KI-Strategie, die aus Ihrer Unternehmensstrategie folgt.",
      "Wenige klare Anwendungsfälle, die alle kennen, mit Verantwortlichen.",
      "Gemeinsame Regeln und Werkzeuge, die für alle gelten.",
      "Ihre Leute denken mit, deshalb wird KI im Alltag genutzt.",
    ],
  },
  {
    icon: Brain,
    title: "KI im Kopf jeder Führungskraft",
    pains: [
      "Jede Führungskraft versteht KI unterschiedlich tief. Manche meiden das Thema.",
      "KI wird an die IT delegiert, statt in den Bereichen entschieden.",
      "Teams bekommen widersprüchliche Signale und warten auf Ansage.",
    ],
    solutions: [
      "Ein gemeinsames Verständnis im ganzen Führungsteam, auf Augenhöhe.",
      "Jede Führungskraft probiert KI an ihren eigenen Aufgaben aus.",
      "Klare Haltung: wo KI helfen soll, wo nicht und wer entscheidet.",
      "Führungskräfte gehen voran und befähigen ihre Teams.",
    ],
  },
];

/** „KI ist ein Führungsthema“: zwei Ebenen, je mit Problemen (Heute) und Lösungen (Mit upgr8), darunter belegte Zahlen. */
export function KiFuehrung() {
  return (
    <Section id="ki" aria-labelledby="ki-h" className="border-t border-border">
      <Reveal className="grid gap-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Künstliche Intelligenz</Eyebrow>
          <H2 id="ki-h" className="mt-5 md:text-[56px]">
            <span className="text-[#8C8B89]">KI ist ein</span>
            <br />
            Führungsthema.
          </H2>
        </div>
        <p className="max-w-[460px] text-[17px] text-muted-foreground lg:col-span-5 lg:self-end">
          Ob KI wirkt, entscheidet sich an zwei Stellen: im Unternehmen als Ganzes und in jeder einzelnen Führungskraft.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-4 md:mt-16 md:gap-6">
        {LEVELS.map(({ icon: Icon, title, pains, solutions }, i) => (
          <li key={title}>
            <Reveal delay={i * 100}>
              <article className="rounded-2xl bg-muted p-6 md:p-10">
                <header className="flex items-center gap-4">
                  <span aria-hidden className="grid size-12 shrink-0 place-items-center border-t border-l bg-background">
                    <Icon className="size-6" strokeWidth={1} />
                  </span>
                  <div>
                    <p className="text-[14px] tabular-nums text-muted-foreground">0{i + 1}</p>
                    <h3 className="text-[24px] font-medium leading-tight tracking-[-0.03em] md:text-[32px]">{title}</h3>
                  </div>
                </header>

                <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-6">
                  <div className="md:p-2">
                    <p className="text-[14px] text-muted-foreground">Heute</p>
                    <ul className="mt-5 space-y-4">
                      {pains.map((t) => (
                        <li key={t} className="flex gap-3 text-[17px]">
                          <Minus className="mt-1 size-5 shrink-0 text-muted-foreground" aria-hidden />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-[#191818] p-6 text-white md:p-8">
                    <p className="text-[14px] text-accent">Mit upgr8</p>
                    <ul className="mt-5 space-y-4">
                      {solutions.map((t) => (
                        <li key={t} className="flex gap-3 text-[17px]">
                          <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-10 border-t border-border pt-10 md:mt-20 md:grid-cols-3 md:gap-8">
        <Reveal>
          <div className="whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">
            <CountUp to={20} suffix=" %" />
          </div>
          <p className="mt-4 text-[15px] text-muted-foreground">der Unternehmen im Mittelstand nutzen bisher mindestens eine KI-Technologie.</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">
            <CountUp to={78} suffix=" %" />
          </div>
          <p className="mt-4 text-[15px] text-muted-foreground">der Beschäftigten, die KI nutzen, bringen ihre eigenen Tools mit zur Arbeit.</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">
            <CountUp to={60} suffix=" %" />
          </div>
          <p className="mt-4 text-[15px] text-muted-foreground">der Führungskräfte sorgen sich, dass ihrem Unternehmen eine Vision und ein Plan für KI fehlt.</p>
        </Reveal>
      </div>
      <p className="mt-8 max-w-3xl text-[13px] text-muted-foreground">
        Quellen: KfW Research, Fokus Volkswirtschaft Nr. 554 (Juli 2026) · Microsoft &amp; LinkedIn, 2024 Work Trend Index (31.000 Befragte in 31 Ländern)
      </p>
    </Section>
  );
}
