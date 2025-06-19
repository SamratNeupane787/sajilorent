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
import { ShoppingCart, TrendingUp } from 'lucide-react';
function Totalspending() {
  return (
    <div className="h-auto">
      <Card className="w-full h-[21rem]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Spending Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className=" flex flex-col items-start p-1 gap-6">
            <div>
              <div className=" flex flex-row items-center gap-5">
                <TrendingUp size={16} color="green" />
                <p>Total Spending</p>
                <h1>NPR 333</h1>
              </div>
            </div>
            <div className=" flex flex-row items-center gap-5">
              <ShoppingCart size={16} color="blue" />
              <p>Orders this month</p>
              <h1>12</h1>
            </div>
            <div className=" flex flex-row items-center gap-5">
              <TrendingUp size={16} color="green" />
              <p>Favourite Category</p>
              <h1>Electronics</h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Totalspending
