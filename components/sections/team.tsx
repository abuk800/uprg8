import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { PARTNERS } from "@/lib/images";

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

      <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scroll-padding-inline:1.5rem] md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5">
        {PARTNERS.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80} className="w-[76%] shrink-0 snap-start md:w-auto">
            <article>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-portrait">
                <Image
                  src={p.color}
                  alt={`${p.name}, ${p.role}`}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 76vw"
                  className="object-cover object-[center_15%]"
                />
              </div>
              <h3 className="mt-4 text-[18px] font-normal leading-snug">{p.name}</h3>
              {/* Station pro Partner vom Kunden einholen */}
              <p className="text-[14px] text-muted-foreground">{p.role}</p>
              {p.slug === "armin" && (
                <span className="mt-2 inline-flex rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-foreground">Führt Ihr Erstgespräch</span>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
