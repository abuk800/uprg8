import { Hero } from "@/components/sections/hero";
import { Recognition } from "@/components/sections/recognition";
import { SearchEnd } from "@/components/sections/search-end";
import { BlindSpot } from "@/components/sections/blind-spot";
import { Method } from "@/components/sections/method";
import { Situation } from "@/components/sections/situation";
import { Team } from "@/components/sections/team";
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
        <SearchEnd />
        <BlindSpot />
        <Method />
        <Situation />
        <Team />
        <Risk />
        <Closing />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
