// src/components/cars/detail/Reviews.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface Review {
  id: string;
  author: string;
  rating: number; // 1–5
  date: string;   // ISO string or formatted
  comment: string;
}

const mockReviews: Review[] = [
  {
    id: "r1",
    author: "Alice R.",
    rating: 5,
    date: "2024-05-14",
    comment: "Fantastic ride, smooth handling and luxurious interior!",
  },
  {
    id: "r2",
    author: "Bob K.",
    rating: 4,
    date: "2024-04-22",
    comment: "Great car, but the pickup location was a bit confusing.",
  },
  {
    id: "r3",
    author: "Cindy L.",
    rating: 5,
    date: "2024-03-03",
    comment: "Perfect condition and superb customer service.",
  },
  // …add more as needed
];

export function Reviews() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Reviews</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {mockReviews.map((review) => (
          <motion.div
            key={review.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating ? "text-black" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
