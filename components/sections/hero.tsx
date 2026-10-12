import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CtaButton } from "@/components/ui/cta-button";
import { Container } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/typography";
import { IMG, PARTNERS } from "@/lib/images";

/*
 * Headline-Varianten für einen späteren Test:
 * B: „Ihr Team kennt die Antworten. Wir machen daraus Ihre Strategie.“
 * C: „Ihre Strategie ist gut. Sie kommt nur nicht im Alltag an.“
 */

/** Inline-Pille in der Headline: fünf überlappende Porträts. Unter 768 px ausgeblendet. */
function AvatarPill() {
  return (
    <span
      aria-hidden
      className="mx-[0.12em] hidden h-[0.8em] items-center rounded-full border border-border bg-white px-[0.08em] align-[-0.05em] md:inline-flex"
    >
      {PARTNERS.map((p, i) => (
        <Image
          key={p.slug}
          src={p.color}
          alt=""
          width={96}
          height={96}
          sizes="96px"
          className={`size-[0.62em] rounded-full border-[0.03em] border-white bg-portrait object-cover ${i ? "-ml-[0.2em]" : ""}`}
        />
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-h" className="bg-section pb-16 pt-[calc(72px+4rem)] md:pt-[calc(72px+6rem)]">
      <Container>
        <div className="max-w-[1150px]">
          <Eyebrow>Strategieberatung für den Mittelstand</Eyebrow>
          <h1
            id="hero-h"
            className="mt-6 text-[44px] font-medium leading-none tracking-[-0.045em] md:text-[64px] lg:text-[96px]"
          >
            Strategie, die nicht <AvatarPill /> in der Schublade landet.
          </h1>
        </div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* Links: Conversion-Spalte */}
          <div className="contents lg:col-span-4 lg:flex lg:flex-col lg:justify-end">
            <div className="order-1 lg:order-none">
              <p className="text-[18px] text-muted-foreground">
                Wir entwickeln sie gemeinsam mit den Menschen, die sie umsetzen müssen. Für Unternehmen mit 100 bis 1.000 Mitarbeitenden. Klare Prioritäten in Wochen, nicht in Monaten.
              </p>
              <CtaButton href="#kontakt" data-cta="hero" className="mt-8">
                Erstgespräch mit Armin Blassnig buchen
              </CtaButton>
              <p className="mt-4 text-[14px] text-muted-foreground">30 Minuten · unverbindlich · kein Pitch</p>
            </div>
            <div className="order-3 border-t border-border pt-6 lg:order-none lg:mt-8">
              <p className="text-[15px] font-medium">Fünf Partner. Keine Junior-Berater.</p>
              <p className="mt-1 text-[14px] text-muted-foreground">
                Erfahrung als Vice President bei Apple und Nokia, als Partner bei Roland Berger und aus 20+ Jahren im Finanzsektor.
              </p>
            </div>
          </div>

          {/* Rechts: gerahmtes Teamfoto */}
          <div className="relative order-2 lg:order-none lg:col-span-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-portrait md:aspect-[2/1]">
              <Image
                src={IMG.team}
                alt="Die fünf Partner von upgr8 stehen nebeneinander vor hellem Hintergrund"
                fill
                priority
                sizes="(min-width:768px) 66vw, 100vw"
                className="animate-hero-zoom object-cover object-[center_25%]"
              />
              <p className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-2xl bg-white/70 px-4 py-2 text-[13px] leading-snug text-foreground backdrop-blur md:rounded-full">
                {PARTNERS.map((p) => p.name).join(" · ")}
              </p>
            </div>

            {/* Schwebende Karte: Desktop überlappt den Bildrand, mobil im Fluss */}
            <div className="mt-4 w-full max-w-[260px] rounded-2xl bg-white p-5 shadow-[0_12px_40px_rgba(0,0,0,.08)] lg:absolute lg:-left-12 lg:top-[22%] lg:mt-0 lg:w-[260px]">
              <p className="text-[12px] text-muted-foreground">Erfahrung aus Projekten mit</p>
              <p className="mt-2 text-[15px] leading-snug">
                Raiffeisen · Agrana · Daimler
                <br />
                Mercedes-Benz · Airbus · Beneo
              </p>
              <a href="#team" className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium">
                Team kennenlernen <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
