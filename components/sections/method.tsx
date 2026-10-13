import { MethodSteps } from "@/components/sections/method-steps";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

export function Method() {
  return (
    <Section id="vorgehen" aria-labelledby="method-h" className="bg-section" innerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
        <Eyebrow>Die Innensicht-Methode</Eyebrow>
        <H2 id="method-h" className="mt-5 md:text-[56px]">
          <span className="text-[#8C8B89]">Ihre Leute denken mit.</span>
          <br />
          Sie entscheiden.
        </H2>
        <p className="mt-8 max-w-[440px] text-[17px] text-muted-foreground">
          Wir drehen die Reihenfolge um: erst das Wissen Ihrer Organisation, dann Ihre Entscheidung, dann die Umsetzung durch die, die mitgedacht haben.
        </p>
        <p className="mt-6 max-w-[440px] border-t border-border pt-6 text-[15px] text-muted-foreground">
          Ihre Leute liefern Wissen und Ideen. Die Entscheidung bleibt bei Ihnen.
        </p>
      </Reveal>

      <div className="lg:col-span-7">
        <MethodSteps />
      </div>
    </Section>
  );
}
