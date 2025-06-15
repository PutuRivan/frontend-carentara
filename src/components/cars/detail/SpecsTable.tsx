// src/components/cars/detail/SpecsTable.tsx
"use client";

import React from "react";
import { Car } from "@/data/sample/mockCars";
import { motion } from "framer-motion";

export function SpecsTable({ car }: { car: Car }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="overflow-x-auto"
    >
      <dl className="grid grid-cols-2 gap-x-8 gap-y-4 bg-white rounded-xl p-6 shadow">
        <div>
          <dt className="text-sm font-medium text-gray-500">Brand</dt>
          <dd className="mt-1 text-gray-900">{car.brand}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Model</dt>
          <dd className="mt-1 text-gray-900">{car.model}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Seats</dt>
          <dd className="mt-1 text-gray-900">{car.seats}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Transmission</dt>
          <dd className="mt-1 text-gray-900">{car.transmission}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Mileage</dt>
          <dd className="mt-1 text-gray-900">{car.mileage} mi/day</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-gray-500">Price</dt>
          <dd className="mt-1 text-gray-900">${car.pricePerDay}/day</dd>
        </div>
      </dl>
    </motion.div>
  );
}
