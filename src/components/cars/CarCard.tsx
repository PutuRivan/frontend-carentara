// src/components/cars/CarCard.tsx
"use client";

import { Car } from "@/data/sample/mockCars";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Cog, CircleGauge } from "lucide-react";

export function CarCard({ car }: { car: Car }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={car.imageUrl}
            alt={`${car.brand} ${car.model}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-1">
            {car.brand} {car.model}
          </h3>
          <div className="flex items-center text-sm text-gray-600 gap-4 mb-3">
            <div className="flex items-center gap-1">
              <Users size={16} /> {car.seats}
            </div>
            <div className="flex items-center gap-1">
              <Cog size={16} /> {car.transmission}
            </div>
            <div className="flex items-center gap-1">
              <CircleGauge size={16} /> {car.mileage} mi/day
            </div>
          </div>
          <p className="text-xl font-bold">${car.pricePerDay}/day</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
