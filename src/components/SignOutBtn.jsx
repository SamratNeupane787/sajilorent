"use client"
import React from 'react'
import { Button } from './ui/button'
import { logout } from '@/lib/actions/auth'
function SignOutBtn() {

  return (
    <div>
      <Button onClick={()=>logout()}>Logout</Button>
    </div>
  )
}


export default SignOutBtn;
