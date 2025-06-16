// src/app/api/bookings/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { mockBookings } from "@/data/sample/mockBookings";
import { Booking } from "@/types/booking";

const bookingSchema = z.object({
  id:             z.string().optional(),
  carId:          z.string(),
  start:          z.string().refine(d => !isNaN(Date.parse(d)), "Invalid date"),
  end:            z.string().refine(d => !isNaN(Date.parse(d)), "Invalid date"),
  days:           z.number().min(1),
  total:          z.number().min(0),
  fullName:       z.string().min(2),
  contact:        z.string().min(5),
  pickupLocation: z.string().min(3),
  paymentMethod:  z.enum(["card","paypal"]),
});

// **POST**: create a new booking
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const data = bookingSchema.parse(json);

    const bookingId = `bkg_${Date.now()}`;
    const newBooking: Booking = {
      id: bookingId,
      ...data,
      status: "ongoing",
    };

    mockBookings.push(newBooking);
    return NextResponse.json({ bookingId }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}

// **GET**: fetch a booking by its ID via query `?bkg=<id>`
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("bkg");
  if (!id) {
    return NextResponse.json({ error: "Missing booking ID" }, { status: 400 });
  }
  const booking = mockBookings.find((b) => b.id === id);
  if (!booking) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(booking);
}
