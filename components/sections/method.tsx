import { MethodSteps } from "@/components/sections/method-steps";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

export function Method() {
  return (
    <Section id="vorgehen" aria-labelledby="method-h" className="bg-section">
      <Reveal className="max-w-3xl">
        <Eyebrow>Die Innensicht-Methode</Eyebrow>
        <H2 id="method-h" className="mt-5 md:text-[64px]">
          Ihre Leute denken mit.
          <br />
          <span className="font-semibold underline decoration-accent decoration-4 underline-offset-8">Sie entscheiden.</span>
        </H2>
        <p className="mt-8 max-w-[600px] text-[17px] text-muted-foreground">
          Wir drehen die Reihenfolge um: erst das Wissen Ihrer Organisation, dann Ihre Entscheidung, dann die Umsetzung durch die, die mitgedacht haben.
        </p>
        <p className="mt-8 max-w-[640px] border-l-2 border-accent bg-white p-5 text-[16px] text-muted-foreground">
          <strong className="font-medium text-foreground">Keine Basisdemokratie.</strong> Ihre Leute liefern Wissen und Ideen. Die Entscheidung bleibt bei Ihnen.
        </p>
      </Reveal>

      <MethodSteps />
    </Section>
  );
}
