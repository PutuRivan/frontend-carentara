"use client";

import { motion } from "framer-motion";

export default function OwnerHomePage() {
  return (
    <motion.main
      className="p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold mb-4">Owner Dashboard</h1>
      <p className="text-gray-600">
        Welcome back! Here you can manage your cars, view bookings, and update
        your profile.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Total Cars", value: "—" },
          { label: "Upcoming Bookings", value: "—" },
          { label: "Total Earnings", value: "—" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg p-6 shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-medium">{stat.label}</h2>
            <p className="mt-2 text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </motion.main>
  );
}
