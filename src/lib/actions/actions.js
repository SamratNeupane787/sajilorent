import { signIn, signOut } from "next-auth/react";
export async function login(role= 'buyer') {
  document.cookie =`temp_role=${role}; path=/`;
  await signIn("google", {
    redirect: true,
    callbackUrl: `/handle-role`,
 
  });
}

export async function logout() {
  await signOut({ redirect: true, callbackUrl: "/" });}