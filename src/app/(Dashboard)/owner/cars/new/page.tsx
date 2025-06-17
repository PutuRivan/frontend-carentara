// src/app/owner/cars/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

// 1️⃣ Zod schema
const carFormSchema = z.object({
  brand:        z.string().min(1, "Brand is required"),
  model:        z.string().min(1, "Model is required"),
  year:         z
    .string()
    .regex(/^\d{4}$/, "Enter a valid year")
    .refine(
      (y) => {
        const num = Number(y);
        return num >= 1900 && num <= new Date().getFullYear();
      },
      "Enter a realistic year"
    ),
  licensePlate: z.string().min(1, "License plate is required"),
  pricePerDay:  z
    .number({ invalid_type_error: "Price is required" })
    .min(0, "Must be non‑negative"),
  description:  z.string().min(1, "Description is required"),
  city:         z.string().min(1, "City is required"),
  district:     z.string().min(1, "District is required"),
  street:       z.string().min(1, "Street is required"),
  postalCode:   z.string().regex(/^\d{5}$/, "Enter a 5‑digit postal code"),
  images:       z
    .any()
    .refine(
      (files: FileList) => files?.length > 0 && files.length <= 3,
      "Upload 1–3 images"
    ),
});
type CarForm = z.infer<typeof carFormSchema>;

export default function AddCarPage() {
  const router = useRouter();
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CarForm>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      brand:        "",
      model:        "",
      year:         "",
      licensePlate: "",
      pricePerDay:  0,
      description:  "",
      city:         "",
      district:     "",
      street:       "",
      postalCode:   "",
      images:       [],
    },
  });

  async function onSubmit(data: CarForm) {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images" && value instanceof FileList) {
        Array.from(value).forEach((file) => formData.append("images", file));
      } else {
        formData.append(key, String(value));
      }
    });

    try {
      const res = await fetch("/api/owner/cars", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || res.statusText);
      toast.success("Car added!");
      router.push("/owner/cars");
    } catch (err) {
      toast.error("Failed to add car: " + err);
    }
  }

  return (
    <motion.main
      className="max-w-lg mx-auto p-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-bold mb-6">Add New Car</h1>
      <Card>
        <CardContent className="space-y-6 p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Brand & Model */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Brand</Label>
                <Controller
                  name="brand"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Hyundai" />
                  )}
                />
                {errors.brand?.message && (
                  <p className="text-red-600 text-sm">
                    {errors.brand.message}
                  </p>
                )}
              </div>
              <div>
                <Label>Model</Label>
                <Controller
                  name="model"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Avanza" />
                  )}
                />
                {errors.model?.message && (
                  <p className="text-red-600 text-sm">
                    {errors.model.message}
                  </p>
                )}
              </div>
            </div>

            {/* Year & License */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Year</Label>
                <Controller
                  name="year"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="2021" maxLength={4} />
                  )}
                />
                {errors.year?.message && (
                  <p className="text-red-600 text-sm">{errors.year.message}</p>
                )}
              </div>
              <div>
                <Label>License Plate</Label>
                <Controller
                  name="licensePlate"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="B1234XYB" />
                  )}
                />
                {errors.licensePlate?.message && (
                  <p className="text-red-600 text-sm">
                    {errors.licensePlate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Price Per Day */}
            <div>
              <Label>Price Per Day (IDR)</Label>
              <Controller
                name="pricePerDay"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    min={0}
                    onChange={(e) =>
                      field.onChange(e.currentTarget.valueAsNumber)
                    }
                    value={field.value ?? ""}
                  />
                )}
              />
              {errors.pricePerDay?.message && (
                <p className="text-red-600 text-sm">
                  {errors.pricePerDay.message}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <Label>Description</Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Mobil Keluarga Nyaman"
                  />
                )}
              />
              {errors.description?.message && (
                <p className="text-red-600 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>City</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Jakarta Selatan" />
                  )}
                />
                {errors.city?.message && (
                  <p className="text-red-600 text-sm">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label>District</Label>
                <Controller
                  name="district"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Kebayoran Baru" />
                  )}
                />
                {errors.district?.message && (
                  <p className="text-red-600 text-sm">
                    {errors.district.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <Label>Street</Label>
              <Controller
                name="street"
                control={control}
                render={({ field }) => (
                    <Input {...field} placeholder="Jalan Raya No.1" />
                  )}
                />
              {errors.street?.message && (
                <p className="text-red-600 text-sm">{errors.street.message}</p>
              )}
            </div>
            <div>
              <Label>Postal Code</Label>
              <Controller
                name="postalCode"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="12120" maxLength={5} />
                )}
              />
              {errors.postalCode?.message && (
                <p className="text-red-600 text-sm">
                  {errors.postalCode.message}
                </p>
              )}
            </div>

            {/* Car Images (1–3 files) */}
            <div>
              <Label>Car Images (1–3 files)</Label>
              <input
                {...register("images")}
                type="file"
                accept="image/*"
                multiple
                className="mt-1 block w-full"
                onChange={(e) => {
                  register("images").onChange(e);
                  setPreviewFiles(Array.from(e.target.files || []));
                }}
              />
              {(() => {
                const raw = errors.images;
                const msg =
                  raw && typeof raw.message === "string"
                    ? raw.message
                    : undefined;
                return msg ? (
                  <p className="text-red-600 text-sm mt-1">{msg}</p>
                ) : null;
              })()}
              {previewFiles.length > 0 && (
                <ul className="mt-2 text-xs text-gray-700">
                  {previewFiles.map((f) => (
                    <li key={f.name}>{f.name}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving…" : "Add Car"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.main>
  );
}
