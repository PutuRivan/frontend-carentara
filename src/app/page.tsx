import Image from "next/image";
import { HeroSection } from "@/components/section/HeroSection";
import { TopPicksSection } from "@/components/section/TopPicksSection";
import { DiscoverSection } from "@/components/section/DiscoverSection";
export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Hero */}
      <HeroSection />
      <TopPicksSection />
      <DiscoverSection />
      {/* TODO: Add more sections here, e.g.
          <WhyChooseUsSection />
          <PopularCarsSection />
      */}
    </main>
  );
}