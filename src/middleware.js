import { NextResponse} from 'next/server'
import  { NextRequest } from 'next/server'
import { auth } from './auth'


const protectedRoutes=["/seller","/profile"]

export default async function middleware(request){
  const session = await auth()
  const {pathname} = request.nextUrl
  const isProtected = protectedRoutes.some((route)=>
  pathname.startsWith(route))

  if(isProtected && !session){
    return NextResponse.redirect(new URL("/auth/sign-in", request.url))
  }

  return NextResponse.next()
  
}