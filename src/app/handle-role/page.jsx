"use client"
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function HandleRole() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // wait for session to load

    if (!session) {
      // Not logged in? Redirect to sign-in
      router.replace("/sign-in");
      return;
    }

    // Get role from session user (assuming you added role to session)
    const role = session.user.role || "buyer";

    


    // Redirect based on role
    if (role === "seller") {
      router.replace("/seller");
    } else {
      router.replace("/buyer");
    }
  }, [session, status, router]);

  return <div>Redirecting...</div>;
}
