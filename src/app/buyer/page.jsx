"use client";

import QuickActions from "@/components/QuickActions";
import Recentorders from "@/components/Recentorders";
import Sidenav from "@/components/Sidenav";
import Totalspending from "@/components/Totalspending";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Heart, ShoppingCart } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get("role");

  useEffect(() => {
    if (role === "seller") {
      router.replace("/seller-dashboard");
    } else if (role === "buyer") {
      router.replace("/");
    }
  }, [role, router]);

  const carditem = [
    {
      id: 1,
      title: "Total Orders",
      amount: 123,
      icon: <ShoppingCart size={22} color="blue" />,
    },
    {
      id: 2,
      title: "Total Spent",
      amount: "NPR 332",
      icon: <CreditCard size={22} color="green" />,
    },
    {
      id: 3,
      title: "WishList item",
      amount: 3,
      icon: <Heart size={22} color="red" />,
    },
  ];

  return (
    <div className="min-h-screen md:grid md:grid-cols-4">
      <div className="hidden md:block md:col-span-1">
        <Sidenav />
      </div>


      <div className="block md:hidden md:col-span-1">
        <Sidenav />
      </div>
      <div className="col-span-3 p-4 md:p-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {carditem.map((item) => (
            <Card key={item.id} className="w-full bg-[#f0f0fc] text-black">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex items-center gap-2 font-semibold">
                  {item.icon}
                  {item.amount}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="pt-6">
          <Recentorders />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          <Totalspending />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
