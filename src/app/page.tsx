"use client";

import Image from "next/image";
import { HeroSection } from "@/components/section/HeroSection";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from 'framer-motion';

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
        className="flex-1 flex flex-col gap-16"
      >
        <HeroSection />
      </motion.main>
    </AnimatePresence>

  );
}
