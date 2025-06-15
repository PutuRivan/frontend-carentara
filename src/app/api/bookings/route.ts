// src/app/api/bookings/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

// 1. Define the expected payload schema
const bookingSchema = z.object({
  carId: z.string(),
  start: z.string().refine((d) => !isNaN(Date.parse(d)), "Invalid date"),
  end: z.string().refine((d) => !isNaN(Date.parse(d)), "Invalid date"),
  total: z.number().min(1),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const { carId, start, end, total } = bookingSchema.parse(json);

    // 2. TODO: persist booking to your database here
    // e.g. await db.booking.create({ data: { carId, start, end, total } });

    // 3. Return a 201 response
    return NextResponse.json(
      { success: true, bookingId: `bkg_${Date.now()}` },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Booking error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 }
    );
  }
}
