// src/components/cars/SearchBar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";

// Sample options — replace with real data or API fetch
const BRANDS = ["Any", "Toyota", "Honda", "Ford", "BMW", "Tesla"];
const MODELS = {
  Any: ["Any"],
  Toyota: ["Corolla", "Camry", "RAV4"],
  Honda: ["Civic", "Accord", "CR‑V"],
  Ford: ["Focus", "Mustang", "Explorer"],
  BMW: ["3 Series", "5 Series", "X5"],
  Tesla: ["Model 3", "Model S", "Model X"],
};

export function SearchBar() {
  const [brand, setBrand] = useState("Any");
  const [modelOptions, setModelOptions] = useState<string[]>(MODELS["Any"]);
  const [model, setModel] = useState("Any");
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  // Update models when brand changes
  useEffect(() => {
    setModelOptions(MODELS[brand as keyof typeof MODELS]);
    setModel("Any");
  }, [brand]);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    // TODO: trigger fetch with { brand, model, location, fromDate, toDate }
    console.log({ brand, model, location, fromDate, toDate });
  }

  return (
    <motion.form
      onSubmit={onSearch}
      className="grid grid-cols-1 gap-4 sm:grid-cols-4 sm:items-end max-w-7xl mx-auto px-6 py-8 bg-white rounded-xl shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Brand */}
      <div>
        <label className="block text-sm font-medium mb-1">Brand</label>
        <Select value={brand} onValueChange={setBrand}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            {BRANDS.map((b) => (
              <SelectItem key={b} value={b}>
                {b}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Model */}
      <div>
        <label className="block text-sm font-medium mb-1">Model</label>
        <Select value={model} onValueChange={setModel}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select model" />
          </SelectTrigger>
          <SelectContent>
            {modelOptions.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <Input
          placeholder="City, airport, station"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Date Range */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium mb-1">From</label>
          <div className="relative">
            <Input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full pl-10"
            />
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">To</label>
          <div className="relative">
            <Input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full pl-10"
            />
            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* Search CTA */}
      <div className="sm:col-span-4 md:col-span-1">
        <Button type="submit" className="w-full h-12 bg-neutral-700 text-white hover:bg-accent-light">
          Search
        </Button>
      </div>
    </motion.form>
  );
}
