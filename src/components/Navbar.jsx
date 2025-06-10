"use client"
import { HamburgerIcon, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { AlignLeft ,X} from "lucide-react";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import SignOutBtn from './SignOutBtn';
function Navbar() {
  const [navi, setNavi] = useState(false)
  const [logout, setLogout] = useState(false)

  const handleNavi = ()=>{
    setNavi(!navi)
  }

  const {data:session} = useSession()
  console.log(session)
  return (
    <div>
      <nav className=" hidden h-[5rem] flex-row items-center justify-between mx-8 p-8 sm:hidden md:flex">
        <div>
          <Link href="/">
            <h1 className=" text-3xl text-black font-semibold">RentPasal</h1>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          {session ? (
            <div className="relative flex flex-col items-center">
              <Image
                src={session.user.image}
                width={36}
                height={36}
                alt={session?.user?.name}
                className="rounded-full cursor-pointer"
                onClick={() => setLogout((prev) => !prev)}
              />
              {logout && (
                <div className="absolute top-full mt-2 min-w-full rounded-md  shadow-lg z-10 overflow-auto">
                  <SignOutBtn />
                </div>
              )}
            </div>
          ) : (
            <button className="bg-main-bg rounded-md h-[2.5rem] px-3 text-white hover:bg-main-bg/80 focus:outline-none focus:ring-2 focus:ring-main-bg transition">
              <Link href="/sign-in" className="block">
                Login/Signup
              </Link>
            </button>
          )}

          <button className=" flex flex-row items-center gap-3 text-center rounded-md  h-[2.5rem] px-3 text--[#4141b0]">
            <ShoppingCart color="#4141b0" />
            {"(2)"}
          </button>
        </div>
      </nav>

      <nav className=" flex flex-row items-center justify-between mx-6 py-6 sm:flex md:hidden">
        <div>
          <Link href="/">
            <h1 className=" text-3xl text-black font-semibold">RentPasal</h1>
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          {session ? (
            <div className="relative flex flex-col items-center">
              <Image
                src={session.user.image}
                width={36}
                height={36}
                alt={session?.user?.name}
                className="rounded-full cursor-pointer"
                onClick={() => setLogout((prev) => !prev)}
              />
              {logout && (
                <div className="absolute top-full mt-2 min-w-full rounded-md  shadow-lg z-10 overflow-auto">
                  <SignOutBtn />
                </div>
              )}
            </div>
          ) : (
            <button className="bg-main-bg rounded-md h-[2.5rem] px-3 text-white hover:bg-main-bg/80 focus:outline-none focus:ring-2 focus:ring-main-bg transition">
              <Link href="/sign-in" className="block">
                Login/Signup
              </Link>
            </button>
           )}
          <button className=" flex flex-row items-center gap-3 text-center rounded-md  h-[2.5rem] px-3 text--[#4141b0]">
            <ShoppingCart color="#4141b0" />
            {"(2)"}
          </button>
        </div>
        {navi ? (
          <X color="#4141b0" size={32} onClick={handleNavi} />
        ) : (
          <AlignLeft color="#4141b0" size={32} onClick={handleNavi} />
        )}
      </nav>

      {navi && (
        <div className=" h-screen bg-main-bg">
          <ul className="flex flex-col items-center justify-center text-3xl text-white gap-6 pt-21">
            <li>Download App</li>
            <li>Track your Order</li>
            <li>Categories</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar
