import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from 'next/image';
import { Badge } from './ui/badge';
import { CheckCircle } from 'lucide-react';
function Recentorders() {
  const orders = [
    {
      id: 1,
      image: "/bikingwear.png",
      name: "PS5",
      vendor: "Techworld",
      Amount: 223,
      Status: "Delivered",
      date: "2024-01-26",
    },
    {
      id: 2,
      image: "/bikingwear.png",
      name: "PS5",
      vendor: "Techworld",
      Amount: 223,
      Status: "Not completed",
      date: "2024-01-26",
    },
    {
      id: 3,
      image: "/HeroImage.png",
      name: "PS5",
      vendor: "Techworld",
      Amount: 223,
      Status: "Not completed",
      date: "2024-01-26",
    },
    {
      id: 4,
      image: "/HeroImage.png",
      name: "PS5",
      vendor: "Techworld",
      Amount: 223,
      Status: "Delivered",
      date: "2024-01-26",
    },
  ];
  return (
    <div className=" border rounded-md p-4 h-auto">
      <div className=" flex flex-col gap-1">
        <h1 className=" text-xl font-bold">Recent Orders</h1>
        <p className=" text-sm text-[#919197]">
          Your latest purchase and their current Status
        </p>
      </div>
      <div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((item, index) => {
              return (
                <TableRow  key={item.id}>
                  <TableCell className="font-medium">
                    <Image
                      src={item.image}
                      height={32}
                      width={32}
                      className="rounded-full "
                      alt={item.name}
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.vendor}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        item.Status == "Delivered"
                          ? "bg-green-300 text-balck"
                          : "bg-red-600 "
                      }
                    >
                      <CheckCircle size={12} />
                      {item.Status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    NPR {item.Amount}
                  </TableCell>

                  <TableCell className="text-right">
                    {item.date}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Recentorders
