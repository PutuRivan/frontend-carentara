// src/app/cars/[id]/rent/page.tsx
"use client";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { mockCars, Car } from "@/data/sample/mockCars";

const rentSchema = z.object({
  fullName:       z.string().min(2, "Please enter your full name."),
  contact:        z.string().min(5, "Please enter your contact number."),
  pickupLocation: z.string().min(3, "Please enter a pickup location."),
  paymentMethod:  z.enum(["card", "paypal"], {
    errorMap: () => ({ message: "Select a payment method." }),
  }),
});

type RentForm = z.infer<typeof rentSchema>;

export default function RentDetailsPage() {
  const router = useRouter();
  const { id: carId } = useParams() as { id: string };      // ← path segment
  const params       = useSearchParams();                   // ← query string
  const start        = params.get("start") || "";
  const end          = params.get("end")   || "";

  // Find the car by its path-based ID
  const car = mockCars.find((c) => c.id === carId) as Car;
  if (!car) {
    return <p className="p-8 mt-16 text-center text-red-600">Car not found.</p>;
  }

  // Calculate days & total
  const days = useMemo(() => {
    if (!start || !end) return 1;
    const d1 = new Date(start), d2 = new Date(end);
    const diff = Math.ceil((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [start, end]);
  const total = days * car.pricePerDay;

  // Form setup
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RentForm>({
    resolver: zodResolver(rentSchema),
    defaultValues: {
      fullName:       "",
      contact:        "",
      pickupLocation: "",
      paymentMethod:  "card",
    },
  });

  // On submit, POST booking and navigate to confirmation
  const onSubmit = async (data: RentForm) => {
    const payload = { carId, start, end, days, total, ...data };

    const res = await fetch("/api/bookings", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
    const json = await res.json();
    if (res.ok) {
      router.push(`/cars/${carId}/confirmation?bkg=${json.bookingId}`);
    } else {
      alert("Booking failed: " + (json.error || res.statusText));
    }
  };

  return (
    <main className="max-w-lg mx-auto mt-16 px-6 py-12 space-y-8">
      {/* Step indicator */}
      <div className="text-sm text-gray-600">
        Step <span className="font-semibold">2</span> of <span className="font-semibold">3</span>: Your Details & Payment
      </div>

      {/* Booking summary */}
      <div className="p-4 bg-gray-50 rounded-lg space-y-1">
        <h2 className="font-semibold">Booking Summary</h2>
        <p>{car.brand} {car.model}</p>
        <p>
          <strong>From:</strong> {start} &nbsp; <strong>To:</strong> {end}
        </p>
        <p className="font-bold">${total.toFixed(2)} total</p>
      </div>

      {/* Rent details form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input {...field} className="w-full" placeholder="Your full name" />
            )}
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium mb-1">Contact Number</label>
          <Controller
            name="contact"
            control={control}
            render={({ field }) => (
              <Input {...field} className="w-full" placeholder="+1 555 123 4567" />
            )}
          />
          {errors.contact && (
            <p className="text-red-600 text-sm">{errors.contact.message}</p>
          )}
        </div>

        {/* Pickup Location */}
        <div>
          <label className="block text-sm font-medium mb-1">Pickup Location</label>
          <Controller
            name="pickupLocation"
            control={control}
            render={({ field }) => (
              <Input {...field} className="w-full" placeholder="e.g. Downtown Office" />
            )}
          />
          {errors.pickupLocation && (
            <p className="text-red-600 text-sm">{errors.pickupLocation.message}</p>
          )}
        </div>

        {/* Payment Method */}
        <div>
          <label className="block text-sm font-medium mb-1">Payment Method</label>
          <Controller
            name="paymentMethod"
            control={control}
            render={({ field }) => (
              <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-6">
                <label className="flex items-center gap-1">
                  <RadioGroupItem value="card" /> <span>Credit Card</span>
                </label>
                <label className="flex items-center gap-1">
                  <RadioGroupItem value="paypal" /> <span>PayPal</span>
                </label>
              </RadioGroup>
            )}
          />
          {errors.paymentMethod && (
            <p className="text-red-600 text-sm">{errors.paymentMethod.message}</p>
          )}
        </div>

        {/* Confirm & Pay */}
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Processing…" : "Confirm & Pay"}
        </Button>
      </form>
    </main>
  );
}
