import { CalendarDays, Search, Undo } from 'lucide-react';
import React from 'react'

function Howto() {



  return (
    <div className=" my-8 flex flex-col  items-center gap-8 ">
      <h1 className=" text-center text-3xl font-bold text-main-bg  mt-8">
        How it Works?
      </h1>
      <div>
        <div className="min-h-full grid grid-cols-1 place-items-center gap-8 sm:grid-cols-1 md:grid-cols-3 mx-4">
          <div className=" bg-main-bg text-white flex flex-col items-center p-12 gap-5 rounded-md min-w-full">
            <div className=' bg-amber-300 text-black p-3 rounded-full'>
            <Search />
            </div>
            <h1 className=" text-2xl font-bold">1. Search and Browse</h1>
            <p className="text-center">
              Find exactly what you need from many of items available for rent
              in your area.
            </p>
          </div>
          <div className=" bg-main-bg text-white flex flex-col items-center p-12 gap-5 rounded-md min-w-full">
            <div className=' bg-amber-300 text-black p-3 rounded-full'>
            <CalendarDays />
            </div>
            <h1 className=" text-2xl font-bold">2. Book and Pay</h1>
            <p className="text-center">
              Find exactly what you need from many of items available for rent
              in your area.
            </p>
          </div>
          <div className=" bg-main-bg text-white flex flex-col items-center p-12 gap-5 rounded-md min-w-full">
            <div className=' bg-amber-300 text-black p-3 rounded-full'>
              <Undo />
            </div>
            <h1 className=" text-2xl font-bold">3. Use and Return</h1>
            <p className="text-center">
              Find exactly what you need from many of items available for rent
              in your area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howto
