import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, H2, H3 } from "@/components/ui/typography";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  "Sie schildern Ihre Situation, 30 Minuten, per Video oder Telefon.",
  "Wir stellen die Fragen, die zählen.",
  "Sie wissen danach, ob und wie wir helfen können, und in welchem Kostenrahmen.",
];

const FAQ = [
  { q: "Wir sind kein Konzern. Passt das?", a: "Genau dafür sind wir da. In Unternehmen mit 100 bis 1.000 Mitarbeitenden wirkt unser Ansatz besonders schnell, weil die Wege kurz sind." },
  { q: "Wie viel Zeit kostet das mein Team?", a: "Wir planen den Aufwand so, dass er neben dem Tagesgeschäft funktioniert. [Richtwert]" },
  { q: "Wer entscheidet am Ende?", a: "Sie. Ihre Leute denken mit, die Entscheidung bleibt bei Ihnen." },
  { q: "Was, wenn mein Team nicht mitzieht?", a: "Genau deshalb binden wir es von Anfang an ein. Wer mitgedacht hat, zieht mit." },
  { q: "Was kostet das?", a: "Das hängt vom Umfang ab. Im Erstgespräch nennen wir Ihnen einen klaren Rahmen, bevor Sie sich entscheiden." },
];

export function Risk() {
  return (
    <Section id="faq" aria-labelledby="risk-h" innerClassName="grid gap-14 md:grid-cols-2 md:gap-16">
      <Reveal>
        <Eyebrow>Erstgespräch</Eyebrow>
        <H2 id="risk-h" className="mt-5">
          So läuft das Erstgespräch
        </H2>
        <ol className="mt-10 space-y-6">
          {STEPS.map((s, i) => (
            <li key={s} className="flex gap-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-[14px] font-medium">{i + 1}</span>
              <p className="pt-1 text-[16px]">{s}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 flex items-center gap-3 rounded-lg bg-muted p-4 text-[15px] font-medium">
          <ShieldCheck className="size-5 shrink-0" aria-hidden />
          Kein Pitch, keine Folien, keine Verpflichtung.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <H3 className="mb-4 text-[24px]">Häufige Fragen</H3>
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
  );
}
