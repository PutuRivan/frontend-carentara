// src/app/cars/[id]/page.tsx
import { notFound } from "next/navigation";
import { Gallery } from "@/components/cars/detail/Gallery";
import { CarOverview } from "@/components/cars/detail/CarOverview";
import { BookingForm } from "@/components/cars/detail/BookingForm";
import { SpecsTable } from "@/components/cars/detail/SpecsTable";
import { Reviews } from "@/components/cars/detail/Reviews";
import { mockCars } from "@/data/sample/mockCars";

interface Params {
  params: { id: string };
}

export default function CarDetailPage({ params }: Params) {
  const { id } = params;
  const car = mockCars.find((c) => c.id === id);

  if (!car) {
    return notFound();
  }

  return (
    <main className="max-w-7xl mx-auto mt-16 px-6 py-12 space-y-12">
      <Gallery images={[car.imageUrl]} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CarOverview car={car} />
        <BookingForm car={car} />
      </div>

      <SpecsTable car={car} />
      <Reviews />
    </main>
  );
}
