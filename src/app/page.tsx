"use client";

import { TopPicksSection } from "@/components/section/TopPicksSection";
import { DiscoverSection } from "@/components/section/DiscoverSection";
import { BentoSection } from "@/components/section/BentoSection";
import { DealsSection } from "@/components/section/DealsSection";
import { BrandSection } from "@/components/section/BrandSection";
import { HeroSection } from "@/components/section/HeroSection";
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from "next/navigation";

export default function Home() {
  const path = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={path}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="flex-1"
      >
        <HeroSection />
        <TopPicksSection />
        <DiscoverSection />
        <DealsSection />
        <BrandSection />
        <BentoSection />
      </motion.main>
    </AnimatePresence>

  );
}