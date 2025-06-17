// src/app/owner/cars/[id]/edit/page.tsx
"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const carFormSchema = z.object({
  brand:        z.string().min(1),
  model:        z.string().min(1),
  transmission: z.enum(["Automatic", "Manual"]),
  seats:        z.number().min(1),
  mileage:      z.number().min(0),
  pricePerDay:  z.number().min(0),
  imageUrl:     z.string().url(),
});
type CarForm = z.infer<typeof carFormSchema>;

export default function EditCarPage() {
  const { id } = useParams() as { id: string };
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CarForm>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      brand:        "",
      model:        "",
      transmission: "Automatic",
      seats:        1,
      mileage:      0,
      pricePerDay:  0,
      imageUrl:     "",
    },
  });

  useEffect(() => {
    // Fetch detail mobil
    fetch(`/api/owner/cars/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          console.error("GET /api/owner/cars/" + id, res.status, text);
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          reset(json.car);
        } else {
          console.error("API returned error:", json);
          toast.error("Car not found");
          router.push("/owner/cars");
        }
      })
      .catch((err) => {
        console.error("Fetch /api/owner/cars error:", err);
        toast.error("Fetch error: " + err.message);
        // jangan otomatis redirect agar user bisa lihat error
      })
      .finally(() => setLoading(false));
  }, [id, reset, router]);

  async function onSubmit(data: CarForm) {
    try {
      const res = await fetch(`/api/owner/cars/${id}`, {
        method:  "PUT",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || json.success === false) {
        console.error("PUT /api/owner/cars/" + id, res.status, json);
        throw new Error(json.error || res.statusText);
      }
      toast.success("Car updated!");
      router.push("/owner/cars");
    } catch (err) {
      console.error("Update failed:", err);
      // toast.error("Update failed: " + err.message);
    }
  }

  if (loading) {
    return <p className="p-8 text-center">Loading…</p>;
  }

  return (
    <motion.main
      className="max-w-lg mx-auto p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-2xl font-bold mb-6">Edit Car</h1>
      <Card>
        <CardContent className="space-y-6 p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Brand */}
            <div>
              <Label>Brand</Label>
              <Controller
                name="brand"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              {errors.brand && <p className="text-red-600">{errors.brand.message}</p>}
            </div>
            {/* Model */}
            <div>
              <Label>Model</Label>
              <Controller
                name="model"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              {errors.model && <p className="text-red-600">{errors.model.message}</p>}
            </div>
            {/* Transmission */}
            <div>
              <Label>Transmission</Label>
              <Controller
                name="transmission"
                control={control}
                render={({ field }) => (
                  <select {...field} className="block w-full p-2 border rounded">
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                )}
              />
              {errors.transmission && (
                <p className="text-red-600">{errors.transmission.message}</p>
              )}
            </div>
            {/* Seats */}
            <div>
              <Label>Seats</Label>
              <Controller
                name="seats"
                control={control}
                render={({ field }) => <Input {...field} type="number" min={1} />}
              />
              {errors.seats && <p className="text-red-600">{errors.seats.message}</p>}
            </div>
            {/* Mileage */}
            <div>
              <Label>Mileage (mi/day)</Label>
              <Controller
                name="mileage"
                control={control}
                render={({ field }) => <Input {...field} type="number" min={0} />}
              />
              {errors.mileage && <p className="text-red-600">{errors.mileage.message}</p>}
            </div>
            {/* Price */}
            <div>
              <Label>Price Per Day</Label>
              <Controller
                name="pricePerDay"
                control={control}
                render={({ field }) => <Input {...field} type="number" min={0} />}
              />
              {errors.pricePerDay && (
                <p className="text-red-600">{errors.pricePerDay.message}</p>
              )}
            </div>
            {/* Image URL */}
            <div>
              <Label>Image URL</Label>
              <Controller
                name="imageUrl"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              {errors.imageUrl && <p className="text-red-600">{errors.imageUrl.message}</p>}
            </div>
            {/* Submit */}
            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating…" : "Save changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.main>
  );
}
