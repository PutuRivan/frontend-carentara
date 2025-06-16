"use client";

import { useRouter, useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/selfmade/spinner";
import { Booking } from "@/types/booking";
import { mockCars } from "@/data/sample/mockCars";

export default function ConfirmationPage() {
  const router      = useRouter();
  const { id: carId } = useParams() as { id: string };
  const params      = useSearchParams();
  const bookingId   = params.get("bkg")!;
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookingId) {
      router.replace(`/cars/${carId}`);
      return;
    }
    // Fetch the booking via our new GET endpoint
    fetch(`/api/bookings?bkg=${bookingId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: Booking) => setBooking(data))
      .catch(() => router.replace(`/cars/${carId}`))
      .finally(() => setLoading(false));
  }, [bookingId, carId, router]);

  if (loading || !booking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  const car = mockCars.find((c) => c.id === booking.carId)!;

  const markPickedUp = () => {
    // Here you could POST to update status; we'll just optimistically update
    setBooking({ ...booking, status: "rented" });
  };

  return (
    <main className="max-w-lg mx-auto px-6 py-12 space-y-6">
      <div className="text-sm text-gray-600">
        Step <span className="font-semibold">3</span> of <span className="font-semibold">3</span>: Booking Confirmed
      </div>

      <h1 className="text-2xl font-bold">Booking #{booking.id}</h1>

      <div className="p-4 bg-gray-50 rounded-lg space-y-1">
        <p><strong>Car:</strong> {car.brand} {car.model}</p>
        <p><strong>From:</strong> {booking.start} &nbsp;<strong>To:</strong> {booking.end}</p>
        <p><strong>Total:</strong> ${booking.total.toFixed(2)}</p>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg space-y-1">
        <p><strong>Name:</strong> {booking.fullName}</p>
        <p><strong>Contact:</strong> {booking.contact}</p>
        <p><strong>Pickup:</strong> {booking.pickupLocation}</p>
        <p><strong>Payment:</strong> {booking.paymentMethod === "card" ? "Credit Card" : "PayPal"}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className={`text-lg ${booking.status === "ongoing" ? "text-yellow-600" : "text-green-600"}`}>
          Status: {booking.status === "ongoing" ? "Ongoing" : "Rented"}
        </span>
        {booking.status === "ongoing" && (
          <Button onClick={markPickedUp}>I&apos;ve Picked Up the Car</Button>
        )}
      </div>

      <Button variant="outline" onClick={() => router.push("/")}>
        Back to Home
      </Button>
    </main>
  );
}
