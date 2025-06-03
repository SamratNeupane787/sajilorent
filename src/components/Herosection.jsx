import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function Herosection() {
  return (
    <div className="flex flex-col items-center justify-center  px-8 gap-8 h-[48rem] bg-main-bg sm:justify-center sm:flex-col sm:h-screen md:justify-center md:flex-row md:h-[32rem]">
      <div className="flex  flex-col items-center justify-center gap-12 ">
        <h1 className=" font-sans text-center text-7xl font-bold text-white">
          Why Buy? Just <span className=" text-black">Rent.</span>
        </h1>
        <p className="font-sans text-2xl text-center text-white ">
          From Cameras to Hiking and Biking Gears. Find what you need easily!
        </p>

        <div className="bg-white min-w-full mx-28  rounded-md p-4 gap-4 flex flex-col items-center justify-center sm:flex-col sm:min-w-full md:flex-row md:w-1/2">
          <div className=" w-full sm:w-full md:w-full text-primary">
            <Input placeholder="What are you looking for ?" className="h-12" />
          </div>

          <Select>
            <SelectTrigger className="w-full  !h-12 !py-2 !px-3 sm:w-full md:w-1/2">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new-york">Kathmandu</SelectItem>
              <SelectItem value="los-angeles">Bhaktapur</SelectItem>
              <SelectItem value="chicago">Lalitpur</SelectItem>
            </SelectContent>
          </Select>

          <div className="w-full sm:w-full md:w-1/2">
            <Button className=" w-full h-12 bg-main-bg">
              <Search />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
