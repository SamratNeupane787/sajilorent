import { BoxIcon, ChevronRightIcon, Heart, Home, Search, Star } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import SignOutBtn from './SignOutBtn';

function Sidenav() {
  const navmenu = [
    {
      id: "1",
      name: "Dashboard",
      icon: <Home size={18} />,
    },
    {
      id: "2",
      name: "Browse Products",
      icon: <Search size={18} />,
      arrow: true,
    },
    {
      id: "3",
      name: "My orders",
      icon: <BoxIcon size={18} />,
      arrow: true,
    },
    {
      id: "4",
      name: "Wishlist",
      icon: <Heart size={18} />,
    },
    {
      id: "5",
      name: "Reviews",
      icon: <Star size={18} />,
      arrow:true
    },
  ];


  const {data:session} = useSession()

  console.log(session)
  return (
    <div className="min-h-full min-w-fit flex flex-col  p-6 items-start justify-between   bg-[#f0f0fc]">
      <div className=" flex flex-col gap-6 items-start ">
        <div className=" flex flex-row gap-3 items-center">
          <Image
            src={session?.user?.image}
            width={36}
            height={36}
            alt="userimage"
            className=" rounded-md"
          />
          <p className="font-semibold">Buyer</p>
        </div>
        <div className="flex flex-col gap-3 text-slate-600 ">
          <p className=" text-sm">Navigation</p>
          {navmenu.map((item, index) => {
            return (
              <div
                className="min-w-full flex flex-row  gap-3 items-center justify-between hover:bg-slate-200  duration-75 cursor-pointer"
                key={item.id}
              >
                <div className=" flex flex-row items-center gap-3">
                  <h1>{item.icon} </h1>
                  <h1>{item.name}</h1>
                </div>
                {item.arrow && <ChevronRightIcon size={16} />}
              </div>
            );
          })}
        </div>
      </div>

      <div className=" flex flex-row gap-3 items-center ">
        <Image
          src={session?.user?.image}
          width={36}
          height={36}
          alt="userimage"
          className=" rounded-md"
        />
        <div className=' flex flex-col items-start'>
         <SignOutBtn className='min-w-full'/>
        </div>
      </div>
    </div>
  );
}

export default Sidenav
