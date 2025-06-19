import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard, Heart, Package, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
function QuickActions() {
  return (
    <div className="h-auto">
      <Card className="w-full h-[21rem]">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full justify-start" variant="outline">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Browse Products
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Package className="mr-2 h-4 w-4" />
            Track Orders
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Heart className="mr-2 h-4 w-4" />
            View Wishlist
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <CreditCard className="mr-2 h-4 w-4" />
            Payment Methods
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuickActions;
