"use server"
import { auth, signOut } from '@/auth'
import SignInBtn from '@/components/SignInBtn'
import { Button } from '@/components/ui/button'
import React from 'react'

export default async function page() {
  
    const data = await auth()
    console.log(data)
  
  
  if(data)
  return (
    <div>

      <SignInBtn/>
      
    </div>
  )
  else{
    return(<p>YOU HAVE TO SIGNIN</p>)
  }
}

