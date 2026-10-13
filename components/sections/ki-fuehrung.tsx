import { Brain, Network } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

// Beschreibungstexte vom Kunden einholen, hier stehen nur Platzhalter
const POINTS = [
  { icon: Network, title: "KI ganzheitlich im Unternehmen", text: "[Beschreibung]" },
  { icon: Brain, title: "KI im Kopf jeder Führungskraft", text: "[Beschreibung]" },
];

/** „KI ist ein Führungsthema“: zwei Ebenen, links die Aussage, rechts zwei Karten (Hover wird schwarz wie bei „Warum nicht“). */
export function KiFuehrung() {
  return (
    <Section id="ki" aria-labelledby="ki-h" className="border-t border-border" innerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className="lg:col-span-5">
        <Eyebrow>Künstliche Intelligenz</Eyebrow>
        <H2 id="ki-h" className="mt-5 md:text-[56px]">
          <span className="text-[#8C8B89]">KI ist ein</span>
          <br />
          Führungsthema.
        </H2>
      </Reveal>

      <ul className="grid gap-4 lg:col-span-7">
        {POINTS.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <Reveal delay={i * 100}>
              <article className="group flex flex-col gap-6 rounded-2xl bg-muted p-6 transition-colors duration-300 hover:bg-foreground hover:text-white md:flex-row md:items-start md:gap-8 md:p-9">
                <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                  <span
                    aria-hidden
                    className="grid size-12 shrink-0 place-items-center border-t border-l bg-background transition-colors duration-300 group-hover:border-white/40 group-hover:bg-foreground group-hover:text-white"
                  >
                    <Icon className="size-6" strokeWidth={1} />
                  </span>
                  <span className="text-[14px] tabular-nums text-muted-foreground transition-colors duration-300 group-hover:text-white/70">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-[24px] font-medium leading-tight tracking-[-0.03em] md:text-[30px]">{title}</h3>
                  <p className="mt-3 text-[16px] text-muted-foreground transition-colors duration-300 group-hover:text-white/80">{text}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
