import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";
import ScrollTimeline from "@/components/ui/scroll-timeline";

const STEPS = [
  "Sie schildern Ihre Situation, 30 Minuten, per Video oder Telefon.",
  "Wir stellen die Fragen, die zählen.",
  "Sie wissen danach, ob und wie wir helfen können, und in welchem Kostenrahmen.",
];

const FAQ = [
  { q: "Wir sind kein Konzern. Passt das?", a: "Genau dafür sind wir da. In Unternehmen mit 100 bis 1.000 Mitarbeitenden wirkt unser Ansatz besonders schnell, weil die Wege kurz sind." },
  { q: "Wecken wir damit nicht Erwartungen, die wir nicht erfüllen können?", a: "Nein. Wir klären von Anfang an, worüber mitgedacht wird und was gesetzt ist. Ihre Leute geben Input, Sie entscheiden. Das schafft Vertrauen statt Enttäuschung." },
  { q: "Wie viel Zeit kostet das mein Team?", a: "Wir planen den Aufwand so, dass er neben dem Tagesgeschäft funktioniert. [Richtwert]" },
  { q: "Wer entscheidet am Ende?", a: "Sie. Ihre Leute denken mit, die Entscheidung bleibt bei Ihnen." },
  { q: "Was, wenn mein Team nicht mitzieht?", a: "Genau deshalb binden wir es von Anfang an ein. Wer mitgedacht hat, zieht mit." },
  // Preislogik mit dem Kunden bestätigen
  { q: "Was kostet das?", a: "Sie erhalten vor dem Start einen klaren Rahmen für Umfang, Dauer und Investition. Keine offenen Beratertage." },
];

export function Risk() {
  return (
    <>
      <Section id="ablauf" aria-labelledby="risk-h" className="border-t border-border">
        <Reveal className="max-w-3xl">
          <Eyebrow>Ihr erster Schritt</Eyebrow>
          <H2 id="risk-h" className="mt-5">
            So läuft das Erstgespräch
          </H2>
        </Reveal>

        <ScrollTimeline
          className="mt-12 md:mt-16"
          steps={STEPS.map((text, i) => ({ id: `step-${i}`, label: `0${i + 1}`, text }))}
        />

        <Reveal className="mt-12">
          <p className="inline-flex items-center gap-3 rounded-full bg-muted px-5 py-3 text-[15px] font-medium">
            <ShieldCheck className="size-5 shrink-0" aria-hidden />
            Kein Pitch, keine Folien, keine Verpflichtung.
          </p>
        </Reveal>
      </Section>

      <Section id="faq" aria-labelledby="faq-h" className="bg-section" innerClassName="grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <H2 id="faq-h">Häufige Fragen</H2>
        </Reveal>
        <Reveal delay={100} className="md:col-span-8">
          <Accordion type="single" collapsible defaultValue="faq-0">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </Section>
    </>
  );
}
