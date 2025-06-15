// src/components/cars/detail/Gallery.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  // Auto‑advance every 5s (optional)
  useEffect(() => {
    const iv = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(iv);
  }, [count]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px]"
        >
          <Image
            src={images[index]}
            alt={`Car image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={() => setIndex((i) => (i - 1 + count) % count)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setIndex((i) => (i + 1) % count)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
