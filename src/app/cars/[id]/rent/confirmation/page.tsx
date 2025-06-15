// src/app/cars/[id]/confirmation/page.tsx
import Link from "next/link";

export default function ConfirmationPage({ searchParams }: { searchParams: { bkg?: string } }) {
  const bookingId = searchParams.bkg;

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center space-y-6">
      <h1 className="text-3xl font-bold">Booking Confirmed!</h1>
      <p className="text-lg">
        {bookingId
          ? `Your booking ID is ${bookingId}.`
          : "Thank you for your booking."}
      </p>
      <Link href="/" className="text-black hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
