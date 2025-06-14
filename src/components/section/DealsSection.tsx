// src/components/section/DealsSection.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BadgePercent } from 'lucide-react'
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const promos = [
  {
    id: 1,
    image: "/deals/speedometer.jpg",
    title: "Experience the Holidays with Our Festive Promotions",
    discount: "40%",
    valid: "12 Jan - 19 Jan 2024",
  },
  {
    id: 2,
    image: "/deals/car-engine.jpg",
    title: "Unlock Online-Only Discounts for a Seamless Booking Experience",
    discount: "65%",
    valid: "8 Jan - 22 Jan 2024",
  },
];

export function DealsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    containerRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="max-w-9/10 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Enjoy extra miles with our best deal</h2>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => scroll(300)}
        >
          See All
          <ChevronRightIcon size={16} />
        </Button>
      </div>

      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 space-x-6 overflow-x-auto auto-cols-max snap-x snap-mandatory"
      >
        {promos.map((p) => (
          <motion.div
            key={p.id}
            className="min-w-[640px] snap-start flex-shrink-0 relative rounded-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: p.id * 0.2 }}
          >
            <Image
              src={p.image}
              alt={p.title}
              width={600}
              height={350}
              className="object-cover h-48 w-full"
            />
            <div className="absolute inset-0 bg-black/30 p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div>
                  <BadgePercent color="#facc15" />
                </div>
                <span className="text-sm font-semibold text-white">{`Valid only on ${p.valid}`}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-4xl font-bold text-white">{p.discount}</p>
                <p className="text-sm text-white mt-1">*with Terms and Conditions</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
