// src/app/api/owner/cars/[id]/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { mockCars } from "@/data/sample/mockCars";

const CarUpdateSchema = z.object({
  brand:       z.string().min(1),
  model:       z.string().min(1),
  transmission:z.enum(["Automatic","Manual"]),
  seats:       z.number().min(1),
  mileage:     z.number().min(0),
  pricePerDay: z.number().min(0),
  imageUrl:    z.string().url(),
});

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const car = mockCars.find((c) => c.id === params.id);
  if (!car) {
    return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true, car });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const json = await req.json();
    const data = CarUpdateSchema.parse({
      ...json,
      seats:       Number(json.seats),
      mileage:     Number(json.mileage),
      pricePerDay: Number(json.pricePerDay),
    });

    const idx = mockCars.findIndex((c) => c.id === params.id);
    if (idx === -1) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }

    mockCars[idx] = { ...mockCars[idx], ...data };
    return NextResponse.json({ success: true, car: mockCars[idx] });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 400 });
  }
}
