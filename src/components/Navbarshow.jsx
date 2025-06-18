"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const HIDDEN_PATHS = [
  "/buyer",
  "/seller",
];

export default function NavbarWrapper() {
  const pathname = usePathname();

  const hideNavbar = HIDDEN_PATHS.some((path) => pathname.startsWith(path));

  if (hideNavbar) return null;

  return <Navbar />;
}
