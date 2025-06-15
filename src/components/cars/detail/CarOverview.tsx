// src/components/cars/detail/CarOverview.tsx
"use client";

import React from "react";
import { Car } from "@/data/sample/mockCars";
import { motion } from "framer-motion";
import { Users, Cog, CircleGauge, Calendar } from "lucide-react";

export function CarOverview({ car }: { car: Car }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-3xl font-bold">
        {car.brand} {car.model}
      </h1>
      <p className="text-xl text-black font-semibold">
        ${car.pricePerDay}/day
      </p>
      <p className="text-gray-700">
        {/** Placeholder description; swap with `car.description` if available */}
        Experience the perfect blend of performance and comfort in this premium
        vehicle.
      </p>

      <div className="flex flex-wrap gap-4 text-gray-600">
        <Badge icon={Users} label={`${car.seats} seats`} />
        <Badge icon={Cog} label={car.transmission} />
        <Badge icon={CircleGauge} label={`${car.mileage} mi/day`} />
        <Badge icon={Calendar} label={`Since ${car.id}`} />
      </div>
    </motion.div>
  );

  // Helper Badge component
  function Badge({
    icon: Icon,
    label,
  }: {
    icon: React.ElementType;
    label: string;
  }) {
    return (
      <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-sm">
        <Icon size={16} />
        <span>{label}</span>
      </div>
    );
  }
}
