"use client"
import React from 'react'
import { Button } from './ui/button'
import { login } from '@/lib/actions/actions'
function SigninBtn() {

  return (
    <div>
      <Button onClick={()=>login()}>Login</Button>
    </div>
  )
}


export default SigninBtn;
