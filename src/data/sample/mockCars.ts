// src/data/mockCars.ts
export interface Car {
  id: string;
  brand: string;
  model: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  mileage: number;      // miles per day
  pricePerDay: number;  // USD
  imageUrl: string;
}

export const mockCars: Car[] = [
  {
    id: "1",
    brand: "Porsche",
    model: "911 Carrera GTS",
    seats: 2,
    transmission: "Manual",
    mileage: 200,
    pricePerDay: 950,
    imageUrl: "/cars/car sample.jpg",
  },
  {
    id: "2",
    brand: "Porsche",
    model: "Taycan",
    seats: 4,
    transmission: "Automatic",
    mileage: 200,
    pricePerDay: 950,
    imageUrl: "/cars/car sample.jpg",
  },
  {
    id: "3",
    brand: "Porsche",
    model: "911 Carrera GTS",
    seats: 2,
    transmission: "Manual",
    mileage: 200,
    pricePerDay: 950,
    imageUrl: "/cars/car sample.jpg",
  },
  {
    id: "4",
    brand: "Porsche",
    model: "Taycan",
    seats: 4,
    transmission: "Automatic",
    mileage: 200,
    pricePerDay: 950,
    imageUrl: "/cars/car sample.jpg",
  },
  {
    id: "5",
    brand: "Porsche",
    model: "911 Carrera GTS",
    seats: 2,
    transmission: "Manual",
    mileage: 200,
    pricePerDay: 950,
    imageUrl: "/cars/car sample.jpg",
  },
  {
    id: "6",
    brand: "Porsche",
    model: "Taycan",
    seats: 4,
    transmission: "Automatic",
    mileage: 200,
    pricePerDay: 950,
    imageUrl: "/cars/car sample.jpg",
  },
];
