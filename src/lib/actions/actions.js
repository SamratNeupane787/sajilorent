"use server"
import { signIn, signOut } from "next-auth/react";

export async function login(role){
  await signIn('google',{callbackUrl:"/",redirect:true,role})
}

export async function logout(role){
  await signOut({redirectTo:"/"})
}