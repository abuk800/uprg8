import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

// Texte aus dem Business Check-up von upgr8.org übernommen und an unsere Ansprache angepasst
const CHECKUP_URL = "https://checkup.upgr8.org/presentation";

const BENEFITS = [
  "Sie erkennen, wo Ihre Stärken liegen.",
  "Sie identifizieren mögliche Verbesserungsbereiche.",
  "Sie verstehen, wie Sie Ihre Ressourcen am besten einsetzen.",
];

/** Zweiter Einstieg neben dem Erstgespräch: der Business Check-up für alle, die erst einmal selbst hinschauen möchten. */
export function Checkup() {
  return (
    <Section id="checkup" aria-labelledby="checkup-h" className="bg-section" innerClassName="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-6">
        <Eyebrow>Business Check-up</Eyebrow>
        <H2 id="checkup-h" className="mt-5">
          Wie fit ist Ihr Unternehmen für die Zukunft?
        </H2>
        <p className="mt-6 max-w-[480px] text-[17px] text-muted-foreground">
          Der Business Check-up gibt Ihnen einen klaren Überblick über die Fitness Ihrer Organisation.
        </p>
      </Reveal>

      <Reveal delay={100} className="lg:col-span-6">
        <div className="rounded-2xl bg-[#191818] p-8 text-white md:p-10">
          <p className="text-[14px] text-accent">Mit dem Check-up</p>
          <ul className="mt-6 space-y-4">
            {BENEFITS.map((t) => (
              <li key={t} className="flex gap-3 text-[18px]">
                <Check className="mt-1 size-5 shrink-0 text-accent" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-4">
            <CtaButton href={CHECKUP_URL} target="_blank" rel="noopener" variant="light" data-cta="checkup">
              Check-up starten
            </CtaButton>
            <p className="text-[14px] text-white/70">
              Lieber direkt sprechen?{" "}
              <a href="#kontakt" className="inline-block py-2 text-white underline underline-offset-4">
                Erstgespräch buchen
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
