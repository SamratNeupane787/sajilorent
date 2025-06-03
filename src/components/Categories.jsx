import Image from 'next/image';
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Armchair, CameraIcon, Laptop, Tent } from 'lucide-react';
function Categories() {

  const categories = [
    {
      id: 1,
      title: "Camera",
      icon: <CameraIcon color="#4141b0" />,count:5,
    },
    {
      id: 2,
      title: "Hiking Gears",
      image: "/bikingwear.png",
      icon: <Tent color="#4141b0" />,
      count: 3,
    },
    {
      id: 3,
      title: "Electronics",
      image: "/bikingwear.png",
      icon: <Laptop color="#4141b0" />,
      count: 4,
    },
    {
      id: 4,
      title: "Furnitures",
      image: "/bikingwear.png",
      icon: <Armchair color="#4141b0" />,
      count: 5,
    },
  ];
  return (
    <div className="  flex  flex-col items-center justify-center gap-12 sm:pt-12 md:pt-0 ">
      <div>
        <h1 className="pt-8 text-4xl font-bold text-main-bg">
          Browse By Categories
        </h1>
      </div>
      <div className="min-w-full px-8 pb-6 h[12rem] grid grid-cols-2 place-items-center gap-8 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="min-w-full mx-6 hover:shadow-lg transition-shadow cursor-pointer "
          >
            <CardContent className="p-6 flex flex-col items-center gap-3 text-lg font-semibold">
              <div>{category.icon}</div>
              <h2 className=' flex flex-wrap'>{category.title}</h2>
              <h2>{category.count}+</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Categories 
