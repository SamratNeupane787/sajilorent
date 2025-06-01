import Image from "next/image";
import React from "react";

function Herosection() {
  return (
    <div className="flex flex-col items-center justify-center px-8 h-[48rem] bg-[#4141b0] sm:justify-center sm:flex-col sm:h-screen md:justify-between md:flex-row md:h-[32rem]">
      <div className="flex flex-col items-center justify-center gap-6 sm:items-center md:items-start">
        <h1 className="text-center text-7xl font-bold text-white">
          Want to Rent Something?
        </h1>
        <p className="text-2xl text-center text-white font-bold">
          Save Money, Save Space and Get the Job Done Right!
        </p>

        <div className="flex flex-row items-center justify-center gap-3 ">
          <button className="bg-[#FFD700] text-[#514c4c] px-4 py-2 rounded-md hover:bg-[#f7ce00] transition">
            Rent a Service
          </button>
          <button className="bg-[#FFD700] text-[#514c4c] px-4 py-2 rounded-md hover:bg-[#f7ce00] transition">
            Rent a Product
          </button>
        </div>
      </div>

      <div className="relative hidden sm:hidden md:block">
        <Image
          src="/HeroImage.png"
          alt="Hero"
          height={920}
          width={900}
         
        />
      </div>
    </div>
  );
}

export default Herosection;
