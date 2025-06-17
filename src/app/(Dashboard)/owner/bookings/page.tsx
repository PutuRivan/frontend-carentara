import React from "react";
import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "My Rentals",
  description: "List of rented cars",
};

interface Rental {
  id: string;
  vehicle: string;
  status: "PENDING" | "CONFIRMED" | "ONGOING" | "COMPLETED" | "CANCELLED";
  pickupArea: string;
  pickupTime: string;
  customer: string;
  amount: string;
  invoice: string;
}

const mockData: Rental[] = [
  {
    id: "1",
    vehicle: "Mercedez 220 - 15",
    status: "PENDING",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "2",
    vehicle: "Mercedez 220 - 15",
    status: "CONFIRMED",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "3",
    vehicle: "Mercedez 220 - 15",
    status: "ONGOING",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "4",
    vehicle: "Mercedez 220 - 15",
    status: "COMPLETED",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "5",
    vehicle: "Mercedez 220 - 15",
    status: "CANCELLED",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "6",
    vehicle: "Mercedez 220 - 15",
    status: "PENDING",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "7",
    vehicle: "Mercedez 220 - 15",
    status: "CONFIRMED",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "8",
    vehicle: "Mercedez 220 - 15",
    status: "ONGOING",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "9",
    vehicle: "Mercedez 220 - 15",
    status: "COMPLETED",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
  {
    id: "10",
    vehicle: "Mercedez 220 - 15",
    status: "CANCELLED",
    pickupArea: "4517 Washington Ave",
    pickupTime: "Dec 30, 2019 05:18",
    customer: "Courtney Henry",
    amount: "$450",
    invoice: "1641617565",
  },
];

function getStatusClasses(status: Rental["status"]) {
  switch (status) {
    case "PENDING":
      return "bg-yellow-100 text-yellow-800";
    case "CONFIRMED":
      return "bg-blue-100 text-blue-800";
    case "ONGOING":
      return "bg-purple-100 text-purple-800";
    case "COMPLETED":
      return "bg-green-100 text-green-800";
    case "CANCELLED":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export default function RentalsPage() {
  return (
    <div className="flex w-full">
      <Card className="w-full p-6 space-y-6">
        <CardHeader className="flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Rentals</CardTitle>
            <div className="flex space-x-3">
              <Button variant="outline" className="px-4 py-2">
                Filter
              </Button>
              <Button className="px-4 py-2">Exports</Button>
              <Button className="px-4 py-2">+ Add Reservation</Button>
            </div>
          </div>
          <div className="flex space-x-4">
            <Input
              placeholder="Search rented car, contacts"
              className="flex-1 px-4 py-2"
            />
            <Select>
              <SelectTrigger className="w-[200px] px-4 py-2">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PENDING">PENDING</SelectItem>
                <SelectItem value="CONFIRMED">CONFIRMED</SelectItem>
                <SelectItem value="ONGOING">ONGOING</SelectItem>
                <SelectItem value="COMPLETED">COMPLETED</SelectItem>
                <SelectItem value="CANCELLED">CANCELLED</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[32px] px-4 py-3">
                  <input type="checkbox" />
                </TableHead>
                <TableHead className="px-4 py-3">Vehicle</TableHead>
                <TableHead className="px-4 py-3">Status</TableHead>
                <TableHead className="px-4 py-3">Pickup Area</TableHead>
                <TableHead className="px-4 py-3">Pickup Time</TableHead>
                <TableHead className="px-4 py-3">Customer</TableHead>
                <TableHead className="px-4 py-3">Amount</TableHead>
                <TableHead className="px-4 py-3">Invoice</TableHead>
                <TableHead className="px-4 py-3 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((rental) => (
                <TableRow key={rental.id} className="hover:bg-gray-50">
                  <TableCell className="px-4 py-3">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell className="px-4 py-3 font-medium">
                    {rental.vehicle}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusClasses(
                        rental.status
                      )}`}
                    >
                      {rental.status}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    {rental.pickupArea}
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    {rental.pickupTime}
                  </TableCell>
                  <TableCell className="px-4 py-3">{rental.customer}</TableCell>
                  <TableCell className="px-4 py-3">{rental.amount}</TableCell>
                  <TableCell className="px-4 py-3">{rental.invoice}</TableCell>
                  <TableCell className="px-4 py-3 text-right">…</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-600">
            Showing 1 - {mockData.length} of 40 cars
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="px-4 py-2">
              Previous
            </Button>
            <Button variant="outline" className="px-4 py-2">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
