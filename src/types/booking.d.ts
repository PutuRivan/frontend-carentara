// src/types/booking.d.ts
export interface Booking {
  id: string;
  carId: string;
  start: string;
  end: string;
  days: number;
  total: number;
  fullName: string;
  contact: string;
  pickupLocation: string;
  paymentMethod: "card" | "paypal";
  status: "ongoing" | "rented";
}
