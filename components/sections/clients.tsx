import { Container } from "@/components/ui/section";

const CLIENTS = ["Raiffeisen", "Agrana", "Airbus", "Daimler", "Mercedes-Benz", "Beneo", "Blue Tomato", "Raps"];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-12 pr-12 md:justify-between md:pr-0">
      {CLIENTS.map((c) => (
        <li key={c} className="whitespace-nowrap text-[18px] text-muted-foreground">
          {c}
        </li>
      ))}
    </ul>
  );
}

export function Clients() {
  return (
    <section aria-label="Kunden" className="py-10">
      <Container>
        <p className="text-center text-[14px] text-muted-foreground">Erfahrung unserer Partner aus Projekten mit</p>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] md:[mask-image:none]">
          <div className="group flex w-max animate-marquee hover:[animation-play-state:paused] md:w-full md:animate-none">
            <Row />
            <div className="md:hidden">
              <Row hidden />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
