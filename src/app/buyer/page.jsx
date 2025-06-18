"use client"
import Recentorders from "@/components/Recentorders";
import Sidenav from "@/components/Sidenav";
import Totalspending from "@/components/Totalspending";
import {  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, } from "@/components/ui/card";
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
      icon: <CreditCard size={22} color="green"/>,
    },
    {
      id: 3,
      title: "WishList item",
      amount: 3,
      icon: <Heart size={22} color="red"/>,
    },
  ];

  return (
    <div className=" h-auto grid grid-cols-4 ">
      <div className=" col-span-1">
        <Sidenav />
      </div>
      <div className=" col-span-3 p-8">
        <div className=" grid grid-cols-1 gap-3  place-items-start sm:grid-cols-1 md:grid-cols-3">
          {carditem.map((item, index) => {
            return (
              <Card className="w-full flex flex-col items-start  bg-[#f0f0fc]  text-black">
                <CardHeader>
                  <CardTitle className="text-center">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=" flex flex-row items-center justify-center gap-2 font-semibold">
                    {item.icon}
                    {item.amount}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className=" pt-6">
          <Recentorders />
        </div>

        <div className=" pt-6">
          <Totalspending />
        </div>
      </div>
    </div>
  );
}
