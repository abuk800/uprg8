import Image from "next/image"
import { ArrowUpRight, Sparkle } from "lucide-react"
import { MobileMenu } from "@/components/sections/mobile-menu"

/*
 * Headline-Varianten für einen späteren Test:
 * B: „Ihr Team kennt die Antworten. Wir machen daraus Ihre Strategie.“
 * C: „Ihre Strategie ist gut. Sie kommt nur nicht im Alltag an.“
 */

const IMG = "https://upgr8.org/wp-content/uploads/"

const facts = [
  { label: "Partner statt Junior-Berater", value: "5 Partner mit eigener Führungsverantwortung" },
  { label: "Konzernerfahrung", value: "Apple · Nokia · Roland Berger" },
  { label: "Branchenerfahrung", value: "20+ Jahre Finanzsektor" },
  { label: "Projekte u. a. mit", value: "Raps · Blue Tomato · Raiffeisen" },
]

export function Hero() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E7E7EA] bg-[#FBFAF9]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
          <a href="/" aria-label="upgr8 Startseite">
            <img src={`${IMG}2025/05/Upgr8-Logo_Schwarz_Ohne_Rand.svg`} alt="upgr8" className="h-7 w-auto" />
          </a>
          <nav className="hidden gap-9 text-[15px] text-[#191818]/80 md:flex">
            <a href="#situation" className="hover:text-[#191818]">Ihre Situation</a>
            <a href="#vorgehen" className="hover:text-[#191818]">Vorgehen</a>
            <a href="#team" className="hover:text-[#191818]">Team</a>
            <a href="#faq" className="hover:text-[#191818]">FAQ</a>
          </nav>
          <a href="#kontakt" data-cta="nav"
            className="hidden rounded-full border border-[#191818]/20 px-5 py-2.5 text-[14px] font-medium transition-colors hover:border-[#191818] md:inline-flex">
            Kontakt
          </a>
          <MobileMenu />
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-[880px] text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E7E7EA] bg-white px-4 py-1.5 text-[13px] text-[#5C5B5A]">
            <Sparkle className="size-3 fill-current" aria-hidden />
            Strategieberatung für den Mittelstand
          </p>
          <h1 className="mt-7 text-[42px] font-medium leading-[1.04] tracking-[-0.045em] md:text-[72px]">
            Strategie, die nicht<br />in der Schublade landet.
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-relaxed text-[#5C5B5A] md:text-[19px]">
            Wir entwickeln sie mit den Menschen, die sie umsetzen müssen. Für Mittelständler mit 100 bis 1.000 Mitarbeitenden.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href="#kontakt" data-cta="hero"
              className="group inline-flex items-center gap-3 rounded-full bg-[#191818] py-2 pl-7 pr-2 text-[16px] font-medium text-white">
              Erstgespräch buchen
              <span className="grid size-10 place-items-center rounded-full bg-[#FF6978] text-black transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </a>
            <p className="text-[14px] text-[#5C5B5A]">30 Minuten mit Armin Blassnig, Geschäftsführer · unverbindlich</p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] bg-[#ECEBE9] md:mt-20">
          <Image
            src={`${IMG}2025/09/Team1.jpeg`}
            alt="Die fünf Partner von upgr8: Armin Blassnig, Maximilian Kammerer, David Rohrmann, Daniel Deuring und David Kreiner"
            width={2400} height={855} priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="aspect-[2.2/1] w-full object-cover object-[50%_20%] md:aspect-[2.8/1]"
          />
        </div>

        <p className="mt-3 text-[13px] text-[#5C5B5A]">
          v. l. n. r.: Maximilian Kammerer · Armin Blassnig · Daniel Deuring · David Rohrmann · David Kreiner
          {/* Reihenfolge vom Kunden bestätigen lassen */}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-y-8 text-center md:grid-cols-4 md:divide-x md:divide-[#E7E7EA] md:text-left">
          {facts.map((f, i) => (
            <div key={f.value} className={i === 0 ? "md:pr-8" : "md:px-8"}>
              <dt className="text-[13px] text-[#5C5B5A]">{f.label}</dt>
              <dd className="mt-1.5 text-[18px] font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
