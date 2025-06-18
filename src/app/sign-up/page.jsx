"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ShoppingBag, Store } from "lucide-react";
import SigninBtn from "@/components/SignInBtn";

function Page() {
  const [role, setRole] = useState("buyer");

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-8 bg-white gap-6 sm:h-screen md:min-h-full">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-main-bg">
          Get Started
        </h2>
        <p className="mt-2 text-sm text-gray-600">Start your Passive Income</p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl text-center">Sign Up</CardTitle>
          <CardDescription className="text-center">
            Choose your account type to continue
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="buyer" onValueChange={setRole} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger
                value="buyer"
                className="flex items-center gap-2 justify-center"
              >
                <ShoppingBag className="h-4 w-4" />
                Buyer
              </TabsTrigger>
              <TabsTrigger
                value="seller"
                className="flex items-center gap-2 justify-center"
              >
                <Store className="h-4 w-4" />
                Seller
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buyer" className="space-y-4 mt-6">
              <div className="text-center space-y-2">
                <ShoppingBag className="h-12 w-12 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold">Buyer Signup</h3>
              </div>
            </TabsContent>

            <TabsContent value="seller" className="space-y-4 mt-6">
              <div className="text-center space-y-2">
                <Store className="h-12 w-12 mx-auto text-green-600" />
                <h3 className="text-lg font-semibold">Seller SignUp</h3>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-4">
            <SigninBtn role={role} />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Separator />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
