import { CtaButton } from "@/components/ui/cta-button";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import { TeamCard } from "@/components/ui/team-card";
import { Reveal } from "@/components/ui/reveal";
import { PARTNERS } from "@/lib/images";

export function Closing() {
  const armin = PARTNERS[0];
  return (
    <Section id="kontakt" aria-labelledby="kontakt-h" className="bg-[#191818] text-white" innerClassName="grid items-center gap-14 md:grid-cols-[1.1fr_.9fr] md:gap-20">
      <Reveal className="flex flex-col items-start gap-6">
        <Eyebrow>Erstgespräch</Eyebrow>
        <H2 id="kontakt-h">In 30 Minuten wissen Sie, ob wir der richtige Partner sind.</H2>
        <p className="max-w-[520px] text-[17px] text-white/80">
          Armin Blassnig hört zu, stellt die richtigen Fragen und sagt Ihnen ehrlich, ob und wie upgr8 helfen kann.
        </p>
        <CtaButton href="tel:+436641441492" variant="light" data-cta="kontakt">
          Termin mit Armin wählen
        </CtaButton>
        <p className="text-[14px] text-white/70">
          Lieber per Telefon?{" "}
          <a href="tel:+436641441492" className="inline-block py-2 text-white underline underline-offset-4">
            +43 664 144 1492
          </a>
        </p>
      </Reveal>
      <Reveal delay={100} className="w-full max-w-[400px] md:justify-self-end">
        <TeamCard name={armin.name} role={armin.role} color={armin.color} href="tel:+436641441492" onDark sizes="(min-width: 768px) 400px, 90vw" />
      </Reveal>
    </Section>
  );
}
