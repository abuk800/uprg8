import { CalendarX, Inbox, Waves } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { to: 77, text: "der Familienunternehmen sagen: Strategische Projekte werden vom Tagesgeschäft verdrängt." },
  { to: 11, text: "sagen: Unsere Mitarbeitenden verstehen die Strategie wirklich." },
  { to: 10, text: "der Beschäftigten fühlen sich ihrem Arbeitgeber emotional stark verbunden." },
];

export function Recognition() {
  return (
    <Section id="situation-alltag" aria-labelledby="erkennen-h">
      <FeatureGrid
        eyebrow="Der Alltag im Mittelstand"
        title={<span id="erkennen-h">Kommt Ihnen das bekannt vor?</span>}
        items={[
          { icon: CalendarX, title: "Die Klausur war gut.", text: "Alle waren sich einig. Drei Monate später fragt keiner mehr danach." },
          { icon: Inbox, title: "Alles landet bei Ihnen.", text: "Sie haben ein Führungsteam. Trotzdem wartet bei jeder wichtigen Frage alles auf Ihre Entscheidung." },
          { icon: Waves, title: "Der Wandel kommt nicht an.", text: "KI, Fachkräftemangel, neue Märkte. Ihre Leute nicken und machen weiter wie bisher." },
        ]}
      />

      <div className="mt-20 md:mt-28">
        <Reveal>
          <p className="mb-8 text-[14px] text-muted-foreground">Sie sind nicht allein</p>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.to} delay={i * 80} className="border-t border-foreground pt-6">
              <div className="text-[56px] font-medium leading-none tracking-[-0.04em]">
                <CountUp to={s.to} suffix=" %" />
              </div>
              <p className="mt-4 text-[15px] text-muted-foreground">{s.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-[12px] text-muted-foreground">
          Dr. Wieselhuber &amp; Partner, Studie mit 116 Familienunternehmen (2026) · Gallup Engagement Index Deutschland 2025
        </p>
      </div>

      <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
        <p className="text-[24px] font-medium leading-snug tracking-[-0.02em]">
          Jedes Quartal, in dem Ihre Strategie wartet, entscheidet der Wettbewerb für Sie.
        </p>
      </Reveal>
    </Section>
  );
}
