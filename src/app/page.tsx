import Image from "next/image";
import { HeroSection } from "@/components/section/HeroSection";
import { TopPicksSection } from "@/components/section/TopPicksSection";
import { DiscoverSection } from "@/components/section/DiscoverSection";
import { BentoSection } from "@/components/section/BentoSection";
import { DealsSection } from "@/components/section/DealsSection";
import { BrandSection } from "@/components/section/BrandSection";
export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      {/* Hero */}
      <HeroSection />
      <TopPicksSection />
      <DiscoverSection />
      <DealsSection />
      <BrandSection />
      <BentoSection />
      {/* TODO: Add more sections here, e.g.
          <WhyChooseUsSection />
          <PopularCarsSection />
      */}
    </main>
  );
}