import { Hero } from "@/components/sections/hero";
import { Recognition } from "@/components/sections/recognition";
import { BlindSpot } from "@/components/sections/blind-spot";
import { Method } from "@/components/sections/method";
import { BeforeAfter } from "@/components/sections/before-after";
import { Proof } from "@/components/sections/proof";
import { Team } from "@/components/sections/team";
import { SearchEnd } from "@/components/sections/search-end";
import { KiFuehrung } from "@/components/sections/ki-fuehrung";
import { Risk } from "@/components/sections/risk";
import { Closing } from "@/components/sections/closing";
import { Footer } from "@/components/sections/footer";
import { MobileBar } from "@/components/sections/mobile-bar";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Recognition />
        <BlindSpot />
        <Method />
        <BeforeAfter />
        <Proof />
        <Team />
        <SearchEnd />
        <KiFuehrung />
        <Risk />
        <Closing />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
