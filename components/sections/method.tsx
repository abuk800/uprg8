import { Section } from "@/components/ui/section";
import { Eyebrow, H2, H3 } from "@/components/ui/typography";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  { n: "01", title: "Einsammeln", text: "Wir holen das Wissen aus allen Ebenen, nicht nur aus der Geschäftsführung." },
  { n: "02", title: "Entscheiden", text: "Wir verdichten es zu wenigen, klaren Prioritäten. Die Entscheidung treffen Sie." },
  { n: "03", title: "Umsetzen", text: "Eine Roadmap mit klaren Zuständigkeiten, getragen von denen, die sie mitentwickelt haben." },
  { n: "04", title: "Begleiten", text: "Wir bleiben, bis die Ergebnisse im Alltag sichtbar sind." },
];

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

      <ol className="mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-8">
        {STEPS.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 100}>
              <div className="flex items-center gap-4">
                <span className="text-[48px] font-medium leading-none tracking-[-0.04em] text-[#D9D9D9]">{s.n}</span>
                <span aria-hidden className="hidden h-px flex-1 bg-border md:block" />
              </div>
              <div aria-hidden className="mt-4 h-px bg-border md:hidden" />
              <H3 className="mt-4">{s.title}</H3>
              <p className="mt-2 text-[15px] text-muted-foreground">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>

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
