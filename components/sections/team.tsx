import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import TailwindImageAccordion from "@/components/ui/tailwind-image-accordion";
import { PARTNERS } from "@/lib/images";

// Station pro Partner vom Kunden einholen
const ITEMS = PARTNERS.map((p) => ({
  id: p.slug,
  url: p.color,
  title: p.name,
  description: p.role,
  alt: `${p.name}, ${p.role}`,
  badge: p.slug === "armin" ? "Führt Ihr Erstgespräch" : undefined,
}));

export function Team() {
  return (
    <Section id="team" aria-labelledby="team-h">
      <Reveal className="flex max-w-2xl flex-col items-start gap-4">
        <Eyebrow>Team</Eyebrow>
        <H2 id="team-h">Unternehmer beraten Unternehmer.</H2>
        <p className="text-[17px] text-muted-foreground">
          Bei uns sitzen keine Junior-Berater am Tisch. Sie arbeiten direkt mit Partnern, die selbst Verantwortung für Strategie und Ergebnisse getragen haben.
        </p>
      </Reveal>

      <Reveal className="mt-14 md:mt-16">
        <TailwindImageAccordion items={ITEMS} />
      </Reveal>
    </Section>
  );
}
