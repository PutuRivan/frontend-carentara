// src/app/api/owner/cars/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const carSchema = z.object({
  brand:        z.string().min(1),
  model:        z.string().min(1),
  year:         z.string().regex(/^\d{4}$/),
  licensePlate: z.string().min(1),
  pricePerDay:  z.number().min(0),
  description:  z.string().min(1),
  city:         z.string().min(1),
  district:     z.string().min(1),
  street:       z.string().min(1),
  postalCode:   z.string().regex(/^\d{5}$/),
  // images we won’t validate in-depth here
});

export async function POST(req: Request) {
  try {
    // 🍵 parse as FormData
    const form = await req.formData();

    // pull out each field, coercing numbers where needed
    const payload = {
      brand:        form.get("brand"),
      model:        form.get("model"),
      year:         form.get("year"),
      licensePlate: form.get("licensePlate"),
      pricePerDay:  Number(form.get("pricePerDay")),
      description:  form.get("description"),
      city:         form.get("city"),
      district:     form.get("district"),
      street:       form.get("street"),
      postalCode:   form.get("postalCode"),
      // images: keep form.get("images") around if you’ll actually store files
    };

    // validate zod
    const data = carSchema.parse(payload);

    // pretend to save…
    const newCar = { id: Date.now().toString(), ...data };
    // e.g. mockCars.push(newCar) or real DB write

    return NextResponse.json({ success: true, car: newCar }, { status: 201 });
  } catch (err: any) {
    console.error("🚨 error in POST /api/owner/cars:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Bad Request" },
      { status: 400 }
    );
  }
}
