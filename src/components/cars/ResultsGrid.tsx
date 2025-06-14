// src/components/cars/ResultsGrid.tsx
"use client";

import { mockCars } from "@/data/sample/mockCars";
import { CarCard } from "./CarCard";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export function ResultsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-8 max-w-7xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {mockCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
