import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import {
  CardCurtain,
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealDescription,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
} from "@/components/ui/card-curtain-reveal";
import { Plus } from "lucide-react";

const THOUGHTS = [
  {
    label: "Wachstum",
    quote: "„Wir haben ein Führungsteam. Trotzdem landet alles bei mir.“",
    line: "Das Unternehmen wächst nur so schnell wie Ihr Kalender.",
  },
  {
    label: "Nach der Klausur",
    quote: "„Alle waren sich einig. Drei Monate später fragt keiner mehr danach.“",
    line: "Und die nächste Klausur glaubt schon keiner mehr.",
  },
  {
    label: "Wandel",
    quote: "„KI, Fachkräfte, neue Märkte. Meine Leute nicken und machen weiter wie bisher.“",
    line: "Der Markt dreht sich schneller als die Organisation.",
  },
];

/** Der Spiegel: drei Karten, Hover (oder Fokus) öffnet den Vorhang und zeigt den Gedanken. Touch: immer offen. */
export function Recognition() {
  return (
    <Section id="situation" aria-labelledby="spiegel-h">
      <Reveal className="max-w-3xl">
        <Eyebrow>Der Alltag im Mittelstand</Eyebrow>
        <H2 id="spiegel-h" className="mt-5">
          Kommt Ihnen einer dieser Gedanken bekannt vor?
        </H2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
        {THOUGHTS.map((t, i) => (
          <Reveal key={t.label} delay={i * 80}>
            <CardCurtainReveal
              tabIndex={0}
              aria-label={`${t.label}: ${t.quote}`}
              className="h-auto min-h-[340px] rounded-2xl border border-foreground bg-foreground text-white outline-none focus-visible:ring-2 focus-visible:ring-accent md:h-[420px]"
            >
              <CardCurtainRevealBody className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-[13px] tabular-nums opacity-60">0{i + 1}</p>
                <CardCurtainRevealTitle restY={230} className="mt-4 text-[34px] font-medium leading-none tracking-[-0.03em] md:text-[38px]">
                  {t.label}
                </CardCurtainRevealTitle>
                <CardCurtainRevealDescription className="mt-6">
                  <p className="text-[22px] font-medium leading-[1.2] tracking-[-0.02em] md:text-[24px]">{t.quote}</p>
                </CardCurtainRevealDescription>
              </CardCurtainRevealBody>
              <CardCurtainRevealFooter className="mt-auto px-7 pb-7 md:px-8 md:pb-8">
                <p className="border-t border-white/25 pt-4 text-[15px] opacity-70">{t.line}</p>
              </CardCurtainRevealFooter>
              <CardCurtain className="bg-white" />
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-6 grid size-8 place-items-center rounded-full bg-accent text-foreground [@media(hover:none)]:hidden"
              >
                <Plus className="size-4" strokeWidth={2.25} />
              </span>
            </CardCurtainReveal>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 border-t border-border pt-10 md:mt-20 md:grid-cols-3 md:gap-8">
        <Reveal>
          <div className="whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">
            <CountUp to={77} suffix=" %" />
          </div>
          <p className="mt-4 text-[15px] text-muted-foreground">der Familienunternehmen sagen: Strategische Projekte werden vom Tagesgeschäft verdrängt.</p>
        </Reveal>
        <Reveal delay={80}>
          <div className="whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">
            <CountUp to={11} suffix=" %" />
          </div>
          <p className="mt-4 text-[15px] text-muted-foreground">sagen: Unsere Mitarbeitenden verstehen die Strategie wirklich.</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="whitespace-nowrap text-[44px] font-medium leading-none tracking-[-0.04em] md:text-[52px]">Jedes Quartal</div>
          <p className="mt-4 text-[15px] text-muted-foreground">in dem Ihre Strategie wartet, entscheidet der Wettbewerb für Sie.</p>
        </Reveal>
      </div>
      <p className="mt-8 text-[12px] text-muted-foreground">Dr. Wieselhuber &amp; Partner, Studie mit 116 Familienunternehmen (2026)</p>
    </Section>
  );
}
