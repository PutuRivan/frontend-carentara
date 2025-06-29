// src/components/cars/detail/BookingForm.tsx
"use client";

import React, { useState, useMemo } from "react";
import { Car } from "@/data/sample/mockCars";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function BookingForm({ car }: { car: Car }) {
  const router = useRouter();
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Calculate rental days
  const days = useMemo(() => {
    if (!start || !end) return 1;
    const d1 = new Date(start),
          d2 = new Date(end);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [start, end]);

  const total = useMemo(() => days * car.pricePerDay, [days, car.pricePerDay]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Route to Step 2 (Rent Details), passing dates
    router.push(
      `/cars/${car.id}/rent?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`
    );
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 bg-white rounded-xl p-6 shadow"
    >
      {/* Step Indicator */}
      <div className="text-sm text-gray-600">Step <span className="font-semibold">1</span> of 3: Select Dates</div>

      <h2 className="text-xl font-semibold">Book This Car</h2>

      {/* Start Date */}
      <div>
        <label className="block text-sm font-medium mb-1">Start Date</label>
        <div className="relative">
          <Input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="pl-10"
            required
          />
          <CalendarIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* End Date */}
      <div>
        <label className="block text-sm font-medium mb-1">End Date</label>
        <div className="relative">
          <Input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="pl-10"
            required
          />
          <CalendarIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
      </div>

      {/* Total Price */}
      <div className="text-lg font-semibold">
        Total: <span className="text-accent">${total}</span>
      </div>

      <Button type="submit" className="w-full">
        Proceed to Rent
      </Button>
    </motion.form>
  );
}
