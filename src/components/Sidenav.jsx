// components/Sidenav.tsx

"use client";

import {
  BoxIcon,
  ChevronRightIcon,
  Heart,
  Home,
  Menu,
  Search,
  Star,
  X,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import SignOutBtn from "./SignOutBtn";

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const navmenu = [
    { id: "1", name: "Dashboard", icon: <Home size={20} /> },
    {
      id: "2",
      name: "Browse Products",
      icon: <Search size={20} />,
      arrow: true,
    },
    { id: "3", name: "My orders", icon: <BoxIcon size={20} />, arrow: true },
    { id: "4", name: "Wishlist", icon: <Heart size={20} /> },
    { id: "5", name: "Reviews", icon: <Star size={20} />, arrow: true },
  ];

  return (
    <>
      {/* Mobile header */}
      <div className="md:hidden p-4 bg-[#f0f0fc] flex justify-between items-center">
        <div className="flex items-center gap-2">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              width={32}
              height={32}
              alt="user"
              className="rounded-md"
            />
          )}
          <p className="font-semibold">Buyer</p>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-[#f0f0fc] z-50 p-6 flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Top section */}
        <div className="flex flex-col gap-6 items-start">
          <div className="hidden md:flex items-center gap-3">
            {session?.user?.image && (
              <Image
                src={session.user.image}
                width={36}
                height={36}
                alt="user"
                className="rounded-md"
              />
            )}
            <p className="font-semibold">Buyer</p>
          </div>

          <div className="flex flex-col gap-3 text-slate-600 w-full">
            <p className="text-sm hidden md:block">Navigation</p>
            {navmenu.map((item) => (
              <div
                key={item.id}
                className="w-full flex items-center justify-between hover:bg-slate-200 p-2 rounded cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="hidden md:inline">{item.name}</span>
                </div>
                {item.arrow && (
                  <ChevronRightIcon size={16} className="hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex items-center gap-3">
          {session?.user?.image && (
            <Image
              src={session.user.image}
              width={36}
              height={36}
              alt="user"
              className="rounded-md"
            />
          )}
          <div className="hidden md:flex flex-col items-start">
            <SignOutBtn className="w-full" />
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-40"
        />
      )}
    </>
  );
}

export default Sidenav;
