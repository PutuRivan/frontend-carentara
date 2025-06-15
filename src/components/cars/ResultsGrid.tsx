// src/components/cars/ResultsGrid.tsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { CarCard } from "./CarCard";
import { Car, mockCars } from "@/data/sample/mockCars";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "@/components/ui/selfmade/spinner"; // assume you have a Spinner component

function fetchCars(offset: number, pageSize: number): Promise<Car[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCars.slice(offset, offset + pageSize));
    }, 800);
  });
}

export function ResultsGrid() {
  const PAGE_SIZE = 6;
  const [cars, setCars] = useState<Car[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Load one page
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const next = await fetchCars(offset, PAGE_SIZE);
    setCars((prev) => [...prev, ...next]);
    setOffset((prev) => prev + next.length);
    if (next.length < PAGE_SIZE) setHasMore(false);
    setLoading(false);
  }, [offset, loading, hasMore]);

  // Initial load
  useEffect(() => {
    loadMore();
  }, []);

  // Intersection Observer to trigger loadMore
  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: "200px" }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [loadMore, hasMore]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* 1. Results Header */}
      <h2 className="text-xl font-semibold mb-4">
        {loading && cars.length === 0
          ? "Loading results…"
          : cars.length > 0
          ? `Showing ${cars.length} result${cars.length > 1 ? "s" : ""}`
          : "No cars found"}
      </h2>

      {/* 2. Empty State */}
      {!loading && cars.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          Sorry, no cars match your search. Try removing some filters.
        </p>
      )}

      {/* 3. Grid of Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <AnimatePresence>
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 4. Sentinel for infinite scroll */}
      <div ref={sentinelRef} />

      {/* 5. Loading Indicator */}
      {loading && cars.length > 0 && (
        <div className="flex justify-center py-6">
          <Spinner size="lg" />
        </div>
      )}
    </div>
  );
}
