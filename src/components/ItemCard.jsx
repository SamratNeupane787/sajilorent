import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { MapPin, Shield, Star } from 'lucide-react';

function ItemCard() {
  const data = [
    {
      id: 1,
      title: "Camera",
      image: "/bikingwear.png",
      count: 5,
      verified: true,
    },
    {
      id: 2,
      title: "Hiking Gears",
      image: "/bikingwear.png",

      count: 3,
    },
    {
      id: 3,
      title: "Camera",
      image: "/bikingwear.png",
      count: 5,
      verified: false,
    },
    {
      id: 4,
      title: "Camera",
      image: "/bikingwear.png",
      count: 5,
      verified: true,
    },
   
  ];
  return (
    <section className="py-16 bg-[#d2d2e4] ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-main-bg">Featured Rentals</h2>
          <Button variant="outline" className="bg-main-bg text-white">
            View All
          </Button>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title || "Drone"}
                    width={300}
                    height={200}
                    className="w-full h-[10rem] object-cover rounded-t-lg"
                  />
                  {item.verified && (
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="text-right">
                    <div className="text-xl font-bold">{item.price ||"NPR 300"}</div>
                    <div className="text-sm text-muted-foreground">per day</div>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-2">
                  {item.category || 'Electronics'}
                </Badge>
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{item.rating || "4.3"}</span>
                  
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{item.location || "Kalanki, Kathmandu"}</span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-main-bg">Rent Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ItemCard;
