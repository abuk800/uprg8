import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

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

/** Der Spiegel: rein typografisch, keine Karten. Alles direkt sichtbar. */
export function Recognition() {
  return (
    <Section id="situation" aria-labelledby="spiegel-h">
      <Reveal className="max-w-3xl">
        <Eyebrow>Der Alltag im Mittelstand</Eyebrow>
        <H2 id="spiegel-h" className="mt-5">
          Kommt Ihnen einer dieser Gedanken bekannt vor?
        </H2>
      </Reveal>

      <div className="mt-12 md:mt-16">
        {THOUGHTS.map((t, i) => (
          <Reveal key={t.label} delay={i * 80} className="grid gap-4 border-t border-foreground py-8 md:grid-cols-12 md:gap-8 md:py-12">
            <p className="text-[14px] text-muted-foreground md:col-span-3">{t.label}</p>
            <div className="md:col-span-9">
              <p className="text-[26px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[36px]">{t.quote}</p>
              <p className="mt-4 text-[16px] text-muted-foreground">{t.line}</p>
            </div>
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
      <p className="mt-8 text-[13px] text-muted-foreground">Dr. Wieselhuber &amp; Partner, Studie mit 116 Familienunternehmen (2026)</p>
    </Section>
  );
}
