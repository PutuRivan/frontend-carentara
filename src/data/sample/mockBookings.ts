// src/data/sample/mockBookings.ts
import { Booking } from "@/types/booking";

// A simple in‑memory array
export const mockBookings: Booking[] = [
  {
    id: "bkg_1",
    carId: "1",
    start: "2025-06-17",
    end: "2025-06-19",
    days: 2,
    total: 150,
    fullName: "John Doe",
    contact: "+1 555 123 4567",
    pickupLocation: "Downtown Office",
    paymentMethod: "card",
    status: "ongoing",
  },
  // More as needed
];
