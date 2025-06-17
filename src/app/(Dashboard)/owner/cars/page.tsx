// src/app/owner/cars/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon, EditIcon, TrashIcon, PlusIcon } from "lucide-react";
import { mockCars as allCars, Car } from "@/data/sample/mockCars";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

export default function OwnerCarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    // simulate fetch
    setTimeout(() => {
      setCars(allCars);
    }, 300);
  }, []);

  function handleRemoveClick(id: string) {
    setOpenId(id);
  }

  function handleDialogClose() {
    setOpenId(null);
  }

  function handleConfirmRemove() {
    if (!openId) return;
    setCars((prev) => prev.filter((c) => c.id !== openId));
    setOpenId(null);
  }

  return (
    <main className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Cars</h1>
        <Link href="/owner/cars/new">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <PlusIcon className="w-4 h-4" /> Add Car
          </Button>
        </Link>
      </div>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">You have no cars yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-40 w-full">
                    <Image
                      src={car.imageUrl}
                      alt={`${car.brand} ${car.model}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <h2 className="text-lg font-semibold">
                    {car.brand} {car.model}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {car.transmission} • {car.seats} seats
                  </p>
                  <p className="mt-2 font-bold">${car.pricePerDay}/day</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Link href={`/owner/cars/${car.id}/edit`}>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1">
                      <EditIcon className="w-4 h-4" /> Edit
                    </Button>
                  </Link>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-1">
                        <MoreHorizontalIcon className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onSelect={() => handleRemoveClick(car.id)}>
                        <TrashIcon className="w-4 h-4 mr-2" /> Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Controlled AlertDialog outside the list */}
      <AlertDialog open={openId !== null} onOpenChange={openId === null ? undefined : handleDialogClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm removal</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to remove this car? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="space-x-2">
            <AlertDialogCancel onClick={handleDialogClose}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 text-white hover:bg-red-700" onClick={handleConfirmRemove}>
              Yes, remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
