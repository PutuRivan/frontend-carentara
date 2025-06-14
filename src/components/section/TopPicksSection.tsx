"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Car, User, Star, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Enhanced sample data for top picks
const topPicks = [
  {
    id: "1",
    name: "Toyota Yaris",
    image: "/cars/car sample.jpg",
    category: "Hatchback",
    transmission: "Automatic/Manual",
    seats: 3,
    doors: 1,
    rating: 4.7,
    pricePerDay: 70,
  },
  {
    id: "2",
    name: "Alphard",
    image: "/cars/car sample.jpg",
    category: "Minivan",
    transmission: "Automatic",
    seats: 5,
    doors: 2,
    rating: 4.8,
    pricePerDay: 95,
  },
  {
    id: "3",
    name: "Lexus NX - 300",
    image: "/cars/car sample.jpg",
    category: "SUV",
    transmission: "Automatic",
    seats: 3,
    doors: 2,
    rating: 4.7,
    pricePerDay: 88,
  },
  {
    id: "4",
    name: "Camry",
    image: "/cars/car sample.jpg",
    category: "Sedan",
    transmission: "Automatic",
    seats: 3,
    doors: 2,
    rating: 4.9,
    pricePerDay: 50,
  },
  {
    id: "5",
    name: "Toyota Yaris",
    image: "/cars/car sample.jpg",
    category: "Hatchback",
    transmission: "Automatic/Manual",
    seats: 3,
    doors: 1,
    rating: 4.7,
    pricePerDay: 70,
  },
  {
    id: "6",
    name: "Alphard",
    image: "/cars/car sample.jpg",
    category: "Minivan",
    transmission: "Automatic",
    seats: 5,
    doors: 2,
    rating: 4.8,
    pricePerDay: 95,
  },
  {
    id: "7",
    name: "Lexus NX - 300",
    image: "/cars/car sample.jpg",
    category: "SUV",
    transmission: "Automatic",
    seats: 3,
    doors: 2,
    rating: 4.7,
    pricePerDay: 88,
  },
  {
    id: "8",
    name: "Camry",
    image: "/cars/car sample.jpg",
    category: "Sedan",
    transmission: "Automatic",
    seats: 3,
    doors: 2,
    rating: 4.9,
    pricePerDay: 50,
  },
];

// Framer Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export function TopPicksSection() {
  return (
    <section className="max-w-9/10 mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-start">
        Top picks vehicle this month
      </h2>
      <p className="text-start text-gray-600 mb-8">
        Experience the epitome of amazing journey with our top picks.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {topPicks.map((car) => (
          <motion.div key={car.id} variants={item}>
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              {/* Category badge */}
              <span className="absolute top-3 left-3 bg-white/80 text-gray-800 text-xs font-medium px-2 py-1 rounded-full shadow">
                {car.category}
              </span>
              <CardHeader className="p-0 pt-5">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <h3 className="text-lg font-semibold mb-1">{car.name}</h3>

                {/* Specs row */}
                <div className="flex items-center text-sm text-gray-600 space-x-4 mb-3">
                  <div className="flex items-center">
                    <Settings2 className="mr-1 w-4 h-4" /> {car.transmission}
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 w-4 h-4" /> {car.seats}
                  </div>
                  <div className="flex items-center">
                    <Car className="mr-1 w-4 h-4" /> {car.doors}
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 w-4 h-4 text-yellow-500" />{" "}
                    {car.rating}
                  </div>
                </div>

                {/* Pricing */}
                <p className="text-xs text-gray-500 uppercase">Start from</p>
                <p className="text-xl font-bold mt-1">
                  ${car.pricePerDay} / day
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <Button variant="outline">
          <Link href="/cars">
            See More
          </Link>
        </Button>
      </div>
    </section>
  );
}
