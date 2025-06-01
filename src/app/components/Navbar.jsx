"use client"
import { HamburgerIcon, Search, ShoppingCart } from 'lucide-react'
import React, { useState } from 'react'
import { AlignLeft ,X} from "lucide-react";

function Navbar() {
  const [navi, setNavi] = useState(false)
  const handleNavi = ()=>{
    setNavi(!navi)
  }
  return (
    <div>
      <nav className=" hidden h-[5rem] flex-row items-center justify-evenly mx-8 py-8 sm:hidden md:flex">
        <div>
          <h1 className=" text-2xl text-black font-semibold">SajiloRent</h1>
        </div>
        <div className=" w-1/2 bg-slate-400 flex flex-row items-center justify-between h-[2.5rem] rounded-full px-3 ">
          <input
            placeholder="Search"
            className=" w-full border-hidden placeholder:text-[#4141b0]"
          />
          <Search color="#4141b0" />
        </div>

        <div className=" flex flex-row gap-8 items-center justify-between">
          <button className=" bg-[#4141b0] rounded-md  h-[2.5rem] px-3 text-white">
            Login/Signup
          </button>
          <button className=" flex flex-row items-center gap-3 text-center rounded-md  h-[2.5rem] px-3 text--[#4141b0]">
            <ShoppingCart color="#4141b0" />
            {"(2)"}
          </button>
        </div>
      </nav>

      <nav className=" flex flex-row items-center justify-between mx-6 py-6 sm:flex md:hidden">
        <div>
          <h1 className=" text-3xl text-black font-semibold">SajiloRent</h1>
        </div>
        <div className=" flex flex-row gap-8 items-center justify-between">
          <button className=" bg-[#4141b0] rounded-md  h-[2.5rem] px-3 text-white">
            Login/Signup
          </button>
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
        <div className=" h-screen bg-[#4141b0]">
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
