"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Eye, EyeOff, Store, ShoppingBag, Mail, Lock, User, Phone } from "lucide-react"
import Link from "next/link"
function SignupForm({userType}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [isLoading ,setLoading] = useState(false)
  return (
    <div className=" flex flex-col items-start gap-4">
      <div className="w-full space-y-2 flex flex-col">
        <Label htmlFor={`${userType}-name`}>Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${userType}-name`}
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className=" w-full  space-y-2">
        <Label htmlFor={`${userType}-email`}>Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${userType}-email`}
            name="email"
            type="email"
            placeholder="Enter your email"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="w-full  space-y-2">
        <Label htmlFor={`${userType}-phone`}>Phone Number</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${userType}-phone`}
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="w-full  space-y-2">
        <Label htmlFor={`${userType}-password`}>Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${userType}-password`}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="pl-10 pr-10"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      <div className="w-full  space-y-2">
        <Label htmlFor={`${userType}-confirm-password`}>Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id={`${userType}-confirm-password`}
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="pl-10 pr-10"
            required
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={`${userType}-terms`}
          className="h-4 w-4 rounded border-gray-300"
          required
        />
        <Label htmlFor={`${userType}-terms`} className="text-sm font-normal">
          I agree to the{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </Label>
      </div>

      <Button type="submit" className="w-full bg-main-bg text-white" disabled={isLoading}>
        {isLoading ? "Creating account..." : `Create ${userType} account`}
      </Button>
    </div>
  );
}

export default SignupForm
