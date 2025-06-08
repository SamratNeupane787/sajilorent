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
import Link from "next/link";
import SignupForm from "@/components/ui/SignupForm";
import { login } from "@/lib/actions/actions";
import Google from "next-auth/providers/google";
import { signIn } from "@/auth";

function Page() {
  const [signUp, setSignup] = useState(false);
  const [role, setRole] = useState("buyer")
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
          <Tabs defaultValue="buyer" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4 ">
              <TabsTrigger
                value="buyer"
                className="flex items-center gap-2 justify-center "
                onClick={() => setRole("buyer")}
              >
                <ShoppingBag className="h-4 w-4" />
                Buyer
              </TabsTrigger>
              <TabsTrigger
                value="seller"
                className="flex items-center gap-2 justify-center "
                onClick={() => setRole("seller")}
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
              <Button
                variant="outline"
                className="w-full bg-main-bg text-white"
                onClick={() => signIn(role)}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>
              {/* <SignupForm userType="buyer" /> */}
            </TabsContent>

            <TabsContent value="seller" className="space-y-4 mt-6">
              <div className="text-center space-y-2">
                <Store className="h-12 w-12 mx-auto text-green-600" />
                <h3 className="text-lg font-semibold">Seller SignUp</h3>
              </div>
              <Button
                variant="outline"
                className="w-full bg-main-bg text-white"
                onClick={() => login(role)}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </Button>
              {/* <SignupForm userType="seller" /> */}
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Separator />
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
