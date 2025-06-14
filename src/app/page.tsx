"use client";

import Image from "next/image";
import { TopPicksSection } from "@/components/section/TopPicksSection";
import { DiscoverSection } from "@/components/section/DiscoverSection";
import { BentoSection } from "@/components/section/BentoSection";
import { DealsSection } from "@/components/section/DealsSection";
import { BrandSection } from "@/components/section/BrandSection";
import { HeroSection } from "@/components/section/HeroSection";
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname()
  return (
    <main className="flex flex-col gap-16">
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