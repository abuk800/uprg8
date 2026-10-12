import { MethodSteps } from "@/components/sections/method-steps";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

export function Method() {
  return (
    <Section id="vorgehen" aria-labelledby="method-h" className="bg-section">
      <Reveal className="max-w-3xl">
        <Eyebrow>Die Innensicht-Methode</Eyebrow>
        <H2 id="method-h" className="mt-5">
          Ihre Leute denken mit.
          <br />
          Sie entscheiden.
        </H2>
        <p className="mt-6 max-w-[600px] text-[17px] text-muted-foreground">
          Wir drehen die Reihenfolge um: erst das Wissen Ihrer Organisation, dann Ihre Entscheidung, dann die Umsetzung durch die, die mitgedacht haben.
        </p>
      </Reveal>

      <MethodSteps />

      <Reveal className="mt-14 border-t border-border pt-8">
        <p className="text-[14px] text-muted-foreground">
          Klare Prioritäten in [x] Wochen · Neben dem Tagesgeschäft machbar · Partner statt Junior-Berater
        </p>
        <CtaButton href="#kontakt" data-cta="methode" className="mt-8">
          Erstgespräch buchen
        </CtaButton>
      </Reveal>
    </Section>
  );
}
