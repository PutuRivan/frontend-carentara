// components/PopularRentalsMarquee.tsx
"use client";

import Marquee from "@/components/animata/marquee";
import { Tag } from "@/components/ui/tag"; // your ShadcnUI Tag component
import { motion } from "framer-motion";
import React from "react";

const CITIES1 = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Medan",
  "Semarang",
  "Yogyakarta",
  "Makassar",
  "Palembang",
];

const CITIES2 = [
  "Denpasar",
  "Padang",
  "Balikpapan",
  "Manado",
  "Batam",
  "Pekanbaru",
  "Banjarmasin",
  "Malang",
];

const CITIES3 = [
  "Samarinda",
  "Tangerang",
  "Pontianak",
  "Bandar Lampung",
  "Jayapura",
  "Mataram",
  "Kendari",
  "Cirebon",
];

const CITIES4 = [
  "Samarinda",
  "Tangerang",
  "Pontianak",
  "Bandar Lampung",
  "Jayapura",
  "Mataram",
  "Kendari",
  "Cirebon",
];

export function DiscoverSection() {
  return (
    <section className="py-6 px-24 overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6">
        Discover popular car rental worldwide
      </h2>
      <p className="text-gray-600 mb-8">
        Explore a diverse and extensive range of rental cars.
      </p>

      {/* Animata marquee: multiple lines, auto-repeat */}
      <Marquee /* tweak to taste */>
        {Array.from({ length: 2 }).map((_, row) => (
          <motion.div
            key={row}
            className="flex space-x-4"
            // optional: sync rows with slight offset
            animate={{ x: row % 2 === 0 ? [0, -200] : [-200, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {CITIES1.map((city) => (
              <Tag key={`${city}-${row}`} variant="outline">
                Car Rental in {city}
              </Tag>
            ))}
          </motion.div>
        ))}
      </Marquee>
      <Marquee reverse /* tweak to taste */>
        {Array.from({ length: 2 }).map((_, row) => (
          <motion.div
            key={row}
            className="flex space-x-4"
            // optional: sync rows with slight offset
            animate={{ x: row % 2 === 0 ? [-200, 0] : [0, 200] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {CITIES2.map((city) => (
              <Tag key={`${city}-${row}`} variant="outline">
                Car Rental in {city}
              </Tag>
            ))}
          </motion.div>
        ))}
      </Marquee>
      <Marquee /* tweak to taste */>
        {Array.from({ length: 2 }).map((_, row) => (
          <motion.div
            key={row}
            className="flex space-x-4"
            // optional: sync rows with slight offset
            animate={{ x: row % 2 === 0 ? [0, -200] : [-200, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {CITIES3.map((city) => (
              <Tag key={`${city}-${row}`} variant="outline">
                Car Rental in {city}
              </Tag>
            ))}
          </motion.div>
        ))}
      </Marquee>
      <Marquee reverse /* tweak to taste */>
        {Array.from({ length: 2 }).map((_, row) => (
          <motion.div
            key={row}
            className="flex space-x-4"
            // optional: sync rows with slight offset
            animate={{ x: row % 2 === 0 ? [-200, 0] : [0, 200] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
          >
            {CITIES4.map((city) => (
              <Tag key={`${city}-${row}`} variant="outline">
                Car Rental in {city}
              </Tag>
            ))}
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}
