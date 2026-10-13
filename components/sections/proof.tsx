import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { IMG } from "@/lib/images";

const BASE = "https://upgr8.org/wp-content/uploads/2025/05/";
const K = 1.4; // Skalierung gegenüber der 120×44-Box

/*
 * Die Logo-Dateien liegen auf quadratischen Flächen mit viel Rand.
 * size/left/top (für 120×44) schneiden das Logo passend zu, K vergrößert es.
 * opaque: Dateien mit weißem Hintergrund.
 */
const REFERENCES = [
  { name: "Daimler", project: "Leadership 2020 Design and Deployment", file: "Daimler_AG-logo.png", size: 127, left: -4, top: -42 },
  { name: "Blue-Tomato", project: "Recovery Strategy", file: "Blue-Tomato.-logo-1.png", size: 118, left: 1, top: -33 },
  { name: "Beneo", project: "Commercial Growth Strategy", file: "beneo.png", size: 126, left: -3, top: -37 },
  { name: "Mercedes-Benz", project: "Global Services and Parts Strategy", file: "Mercedes-Logo-1.png", size: 91, left: 14, top: -23 },
  { name: "Raps", project: "Growth Strategy", file: "Raps-logo.jpg", size: 91, left: 14, top: -24, opaque: true },
  { name: "Raiffeisen-Bankengruppe Steiermark", project: "Whole System Change", file: "Giebelkreuz_-RGB-2c-1.png", size: 115, left: 3, top: -36 },
  { name: "Agrana", project: "Global Leadership Learning Journey Strategy Development", file: "Agrana-Logo.png", size: 44, left: 40, top: 0, opaque: true },
  { name: "Premium Aerotec", project: "High Performance Culture Development", file: "Airbus-logo.png", size: 127, left: -4, top: -42 },
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
      <div className="relative left-1/2 mt-20 w-screen -translate-x-1/2 md:mt-24">
        <Marquee duration={50} pauseOnHover fadeAmount={8}>
          {REFERENCES.map((r) => (
            <figure key={r.name} className="flex w-[300px] shrink-0 flex-col items-center px-4 text-center md:w-[360px]">
              <div className="relative isolate h-[62px] w-[168px] overflow-hidden bg-section">
                <Image
                  src={BASE + r.file}
                  alt={`Logo ${r.name}`}
                  width={Math.round(r.size * K)}
                  height={Math.round(r.size * K)}
                  sizes="180px"
                  className={cn("absolute max-w-none mix-blend-multiply", r.opaque ? "grayscale contrast-150" : "grayscale brightness-[.55]")}
                  style={{ left: r.left * K, top: r.top * K }}
                />
              </div>
              <figcaption className="mt-8">
                <p className="text-[15px] uppercase tracking-[0.02em]">{r.name}</p>
                <p className="mt-2 text-[13px] leading-snug text-muted-foreground">{r.project}</p>
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </Section>
  );
}
