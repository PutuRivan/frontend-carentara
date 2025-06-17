import { NextRequest, NextResponse } from "next/server";
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

// Type context biar resmi:
type Context = {
  params: { id: string };
};

export async function GET(request: NextRequest, context: Context) {
  const { id } = context.params;

  const car = mockCars.find((c) => c.id === id);

  if (!car) {
    return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, car });
}

export async function PUT(req: NextRequest, context: Context) {
  try {
    const { id } = context.params;

    const json = await req.json();
    const data = CarUpdateSchema.parse({
      ...json,
      seats:       Number(json.seats),
      mileage:     Number(json.mileage),
      pricePerDay: Number(json.pricePerDay),
    });

    const idx = mockCars.findIndex((c) => c.id === id);
    if (idx === -1) {
      return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
    }

    mockCars[idx] = { ...mockCars[idx], ...data };

    return NextResponse.json({ success: true, car: mockCars[idx] });

  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 400 });
  }
}
