import Image from "next/image";
import { CtaButton } from "@/components/ui/cta-button";
import { Container } from "@/components/ui/section";
import { Eyebrow, H1 } from "@/components/ui/typography";
import { IMG, PARTNERS } from "@/lib/images";

/*
 * Headline-Varianten für einen späteren Test:
 * B: „Ihr Team kennt die Antworten. Wir machen daraus Ihre Strategie.“
 * C: „Ihre Strategie ist gut. Sie kommt nur nicht im Alltag an.“
 */
export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-h" className="relative flex min-h-[max(100svh,680px)] flex-col justify-end overflow-hidden bg-[#191818] text-white">
      <div className="absolute inset-x-0 top-0 h-[62svh] min-h-[420px] md:-top-[9%] md:bottom-0 md:h-auto md:min-h-0">
        <Image
          src={IMG.team}
          alt="Die fünf Partner von upgr8 stehen nebeneinander vor hellem Hintergrund"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_15%] md:object-[center_15%]"
        />
        {/* Navigation lesbar halten */}
        <div aria-hidden className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-black/45 to-transparent" />
        {/* Verlauf von unten nach oben auf den unteren 60 % */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-[60%] bg-linear-to-t from-black/75 via-black/30 to-transparent md:block" />
        {/* Mobil: Bild läuft in den dunklen Grund aus */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#191818] to-transparent md:hidden" />
      </div>

      <Container className="relative pt-[max(48svh,340px)] md:pt-32">
        <div className="max-w-[760px]">
          <Eyebrow>Strategieberatung für den Mittelstand</Eyebrow>
          <H1 id="hero-h" className="mt-5">
            Strategie, die nicht in der Schublade landet.
          </H1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-relaxed text-white/85 md:text-[17px]">
            Wir entwickeln sie gemeinsam mit den Menschen, die sie umsetzen müssen. Für Unternehmen mit 100 bis 1.000 Mitarbeitenden. Klare Prioritäten in Wochen, nicht in Monaten.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CtaButton href="#kontakt" variant="light" data-cta="hero">
              Erstgespräch mit Armin Blassnig buchen
            </CtaButton>
            <a href="#vorgehen" className="text-[15px] font-medium underline-offset-4 hover:underline">
              Wie wir arbeiten ↓
            </a>
          </div>
          <p className="mt-4 text-[14px] text-white/75">30 Minuten · unverbindlich · kein Pitch</p>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/20 py-5 md:mt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex">
              {PARTNERS.map((p, i) => (
                <Image
                  key={p.slug}
                  src={p.color}
                  alt={p.name}
                  width={32}
                  height={32}
                  sizes="32px"
                  className={`size-8 rounded-full border-2 border-[#191818] bg-portrait object-cover ${i ? "-ml-2" : ""}`}
                />
              ))}
            </div>
            <p className="text-[14px] font-medium">5 Partner, die selbst Unternehmen geführt haben</p>
          </div>
          <p className="text-[14px] text-white/80 md:text-right">
            Erfahrung als Vice President bei Apple und Nokia · Partner bei Roland Berger · 20+ Jahre Finanzsektor
          </p>
        </div>
      </Container>
    </section>
  );
}
