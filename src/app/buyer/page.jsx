"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const role = searchParams.get("role");

  useEffect(() => {
    if (role === "seller") {
      router.replace("/seller-dashboard");
    } else if (role === "buyer") {
      router.replace("/buyer");
    }
  }, [role, router]);

  return <div>Welcome</div>;
}
