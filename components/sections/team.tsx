import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { TeamCard } from "@/components/ui/team-card";
import { Reveal } from "@/components/ui/reveal";
import { IMG, PARTNERS } from "@/lib/images";

export function Team() {
  return (
    <Section id="team" aria-labelledby="team-h" className="bg-section">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <Eyebrow>Team</Eyebrow>
        <H2 id="team-h">Unternehmer beraten Unternehmer.</H2>
        <p className="text-[17px] text-muted-foreground">
          Bei uns sitzen keine Junior-Berater am Tisch. Sie arbeiten direkt mit Partnern, die selbst Verantwortung für Strategie und Ergebnisse getragen haben.
        </p>
      </Reveal>

      <div className="-mx-6 mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scroll-padding-inline:1.5rem] md:mx-0 md:mt-16 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:grid-cols-5">
        {PARTNERS.map((p) => (
          <TeamCard key={p.slug} {...p} className="w-[76%] shrink-0 snap-start md:w-auto" />
        ))}
      </div>

      <Reveal className="mt-20 grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-portrait">
          <Image src={IMG.ariane} alt="Dr. Ariane Pfleger, Executive Director der Raiffeisen Landesbank Steiermark" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <figure>
          <blockquote className="text-[28px] font-normal leading-snug tracking-[-0.02em]">
            „Die Zusammenarbeit mit dem upgr8-Team ist sowohl äußerst produktiv als auch wirklich angenehm.“
          </blockquote>
          <figcaption className="mt-6 text-[15px]">
            <strong className="font-medium">Dr. Ariane Pfleger</strong>
            <span className="block text-muted-foreground">Executive Director, Raiffeisen Landesbank Steiermark</span>
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
