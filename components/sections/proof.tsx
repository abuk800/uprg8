import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { IMG } from "@/lib/images";

const PROJECTS = [
  { company: "Raps", project: "Wachstumsstrategie" },
  { company: "Blue Tomato", project: "Recovery Strategy" },
  { company: "Agrana", project: "Strategieentwicklung" },
  { company: "Raiffeisen-Bankengruppe Steiermark", project: "Whole System Change" },
];

export function Proof() {
  return (
    <Section id="ergebnisse" aria-labelledby="proof-h" className="bg-section">
      <Reveal className="max-w-3xl">
        <Eyebrow>Ergebnisse</Eyebrow>
        <H2 id="proof-h" className="mt-5">
          Wo wir das schon gemacht haben.
        </H2>
      </Reveal>

      <Reveal className="mt-12 grid items-center gap-8 md:mt-16 md:grid-cols-2 md:gap-14">
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

      {/* Für die finale Seite: je ein Ergebnis in einer Zahl vom Kunden einholen */}
      <div className="mt-16 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.company} delay={i * 80} className="h-full">
            <article className="flex h-full min-h-[200px] flex-col rounded-2xl bg-white p-5 md:p-6">
              <h3 className="text-[18px] font-medium leading-snug tracking-[-0.01em] md:text-[20px]">{p.company}</h3>
              <p className="mt-1 text-[15px] text-muted-foreground">{p.project}</p>
              <a href="#" className="mt-auto pt-6 text-[14px] font-medium underline-offset-4 hover:underline">
                Fallstudie ansehen →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
