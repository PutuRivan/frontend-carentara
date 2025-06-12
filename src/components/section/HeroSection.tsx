"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import DecryptedText from "@/components/react-bits/TextAnimations/DecryptedText/DecryptedText";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function HeroSection() {
  return (
    <section className="relative h-[480px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero_section1.jpg"
        alt="Car on the road"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center max-w-3xl px-6 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold text-white">
            <DecryptedText text="Rent a Car for Every Journey" speed={0.3} />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-gray-200">
            Flexible, reliable car rentals—wherever life takes you.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            variant="ghost"
            asChild
            size="lg"
            className="max-w-full mt-12 pointer-events-auto"
          >
            <a href="" className="text-neutral-50">
              Rent Now
              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
