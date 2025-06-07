import React, { useState } from 'react'
import { Input } from './input'
import { Label } from '@radix-ui/react-label'
import { Eye, EyeOff, Mail,Lock } from 'lucide-react'
import { Button } from './button'
function LoginForm({userType, signIn}) {
  const [email, setEmail]= useState("")
  const [password, setPassowrd] = useState("")
  const [showPassword, setShowPassowrd] = useState(false)
   
  return (
    <div className="flex flex-col items-center gap-5 min-w-full">
      <div className="min-w-full  flex flex-col items-start gap-3">
        <Label className="text-black ">Email</Label>
        <Input placeholder="Enter your Email" className="rounded-md" />
      </div>
      <div className="min-w-full  flex flex-col items-start gap-3">
        <Label className="text-black ">Password</Label>
        <Input placeholder="Enter your Password" className="rounded-md" />
      </div>
      <div className=' min-w-full'>
        <Button className="bg-main-bg min-w-full">Sign in as {userType}</Button>
      </div>
    </div>
  );
}

export default LoginForm
